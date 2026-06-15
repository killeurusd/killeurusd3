"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const Button = ({ children, variant = "primary", className = "", onClick, type = "button" }: any) => {
  const baseStyle = "inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all duration-300 rounded-sm";
  const variants: any = {
    primary: "bg-[#7A0F0F] hover:bg-[#5A0A0A] text-white px-8 py-4 text-sm md:text-base shadow-[0_4px_14px_0_rgba(122,15,15,0.39)] hover:shadow-[0_6px_20px_rgba(122,15,15,0.23)] hover:-translate-y-0.5",
    accent: "bg-[#C9A227] hover:bg-[#B38F22] text-[#0B0B0D] px-8 py-4 text-sm md:text-base shadow-[0_4px_14px_0_rgba(201,162,39,0.39)] hover:shadow-[0_6px_20px_rgba(201,162,39,0.23)] hover:-translate-y-0.5",
    secondary: "bg-[#111114] border border-zinc-800 hover:border-[#7A0F0F] text-white px-8 py-4 text-sm md:text-base",
    outline: "border border-zinc-800 hover:bg-[#111114] text-zinc-300 hover:text-white px-6 py-3 text-xs md:text-sm",
  };

  return (
    <button type={type} onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

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

// --- COMPOSANTS PAGES LÉGALES ---
export const LegalSection = ({ title, children }: any) => (
  <div className="mb-10">
    <h2 className="text-xl md:text-2xl font-bold text-white mb-6 border-l-4 border-[#7A0F0F] pl-4">{title}</h2>
    <div className="space-y-4 text-zinc-400 leading-relaxed text-sm md:text-base">
      {children}
    </div>
  </div>
);

export const LegalLayout = ({ title, lastUpdated, children }: any) => (
  <div className="pt-32 pb-24 max-w-4xl mx-auto px-6 min-h-screen">
    <Link href="/" className="flex items-center text-zinc-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-wider mb-12">
      <ChevronRight className="w-4 h-4 mr-1 rotate-180" /> Retour à l'accueil
    </Link>
    <div className="mb-12 border-b border-zinc-800 pb-8">
      <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4">{title}</h1>
      <p className="text-[#C9A227] uppercase tracking-widest text-xs font-bold">Dernière mise à jour : {lastUpdated}</p>
    </div>
    <div>
      {children}
    </div>
  </div>
);
