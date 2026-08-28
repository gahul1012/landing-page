import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'EVO — Equitable Visual Originals | Watch Bold. Watch Original.',
  description:
    'EVO (Equitable Visual Originals) — next-generation indie video streaming platform with 4K HLS adaptive playback, creator channel studio, and native mobile apps for iOS & Android.',
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
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800;900&family=Montserrat:wght@600;700;800;900&family=DM+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-slate-900 min-h-screen antialiased selection:bg-[#E31B23] selection:text-white">
        {children}
      </body>
    </html>
  );
}
