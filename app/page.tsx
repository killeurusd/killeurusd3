"use client";

import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, Target, TrendingUp, ShieldAlert, CheckCircle, 
  BookOpen, ArrowRight, Menu, X, Lock, Clock, Award, AlertTriangle,
  Mail, MessageSquare, Download, Crosshair, 
  Brain, BarChart, ShieldCheck, Activity, Users, Star,
  PlayCircle, Wrench, Calendar, Radio, Compass, ListChecks,
  CheckCircle2
} from 'lucide-react';

// --- GESTION SEO (Simulation du Head de Next.js - SSR Safe) ---
const useSEO = (title: string, description: string, ogTitle: string, ogDescription: string) => {
  useEffect(() => {
    if (typeof document === 'undefined') return;

    document.title = title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    if (ogTitle) {
      const metaOgTitle = document.querySelector('meta[property="og:title"]');
      if (metaOgTitle) {
        metaOgTitle.setAttribute('content', ogTitle);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'og:title');
        meta.content = ogTitle;
        document.head.appendChild(meta);
      }
    }

    if (ogDescription) {
      const metaOgDescription = document.querySelector('meta[property="og:description"]');
      if (metaOgDescription) {
        metaOgDescription.setAttribute('content', ogDescription);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'og:description');
        meta.content = ogDescription;
        document.head.appendChild(meta);
      }
    }
  }, [title, description, ogTitle, ogDescription]);
};

// --- COMPOSANTS DE BASE UI PREMIUM ---

const Button = ({ children, variant = 'primary', className = '', onClick, type = 'button' }: any) => {
  const baseStyle = "inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all duration-300 rounded-sm";
  const variants: any = {
    primary: "bg-[#7A0F0F] hover:bg-[#5A0A0A] text-white px-8 py-4 text-sm md:text-base shadow-[0_4px_14px_0_rgba(122,15,15,0.39)] hover:shadow-[0_6px_20px_rgba(122,15,15,0.23)] hover:-translate-y-0.5",
    accent: "bg-[#C9A227] hover:bg-[#B38F22] text-[#0B0B0D] px-8 py-4 text-sm md:text-base shadow-[0_4px_14px_0_rgba(201,162,39,0.39)] hover:shadow-[0_6px_20px_rgba(201,162,39,0.23)] hover:-translate-y-0.5",
    secondary: "bg-[#111114] border border-zinc-800 hover:border-[#7A0F0F] text-white px-8 py-4 text-sm md:text-base",
    outline: "border border-zinc-800 hover:bg-[#111114] text-zinc-300 hover:text-white px-6 py-3 text-xs md:text-sm"
  };

  return (
    <button type={type} onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const SectionHeading = ({ subtitle, title, align = 'center' }: any) => (
  <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <span className="text-[#C9A227] font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-4 block">
      {subtitle}
    </span>
    <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
      {title}
    </h2>
  </div>
);

// --- COMPOSANTS PAGES LÉGALES ---
const LegalSection = ({ title, children }: any) => (
  <div className="mb-10">
    <h2 className="text-xl md:text-2xl font-bold text-white mb-6 border-l-4 border-[#7A0F0F] pl-4">{title}</h2>
    <div className="space-y-4 text-zinc-400 leading-relaxed text-sm md:text-base">
      {children}
    </div>
  </div>
);

const LegalLayout = ({ title, lastUpdated, children, navigate }: any) => (
  <div className="pt-32 pb-24 max-w-4xl mx-auto px-6 min-h-screen">
    <button onClick={() => navigate('home')} className="flex items-center text-zinc-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-wider mb-12">
      <ChevronRight className="w-4 h-4 mr-1 rotate-180" /> Retour à l'accueil
    </button>
    <div className="mb-12 border-b border-zinc-800 pb-8">
      <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4">{title}</h1>
      <p className="text-[#C9A227] uppercase tracking-widest text-xs font-bold">Dernière mise à jour : {lastUpdated}</p>
    </div>
    <div>
      {children}
    </div>
  </div>
);

// --- PAGES DU SITE ---

const HomePage = ({ navigate }: any) => {
  useSEO(
    "KILLEUR USD | L'Excellence en Analyse Technique",
    "Arrête de trader au hasard. Rejoins KILLEUR USD et maîtrise une approche d’analyse technique fondée sur des principes éprouvés, l'exécution stricte et la gestion du risque.",
    "KILLEUR USD | L'Excellence en Analyse Technique",
    "Un cadre rigoureux, une méthode éprouvée et un accompagnement individuel pour les traders exigeants."
  );

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "Ce programme est-il adapté aux débutants absolus ?",
      a: "Absolument. La seule condition est d'être enseignable et rigoureux. Si tu cherches un bouton magique ou des signaux à copier, passe ton chemin. Si tu es prêt à assimiler les fondamentaux et à appliquer une discipline stricte, ce cadre te fera gagner des années d'errance."
    },
    {
      q: "J'ai déjà de l'expérience, vais-je vraiment apprendre quelque chose ?",
      a: "Oui. 80% de nos membres ont déjà une expérience des marchés, mais souffrent d'inconstance. Notre processus permet de déconstruire les mauvaises habitudes (gambling, sur-trading, fomo) et d'installer une logique d'exécution clinique."
    },
    {
      q: "Comment justifiez-vous cet investissement (997$) ?",
      a: "Tu n'achètes pas une simple série de vidéos. Tu accèdes à un écosystème complet, intégrant des outils exclusifs, une communauté active, et surtout 1 heure de mentoring individuel par semaine pendant 3 mois. Cet investissement filtre les curieux et garantit un niveau d'accompagnement irréprochable."
    },
    {
      q: "Partagez-vous des signaux de trading ?",
      a: "Non. L'objectif de KILLEURUSD est de forger des traders autonomes, capables de lire le marché et de prendre leurs propres décisions, et non de créer une dépendance à des signaux externes."
    },
    {
      q: "Combien de temps faut-il pour obtenir des résultats ?",
      a: "Compte 3 mois de travail assidu pour maîtriser l'architecture de la méthode, éradiquer les erreurs de débutant et constater une nette amélioration dans ta lecture du prix et ta gestion du risque."
    },
    {
      q: "L'accès à la formation est-il limité dans le temps ?",
      a: "Non. Le paiement est unique. Tu bénéficies d'un accès à vie à la plateforme VOD, aux futures mises à jour des modules et au groupe privé."
    },
    {
      q: "Faut-il un capital important pour démarrer ?",
      a: "Aucunement. L'approche s'applique indépendamment de la taille du compte. Nous recommandons d'ailleurs de s'entraîner en simulation (démo) dans un premier temps, puis de valider ses acquis via les évaluations des Prop Firms."
    },
    {
      q: "Concrètement, comment se déroule le mentoring individuel ?",
      a: "Chaque semaine durant 3 mois, tu réserves un créneau d'une heure via notre calendrier interne. Nous auditons tes positions, corrigeons tes biais en direct sur les graphiques, et définissons ton plan d'action pour la semaine suivante."
    }
  ];

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
              <Button onClick={() => navigate('checkout')} variant="primary" className="group">
                Accéder au programme
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="secondary" onClick={() => navigate('contact')}>
                Planifier un échange
              </Button>
            </div>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-500 font-medium">
              <div className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#C9A227] mr-2" /> Écosystème Complet</div>
              <div className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#C9A227] mr-2" /> Mentoring Hebdomadaire</div>
              <div className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#C9A227] mr-2" /> Accès à vie</div>
            </div>
          </div>

          <div className="hidden lg:block relative">
             <div className="aspect-[4/3] bg-[#0B0B0D] border border-zinc-800 rounded-sm overflow-hidden relative shadow-[0_0_50px_rgba(0,0,0,0.8)]">
               <div className="absolute inset-0 bg-[#111114] flex items-center justify-center opacity-30 mix-blend-luminosity">
                 <BarChart className="w-32 h-32 text-zinc-700" />
               </div>
               <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-transparent to-transparent"></div>
               <div className="absolute inset-x-8 bottom-8 top-12 border border-zinc-800/50 bg-[#111114]/80 backdrop-blur flex flex-col p-4">
                  <div className="flex justify-between items-center border-b border-zinc-800/50 pb-3 mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                      <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                      <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                    </div>
                    <span className="text-[10px] text-zinc-500 font-mono uppercase">Analyse Structurelle</span>
                  </div>
                  <div className="flex-1 border border-dashed border-zinc-700/50 flex items-center justify-center text-zinc-700/50">
                    <BarChart size={64} />
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
              { icon: TrendingUp, title: "L'exécution émotionnelle", desc: "Tu entres par FOMO, tu coupes par peur. Sans logique mathématique ni plan strict, tu t'étonnes de voir ton capital s'éroder." }
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
              Le problème n’est pas ton potentiel.<br/>C’est le désordre de ton approche.
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
              { icon: Brain, title: "Maîtrise Psychologique", desc: "Cultiver la patience, accepter la probabilité, et forger le contrôle émotionnel nécessaire pour opérer froidement." }
            ].map((pillar, idx) => (
              <div key={idx} className="bg-[#0B0B0D] border border-zinc-800 p-8 rounded-sm group hover:bg-zinc-900 transition-all">
                <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-sm flex items-center justify-center mb-6 group-hover:border-[#C9A227] transition-colors">
                  <pillar.icon className="w-6 h-6 text-[#C9A227]" />
                </div>
                <h4 className="text-white font-bold mb-3">{pillar.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">{pillar.desc}</p>
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
                  "opérer sans aucun plan de gestion du risque."
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
                  "traiter le trading avec l'exigence d'un véritable métier."
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-white font-medium">
                    <CheckCircle2 className="w-5 h-5 text-[#C9A227] mr-4 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-center text-zinc-500 mt-12 font-bold max-w-2xl mx-auto">
            Notre objectif n'est pas de vendre de l'illusion. Notre mission est d'inculquer une méthode concrète, applicable et pensée pour durer.
          </p>
        </div>
      </section>

      {/* 5. DÉTAIL DE L'OFFRE (NOUVELLE VERSION) */}
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
            {/* LIGNE 1 */}
            {/* CARTE 1: MODULES */}
            <div className="bg-[#0B0B0D] border border-zinc-800 p-8 rounded-sm hover:border-zinc-700 transition-colors flex flex-col h-full">
              <PlayCircle className="w-10 h-10 text-[#7A0F0F] mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Les modules de formation</h3>
              <p className="text-zinc-400 mb-6 text-sm">Tu accèdes immédiatement à l’ensemble de nos ressources théoriques. Ces modules ont été conçus pour t’aider à :</p>
              <ul className="space-y-3 mb-6 flex-1">
                {[
                  "maîtriser la lecture du prix sans indicateurs,", 
                  "comprendre la véritable nature de la liquidité,", 
                  "bâtir un plan d'intervention strict et sans faille,", 
                  "intégrer les probabilités à ton avantage."
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
                  "échanger avec des membres confirmés."
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-[#7A0F0F] mr-3 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* LIGNE 2 */}
            {/* CARTE 3: COACHING PRIVÉ */}
            <div className="bg-[#111114] border border-[#7A0F0F]/50 p-8 rounded-sm shadow-[0_0_30px_rgba(122,15,15,0.05)] relative overflow-hidden flex flex-col h-full">
              <div className="absolute top-0 right-0 bg-[#7A0F0F] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">Accélérateur</div>
              <Target className="w-10 h-10 text-[#7A0F0F] mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">1 coaching privé / semaine (3 mois)</h3>
              <p className="text-zinc-400 mb-6 text-sm">Pendant 3 mois, tu bénéficies d’1 heure de mentoring individuel par semaine en face-à-face. Au programme :</p>
              <ul className="space-y-3 mb-6 flex-1">
                {[
                  "audit complet de tes trades de la semaine,", 
                  "mise en lumière et correction de tes biais psychologiques,", 
                  "affinement chirurgical de tes points d'entrée,", 
                  "mise en place d'objectifs de rigueur mesurables."
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
                  "répondre en direct à tes interrogations techniques."
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-[#7A0F0F] mr-3 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* LIGNE 3 */}
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
                  <p className="text-zinc-500 text-xs leading-relaxed">Pour gagner du temps, mieux structurer ton analyse et accélérer ton travail.</p>
                </div>
                <div className="bg-[#0B0B0D] border border-zinc-800/50 p-6 rounded-sm">
                  <h4 className="text-white font-bold text-sm flex items-center mb-3">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A227] mr-2 shrink-0" /> Indicateurs techniques
                  </h4>
                  <p className="text-zinc-500 text-xs leading-relaxed">Développés pour t’aider à lire le marché avec plus de précision.</p>
                </div>
                <div className="bg-[#0B0B0D] border border-zinc-800/50 p-6 rounded-sm">
                  <h4 className="text-white font-bold text-sm flex items-center mb-3">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A227] mr-2 shrink-0" /> Journal de trading en ligne
                  </h4>
                  <p className="text-zinc-500 text-xs leading-relaxed">Pour suivre tes performances, comprendre tes erreurs et mesurer ta progression.</p>
                </div>
              </div>

              <div className="relative z-10 mt-2 border-t border-zinc-800 pt-6">
                <p className="text-sm text-zinc-300 font-medium mb-2">
                  Ce ne sont pas des gadgets décoratifs. Ce sont des outils pensés pour accompagner concrètement ta progression et renforcer ton cadre de travail.
                </p>
                <p className="text-xs text-zinc-500">
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
              
              {/* Step 1 */}
              <div className="bg-[#111114] border border-zinc-800 p-6 rounded-sm relative">
                <div className="w-8 h-8 bg-[#7A0F0F] rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-white text-sm font-black">1</span>
                </div>
                <h4 className="text-base font-bold text-white mb-3">Validation de ton inscription</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">Dès que ton paiement est validé, tu accèdes immédiatement aux modules de formation ainsi qu’aux outils inclus dans le programme.</p>
              </div>

              {/* Step 2 */}
              <div className="bg-[#111114] border border-zinc-800 p-6 rounded-sm relative">
                <div className="w-8 h-8 bg-[#C9A227] rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-[#0B0B0D] text-sm font-black">2</span>
                </div>
                <h4 className="text-base font-bold text-[#C9A227] mb-3">Planification de ta première séance</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">Tu peux réserver directement ta première heure de coaching privé pour lancer ton accompagnement dans les meilleures conditions.</p>
              </div>

              {/* Step 3 */}
              <div className="bg-[#111114] border border-zinc-800 p-6 rounded-sm relative">
                <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center mb-6">
                  <span className="text-zinc-400 text-sm font-black">3</span>
                </div>
                <h4 className="text-base font-bold text-white mb-3">Accès aux groupes privés</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">Sous 24 heures maximum, tu reçois tes accès aux différents groupes privés de la communauté pour suivre les analyses, les prises de position et la dynamique du programme.</p>
              </div>

              {/* Step 4 */}
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
            <div className="text-zinc-500 text-sm mb-8 font-medium">Paiement unique. Accès à vie garanti à la plateforme.<br/>Inclus : L'accompagnement privé (1h/semaine) pendant 3 mois.</div>
            <Button onClick={() => navigate('checkout')} className="w-full sm:w-auto px-16 py-5 text-lg">
              Sécuriser ma place
            </Button>
            <p className="text-xs text-zinc-500 mt-6 max-w-lg mx-auto">
              Le programme reste volontairement limité en nombre de places. <strong className="text-zinc-400">Cette exigence permet de préserver un vrai niveau de suivi dans l’accompagnement.</strong>
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
                "Tu acceptes qu'une progression réelle demande du travail."
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
                "Tu n'es pas prêt à te remettre en question."
              ].map((item, i) => (
                <li key={i} className="flex items-start text-zinc-500">
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
              { name: "Sarah", level: "3 ans de trading · exécution instable", text: "J’avais déjà le bagage technique, mais je manquais cruellement de discipline. KILLEURUSD m’a imposé l'exigence clinique qu'il me manquait pour enfin lisser ma courbe de résultats." }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-[#0B0B0D] border border-zinc-800 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex text-[#C9A227] mb-6">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-zinc-300 italic mb-8 leading-relaxed text-sm">"{testimonial.text}"</p>
                </div>
                <div className="border-t border-zinc-800 pt-4">
                  <div className="font-bold text-white uppercase tracking-wider text-sm">{testimonial.name}</div>
                  <div className="text-xs text-[#7A0F0F] font-bold mt-1 uppercase tracking-widest">{testimonial.level}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Les résultats de nos élèves</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "/avis-1.png",
                "/avis-2.png",
                "/avis-3.png"
              ].map((imgSrc, idx) => (
                <div key={idx} className="bg-[#0B0B0D] border border-zinc-800 p-2 rounded-sm group relative overflow-hidden">
                  <div className="bg-[#111114] flex items-center justify-center overflow-hidden rounded-sm min-h-[200px]">
                    <img 
                      src={imgSrc} 
                      alt={`Preuve d'exécution ${idx + 1}`} 
                      className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                      onError={(e: any) => {
                        e.currentTarget.style.display = 'none';
                        if (e.currentTarget.parentElement) {
                           e.currentTarget.parentElement.innerHTML = `<span class="text-zinc-700 text-xs font-mono uppercase tracking-widest">Aperçu Visuel ${idx + 1}</span>`;
                        }
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-zinc-500 text-xs mt-6 uppercase tracking-wider">Extraits issus de notre groupe privé et du suivi des élèves.</p>
          </div>

          <div className="bg-[#0B0B0D] border border-zinc-800 p-8 rounded-sm text-center">
             <h4 className="text-white font-bold uppercase tracking-wider mb-6">Pourquoi faire confiance à cette approche ?</h4>
             <div className="flex flex-wrap justify-center gap-8 text-sm text-zinc-400">
               <div className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#7A0F0F] mr-2" /> +7 ans de pratique réelle</div>
               <div className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#7A0F0F] mr-2" /> Zéro illusion marketing</div>
               <div className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#7A0F0F] mr-2" /> Audit des performances</div>
             </div>
          </div>
        </div>
      </section>

      {/* 8. SECTION FONDATEUR */}
      <section className="py-24 bg-[#0B0B0D]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/5] bg-[#111114] border border-zinc-800 relative overflow-hidden group shadow-[0_0_30px_rgba(0,0,0,0.5)]">
             <div className="absolute inset-0 bg-[#0B0B0D] flex items-center justify-center">
                <Users className="w-32 h-32 text-zinc-800" />
             </div>
             <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/60 to-transparent"></div>
             <div className="absolute bottom-6 left-6 right-6">
                <div className="border-l-4 border-[#7A0F0F] pl-4">
                  <p className="text-white font-black uppercase tracking-widest text-xl mb-1">RAYANE "RAYSS"</p>
                  <p className="text-zinc-400 font-bold text-xs uppercase tracking-wider">FONDATEUR & HEAD TRADER</p>
                </div>
             </div>
          </div>
          <div>
            <SectionHeading subtitle="L'Expertise" title="Tu n'as pas besoin de promesses, mais d'une méthode." align="left" />
            <h3 className="text-2xl font-bold text-white mb-6">Le marché récompense la discipline, pas la motivation.</h3>
            <div className="text-zinc-400 space-y-6 leading-relaxed text-base">
              <p>Je n'ai aucun intérêt à te vendre l'illusion d'une richesse éclair. Mon rôle est de te transmettre un processus chirurgical, éprouvé sur le terrain, et de forcer la correction de tes erreurs jusqu'à l'autonomie.</p>
              <p>L'industrie du trading s'est transformée en un marché de l'attention toxique. Mais derrière l'écran, le marché reste un environnement mathématique impitoyable. Il sanctionne l'improvisation et paie l'exécution clinique.</p>
              <div className="border-l-2 border-[#C9A227] pl-6 my-8">
                <p className="text-white font-bold italic">"La régularité ne se trouve pas dans un setup caché. Elle découle de l'exécution implacable d'un plan préétabli."</p>
              </div>
              <p>KILLEURUSD a été fondé sur cette exigence : forger un cercle de traders indépendants, capables d'analyser sans biais et d'exécuter avec la froideur des professionnels.</p>
            </div>
            <div className="mt-10">
              <Button variant="outline" onClick={() => navigate('about')}>Découvrir notre philosophie</Button>
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
            Télécharge gratuitement <strong className="text-white">"L'Audit du Trader Discipliné"</strong>. 10 points de contrôle non-négociables avant d'ouvrir la moindre position sur les marchés.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto" onSubmit={(e: any) => e.preventDefault()}>
            <input 
              type="text" 
              placeholder="Ton prénom" 
              className="px-6 py-4 bg-[#0B0B0D]/50 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white w-full sm:w-1/3 rounded-sm"
              required 
            />
            <input 
              type="email" 
              placeholder="Ton adresse email" 
              className="px-6 py-4 bg-[#0B0B0D]/50 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white w-full sm:w-1/2 rounded-sm"
              required 
            />
            <button type="submit" className="px-8 py-4 bg-white text-[#7A0F0F] font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors whitespace-nowrap rounded-sm">
              Télécharger la checklist
            </button>
          </form>
          <p className="text-white/50 text-xs mt-4">Accès immédiat. Désinscription en un clic.</p>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="py-24 bg-[#0B0B0D]">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeading subtitle="Réponses aux questions les plus fréquentes" title="Questions fréquentes" />
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-zinc-800 bg-[#111114]">
                <button 
                  className="w-full text-left px-8 py-6 flex justify-between items-center text-white font-bold hover:text-[#C9A227] transition-colors"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span className="pr-6 text-lg">{faq.q}</span>
                  <ChevronRight className={`w-5 h-5 shrink-0 transition-transform ${openFaq === idx ? 'rotate-90 text-[#C9A227]' : 'text-zinc-600'}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-8 pb-8 text-zinc-400 mt-2 leading-relaxed text-base border-t border-zinc-800/50 pt-6">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
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
            <Button onClick={() => navigate('checkout')} variant="primary" className="text-lg px-12 py-5">
              Passer à l'action
            </Button>
            <Button variant="outline" onClick={() => navigate('contact')} className="text-lg px-12 py-5 border-zinc-700">
              Contacter l'équipe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

const AboutPage = ({ navigate }: any) => {
  useSEO("La Vision | KILLEURUSD", "Découvrez la vision de KILLEURUSD. Une approche sans illusion, basée sur la structure du marché et la discipline pour former des traders exigeants.", "", "");
  
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
              "Ce qui différencie un professionnel d'un amateur n’est pas la motivation initiale. C’est la capacité à exécuter un plan ennuyeux avec une précision mathématique."
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
             <Button onClick={() => navigate('checkout')}>Sécuriser ma place</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  useSEO("Contact | KILLEURUSD", "Contactez l'équipe KILLEURUSD pour toute question sur la formation ou l'accompagnement privé.", "", "");

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
              <div className="text-xs text-zinc-500 uppercase font-bold tracking-wider mb-1">Par Email</div>
              <span className="font-bold">contact@killeurusd.com</span>
            </div>
          </div>
          <div className="flex items-center text-white group cursor-pointer">
            <div className="w-12 h-12 bg-[#0B0B0D] border border-zinc-800 rounded-full flex items-center justify-center mr-4 group-hover:border-[#7A0F0F] transition-colors">
              <MessageSquare className="w-5 h-5 text-[#7A0F0F]" />
            </div>
            <div className="text-left">
              <div className="text-xs text-zinc-500 uppercase font-bold tracking-wider mb-1">Sur Telegram</div>
              <span className="font-bold">@KILLEURUSD_Support</span>
            </div>
          </div>
        </div>
      </div>

      <form className="space-y-6 text-left bg-[#0B0B0D] border border-zinc-800 p-8 md:p-10 rounded-sm" onSubmit={(e: any) => e.preventDefault()}>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Nom complet</label>
            <input type="text" className="w-full bg-[#111114] border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-[#7A0F0F] transition-colors rounded-sm" />
          </div>
          <div>
            <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Adresse Email</label>
            <input type="email" className="w-full bg-[#111114] border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-[#7A0F0F] transition-colors rounded-sm" />
          </div>
        </div>
        <div>
          <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Objet de la demande</label>
          <select className="w-full bg-[#111114] border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-[#7A0F0F] transition-colors rounded-sm appearance-none">
            <option>Information sur l'écosystème</option>
            <option>Assistance technique membre</option>
            <option>Requête professionnelle</option>
            <option>Autre</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Message détaillé</label>
          <textarea rows={5} className="w-full bg-[#111114] border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-[#7A0F0F] transition-colors rounded-sm"></textarea>
        </div>
        <Button type="submit" className="w-full">Transmettre la demande</Button>
      </form>
    </div>
  );
};

const BlogPage = ({ navigate }: any) => {
  useSEO("Blog & Analyses | KILLEURUSD", "Articles, analyses techniques et psychologie de marché. Découvrez la méthode KILLEURUSD en détail.", "", "");

  const articles = [
    { id: 1, title: "Pourquoi 90% des traders échouent et comment intégrer le décile supérieur", category: "Psychologie", date: "12 Octobre 2023", readTime: "5 min" },
    { id: 2, title: "La mécanique sous-jacente du Price Action institutionnel", category: "Méthode", date: "28 Septembre 2023", readTime: "8 min" },
    { id: 3, title: "Structurer une routine d'exécution imperméable", category: "Rigueur", date: "15 Septembre 2023", readTime: "6 min" }
  ];

  return (
    <div className="pt-32 pb-24 max-w-6xl mx-auto px-6 min-h-screen">
      <SectionHeading subtitle="Ressources Pédagogiques" title="Analyses & Théorie" align="center" />
      
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {articles.map(article => (
          <div key={article.id} className="bg-[#111114] border border-zinc-800 rounded-sm overflow-hidden flex flex-col group cursor-pointer" onClick={() => navigate('article')}>
            <div className="aspect-[16/9] bg-[#0B0B0D] relative overflow-hidden flex items-center justify-center text-zinc-800">
               <BookOpen size={48} />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C9A227] bg-[#C9A227]/10 px-2 py-1">{article.category}</span>
                <span className="text-xs text-zinc-600">{article.readTime} de lecture</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-4 group-hover:text-[#7A0F0F] transition-colors line-clamp-2">{article.title}</h3>
              <div className="mt-auto flex justify-between items-center text-zinc-500 text-xs font-medium border-t border-zinc-800/50 pt-4">
                <span>{article.date}</span>
                <span className="flex items-center uppercase tracking-wider font-bold group-hover:text-white transition-colors">Lire l'article <ChevronRight className="w-4 h-4 ml-1" /></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ArticlePage = ({ navigate }: any) => {
  useSEO("Pourquoi 90% des traders échouent | KILLEURUSD", "Analyse psychologique et technique sur les raisons de l'échec en trading et comment inverser la tendance.", "", "");

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <button onClick={() => navigate('blog')} className="flex items-center text-zinc-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-wider mb-12">
          <ChevronRight className="w-4 h-4 mr-1 rotate-180" /> Retour aux articles
        </button>
        
        <div className="mb-12">
          <span className="text-[#C9A227] font-bold tracking-wider uppercase text-xs block mb-4">Psychologie • 5 min de lecture</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-8">Pourquoi 90% des traders échouent et comment intégrer le décile supérieur.</h1>
          <div className="flex items-center border-b border-zinc-800 pb-8">
            <div className="w-10 h-10 bg-zinc-800 rounded-full mr-4 flex items-center justify-center text-zinc-500"><Users size={20} /></div>
            <div>
              <div className="text-white font-bold text-sm">RAYANE "RAYSS"</div>
              <div className="text-zinc-500 text-xs">FONDATEUR & HEAD TRADER</div>
            </div>
          </div>
        </div>

        <div className="prose prose-invert prose-zinc max-w-none text-zinc-300 leading-relaxed text-lg">
          <p className="lead text-xl text-white font-medium mb-8">
            Le chiffre fait peur, mais il est factuel. Sur les marchés financiers, l'immense majorité des spéculateurs particuliers détruit son capital. Mais contrairement à ce que suggère la croyance populaire, ce n'est pas dû à un "algorithme truqué". C'est un échec systématique d'exécution.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Le mythe de l'Indicateur Miracle</h2>
          <p className="mb-6">
            L'erreur cardinale réside dans la quête d'infaillibilité. Un indicateur prédictif parfait n'existe pas. Le marché évolue par définition dans un spectre probabiliste. Un opérateur aguerri intègre la perte comme un frais de fonctionnement inhérent à son activité. L'amateur la redoute, la fuit, et finit par s'exposer à un risque systémique.
          </p>

          <div className="bg-[#111114] border-l-4 border-[#7A0F0F] p-6 my-10">
            <p className="font-bold text-white m-0">
              "L'amateur est obsédé par l'entrée. L'expert est obsédé par l'exposition de son capital."
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
          <Button onClick={() => navigate('checkout')}>Intégrer le programme</Button>
        </div>
      </div>
    </div>
  );
};

const AlumniPage = ({ navigate }: any) => {
  useSEO("Accès Anciens Élèves | KILLEURUSD", "Réclamez votre accès gratuit à la nouvelle plateforme KILLEURUSD.", "", "");

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
              <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Prénom d'inscription</label>
              <input type="text" className="w-full bg-[#0B0B0D] border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-[#C9A227] transition-colors rounded-sm" />
            </div>
            <div>
              <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Nom</label>
              <input type="text" className="w-full bg-[#0B0B0D] border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-[#C9A227] transition-colors rounded-sm" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Adresse Email d'origine</label>
            <input type="email" className="w-full bg-[#0B0B0D] border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-[#C9A227] transition-colors rounded-sm" />
          </div>
          <Button type="submit" variant="accent" className="w-full">Confirmer mon identité</Button>
          <p className="text-center text-xs text-zinc-500 mt-4">Vérification des registres sous 48h ouvrées. Tes nouveaux accès seront transmis par courrier électronique.</p>
        </form>
      </div>
    </div>
  );
}

const CheckoutPage = ({ navigate }: any) => {
  useSEO("Validation | KILLEURUSD", "Validation sécurisée de votre place dans la formation KILLEURUSD.", "", "");

  return (
    <div className="pt-32 pb-24 max-w-2xl mx-auto px-6 min-h-screen flex flex-col items-center">
      <Lock className="w-10 h-10 text-zinc-600 mb-6" />
      <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 text-center">Validation Sécurisée</h1>
      <p className="text-zinc-400 text-center mb-10 text-lg">Tu finalises l'accès intégral à l'écosystème KILLEURUSD.</p>
      
      <div className="w-full mb-8 bg-[#7A0F0F]/10 border border-[#7A0F0F]/50 p-6 flex items-start rounded-sm">
         <AlertTriangle className="w-6 h-6 text-red-500 mr-4 shrink-0 mt-1" />
         <div>
           <h4 className="text-white font-bold mb-1">Information de Capacité</h4>
           <p className="text-sm text-zinc-300 leading-relaxed">Le programme reste volontairement limité en nombre de places. Cette exigence permet de préserver un vrai niveau de suivi dans l’accompagnement de ce cycle.</p>
         </div>
      </div>

      <div className="w-full bg-[#111114] border border-zinc-800 p-8 md:p-10 shadow-2xl rounded-sm">
        <div className="flex justify-between items-start mb-8 pb-8 border-b border-zinc-800 text-white">
          <div>
            <h3 className="text-xl font-bold mb-2">L'Accès Intégral + Mentoring</h3>
            <ul className="text-sm text-zinc-500 space-y-2 mt-4">
              <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-[#C9A227]" /> Accès définitif aux modules VOD</li>
              <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-[#C9A227]" /> <strong>1h de mentoring privé / semaine (3 mois)</strong></li>
              <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-[#C9A227]" /> Sessions d'analyse Live hebdomadaires</li>
              <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-[#C9A227]" /> Accès au canal institutionnel & Outils Pro</li>
            </ul>
          </div>
          <div className="text-3xl font-extrabold">997$</div>
        </div>
        
        <Button onClick={() => navigate('thankyou')} variant="accent" className="w-full mb-6">
          Valider mon inscription
        </Button>
        
        <div className="flex justify-center items-center space-x-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">
           <Lock className="w-4 h-4" /> <span>Paiement crypté & sécurisé par Stripe</span>
        </div>
      </div>
      
      <button onClick={() => navigate('home')} className="mt-12 text-sm text-zinc-500 hover:text-white font-bold uppercase tracking-wider transition-colors">
        Retour à l'accueil
      </button>
    </div>
  );
};

const ThankYouPage = () => {
  useSEO("Paiement Confirmé | KILLEURUSD", "Bienvenue chez KILLEURUSD.", "", "");

  return (
    <div className="pt-32 pb-24 max-w-2xl mx-auto px-6 min-h-screen flex flex-col items-center text-center">
      <div className="w-24 h-24 bg-[#0B0B0D] border-2 border-[#C9A227] rounded-full flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(201,162,39,0.2)]">
        <CheckCircle className="w-12 h-12 text-[#C9A227]" />
      </div>
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Accès Autorisé</h1>
      <p className="text-xl text-zinc-400 mb-12">Bienvenue au sein de l'écosystème KILLEURUSD.</p>
      
      <div className="bg-[#111114] border border-zinc-800 p-8 md:p-12 rounded-sm w-full text-left">
        <h3 className="text-white font-bold text-xl mb-6">Protocole de Démarrage :</h3>
        <ol className="text-zinc-400 space-y-6">
          <li className="flex items-start">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">1</span>
            <div>
              <strong className="text-white block mb-1">Réception des identifiants</strong>
              Tes clés d'accès à la plateforme seront délivrées sur ta boîte mail d'ici quelques minutes.
            </div>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">2</span>
            <div>
              <strong className="text-white block mb-1">Connexion aux canaux sécurisés</strong>
              Les liens d'accès aux flux Telegram privés sont disponibles directement sur ton tableau de bord.
            </div>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">3</span>
            <div>
              <strong className="text-white block mb-1">Planification du calibrage</strong>
              Utilise le système de réservation interne pour programmer ton heure de mentoring initiale avec RAYANE "RAYSS".
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

// --- PAGES DES MENTIONS LÉGALES ---

const CGVPage = ({ navigate }: any) => {
  useSEO("Conditions Générales de Vente | KILLEURUSD", "Conditions Générales de Vente du site KILLEURUSD.", "", "");
  
  return (
    <LegalLayout title="Conditions Générales de Vente (CGV)" lastUpdated="[À COMPLÉTER]" navigate={navigate}>
      <LegalSection title="1. Identité du vendeur">
        <p>Le présent site est exploité par :</p>
        <p>
          <strong>RAYSS RESEARCH LLC</strong><br/>
          Forme juridique : Limited Liability Company (LLC)<br/>
          État d’immatriculation : Nouveau-Mexique, États-Unis<br/>
          Siège social : [ADRESSE À COMPLÉTER]<br/>
          Email de contact : [EMAIL SUPPORT À COMPLÉTER]
        </p>
        <p>Ci-après dénommé “le Vendeur”.</p>
      </LegalSection>

      <LegalSection title="2. Objet">
        <p>Les présentes Conditions Générales de Vente ont pour objet de définir les conditions dans lesquelles le Vendeur propose à la vente, via le site internet KILLEUR USD, des produits et services à destination de clients particuliers et professionnels.</p>
        <p>Toute commande passée sur le site implique l’acceptation pleine et entière des présentes CGV.</p>
      </LegalSection>

      <LegalSection title="3. Produits et services proposés">
        <p>Le Vendeur propose notamment à la vente une offre de formation et d’accompagnement en trading comprenant, à la date des présentes :</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>un accès immédiat à une formation numérique en ligne,</li>
          <li>un accompagnement privé individuel (1 heure par semaine),</li>
          <li>des sessions de coaching de groupe régulières, selon les modalités définies par le Vendeur.</li>
        </ul>
        <p>Le contenu exact de l’offre, sa composition, ses modules, ses bonus, ses modalités d’accompagnement et ses éventuelles évolutions sont présentés sur la page de vente du site.</p>
        <p>Le Vendeur se réserve le droit de faire évoluer, modifier, enrichir, retirer ou adapter tout ou partie de l’offre, de son contenu, de son organisation ou de ses modalités, à tout moment, afin d’améliorer l’expérience client ou d’adapter son offre.</p>
      </LegalSection>

      <LegalSection title="4. Public concerné">
        <p>Les offres du site peuvent être souscrites par :</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>des particuliers agissant à des fins personnelles,</li>
          <li>des professionnels agissant dans le cadre de leur activité.</li>
        </ul>
        <p>Le client déclare avoir la capacité juridique nécessaire pour contracter et utiliser les services proposés.</p>
      </LegalSection>

      <LegalSection title="5. Caractéristiques essentielles de l’offre principale">
        <p>L’offre principale vendue sur le site comprend actuellement :</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>l’accès à une formation numérique en ligne,</li>
          <li>un accès immédiat au contenu pédagogique après confirmation du paiement,</li>
          <li>1 heure de coaching privé par semaine pendant 3 mois,</li>
          <li>des sessions de groupe régulières, selon les disponibilités, l’organisation et les modalités librement définies par le Vendeur.</li>
        </ul>
        <p>Le client reconnaît que le contenu exact et l’organisation de l’offre peuvent évoluer à la discrétion du Vendeur.</p>
      </LegalSection>

      <LegalSection title="6. Prix">
        <p>Le prix de l’offre principale est fixé à : <strong>997 USD</strong></p>
        <p>Sauf mention contraire, les prix affichés sur le site sont exprimés en dollars américains.</p>
        <p>Le Vendeur se réserve le droit de modifier ses prix à tout moment. Toutefois, le prix applicable à une commande est celui affiché au moment de la validation de celle-ci.</p>
        <p>Les éventuelles taxes applicables, obligations déclaratives locales, frais bancaires, frais de conversion de devise ou autres frais annexes restent à la charge du client, sauf mention contraire affichée au moment de la commande.</p>
      </LegalSection>

      <LegalSection title="7. Commande">
        <p>La commande est réputée formée dès validation du paiement par le client et confirmation de celui-ci par le prestataire de paiement.</p>
        <p>Avant validation définitive, le client est invité à vérifier le détail de sa commande, son prix total, et à corriger toute éventuelle erreur.</p>
        <p>Le Vendeur se réserve le droit de refuser ou d’annuler toute commande en cas de fraude, de tentative de fraude, de comportement abusif, de litige antérieur, ou pour tout motif légitime.</p>
      </LegalSection>

      <LegalSection title="8. Modalités de paiement">
        <p>Le paiement est effectué via Stripe.</p>
        <p>Les moyens de paiement acceptés sont ceux proposés par Stripe au moment de la commande.</p>
        <p>Le client garantit qu’il dispose des autorisations nécessaires pour utiliser le moyen de paiement choisi.</p>
        <p>En cas de refus de paiement, d’incident, d’impayé, ou de contestation bancaire abusive, le Vendeur pourra suspendre ou annuler l’accès aux services concernés.</p>
      </LegalSection>

      <LegalSection title="9. Livraison / accès aux services">
        <h3 className="text-white font-bold mb-2 mt-4">9.1 Formation numérique</h3>
        <p>L’accès à la formation est fourni immédiatement après validation du paiement, sauf incident technique ou vérification particulière.</p>
        <h3 className="text-white font-bold mb-2 mt-4">9.2 Coaching privé</h3>
        <p>Le coaching privé (à raison d'une heure par semaine) est inclus pour une durée de 3 mois. Les séances doivent être réservées selon les modalités communiquées par le Vendeur.</p>
        <h3 className="text-white font-bold mb-2 mt-4">9.3 Coaching de groupe</h3>
        <p>Les sessions de groupe peuvent être proposées selon une fréquence, une fait et une disponibilité librement déterminées par le Vendeur. Le client reconnaît que ces sessions ne constituent pas un engagement fixe, permanent ou intangible, sauf mention expresse contraire sur la page de vente au moment de l’achat.</p>
      </LegalSection>

      <LegalSection title="10. Durée d’accès">
        <h3 className="text-white font-bold mb-2 mt-4">10.1 Formation</h3>
        <p>Sauf indication contraire au moment de l’achat, l’accès à la formation est accordé à vie, sous réserve du maintien du service, de la plateforme et du respect des présentes CGV.</p>
        <h3 className="text-white font-bold mb-2 mt-4">10.2 Coaching privé</h3>
        <p>Le coaching privé est accessible pendant une durée de 3 mois à compter de la confirmation de la commande, sauf mention contraire expresse.</p>
        <h3 className="text-white font-bold mb-2 mt-4">10.3 Coaching de groupe</h3>
        <p>Le coaching de groupe est proposé de manière variable et peut être modifié, suspendu, remplacé ou supprimé à tout moment par le Vendeur.</p>
      </LegalSection>

      <LegalSection title="11. Droit de rétractation">
        <h3 className="text-white font-bold mb-2 mt-4">11.1 Clients consommateurs</h3>
        <p>Lorsqu’un client agit en qualité de consommateur, il bénéficie d’un délai de rétractation de 14 jours à compter de la conclusion du contrat.</p>
        <p>Pour exercer ce droit, le client doit notifier sa décision de se rétracter par écrit à l’adresse email suivante : [EMAIL SUPPORT À COMPLÉTER]</p>
        <p>Toute demande doit permettre d’identifier clairement le client et la commande concernée.</p>
        <h3 className="text-white font-bold mb-2 mt-4">11.2 Remboursement en cas de rétractation</h3>
        <p>En cas de rétractation valable exercée dans le délai applicable, le Vendeur remboursera les sommes versées dans les meilleurs délais et au plus tard dans les délais requis par la réglementation applicable.</p>
        <h3 className="text-white font-bold mb-2 mt-4">11.3 Évolution future</h3>
        <p>Le client est informé que, pour les contenus numériques fournis immédiatement, un régime différent pourra être mis en place à l’avenir avec consentement exprès et reconnaissance de perte du droit de rétractation, conformément aux règles applicables.</p>
      </LegalSection>

      <LegalSection title="12. Conditions spécifiques du coaching">
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>12.1 Réservation :</strong> Les séances de coaching privé doivent être réservées selon les créneaux proposés par le Vendeur.</li>
          <li><strong>12.2 Annulation / report :</strong> Toute annulation ou demande de report doit être effectuée au minimum 24 heures à l’avance.</li>
          <li><strong>12.3 Absence :</strong> En cas d’absence du client, de retard important, ou de non-présentation sans respect du délai d’annulation de 24 heures, la séance est considérée comme due et n’est pas remboursable.</li>
          <li><strong>12.4 Disponibilité :</strong> Le Vendeur fera ses meilleurs efforts pour proposer des créneaux adaptés, sans garantie de disponibilité immédiate ou illimitée.</li>
        </ul>
      </LegalSection>

      <LegalSection title="13. Obligations du client">
        <p>Le client s’engage à :</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>fournir des informations exactes lors de sa commande,</li>
          <li>ne pas partager ses accès,</li>
          <li>ne pas revendre, céder, louer ou transmettre les contenus achetés,</li>
          <li>ne pas reproduire, copy, diffuser ou exploiter commercialement les supports fournis sans autorisation écrite préalable,</li>
          <li>adopter un comportement respectueux dans les échanges, coachings et espaces de groupe.</li>
        </ul>
        <p>Le non-respect de ces obligations pourra entraîner la suspension ou la suppression de l’accès aux services, sans remboursement.</p>
      </LegalSection>

      <LegalSection title="14. Propriété intellectuelle">
        <p>L’ensemble des contenus proposés par le Vendeur, incluant notamment les vidéos, textes, méthodes, documents, supports pédagogiques, visuels, structures de formation, marques, logos, et contenus du site, est protégé par les règles de propriété intellectuelle applicables.</p>
        <p>Tous les droits sont réservés.</p>
        <p>Aucune reproduction, diffusion, revente, adaptation, publication, communication ou exploitation, totale ou partielle, n’est autorisée sans l’accord écrit préalable du Vendeur.</p>
      </LegalSection>

      <LegalSection title="15. Responsabilité et avertissements">
        <p>Le contenu proposé sur le site et dans les offres du Vendeur est fourni à titre strictement éducatif et informatif.</p>
        <p>Le Vendeur :</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>ne fournit pas de conseil en investissement personnalisé,</li>
          <li>ne garantit aucun résultat,</li>
          <li>ne promet aucun gain,</li>
          <li>ne garantit aucune performance future,</li>
          <li>ne saurait être tenu responsable des décisions de trading, d’investissement ou de gestion financière prises par le client.</li>
        </ul>
        <p>Le trading et l’investissement comportent des risques importants de perte en capital. Le client reste seul responsable de ses décisions, de leur exécution et de leurs conséquences.</p>
        <p>Les performances passées, exemples, illustrations, analyses ou éléments pédagogiques éventuels ne constituent en aucun cas une garantie de résultats futurs.</p>
      </LegalSection>

      <LegalSection title="16. Force majeure">
        <p>Le Vendeur ne pourra être tenu responsable d’un retard ou d’une inexécution résultant d’un cas de force majeure ou de tout événement échappant raisonnablement à son contrôle.</p>
      </LegalSection>

      <LegalSection title="17. Suspension / résiliation">
        <p>Le Vendeur se réserve le droit de suspendre, restreindre ou résilier l’accès du client en cas de :</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>violation des présentes CGV,</li>
          <li>usage abusif,</li>
          <li>fraude,</li>
          <li>comportement nuisible,</li>
          <li>atteinte aux intérêts du Vendeur ou des autres utilisateurs.</li>
        </ul>
        <p>Une telle mesure pourra intervenir sans remboursement si les faits le justifient.</p>
      </LegalSection>

      <LegalSection title="18. Droit applicable">
        <p>Les présentes CGV sont rédigées en français.</p>
        <p>Elles sont soumises au droit applicable déterminé conformément aux règles de conflit de lois applicables, avec référence principale au droit de l’État du Nouveau-Mexique / droit américain lorsque cela est possible.</p>
        <p>Toutefois, si le client est un consommateur bénéficiant de dispositions impératives plus protectrices dans son pays de résidence habituelle, ces dispositions pourront demeurer applicables nonobstant le présent choix de loi.</p>
      </LegalSection>

      <LegalSection title="19. Réclamations et litiges">
        <p>Toute réclamation doit être adressée en priorité à : [EMAIL SUPPORT À COMPLÉTER]</p>
        <p>Le client est invité à rechercher d’abord une solution amiable avec le Vendeur.</p>
        <h3 className="text-white font-bold mb-2 mt-4">19.1 Médiation de la consommation</h3>
        <p>Clause provisoire à compléter avant mise en ligne définitive si nécessaire : Si le client agit en qualité de consommateur et que la réglementation applicable l’exige, il pourra recourir à un dispositif de médiation de la consommation selon les informations qui seront communiquées par le Vendeur.</p>
      </LegalSection>

      <LegalSection title="20. Nullité partielle">
        <p>Si une clause des présentes CGV était déclarée nulle, illégale ou inapplicable, les autres stipulations demeureraient pleinement en vigueur.</p>
      </LegalSection>

      <LegalSection title="21. Acceptation">
        <p>Le client reconnaît avoir pris connaissance des présentes CGV avant toute commande, les avoir comprises et acceptées sans réserve.</p>
      </LegalSection>

      <LegalSection title="22. Coordonnées à compléter">
        <p>
          Adresse du siège : [À COMPLÉTER]<br/>
          Email support : [À COMPLÉTER]<br/>
          Date de mise à jour : [À COMPLÉTER]<br/>
          Médiateur consommation : [À COMPLÉTER SI NÉCESSAIRE]
        </p>
      </LegalSection>
    </LegalLayout>
  );
};

const LegalNoticePage = ({ navigate }: any) => {
  useSEO("Legal Notice | KILLEURUSD", "Legal Notice and Publisher Information for KILLEURUSD.", "", "");
  
  return (
    <LegalLayout title="Legal Notice" lastUpdated="[INSERT DATE]" navigate={navigate}>
      <LegalSection title="1. Website Publisher">
        <p>This website is published and operated by:</p>
        <p>
          <strong>RAYSS RESEARCH LLC</strong><br/>
          A New Mexico limited liability company<br/>
          Registered in the State of New Mexico, USA<br/>
          Registered address: [INSERT REGISTERED ADDRESS]<br/>
          Support / legal email: [INSERT EMAIL ADDRESS]
        </p>
        <p>Throughout this Legal Notice, “Company,” “we,” “us,” and “our” refer to RAYSS RESEARCH LLC.</p>
      </LegalSection>

      <LegalSection title="2. Website Brand">
        <p>This website is operated under the brand name: <strong>KILLEUR USD / KILLER USD</strong></p>
        <p>Unless otherwise stated, all content, offers, products, and services presented under this brand are provided by RAYSS RESEARCH LLC.</p>
      </LegalSection>

      <LegalSection title="3. Website Purpose">
        <p>This website is intended to provide information, educational content, digital training, coaching-related offers, and related business services under the KILLEUR USD / KILLER USD brand.</p>
        <p>Nothing on this website should be interpreted as personalized legal, tax, financial, or investment advice.</p>
      </LegalSection>

      <LegalSection title="4. Hosting Provider">
        <p>This website is hosted by:</p>
        <p>
          [INSERT HOSTING PROVIDER NAME]<br/>
          [INSERT HOSTING PROVIDER ADDRESS]<br/>
          [INSERT HOSTING PROVIDER WEBSITE OR CONTACT DETAILS]
        </p>
        <p>If the website is deployed through a platform such as Vercel or another hosting provider, replace this section with the exact legal details of that provider.</p>
      </LegalSection>

      <LegalSection title="5. Contact">
        <p>For support, legal inquiries, or general contact requests, you may contact:</p>
        <p>
          RAYSS RESEARCH LLC<br/>
          Email: [INSERT EMAIL ADDRESS]
        </p>
        <p>If you provide a dedicated support address and a separate legal address, you may distinguish them here.</p>
      </LegalSection>

      <LegalSection title="6. Intellectual Property">
        <p>Unless otherwise stated, all elements of this website are the exclusive property of RAYSS RESEARCH LLC or are used under appropriate license.</p>
        <p>This includes, without limitation:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>texts,</li>
          <li>brand names,</li>
          <li>logos,</li>
          <li>graphics,</li>
          <li>training materials,</li>
          <li>visual identity,</li>
          <li>page structures,</li>
          <li>educational frameworks,</li>
          <li>downloadable materials,</li>
          <li>videos,</li>
          <li>and other website content.</li>
        </ul>
        <p>No part of this website may be copied, reproduced, republished, uploaded, transmitted, distributed, sold, licensed, or otherwise exploited without prior written authorization from the Company.</p>
        <p>Unauthorized use of any part of the website may result in legal action.</p>
      </LegalSection>

      <LegalSection title="7. Trademarks and Brand Elements">
        <p>The names KILLEUR USD and KILLER USD, along with any associated logos, slogans, design elements, and branding components, may be protected under applicable intellectual property laws.</p>
        <p>Any unauthorized use, imitation, or misuse of the brand identity is prohibited.</p>
      </LegalSection>

      <LegalSection title="8. Website Access">
        <p>The Company makes reasonable efforts to keep the website accessible and functional. However, access to the website may be suspended, interrupted, restricted, or limited at any time for maintenance, updates, technical issues, security reasons, or any other business reason.</p>
        <p>The Company does not guarantee uninterrupted or error-free access to the website.</p>
      </LegalSection>

      <LegalSection title="9. Website Content">
        <p>The Company strives to provide content that is clear, accurate, and useful. However, the information published on this website may be updated, modified, corrected, or removed at any time without notice.</p>
        <p>The Company does not guarantee that all information on the website is complete, current, or free of errors at all times.</p>
        <p>Use of the website and reliance on its content remain at your own risk.</p>
      </LegalSection>

      <LegalSection title="10. No Professional or Investment Advice">
        <p>The content made available on this website is provided for educational and informational purposes only.</p>
        <p>The Company does not provide:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>personalized investment advice,</li>
          <li>brokerage services,</li>
          <li>portfolio management,</li>
          <li>legal advice,</li>
          <li>tax advice,</li>
          <li>or any regulated advisory service unless expressly stated otherwise.</li>
        </ul>
        <p>Any trading or financial decisions made after viewing this website remain solely your responsibility.</p>
      </LegalSection>

      <LegalSection title="11. Limitation of Responsibility">
        <p>To the fullest extent permitted by applicable law, RAYSS RESEARCH LLC shall not be held liable for:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>errors or omissions on the website,</li>
          <li>temporary or permanent website unavailability,</li>
          <li>technical failures,</li>
          <li>data loss,</li>
          <li>unauthorized access,</li>
          <li>reliance placed on website content,</li>
          <li>business losses,</li>
          <li>financial losses,</li>
          <li>trading losses,</li>
          <li>or any indirect, incidental, or consequential damages arising from the use of the website.</li>
        </ul>
      </LegalSection>

      <LegalSection title="12. External Links">
        <p>This website may contain links to third-party websites, platforms, tools, or services.</p>
        <p>Such links are provided for convenience only.</p>
        <p>The Company does not control and is not responsible for the content, terms, practices, availability, or privacy standards of third-party websites.</p>
        <p>Accessing third-party websites is done at your own risk.</p>
      </LegalSection>

      <LegalSection title="13. User Responsibility">
        <p>By using this website, you agree to do so lawfully and responsibly.</p>
        <p>You agree not to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>misuse the website,</li>
          <li>interfere with its operation,</li>
          <li>attempt unauthorized access,</li>
          <li>copy protected content,</li>
          <li>engage in fraud or abusive conduct,</li>
          <li>or use the website in a way that may damage the Company or its reputation.</li>
        </ul>
      </LegalSection>

      <LegalSection title="14. Applicable Documents">
        <p>Use of this website may also be governed by additional legal documents, including: Terms & Conditions and Privacy Policy.</p>
        <p>In the event of a conflict between this Legal Notice and another contractual document, the more specific document shall prevail for the relevant subject matter.</p>
      </LegalSection>

      <LegalSection title="15. Governing Law">
        <p>This Legal Notice shall be governed by and interpreted in accordance with the laws of the State of New Mexico, USA, without regard to conflict of laws principles.</p>
      </LegalSection>

      <LegalSection title="16. Modifications">
        <p>The Company reserves the right to update, revise, or modify this Legal Notice at any time.</p>
        <p>The updated version will be published on this page with the revised date.</p>
        <p>Your continued use of the website after such changes are posted constitutes acceptance of the updated version.</p>
      </LegalSection>

      <LegalSection title="17. Information to Complete">
        <p>Before publication, make sure to complete the following fields:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Registered address</li>
          <li>Email address</li>
          <li>Hosting provider details</li>
          <li>Last updated date</li>
        </ul>
      </LegalSection>
    </LegalLayout>
  );
};

const PrivacyPolicyPage = ({ navigate }: any) => {
  useSEO("Privacy Policy | KILLEURUSD", "Privacy Policy and data protection details for KILLEURUSD.", "", "");
  
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="[INSERT DATE]" navigate={navigate}>
      <p className="mb-8 text-zinc-300">
        This Privacy Policy explains how RAYSS RESEARCH LLC, operating the KILLEUR USD / KILLER USD website and brand, collects, uses, stores, shares, and protects your information when you visit the website, submit a form, purchase a product or service, subscribe to communications, or otherwise interact with us.
      </p>
      <p className="mb-8 text-zinc-300">By using the website, you agree to the practices described in this Privacy Policy. If you do not agree with this Privacy Policy, please do not use the website.</p>

      <LegalSection title="1. Company Information">
        <p>
          RAYSS RESEARCH LLC<br/>
          A New Mexico limited liability company<br/>
          Registered in the State of New Mexico, USA<br/>
          Registered address: [INSERT REGISTERED ADDRESS]<br/>
          Privacy contact email: [INSERT PRIVACY EMAIL]
        </p>
        <p>Throughout this Privacy Policy, “Company,” “we,” “us,” and “our” refer to RAYSS RESEARCH LLC. “You” refers to any visitor, user, lead, subscriber, customer, or other individual interacting with the website.</p>
      </LegalSection>

      <LegalSection title="2. Information We May Collect">
        <h3 className="text-white font-bold mb-2 mt-4">2.1 Information You Provide Directly</h3>
        <p>We may collect personal information that you voluntarily provide, including:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>your name, email address, phone number,</li>
          <li>billing information, payment-related details,</li>
          <li>company name, contact information,</li>
          <li>messages submitted through forms, booking information, support requests,</li>
          <li>and any information you choose to provide to us.</li>
        </ul>

        <h3 className="text-white font-bold mb-2 mt-4">2.2 Payment Information</h3>
        <p>Payments are processed through third-party payment providers such as Stripe. We do not typically store your full payment card details on our own servers unless explicitly stated otherwise.</p>

        <h3 className="text-white font-bold mb-2 mt-4">2.3 Account / Access Information</h3>
        <p>If we provide account access, member access, training access, or booking access, we may collect login details, account identifiers, access history, and related technical information.</p>

        <h3 className="text-white font-bold mb-2 mt-4">2.4 Automatically Collected Information</h3>
        <p>When you use the website, we may automatically collect certain technical and usage data, including: IP address, browser type, device type, operating system, pages visited, time spent on pages, referral URLs, general location based on IP, cookie identifiers, and analytics-related data.</p>

        <h3 className="text-white font-bold mb-2 mt-4">2.5 Cookies and Similar Technologies</h3>
        <p>We may use cookies, pixels, tags, scripts, and similar technologies to operate the website, improve performance, analyze traffic, remember preferences, and support marketing or retargeting efforts.</p>
      </LegalSection>

      <LegalSection title="3. How We Use Your Information">
        <p>We may use your information for the following purposes:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>to operate and maintain the website,</li>
          <li>to deliver products, services, training, and coaching,</li>
          <li>to process payments, to communicate with you,</li>
          <li>to send confirmations, updates, and support messages, to respond to inquiries,</li>
          <li>to manage bookings and coaching schedules,</li>
          <li>to improve our website, services, and offers,</li>
          <li>to analyze performance and user behavior,</li>
          <li>to send promotional emails or marketing communications,</li>
          <li>to protect against fraud, abuse, unauthorized access, or misuse,</li>
          <li>to enforce our legal terms and policies, and to comply with legal obligations.</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Marketing Communications">
        <p>If you subscribe to our emails, download a resource, fill in a form, purchase an offer, or otherwise provide your contact details, we may send you: educational emails, updates about our offers, launch announcements, reminders, support-related messages, and promotional communications.</p>
        <p>You may unsubscribe from marketing emails at any time by using the unsubscribe link included in the email or by contacting us directly. Please note that even if you unsubscribe from marketing emails, we may still send transactional or service-related messages when necessary.</p>
      </LegalSection>

      <LegalSection title="5. How We Share Information">
        <p>We do not sell your personal information in the ordinary sense of selling customer lists for cash. However, we may share your information with trusted third parties when necessary to operate the business, including: payment processors, email service providers, hosting providers, analytics providers, booking or scheduling tools, customer support tools, website infrastructure providers, contractors or service providers assisting us, legal or compliance professionals, or competent authorities where required by law.</p>
        <p>We may also disclose information to enforce our legal rights, to prevent fraud or abuse, to protect the website, users, or business, in connection with a merger, acquisition, sale of assets, restructuring, or similar business transaction, or if legally required to do so.</p>
      </LegalSection>

      <LegalSection title="6. Third-Party Services">
        <p>The website may rely on third-party tools, platforms, or services such as: Stripe, hosting providers, email marketing tools, analytics tools, scheduling tools, embedded content providers, or communication tools.</p>
        <p>These third parties may process your information under their own privacy policies and terms. We are not responsible for the privacy practices of third-party services we do not control. You should review their policies directly where relevant.</p>
      </LegalSection>

      <LegalSection title="7. Data Retention">
        <p>We retain information for as long as reasonably necessary for: providing the services, fulfilling transactions, maintaining business records, handling customer relationships, complying with legal obligations, resolving disputes, enforcing agreements, and protecting the business.</p>
      </LegalSection>

      <LegalSection title="8. Data Security">
        <p>We take reasonable administrative, technical, and organizational measures to help protect personal information against unauthorized access, loss, misuse, disclosure, alteration, or destruction. However, no method of transmission over the internet and no method of storage is completely secure. Therefore, we cannot guarantee absolute security. You use the website and provide information at your own risk.</p>
      </LegalSection>

      <LegalSection title="9. International Data Transfers">
        <p>Because the Company is based in the United States and may use service providers located in different countries, your information may be transferred to, stored in, or processed in jurisdictions outside your country of residence.</p>
        <p>By using the website and providing your information, you understand and agree that your information may be transferred to and processed in the United States and other jurisdictions where our service providers operate.</p>
      </LegalSection>

      <LegalSection title="10. Your Choices">
        <p>Depending on how you interact with us, you may choose to: not submit forms, not provide optional information, unsubscribe from marketing emails, disable cookies through your browser settings, or contact us to request updates or corrections to your information.</p>
      </LegalSection>

      <LegalSection title="11. Access, Correction, and Deletion Requests">
        <p>Depending on applicable law and your location, you may have the right to request: access to certain personal information we hold about you, correction of inaccurate information, deletion of certain information, restriction of certain processing, or information about how your data is used.</p>
        <p>To make such a request, contact us at: [INSERT PRIVACY EMAIL]</p>
      </LegalSection>

      <LegalSection title="12. Cookies and Tracking Technologies">
        <p>We may use cookies and similar technologies to: keep the website functioning properly, remember settings or preferences, measure website traffic, analyze user behavior, improve performance, and support advertising or remarketing activities.</p>
        <p>You can manage cookies through your browser settings. In some cases, your browser may allow you to block, delete, or limit cookies. If you use ad blockers, privacy settings, or browser restrictions, some website features may not function as intended.</p>
      </LegalSection>

      <LegalSection title="13. Analytics">
        <p>We may use analytics tools to understand how users interact with the website, which pages are visited, how traffic reaches the site, and how we can improve the user experience and performance of the business. These tools may use cookies, tags, or similar technologies and may collect technical and usage information.</p>
      </LegalSection>

      <LegalSection title="14. Do Not Track">
        <p>Some browsers offer a “Do Not Track” feature. Because there is no universal standard for how websites should respond to Do Not Track signals, the website may not respond to such signals in a uniform way unless and until a legally required standard applies.</p>
      </LegalSection>

      <LegalSection title="15. Children’s Privacy">
        <p>This website is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe that a child under 13 has provided personal information through the website, please contact us so that we can take appropriate steps.</p>
      </LegalSection>

      <LegalSection title="16. User-Generated Content / Communications">
        <p>If you submit messages, comments, support requests, testimonials, feedback, survey responses, or similar content, we may store and use that information for support, service improvement, quality control, legal protection, or business purposes.</p>
      </LegalSection>

      <LegalSection title="17. Business Transfers">
        <p>If the Company is involved in a merger, acquisition, financing, reorganization, sale of assets, or similar transaction, your information may be transferred as part of that transaction, subject to applicable law.</p>
      </LegalSection>

      <LegalSection title="18. Changes to This Privacy Policy">
        <p>We may update this Privacy Policy at any time. When we do, the updated version will be posted on this page with a new “Last updated” date. Your continued use of the website after any changes are posted constitutes acceptance of the updated Privacy Policy.</p>
      </LegalSection>

      <LegalSection title="19. Contact">
        <p>If you have questions about this Privacy Policy or wish to contact us regarding privacy matters, you may contact:</p>
        <p>
          RAYSS RESEARCH LLC<br/>
          Address: [INSERT REGISTERED ADDRESS]<br/>
          Privacy email: [INSERT PRIVACY EMAIL]
        </p>
      </LegalSection>

      <LegalSection title="20. Fields to Complete Before Publication">
        <p>Before publishing this Privacy Policy, make sure to complete:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Registered address</li>
          <li>Privacy email</li>
          <li>Last updated date</li>
          <li>any specific third-party tools you want to name explicitly</li>
          <li>any cookie / analytics tools you actually use</li>
        </ul>
      </LegalSection>
    </LegalLayout>
  );
};


// --- APP PRINCIPALE (Le Chef d'Orchestre) ---

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [currentPage]);

  const navLinks = [
    { name: 'Le Programme', id: 'home' },
    { name: 'Vision', id: 'about' },
    { name: 'Blog', id: 'blog' },
    { name: 'Contact', id: 'contact' },
  ];

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <HomePage navigate={setCurrentPage} />;
      case 'about': return <AboutPage navigate={setCurrentPage} />;
      case 'contact': return <ContactPage />;
      case 'blog': return <BlogPage navigate={setCurrentPage} />;
      case 'article': return <ArticlePage navigate={setCurrentPage} />;
      case 'alumni': return <AlumniPage navigate={setCurrentPage} />;
      case 'checkout': return <CheckoutPage navigate={setCurrentPage} />;
      case 'thankyou': return <ThankYouPage />;
      case 'cgv': return <CGVPage navigate={setCurrentPage} />;
      case 'legal': return <LegalNoticePage navigate={setCurrentPage} />;
      case 'privacy': return <PrivacyPolicyPage navigate={setCurrentPage} />;
      default: return <HomePage navigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0B0D] text-zinc-200 font-sans selection:bg-[#7A0F0F] selection:text-white pt-10">
      
      {/* BANDEAU D'URGENCE GLOBAL EN HAUT */}
      <div className="fixed top-0 left-0 w-full h-10 bg-[#7A0F0F] text-white flex items-center overflow-hidden z-[60] text-xs md:text-sm font-bold tracking-widest uppercase">
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(100vw); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
        `}</style>
        <div className="animate-marquee whitespace-nowrap flex items-center">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse mr-3"></span> 
          Le programme reste volontairement limité en nombre de places pour préserver un suivi d'excellence.
        </div>
      </div>

      {/* EN-TÊTE PREMIUM */}
      <header className="fixed top-10 w-full z-50 bg-[#0B0B0D]/90 backdrop-blur-md border-b border-zinc-900 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => setCurrentPage('home')}
          >
            <img src="/favicon.ico" alt="Killeur USD Logo" className="w-10 h-10 mr-3 group-hover:scale-105 transition-transform object-contain" />
            <span className="text-2xl font-black text-white tracking-tighter uppercase">KILLEUR<span className="text-[#7A0F0F]">USD</span></span>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button 
                key={link.id}
                onClick={() => setCurrentPage(link.id)}
                className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                  currentPage === link.id || (currentPage === 'article' && link.id === 'blog') ? 'text-[#C9A227]' : 'text-zinc-500 hover:text-white'
                }`}
              >
                {link.name}
              </button>
            ))}
            <Button onClick={() => setCurrentPage('checkout')} variant="primary" className="ml-4 !py-2.5 !px-6 !text-xs">
              Rejoindre
            </Button>
          </nav>

          {/* Bouton Mobile */}
          <button 
            className="md:hidden text-white hover:text-[#C9A227] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#0B0B0D] border-b border-zinc-900 absolute w-full left-0 p-6 flex flex-col space-y-6 shadow-2xl">
            {navLinks.map((link) => (
              <button 
                key={link.id}
                onClick={() => setCurrentPage(link.id)}
                className="text-left text-lg font-bold text-white uppercase tracking-wider hover:text-[#C9A227]"
              >
                {link.name}
              </button>
            ))}
            <div className="pt-4 border-t border-zinc-900">
              <Button onClick={() => setCurrentPage('checkout')} className="w-full">
                Rejoindre le programme
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* CONTENU PRINCIPAL */}
      <main>
        {renderPage()}
      </main>

      {/* PIED DE PAGE PREMIUM */}
      <footer className="bg-[#0B0B0D] border-t border-zinc-900 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <img src="/favicon.ico" alt="Killeur USD Logo" className="w-20 h-20 mr-4 object-contain" />
                <span className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter">KILLEUR<span className="text-[#7A0F0F]">USD</span></span>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed max-w-sm mb-6">
                L'écosystème d'apprentissage dédié au Price Action pur, à la gestion de risque asymétrique et à la rigueur d'exécution.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-6">Navigation</h4>
              <ul className="space-y-3">
                <li><button onClick={() => setCurrentPage('home')} className="text-zinc-500 hover:text-white transition-colors text-sm">Le Programme</button></li>
                <li><button onClick={() => setCurrentPage('about')} className="text-zinc-500 hover:text-white transition-colors text-sm">Vision & Fondateur</button></li>
                <li><button onClick={() => setCurrentPage('blog')} className="text-zinc-500 hover:text-white transition-colors text-sm">Blog & Analyses</button></li>
                <li><button onClick={() => setCurrentPage('contact')} className="text-zinc-500 hover:text-white transition-colors text-sm">Support</button></li>
                <li><button onClick={() => setCurrentPage('alumni')} className="text-[#C9A227] hover:text-white transition-colors text-sm font-medium mt-2 block">Accès Anciens Élèves</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-6">Légal & Conditions</h4>
              <ul className="space-y-3">
                <li><button onClick={() => setCurrentPage('cgv')} className={`${currentPage === 'cgv' ? 'text-white' : 'text-zinc-500 hover:text-white'} transition-colors text-sm`}>Conditions Générales de Vente</button></li>
                <li><button onClick={() => setCurrentPage('legal')} className={`${currentPage === 'legal' ? 'text-white' : 'text-zinc-500 hover:text-white'} transition-colors text-sm`}>Mentions Légales</button></li>
                <li><button onClick={() => setCurrentPage('privacy')} className={`${currentPage === 'privacy' ? 'text-white' : 'text-zinc-500 hover:text-white'} transition-colors text-sm`}>Politique de Confidentialité</button></li>
              </ul>
            </div>
          </div>
          
          <div className="bg-[#111114] border border-zinc-900 p-6 rounded-sm mb-8">
             <p className="text-[10px] md:text-xs text-zinc-600 text-justify leading-relaxed uppercase tracking-wide">
               <strong>Avertissement sur les risques :</strong> Le trading sur les marchés financiers (Forex, Indices, Crypto) comporte un niveau de risque très élevé et peut ne pas convenir à tous les investisseurs. L'effet de levier peut jouer en votre défaveur comme en votre faveur. Vous pourriez subir la perte d'une partie ou de la totalité de votre capital initial. Ne spéculez jamais avec un capital que vous ne pouvez pas vous permettre de perdre. KILLEURUSD fournit un contenu purement éducatif basé sur l'analyse technique. Aucune information, graphique ou vidéo présentée sur ce site ne constitue un conseil en investissement.
             </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-900 text-xs text-zinc-600">
            <div>&copy; {new Date().getFullYear()} KILLEURUSD. Tous droits réservés.</div>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <span className="uppercase tracking-widest font-bold">Discipline.</span>
              <span className="uppercase tracking-widest font-bold">Méthode.</span>
              <span className="uppercase tracking-widest font-bold">Exécution.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}