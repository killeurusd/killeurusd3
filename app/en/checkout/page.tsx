import type { Metadata } from "next";
import { EnShell, Btn } from "../../components/EnUI";
import { Lock, AlertTriangle, CheckCircle2 } from "lucide-react";
import { COHORT } from "../../_site/offer";

export const metadata: Metadata = {
  title: "Checkout | KILLEURUSD",
  description: "Secure validation of your spot in the KILLEURUSD training.",
  alternates: { canonical: "/en/checkout" },
};

export default function CheckoutEn() {
  return (
    <EnShell>
      <div className="pt-12 pb-24 max-w-2xl mx-auto px-6 min-h-screen flex flex-col items-center">
        <Lock className="w-10 h-10 text-zinc-600 mb-6" />
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 text-center">Secure checkout</h1>
        <p className="text-zinc-400 text-center mb-10 text-lg">You're finalizing full access to the KILLEURUSD ecosystem.</p>

        <div className="w-full mb-8 bg-[#7A0F0F]/10 border border-[#7A0F0F]/50 p-6 flex items-start rounded-sm">
          <AlertTriangle className="w-6 h-6 text-red-500 mr-4 shrink-0 mt-1" />
          <div>
            <h4 className="text-white font-bold mb-1">{COHORT.dateEn} bootcamp — {COHORT.seats} seats</h4>
            <p className="text-sm text-zinc-300 leading-relaxed">This cohort is capped at {COHORT.seats} participants to guarantee genuine small-group support. Once the {COHORT.seats} seats are filled, sign-ups move to the next cohort.</p>
          </div>
        </div>

        <div className="w-full bg-[#111114] border border-zinc-800 p-8 md:p-10 shadow-2xl rounded-sm">
          <div className="flex justify-between items-start mb-8 pb-8 border-b border-zinc-800 text-white">
            <div>
              <h3 className="text-xl font-bold mb-2">Full access + Mentoring</h3>
              <ul className="text-sm text-zinc-400 space-y-2 mt-4">
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-[#C9A227]" /> Lifetime access to the VOD modules</li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-[#C9A227]" /> <strong>1h private mentoring / week (3 months)</strong></li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-[#C9A227]" /> Weekly live analysis sessions</li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-[#C9A227]" /> Access to the institutional channel & Pro tools</li>
              </ul>
            </div>
            <div className="text-3xl font-extrabold">$997</div>
          </div>

          <Btn href={process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK || "/en/thankyou"} variant="accent" className="w-full mb-6">{process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK ? "Pay $997 & get access" : "Confirm my enrollment"}</Btn>

          <div className="flex justify-center items-center space-x-4 text-xs font-medium text-zinc-400 uppercase tracking-wider">
            <Lock className="w-4 h-4" /> <span>Encrypted & secured by Stripe</span>
          </div>
        </div>

        <p className="text-xs text-zinc-400 mt-8 max-w-md mx-auto text-center">⚠️ Trading carries a high risk of capital loss. This program is educational and does not constitute investment advice.</p>
        <a href="/en" className="mt-8 text-sm text-zinc-400 hover:text-white font-bold uppercase tracking-wider transition-colors">Back to home</a>
      </div>
    </EnShell>
  );
}
