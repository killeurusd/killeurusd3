import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Article from "../../../_site/pages/Article";
import { AUTHOR } from "../../../_site/articles";
import { getArticles, getArticle } from "../../../_site/articles-source";

export const revalidate = 60;
// Autorise les slugs ajoutés dans la feuille après le build (rendus à la demande).
export const dynamicParams = true;

export async function generateStaticParams() {
  const arts = await getArticles("fr");
  return arts.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle("fr", slug);
  if (!article) return {};
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: { type: "article", title: article.title, description: article.excerpt, publishedTime: article.date },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticle("fr", slug);
  if (!article) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    dateModified: article.date,
    author: { "@type": "Person", name: AUTHOR },
    publisher: { "@type": "Organization", name: "KILLEUR USD", logo: { "@type": "ImageObject", url: "https://www.killeurusd.com/logo.png" } },
    mainEntityOfPage: `https://www.killeurusd.com/blog/${article.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <Article article={article} />
    </>
  );
}
