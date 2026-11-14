'use client';

import { useEffect, useState } from 'react';
import { participantApi, config, type SessionInfo } from '../lib/api';

export type ResultStatus = 'complete' | 'terminate' | 'quotafull' | 'securityfail';

export function useResultScreen(status: ResultStatus, sessionId: string) {
  const [session, setSession] = useState<SessionInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    if (!sessionId) {
      setLoading(false);
      return;
    }
    participantApi
      .getSession(sessionId)
      .then(setSession)
      .catch(() => setSession(null))
      .finally(() => setLoading(false));
  }, [sessionId]);

  const handleRedirect = async () => {
    if (!sessionId) {
      window.location.href = config.fallbackUrl;
      return;
    }
    setRedirecting(true);
    try {
      const data = await participantApi.getVendorRedirect({
        sessionId,
        status: status === 'securityfail' ? 'security' : status,
      });
      window.location.href = data?.vendorUrl || config.fallbackUrl;
    } catch {
      window.location.href = config.fallbackUrl;
    }
  };

  const handleClose = () => {
    window.close();
    window.location.href = config.fallbackUrl;
  };

  const handleContactSupport = () => {
    const subject = encodeURIComponent('Security Flag');
    window.location.href = `mailto:${config.supportEmail}?subject=${subject}`;
  };

  const surveyId = session?.surveyId || 'ZP-4471';
  const participantId = session?.participantId || 'PID8821';
  const completedAt = session?.completedAt
    ? new Date(session.completedAt).toLocaleString('en-US', {
        timeZone: 'UTC',
        hour12: false,
      })
    : new Date().toLocaleString('en-US', {
        timeZone: 'UTC',
        hour12: false,
      });
  const reference = session?.id ? `SEC-${session.id.slice(-5)}` : 'SEC-88213';

  return {
    session,
    loading,
    redirecting,
    handleRedirect,
    handleClose,
    handleContactSupport,
    surveyId,
    participantId,
    completedAt,
    reference,
  };
}