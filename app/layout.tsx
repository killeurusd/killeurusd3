import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KILLEUR USD | Formation Trading Premium & Méthode d’Analyse Technique",
  description: "Arrête de trader au hasard. Rejoins KILLEUR USD et maîtrise une méthode d’analyse technique fondée sur des principes éprouvés depuis plus de 100 ans.",
  openGraph: {
    title: "KILLEUR USD | Formation Trading Premium",
    description: "Une méthode réelle, un cadre sérieux, un accompagnement privé pour sortir du trading au hasard.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}