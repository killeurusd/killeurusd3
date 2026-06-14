import type { Metadata } from "next";

export const metadata: Metadata = {
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

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
