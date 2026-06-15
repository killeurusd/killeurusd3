// Bandeau marquee global (haut de page).
export default function Banner() {
  return (
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
  );
}
