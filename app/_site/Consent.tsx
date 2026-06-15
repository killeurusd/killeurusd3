"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Script from "next/script";

// Bannière de consentement (refus par défaut) + chargeur GA4 conditionné :
// l'analytics ne se charge QUE si (1) l'utilisateur a accepté ET (2) un ID est
// configuré via NEXT_PUBLIC_GA_ID. Tant que l'ID n'est pas fourni (branchement
// final), aucun tracker n'est injecté — la mécanique de consentement, elle, est prête.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const STORAGE_KEY = "ku-consent";

type Choice = "granted" | "denied" | null;

export default function Consent() {
  const [choice, setChoice] = useState<Choice>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Choice;
      setChoice(stored === "granted" || stored === "denied" ? stored : null);
    } catch {
      setChoice(null);
    }
    setReady(true);
  }, []);

  const decide = (value: "granted" | "denied") => {
    try { localStorage.setItem(STORAGE_KEY, value); } catch {}
    setChoice(value);
  };

  const showAnalytics = choice === "granted" && !!GA_ID;

  return (
    <>
      {showAnalytics && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { anonymize_ip: true });
            `}
          </Script>
        </>
      )}

      {ready && choice === null && (
        <div
          role="dialog"
          aria-label="Consentement aux cookies"
          className="fixed bottom-0 left-0 right-0 z-[80] bg-[#111114] border-t border-zinc-800 px-5 py-4 md:px-8 shadow-[0_-8px_30px_rgba(0,0,0,0.5)]"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <p className="text-sm text-zinc-300 leading-relaxed flex-1">
              Nous utilisons des cookies de mesure d'audience pour améliorer le site. Ils ne sont activés
              qu'avec ton accord.{" "}
              <Link href="/confidentialite" className="text-[#C9A227] underline hover:text-white">
                En savoir plus
              </Link>.
            </p>
            <div className="flex gap-3 shrink-0">
              <button
                type="button"
                onClick={() => decide("denied")}
                className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-sm border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 transition-colors"
              >
                Refuser
              </button>
              <button
                type="button"
                onClick={() => decide("granted")}
                className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-sm bg-[#C9A227] text-[#0B0B0D] hover:bg-[#B38F22] transition-colors"
              >
                Accepter
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
