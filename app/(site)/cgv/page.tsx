import type { Metadata } from "next";
import Cgv from "../../_site/pages/Cgv";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente | KILLEURUSD",
  description: "Conditions Générales de Vente du site KILLEURUSD.",
  alternates: { canonical: "/cgv" },
};

export default function Page() {
  return <Cgv />;
}
