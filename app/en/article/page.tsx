import type { Metadata } from "next";
import { EnShell, Btn } from "../../components/EnUI";
import { ChevronRight, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Why 90% of traders fail | KILLEURUSD",
  description: "A psychological and technical analysis of why traders fail and how to reverse the trend.",
  alternates: { canonical: "/en/article" },
};

export default function ArticleEn() {
  return (
    <EnShell>
      <div className="pt-12 pb-24 min-h-screen">
        <div className="max-w-3xl mx-auto px-6">
          <a href="/en/blog" className="flex items-center text-zinc-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-wider mb-12"><ChevronRight className="w-4 h-4 mr-1 rotate-180" /> Back to articles</a>
          <div className="mb-12">
            <span className="text-[#C9A227] font-bold tracking-wider uppercase text-xs block mb-4">Psychology • 5 min read</span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-8">Why 90% of traders fail and how to join the top decile.</h1>
            <div className="flex items-center border-b border-zinc-800 pb-8">
              <div className="w-10 h-10 bg-zinc-800 rounded-full mr-4 flex items-center justify-center text-zinc-400"><Users size={20} /></div>
              <div>
                <div className="text-white font-bold text-sm">RAYANE "RAYSS"</div>
                <div className="text-zinc-400 text-xs">FOUNDER & HEAD TRADER</div>
              </div>
            </div>
          </div>
          <div className="text-zinc-300 leading-relaxed text-lg">
            <p className="text-xl text-white font-medium mb-8">The figure is scary, but it's a fact. On financial markets, the vast majority of retail speculators destroy their capital. But contrary to popular belief, it's not because of a "rigged algorithm." It's a systematic failure of execution.</p>
            <h2 className="text-2xl font-bold text-white mt-12 mb-6">The myth of the miracle indicator</h2>
            <p className="mb-6">The cardinal mistake lies in the quest for infallibility. A perfect predictive indicator does not exist. By definition, the market moves within a probabilistic spectrum. A seasoned operator treats loss as an operating cost inherent to the activity. The amateur fears it, runs from it, and ends up exposed to systemic risk.</p>
            <div className="bg-[#111114] border-l-4 border-[#7A0F0F] p-6 my-10"><p className="font-bold text-white m-0">"The amateur is obsessed with the entry. The expert is obsessed with capital exposure."</p></div>
            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Stochastic behavior</h2>
            <p className="mb-6">The absence of strict rules of engagement turns analysis into gambling. Entering on a bullish impulse, closing out of risk aversion. Action is driven by emotion instead of governed by data. The line between profitability and ruin sits exactly here: in the ability to respect a protocol.</p>
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
