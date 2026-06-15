import type { Metadata } from "next";
import Blog from "../../_site/pages/Blog";

export const metadata: Metadata = {
  title: "Blog & Analyses | KILLEURUSD",
  description:
    "Articles, analyses techniques et psychologie de marché. Découvrez la méthode KILLEURUSD en détail.",
  alternates: { canonical: "/blog" },
};

export default function Page() {
  return <Blog />;
}
