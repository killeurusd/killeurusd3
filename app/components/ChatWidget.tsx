"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send } from "lucide-react";

type Msg = { from: "bot" | "user"; text: string };
type Chip = { label: string; action: () => void };
type Lang = "fr" | "en";

// Dictionnaire bilingue (règles). L'IA libre est branchable via /api/chat.
const DICT = {
  fr: {
    header: "Assistant KILLEURUSD",
    sub: "Réponses indicatives · contenu éducatif",
    greeting: "Bonjour 👋 Je suis l'assistant KILLEURUSD. Comment puis-je t'aider ?",
    placeholder: "Écris ta question…",
    menu: { programme: "Le programme", prix: "Le prix", pourqui: "C'est pour qui ?", diag: "Suis-je prêt ? (diagnostic)", human: "Parler à un humain" },
    kb: {
      programme: "KILLEURUSD est un programme de trading premium : méthode d'analyse technique (price action), gestion du risque, discipline d'exécution. Inclus : accès à vie + 1h de mentoring individuel/semaine pendant 3 mois + groupe privé.",
      prix: "L'accès est un paiement unique de 997$ : accès à vie + accompagnement privé (1h/semaine pendant 3 mois). Aucun abonnement caché.",
      pourqui: "Pour les traders autodidactes qui veulent un cadre sérieux : débutants motivés comme traders expérimentés qui manquent de discipline. Ce n'est pas une promesse de gains.",
    },
    qualif: {
      intro: "Trois questions rapides pour t'orienter. D'abord : quel est ton niveau en trading ?",
      niveaux: ["Débutant", "Intermédiaire", "Avancé"],
      qObjectif: "Ton objectif principal ?",
      objectifs: ["Devenir rentable / régulier", "Structurer ma méthode", "Gérer mes émotions"],
      qCapital: "Et ton capital de départ (indicatif) ?",
      capitaux: ["< 1 000$", "1 000 – 5 000$", "> 5 000$"],
      result: (n: string, o: string, c: string) => `Merci. Profil : ${n} · ${o} · capital ${c}. Le programme est adapté si tu es prêt à travailler avec rigueur (résultats non garantis). Meilleure étape suivante : un échange pour vérifier que c'est fait pour toi.`,
      ctaContact: "Demander à être contacté", ctaPrix: "Voir le programme / prix",
    },
    toHuman: "Je t'envoie vers le formulaire de contact — on revient vers toi rapidement.",
    fallbackErr: "Je n'ai pas la réponse exacte — un membre de l'équipe peut t'aider.",
    netErr: "Connexion impossible pour le moment. Tu peux utiliser le formulaire de contact.",
    openLabel: "Ouvrir l'assistant", closeLabel: "Fermer l'assistant",
  },
  en: {
    header: "KILLEURUSD Assistant",
    sub: "Indicative answers · educational content",
    greeting: "Hi 👋 I'm the KILLEURUSD assistant. How can I help?",
    placeholder: "Type your question…",
    menu: { programme: "The program", prix: "Pricing", pourqui: "Who is it for?", diag: "Am I ready? (quiz)", human: "Talk to a human" },
    kb: {
      programme: "KILLEURUSD is a premium trading program: technical-analysis method (price action), risk management, execution discipline. Includes: lifetime access + 1h one-on-one mentoring/week for 3 months + private group.",
      prix: "Access is a one-time payment of $997: lifetime access + private mentoring (1h/week for 3 months). No hidden subscription.",
      pourqui: "For self-taught traders who want a serious framework: motivated beginners and experienced traders lacking discipline. It is not a promise of gains.",
    },
    qualif: {
      intro: "Three quick questions to guide you. First: what is your trading level?",
      niveaux: ["Beginner", "Intermediate", "Advanced"],
      qObjectif: "Your main objective?",
      objectifs: ["Become consistently profitable", "Structure my method", "Manage my emotions"],
      qCapital: "And your starting capital (indicative)?",
      capitaux: ["< $1,000", "$1,000 – $5,000", "> $5,000"],
      result: (n: string, o: string, c: string) => `Thanks. Profile: ${n} · ${o} · capital ${c}. The program fits if you're ready to work with rigor (results not guaranteed). Best next step: a quick call to check it's right for you.`,
      ctaContact: "Request to be contacted", ctaPrix: "See the program / pricing",
    },
    toHuman: "I'm sending you to the contact form — we'll get back to you quickly.",
    fallbackErr: "I don't have the exact answer — a team member can help.",
    netErr: "Connection unavailable right now. You can use the contact form.",
    openLabel: "Open assistant", closeLabel: "Close assistant",
  },
};

export default function ChatWidget({ navigate, lang = "fr" }: { navigate?: (page: string) => void; lang?: Lang }) {
  const T = DICT[lang];
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([{ from: "bot", text: T.greeting }]);
  const [chips, setChips] = useState<Chip[]>([]);
  const [input, setInput] = useState("");
  const [profile, setProfile] = useState<{ niveau?: string; objectif?: string; capital?: string }>({});
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, open]);

  const bot = (text: string) => setMessages((m) => [...m, { from: "bot", text }]);
  const user = (text: string) => setMessages((m) => [...m, { from: "user", text }]);

  const mainMenu = (): Chip[] => [
    { label: T.menu.programme, action: () => answer("programme") },
    { label: T.menu.prix, action: () => answer("prix") },
    { label: T.menu.pourqui, action: () => answer("pourqui") },
    { label: T.menu.diag, action: startQualif },
    { label: T.menu.human, action: toContact },
  ];

  const answer = (key: "programme" | "prix" | "pourqui") => {
    user(T.menu[key]);
    setTimeout(() => { bot(T.kb[key]); setChips(mainMenu()); }, 250);
  };

  const startQualif = () => {
    user(T.menu.diag); setProfile({});
    setTimeout(() => {
      bot(T.qualif.intro);
      setChips(T.qualif.niveaux.map((n) => ({ label: n, action: () => setNiveau(n) })));
    }, 250);
  };
  const setNiveau = (n: string) => {
    user(n); setProfile((p) => ({ ...p, niveau: n }));
    setTimeout(() => { bot(T.qualif.qObjectif); setChips(T.qualif.objectifs.map((o) => ({ label: o, action: () => setObjectif(o) }))); }, 250);
  };
  const setObjectif = (o: string) => {
    user(o); setProfile((p) => ({ ...p, objectif: o }));
    setTimeout(() => { bot(T.qualif.qCapital); setChips(T.qualif.capitaux.map((c) => ({ label: c, action: () => setCapital(c) }))); }, 250);
  };
  const setCapital = (c: string) => {
    user(c);
    const prof = { ...profile, capital: c };
    setProfile(prof);
    setTimeout(() => {
      bot(T.qualif.result(prof.niveau || "", prof.objectif || "", c));
      setChips([{ label: T.qualif.ctaContact, action: toContact }, { label: T.qualif.ctaPrix, action: () => answer("prix") }]);
    }, 300);
  };

  const toContact = () => {
    user(T.menu.human);
    setTimeout(() => {
      bot(T.toHuman);
      if (navigate) navigate("contact"); else window.location.hash = "contact";
      setOpen(false);
    }, 300);
  };

  const send = async () => {
    const text = input.trim();
    if (!text) return;
    user(text); setInput(""); setChips([]);
    try {
      const res = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ message: text, lang }) });
      const data = await res.json();
      bot(data.reply || T.fallbackErr);
    } catch { bot(T.netErr); }
    setChips(mainMenu());
  };

  const toggle = () => { setOpen((o) => !o); if (!open && chips.length === 0 && messages.length === 1) setChips(mainMenu()); };

  return (
    <>
      <button type="button" aria-label={open ? T.closeLabel : T.openLabel} onClick={toggle}
        className="fixed bottom-5 right-5 z-[70] w-14 h-14 rounded-full bg-[#C9A227] text-[#0B0B0D] shadow-2xl flex items-center justify-center hover:scale-105 transition-transform">
        {open ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>

      {open && (
        <div role="dialog" aria-label={T.header}
          className="fixed bottom-24 right-5 z-[70] w-[min(92vw,380px)] h-[min(70vh,560px)] flex flex-col bg-[#111114] border border-zinc-800 rounded-lg shadow-2xl overflow-hidden">
          <div className="bg-[#0B0B0D] border-b border-zinc-800 p-4">
            <p className="text-white font-bold text-sm">{T.header}</p>
            <p className="text-zinc-400 text-xs">{T.sub}</p>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={m.from === "user" ? "text-right" : "text-left"}>
                <span className={"inline-block px-3 py-2 rounded-lg text-sm max-w-[85%] " + (m.from === "user" ? "bg-[#7A0F0F] text-white" : "bg-zinc-800 text-zinc-100")}>{m.text}</span>
              </div>
            ))}
            {chips.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {chips.map((c, i) => (
                  <button key={i} type="button" onClick={c.action}
                    className="text-xs border border-zinc-700 text-zinc-200 rounded-full px-3 py-1.5 hover:border-[#C9A227] hover:text-[#C9A227] transition-colors">{c.label}</button>
                ))}
              </div>
            )}
            <div ref={endRef} />
          </div>
          <form onSubmit={(e) => { e.preventDefault(); send(); }} className="border-t border-zinc-800 p-2 flex items-center gap-2">
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder={T.placeholder} aria-label={T.placeholder}
              className="flex-1 bg-zinc-900 text-zinc-100 text-sm rounded-md px-3 py-2 border border-zinc-800 focus:border-[#C9A227] outline-none" />
            <button type="submit" aria-label="Send" className="text-[#C9A227] p-2 hover:scale-110 transition-transform"><Send className="w-5 h-5" /></button>
          </form>
        </div>
      )}
    </>
  );
}
