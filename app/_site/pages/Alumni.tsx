"use client";

import { Award } from "lucide-react";
import { Button, SectionHeading } from "../ui";

export default function Alumni() {
  return (
    <div className="pt-32 pb-24 max-w-2xl mx-auto px-6 min-h-screen flex flex-col items-center">
      <SectionHeading subtitle="Mise à jour d'Infrastructure" title="Accès Membres Historiques" />

      <div className="bg-[#111114] border border-[#C9A227]/30 p-8 md:p-10 rounded-sm w-full shadow-lg">
        <div className="flex items-center mb-6 border-b border-zinc-800 pb-6">
          <Award className="w-8 h-8 text-[#C9A227] mr-4" />
          <h3 className="text-2xl font-bold text-white">Validation de statut</h3>
        </div>
        <p className="text-zinc-400 text-base mb-8 leading-relaxed">
          Conformément à nos engagements initiaux, ton accès à cette nouvelle infrastructure pédagogique t'est <strong>assuré à vie</strong>. Renseigne les coordonnées exactes de ta transaction originelle afin que notre équipe procède à la migration manuelle de ton compte.
        </p>

        <form className="space-y-6" onSubmit={(e: any) => e.preventDefault()}>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Prénom d'inscription</label>
              <input type="text" className="w-full bg-[#0B0B0D] border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-[#C9A227] transition-colors rounded-sm" />
            </div>
            <div>
              <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Nom</label>
              <input type="text" className="w-full bg-[#0B0B0D] border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-[#C9A227] transition-colors rounded-sm" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Adresse Email d'origine</label>
            <input type="email" className="w-full bg-[#0B0B0D] border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-[#C9A227] transition-colors rounded-sm" />
          </div>
          <Button type="submit" variant="accent" className="w-full">Confirmer mon identité</Button>
          <p className="text-center text-xs text-zinc-400 mt-4">Vérification des registres sous 48h ouvrées. Tes nouveaux accès seront transmis par courrier électronique.</p>
        </form>
      </div>
    </div>
  );
}
