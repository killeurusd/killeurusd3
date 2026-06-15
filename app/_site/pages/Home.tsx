import {
  ArrowRight, Target, TrendingUp, ShieldAlert, CheckCircle,
  CheckCircle2, Crosshair, Activity, ShieldCheck, Brain, X,
  PlayCircle, Users, Wrench, Radio, Star, Download,
} from "lucide-react";
import Image from "next/image";
import { SectionHeading, LinkButton } from "../primitives";
import HeroChart from "../HeroChart";
import FounderCard from "../FounderCard";
import FaqAccordion from "../FaqAccordion";
import LeadForm from "../LeadForm";
import { COHORT } from "../offer";
import avis1 from "../../../public/avis-1.png";
import avis2 from "../../../public/avis-2.png";
import avis3 from "../../../public/avis-3.png";

// Server Component : aucune hydratation pour le gros du contenu. Les seules parties
// interactives sont isolées en îlots client (Faq, LeadForm) ; les CTA sont des <Link>.
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* 1. HERO PUISSANT */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(122,15,15,0.08),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-[#111114] border border-zinc-800 rounded-sm px-4 py-1.5 mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#7A0F0F] animate-pulse"></span>
              <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider">L'excellence technique</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-8">
              ARRÊTE DE TRADER <br /> AU HASARD.
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed font-medium">
              Maîtrise une approche d’analyse technique fondée sur des principes éprouvés depuis plus d'un siècle. Transforme tes sessions en une exécution structurée, disciplinée et professionnelle.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <LinkButton href="/checkout" variant="primary" className="group">
                Accéder au programme
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </LinkButton>
              <LinkButton href="/contact" variant="secondary">
                Planifier un échange
              </LinkButton>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-400 font-medium">
              <div className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#C9A227] mr-2" /> Écosystème Complet</div>
              <div className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#C9A227] mr-2" /> Mentoring Hebdomadaire</div>
              <div className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#C9A227] mr-2" /> Accès à vie</div>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="aspect-[4/3] bg-[#0B0B0D] border border-zinc-800 rounded-sm overflow-hidden relative shadow-[0_0_50px_rgba(0,0,0,0.8)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_15%,rgba(122,15,15,0.12),transparent_60%)]"></div>
              <div className="absolute inset-x-8 bottom-8 top-12 border border-zinc-800/50 bg-[#111114]/80 backdrop-blur flex flex-col p-4 rounded-sm">
                <div className="flex justify-between items-center border-b border-zinc-800/50 pb-3 mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                    <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                    <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                  </div>
                  <span className="text-[10px] text-zinc-400 font-mono uppercase tracking-wider">Analyse Structurelle</span>
                </div>
                <div className="flex-1 flex items-center justify-center min-h-0">
                  <HeroChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROBLÈME / MIROIR */}
      <section className="py-24 bg-[#0B0B0D]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            subtitle="Le constat"
            title="Pourquoi accumuler les heures sur les graphiques ne suffit plus."
          />
          <p className="text-center text-zinc-400 max-w-3xl mx-auto mb-16 text-lg">
            La motivation n'est pas le problème. C'est l'absence de processus. S'éparpiller entre quinze stratégies et chercher le signal miracle transforme irrémédiablement le trading en pari.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "L'instabilité stratégique", desc: "Tu testes une méthode, puis une autre à la première série de pertes. À force de tout effleurer, tu ne maîtrises absolument rien en profondeur." },
              { icon: ShieldAlert, title: "L'illusion du setup parfait", desc: "Tu crois encore qu’il existe un raccourci, un indicateur magique ou un canal VIP qui réglera tout. Résultat : tu restes totalement dépendant." },
              { icon: TrendingUp, title: "L'exécution émotionnelle", desc: "Tu entres par FOMO, tu coupes par peur. Sans logique mathématique ni plan strict, tu t'étonnes de voir ton capital s'éroder." },
            ].map((item, idx) => (
              <div key={idx} className="bg-[#111114] border border-zinc-800 p-8 rounded-sm hover:border-[#7A0F0F] transition-colors duration-300">
                <item.icon className="w-10 h-10 text-[#7A0F0F] mb-6" />
                <h3 className="text-xl font-bold text-white mb-4 leading-tight">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-[#C9A227] font-bold text-xl uppercase tracking-wider">
              Le problème n’est pas ton potentiel.<br />C’est le désordre de ton approche.
            </p>
          </div>
        </div>
      </section>

      {/* 3. NOUVELLE APPROCHE / MÉTHODE */}
      <section className="py-24 bg-[#111114] border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            subtitle="Le Changement de Paradigme"
            title="Une méthode limpide. Une exécution clinique. Une discipline mathématique."
          />
          <p className="text-center text-zinc-400 max-w-3xl mx-auto mb-16 text-lg">
            Chez KILLEURUSD, tu n’apprends pas à empiler les indicateurs. Tu apprends à déchiffrer le marché grâce à des concepts institutionnels intemporels, pour ensuite les appliquer avec une rigueur absolue dans le réel.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Crosshair, title: "Lecture Spatiale", desc: "Compréhension de la structure, identification des zones de liquidité et lecture pure de l'action du prix, sans bruit." },
              { icon: Activity, title: "Exécution Clinique", desc: "Définition stricte des points d'entrée, placement des niveaux d'invalidation et respect intransigeant du timing." },
              { icon: ShieldCheck, title: "Gestion Asymétrique", desc: "Protection obsessionnelle du capital. Utilisation de ratios risque/récompense pour une survie mathématique à long terme." },
              { icon: Brain, title: "Maîtrise Psychologique", desc: "Cultiver la patience, accepter la probabilité, et forger le contrôle émotionnel nécessaire pour opérer froidement." },
            ].map((pillar, idx) => (
              <div key={idx} className="bg-[#0B0B0D] border border-zinc-800 p-8 rounded-sm group hover:bg-zinc-900 transition-all">
                <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-sm flex items-center justify-center mb-6 group-hover:border-[#C9A227] transition-colors">
                  <pillar.icon className="w-6 h-6 text-[#C9A227]" />
                </div>
                <h3 className="text-white font-bold mb-3">{pillar.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TRANSFORMATION */}
      <section className="py-24 bg-[#0B0B0D]">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading subtitle="L'Évolution" title="Passe du bruit à la clarté" />

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-stretch">
            <div className="bg-[#111114] border border-zinc-800 p-8 md:p-10 rounded-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <X className="w-24 h-24 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-8 border-b border-zinc-800 pb-4">Le trading amateur</h3>
              <ul className="space-y-6 relative z-10">
                {[
                  "sauter frénétiquement d'une stratégie à l'autre,",
                  "prendre des positions guidées par l'émotion,",
                  "polluer ses graphiques avec des indicateurs en retard,",
                  "sous-traiter ses décisions (signaux, alertes),",
                  "opérer sans aucun plan de gestion du risque.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-zinc-400">
                    <X className="w-5 h-5 text-[#7A0F0F] mr-4 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#0B0B0D] border border-[#C9A227]/30 p-8 md:p-10 rounded-sm relative overflow-hidden shadow-[0_0_30px_rgba(201,162,39,0.05)]">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <CheckCircle className="w-24 h-24 text-[#C9A227]" />
              </div>
              <h3 className="text-2xl font-bold text-[#C9A227] mb-8 border-b border-[#C9A227]/20 pb-4">L'approche professionnelle</h3>
              <ul className="space-y-6 relative z-10">
                {[
                  "identifier précisément les zones clés à fort potentiel,",
                  "savoir justifier factuellement chaque entrée en position,",
                  "appliquer un processus d'analyse répétable et épuré,",
                  "gérer son exposition financière de manière chirurgicale,",
                  "traiter le trading avec l'exigence d'un véritable métier.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-white font-medium">
                    <CheckCircle2 className="w-5 h-5 text-[#C9A227] mr-4 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-center text-zinc-400 mt-12 font-bold max-w-2xl mx-auto">
            Notre objectif n'est pas de vendre de l'illusion. Notre mission est d'inculquer une méthode concrète, applicable et pensée pour durer.
          </p>
        </div>
      </section>

      {/* 5. DÉTAIL DE L'OFFRE */}
      <section className="py-24 bg-gradient-to-b from-[#111114] to-[#0B0B0D] border-y border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading subtitle="L'Écosystème KILLEURUSD" title="Ce que tu rejoins vraiment" />

          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xl text-white font-medium mb-4">
              Tu ne rejoins pas ici une simple formation de plus.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Tu rejoins un programme conçu pour t’aider à comprendre le marché, corriger tes erreurs et progresser avec un accompagnement réel.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* CARTE 1: MODULES */}
            <div className="bg-[#0B0B0D] border border-zinc-800 p-8 rounded-sm hover:border-zinc-700 transition-colors flex flex-col h-full">
              <PlayCircle className="w-10 h-10 text-[#C9A227] mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Les modules de formation</h3>
              <p className="text-zinc-400 mb-6 text-sm">Tu accèdes immédiatement à l’ensemble de nos ressources théoriques. Ces modules ont été conçus pour t’aider à :</p>
              <ul className="space-y-3 mb-6 flex-1">
                {[
                  "maîtriser la lecture du prix sans indicateurs,",
                  "comprendre la véritable nature de la liquidité,",
                  "bâtir un plan d'intervention strict et sans faille,",
                  "intégrer les probabilités à ton avantage.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A227] mr-3 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CARTE 2: GROUPE PRIVÉ */}
            <div className="bg-[#0B0B0D] border border-zinc-800 p-8 rounded-sm hover:border-zinc-700 transition-colors flex flex-col h-full">
              <Users className="w-10 h-10 text-[#C9A227] mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Le groupe privé d’analyses et de trades</h3>
              <p className="text-zinc-400 mb-6 text-sm">
                Tu rejoins un canal exclusif où je partage quotidiennement mes lectures de marché, mes setups et la gestion de mes positions en direct.
              </p>
              <ul className="space-y-3 mb-6 flex-1">
                {[
                  "suivre l'action des prix au jour le jour,",
                  "comprendre factuellement les décisions prises,",
                  "éviter les pièges de marché imminents,",
                  "échanger avec des membres confirmés.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A227] mr-3 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CARTE 3: COACHING PRIVÉ */}
            <div className="bg-[#111114] border border-[#C9A227]/40 p-8 rounded-sm shadow-[0_0_30px_rgba(201,162,39,0.05)] relative overflow-hidden flex flex-col h-full">
              <div className="absolute top-0 right-0 bg-[#C9A227] text-[#0B0B0D] text-[10px] font-bold uppercase tracking-widest px-3 py-1">Accélérateur</div>
              <Target className="w-10 h-10 text-[#C9A227] mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">1 coaching privé / semaine (3 mois)</h3>
              <p className="text-zinc-400 mb-6 text-sm">Pendant 3 mois, tu bénéficies d’1 heure de mentoring individuel par semaine en face-à-face. Au programme :</p>
              <ul className="space-y-3 mb-6 flex-1">
                {[
                  "audit complet de tes trades de la semaine,",
                  "mise en lumière et correction de tes biais psychologiques,",
                  "affinement chirurgical de tes points d'entrée,",
                  "mise en place d'objectifs de rigueur mesurables.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A227] mr-3 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CARTE 4: LIVES */}
            <div className="bg-[#111114] border border-[#C9A227]/40 p-8 rounded-sm shadow-[0_0_30px_rgba(201,162,39,0.05)] relative overflow-hidden flex flex-col h-full">
              <div className="absolute top-0 right-0 bg-[#C9A227] text-[#0B0B0D] text-[10px] font-bold uppercase tracking-widest px-3 py-1">Communauté</div>
              <Radio className="w-10 h-10 text-[#C9A227] mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">1 live de groupe par semaine</h3>
              <p className="text-zinc-400 mb-6 text-sm">Le rendez-vous immanquable de la communauté. Un live de groupe d’une heure minimum chaque semaine pour :</p>
              <ul className="space-y-3 mb-6 flex-1">
                {[
                  "prendre du recul macro-économique sur la semaine écoulée,",
                  "décortiquer à froid les configurations complexes,",
                  "désamorcer les pièges du marché à venir,",
                  "répondre en direct à tes interrogations techniques.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A227] mr-3 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CARTE 5: BOITE A OUTILS */}
            <div className="lg:col-span-2 bg-gradient-to-r from-[#0B0B0D] to-[#111114] border border-zinc-800 p-8 md:p-12 rounded-sm hover:border-[#7A0F0F]/40 transition-colors flex flex-col gap-8 relative overflow-hidden group">
              <div className="absolute -inset-24 bg-gradient-to-r from-[#7A0F0F]/0 via-[#7A0F0F]/5 to-[#7A0F0F]/0 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700"></div>

              <div className="relative z-10 flex items-center mb-2">
                <div className="w-16 h-16 bg-[#111114] border border-zinc-800 rounded-full flex items-center justify-center shrink-0 group-hover:border-[#C9A227] transition-colors shadow-lg mr-6">
                  <Wrench className="w-8 h-8 text-[#C9A227]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Une boîte à outils exclusive</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
                    Des outils conçus pour t’aider à progresser avec plus de rigueur, plus de clarté et plus d’efficacité.
                  </p>
                </div>
              </div>

              <div className="relative z-10 grid md:grid-cols-3 gap-6 w-full">
                <div className="bg-[#0B0B0D] border border-zinc-800/50 p-6 rounded-sm">
                  <h4 className="text-white font-bold text-sm flex items-center mb-3">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A227] mr-2 shrink-0" /> Outils d’IA
                  </h4>
                  <p className="text-zinc-400 text-xs leading-relaxed">Pour gagner du temps, mieux structurer ton analyse et accélérer ton travail.</p>
                </div>
                <div className="bg-[#0B0B0D] border border-zinc-800/50 p-6 rounded-sm">
                  <h4 className="text-white font-bold text-sm flex items-center mb-3">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A227] mr-2 shrink-0" /> Indicateurs techniques
                  </h4>
                  <p className="text-zinc-400 text-xs leading-relaxed">Développés pour t’aider à lire le marché avec plus de précision.</p>
                </div>
                <div className="bg-[#0B0B0D] border border-zinc-800/50 p-6 rounded-sm">
                  <h4 className="text-white font-bold text-sm flex items-center mb-3">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A227] mr-2 shrink-0" /> Journal de trading en ligne
                  </h4>
                  <p className="text-zinc-400 text-xs leading-relaxed">Pour suivre tes performances, comprendre tes erreurs et mesurer ta progression.</p>
                </div>
              </div>

              <div className="relative z-10 mt-2 border-t border-zinc-800 pt-6">
                <p className="text-sm text-zinc-300 font-medium mb-2">
                  Ce ne sont pas des gadgets décoratifs. Ce sont des outils pensés pour accompagner concrètement ta progression et renforcer ton cadre de travail.
                </p>
                <p className="text-xs text-zinc-400">
                  Tu ne repars pas seulement avec une méthode. Tu repars aussi avec un véritable arsenal de travail pour mieux analyser, mieux exécuter et mieux progresser dans le temps.
                </p>
              </div>
            </div>
          </div>

          {/* SECTION ONBOARDING */}
          <div className="bg-[#0B0B0D] border border-[#C9A227]/20 p-8 md:p-12 rounded-sm mt-12 shadow-[0_0_40px_rgba(201,162,39,0.03)]">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">Comment se passe ton inscription ?</h3>
            <p className="text-center text-zinc-400 max-w-2xl mx-auto mb-12">
              Tout est mis en place pour que tu puisses démarrer rapidement, être accompagné dès le départ et savoir exactement par où commencer.
            </p>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-[#111114] border border-zinc-800 p-6 rounded-sm relative">
                <div className="w-8 h-8 bg-[#C9A227] rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-[#0B0B0D] text-sm font-black">1</span>
                </div>
                <h4 className="text-base font-bold text-white mb-3">Validation de ton inscription</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">Dès que ton paiement est validé, tu accèdes immédiatement aux modules de formation ainsi qu’aux outils inclus dans le programme.</p>
              </div>

              <div className="bg-[#111114] border border-zinc-800 p-6 rounded-sm relative">
                <div className="w-8 h-8 bg-[#C9A227] rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-[#0B0B0D] text-sm font-black">2</span>
                </div>
                <h4 className="text-base font-bold text-[#C9A227] mb-3">Planification de ta première séance</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">Tu peux réserver directement ta première heure de coaching privé pour lancer ton accompagnement dans les meilleures conditions.</p>
              </div>

              <div className="bg-[#111114] border border-zinc-800 p-6 rounded-sm relative">
                <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center mb-6">
                  <span className="text-zinc-400 text-sm font-black">3</span>
                </div>
                <h4 className="text-base font-bold text-white mb-3">Accès aux groupes privés</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">Sous 24 heures maximum, tu reçois tes accès aux différents groupes privés de la communauté pour suivre les analyses, les prises de position et la dynamique du programme.</p>
              </div>

              <div className="bg-[#111114] border border-zinc-800 p-6 rounded-sm relative">
                <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center mb-6">
                  <span className="text-zinc-400 text-sm font-black">4</span>
                </div>
                <h4 className="text-base font-bold text-white mb-3">Intégration puis suivi personnalisé</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">La première séance sert à faire le point sur ton niveau, t’expliquer le fonctionnement du programme et poser les bases de ton suivi. Les séances suivantes sont consacrées à la correction, à la pratique et à ta progression.</p>
              </div>
            </div>
          </div>

          {/* PRICE BLOCK */}
          <div className="mt-16 bg-[#111114] border border-zinc-800 p-8 md:p-12 text-center rounded-sm max-w-3xl mx-auto shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#7A0F0F] blur-[100px] opacity-20"></div>
            <h3 className="text-3xl font-extrabold text-white mb-2">Ce que tu rejoins vraiment</h3>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">Tu n’investis donc pas dans de simples modules. Tu rejoins une méthode, un suivi et un environnement de travail conçus pour faire évoluer ton trading dans le réel.</p>
            <div className="text-6xl font-black text-white mb-4">997$</div>
            <div className="text-zinc-400 text-sm mb-8 font-medium">Paiement unique. Accès à vie garanti à la plateforme.<br />Inclus : L'accompagnement privé (1h/semaine) pendant 3 mois.</div>
            <LinkButton href="/checkout" className="w-full sm:w-auto px-16 py-5 text-lg">
              Accéder au programme
            </LinkButton>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-8 text-xs text-zinc-300 font-medium">
              <span className="flex items-center"><ShieldCheck className="w-4 h-4 text-[#C9A227] mr-2" /> Paiement sécurisé par Stripe</span>
              <span className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#C9A227] mr-2" /> Droit de rétractation 14 jours</span>
              <span className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#C9A227] mr-2" /> Sans abonnement caché</span>
            </div>
            <p className="text-xs text-zinc-400 mt-6 max-w-lg mx-auto">
              Prochaine cohorte : <strong className="text-white">Bootcamp du {COHORT.dateFr} — {COHORT.seats} places</strong>. Un effectif réduit pour garantir un vrai suivi en petit comité.
            </p>
            <p className="text-xs text-zinc-400 mt-4 max-w-lg mx-auto">
              ⚠️ Le trading comporte un risque élevé de perte en capital. Ce programme est <strong>éducatif</strong> et ne constitue pas un conseil en investissement. Les performances passées ne préjugent pas des performances futures.
            </p>
          </div>
        </div>
      </section>

      {/* 6. À QUI C'EST DESTINÉ */}
      <section className="py-24 bg-[#0B0B0D]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-[#C9A227] pl-4">Cette formation est faite pour toi si...</h3>
            <ul className="space-y-4">
              {[
                "Tu en as marre de changer sans cesse de méthode.",
                "Tu veux enfin comprendre ce que tu fais sur un graphique.",
                "Tu es prêt à apprendre sérieusement.",
                "Tu veux arrêter le trading au pif.",
                "Tu acceptes qu'une progression réelle demande du travail.",
              ].map((item, i) => (
                <li key={i} className="flex items-start text-zinc-400">
                  <CheckCircle className="w-5 h-5 text-[#C9A227] mr-3 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-[#7A0F0F] pl-4">Ce n'est PAS pour toi si...</h3>
            <ul className="space-y-4">
              {[
                "Tu cherches un miracle ou une pilule magique.",
                "Tu veux juste copier-coller des signaux Telegram.",
                "Tu refuses d'appliquer une discipline stricte.",
                "Tu veux gagner vite sans prendre le temps d'apprendre.",
                "Tu n'es pas prêt à te remettre en question.",
              ].map((item, i) => (
                <li key={i} className="flex items-start text-zinc-400">
                  <X className="w-5 h-5 text-[#7A0F0F] mr-3 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 7. PREUVES & TÉMOIGNAGES */}
      <section className="py-24 bg-[#111114] border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="Preuves du Terrain" title="Ils ont arrêté d'espérer. Ils exécutent." />

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { name: "Thomas", level: "2 ans de trading · autodidacte trop dispersé", text: "Je passais d’une méthode à l’autre sans jamais construire une vraie base. Ce cadre m’a permis de nettoyer mes graphiques, de simplifier mes prises de décision et surtout d'identifier mes biais cognitifs récurrents." },
              { name: "Julien", level: "Débutant · structuration depuis zéro", text: "Au lieu de brûler mon capital en testant des indicateurs inutiles, j’ai posé des bases saines. Le mentoring hebdomadaire apporte une valeur inestimable, car il ne laisse aucune erreur sous silence." },
              { name: "Sarah", level: "3 ans de trading · exécution instable", text: "J’avais déjà le bagage technique, mais je manquais cruellement de discipline. KILLEURUSD m’a imposé l'exigence clinique qu'il me manquait pour enfin lisser ma courbe de résultats." },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-[#0B0B0D] border border-zinc-800 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex text-[#C9A227] mb-6">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-zinc-300 italic mb-8 leading-relaxed text-sm">&quot;{testimonial.text}&quot;</p>
                </div>
                <div className="border-t border-zinc-800 pt-4">
                  <div className="font-bold text-white uppercase tracking-wider text-sm">{testimonial.name}</div>
                  <div className="text-xs text-[#C9A227] font-bold mt-1 uppercase tracking-widest">{testimonial.level}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Les résultats de nos élèves</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[avis1, avis2, avis3].map((img, idx) => (
                <div key={idx} className="bg-[#0B0B0D] border border-zinc-800 p-2 rounded-sm group relative overflow-hidden">
                  <div className="bg-[#111114] flex items-center justify-center overflow-hidden rounded-sm min-h-[200px]">
                    <Image
                      src={img}
                      alt={`Capture d'un retour d'élève dans le groupe privé (${idx + 1})`}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-zinc-400 text-xs mt-6 uppercase tracking-wider">Extraits issus de notre groupe privé et du suivi des élèves.</p>
          </div>

          <div className="bg-[#0B0B0D] border border-zinc-800 p-8 rounded-sm text-center">
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Pourquoi faire confiance à cette approche ?</h4>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-zinc-400">
              <div className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#C9A227] mr-2" /> +7 ans de pratique réelle</div>
              <div className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#C9A227] mr-2" /> Zéro illusion marketing</div>
              <div className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#C9A227] mr-2" /> Audit des performances</div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SECTION FONDATEUR */}
      <section className="py-24 bg-[#0B0B0D]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <FounderCard className="aspect-[4/5] shadow-[0_0_30px_rgba(0,0,0,0.5)]" />
          <div>
            <SectionHeading subtitle="L'Expertise" title="Tu n'as pas besoin de promesses, mais d'une méthode." align="left" />
            <h3 className="text-2xl font-bold text-white mb-6">Le marché récompense la discipline, pas la motivation.</h3>
            <div className="text-zinc-400 space-y-6 leading-relaxed text-base">
              <p>Je n'ai aucun intérêt à te vendre l'illusion d'une richesse éclair. Mon rôle est de te transmettre un processus chirurgical, éprouvé sur le terrain, et de forcer la correction de tes erreurs jusqu'à l'autonomie.</p>
              <p>L'industrie du trading s'est transformée en un marché de l'attention toxique. Mais derrière l'écran, le marché reste un environnement mathématique impitoyable. Il sanctionne l'improvisation et paie l'exécution clinique.</p>
              <div className="border-l-2 border-[#C9A227] pl-6 my-8">
                <p className="text-white font-bold italic">&quot;La régularité ne se trouve pas dans un setup caché. Elle découle de l'exécution implacable d'un plan préétabli.&quot;</p>
              </div>
              <p>KILLEURUSD a été fondé sur cette exigence : forger un cercle de traders indépendants, capables d'analyser sans biais et d'exécuter avec la froideur des professionnels.</p>
            </div>
            <div className="mt-10">
              <LinkButton href="/vision" variant="outline">Découvrir notre philosophie</LinkButton>
            </div>
          </div>
        </div>
      </section>

      {/* 9. LEAD CAPTURE */}
      <section className="py-24 bg-[#7A0F0F] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 mix-blend-multiply"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <Download className="w-12 h-12 text-white/50 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Poursuis ta réflexion.</h2>
          <p className="text-white/80 mb-10 text-lg max-w-2xl mx-auto">
            Télécharge gratuitement <strong className="text-white">&quot;L'Audit du Trader Discipliné&quot;</strong>. 10 points de contrôle non-négociables avant d'ouvrir la moindre position sur les marchés.
          </p>

          <LeadForm />
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="py-24 bg-[#0B0B0D]">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeading subtitle="Réponses aux questions les plus fréquentes" title="Questions fréquentes" />
          <FaqAccordion />
        </div>
      </section>

      {/* 11. CTA FINAL */}
      <section className="py-32 bg-[#111114] border-t border-zinc-900 text-center relative">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <SectionHeading subtitle="La prochaine étape" title="Le trading n'est pas un pari. C'est une discipline." />
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
            Si tu es résolu à cesser l'improvisation, à comprendre la dynamique institutionnelle et à te soumettre à un cadre de progression strict, ta place est ici.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <LinkButton href="/checkout" variant="primary" className="text-lg px-12 py-5">
              Accéder au programme
            </LinkButton>
            <LinkButton href="/contact" variant="outline" className="text-lg px-12 py-5 border-zinc-700">
              Contacter l'équipe
            </LinkButton>
          </div>
        </div>
      </section>
    </div>
  );
}
