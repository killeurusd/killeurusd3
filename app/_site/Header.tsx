"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navLinks, PATHS } from "./nav";
import logo from "../../public/logo.png";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed top-10 w-full z-50 bg-[#0B0B0D]/90 backdrop-blur-md border-b border-zinc-900 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center cursor-pointer group">
          <Image src={logo} alt="Logo KILLEURUSD" width={40} height={40} priority className="w-10 h-10 mr-3 group-hover:scale-105 transition-transform object-contain" />
          <span className="text-2xl font-black text-white tracking-tighter uppercase">KILLEUR<span className="text-[#7A0F0F]">USD</span></span>
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                isActive(link.href) ? "text-[#C9A227]" : "text-zinc-400 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/en" aria-label="English version" className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">EN</Link>
          <Link
            href={PATHS.checkout}
            className="ml-4 inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all duration-300 rounded-sm bg-[#7A0F0F] hover:bg-[#5A0A0A] text-white py-2.5 px-6 text-xs shadow-[0_4px_14px_0_rgba(122,15,15,0.39)] hover:-translate-y-0.5"
          >
            Rejoindre
          </Link>
        </nav>

        {/* Bouton Mobile */}
        <button
          type="button"
          aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isMobileMenuOpen}
          className="lg:hidden text-white hover:text-[#C9A227] transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0B0D] border-b border-zinc-900 absolute w-full left-0 p-6 flex flex-col space-y-6 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-left text-lg font-bold text-white uppercase tracking-wider hover:text-[#C9A227]"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-zinc-900">
            <Link
              href={PATHS.checkout}
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all duration-300 rounded-sm bg-[#7A0F0F] hover:bg-[#5A0A0A] text-white px-8 py-4 text-sm"
            >
              Rejoindre le programme
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
