import type { Metadata } from "next";
import LegalNotice from "../../_site/pages/LegalNotice";

export const metadata: Metadata = {
  title: "Mentions Légales | KILLEURUSD",
  description: "Mentions légales et informations sur l'éditeur du site KILLEURUSD.",
  alternates: { canonical: "/mentions-legales" },
};

export default function Page() {
  return <LegalNotice />;
}
