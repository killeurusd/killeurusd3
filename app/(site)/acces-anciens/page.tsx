import type { Metadata } from "next";
import Alumni from "../../_site/pages/Alumni";

export const metadata: Metadata = {
  title: "Accès Anciens Élèves | KILLEURUSD",
  description: "Réclamez votre accès à la nouvelle plateforme KILLEURUSD.",
  alternates: { canonical: "/acces-anciens" },
  robots: { index: false },
};

export default function Page() {
  return <Alumni />;
}
