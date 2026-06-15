import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EnShell, Btn } from "../../../components/EnUI";
import { ChevronRight, Users } from "lucide-react";
import { articlesEn, getArticleEn } from "../../../_site/articles-en";
import { AUTHOR } from "../../../_site/articles";

export const dynamicParams = false;

export function generateStaticParams() {
  return articlesEn.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticleEn(slug);
  if (!a) return {};
  return {
    title: a.metaTitle,
    description: a.metaDescription,
    alternates: { canonical: `/en/blog/${a.slug}` },
    openGraph: { type: "article", title: a.title, description: a.excerpt, publishedTime: a.date },
  };
}

export default async function ArticleEn({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleEn(slug);
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
    mainEntityOfPage: `https://www.killeurusd.com/en/blog/${article.slug}`,
    inLanguage: "en",
  };

  return (
    <EnShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <div className="pt-12 pb-24 min-h-screen">
        <div className="max-w-3xl mx-auto px-6">
          <a href="/en/blog" className="flex items-center text-zinc-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-wider mb-12">
            <ChevronRight className="w-4 h-4 mr-1 rotate-180" /> Back to articles
          </a>
          <div className="mb-12">
            <span className="text-[#C9A227] font-bold tracking-wider uppercase text-xs block mb-4">{article.category} • {article.readTime} read</span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-8">{article.title}</h1>
            <div className="flex items-center border-b border-zinc-800 pb-8">
              <div className="w-10 h-10 bg-zinc-800 rounded-full mr-4 flex items-center justify-center text-zinc-400"><Users size={20} /></div>
              <div>
                <div className="text-white font-bold text-sm">{AUTHOR}</div>
                <div className="text-zinc-400 text-xs">FOUNDER &amp; HEAD TRADER · <time dateTime={article.date}>{article.dateLabel}</time></div>
              </div>
            </div>
          </div>
          <div className="text-zinc-300 leading-relaxed text-lg">
            {article.blocks.map((b, i) => {
              if (b.t === "lead") return <p key={i} className="text-xl text-white font-medium mb-8">{b.text}</p>;
              if (b.t === "h2") return <h2 key={i} className="text-2xl font-bold text-white mt-12 mb-6">{b.text}</h2>;
              if (b.t === "quote") return (
                <div key={i} className="bg-[#111114] border-l-4 border-[#7A0F0F] p-6 my-10"><p className="font-bold text-white m-0">&quot;{b.text}&quot;</p></div>
              );
              return <p key={i} className="mb-6">{b.text}</p>;
            })}
          </div>
          <div className="mt-16 bg-gradient-to-br from-[#0B0B0D] to-[#111114] border border-zinc-800 p-8 rounded-sm text-center">
            <h3 className="text-xl font-bold text-white mb-4">Ready to impose your rigor on the market?</h3>
            <p className="text-zinc-400 text-sm mb-6 max-w-md mx-auto">Join the KILLEURUSD ecosystem and deploy asymmetric management of your portfolio.</p>
            <Btn href="/en/checkout">Join the program</Btn>
          </div>
        </div>
      </div>
    </EnShell>
  );
}
