const API_BASE_URL =
  process.env.NEXT_PUBLIC_PARTICIPANT_API_URL ||
  'https://participant.quadsupreme.com/api';

const FALLBACK_URL = process.env.NEXT_PUBLIC_FALLBACK_URL || '/';

export const config = {
  apiBaseUrl: API_BASE_URL,
  fallbackUrl: FALLBACK_URL,
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || 'support@quadsupreme.com',
};

type ApiResponse<T> = { success: boolean; message: string; data: T };

function extractData<T>(response: unknown): T {
  const res = response as ApiResponse<T>;
  return res?.data !== undefined ? res.data : (res as T);
}

export interface SessionInfo {
  id: string;
  participantId: string;
  surveyId: string;
  vendorId: string | null;
  status: string;
  progress: number;
  startedAt: string;
  completedAt: string | null;
}

export interface VendorRedirectResponse {
  vendorUrl: string;
}

export const participantApi = {
  async getSession(sessionId: string): Promise<SessionInfo> {
    const res = await fetch(
      `${API_BASE_URL}/participant/session/${encodeURIComponent(sessionId)}`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        cache: 'no-store',
      },
    );
    if (!res.ok) throw new Error(`Failed to fetch session: ${res.status}`);
    const json = await res.json();
    return extractData<SessionInfo>(json);
  },

  async getVendorRedirect(params: {
    sessionId: string;
    status: string;
  }): Promise<{ vendorUrl: string } | null> {
    try {
      const url =
        `${API_BASE_URL}/participant/vendor-redirect` +
        `?sessionId=${encodeURIComponent(params.sessionId)}` +
        `&status=${encodeURIComponent(params.status)}`;

      const res = await fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        cache: 'no-store',
      });

      if (!res.ok) {
        console.warn(`[vendor-redirect] HTTP ${res.status} for status=${params.status}`);
        return null;
      }

      const json: any = await res.json();
      const vendorUrl = json?.data?.vendorUrl ?? json?.vendorUrl ?? null;

      if (vendorUrl) return { vendorUrl };
      console.warn(`[vendor-redirect] No vendorUrl in payload for status=${params.status}`, json);
      return null;
    } catch (err) {
      console.error('[vendor-redirect] fetch failed', err);
      return null;
    }
  },
};