"use client";

import { CheckCircle } from "lucide-react";

export default function ThankYou() {
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
              Utilise le système de réservation interne pour programmer ton heure de mentoring initiale avec RAYANE &quot;RAYSS&quot;.
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
}
