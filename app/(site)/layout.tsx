import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Banner from "../_site/Banner";
import Header from "../_site/Header";
import Footer from "../_site/Footer";
import Consent from "../_site/Consent";
import Motion from "../_site/Motion";
import ChatWidget from "../components/ChatWidget";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.killeurusd.com"),
  title: "KILLEUR USD | Formation Trading Premium & Méthode d’Analyse Technique",
  description:
    "Arrête de trader au hasard. Rejoins KILLEUR USD et maîtrise une méthode d’analyse technique fondée sur des principes éprouvés depuis plus de 100 ans.",
  alternates: { canonical: "/", languages: { "fr-FR": "/", en: "/en", "x-default": "/" } },
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
      provider: { "@type": "Organization", name: "KILLEUR USD", url: "https://www.killeurusd.com" },
      offers: { "@type": "Offer", price: "997", priceCurrency: "USD", category: "Formation" },
    },
  ],
};

// Root layout FR (groupe (site)) — possède <html lang="fr"> + le chrome commun.
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <div className="min-h-screen bg-[#0B0B0D] text-zinc-200 font-sans selection:bg-[#7A0F0F] selection:text-white pt-10">
          <Banner />
          <Header />
          <main>{children}</main>
          <Footer />
          <ChatWidget />
          <Consent />
          <Motion />
        </div>
      </body>
    </html>
  );
}
