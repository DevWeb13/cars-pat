import { ActiveLinkProvider } from "@/contexts/ActiveLinkContext";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local"; // Importez localFont
import { StrictMode } from "react";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  variable: "--inter-font",
  subsets: ["latin"],
  display: "swap",
});
const local = localFont({
  src: "./fonts/birdsOfParadise.ttf",
  variable: "--local-font",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Garage Cars Pat : Carrosserie et Atelier de Réparation | Mazargues",
  description:
    "Votre garage Cars Pat à Mazargues, Marseille, offre des services de carrosserie, peinture et atelier de réparation de confiance. Redonnez éclat à votre véhicule.",
  metadataBase: new URL("https://www.cars-pat.fr"),
  alternates: {
    canonical: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garage Cars Pat : Carrosserie et Atelier de Réparation | Mazargues",
    description:
      "Votre garage Cars Pat à Mazargues, Marseille, offre des services de carrosserie, peinture et atelier de réparation de confiance. Redonnez éclat à votre véhicule.",
    creator: "contact@lareponsedev.fr",
    images: ["/twitter-image.jpg"],
  },
};

interface Props {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StrictMode>
      <html
        lang="fr"
        suppressHydrationWarning={true}
        className={`${inter.variable} ${local.variable}`}
      >
        <body>
          <ActiveLinkProvider>{children}</ActiveLinkProvider>
          <Analytics />
        </body>
      </html>
    </StrictMode>
  );
}
