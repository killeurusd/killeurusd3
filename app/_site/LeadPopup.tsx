"use client";

import { useEffect, useRef, useState } from "react";
import { X, Download } from "lucide-react";
import { captureAttribution, getAttribution } from "./tracking";
import PhoneField from "./PhoneField";

// Pop-up lead magnet ("L'Audit du Trader Discipliné").
// Déclenchement : intention de sortie (souris vers le haut, ordi) OU après un délai.
// Réutilise le flux existant : /api/submit (formType "lead") → Google Sheets.
// Mémoire visiteur (localStorage) : désactivé définitivement UNIQUEMENT après
// inscription. Tant que le visiteur ne s'est pas inscrit, le pop-up se redéclenche
// (une simple fermeture ne le met pas en sourdine).

type Lang = "fr" | "en";

const DELAY_MS = 30_000; // minuterie de secours (mobile + ordi)
const KEY_DONE = "ku_lead_done"; // inscrit → permanent

const COPY = {
  fr: {
    eyebrow: "Offert",
    title: "L'Audit du Trader Discipliné",
    desc: "10 points de contrôle non-négociables à valider avant d'ouvrir la moindre position. Reçois la checklist par email.",
    prenom: "Ton prénom",
    email: "Ton adresse email",
    cta: "Recevoir la checklist",
    req: "* Champs obligatoires",
    fine: "Accès immédiat. Désinscription en un clic.",
    okTitle: "Merci 👍 Vérifie ta boîte mail.",
    okDesc: "La checklist arrive dans quelques instants.",
    close: "Fermer",
  },
  en: {
    eyebrow: "Free",
    title: "The Disciplined Trader's Audit",
    desc: "10 non-negotiable checks to run before opening any position. Get the checklist by email.",
    prenom: "Your first name",
    email: "Your email address",
    cta: "Get the checklist",
    req: "* Required fields",
    fine: "Instant access. Unsubscribe in one click.",
    okTitle: "Thanks 👍 Check your inbox.",
    okDesc: "The checklist is on its way.",
    close: "Close",
  },
} as const;

export default function LeadPopup({ lang = "fr" }: { lang?: Lang }) {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const shown = useRef(false);
  const t = COPY[lang];

  // Déclencheurs : intention de sortie + minuterie, une seule fois.
  useEffect(() => {
    // Capture l'attribution dès l'arrivée (le pop-up est monté sur chaque page).
    captureAttribution();
    try {
      // Seule l'inscription désactive le pop-up. Une fermeture ne le suspend pas.
      if (localStorage.getItem(KEY_DONE) === "1") return;
    } catch {
      return;
    }

    const reveal = () => {
      if (shown.current) return;
      shown.current = true;
      setOpen(true);
      cleanup();
    };

    // Intention de sortie : la souris quitte le haut de la fenêtre.
    const onMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0 && !e.relatedTarget) reveal();
    };

    const timer = window.setTimeout(reveal, DELAY_MS);
    document.addEventListener("mouseout", onMouseOut);

    function cleanup() {
      window.clearTimeout(timer);
      document.removeEventListener("mouseout", onMouseOut);
    }
    return cleanup;
  }, []);

  // Échap pour fermer + blocage du défilement de fond.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function close() {
    // Simple fermeture : on cache, sans rien mémoriser → il pourra réapparaître.
    setOpen(false);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    setSent(true);
    try {
      localStorage.setItem(KEY_DONE, "1");
    } catch {}
    try {
      await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: "lead", page: `popup-${lang}`, lang, ...getAttribution(), ...data }),
      });
    } catch {}
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="ku-lp-title"
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={close} />

      <div className="lp-in relative w-full max-w-md overflow-hidden rounded-sm border border-white/15 bg-[#111114] shadow-2xl">
        <div className="h-1 bg-gradient-to-r from-[#7A0F0F] via-[#C9A227] to-[#7A0F0F]" />

        <button
          onClick={close}
          aria-label={t.close}
          className="absolute right-3 top-3 text-white/50 transition-colors hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-8 text-center">
          {sent ? (
            <>
              <div className="mb-3 text-4xl">📩</div>
              <p className="text-lg font-bold text-white">{t.okTitle}</p>
              <p className="mt-2 text-sm text-white/60">{t.okDesc}</p>
            </>
          ) : (
            <>
              <Download className="mx-auto mb-4 h-10 w-10 text-[#C9A227]" />
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C9A227]">{t.eyebrow}</p>
              <h2 id="ku-lp-title" className="mb-3 text-2xl font-extrabold text-white">
                {t.title}
              </h2>
              <p className="mb-6 text-sm text-white/70">{t.desc}</p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
                <input
                  type="text"
                  name="prenom"
                  required
                  placeholder={`${t.prenom} *`}
                  aria-label={t.prenom}
                  className="rounded-sm border border-white/20 bg-[#0B0B0D] px-4 py-3 text-white placeholder-white/40 focus:border-[#C9A227] focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={`${t.email} *`}
                  aria-label={t.email}
                  className="rounded-sm border border-white/20 bg-[#0B0B0D] px-4 py-3 text-white placeholder-white/40 focus:border-[#C9A227] focus:outline-none"
                />
                <PhoneField lang={lang} variant="dark" />
                <p className="text-left text-[11px] text-white/40">{t.req}</p>
                <button
                  type="submit"
                  className="rounded-sm bg-[#7A0F0F] px-6 py-3 font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#9A1414]"
                >
                  {t.cta}
                </button>
              </form>
              <p className="mt-4 text-xs text-white/40">{t.fine}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
