"use client";

import Link from "next/link";
import { BookOpen, ChevronRight } from "lucide-react";
import { SectionHeading } from "../ui";
import { PATHS } from "../nav";

export default function Blog() {
  const articles = [
    { id: 1, href: PATHS.article, title: "Pourquoi 90% des traders échouent et comment intégrer le décile supérieur", category: "Psychologie", date: "12 Octobre 2023", readTime: "5 min" },
    { id: 2, href: PATHS.article, title: "La mécanique sous-jacente du Price Action institutionnel", category: "Méthode", date: "28 Septembre 2023", readTime: "8 min" },
    { id: 3, href: PATHS.article, title: "Structurer une routine d'exécution imperméable", category: "Rigueur", date: "15 Septembre 2023", readTime: "6 min" },
  ];

  return (
    <div className="pt-32 pb-24 max-w-6xl mx-auto px-6 min-h-screen">
      <SectionHeading subtitle="Ressources Pédagogiques" title="Analyses & Théorie" align="center" />

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {articles.map((article) => (
          <Link key={article.id} href={article.href} className="bg-[#111114] border border-zinc-800 rounded-sm overflow-hidden flex flex-col group cursor-pointer">
            <div className="aspect-[16/9] bg-[#0B0B0D] relative overflow-hidden flex items-center justify-center text-zinc-800">
              <BookOpen size={48} />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C9A227] bg-[#C9A227]/10 px-2 py-1">{article.category}</span>
                <span className="text-xs text-zinc-400">{article.readTime} de lecture</span>
              </div>
              <h2 className="text-lg font-bold text-white mb-4 group-hover:text-[#7A0F0F] transition-colors line-clamp-2">{article.title}</h2>
              <div className="mt-auto flex justify-between items-center text-zinc-400 text-xs font-medium border-t border-zinc-800/50 pt-4">
                <span>{article.date}</span>
                <span className="flex items-center uppercase tracking-wider font-bold group-hover:text-white transition-colors">Lire l'article <ChevronRight className="w-4 h-4 ml-1" /></span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
