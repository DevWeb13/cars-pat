import { ActiveLinkProvider } from '@/contexts/ActiveLinkContext';
import './globals.css';
import { StrictMode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local'; // Importez localFont

import { Analytics } from '@vercel/analytics/react';

const inter = Inter({
  variable: '--inter-font',
  subsets: ['latin'],
  display: 'swap',
});
const local = localFont({
  src: './fonts/birdsOfParadise.ttf',
  variable: '--local-font',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Cars Pat',
  description:
    'Cars Pat à Mazargues, Marseille 13009 : carrosserie-peinture de confiance. Redonnez éclat à votre véhicule. Rendez-vous maintenant !',
  metadataBase: new URL('https://www.cars-pat.fr'),
  alternates: {
    canonical: '/',
  },
};

interface Props {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StrictMode>
      <html
        lang='fr'
        suppressHydrationWarning={true}
        className={`${inter.variable} ${local.variable}`}>
        <body>
          <ActiveLinkProvider>{children}</ActiveLinkProvider>
          <Analytics />
        </body>
      </html>
    </StrictMode>
  );
}
