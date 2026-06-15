import type { Metadata } from "next";
import Privacy from "../../_site/pages/Privacy";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | KILLEURUSD",
  description: "Politique de confidentialité et protection des données du site KILLEURUSD.",
  alternates: { canonical: "/confidentialite" },
};

export default function Page() {
  return <Privacy />;
}
