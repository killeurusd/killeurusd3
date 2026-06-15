import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Article from "../../../_site/pages/Article";
import { ARTICLE_SLUG } from "../../../_site/nav";

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ slug: ARTICLE_SLUG }];
}

export const metadata: Metadata = {
  title: "Pourquoi 90% des traders échouent | KILLEURUSD",
  description:
    "Analyse psychologique et technique sur les raisons de l'échec en trading et comment inverser la tendance.",
  alternates: { canonical: `/blog/${ARTICLE_SLUG}` },
};

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug !== ARTICLE_SLUG) notFound();
  return <Article />;
}
