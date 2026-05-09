import type { Metadata } from 'next';
import './globals.css';
import { LangProvider } from '@/context/LangContext';
import { LangHtmlSync } from '@/components/LangHtmlSync/LangHtmlSync';
import { Nav } from '@/components/Nav/Nav';
import { Footer } from '@/components/Footer/Footer';

export const metadata: Metadata = {
  title: {
    template: '%s | Mongolian Archery Organization',
    default: 'Mongolian Archery Organization',
  },
  description:
    'Preserving and promoting traditional Mongolian archery in the United States. Join our community for authentic practice, events, and cultural celebration.',
  keywords:
    'Mongolian archery, нум сум, Naadam, traditional archery, archery practice',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['mn_MN'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=DM+Sans:wght@400;500;600;700&family=Noto+Sans+Mongolian:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LangProvider>
          <LangHtmlSync />
          <Nav />
          <main>{children}</main>
          <Footer />
        </LangProvider>
      </body>
    </html>
  );
}
