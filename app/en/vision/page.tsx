import type { Metadata } from "next";
import { EnShell, SectionHeading, Btn } from "../../components/EnUI";
import { Users } from "lucide-react";

export const metadata: Metadata = {
  title: "The Vision | KILLEURUSD",
  description: "Discover the vision of KILLEURUSD. A no-illusion approach based on market structure and discipline to train demanding traders.",
  alternates: { canonical: "/en/vision" },
};

export default function VisionEn() {
  return (
    <EnShell>
      <div className="pt-12 pb-24 max-w-6xl mx-auto px-6 min-h-screen">
        <SectionHeading subtitle="The philosophy" title="No promises. Only the field." align="center" />
        <div className="grid md:grid-cols-12 gap-12 mt-16">
          <div className="md:col-span-5">
            <div className="sticky top-32 aspect-[3/4] bg-[#111114] border border-zinc-800 rounded-sm overflow-hidden shadow-2xl flex items-center justify-center">
              <Users className="w-32 h-32 text-zinc-900" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#7A0F0F]/20 to-transparent"></div>
            </div>
          </div>
          <div className="md:col-span-7 text-zinc-400 leading-relaxed text-lg">
            <p className="text-xl text-white font-medium mb-6"><strong>KILLEURUSD</strong> is not the product of a desire to sell courses. It's the result of a real journey, forged in the field, and a visceral rejection of the illusions sold to beginners.</p>
            <p className="mb-8">My immersion in transactional dynamics started early. At 13, I was importing products from Asia, which brutally exposed me to the impact of currencies. The lesson was clear: financial ignorance is paid for in cash. That reality led me to trading, starting more than a decade of study, testing and execution on the markets.</p>
            <h3 className="text-white font-bold text-2xl mt-12 mb-4">Diagnosis of a biased industry</h3>
            <p className="mb-4">The pattern is always the same: retail traders get sucked in by the promise of shortcuts, armed with miracle strategies and magic indicators, bypassing the real work of understanding price.</p>
            <p className="mb-4">A major accident at 18 forced me to change course. During that period I discovered <em>Reminiscences of a Stock Operator</em> by Jesse Livermore. His approach, his relentless risk management and his resilience gave me the psychological matrix needed to approach markets clinically.</p>
            <p className="mb-4">My learning continued with Richard Wyckoff and Ralph Nelson Elliott. But theory without confrontation with the market is sterile. These foundations were digested, tested in real time and synthesized to create my own methodology.</p>
            <div className="bg-[#111114] border-l-4 border-[#C9A227] p-8 my-10">
              <p className="text-white text-xl font-bold italic m-0">"What sets a professional apart from an amateur isn't initial motivation. It's the ability to execute a boring plan with mathematical precision."</p>
            </div>
            <h3 className="text-white font-bold text-2xl mt-12 mb-4">The purpose of KILLEURUSD</h3>
            <p className="mb-4">The KILLEURUSD ecosystem fills a major gap: the absence of a strict framework. We teach an institutional reading of the market, paired with asymmetric risk-management logic.</p>
            <p className="mb-4">Since 2019, my only goal has been to pass on this method. I don't create dependence through signals. I train lucid, methodical operators who treat speculation with the seriousness of a profession.</p>
            <p className="mb-4">The techniques taught rest on the fundamental dynamics of liquidity and supply and demand, proven for over a century. It's neither a trend nor an algorithmic glitch. It's a craft.</p>
            <p className="mt-4">The approach is demanding. It requires self-questioning, work, and resilience in the face of capital loss. But for anyone determined to build solid profitability, it's the only serious path.</p>
            <div className="mt-16 pt-8 border-t border-zinc-800">
              <p className="text-white font-bold mb-8">If you're set on meeting this standard and dropping the illusions, you're in the right place.</p>
              <Btn href="/en/checkout">Secure my spot</Btn>
            </div>
          </div>
        </div>
      </div>
    </EnShell>
  );
}
