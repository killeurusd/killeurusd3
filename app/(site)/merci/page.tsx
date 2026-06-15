import type { Metadata } from "next";
import ThankYou from "../../_site/pages/ThankYou";

export const metadata: Metadata = {
  title: "Paiement Confirmé | KILLEURUSD",
  description: "Bienvenue chez KILLEURUSD.",
  alternates: { canonical: "/merci" },
  robots: { index: false },
};

export default function Page() {
  return <ThankYou />;
}
