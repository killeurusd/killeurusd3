import type { Metadata } from "next";
import { EnShell } from "../../components/EnUI";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Payment Confirmed | KILLEURUSD",
  description: "Welcome to KILLEURUSD.",
  alternates: { canonical: "/en/thankyou" },
  robots: { index: false },
};

export default function ThankYouEn() {
  return (
    <EnShell>
      <div className="pt-12 pb-24 max-w-2xl mx-auto px-6 min-h-screen flex flex-col items-center text-center">
        <div className="w-24 h-24 bg-[#0B0B0D] border-2 border-[#C9A227] rounded-full flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(201,162,39,0.2)]">
          <CheckCircle className="w-12 h-12 text-[#C9A227]" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Access granted</h1>
        <p className="text-xl text-zinc-400 mb-12">Welcome to the KILLEURUSD ecosystem.</p>

        <div className="bg-[#111114] border border-zinc-800 p-8 md:p-12 rounded-sm w-full text-left">
          <h3 className="text-white font-bold text-xl mb-6">Getting started:</h3>
          <ol className="text-zinc-400 space-y-6">
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">1</span>
              <div><strong className="text-white block mb-1">Receive your credentials</strong>Your platform access keys will be sent to your inbox within a few minutes.</div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">2</span>
              <div><strong className="text-white block mb-1">Join the secure channels</strong>The links to the private Telegram feeds are available directly on your dashboard.</div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">3</span>
              <div><strong className="text-white block mb-1">Schedule your calibration</strong>Use the internal booking system to schedule your first mentoring hour with RAYANE "RAYSS".</div>
            </li>
          </ol>
        </div>
      </div>
    </EnShell>
  );
}
