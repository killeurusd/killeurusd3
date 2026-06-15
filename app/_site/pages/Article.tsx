"use client";

import Link from "next/link";
import { ChevronRight, Users } from "lucide-react";
import { Button } from "../ui";
import { PATHS } from "../nav";
import { useGo } from "../useGo";

export default function Article() {
  const navigate = useGo();

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <Link href={PATHS.blog} className="flex items-center text-zinc-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-wider mb-12">
          <ChevronRight className="w-4 h-4 mr-1 rotate-180" /> Retour aux articles
        </Link>

        <div className="mb-12">
          <span className="text-[#C9A227] font-bold tracking-wider uppercase text-xs block mb-4">Psychologie • 5 min de lecture</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-8">Pourquoi 90% des traders échouent et comment intégrer le décile supérieur.</h1>
          <div className="flex items-center border-b border-zinc-800 pb-8">
            <div className="w-10 h-10 bg-zinc-800 rounded-full mr-4 flex items-center justify-center text-zinc-400"><Users size={20} /></div>
            <div>
              <div className="text-white font-bold text-sm">RAYANE &quot;RAYSS&quot;</div>
              <div className="text-zinc-400 text-xs">FONDATEUR & HEAD TRADER</div>
            </div>
          </div>
        </div>

        <div className="prose prose-invert prose-zinc max-w-none text-zinc-300 leading-relaxed text-lg">
          <p className="lead text-xl text-white font-medium mb-8">
            Le chiffre fait peur, mais il est factuel. Sur les marchés financiers, l'immense majorité des spéculateurs particuliers détruit son capital. Mais contrairement à ce que suggère la croyance populaire, ce n'est pas dû à un &quot;algorithme truqué&quot;. C'est un échec systématique d'exécution.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Le mythe de l'Indicateur Miracle</h2>
          <p className="mb-6">
            L'erreur cardinale réside dans la quête d'infaillibilité. Un indicateur prédictif parfait n'existe pas. Le marché évolue par définition dans un spectre probabiliste. Un opérateur aguerri intègre la perte comme un frais de fonctionnement inhérent à son activité. L'amateur la redoute, la fuit, et finit par s'exposer à un risque systémique.
          </p>

          <div className="bg-[#111114] border-l-4 border-[#7A0F0F] p-6 my-10">
            <p className="font-bold text-white m-0">
              &quot;L'amateur est obsédé par l'entrée. L'expert est obsédé par l'exposition de son capital.&quot;
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Le comportement stochastique</h2>
          <p className="mb-6">
            L'absence de règles d'engagement strictes transforme l'analyse en jeu de hasard. Entrer sous le coup d'une impulsion haussière, clôturer par aversion au risque. L'action est pilotée par les émotions au lieu d'être régie par des données. La frontière entre la rentabilité et la ruine se situe exactement ici : dans la capacité à respecter un protocole.
          </p>
        </div>

        <div className="mt-16 bg-gradient-to-br from-[#0B0B0D] to-[#111114] border border-zinc-800 p-8 rounded-sm text-center">
          <h3 className="text-xl font-bold text-white mb-4">Prêt à imposer ta rigueur au marché ?</h3>
          <p className="text-zinc-400 text-sm mb-6 max-w-md mx-auto">Rejoins l'écosystème KILLEURUSD et déploie une gestion asymétrique de ton portefeuille.</p>
          <Button onClick={() => navigate("checkout")}>Intégrer le programme</Button>
        </div>
      </div>
    </div>
  );
}
