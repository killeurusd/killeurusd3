"use client";

import Link from "next/link";
import { Lock, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Button } from "../ui";
import { PATHS } from "../nav";
import { useGo } from "../useGo";
import { COHORT } from "../offer";

// Lien de paiement Stripe (Payment Link). Public par nature → NEXT_PUBLIC.
// Non défini = repli sur l'ancien comportement (le site ne casse pas).
const STRIPE_LINK = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK;

export default function Checkout() {
  const navigate = useGo();

  return (
    <div className="pt-32 pb-24 max-w-2xl mx-auto px-6 min-h-screen flex flex-col items-center">
      <Lock className="w-10 h-10 text-zinc-600 mb-6" />
      <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 text-center">Validation Sécurisée</h1>
      <p className="text-zinc-400 text-center mb-10 text-lg">Tu finalises l'accès intégral à l'écosystème KILLEURUSD.</p>

      <div className="w-full mb-8 bg-[#7A0F0F]/10 border border-[#7A0F0F]/50 p-6 flex items-start rounded-sm">
        <AlertTriangle className="w-6 h-6 text-red-500 mr-4 shrink-0 mt-1" />
        <div>
          <h4 className="text-white font-bold mb-1">Bootcamp du {COHORT.dateFr} — {COHORT.seats} places</h4>
          <p className="text-sm text-zinc-300 leading-relaxed">La cohorte est limitée à {COHORT.seats} participants pour garantir un vrai suivi en petit comité. Une fois les {COHORT.seats} places prises, les inscriptions basculent sur la cohorte suivante.</p>
        </div>
      </div>

      <div className="w-full bg-[#111114] border border-zinc-800 p-8 md:p-10 shadow-2xl rounded-sm">
        <div className="flex justify-between items-start mb-8 pb-8 border-b border-zinc-800 text-white">
          <div>
            <h3 className="text-xl font-bold mb-2">L'Accès Intégral + Mentoring</h3>
            <ul className="text-sm text-zinc-400 space-y-2 mt-4">
              <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-[#C9A227]" /> Accès définitif aux modules VOD</li>
              <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-[#C9A227]" /> <strong>1h de mentoring privé / semaine (3 mois)</strong></li>
              <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-[#C9A227]" /> Sessions d'analyse Live hebdomadaires</li>
              <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-[#C9A227]" /> Accès au canal institutionnel & Outils Pro</li>
            </ul>
          </div>
          <div className="text-3xl font-extrabold">997$</div>
        </div>

        {STRIPE_LINK ? (
          <a
            href={STRIPE_LINK}
            className="w-full mb-6 inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all duration-300 rounded-sm bg-[#C9A227] hover:bg-[#B38F22] text-[#0B0B0D] px-8 py-4 text-sm md:text-base shadow-[0_4px_14px_0_rgba(201,162,39,0.39)] hover:-translate-y-0.5"
          >
            Payer 997&nbsp;$ et accéder
          </a>
        ) : (
          <Button onClick={() => navigate("thankyou")} variant="accent" className="w-full mb-6">
            Valider mon inscription
          </Button>
        )}

        <div className="flex justify-center items-center space-x-4 text-xs font-medium text-zinc-400 uppercase tracking-wider">
          <Lock className="w-4 h-4" /> <span>Paiement crypté & sécurisé par Stripe</span>
        </div>
      </div>

      <Link href={PATHS.home} className="mt-12 text-sm text-zinc-400 hover:text-white font-bold uppercase tracking-wider transition-colors">
        Retour à l'accueil
      </Link>
    </div>
  );
}
