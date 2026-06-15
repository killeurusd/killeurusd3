import type { Metadata } from "next";
import { EnShell, SectionHeading } from "../../components/EnUI";
import { Brain, Activity, ShieldCheck, BookOpen, ChevronRight, type LucideIcon } from "lucide-react";
import { articlesEn } from "../../_site/articles-en";

export const metadata: Metadata = {
  title: "Analysis & Theory | KILLEURUSD",
  description: "Educational resources, analysis and trading theory from KILLEURUSD.",
  alternates: { canonical: "/en/blog" },
};

const THUMBS: Record<string, { Icon: LucideIcon; glow: string; color: string }> = {
  Psychology: { Icon: Brain, glow: "rgba(168,32,26,0.28)", color: "#A8201A" },
  Method: { Icon: Activity, glow: "rgba(201,162,39,0.22)", color: "#C9A227" },
  Rigor: { Icon: ShieldCheck, glow: "rgba(228,228,231,0.12)", color: "#e4e4e7" },
};

export default function BlogEn() {
  return (
    <EnShell>
      <div className="pt-12 pb-24 max-w-6xl mx-auto px-6 min-h-screen">
        <SectionHeading subtitle="Educational resources" title="Analysis & Theory" align="center" />
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {articlesEn.map((a) => {
            const t = THUMBS[a.category] ?? { Icon: BookOpen, glow: "rgba(122,15,15,0.2)", color: "#7A0F0F" };
            const Icon = t.Icon;
            return (
              <a key={a.slug} href={`/en/blog/${a.slug}`} className="bg-[#111114] border border-zinc-800 rounded-sm overflow-hidden flex flex-col group hover:border-zinc-700 transition-colors">
                <div className="aspect-[16/9] relative overflow-hidden flex items-center justify-center" style={{ background: `radial-gradient(circle at 50% 38%, ${t.glow}, #0B0B0D 72%)` }}>
                  <Icon className="w-12 h-12 transition-transform duration-500 group-hover:scale-110" style={{ color: t.color }} strokeWidth={1.5} />
                  <span className="absolute bottom-2 right-3 text-[10px] font-black uppercase tracking-[0.25em] text-white/15">{a.category}</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C9A227] bg-[#C9A227]/10 px-2 py-1">{a.category}</span>
                    <span className="text-xs text-zinc-400">{a.readTime} read</span>
                  </div>
                  <h2 className="text-lg font-bold text-white mb-3 group-hover:text-[#7A0F0F] transition-colors line-clamp-2">{a.title}</h2>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-4 line-clamp-3">{a.excerpt}</p>
                  <div className="mt-auto flex justify-between items-center text-zinc-400 text-xs font-medium border-t border-zinc-800/50 pt-4">
                    <span>{a.dateLabel}</span>
                    <span className="flex items-center uppercase tracking-wider font-bold group-hover:text-white transition-colors">Read article <ChevronRight className="w-4 h-4 ml-1" /></span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </EnShell>
  );
}
