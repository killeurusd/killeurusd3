"use client";

import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, Target, TrendingUp, ShieldAlert, CheckCircle2, 
  BookOpen, Users, ArrowRight, Menu, X, Lock, Clock, Award, AlertTriangle,
  Mail, MessageSquare, CheckCircle
} from 'lucide-react';

// --- COMPOSANTS DE BASE ---

const Button = ({ children, variant = 'primary', className = '', onClick, type = 'button' }: any) => {
  const baseStyle = "inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all duration-300 rounded-sm";
  const variants = {
    primary: "bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-sm md:text-base shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]",
    secondary: "bg-zinc-900 border border-zinc-700 hover:border-red-600 text-white px-8 py-4 text-sm md:text-base",
    outline: "border border-zinc-700 hover:bg-zinc-900 text-zinc-300 hover:text-white px-6 py-3 text-xs md:text-sm"
  };

  return (
    <button type={type as any} onClick={onClick} className={`${baseStyle} ${variants[variant as keyof typeof variants]} ${className}`}>
      {children}
    </button>
  );
};

const SectionHeading = ({ subtitle, title, align = 'center' }: any) => (
  <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <span className="text-red-600 font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-4 block">
      {subtitle}
    </span>
    <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
      {title}
    </h2>
  </div>
);

// --- PAGES DU SITE ---

const HomePage = ({ navigate }: any) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "Est-ce que cette méthode fonctionne pour les débutants ?",
      a: "Oui, à condition d'être enseignable. Si tu cherches un bouton magique, fuis. Si tu es prêt à apprendre les fondamentaux et à appliquer une discipline stricte, cette formation est le meilleur point de départ."
    },
    {
      q: "Pourquoi ce prix (997$) ?",
      a: "Parce que ce n'est pas un simple PDF. Tu as accès à la méthode complète, mais surtout à 1h de coaching privé par mois avec moi. Le prix filtre les touristes et garantit la qualité du suivi."
    },
    {
      q: "Combien de temps avant de voir des résultats ?",
      a: "Compte 3 mois de travail sérieux pour maîtriser la structure de la méthode et commencer à voir la différence dans ton exécution. Le trading n'est pas un sprint."
    },
    {
      q: "Quel capital faut-il pour démarrer ?",
      a: "La méthode s'applique sur n'importe quel capital. Nous te recommandons de t'entraîner sur un compte démo ou de passer par une Prop Firm une fois la méthode maîtrisée."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* SECTION HERO */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.05),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-zinc-900 border border-zinc-800 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
              <span className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">Stop au gambling</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-8">
              ARRÊTE DE TRADER AU HASARD. <br />
              <span className="text-zinc-500">MAÎTRISE UNE MÉTHODE RÉELLE.</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl leading-relaxed">
              Le marché n'est pas un casino. Sors du chaos, arrête de suivre 10 stratégies différentes, et applique enfin une méthode structurée, éprouvée depuis plus de 100 ans. Le trading est un métier. Traite-le comme tel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => navigate('checkout')} className="group">
                Rejoindre la formation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" onClick={() => navigate('about')}>
                Découvrir la vision
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-zinc-500 font-medium">
              <div className="flex items-center"><CheckCircle2 className="w-4 h-4 text-amber-500 mr-2" /> Méthode centenaire</div>
              <div className="flex items-center"><CheckCircle2 className="w-4 h-4 text-amber-500 mr-2" /> Coaching privé inclus</div>
              <div className="flex items-center"><CheckCircle2 className="w-4 h-4 text-amber-500 mr-2" /> 100% Price Action</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION PROBLÈME */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="La réalité du terrain" title="Pourquoi 90% des traders échouent et se ruinent." />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Le syndrome de l'objet brillant", desc: "Tu changes de stratégie après chaque perte. Tu cherches l'indicateur magique qui n'existe pas." },
              { icon: ShieldAlert, title: "L'absence de discipline", desc: "Tu as un plan, mais tu ne le respectes pas. L'émotion prend le dessus, tu sur-trades et tu crames ton capital." },
              { icon: TrendingUp, title: "Le gambling pur et simple", desc: "Tu rentres sur le marché 'au feeling'. Tu espères faire le gros coup. Ce n'est plus de l'analyse, c'est le casino." }
            ].map((item, idx) => (
              <div key={idx} className="bg-zinc-900 border border-zinc-800 p-8 rounded-sm hover:border-red-900 transition-colors">
                <item.icon className="w-10 h-10 text-red-600 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION MÉTHODE / SOLUTION */}
      <section className="py-24 bg-black border-y border-zinc-900 relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-amber-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">La Méthode Killeurusd</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Des principes de marché éprouvés depuis plus de 100 ans.
            </h2>
            <p className="text-zinc-400 mb-8 leading-relaxed text-lg">
              Nous n'avons rien inventé. Nous avons structuré ce qui fonctionne depuis que les marchés existent. Pas de magie, pas d'indicateurs miracles. Uniquement de l'action des prix pure, de la gestion du risque mathématique et une discipline militaire.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Analyse technique structurelle et lisible",
                "Gestion du risque asymétrique (Risk/Reward)",
                "Psychologie et exécution froide"
              ].map((point, i) => (
                <li key={i} className="flex items-center text-zinc-300 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-red-600 mr-4 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            {/* Espace pour Image Graphique */}
            <div className="aspect-square bg-zinc-900 border border-zinc-800 rounded-sm flex items-center justify-center relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
              <div className="text-center relative z-10 p-8 bg-black/60 backdrop-blur-sm border border-zinc-800 m-6">
                <Target className="w-10 h-10 text-red-600 mx-auto mb-4" />
                <h4 className="text-white font-bold uppercase tracking-wider mb-2">Structure & Price Action</h4>
                <p className="text-zinc-400 text-xs">Ton futur graphique ira ici. Uniquement du technique pur et dur.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION LE FONDATEUR */}
      <section className="py-24 bg-zinc-950 border-y border-zinc-900">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/5] bg-zinc-900 border border-zinc-800 relative overflow-hidden rounded-sm group">
             {/* IMAGE DU FONDATEUR ICI */}
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-70 grayscale group-hover:grayscale-0 transition-all duration-700"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
             <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-black/80 backdrop-blur-md border border-zinc-800 p-6 rounded-sm">
                  <p className="text-white font-black uppercase tracking-widest text-lg mb-1">Ton Prénom/Nom</p>
                  <p className="text-red-500 font-bold text-xs uppercase tracking-wider">Fondateur & Head Trader</p>
                </div>
             </div>
          </div>
          <div>
            <SectionHeading subtitle="Qui va te coacher ?" title="7 ans de terrain. Zéro blabla." align="left" />
            <div className="text-zinc-400 space-y-6 leading-relaxed text-lg">
              <p>On ne va pas se mentir, l'industrie du trading est infestée de vendeurs de rêve qui gagnent leur vie avec YouTube et l'affiliation, pas avec les marchés.</p>
              <p>J'ai passé mes premières années à faire exactement les mêmes erreurs que toi. À chercher l'indicateur miracle. À sauter de stratégie en stratégie. À cramer des comptes par manque de discipline.</p>
              <div className="border-l-2 border-red-600 pl-6 my-6">
                <p className="text-white font-bold italic">"La rentabilité n'est venue que le jour où j'ai arrêté de jouer au casino pour me concentrer sur la vraie structure du marché."</p>
              </div>
              <p>C'est cette méthode chirurgicale, sans émotion et stricte que je t'enseigne aujourd'hui. Et c'est pour ça que je tiens à faire un suivi de coaching individuel avec mes élèves.</p>
            </div>
            <div className="mt-10">
              <Button variant="outline" onClick={() => navigate('about')}>Lire ma vision complète</Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION TÉMOIGNAGES */}
      <section className="py-24 bg-black border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="Résultats" title="Ils ont arrêté de parier." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Thomas R.", text: "Enfin une approche qui ne me vend pas du rêve. Les 1h de coaching mensuel m'ont permis de corriger des erreurs que je faisais depuis 2 ans." },
              { name: "Julien M.", text: "J'ai cramé 3 comptes avant de comprendre l'importance de la structure. La méthode Killeurusd est stricte, mais c'est la seule qui m'a rendu consistant." },
              { name: "Sarah L.", text: "Le meilleur investissement de mon parcours. Fini les 15 indicateurs sur le graphique. Le price action pur a changé ma lecture du marché." }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-zinc-900 border border-zinc-800 p-8 rounded-sm">
                <div className="flex text-amber-500 mb-4">
                  {[...Array(5)].map((_, i) => <Award key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-zinc-400 italic mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="font-bold text-white uppercase tracking-wider text-sm">{testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION OFFRE AVEC URGENCE (SCARCITY) */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading subtitle="L'Offre" title="Formation Premium + Accompagnement" />
          
          <div className="bg-zinc-900 border border-amber-500/30 rounded-sm p-1">
            <div className="bg-black border border-zinc-800 p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold uppercase tracking-wider px-4 py-1">
                Programme Complet
              </div>
              
              <div className="grid md:grid-cols-3 gap-12">
                <div className="md:col-span-2">
                  <h3 className="text-3xl font-bold text-white mb-4">L'Écosystème Killeurusd</h3>
                  <p className="text-zinc-400 mb-8">La transformation d'un trader désorganisé à un opérateur de marché discipliné et méthodique.</p>
                  
                  <div className="space-y-6">
                    <div className="flex">
                      <BookOpen className="w-6 h-6 text-amber-500 mr-4 shrink-0 mt-1" />
                      <div>
                        <h4 className="text-white font-bold mb-1">Formation Complète (VOD)</h4>
                        <p className="text-sm text-zinc-500">De la structure de marché avancée à la psychologie institutionnelle. Le programme complet, étape par étape.</p>
                      </div>
                    </div>
                    <div className="flex">
                      <Clock className="w-6 h-6 text-amber-500 mr-4 shrink-0 mt-1" />
                      <div>
                        <h4 className="text-white font-bold mb-1">1h de Coaching Privé / Mois</h4>
                        <p className="text-sm text-zinc-500">On analyse tes trades, on corrige tes erreurs en direct. C'est là que la vraie progression se fait.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col justify-center items-center md:border-l md:border-zinc-800 md:pl-12">
                  <div className="text-zinc-500 line-through mb-2 text-lg">Valeur inestimable</div>
                  <div className="text-5xl font-extrabold text-white mb-2">997$</div>
                  <div className="text-zinc-400 text-sm mb-6 text-center">Paiement unique. <br/>Accès à vie.</div>
                  
                  <Button onClick={() => navigate('checkout')} className="w-full mb-4 shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] bg-amber-500 hover:bg-amber-600 text-black">
                    Rejoindre maintenant
                  </Button>
                  
                  {/* BLOC D'URGENCE / RARETÉ */}
                  <div className="w-full bg-red-950/30 border border-red-900/50 p-4 rounded-sm text-left mt-2">
                    <div className="flex items-center text-red-500 mb-2">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      <span className="font-bold text-xs uppercase tracking-wider">Capacité ultra-limitée</span>
                    </div>
                    <div className="w-full bg-zinc-900 rounded-full h-1.5 mb-2 mt-3 overflow-hidden">
                      <div className="bg-red-600 h-1.5 rounded-full relative" style={{ width: '80%' }}>
                        <div className="absolute inset-0 bg-white/20 animate-[pulse_2s_infinite]"></div>
                      </div>
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      Pour garantir la qualité du coaching privé, cette session est <strong>strictement limitée à 15 élèves</strong>. <br/>
                      <span className="text-red-400 font-bold mt-1 block">Plus que 3 places disponibles.</span>
                    </p>
                  </div>
                  
                  <p className="text-xs text-zinc-600 text-center mt-4">Paiement sécurisé via Stripe.</p>
                </div>
              </div>
            </div>
          </div>

          {/* BLOC ANCIENS ÉLÈVES */}
          <div className="mt-8 bg-zinc-900 border border-zinc-800 p-8 rounded-sm">
            <div className="flex items-center mb-4">
              <Award className="w-6 h-6 text-amber-500 mr-3" />
              <h3 className="text-xl font-bold text-white">Ancien élève des premières sessions ?</h3>
            </div>
            <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
              Comme promis, ton accès à cette nouvelle structure t'est <strong>offert à vie</strong>. Remplis les informations exactes de ton premier achat pour que nous puissions vérifier nos registres et t'ajouter manuellement.
            </p>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <input type="text" className="w-full bg-black border border-zinc-800 text-white px-3 py-3 text-sm focus:outline-none focus:border-red-600 transition-colors" placeholder="Prénom" />
                </div>
                <div>
                  <input type="text" className="w-full bg-black border border-zinc-800 text-white px-3 py-3 text-sm focus:outline-none focus:border-red-600 transition-colors" placeholder="Nom" />
                </div>
                <div>
                  <input type="email" className="w-full bg-black border border-zinc-800 text-white px-3 py-3 text-sm focus:outline-none focus:border-red-600 transition-colors" placeholder="Email utilisé lors de l'achat" />
                </div>
              </div>
              <Button type="submit" variant="secondary" className="w-full !py-3 hover:bg-zinc-800 border-zinc-700">Réclamer mon accès gratuit</Button>
              <p className="text-center text-[10px] text-zinc-500 mt-2">Vérification manuelle sous 48h.</p>
            </form>
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-black border-y border-zinc-900">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeading subtitle="Vos objections" title="Foire Aux Questions" />
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-zinc-800 bg-zinc-950">
                <button 
                  className="w-full text-left px-6 py-4 flex justify-between items-center text-white font-bold hover:text-red-500 transition-colors"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  {faq.q}
                  <ChevronRight className={`w-5 h-5 transition-transform ${openFaq === idx ? 'rotate-90 text-red-600' : 'text-zinc-600'}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-zinc-400 border-t border-zinc-900 mt-2 pt-4 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const AboutPage = () => (
  <div className="pt-32 pb-24 max-w-6xl mx-auto px-6 min-h-screen">
    <SectionHeading subtitle="La Vision" title="Pas de mensonges. Que du terrain." align="center" />
    
    <div className="grid md:grid-cols-12 gap-12 mt-16">
      {/* Colonne Photo (Gauche) */}
      <div className="md:col-span-5">
        <div className="sticky top-32 aspect-[3/4] bg-zinc-900 border border-zinc-800 rounded-sm overflow-hidden">
          {/* IMAGE SECONDAIRE ICI */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-50 grayscale mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-red-900/20 to-transparent"></div>
        </div>
      </div>

      {/* Colonne Texte (Droite) */}
      <div className="md:col-span-7 text-zinc-400 leading-relaxed text-lg">
        <p className="text-xl text-white font-medium mb-8">
          <strong>Killeurusd</strong> n'est pas né d'une envie de vendre des formations. C'est né d'une frustration profonde. La frustration de voir 95% des traders débutants se faire tondre par un marché impitoyable et des "mentors" qui vendent du rêve.
        </p>
        
        <h3 className="text-white font-bold text-2xl mt-10 mb-4">Le constat d'un marché malade</h3>
        <p>
          Avec plus de 7 ans d'expérience sur les marchés, j'ai tout vu. Les stratégies miracles à la mode, les indicateurs magiques censés prédire l'avenir, les robots de trading 100% automatisés. Rien de tout cela ne fonctionne sur le long terme. Le marché est conçu pour prendre l'argent des impatients et le donner aux disciplinés.
        </p>

        <div className="bg-zinc-900 border-l-4 border-red-600 p-8 my-10 shadow-lg">
          <p className="text-white text-xl font-bold italic m-0">
            "La seule chose qui sépare un trader rentable d'un parieur, c'est la méthode, la discipline et la gestion stricte du risque."
          </p>
        </div>

        <h3 className="text-white font-bold text-2xl mt-10 mb-4">La Mission de Killeurusd</h3>
        <p>
          Notre mission est simple mais radicale : apprendre aux gens à faire de l'analyse technique sérieusement. Nous enseignons des principes de marché vieux de plus de 100 ans (la Théorie de Dow, l'action des prix brute, la structure). 
        </p>
        <p className="mt-4">
          Ce n'est pas sexy. Ça ne te rendra pas millionnaire demain matin. Ça demande du travail de fond, des remises en question, et des heures passées sur les graphiques. Mais c'est la seule et unique voie vers la constance.
        </p>

        <div className="mt-12 pt-8 border-t border-zinc-800">
           <p className="text-white font-bold mb-6">Si tu es prêt à traiter le trading comme un vrai métier, ta place est avec nous.</p>
        </div>
      </div>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="pt-32 pb-24 max-w-3xl mx-auto px-6 min-h-screen text-center">
    <SectionHeading subtitle="Support" title="Contacte-nous" />
    <p className="text-zinc-400 mb-12">Une question sur la formation ou le coaching ? Notre équipe te répond sous 24h.</p>
    
    <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-sm mb-12">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="flex items-center text-white">
          <Mail className="w-6 h-6 text-red-600 mr-3" />
          <span className="font-bold">contact@killeurusd.com</span>
        </div>
        <div className="flex items-center text-white">
          <MessageSquare className="w-6 h-6 text-red-600 mr-3" />
          <span className="font-bold">@Killeurusd (Telegram)</span>
        </div>
      </div>
    </div>

    <form className="space-y-6 text-left" onSubmit={(e) => e.preventDefault()}>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Nom complet</label>
          <input type="text" className="w-full bg-black border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-red-600 transition-colors" />
        </div>
        <div>
          <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Email</label>
          <input type="email" className="w-full bg-black border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-red-600 transition-colors" />
        </div>
      </div>
      <div>
        <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Message</label>
        <textarea rows={5} className="w-full bg-black border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-red-600 transition-colors"></textarea>
      </div>
      <Button type="submit" className="w-full">Envoyer le message</Button>
    </form>
  </div>
);

const CheckoutPage = ({ navigate }: any) => (
  <div className="pt-32 pb-24 max-w-2xl mx-auto px-6 min-h-screen flex flex-col items-center">
    <Lock className="w-12 h-12 text-zinc-700 mb-6" />
    <h1 className="text-4xl font-extrabold text-white mb-4 text-center">Validation Sécurisée</h1>
    <p className="text-zinc-400 text-center mb-12">Tu es sur le point de rejoindre le programme complet Killeurusd.</p>
    
    <div className="w-full mb-8 bg-red-600/10 border border-red-600/30 p-4 flex items-start rounded-sm">
       <AlertTriangle className="w-6 h-6 text-red-500 mr-4 shrink-0 mt-1" />
       <div>
         <h4 className="text-white font-bold text-sm mb-1">Attention : Clôture imminente</h4>
         <p className="text-xs text-zinc-300">Il ne reste actuellement que <strong>3 places</strong> pour la session de ce mois-ci. Une fois la 15ème place vendue, les inscriptions seront verrouillées pour garantir la qualité du coaching.</p>
       </div>
    </div>

    <div className="w-full bg-zinc-900 border border-zinc-800 p-8">
      <div className="flex justify-between items-center mb-6 pb-6 border-b border-zinc-800">
        <div>
          <h3 className="text-xl font-bold text-white">Formation Premium + Coaching</h3>
          <p className="text-sm text-zinc-500">Accès à vie + 1h coaching/mois</p>
        </div>
        <div className="text-2xl font-bold text-white">997$</div>
      </div>
      
      <Button onClick={() => navigate('thankyou')} className="w-full bg-amber-500 hover:bg-amber-600 text-black shadow-none">
        Procéder au paiement (Stripe)
      </Button>
      
      <div className="mt-6 flex justify-center items-center space-x-4 text-xs text-zinc-600">
         <Lock className="w-3 h-3" /> <span>Paiement sécurisé 256-bit</span>
      </div>
    </div>
    
    <Button variant="outline" onClick={() => navigate('home')} className="mt-12">
      Retour à l'accueil
    </Button>
  </div>
);

const ThankYouPage = () => (
  <div className="pt-32 pb-24 max-w-2xl mx-auto px-6 min-h-screen flex flex-col items-center text-center">
    <div className="w-20 h-20 bg-green-900/30 rounded-full flex items-center justify-center mb-8 border border-green-500/50">
      <CheckCircle className="w-10 h-10 text-green-500" />
    </div>
    <h1 className="text-4xl font-extrabold text-white mb-4">Paiement Confirmé</h1>
    <p className="text-xl text-zinc-400 mb-8">Bienvenue dans l'écosystème Killeurusd.</p>
    
    <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-sm w-full text-left">
      <h3 className="text-white font-bold mb-4">Prochaines étapes :</h3>
      <ol className="list-decimal list-inside text-zinc-400 space-y-4">
        <li>Vérifie ta boîte mail. Tu vas recevoir tes accès de connexion d'ici 5 minutes.</li>
        <li>Connecte-toi à l'espace membre.</li>
        <li>Rejoins le groupe Telegram privé (lien dans l'espace membre).</li>
        <li>Planifie ta première session de coaching d'1h avec le calendrier interne.</li>
      </ol>
    </div>
  </div>
);

// --- APP PRINCIPALE (Le Chef d'Orchestre) ---

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [currentPage]);

  const navLinks = [
    { name: 'Accueil', id: 'home' },
    { name: 'Vision', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <div className="min-h-screen bg-black text-zinc-200 font-sans selection:bg-red-600 selection:text-white pt-10">
      
      {/* BANDEAU D'URGENCE GLOBAL EN HAUT */}
      <div className="fixed top-0 left-0 w-full h-10 bg-red-600 text-white flex items-center justify-center z-[60] text-xs md:text-sm font-bold tracking-wide shadow-[0_0_15px_rgba(220,38,38,0.4)]">
        <span className="animate-pulse mr-2">🔴</span> 
        SESSION EN COURS : PLUS QUE 3 PLACES DISPONIBLES (LIMITE À 15 ÉLÈVES).
      </div>

      {/* EN-TÊTE */}
      <header className="fixed top-10 w-full z-50 bg-black/80 backdrop-blur-md border-b border-zinc-900 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => setCurrentPage('home')}
          >
            <Target className="w-8 h-8 text-red-600 mr-2 group-hover:rotate-90 transition-transform duration-500" />
            <span className="text-2xl font-black text-white tracking-tighter uppercase">Killeur<span className="text-red-600">usd</span></span>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button 
                key={link.id}
                onClick={() => setCurrentPage(link.id)}
                className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                  currentPage === link.id ? 'text-red-500' : 'text-zinc-500 hover:text-white'
                }`}
              >
                {link.name}
              </button>
            ))}
            <Button variant="outline" onClick={() => setCurrentPage('checkout')} className="ml-4">
              Rejoindre
            </Button>
          </nav>

          {/* Bouton Mobile */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black border-b border-zinc-900 absolute w-full left-0 p-6 flex flex-col space-y-6">
            {navLinks.map((link) => (
              <button 
                key={link.id}
                onClick={() => setCurrentPage(link.id)}
                className="text-left text-lg font-bold text-white uppercase tracking-wider"
              >
                {link.name}
              </button>
            ))}
            <Button onClick={() => setCurrentPage('checkout')} className="w-full">
              Rejoindre
            </Button>
          </div>
        )}
      </header>

      {/* CONTENU PRINCIPAL */}
      <main>
        {currentPage === 'home' && <HomePage navigate={setCurrentPage} />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'checkout' && <CheckoutPage navigate={setCurrentPage} />}
        {currentPage === 'thankyou' && <ThankYouPage />}
      </main>

      {/* PIED DE PAGE */}
      <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <Target className="w-6 h-6 text-red-600 mr-2" />
                <span className="text-xl font-black text-white uppercase tracking-tighter">Killeur<span className="text-red-600">usd</span></span>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
                La formation de trading qui refuse le gambling. Uniquement du price action, de la gestion de risque et une discipline de fer.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase tracking-wider mb-4">Liens</h4>
              <ul className="space-y-2">
                <li><button onClick={() => setCurrentPage('home')} className="text-zinc-500 hover:text-red-500 text-sm">Accueil</button></li>
                <li><button onClick={() => setCurrentPage('about')} className="text-zinc-500 hover:text-red-500 text-sm">Vision</button></li>
                <li><button onClick={() => setCurrentPage('contact')} className="text-zinc-500 hover:text-red-500 text-sm">Contact</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase tracking-wider mb-4">Légal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-zinc-500 hover:text-white text-sm">CGV</a></li>
                <li><a href="#" className="text-zinc-500 hover:text-white text-sm">Mentions légales</a></li>
                <li><a href="#" className="text-zinc-500 hover:text-white text-sm">Confidentialité</a></li>
              </ul>
            </div>
          </div>
          <div className="bg-black border border-red-900/30 p-4 rounded-sm mb-8">
             <p className="text-[10px] md:text-xs text-zinc-600 text-justify leading-relaxed">
               <strong>AVERTISSEMENT SUR LES RISQUES :</strong> Le trading sur les marchés financiers comporte un niveau de risque élevé et peut ne pas convenir à tous les investisseurs. Vous pourriez subir la perte d'une partie ou de la totalité de votre capital initial. Killeurusd fournit du contenu éducatif et des analyses techniques. Aucune information présentée sur ce site ne constitue un conseil en investissement.
             </p>
          </div>
          <div className="text-center text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} Killeurusd. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}