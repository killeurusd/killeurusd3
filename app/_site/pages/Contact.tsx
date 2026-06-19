"use client";

import { useState } from "react";
import { Mail, MessageSquare, CheckCircle2 } from "lucide-react";
import { Button, SectionHeading } from "../ui";
import { getAttribution } from "../tracking";
import PhoneField from "../PhoneField";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const fld = "w-full bg-[#111114] border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-[#7A0F0F] transition-colors rounded-sm";
  const lbl = "block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2";

  async function handleSubmit(e: any) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    setSent(true); // confirmation optimiste
    try {
      await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: "contact", page: "/contact", lang: "fr", ...getAttribution(), ...data }),
      });
    } catch {}
  }

  return (
    <div className="pt-32 pb-24 max-w-3xl mx-auto px-6 min-h-screen text-center">
      <SectionHeading subtitle="Assistance" title="Contacter l'Équipe" />
      <p className="text-zinc-400 mb-12 text-lg">Une question sur la méthodologie ou le mentoring individuel ? Notre équipe traite les demandes sous 24h ouvrées.</p>

      <div className="bg-[#111114] border border-zinc-800 p-8 rounded-sm mb-12 shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="flex items-center text-white group cursor-pointer">
            <div className="w-12 h-12 bg-[#0B0B0D] border border-zinc-800 rounded-full flex items-center justify-center mr-4 group-hover:border-[#7A0F0F] transition-colors">
              <Mail className="w-5 h-5 text-[#7A0F0F]" />
            </div>
            <div className="text-left">
              <div className="text-xs text-zinc-400 uppercase font-bold tracking-wider mb-1">Par Email</div>
              <span className="font-bold">contact@killeurusd.com</span>
            </div>
          </div>
          <div className="flex items-center text-white group cursor-pointer">
            <div className="w-12 h-12 bg-[#0B0B0D] border border-zinc-800 rounded-full flex items-center justify-center mr-4 group-hover:border-[#7A0F0F] transition-colors">
              <MessageSquare className="w-5 h-5 text-[#7A0F0F]" />
            </div>
            <div className="text-left">
              <div className="text-xs text-zinc-400 uppercase font-bold tracking-wider mb-1">Sur Telegram</div>
              <span className="font-bold">@KILLEURUSD_Support</span>
            </div>
          </div>
        </div>
      </div>

      {sent ? (
        <div className="bg-[#0B0B0D] border border-[#C9A227]/40 p-10 rounded-sm text-center">
          <CheckCircle2 className="w-12 h-12 text-[#C9A227] mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">Demande reçue.</h3>
          <p className="text-zinc-400">Merci. On revient vers toi sous 24h ouvrées avec une réponse adaptée à ton profil.</p>
        </div>
      ) : (
        <form
          className="space-y-6 text-left bg-[#0B0B0D] border border-zinc-800 p-8 md:p-10 rounded-sm"
          onSubmit={handleSubmit}
        >
          <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
          <p className="text-sm text-zinc-400 -mt-2">Quelques précisions nous permettent de mieux t'orienter et de personnaliser notre réponse.</p>

          <div className="grid md:grid-cols-2 gap-6">
            <div><label className={lbl}>Nom complet *</label><input name="nom" type="text" required className={fld} /></div>
            <div><label className={lbl}>Adresse Email *</label><input name="email" type="email" required className={fld} /></div>
          </div>

          <div>
            <label className={lbl}>Téléphone *</label>
            <PhoneField lang="fr" variant="dark" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className={lbl}>Ton niveau actuel</label>
              <select name="niveau" className={`${fld} appearance-none`}>
                <option>Débutant</option><option>Intermédiaire</option><option>Avancé</option>
              </select>
            </div>
            <div>
              <label className={lbl}>Depuis combien de temps tu trades ?</label>
              <select name="experience" className={`${fld} appearance-none`}>
                <option>Je n'ai jamais tradé</option><option>Moins d'1 an</option><option>1 à 3 ans</option><option>Plus de 3 ans</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className={lbl}>Ton objectif principal</label>
              <select name="objectif" className={`${fld} appearance-none`}>
                <option>Devenir rentable régulièrement</option><option>Structurer ma méthode</option><option>Gérer mes émotions / discipline</option><option>Vivre du trading</option>
              </select>
            </div>
            <div>
              <label className={lbl}>Capital de départ (indicatif)</label>
              <select name="capital" className={`${fld} appearance-none`}>
                <option>Moins de 1 000$</option><option>1 000 – 5 000$</option><option>5 000 – 20 000$</option><option>Plus de 20 000$</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className={lbl}>Ton principal blocage aujourd'hui</label>
              <select name="blocage" className={`${fld} appearance-none`}>
                <option>Pas de méthode claire</option><option>Pertes répétées</option><option>Émotions / impulsivité</option><option>Manque de temps</option><option>Autre</option>
              </select>
            </div>
            <div>
              <label className={lbl}>Quand veux-tu démarrer ?</label>
              <select name="demarrage" className={`${fld} appearance-none`}>
                <option>Je veux démarrer maintenant</option><option>Dans le mois</option><option>Je me renseigne</option>
              </select>
            </div>
          </div>

          <div>
            <label className={lbl}>Message (optionnel)</label>
            <textarea name="message" rows={4} className={fld}></textarea>
          </div>

          <label className="flex items-start gap-3 text-xs text-zinc-400">
            <input name="consent" type="checkbox" required className="mt-1" />
            <span>J'accepte d'être recontacté(e) par KILLEURUSD au sujet de ma demande. Mes données restent confidentielles et ne sont jamais revendues.</span>
          </label>

          <p className="text-xs text-zinc-500">
            * Champs obligatoires · Conformément au RGPD, désinscription possible à tout moment.{" "}
            <a href="/confidentialite" className="underline hover:text-zinc-300">Politique de confidentialité</a>.
          </p>
          <Button type="submit" className="w-full">Envoyer ma demande</Button>
        </form>
      )}
    </div>
  );
}
