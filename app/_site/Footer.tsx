import Link from "next/link";
import { footerNav, footerLegal } from "./nav";

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0D] border-t border-zinc-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <img src="/favicon.ico" alt="Killeur USD Logo" className="w-20 h-20 mr-4 object-contain" />
              <span className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter">KILLEUR<span className="text-[#7A0F0F]">USD</span></span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm mb-6">
              L'écosystème d'apprentissage dédié au Price Action pur, à la gestion de risque asymétrique et à la rigueur d'exécution.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-6">Navigation</h4>
            <ul className="space-y-3">
              {footerNav.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`transition-colors text-sm ${l.accent ? "text-[#C9A227] hover:text-white font-medium mt-2 block" : "text-zinc-400 hover:text-white"}`}
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-6">Légal & Conditions</h4>
            <ul className="space-y-3">
              {footerLegal.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-zinc-400 hover:text-white transition-colors text-sm">
                    {l.name}
                  </Link>
                </li>
              ))}
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
  );
}
