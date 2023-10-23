import type { Metadata } from 'next';

import Header from '@/components/container/Header/Header';
import Main from '@/components/layout/Main/Main';
import PreHeader from '@/components/PreHeader/PreHeader';
import Footer from '@/components/container/Footer/Footer';

export const metadata: Metadata = {
  title: 'Cars Pat - Mentions légales',
  description:
    "Mentions légales du site web de l'entreprise de carrosserie peinture automobile Cars Pat à Marseille Mazargues 13009",
};

interface Props {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <>
      <PreHeader />
      <Header page='legalNotice' />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
