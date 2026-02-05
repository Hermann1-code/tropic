import React from "react";
import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";

import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Hôtel Tropic Daloa – Confort & Sérénité au Cœur de Daloa",
  description:
    "Découvrez l'Hôtel Tropic Daloa, votre havre de paix en Côte d'Ivoire. Chambres modernes, service professionnel, Wi-Fi gratuit, restaurant et bar. Réservez maintenant!",
  keywords: [
    "hôtel Daloa",
    "hébergement Côte d'Ivoire",
    "hôtel Tropic",
    "séjour Daloa",
    "chambre hôtel",
  ],
  openGraph: {
    title: "Hôtel Tropic Daloa – Confort & Sérénité",
    description:
      "Votre séjour idéal entre élégance et hospitalité à Daloa, Côte d'Ivoire",
    type: "website",
    locale: "fr_CI",
  },
};

export const viewport: Viewport = {
  themeColor: "#3d6b4f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${outfit.variable} scroll-smooth`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
