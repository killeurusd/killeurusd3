import Link from "next/link";
import { Brain, Activity, ShieldCheck, BookOpen, ChevronRight, type LucideIcon } from "lucide-react";
import { SectionHeading } from "../ui";
import { type Article } from "../articles";

// Vignette de marque par catégorie (au lieu d'une icône générique identique).
const THUMBS: Record<string, { Icon: LucideIcon; glow: string; color: string }> = {
  Psychologie: { Icon: Brain, glow: "rgba(168,32,26,0.28)", color: "#A8201A" },
  Méthode: { Icon: Activity, glow: "rgba(201,162,39,0.22)", color: "#C9A227" },
  Rigueur: { Icon: ShieldCheck, glow: "rgba(228,228,231,0.12)", color: "#e4e4e7" },
};

export default function Blog({ articles }: { articles: Article[] }) {
  return (
    <div className="pt-32 pb-24 max-w-6xl mx-auto px-6 min-h-screen">
      <SectionHeading subtitle="Ressources Pédagogiques" title="Analyses & Théorie" align="center" />

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {articles.map((article) => {
          const t = THUMBS[article.category] ?? { Icon: BookOpen, glow: "rgba(122,15,15,0.2)", color: "#7A0F0F" };
          const Icon = t.Icon;
          return (
            <Link key={article.slug} href={`/blog/${article.slug}`} className="bg-[#111114] border border-zinc-800 rounded-sm overflow-hidden flex flex-col group cursor-pointer hover:border-zinc-700 transition-colors">
              <div
                className="aspect-[16/9] relative overflow-hidden flex items-center justify-center"
                style={article.cover ? undefined : { background: `radial-gradient(circle at 50% 38%, ${t.glow}, #0B0B0D 72%)` }}
              >
                {article.cover ? (
                  <img src={article.cover} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                ) : (
                  <>
                    <Icon className="w-12 h-12 transition-transform duration-500 group-hover:scale-110" style={{ color: t.color }} strokeWidth={1.5} />
                    <span className="absolute bottom-2 right-3 text-[10px] font-black uppercase tracking-[0.25em] text-white/15">{article.category}</span>
                  </>
                )}
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
          );
        })}
      </div>
    </div>
  );
}
