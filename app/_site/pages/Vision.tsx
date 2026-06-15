"use client";

import { Users } from "lucide-react";
import { Button, SectionHeading } from "../ui";
import { useGo } from "../useGo";

export default function Vision() {
  const navigate = useGo();

  return (
    <div className="pt-32 pb-24 max-w-6xl mx-auto px-6 min-h-screen">
      <SectionHeading subtitle="La Philosophie" title="Pas de promesses. Que du terrain." align="center" />

      <div className="grid md:grid-cols-12 gap-12 mt-16">
        <div className="md:col-span-5">
          <div className="sticky top-32 aspect-[3/4] bg-[#111114] border border-zinc-800 rounded-sm overflow-hidden shadow-2xl flex items-center justify-center">
            <Users className="w-32 h-32 text-zinc-900" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#7A0F0F]/20 to-transparent"></div>
          </div>
        </div>

        <div className="md:col-span-7 text-zinc-400 leading-relaxed text-lg">
          <p className="text-xl text-white font-medium mb-6">
            <strong>KILLEURUSD</strong> n’est pas le fruit d’une volonté de vendre de la formation. C'est la résultante d’un parcours réel, forgé par le terrain, et d’un rejet viscéral des illusions vendues aux débutants.
          </p>
          <p className="mb-8">
            Mon immersion dans les dynamiques transactionnelles a débuté très tôt. À 13 ans, j'importais des produits depuis l'Asie, ce qui m'a brutalement confronté à l'impact des devises. Le constat fut limpide : l'ignorance financière se paie comptant. Cette réalité m’a conduit vers le trading, amorçant plus d'une décennie d’étude, de tests et d'exécution sur les marchés.
          </p>

          <h3 className="text-white font-bold text-2xl mt-12 mb-4">Le diagnostic d’une industrie biaisée</h3>
          <p className="mb-4">
            Le schéma est perpétuellement le même : des particuliers se font aspirer par la promesse de raccourcis, armés de stratégies miraculeuses et d'indicateurs miracles, contournant le véritable travail de compréhension des prix.
          </p>
          <p className="mb-4">
            Un accident majeur à mes 18 ans a forcé ma réorientation. C'est durant cette période que j'ai découvert <em>Mémoires d’un spéculateur</em> de Jesse Livermore. Son approche, sa gestion implacable du risque et sa résilience m'ont fourni la matrice psychologique nécessaire pour aborder les marchés de manière clinique.
          </p>
          <p className="mb-4">
            Mon apprentissage s'est prolongé avec Richard Wyckoff et Ralph Nelson Elliott. Mais la théorie sans confrontation au marché est stérile. Ces fondements ont été digérés, éprouvés en temps réel et synthétisés pour créer ma propre méthodologie.
          </p>

          <div className="bg-[#111114] border-l-4 border-[#C9A227] p-8 my-10">
            <p className="text-white text-xl font-bold italic m-0">
              &quot;Ce qui différencie un professionnel d'un amateur n’est pas la motivation initiale. C’est la capacité à exécuter un plan ennuyeux avec une précision mathématique.&quot;
            </p>
          </div>

          <h3 className="text-white font-bold text-2xl mt-12 mb-4">La vocation de KILLEURUSD</h3>
          <p className="mb-4">
            L'écosystème KILLEURUSD comble un vide majeur : l'absence d'un cadre strict. Nous enseignons une lecture institutionnelle du marché, assortie d'une logique de gestion du risque asymétrique.
          </p>
          <p className="mb-4">
            Depuis 2019, mon seul objectif est la transmission de cette méthode. Je ne crée pas de dépendance via des signaux. Je forme des opérateurs lucides, méthodiques, traitant la spéculation avec le sérieux d'une activité professionnelle.
          </p>
          <p className="mb-4">
            Les techniques enseignées reposent sur les dynamiques fondamentales de la liquidité et de l'offre et la demande, éprouvées depuis plus d'un siècle. Ce n'est ni une mode, ni une faille algorithmique. C'est un métier.
          </p>
          <p className="mt-4">
            L'approche est aride. Elle exige de la remise en question, du travail, et de la résilience face à la perte de capital. Mais pour l'individu déterminé à bâtir une rentabilité solide, c'est l'unique voie sérieuse.
          </p>

          <div className="mt-16 pt-8 border-t border-zinc-800">
            <p className="text-white font-bold mb-8">Si tu es résolu à intégrer ce standard d'exigence et à abandonner les illusions, tu es au bon endroit.</p>
            <Button onClick={() => navigate("checkout")}>Accéder au programme</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
