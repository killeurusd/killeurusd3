import type { Metadata } from "next";
import Checkout from "../../_site/pages/Checkout";

export const metadata: Metadata = {
  title: "Validation | KILLEURUSD",
  description: "Validation sécurisée de votre place dans la formation KILLEURUSD.",
  alternates: { canonical: "/checkout" },
  robots: { index: false },
};

export default function Page() {
  return <Checkout />;
}
