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
  metadataBase: new URL("https://www.killeurusd.com"),
  title: "KILLEUR USD | Formation Trading Premium & Méthode d’Analyse Technique",
  description: "Arrête de trader au hasard. Rejoins KILLEUR USD et maîtrise une méthode d’analyse technique fondée sur des principes éprouvés depuis plus de 100 ans.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "KILLEUR USD | Formation Trading Premium",
    description: "Une méthode réelle, un cadre sérieux, un accompagnement privé pour sortir du trading au hasard.",
    url: "https://www.killeurusd.com",
    siteName: "KILLEUR USD",
    type: "website",
    locale: "fr_FR",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "KILLEUR USD | Formation Trading Premium",
    description: "Une méthode réelle, un cadre sérieux, un accompagnement privé pour sortir du trading au hasard.",
  },
};

// Données structurées (JSON-LD) — décrit la marque et la formation aux moteurs & IA.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "KILLEUR USD",
      url: "https://www.killeurusd.com",
      logo: "https://www.killeurusd.com/logo.png",
    },
    {
      "@type": "Course",
      name: "KILLEUR USD — Formation Trading Premium",
      description:
        "Méthode d’analyse technique, gestion du risque et discipline d’exécution, avec accompagnement privé.",
      provider: {
        "@type": "Organization",
        name: "KILLEUR USD",
        url: "https://www.killeurusd.com",
      },
      offers: {
        "@type": "Offer",
        price: "997",
        priceCurrency: "USD",
        category: "Formation",
      },
    },
  ],
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
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
