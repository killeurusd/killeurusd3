import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Consent from "../_site/Consent";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.killeurusd.com"),
  title: "KILLEUR USD | Premium Trading Training & Technical-Analysis Method",
  description:
    "Stop trading at random. Join KILLEUR USD and master a technical-analysis method built on century-old proven principles, strict execution and risk management.",
  alternates: {
    canonical: "/en",
    languages: { "fr-FR": "/", en: "/en", "x-default": "/" },
  },
  openGraph: {
    title: "KILLEUR USD | Premium Trading Training",
    description: "A real method, a serious framework, private mentoring to stop trading at random.",
    url: "https://www.killeurusd.com/en",
    siteName: "KILLEUR USD",
    type: "website",
    locale: "en_US",
    images: ["/logo.png"],
  },
};

// Root layout EN — possède <html lang="en">.
export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <Consent lang="en" />
      </body>
    </html>
  );
}
