import type { Metadata } from 'next';

import Header from '@/components/Header/Header';
import Main from '@/components/layout/Main/Main';

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
      <Header page='legalNotice' />
      <Main>{children}</Main>
    </>
  );
}
