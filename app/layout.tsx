import type { Metadata } from 'next';
// @ts-ignore -- Next.js handles global CSS imports through its bundler.
import './globals.css';

export const metadata: Metadata = {
  title: 'Survey Status',
  description: 'Survey response status',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const stored = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (stored === 'dark' || (!stored && prefersDark)) {
                  document.documentElement.classList.add('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="bg-[#f4f7f6] dark:bg-gray-900">{children}</body>
    </html>
  );
}