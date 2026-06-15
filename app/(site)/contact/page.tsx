import type { Metadata } from "next";
import Contact from "../../_site/pages/Contact";

export const metadata: Metadata = {
  title: "Contact | KILLEURUSD",
  description:
    "Contactez l'équipe KILLEURUSD pour toute question sur la formation ou l'accompagnement privé.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return <Contact />;
}
