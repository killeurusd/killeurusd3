"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { faqs } from "./faq";

// Îlot client : seul l'accordéon FAQ a besoin d'interactivité.
export default function FaqAccordion() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => (
        <div key={idx} className="border border-zinc-800 bg-[#111114]">
          <button
            className="w-full text-left px-8 py-6 flex justify-between items-center text-white font-bold hover:text-[#C9A227] transition-colors"
            onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
            aria-expanded={openFaq === idx}
          >
            <span className="pr-6 text-lg">{faq.q}</span>
            <ChevronRight className={`w-5 h-5 shrink-0 transition-transform ${openFaq === idx ? "rotate-90 text-[#C9A227]" : "text-zinc-600"}`} />
          </button>
          {openFaq === idx && (
            <div className="px-8 pb-8 text-zinc-400 mt-2 leading-relaxed text-base border-t border-zinc-800/50 pt-6">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
