"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send } from "lucide-react";

type Msg = { from: "bot" | "user"; text: string };
type Chip = { label: string; action: () => void };

// Base de connaissances (règles) — réponses prêtes. L'IA libre est branchable via /api/chat.
const KB: Record<string, string> = {
  programme:
    "KILLEURUSD est un programme de trading premium : méthode d'analyse technique (price action), gestion du risque, discipline d'exécution. Inclus : accès à vie à la plateforme + 1h de mentoring individuel/semaine pendant 3 mois + groupe privé.",
  prix:
    "L'accès est un paiement unique de 997$ : accès à vie + accompagnement privé (1h/semaine pendant 3 mois). Aucun abonnement caché.",
  pourqui:
    "Pour les traders autodidactes qui veulent un cadre sérieux : débutants motivés comme traders expérimentés qui manquent de discipline d'exécution. Ce n'est pas une promesse de gains — c'est une méthode et un accompagnement.",
  duree:
    "Compte 3 mois de travail assidu pour maîtriser l'architecture de la méthode et corriger les erreurs de débutant. Tu avances à ton rythme, avec un suivi hebdomadaire.",
  risque:
    "⚠️ Le trading comporte un risque élevé de perte en capital. Le programme est purement éducatif et ne constitue pas un conseil en investissement. Les performances passées ne préjugent pas des performances futures.",
};

export default function ChatWidget({ navigate }: { navigate?: (page: string) => void }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    { from: "bot", text: "Bonjour 👋 Je suis l'assistant KILLEURUSD. Comment puis-je t'aider ?" },
  ]);
  const [chips, setChips] = useState<Chip[]>([]);
  const [input, setInput] = useState("");
  const [profile, setProfile] = useState<{ niveau?: string; objectif?: string; capital?: string }>({});
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, open]);

  const bot = (text: string) => setMessages((m) => [...m, { from: "bot", text }]);
  const user = (text: string) => setMessages((m) => [...m, { from: "user", text }]);

  // Menu principal
  const mainMenu = (): Chip[] => [
    { label: "Le programme", action: () => answer("programme") },
    { label: "Le prix", action: () => answer("prix") },
    { label: "C'est pour qui ?", action: () => answer("pourqui") },
    { label: "Suis-je prêt ? (diagnostic)", action: startQualif },
    { label: "Parler à un humain", action: toContact },
  ];

  const answer = (key: keyof typeof KB) => {
    const labels: Record<string, string> = { programme: "Le programme", prix: "Le prix", pourqui: "C'est pour qui ?" };
    user(labels[key] || key);
    setTimeout(() => { bot(KB[key]); setChips(mainMenu()); }, 250);
  };

  // Flux de qualification (classer le prospect)
  const startQualif = () => {
    user("Suis-je prêt ?");
    setProfile({});
    setTimeout(() => {
      bot("Trois questions rapides pour t'orienter. D'abord : quel est ton niveau en trading ?");
      setChips([
        { label: "Débutant", action: () => setNiveau("Débutant") },
        { label: "Intermédiaire", action: () => setNiveau("Intermédiaire") },
        { label: "Avancé", action: () => setNiveau("Avancé") },
      ]);
    }, 250);
  };
  const setNiveau = (n: string) => {
    user(n); setProfile((p) => ({ ...p, niveau: n }));
    setTimeout(() => {
      bot("Ton objectif principal ?");
      setChips([
        { label: "Devenir rentable / régulier", action: () => setObjectif("Rentabilité régulière") },
        { label: "Structurer ma méthode", action: () => setObjectif("Structurer la méthode") },
        { label: "Gérer mes émotions", action: () => setObjectif("Psychologie / discipline") },
      ]);
    }, 250);
  };
  const setObjectif = (o: string) => {
    user(o); setProfile((p) => ({ ...p, objectif: o }));
    setTimeout(() => {
      bot("Et ton capital de départ (indicatif) ?");
      setChips([
        { label: "< 1 000$", action: () => setCapital("< 1 000$") },
        { label: "1 000 – 5 000$", action: () => setCapital("1 000–5 000$") },
        { label: "> 5 000$", action: () => setCapital("> 5 000$") },
      ]);
    }, 250);
  };
  const setCapital = (c: string) => {
    user(c);
    const prof = { ...profile, capital: c };
    setProfile(prof);
    setTimeout(() => {
      bot(
        `Merci. Profil : ${prof.niveau} · ${prof.objectif} · capital ${c}. ` +
        "Le programme est adapté si tu es prêt à travailler avec rigueur (résultats non garantis). " +
        "La meilleure étape suivante : un échange pour vérifier que c'est fait pour toi."
      );
      setChips([
        { label: "Demander à être contacté", action: toContact },
        { label: "Voir le programme / prix", action: () => answer("prix") },
      ]);
    }, 300);
  };

  const toContact = () => {
    user("Parler à un humain");
    setTimeout(() => {
      bot("Je t'envoie vers le formulaire de contact — on revient vers toi rapidement.");
      navigate?.("contact");
      setOpen(false);
    }, 300);
  };

  // Saisie libre → /api/chat (règles aujourd'hui, IA branchable demain)
  const send = async () => {
    const text = input.trim();
    if (!text) return;
    user(text); setInput(""); setChips([]);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();
      bot(data.reply || "Je n'ai pas la réponse exacte — un membre de l'équipe peut t'aider.");
    } catch {
      bot("Connexion impossible pour le moment. Tu peux utiliser le formulaire de contact.");
    }
    setChips(mainMenu());
  };

  // Au premier ouvrir, proposer le menu
  const toggle = () => {
    setOpen((o) => !o);
    if (!open && chips.length === 0 && messages.length === 1) setChips(mainMenu());
  };

  return (
    <>
      {/* Bouton flottant */}
      <button
        type="button"
        aria-label={open ? "Fermer l'assistant" : "Ouvrir l'assistant"}
        onClick={toggle}
        className="fixed bottom-5 right-5 z-[70] w-14 h-14 rounded-full bg-[#C9A227] text-[#0B0B0D] shadow-2xl flex items-center justify-center hover:scale-105 transition-transform"
      >
        {open ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>

      {/* Panneau */}
      {open && (
        <div
          role="dialog"
          aria-label="Assistant KILLEURUSD"
          className="fixed bottom-24 right-5 z-[70] w-[min(92vw,380px)] h-[min(70vh,560px)] flex flex-col bg-[#111114] border border-zinc-800 rounded-lg shadow-2xl overflow-hidden"
        >
          <div className="bg-[#0B0B0D] border-b border-zinc-800 p-4">
            <p className="text-white font-bold text-sm">Assistant KILLEURUSD</p>
            <p className="text-zinc-400 text-xs">Réponses indicatives · contenu éducatif</p>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={m.from === "user" ? "text-right" : "text-left"}>
                <span
                  className={
                    "inline-block px-3 py-2 rounded-lg text-sm max-w-[85%] " +
                    (m.from === "user" ? "bg-[#7A0F0F] text-white" : "bg-zinc-800 text-zinc-100")
                  }
                >
                  {m.text}
                </span>
              </div>
            ))}
            {chips.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {chips.map((c, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={c.action}
                    className="text-xs border border-zinc-700 text-zinc-200 rounded-full px-3 py-1.5 hover:border-[#C9A227] hover:text-[#C9A227] transition-colors"
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            )}
            <div ref={endRef} />
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); send(); }}
            className="border-t border-zinc-800 p-2 flex items-center gap-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Écris ta question…"
              aria-label="Votre message"
              className="flex-1 bg-zinc-900 text-zinc-100 text-sm rounded-md px-3 py-2 border border-zinc-800 focus:border-[#C9A227] outline-none"
            />
            <button type="submit" aria-label="Envoyer" className="text-[#C9A227] p-2 hover:scale-110 transition-transform">
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
