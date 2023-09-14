import { ActiveLinkProvider } from '@/contexts/ActiveLinkContext';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from './components/Header/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cars Pat',
  description:
    "Découvrez Cars Pat, votre carrosserie-peinture de confiance à Marseille 13009. Une entreprise familiale dédiée à redonner éclat et sécurité à votre véhicule. Prenez rendez-vous dès aujourd'hui !",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='fr'
      suppressHydrationWarning={true}>
      <body className={inter.className}>
        <ActiveLinkProvider>
          <Header />
          {children}
        </ActiveLinkProvider>
      </body>
    </html>
  );
}
