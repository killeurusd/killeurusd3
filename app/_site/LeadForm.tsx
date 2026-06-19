"use client";

import { useState } from "react";
import { getAttribution } from "./tracking";
import PhoneField from "./PhoneField";

// Îlot client : capture e-mail (lead magnet) → /api/submit → Google Sheets.
export default function LeadForm() {
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    setSent(true);
    try {
      await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: "lead", page: "/", lang: "fr", ...getAttribution(), ...data }),
      });
    } catch {}
  }

  if (sent) {
    return (
      <div className="max-w-2xl mx-auto bg-[#0B0B0D]/40 border border-white/20 p-6 rounded-sm text-center">
        <p className="text-white font-bold">Merci 👍 Vérifie ta boîte mail.</p>
        <p className="text-white/70 text-sm mt-1">La checklist arrive dans quelques instants.</p>
      </div>
    );
  }

  return (
    <>
      <form className="flex flex-col gap-4 max-w-2xl mx-auto" onSubmit={handleSubmit}>
        <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            name="prenom"
            placeholder="Ton prénom *"
            aria-label="Ton prénom"
            className="px-6 py-4 bg-[#0B0B0D]/50 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white w-full sm:flex-1 rounded-sm"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Ton adresse email *"
            aria-label="Ton adresse email"
            className="px-6 py-4 bg-[#0B0B0D]/50 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white w-full sm:flex-1 rounded-sm"
            required
          />
        </div>
        <PhoneField lang="fr" variant="light" className="w-full" />
        <label className="flex items-start gap-2.5 text-left text-xs text-white/70">
          <input name="consent" type="checkbox" required className="mt-0.5 accent-white" />
          <span>J&apos;accepte d&apos;être contacté(e) par KILLEURUSD et de recevoir la checklist. Mes données ne sont jamais revendues.</span>
        </label>
        <button type="submit" className="px-8 py-4 bg-white text-[#7A0F0F] font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors rounded-sm w-full">
          Télécharger la checklist
        </button>
      </form>
      <p className="text-white/50 text-xs mt-4">
        * Champs obligatoires · Conformément au RGPD, désinscription possible à tout moment.{" "}
        <a href="/confidentialite" className="underline hover:text-white">Politique de confidentialité</a>.
      </p>
      <p className="text-white/70 text-xs mt-1">Accès immédiat. Désinscription en un clic.</p>
    </>
  );
}
