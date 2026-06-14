import type { Metadata } from "next";
import { EnShell, SectionHeading } from "../../components/EnUI";
import { BookOpen, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Analysis & Theory | KILLEURUSD",
  description: "Educational resources, analysis and trading theory from KILLEURUSD.",
  alternates: { canonical: "/en/blog" },
};

const articles = [
  { id: 1, title: "Why 90% of traders fail and how to join the top decile", category: "Psychology", date: "October 12, 2023", readTime: "5 min" },
  { id: 2, title: "The underlying mechanics of institutional Price Action", category: "Method", date: "September 28, 2023", readTime: "8 min" },
  { id: 3, title: "Building an airtight execution routine", category: "Rigor", date: "September 15, 2023", readTime: "6 min" },
];

export default function BlogEn() {
  return (
    <EnShell>
      <div className="pt-12 pb-24 max-w-6xl mx-auto px-6 min-h-screen">
        <SectionHeading subtitle="Educational resources" title="Analysis & Theory" align="center" />
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {articles.map((a) => (
            <a key={a.id} href="/en/article" className="bg-[#111114] border border-zinc-800 rounded-sm overflow-hidden flex flex-col group">
              <div className="aspect-[16/9] bg-[#0B0B0D] flex items-center justify-center text-zinc-800"><BookOpen size={48} /></div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C9A227] bg-[#C9A227]/10 px-2 py-1">{a.category}</span>
                  <span className="text-xs text-zinc-500">{a.readTime} read</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-4 group-hover:text-[#7A0F0F] transition-colors">{a.title}</h3>
                <div className="mt-auto flex justify-between items-center text-zinc-400 text-xs font-medium border-t border-zinc-800/50 pt-4">
                  <span>{a.date}</span>
                  <span className="flex items-center uppercase tracking-wider font-bold group-hover:text-white transition-colors">Read article <ChevronRight className="w-4 h-4 ml-1" /></span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </EnShell>
  );
}
