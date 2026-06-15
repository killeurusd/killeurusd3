// Primitives PARTAGÉES (pas de "use client") : utilisables en Server Component
// pour éviter d'hydrater du contenu purement présentationnel.
import Link from "next/link";

export const SectionHeading = ({ subtitle, title, align = "center" }: any) => (
  <div className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
    <span className="text-[#C9A227] font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-4 block">
      {subtitle}
    </span>
    <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
      {title}
    </h2>
  </div>
);

const base = "inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all duration-300 rounded-sm";
const variants: Record<string, string> = {
  primary: "bg-[#7A0F0F] hover:bg-[#5A0A0A] text-white px-8 py-4 text-sm md:text-base shadow-[0_4px_14px_0_rgba(122,15,15,0.39)] hover:shadow-[0_6px_20px_rgba(122,15,15,0.23)] hover:-translate-y-0.5",
  accent: "bg-[#C9A227] hover:bg-[#B38F22] text-[#0B0B0D] px-8 py-4 text-sm md:text-base shadow-[0_4px_14px_0_rgba(201,162,39,0.39)] hover:shadow-[0_6px_20px_rgba(201,162,39,0.23)] hover:-translate-y-0.5",
  secondary: "bg-[#111114] border border-zinc-800 hover:border-[#7A0F0F] text-white px-8 py-4 text-sm md:text-base",
  outline: "border border-zinc-800 hover:bg-[#111114] text-zinc-300 hover:text-white px-6 py-3 text-xs md:text-sm",
};

// Bouton-lien (vraie navigation, aucun handler → reste server/partagé).
export const LinkButton = ({ children, href, variant = "primary", className = "" }: any) => (
  <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
    {children}
  </Link>
);
