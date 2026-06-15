"use client";

// Îlot client : le formulaire de capture (gère onSubmit). [À BRANCHER] : envoi réel.
export default function LeadForm() {
  return (
    <>
      <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Ton prénom"
          aria-label="Ton prénom"
          className="px-6 py-4 bg-[#0B0B0D]/50 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white w-full sm:w-1/3 rounded-sm"
          required
        />
        <input
          type="email"
          placeholder="Ton adresse email"
          aria-label="Ton adresse email"
          className="px-6 py-4 bg-[#0B0B0D]/50 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white w-full sm:w-1/2 rounded-sm"
          required
        />
        <button type="submit" className="px-8 py-4 bg-white text-[#7A0F0F] font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors whitespace-nowrap rounded-sm">
          Télécharger la checklist
        </button>
      </form>
      <p className="text-white/70 text-xs mt-4">Accès immédiat. Désinscription en un clic.</p>
    </>
  );
}
