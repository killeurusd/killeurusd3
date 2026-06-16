"use client";

import Link from "next/link";
import { ChevronRight, Users } from "lucide-react";
import { Button } from "../ui";
import { PATHS } from "../nav";
import { useGo } from "../useGo";
import { AUTHOR, type Article as ArticleType } from "../articles";

export default function Article({ article }: { article: ArticleType }) {
  const navigate = useGo();

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <Link href={PATHS.blog} className="flex items-center text-zinc-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-wider mb-12">
          <ChevronRight className="w-4 h-4 mr-1 rotate-180" /> Retour aux articles
        </Link>

        <div className="mb-12">
          <span className="text-[#C9A227] font-bold tracking-wider uppercase text-xs block mb-4">{article.category} • {article.readTime} de lecture</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-8">{article.title}</h1>
          <div className="flex items-center border-b border-zinc-800 pb-8">
            <div className="w-10 h-10 bg-zinc-800 rounded-full mr-4 flex items-center justify-center text-zinc-400"><Users size={20} /></div>
            <div>
              <div className="text-white font-bold text-sm">{AUTHOR}</div>
              <div className="text-zinc-400 text-xs">FONDATEUR &amp; HEAD TRADER · <time dateTime={article.date}>{article.dateLabel}</time></div>
            </div>
          </div>
        </div>

        {article.cover && (
          <img src={article.cover} alt="" className="w-full h-auto rounded-sm border border-zinc-800 mb-12" />
        )}

        <div className="max-w-none text-zinc-300 leading-relaxed text-lg">
          {article.blocks.map((b, i) => {
            if (b.t === "lead") return <p key={i} className="text-xl text-white font-medium mb-8">{b.text}</p>;
            if (b.t === "h2") return <h2 key={i} className="text-2xl font-bold text-white mt-12 mb-6">{b.text}</h2>;
            if (b.t === "quote") return (
              <div key={i} className="bg-[#111114] border-l-4 border-[#7A0F0F] p-6 my-10">
                <p className="font-bold text-white m-0">&quot;{b.text}&quot;</p>
              </div>
            );
            if (b.t === "image") return (
              <figure key={i} className="my-10">
                <img src={b.src} alt={b.alt || ""} loading="lazy" className="w-full h-auto rounded-sm border border-zinc-800" />
                {b.caption && <figcaption className="text-center text-zinc-500 text-xs mt-3 uppercase tracking-wider">{b.caption}</figcaption>}
              </figure>
            );
            return <p key={i} className="mb-6">{b.text}</p>;
          })}
        </div>

        <div className="mt-16 bg-gradient-to-br from-[#0B0B0D] to-[#111114] border border-zinc-800 p-8 rounded-sm text-center">
          <h3 className="text-xl font-bold text-white mb-4">Prêt à imposer ta rigueur au marché ?</h3>
          <p className="text-zinc-400 text-sm mb-6 max-w-md mx-auto">Rejoins l'écosystème KILLEURUSD et déploie une gestion asymétrique de ton portefeuille.</p>
          <Button onClick={() => navigate("checkout")}>Accéder au programme</Button>
        </div>
      </div>
    </div>
  );
}
