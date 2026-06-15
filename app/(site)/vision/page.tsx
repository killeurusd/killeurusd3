import type { Metadata } from "next";
import Vision from "../../_site/pages/Vision";

export const metadata: Metadata = {
  title: "La Vision | KILLEURUSD",
  description:
    "Découvrez la vision de KILLEURUSD. Une approche sans illusion, basée sur la structure du marché et la discipline pour former des traders exigeants.",
  alternates: { canonical: "/vision" },
};

export default function Page() {
  return <Vision />;
}
