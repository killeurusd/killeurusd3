import Image from "next/image";
import logo from "../../public/logo.png";

// Carte « fondateur » : en l'absence de photo réelle (à fournir plus tard), on affiche
// un panneau de marque DÉLIBÉRÉ (logo en filigrane + halo + plaque nom/titre) plutôt
// qu'un placeholder d'image manquante. Pour brancher la vraie photo : remplacer le
// <Image logo> par la photo en `fill object-cover`.
export default function FounderCard({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-[#0B0B0D] border border-zinc-800 ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(122,15,15,0.20),transparent_65%)]" />
      <div className="absolute inset-0 flex items-center justify-center p-10">
        <Image src={logo} alt="" aria-hidden width={240} height={240} className="w-1/2 h-auto opacity-25 select-none" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/50 to-transparent" />
      <div className="absolute bottom-6 left-6 right-6">
        <div className="border-l-4 border-[#7A0F0F] pl-4">
          <p className="text-white font-black uppercase tracking-widest text-xl mb-1">RAYANE &quot;RAYSS&quot;</p>
          <p className="text-zinc-400 font-bold text-xs uppercase tracking-wider">FONDATEUR &amp; HEAD TRADER</p>
        </div>
      </div>
    </div>
  );
}
