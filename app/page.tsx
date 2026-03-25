"use client";

import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, Target, TrendingUp, ShieldAlert, CheckCircle2, 
  BookOpen, ArrowRight, Menu, X, Lock, Clock, Award, AlertTriangle,
  Mail, MessageSquare, CheckCircle, Download, FileText, Crosshair, 
  Brain, BarChart2, ShieldCheck, UserCheck, Activity, Users
} from 'lucide-react';

// --- GESTION SEO (Simulation du Head de Next.js) ---
const useSEO = (title: string, description: string) => {
  useEffect(() => {
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
  }, [title, description]);
};

// --- COMPOSANTS DE BASE UI PREMIUM ---

const Button = ({ children, variant = 'primary', className = '', onClick, type = 'button' }: any) => {
  const baseStyle = "inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all duration-300 rounded-sm";
  const variants = {
    // Rouge profond #7A0F0F
    primary: "bg-[#7A0F0F] hover:bg-[#5A0A0A] text-white px-8 py-4 text-sm md:text-base shadow-[0_4px_14px_0_rgba(122,15,15,0.39)] hover:shadow-[0_6px_20px_rgba(122,15,15,0.23)] hover:-translate-y-0.5",
    // Or accent #C9A227
    accent: "bg-[#C9A227] hover:bg-[#B38F22] text-[#0B0B0D] px-8 py-4 text-sm md:text-base shadow-[0_4px_14px_0_rgba(201,162,39,0.39)] hover:shadow-[0_6px_20px_rgba(201,162,39,0.23)] hover:-translate-y-0.5",
    secondary: "bg-[#111114] border border-zinc-800 hover:border-[#7A0F0F] text-white px-8 py-4 text-sm md:text-base",
    outline: "border border-zinc-800 hover:bg-[#111114] text-zinc-300 hover:text-white px-6 py-3 text-xs md:text-sm"
  };

  return (
    <button type={type as any} onClick={onClick} className={`${baseStyle} ${variants[variant as keyof typeof variants]} ${className}`}>
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

// --- PAGES DU SITE ---

const HomePage = ({ navigate }: any) => {
  useSEO(
    "KILLEURUSD | Formation Trading Premium & Méthode d’Analyse Technique",
    "Arrête de trader au hasard. Rejoins la formation premium KILLEURUSD et maîtrise une méthode d’analyse technique éprouvée, structurée et appliquée dans le réel."
  );

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "Est-ce que cette formation convient aux débutants ?",
      a: "Oui, à condition d'être enseignable. Si tu cherches un bouton magique ou des signaux à copier, fuis. Si tu es prêt à apprendre les fondamentaux et à appliquer une discipline stricte, cette formation te fera gagner des années."
    },
    {
      q: "Est-ce que c'est fait pour quelqu'un qui a déjà de l'expérience ?",
      a: "Absolument. 80% de nos élèves ont déjà de l'expérience, mais ne sont pas constants. La formation permet de détruire les mauvaises habitudes (gambling, sur-trading) et d'installer un cadre chirurgical."
    },
    {
      q: "Pourquoi ce prix (997$) ?",
      a: "Parce que tu n'achètes pas juste des vidéos. Tu accèdes à une méthode complète et surtout à 1h de coaching privé par mois pour corriger tes propres erreurs. Ce prix filtre les touristes et garantit la qualité de l'accompagnement."
    },
    {
      q: "Est-ce que tu donnes des signaux ?",
      a: "Non. Jamais. Le but de KILLEURUSD est de te rendre indépendant, pas de te garder sous perfusion de signaux qui ne marchent jamais sur le long terme."
    },
    {
      q: "Combien de temps avant de voir des résultats ?",
      a: "Compte 3 mois de travail sérieux pour maîtriser la structure de la méthode, arrêter de faire des erreurs de débutant et commencer à voir la différence dans ton exécution et ta gestion du risque."
    },
    {
      q: "Est-ce que j'ai accès à vie à la formation ?",
      a: "Oui. Le paiement de 997$ est unique. Tu as un accès à vie à la plateforme VOD, aux futures mises à jour, et au groupe privé."
    },
    {
      q: "Ai-je besoin d'un gros capital pour commencer ?",
      a: "Non. La méthode s'applique sur n'importe quel capital. Nous te recommandons même de t'entraîner sur un compte démo ou de passer les tests de Prop Firms une fois la méthode parfaitement maîtrisée."
    },
    {
      q: "Comment se passe le coaching privé ?",
      a: "Chaque mois, tu réserves ton créneau d'1h via notre calendrier interne. On analyse ensemble tes trades de la semaine, on corrige tes erreurs en direct sur les graphiques, et on fixe tes objectifs pour le mois suivant."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. HERO PUISSANT */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(122,15,15,0.08),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-[#111114] border border-zinc-800 rounded-sm px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#7A0F0F] animate-pulse"></span>
              <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider">Stop au gambling</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-8">
              ARRÊTE DE TRADER <br /> AU HASARD.
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed font-medium">
              Maîtrise une méthode d’analyse technique éprouvée depuis plus de 100 ans, et transforme enfin ton trading en approche structurée, disciplinée et concrète.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button onClick={() => navigate('checkout')} variant="primary" className="group">
                Rejoindre la formation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="secondary" onClick={() => navigate('contact')}>
                Réserver un appel
              </Button>
            </div>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-500 font-medium">
              <div className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#C9A227] mr-2" /> Formation Premium</div>
              <div className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#C9A227] mr-2" /> Accompagnement privé</div>
              <div className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#C9A227] mr-2" /> Accès à vie</div>
            </div>
          </div>

          <div className="hidden lg:block relative">
             <div className="aspect-[4/3] bg-[#0B0B0D] border border-zinc-800 rounded-sm overflow-hidden relative shadow-[0_0_50px_rgba(0,0,0,0.8)]">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30 mix-blend-luminosity"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-transparent to-transparent"></div>
               {/* UI Mockup abstraction */}
               <div className="absolute inset-x-8 bottom-8 top-12 border border-zinc-800/50 bg-[#111114]/80 backdrop-blur flex flex-col p-4">
                  <div className="flex justify-between items-center border-b border-zinc-800/50 pb-3 mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                      <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                      <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                    </div>
                    <span className="text-[10px] text-zinc-500 font-mono uppercase">Analyse Structurelle</span>
                  </div>
                  <div className="flex-1 border border-dashed border-zinc-700/50 flex items-center justify-center">
                    <BarChart2 className="w-16 h-16 text-zinc-700/50" />
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
            subtitle="La réalité du terrain" 
            title="Pourquoi tu n’avances pas, même si tu passes des heures sur les marchés." 
          />
          <p className="text-center text-zinc-400 max-w-3xl mx-auto mb-16 text-lg">
            La majorité des traders ne manquent pas de motivation. Ils manquent d’un cadre. Ils consomment trop d’informations, changent trop souvent de stratégie, prennent des trades sans vraie logique, et finissent par confondre trading et gambling.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Tu changes de méthode à chaque perte", desc: "Tu testes une stratégie, puis une autre, puis une autre encore. À force de tout essayer, tu ne maîtrises absolument rien." },
              { icon: ShieldAlert, title: "Tu cherches encore le setup miracle", desc: "Tu crois qu’il existe un raccourci, un indicateur magique ou un signal qui va tout régler. Résultat : tu restes dépendant." },
              { icon: TrendingUp, title: "Tu prends des trades sans cadre réel", desc: "Tu entres trop tôt, trop tard, sans plan clair, sans vraie discipline, puis tu t’étonnes de ne pas progresser." }
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
              Le problème n’est pas ton potentiel.<br/>Le problème, c’est l’absence de méthode.
            </p>
          </div>
        </div>
      </section>

      {/* 3. NOUVELLE APPROCHE / MÉTHODE */}
      <section className="py-24 bg-[#111114] border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            subtitle="La Solution" 
            title="Une méthode simple à comprendre. Difficile à maîtriser. Puissante avec discipline." 
          />
          <p className="text-center text-zinc-400 max-w-3xl mx-auto mb-16 text-lg">
            Chez KILLEURUSD, tu n’apprends pas à empiler 15 stratégies. Tu apprends à lire le marché avec une méthode claire, fondée sur des principes éprouvés depuis plus d’un siècle, puis à l’appliquer avec rigueur dans le réel.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Crosshair, title: "Lecture du marché", desc: "Structure, zones clés, contexte institutionnel, lecture propre du prix sans bruit." },
              { icon: Activity, title: "Exécution", desc: "Entrées chirurgicales, niveaux d'invalidation, timing, logique stricte d’intervention." },
              { icon: ShieldCheck, title: "Gestion du risque", desc: "Protection absolue du capital, ratios asymétriques, survie et discipline mathématique." },
              { icon: Brain, title: "Psychologie", desc: "Patience, répétition, lucidité, contrôle émotionnel pour une exécution froide." }
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
          <SectionHeading subtitle="Avant / Après" title="Passe du chaos à une méthode réelle" />
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-stretch">
            {/* Avant */}
            <div className="bg-[#111114] border border-zinc-800 p-8 md:p-10 rounded-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <X className="w-24 h-24 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-8 border-b border-zinc-800 pb-4">Actuellement</h3>
              <ul className="space-y-6 relative z-10">
                {[
                  "Tu changes sans cesse de stratégie",
                  "Tu prends des trades de manière émotionnelle",
                  "Tu te disperses avec trop d'indicateurs",
                  "Tu écoutes les mauvaises personnes (signaux)",
                  "Tu avances sans aucune structure"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-zinc-400">
                    <X className="w-5 h-5 text-[#7A0F0F] mr-4 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Après */}
            <div className="bg-[#0B0B0D] border border-[#C9A227]/30 p-8 md:p-10 rounded-sm relative overflow-hidden shadow-[0_0_30px_rgba(201,162,39,0.05)]">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <CheckCircle className="w-24 h-24 text-[#C9A227]" />
              </div>
              <h3 className="text-2xl font-bold text-[#C9A227] mb-8 border-b border-[#C9A227]/20 pb-4">Avec KILLEURUSD</h3>
              <ul className="space-y-6 relative z-10">
                {[
                  "Tu sais exactement quoi regarder",
                  "Tu comprends pourquoi tu entres en position",
                  "Tu suis une méthode d'analyse claire",
                  "Tu gères ton risque comme un professionnel",
                  "Tu traites enfin le trading comme un vrai métier"
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
            L’objectif n’est pas de te vendre un rêve. L’objectif est de te donner une méthode que tu peux comprendre, appliquer et travailler sérieusement.
          </p>
        </div>
      </section>

      {/* 5. DÉTAIL DE L'OFFRE */}
      <section className="py-24 bg-gradient-to-b from-[#111114] to-[#0B0B0D] border-y border-zinc-900">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading subtitle="Le Programme" title="Ce que tu reçois concrètement" />
          
          <div className="bg-[#0B0B0D] border border-[#7A0F0F]/30 rounded-sm p-1 shadow-[0_0_40px_rgba(122,15,15,0.1)]">
            <div className="bg-[#0B0B0D] border border-zinc-800 p-8 md:p-12 relative overflow-hidden">
              
              <div className="grid md:grid-cols-5 gap-12">
                <div className="md:col-span-3">
                  <h3 className="text-2xl font-bold text-white mb-8">La Formation Complète (VOD)</h3>
                  
                  <div className="space-y-4">
                    {[
                      { num: "01", title: "Fondations de la méthode" },
                      { num: "02", title: "Lecture de structure avancée" },
                      { num: "03", title: "Price Action et logique de marché" },
                      { num: "04", title: "Entrées, invalidation, exécution" },
                      { num: "05", title: "Gestion du risque asymétrique" },
                      { num: "06", title: "Psychologie et discipline" },
                      { num: "07", title: "Construction d’une routine solide" }
                    ].map((mod, idx) => (
                      <div key={idx} className="flex items-center bg-[#111114] border border-zinc-800/50 p-4 rounded-sm">
                        <span className="text-[#C9A227] font-bold font-mono mr-4">{mod.num}.</span>
                        <h4 className="text-white font-medium text-sm md:text-base">{mod.title}</h4>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold text-white mt-12 mb-6 border-t border-zinc-800 pt-8">En plus, inclus à vie :</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-[#111114] p-4 border border-zinc-800">
                      <Clock className="w-6 h-6 text-[#7A0F0F] mb-2" />
                      <h4 className="text-white font-bold text-sm mb-1">1h Coaching / Mois</h4>
                      <p className="text-xs text-zinc-500">Corrections ciblées en privé.</p>
                    </div>
                    <div className="bg-[#111114] p-4 border border-zinc-800">
                      <Users className="w-6 h-6 text-[#7A0F0F] mb-2" />
                      <h4 className="text-white font-bold text-sm mb-1">Groupe Privé</h4>
                      <p className="text-xs text-zinc-500">Réseau d'élèves disciplinés.</p>
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-2 flex flex-col justify-center items-center md:border-l md:border-zinc-800 md:pl-12">
                  <div className="mb-8 w-full">
                    <h4 className="text-[#C9A227] font-bold uppercase tracking-wider text-xs mb-4 text-center">Objectif sur 3 mois :</h4>
                    <ul className="space-y-2 text-sm text-zinc-400">
                      <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-zinc-600 mr-2" /> Arrêter le trading au hasard</li>
                      <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-zinc-600 mr-2" /> Sortir de la confusion</li>
                      <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-zinc-600 mr-2" /> Maîtriser un cadre clair</li>
                      <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-zinc-600 mr-2" /> Construire une vraie progression</li>
                    </ul>
                  </div>

                  <div className="text-5xl font-extrabold text-white mb-2">997$</div>
                  <div className="text-zinc-500 text-sm mb-8 text-center">Paiement unique.<br/>Accès à vie garantit.</div>
                  
                  <Button onClick={() => navigate('checkout')} className="w-full mb-4">
                    Rejoindre la formation
                  </Button>
                  
                  {/* URGENCY LOGIQUE ET CRÉDIBLE */}
                  <div className="w-full bg-[#111114] border border-zinc-800 p-4 rounded-sm text-center mt-2">
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Pour garder un vrai niveau de suivi et assurer les coachings mensuels, <strong className="text-white">chaque session est limitée en capacité.</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
                "Tu acceptes qu'une vraie progression demande du travail."
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
          <SectionHeading subtitle="Preuve Sociale" title="Ils ont arrêté de parier. Ils ont commencé à comprendre." />
          
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { name: "Thomas", level: "2 ans de trading", text: "Je passais d’une méthode à l’autre sans jamais progresser. La formation m’a permis de simplifier mon approche, de nettoyer mes graphiques et de mieux comprendre mes erreurs." },
              { name: "Julien", level: "Débutant", text: "Le meilleur investissement. Au lieu de cramer mon capital en faisant n'importe quoi, j'ai appris un vrai métier. Les coachings mensuels sont d'une valeur inestimable." },
              { name: "Sarah", level: "3 ans de trading", text: "J'avais les bases mais aucune discipline. Le cadre de KILLEURUSD est strict, militaire, et c'est exactement ce qu'il me fallait pour enfin atteindre la constance." }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-[#0B0B0D] border border-zinc-800 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex text-[#C9A227] mb-6">
                    {[...Array(5)].map((_, i) => <Award key={i} className="w-4 h-4 fill-current" />)}
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

          <div className="bg-[#0B0B0D] border border-zinc-800 p-8 rounded-sm text-center">
             <h4 className="text-white font-bold uppercase tracking-wider mb-6">Pourquoi faire confiance à KILLEURUSD ?</h4>
             <div className="flex flex-wrap justify-center gap-8 text-sm text-zinc-400">
               <div className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#7A0F0F] mr-2" /> +7 ans de terrain</div>
               <div className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#7A0F0F] mr-2" /> Zéro fausse promesse</div>
               <div className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#7A0F0F] mr-2" /> Accompagnement direct</div>
             </div>
          </div>
        </div>
      </section>

      {/* 8. SECTION FONDATEUR */}
      <section className="py-24 bg-[#0B0B0D]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/5] bg-[#111114] border border-zinc-800 relative overflow-hidden group shadow-[0_0_30px_rgba(0,0,0,0.5)]">
             {/* PLACEHOLDER PRO : Portrait sombre, studio, crédible */}
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/60 to-transparent"></div>
             <div className="absolute bottom-6 left-6 right-6">
                <div className="border-l-4 border-[#7A0F0F] pl-4">
                  <p className="text-white font-black uppercase tracking-widest text-xl mb-1">Alexandre</p>
                  <p className="text-zinc-400 font-bold text-xs uppercase tracking-wider">Fondateur & Head Trader</p>
                </div>
             </div>
          </div>
          <div>
            <SectionHeading subtitle="Le Cadre" title="Tu n'as pas besoin d'un gourou." align="left" />
            <h3 className="text-2xl font-bold text-white mb-6">Tu as besoin d'une méthode et d'un suivi.</h3>
            <div className="text-zinc-400 space-y-6 leading-relaxed text-base">
              <p>Je ne suis pas là pour te vendre une illusion de richesse rapide. Je suis là pour transmettre une méthode sérieuse, appliquée dans le réel, et t'aider à corriger ce qui te bloque vraiment.</p>
              <p>L'industrie du trading est infestée de vendeurs de rêve. Mais la réalité des marchés est froide, mathématique et impitoyable. Elle punit l'indiscipline et récompense la méthode.</p>
              <div className="border-l-2 border-[#C9A227] pl-6 my-8">
                <p className="text-white font-bold italic">"La rentabilité ne vient pas d'un indicateur secret. Elle vient d'une exécution sans faille d'un plan préétabli."</p>
              </div>
              <p>Mon objectif avec KILLEURUSD est de bâtir une communauté de traders indépendants, qui réfléchissent par eux-mêmes et opèrent comme de véritables professionnels.</p>
            </div>
            <div className="mt-10">
              <Button variant="outline" onClick={() => navigate('about')}>Lire la vision complète</Button>
            </div>
          </div>
        </div>
      </section>

      {/* 9. LEAD CAPTURE (AIMANT À LEADS) */}
      <section className="py-24 bg-[#7A0F0F] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-multiply"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <Download className="w-12 h-12 text-white/50 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Pas encore prêt à rejoindre la formation ?</h2>
          <p className="text-white/80 mb-10 text-lg max-w-2xl mx-auto">
            Récupère notre ressource gratuite : <strong className="text-white">"La Checklist du Trader Discipliné"</strong>. 10 points à vérifier avant chaque session pour éviter 80% des pertes inutiles.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
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
              Recevoir
            </button>
          </form>
          <p className="text-white/50 text-xs mt-4">100% gratuit. Zéro spam. Désinscription en un clic.</p>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="py-24 bg-[#0B0B0D]">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeading subtitle="Vos Objections" title="Questions Fréquentes" />
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-zinc-800 bg-[#111114]">
                <button 
                  className="w-full text-left px-6 py-5 flex justify-between items-center text-white font-bold hover:text-[#C9A227] transition-colors"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronRight className={`w-5 h-5 shrink-0 transition-transform ${openFaq === idx ? 'rotate-90 text-[#C9A227]' : 'text-zinc-600'}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-zinc-400 mt-2 leading-relaxed text-sm">
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
          <SectionHeading subtitle="La Décision" title="Le trading n’est pas un jeu. C’est une méthode." />
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
            Si tu veux arrêter de t’éparpiller, comprendre enfin ce que tu fais, et construire un vrai cadre de progression, ta place est ici.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button onClick={() => navigate('checkout')} variant="primary" className="text-lg px-12 py-5">
              Rejoindre la formation
            </Button>
            <Button variant="outline" onClick={() => navigate('contact')} className="text-lg px-12 py-5 border-zinc-700">
              J'ai encore des questions
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- PAGES SECONDAIRES ---

const AboutPage = ({ navigate }: any) => {
  useSEO("La Vision | KILLEURUSD", "Découvrez la vision de KILLEURUSD. Une approche sans bullshit, basée sur la structure du marché et la discipline pour former de vrais traders.");
  
  return (
    <div className="pt-32 pb-24 max-w-6xl mx-auto px-6 min-h-screen">
      <SectionHeading subtitle="La Vision" title="Pas de mensonges. Que du terrain." align="center" />
      
      <div className="grid md:grid-cols-12 gap-12 mt-16">
        <div className="md:col-span-5">
          <div className="sticky top-32 aspect-[3/4] bg-[#111114] border border-zinc-800 rounded-sm overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 grayscale mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-[#7A0F0F]/20 to-transparent"></div>
          </div>
        </div>

        <div className="md:col-span-7 text-zinc-400 leading-relaxed text-lg">
          <p className="text-xl text-white font-medium mb-8">
            <strong>KILLEURUSD</strong> n'est pas né d'une envie de vendre des formations. C'est né d'une frustration profonde. La frustration de voir 95% des traders débutants se faire tondre par un marché impitoyable et des mentors qui vendent du rêve.
          </p>
          
          <h3 className="text-white font-bold text-2xl mt-12 mb-4">Le constat d'un marché malade</h3>
          <p>
            Avec les années passées sur les graphiques, on voit tout. Les stratégies miracles à la mode, les indicateurs magiques censés prédire l'avenir, les robots de trading 100% automatisés. Rien de tout cela ne fonctionne sur le long terme. Le marché est conçu pour prendre l'argent des impatients et le donner aux disciplinés.
          </p>

          <div className="bg-[#111114] border-l-4 border-[#C9A227] p-8 my-10">
            <p className="text-white text-xl font-bold italic m-0">
              "La seule chose qui sépare un trader rentable d'un parieur, c'est la méthode, la discipline et la gestion stricte du risque."
            </p>
          </div>

          <h3 className="text-white font-bold text-2xl mt-12 mb-4">La Mission de KILLEURUSD</h3>
          <p>
            Notre mission est simple mais radicale : apprendre aux gens à faire de l'analyse technique sérieusement. Nous enseignons des principes de marché anciens et universels (l'action des prix brute, la structure, la liquidité). 
          </p>
          <p className="mt-4">
            Ce n'est pas sexy. Ça ne te rendra pas millionnaire demain matin. Ça demande du travail de fond, des remises en question, et des heures passées sur les graphiques. Mais c'est la seule et unique voie vers la constance.
          </p>

          <div className="mt-16 pt-8 border-t border-zinc-800">
             <p className="text-white font-bold mb-8">Si tu es prêt à traiter le trading comme un vrai métier, ta place est avec nous.</p>
             <Button onClick={() => navigate('checkout')}>Rejoindre le programme</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  useSEO("Contact | KILLEURUSD", "Contactez l'équipe KILLEURUSD pour toute question sur la formation ou l'accompagnement privé.");

  return (
    <div className="pt-32 pb-24 max-w-3xl mx-auto px-6 min-h-screen text-center">
      <SectionHeading subtitle="Support" title="Contacte-nous" />
      <p className="text-zinc-400 mb-12 text-lg">Une question sur la formation, la méthode ou le coaching ? Notre équipe te répond sous 24h ouvrées.</p>
      
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

      <form className="space-y-6 text-left bg-[#0B0B0D] border border-zinc-800 p-8 md:p-10 rounded-sm" onSubmit={(e) => e.preventDefault()}>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Nom complet</label>
            <input type="text" className="w-full bg-[#111114] border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-[#7A0F0F] transition-colors rounded-sm" />
          </div>
          <div>
            <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Email</label>
            <input type="email" className="w-full bg-[#111114] border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-[#7A0F0F] transition-colors rounded-sm" />
          </div>
        </div>
        <div>
          <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Sujet</label>
          <select className="w-full bg-[#111114] border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-[#7A0F0F] transition-colors rounded-sm appearance-none">
            <option>Question sur la formation</option>
            <option>Support technique espace membre</option>
            <option>Demande de partenariat</option>
            <option>Autre</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Message</label>
          <textarea rows={5} className="w-full bg-[#111114] border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-[#7A0F0F] transition-colors rounded-sm"></textarea>
        </div>
        <Button type="submit" className="w-full">Envoyer le message</Button>
      </form>
    </div>
  );
};

const BlogPage = ({ navigate }: any) => {
  useSEO("Blog & Analyses | KILLEURUSD", "Articles, analyses techniques et psychologie de marché. Découvrez la méthode KILLEURUSD en détail.");

  const articles = [
    { id: 1, title: "Pourquoi 90% des traders échouent et comment faire partie des 10%", category: "Psychologie", date: "12 Octobre 2023", readTime: "5 min" },
    { id: 2, title: "La vraie définition du Price Action institutionnel", category: "Technique", date: "28 Septembre 2023", readTime: "8 min" },
    { id: 3, title: "Comment construire une routine de trading indestructible", category: "Discipline", date: "15 Septembre 2023", readTime: "6 min" }
  ];

  return (
    <div className="pt-32 pb-24 max-w-6xl mx-auto px-6 min-h-screen">
      <SectionHeading subtitle="Ressources" title="Le Blog KILLEURUSD" align="center" />
      
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {articles.map(article => (
          <div key={article.id} className="bg-[#111114] border border-zinc-800 rounded-sm overflow-hidden flex flex-col group cursor-pointer" onClick={() => navigate('article')}>
            <div className="aspect-[16/9] bg-[#0B0B0D] relative overflow-hidden">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700"></div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C9A227] bg-[#C9A227]/10 px-2 py-1">{article.category}</span>
                <span className="text-xs text-zinc-600">{article.readTime} de lecture</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-4 group-hover:text-[#7A0F0F] transition-colors line-clamp-2">{article.title}</h3>
              <div className="mt-auto flex justify-between items-center text-zinc-500 text-xs font-medium border-t border-zinc-800/50 pt-4">
                <span>{article.date}</span>
                <span className="flex items-center uppercase tracking-wider font-bold group-hover:text-white transition-colors">Lire <ChevronRight className="w-4 h-4 ml-1" /></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ArticlePage = ({ navigate }: any) => {
  useSEO("Pourquoi 90% des traders échouent | KILLEURUSD", "Analyse psychologique et technique sur les raisons de l'échec en trading et comment inverser la tendance.");

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <button onClick={() => navigate('blog')} className="flex items-center text-zinc-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-wider mb-12">
          <ChevronRight className="w-4 h-4 mr-1 rotate-180" /> Retour au blog
        </button>
        
        <div className="mb-12">
          <span className="text-[#C9A227] font-bold tracking-wider uppercase text-xs block mb-4">Psychologie • 5 min de lecture</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-8">Pourquoi 90% des traders échouent et comment faire partie des 10%.</h1>
          <div className="flex items-center border-b border-zinc-800 pb-8">
            <div className="w-10 h-10 bg-zinc-800 rounded-full mr-4 bg-[url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80')] bg-cover"></div>
            <div>
              <div className="text-white font-bold text-sm">Alexandre</div>
              <div className="text-zinc-500 text-xs">Head Trader, KILLEURUSD</div>
            </div>
          </div>
        </div>

        <div className="prose prose-invert prose-zinc max-w-none text-zinc-300 leading-relaxed text-lg">
          <p className="lead text-xl text-white font-medium mb-8">
            Le chiffre fait peur, mais il est réel. Sur les marchés financiers, l'immense majorité des particuliers perd de l'argent. Mais contrairement à ce que l'on croit, ce n'est pas parce que le marché est "truqué" ou trop complexe. C'est un problème d'approche.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Le mythe du Setup Parfait</h2>
          <p className="mb-6">
            L'erreur numéro un est la quête incessante du "Graal". Un indicateur qui ne se trompe jamais. Une stratégie avec 95% de win-rate. Cela n'existe pas. Le marché est par nature probabiliste. Un trader professionnel accepte la perte comme faisant partie de son modèle d'affaires. Un amateur cherche à l'éviter à tout prix, ce qui l'amène à prendre des risques démesurés.
          </p>

          <div className="bg-[#111114] border-l-4 border-[#7A0F0F] p-6 my-10">
            <p className="font-bold text-white m-0">
              "L'amateur focus sur l'entrée. Le professionnel focus sur la gestion du risque."
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Le syndrome du Casino</h2>
          <p className="mb-6">
            Sans plan strict, le trading devient du casino. Vous entrez parce que "ça monte fort", vous coupez parce que "vous avez peur". C'est de la réaction émotionnelle, pas de l'exécution d'un plan. La différence fondamentale est là : la méthode.
          </p>
        </div>

        {/* CTA IN-ARTICLE */}
        <div className="mt-16 bg-gradient-to-br from-[#0B0B0D] to-[#111114] border border-zinc-800 p-8 rounded-sm text-center">
          <h3 className="text-xl font-bold text-white mb-4">Prêt à arrêter de jouer au hasard ?</h3>
          <p className="text-zinc-400 text-sm mb-6 max-w-md mx-auto">Rejoins la formation KILLEURUSD et maîtrise une approche chirurgicale du marché.</p>
          <Button onClick={() => navigate('checkout')}>Découvrir le programme</Button>
        </div>
      </div>
    </div>
  );
};

const AlumniPage = ({ navigate }: any) => {
  useSEO("Accès Anciens Élèves | KILLEURUSD", "Réclamez votre accès gratuit à la nouvelle plateforme KILLEURUSD.");

  return (
    <div className="pt-32 pb-24 max-w-2xl mx-auto px-6 min-h-screen flex flex-col items-center">
      <SectionHeading subtitle="Mise à jour V2" title="Accès Anciens Élèves" />
      
      <div className="bg-[#111114] border border-[#C9A227]/30 p-8 md:p-10 rounded-sm w-full shadow-lg">
        <div className="flex items-center mb-6 border-b border-zinc-800 pb-6">
          <Award className="w-8 h-8 text-[#C9A227] mr-4" />
          <h3 className="text-2xl font-bold text-white">Tu étais là aux débuts ?</h3>
        </div>
        <p className="text-zinc-400 text-base mb-8 leading-relaxed">
          Comme promis historiquement, ton accès à cette nouvelle structure t'est <strong>offert à vie</strong>. Remplis les informations exactes de ton premier achat pour que nous puissions vérifier nos registres et t'ajouter manuellement à la nouvelle plateforme.
        </p>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Prénom lors de l'achat</label>
              <input type="text" className="w-full bg-[#0B0B0D] border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-[#C9A227] transition-colors rounded-sm" />
            </div>
            <div>
              <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Nom</label>
              <input type="text" className="w-full bg-[#0B0B0D] border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-[#C9A227] transition-colors rounded-sm" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Email exact utilisé</label>
            <input type="email" className="w-full bg-[#0B0B0D] border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-[#C9A227] transition-colors rounded-sm" />
          </div>
          <Button type="submit" variant="accent" className="w-full">Réclamer mon accès gratuit</Button>
          <p className="text-center text-xs text-zinc-500 mt-4">Vérification manuelle sous 48h ouvrées. Tu recevras tes nouveaux accès par email.</p>
        </form>
      </div>
    </div>
  );
}

const CheckoutPage = ({ navigate }: any) => {
  useSEO("Validation | KILLEURUSD", "Validation sécurisée de votre place dans la formation KILLEURUSD.");

  return (
    <div className="pt-32 pb-24 max-w-2xl mx-auto px-6 min-h-screen flex flex-col items-center">
      <Lock className="w-10 h-10 text-zinc-600 mb-6" />
      <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 text-center">Validation Sécurisée</h1>
      <p className="text-zinc-400 text-center mb-10 text-lg">Tu es sur le point de rejoindre le programme complet KILLEURUSD.</p>
      
      <div className="w-full mb-8 bg-[#7A0F0F]/10 border border-[#7A0F0F]/50 p-6 flex items-start rounded-sm">
         <AlertTriangle className="w-6 h-6 text-red-500 mr-4 shrink-0 mt-1" />
         <div>
           <h4 className="text-white font-bold mb-1">Attention : Clôture imminente</h4>
           <p className="text-sm text-zinc-300 leading-relaxed">Il ne reste actuellement que <strong>3 places</strong> pour la session de coaching de ce mois-ci. Une fois la limite atteinte, les inscriptions seront verrouillées pour garantir la qualité du suivi.</p>
         </div>
      </div>

      <div className="w-full bg-[#111114] border border-zinc-800 p-8 md:p-10 shadow-2xl rounded-sm">
        <div className="flex justify-between items-start mb-8 pb-8 border-b border-zinc-800">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Formation Premium + Coaching</h3>
            <ul className="text-sm text-zinc-500 space-y-2">
              <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-[#C9A227]" /> Accès à vie à la VOD</li>
              <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-[#C9A227]" /> 1h coaching privé / mois</li>
              <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-[#C9A227]" /> Accès groupe privé</li>
            </ul>
          </div>
          <div className="text-3xl font-extrabold text-white">997$</div>
        </div>
        
        <Button onClick={() => navigate('thankyou')} variant="accent" className="w-full mb-6">
          Procéder au paiement
        </Button>
        
        <div className="flex justify-center items-center space-x-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">
           <Lock className="w-4 h-4" /> <span>Paiement sécurisé 256-bit par Stripe</span>
        </div>
      </div>
      
      <button onClick={() => navigate('home')} className="mt-12 text-sm text-zinc-500 hover:text-white font-bold uppercase tracking-wider transition-colors">
        Retour à l'accueil
      </button>
    </div>
  );
};

const ThankYouPage = () => {
  useSEO("Paiement Confirmé | KILLEURUSD", "Bienvenue chez KILLEURUSD.");

  return (
    <div className="pt-32 pb-24 max-w-2xl mx-auto px-6 min-h-screen flex flex-col items-center text-center">
      <div className="w-24 h-24 bg-[#0B0B0D] border-2 border-[#C9A227] rounded-full flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(201,162,39,0.2)]">
        <CheckCircle className="w-12 h-12 text-[#C9A227]" />
      </div>
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Paiement Confirmé</h1>
      <p className="text-xl text-zinc-400 mb-12">Bienvenue dans l'écosystème KILLEURUSD.</p>
      
      <div className="bg-[#111114] border border-zinc-800 p-8 md:p-12 rounded-sm w-full text-left">
        <h3 className="text-white font-bold text-xl mb-6">Tes prochaines étapes :</h3>
        <ol className="text-zinc-400 space-y-6">
          <li className="flex items-start">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">1</span>
            <div>
              <strong className="text-white block mb-1">Vérifie ta boîte mail</strong>
              Tu vas recevoir tes accès de connexion d'ici 5 minutes.
            </div>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">2</span>
            <div>
              <strong className="text-white block mb-1">Rejoins le groupe privé</strong>
              Le lien Telegram sécurisé se trouve sur ton tableau de bord.
            </div>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">3</span>
            <div>
              <strong className="text-white block mb-1">Planifie ton coaching</strong>
              Utilise le calendrier de la plateforme pour réserver ta première heure.
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

// --- APP PRINCIPALE (Le Chef d'Orchestre) ---

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [currentPage]);

  const navLinks = [
    { name: 'Méthode', id: 'home' },
    { name: 'Vision', id: 'about' },
    { name: 'Blog', id: 'blog' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <div className="min-h-screen bg-[#0B0B0D] text-zinc-200 font-sans selection:bg-[#7A0F0F] selection:text-white pt-10">
      
      {/* BANDEAU D'URGENCE GLOBAL EN HAUT */}
      <div className="fixed top-0 left-0 w-full h-10 bg-[#7A0F0F] text-white flex items-center justify-center z-[60] text-xs md:text-sm font-bold tracking-widest uppercase">
        <span className="w-2 h-2 rounded-full bg-white animate-pulse mr-3"></span> 
        Session de coaching : Plus que 3 places disponibles.
      </div>

      {/* EN-TÊTE PREMIUM */}
      <header className="fixed top-10 w-full z-50 bg-[#0B0B0D]/90 backdrop-blur-md border-b border-zinc-900 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => setCurrentPage('home')}
          >
            <Target className="w-8 h-8 text-[#7A0F0F] mr-3 group-hover:rotate-90 transition-transform duration-500" />
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
                Rejoindre la formation
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* CONTENU PRINCIPAL */}
      <main>
        {currentPage === 'home' && <HomePage navigate={setCurrentPage} />}
        {currentPage === 'about' && <AboutPage navigate={setCurrentPage} />}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'blog' && <BlogPage navigate={setCurrentPage} />}
        {currentPage === 'article' && <ArticlePage navigate={setCurrentPage} />}
        {currentPage === 'alumni' && <AlumniPage />}
        {currentPage === 'checkout' && <CheckoutPage navigate={setCurrentPage} />}
        {currentPage === 'thankyou' && <ThankYouPage />}
      </main>

      {/* PIED DE PAGE PREMIUM */}
      <footer className="bg-[#0B0B0D] border-t border-zinc-900 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <Target className="w-6 h-6 text-[#7A0F0F] mr-2" />
                <span className="text-xl font-black text-white uppercase tracking-tighter">KILLEUR<span className="text-[#7A0F0F]">USD</span></span>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed max-w-sm mb-6">
                La formation de trading qui refuse le gambling. Uniquement du price action pur, de la gestion de risque asymétrique et une discipline de fer.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-6">Navigation</h4>
              <ul className="space-y-3">
                <li><button onClick={() => setCurrentPage('home')} className="text-zinc-500 hover:text-white transition-colors text-sm">Méthode</button></li>
                <li><button onClick={() => setCurrentPage('about')} className="text-zinc-500 hover:text-white transition-colors text-sm">Vision & Fondateur</button></li>
                <li><button onClick={() => setCurrentPage('blog')} className="text-zinc-500 hover:text-white transition-colors text-sm">Blog & Analyses</button></li>
                <li><button onClick={() => setCurrentPage('contact')} className="text-zinc-500 hover:text-white transition-colors text-sm">Support</button></li>
                <li><button onClick={() => setCurrentPage('alumni')} className="text-[#C9A227] hover:text-white transition-colors text-sm font-medium mt-2 block">Accès Anciens Élèves</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-6">Légal & Conditions</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm">Conditions Générales de Vente</a></li>
                <li><a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm">Mentions Légales</a></li>
                <li><a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm">Politique de Confidentialité</a></li>
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