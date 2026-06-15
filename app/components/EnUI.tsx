"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import ChatWidget from "./ChatWidget";
import logo from "../../public/logo.png";

// --- Boutons & titres (version EN, autonome) ---
export const Btn = ({ children, variant = "primary", className = "", href = "#" }: any) => {
  const base = "inline-flex items-center justify-center font-bold uppercase tracking-wider text-sm px-8 py-4 rounded-sm transition-all";
  const styles: any = {
    primary: "bg-[#7A0F0F] text-white hover:bg-[#950f0f]",
    accent: "bg-[#C9A227] text-[#0B0B0D] hover:bg-[#d9b647]",
    outline: "border border-zinc-700 text-white hover:border-[#C9A227] hover:text-[#C9A227]",
  };
  return <a href={href} className={`${base} ${styles[variant]} ${className}`}>{children}</a>;
};

export const SectionHeading = ({ subtitle, title, align = "center" }: any) => (
  <div className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}>
    <p className="text-[#C9A227] font-bold uppercase tracking-widest text-xs mb-3">{subtitle}</p>
    <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">{title}</h2>
  </div>
);

const navLinks = [
  { name: "The Program", href: "/en#program" },
  { name: "Vision", href: "/en/vision" },
  { name: "Blog", href: "/en/blog" },
  { name: "Contact", href: "/en#contact" },
];

// --- Shell (header + footer + chatbot) réutilisé par les pages secondaires EN ---
export function EnShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#0B0B0D] text-zinc-200 font-sans selection:bg-[#7A0F0F] selection:text-white">
      <header className="fixed top-0 w-full z-50 bg-[#0B0B0D]/90 backdrop-blur-md border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="/en" className="flex items-center group">
            <Image src={logo} alt="KILLEURUSD logo" width={40} height={40} priority className="w-10 h-10 mr-3 object-contain" />
            <span className="text-2xl font-black text-white tracking-tighter uppercase">KILLEUR<span className="text-[#7A0F0F]">USD</span></span>
          </a>
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((l) => (
              <a key={l.name} href={l.href} className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">{l.name}</a>
            ))}
            <a href="/" aria-label="Version française" className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">FR</a>
            <Btn href="/en/checkout" className="ml-4 !py-2.5 !px-6 !text-xs">Join</Btn>
          </nav>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="lg:hidden text-white hover:text-[#C9A227] transition-colors"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
        {open && (
          <div className="lg:hidden bg-[#0B0B0D] border-b border-zinc-900 absolute w-full left-0 p-6 flex flex-col space-y-5 shadow-2xl">
            {navLinks.map((l) => (
              <a key={l.name} href={l.href} onClick={() => setOpen(false)} className="text-left text-lg font-bold text-white uppercase tracking-wider hover:text-[#C9A227]">{l.name}</a>
            ))}
            <a href="/" onClick={() => setOpen(false)} className="text-left text-lg font-bold text-white uppercase tracking-wider hover:text-[#C9A227]">Français</a>
            <div className="pt-4 border-t border-zinc-900">
              <Btn href="/en/checkout" className="w-full">Join the program</Btn>
            </div>
          </div>
        )}
      </header>

      <main className="pt-20">{children}</main>

      <footer className="bg-[#0B0B0D] border-t border-zinc-900 pt-16 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-x-8 gap-y-3 justify-center mb-8 text-sm">
            <a href="/en/terms" className="text-zinc-400 hover:text-white transition-colors">Terms of Sale</a>
            <a href="/en/legal" className="text-zinc-400 hover:text-white transition-colors">Legal Notice</a>
            <a href="/en/privacy" className="text-zinc-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="/en/blog" className="text-zinc-400 hover:text-white transition-colors">Blog</a>
            <a href="/en#contact" className="text-zinc-400 hover:text-white transition-colors">Contact</a>
          </div>
          <div className="bg-[#111114] border border-zinc-900 p-6 rounded-sm mb-8">
            <p className="text-[10px] md:text-xs text-zinc-400 text-justify leading-relaxed uppercase tracking-wide">
              <strong>Risk warning:</strong> Trading financial markets (Forex, Indices, Crypto) carries a very high level of risk and may not be suitable for all investors. Leverage can work against you as well as for you. You could lose part or all of your initial capital. Never speculate with money you cannot afford to lose. KILLEURUSD provides purely educational content based on technical analysis. No information, chart or video on this site constitutes investment advice.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-900 text-xs text-zinc-400">
            <div>&copy; {new Date().getFullYear()} KILLEURUSD. All rights reserved. · <a href="/" className="hover:text-white">Français</a></div>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <span className="uppercase tracking-widest font-bold">Discipline.</span>
              <span className="uppercase tracking-widest font-bold">Method.</span>
              <span className="uppercase tracking-widest font-bold">Execution.</span>
            </div>
          </div>
        </div>
      </footer>

      <ChatWidget lang="en" />
    </div>
  );
}

// --- Layout des pages légales EN ---
export const LegalSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="text-xl font-bold text-white mb-3">{title}</h2>
    <div className="text-zinc-400 leading-relaxed space-y-3 text-sm md:text-base">{children}</div>
  </div>
);

export function LegalLayout({ title, lastUpdated, children }: { title: string; lastUpdated?: string; children: React.ReactNode }) {
  return (
    <EnShell>
      <div className="pt-12 pb-24 max-w-3xl mx-auto px-6 min-h-screen">
        <a href="/en" className="text-zinc-400 hover:text-white text-sm font-bold uppercase tracking-wider mb-8 inline-block">← Back to home</a>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">{title}</h1>
        {lastUpdated && <p className="text-zinc-500 text-xs mb-12">Last updated: {lastUpdated}</p>}
        {children}
      </div>
    </EnShell>
  );
}
