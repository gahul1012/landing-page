import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'EVO — Stream Beyond | Video Streaming Platform',
  description:
    'EVO (Equitable Visual Originals) — next-generation video streaming platform with 4K HLS adaptive playback, creator channel studio, and native mobile apps for iOS & Android.',
  keywords: ['EVO', 'Equitable Visual Originals', 'video streaming', 'HLS', 'creator studio', '4K streaming', 'mobile video app'],
  authors: [{ name: 'EVO Team' }],
  openGraph: {
    title: 'EVO — Stream Beyond',
    description: 'Discover unlimited movies, originals and creator content. Stream in 4K. Anywhere.',
    url: 'https://evo.stream',
    siteName: 'EVO — Equitable Visual Originals',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EVO — Stream Beyond',
    description: 'Discover unlimited movies, originals and creator content. Stream in 4K. Anywhere.',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-brand-black text-white min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
