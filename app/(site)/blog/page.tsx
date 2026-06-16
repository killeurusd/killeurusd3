import type { Metadata } from "next";
import Blog from "../../_site/pages/Blog";
import { getArticles } from "../../_site/articles-source";

// ISR : régénère la liste toutes les 60 s (nouveaux articles de la feuille).
export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog & Analyses | KILLEURUSD",
  description:
    "Articles, analyses techniques et psychologie de marché. Découvrez la méthode KILLEURUSD en détail.",
  alternates: { canonical: "/blog" },
};

export default async function Page() {
  const articles = await getArticles("fr");
  return <Blog articles={articles} />;
}
