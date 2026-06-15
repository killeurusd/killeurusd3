import Link from "next/link";
import { BookOpen, ChevronRight } from "lucide-react";
import { SectionHeading } from "../ui";
import { articles } from "../articles";

export default function Blog() {
  return (
    <div className="pt-32 pb-24 max-w-6xl mx-auto px-6 min-h-screen">
      <SectionHeading subtitle="Ressources Pédagogiques" title="Analyses & Théorie" align="center" />

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {articles.map((article) => (
          <Link key={article.slug} href={`/blog/${article.slug}`} className="bg-[#111114] border border-zinc-800 rounded-sm overflow-hidden flex flex-col group cursor-pointer hover:border-zinc-700 transition-colors">
            <div className="aspect-[16/9] bg-[#0B0B0D] relative overflow-hidden flex items-center justify-center text-zinc-800">
              <BookOpen size={48} />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C9A227] bg-[#C9A227]/10 px-2 py-1">{article.category}</span>
                <span className="text-xs text-zinc-400">{article.readTime} de lecture</span>
              </div>
              <h2 className="text-lg font-bold text-white mb-3 group-hover:text-[#7A0F0F] transition-colors line-clamp-2">{article.title}</h2>
              <p className="text-sm text-zinc-400 leading-relaxed mb-4 line-clamp-3">{article.excerpt}</p>
              <div className="mt-auto flex justify-between items-center text-zinc-400 text-xs font-medium border-t border-zinc-800/50 pt-4">
                <span>{article.dateLabel}</span>
                <span className="flex items-center uppercase tracking-wider font-bold group-hover:text-white transition-colors">Lire l'article <ChevronRight className="w-4 h-4 ml-1" /></span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
