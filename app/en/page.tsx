"use client";

import React, { useState } from "react";
import {
  ChevronRight, Target, TrendingUp, ShieldAlert, CheckCircle, ArrowRight, Menu,
  X, Crosshair, Brain, ShieldCheck, Activity, Users, Star,
  PlayCircle, Wrench, Radio, Download, CheckCircle2, Mail, MessageSquare,
} from "lucide-react";
import Image from "next/image";
import ChatWidget from "../components/ChatWidget";
import logo from "../../public/logo.png";
import HeroChart from "../_site/HeroChart";
import { getAttribution } from "../_site/tracking";
import PhoneField from "../_site/PhoneField";
import FounderCard from "../_site/FounderCard";
import CountUp from "../_site/CountUp";
import { COHORT } from "../_site/offer";

// --- Primitives locales (la page EN est autonome ; le site FR n'est pas modifié) ---
const Button = ({ children, variant = "primary", className = "", href = "#", onClick }: any) => {
  const base = "inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all duration-300 rounded-sm";
  const styles: any = {
    primary: "bg-[#7A0F0F] hover:bg-[#5A0A0A] text-white px-8 py-4 text-sm md:text-base shadow-[0_4px_14px_0_rgba(122,15,15,0.39)] hover:shadow-[0_6px_20px_rgba(122,15,15,0.23)] hover:-translate-y-0.5",
    accent: "bg-[#C9A227] hover:bg-[#B38F22] text-[#0B0B0D] px-8 py-4 text-sm md:text-base shadow-[0_4px_14px_0_rgba(201,162,39,0.39)] hover:shadow-[0_6px_20px_rgba(201,162,39,0.23)] hover:-translate-y-0.5",
    secondary: "bg-[#111114] border border-zinc-800 hover:border-[#7A0F0F] text-white px-8 py-4 text-sm md:text-base",
    outline: "border border-zinc-800 hover:bg-[#111114] text-zinc-300 hover:text-white px-6 py-3 text-xs md:text-sm",
  };
  return <a href={href} onClick={onClick} className={`${base} ${styles[variant]} ${className}`}>{children}</a>;
};
const SectionHeading = ({ subtitle, title, align = "center" }: any) => (
  <div className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
    <span className="text-[#C9A227] font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-4 block">{subtitle}</span>
    <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">{title}</h2>
  </div>
);

export default function EnHome() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [sent, setSent] = useState(false);
  const [leadSent, setLeadSent] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  async function postForm(e: any, formType: string) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType, page: "/en", lang: "en", ...getAttribution(), ...data }),
      });
    } catch {}
  }
  const fld = "w-full bg-[#111114] border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-[#7A0F0F] transition-colors rounded-sm";
  const lbl = "block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2";

  const faqs = [
    { q: "Is this program suitable for absolute beginners?", a: "Absolutely. The only requirement is to be coachable and disciplined. If you're looking for a magic button or signals to copy, this isn't for you. If you're ready to learn the fundamentals and apply strict discipline, this framework will save you years of wandering." },
    { q: "I already have experience — will I really learn something?", a: "Yes. 80% of our members already have market experience but struggle with consistency. Our process deconstructs bad habits (gambling, over-trading, FOMO) and installs a clinical execution logic." },
    { q: "How do you justify the investment ($997)?", a: "You're not buying a simple set of videos. You access a complete ecosystem with exclusive tools, an active community, and above all 1 hour of one-on-one mentoring per week for 3 months. This investment filters out the merely curious and guarantees a flawless level of support." },
    { q: "Do you share trading signals?", a: "No. KILLEURUSD's goal is to forge autonomous traders capable of reading the market and making their own decisions — not to create dependence on external signals." },
    { q: "How long does it take to see results?", a: "Expect 3 months of focused work to master the architecture of the method, eliminate beginner mistakes and see a clear improvement in your price reading and risk management." },
    { q: "Is access to the training time-limited?", a: "No. The payment is one-time. You get lifetime access to the VOD platform, future module updates and the private group." },
    { q: "Do I need a large capital to start?", a: "Not at all. The approach applies regardless of account size. We even recommend training in simulation (demo) first, then validating your skills through Prop Firm evaluations." },
    { q: "Concretely, how does the one-on-one mentoring work?", a: "Every week for 3 months, you book a one-hour slot via our internal calendar. We audit your positions, correct your biases live on the charts, and define your action plan for the following week." },
  ];

  return (
    <div id="top" className="min-h-screen bg-[#0B0B0D] text-zinc-200 font-sans selection:bg-[#7A0F0F] selection:text-white pt-10">

      {/* FAQ structured data (FAQPage) — extractable by Google & AI engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            inLanguage: "en",
            mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
          }).replace(/</g, "\\u003c"),
        }}
      />

      {/* URGENCY BANNER */}
      <div className="fixed top-0 left-0 w-full h-10 bg-[#7A0F0F] text-white flex items-center overflow-hidden z-[60] text-xs md:text-sm font-bold tracking-widest uppercase">
        <style>{`@keyframes marquee {0%{transform:translateX(100vw);}100%{transform:translateX(-100%);}} .animate-marquee{animation:marquee 20s linear infinite;}`}</style>
        <div className="animate-marquee whitespace-nowrap flex items-center">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse mr-3"></span>
          {COHORT.dateEn} bootcamp · only {COHORT.seats} seats — small-group mentoring.
        </div>
      </div>

      {/* HEADER */}
      <header className="fixed top-10 w-full z-50 bg-[#0B0B0D]/90 backdrop-blur-md border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#top" className="flex items-center group">
            <Image src={logo} alt="KILLEURUSD logo" width={40} height={40} priority className="w-10 h-10 mr-3 object-contain" />
            <span className="text-2xl font-black text-white tracking-tighter uppercase">KILLEUR<span className="text-[#7A0F0F]">USD</span></span>
          </a>
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#program" className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">The Program</a>
            <a href="/en/vision" className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">Vision</a>
            <a href="/en/blog" className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">Blog</a>
            <a href="#contact" className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">Contact</a>
            <a href="/" aria-label="Version française" className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">FR</a>
            <Button href="#program" className="ml-4 !py-2.5 !px-6 !text-xs">Join</Button>
          </nav>
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="lg:hidden text-white hover:text-[#C9A227] transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden bg-[#0B0B0D] border-b border-zinc-900 absolute w-full left-0 p-6 flex flex-col space-y-5 shadow-2xl">
            {[
              { label: "The Program", href: "#program" },
              { label: "Vision", href: "/en/vision" },
              { label: "Blog", href: "/en/blog" },
              { label: "Contact", href: "#contact" },
              { label: "Français", href: "/" },
            ].map((l) => (
              <a key={l.label} href={l.href} onClick={() => setMobileOpen(false)} className="text-left text-lg font-bold text-white uppercase tracking-wider hover:text-[#C9A227]">{l.label}</a>
            ))}
            <div className="pt-4 border-t border-zinc-900">
              <Button href="#program" className="w-full" onClick={() => setMobileOpen(false)}>Join the program</Button>
            </div>
          </div>
        )}
      </header>

      {/* 1. HERO */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(122,15,15,0.08),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl hero-in">
            <div className="inline-flex items-center space-x-2 bg-[#111114] border border-zinc-800 rounded-sm px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#7A0F0F] animate-pulse"></span>
              <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider">Technical excellence</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-8">STOP TRADING <br /> AT RANDOM.</h1>
            <p className="text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed font-medium">
              Master a technical-analysis approach built on principles proven for over a century. Turn your sessions into structured, disciplined, professional execution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button href="#program" variant="primary" className="group">Access the program <ArrowRight className="ml-2 w-5 h-5" /></Button>
              <Button href="#contact" variant="secondary">Book a call</Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-400 font-medium">
              <div className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#C9A227] mr-2" /> Complete ecosystem</div>
              <div className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#C9A227] mr-2" /> Weekly mentoring</div>
              <div className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#C9A227] mr-2" /> Lifetime access</div>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="aspect-[4/3] bg-[#0B0B0D] border border-zinc-800 rounded-sm overflow-hidden relative shadow-[0_0_50px_rgba(0,0,0,0.8)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_15%,rgba(122,15,15,0.12),transparent_60%)]"></div>
              <div className="absolute inset-x-8 bottom-8 top-12 border border-zinc-800/50 bg-[#111114]/80 backdrop-blur flex flex-col p-4 rounded-sm">
                <div className="flex justify-between items-center border-b border-zinc-800/50 pb-3 mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                    <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                    <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                  </div>
                  <span className="text-[10px] text-zinc-400 font-mono uppercase tracking-wider">Structural Analysis</span>
                </div>
                <div className="flex-1 flex items-center justify-center min-h-0">
                  <HeroChart liquidityLabel="LIQUIDITY" zoneLabel="DEMAND ZONE" ariaLabel="Illustration of a technical-analysis read: pullback into a demand zone then bullish continuation." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROBLEM */}
      <section className="py-24 bg-[#0B0B0D]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="The reality" title="Why piling up hours on the charts is no longer enough." />
          <p className="text-center text-zinc-400 max-w-3xl mx-auto mb-16 text-lg">
            Motivation isn't the problem. The lack of a process is. Scattering across fifteen strategies and chasing the miracle signal turns trading into gambling.
          </p>
          <div data-reveal-stagger className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Strategic instability", desc: "You test one method, then another at the first losing streak. By skimming everything, you truly master nothing." },
              { icon: ShieldAlert, title: "The perfect-setup illusion", desc: "You still believe there's a shortcut, a magic indicator or a VIP channel that fixes everything. The result: total dependence." },
              { icon: TrendingUp, title: "Emotional execution", desc: "You enter on FOMO, you cut out of fear. Without mathematical logic or a strict plan, your capital quietly erodes." },
            ].map((item, idx) => (
              <div key={idx} className="bg-[#111114] border border-zinc-800 p-8 rounded-sm hover:border-[#7A0F0F] transition-colors">
                <item.icon className="w-10 h-10 text-[#7A0F0F] mb-6" />
                <h3 className="text-xl font-bold text-white mb-4 leading-tight">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <p className="text-[#C9A227] font-bold text-xl uppercase tracking-wider">The problem isn't your potential.<br />It's the disorder of your approach.</p>
          </div>
        </div>
      </section>

      {/* 3. METHOD */}
      <section className="py-24 bg-[#111114] border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="The paradigm shift" title="A clear method. Clinical execution. Mathematical discipline." />
          <p className="text-center text-zinc-400 max-w-3xl mx-auto mb-16 text-lg">
            At KILLEURUSD you don't learn to stack indicators. You learn to decode the market through timeless institutional concepts, then apply them with absolute rigor in the real world.
          </p>
          <div data-reveal-stagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Crosshair, title: "Spatial reading", desc: "Understand structure, identify liquidity zones and read pure price action, without noise." },
              { icon: Activity, title: "Clinical execution", desc: "Strict entry definition, invalidation levels and uncompromising respect for timing." },
              { icon: ShieldCheck, title: "Asymmetric management", desc: "Obsessive capital protection. Risk/reward ratios for long-term mathematical survival." },
              { icon: Brain, title: "Psychological mastery", desc: "Cultivate patience, accept probability, and build the emotional control to operate coldly." },
            ].map((p, idx) => (
              <div key={idx} className="bg-[#0B0B0D] border border-zinc-800 p-8 rounded-sm group hover:bg-zinc-900 transition-all">
                <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-sm flex items-center justify-center mb-6 group-hover:border-[#C9A227] transition-colors"><p.icon className="w-6 h-6 text-[#C9A227]" /></div>
                <h4 className="text-white font-bold mb-3">{p.title}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TRANSFORMATION */}
      <section className="py-24 bg-[#0B0B0D]">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading subtitle="The evolution" title="From noise to clarity" />
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-stretch">
            <div className="bg-[#111114] border border-zinc-800 p-8 md:p-10 rounded-sm">
              <h3 className="text-2xl font-bold text-white mb-8 border-b border-zinc-800 pb-4">Amateur trading</h3>
              <ul className="space-y-6">
                {["frantically jumping from one strategy to another,", "taking positions driven by emotion,", "cluttering charts with lagging indicators,", "outsourcing decisions (signals, alerts),", "operating without any risk-management plan."].map((item, i) => (
                  <li key={i} className="flex items-start text-zinc-400"><X className="w-5 h-5 text-[#7A0F0F] mr-4 shrink-0 mt-0.5" /><span>{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="bg-[#0B0B0D] border border-[#C9A227]/30 p-8 md:p-10 rounded-sm shadow-[0_0_30px_rgba(201,162,39,0.05)]">
              <h3 className="text-2xl font-bold text-[#C9A227] mb-8 border-b border-[#C9A227]/20 pb-4">The professional approach</h3>
              <ul className="space-y-6">
                {["precisely identify high-potential key zones,", "factually justify every entry,", "apply a repeatable, clean analysis process,", "manage financial exposure surgically,", "treat trading with the rigor of a real profession."].map((item, i) => (
                  <li key={i} className="flex items-start text-white font-medium"><CheckCircle2 className="w-5 h-5 text-[#C9A227] mr-4 shrink-0 mt-0.5" /><span>{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-center text-zinc-400 mt-12 font-bold max-w-2xl mx-auto">Our goal isn't to sell illusion. Our mission is to instill a concrete, applicable method built to last.</p>
        </div>
      </section>

      {/* 5. OFFER */}
      <section id="program" className="py-24 bg-gradient-to-b from-[#111114] to-[#0B0B0D] border-y border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading subtitle="The KILLEURUSD ecosystem" title="What you really join" />
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xl text-white font-medium mb-4">You're not joining just another course.</p>
            <p className="text-zinc-400 leading-relaxed">You join a program designed to help you understand the market, correct your mistakes and progress with real support.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-[#0B0B0D] border border-zinc-800 p-8 rounded-sm flex flex-col">
              <PlayCircle className="w-10 h-10 text-[#7A0F0F] mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">The training modules</h3>
              <p className="text-zinc-400 mb-6 text-sm">Immediate access to all our theoretical resources, designed to help you:</p>
              <ul className="space-y-3 flex-1">
                {["master price reading without indicators,", "understand the true nature of liquidity,", "build a strict, airtight trading plan,", "use probabilities to your advantage."].map((item, i) => (
                  <li key={i} className="flex items-start text-sm text-zinc-300"><CheckCircle2 className="w-4 h-4 text-[#C9A227] mr-3 shrink-0 mt-0.5" /><span>{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="bg-[#0B0B0D] border border-zinc-800 p-8 rounded-sm flex flex-col">
              <Users className="w-10 h-10 text-[#C9A227] mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">The private analysis & trades group</h3>
              <p className="text-zinc-400 mb-6 text-sm">An exclusive channel where I share my market reads, setups and live position management daily.</p>
              <ul className="space-y-3 flex-1">
                {["follow price action day by day,", "factually understand the decisions made,", "avoid imminent market traps,", "exchange with seasoned members."].map((item, i) => (
                  <li key={i} className="flex items-start text-sm text-zinc-300"><CheckCircle2 className="w-4 h-4 text-[#7A0F0F] mr-3 shrink-0 mt-0.5" /><span>{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="bg-[#111114] border border-[#7A0F0F]/50 p-8 rounded-sm relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 bg-[#7A0F0F] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">Accelerator</div>
              <Target className="w-10 h-10 text-[#7A0F0F] mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">1 private coaching / week (3 months)</h3>
              <p className="text-zinc-400 mb-6 text-sm">For 3 months, you get 1 hour of one-on-one mentoring per week, face to face:</p>
              <ul className="space-y-3 flex-1">
                {["full audit of your week's trades,", "spotting and correcting your psychological biases,", "surgical refinement of your entries,", "setting measurable discipline goals."].map((item, i) => (
                  <li key={i} className="flex items-start text-sm text-zinc-300"><CheckCircle2 className="w-4 h-4 text-[#C9A227] mr-3 shrink-0 mt-0.5" /><span>{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="bg-[#111114] border border-[#C9A227]/40 p-8 rounded-sm relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 bg-[#C9A227] text-[#0B0B0D] text-[10px] font-bold uppercase tracking-widest px-3 py-1">Community</div>
              <Radio className="w-10 h-10 text-[#C9A227] mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">1 group live per week</h3>
              <p className="text-zinc-400 mb-6 text-sm">The community's unmissable meet-up. A weekly group live of at least one hour to:</p>
              <ul className="space-y-3 flex-1">
                {["take a macro step back on the past week,", "calmly break down complex setups,", "defuse upcoming market traps,", "answer your technical questions live."].map((item, i) => (
                  <li key={i} className="flex items-start text-sm text-zinc-300"><CheckCircle2 className="w-4 h-4 text-[#7A0F0F] mr-3 shrink-0 mt-0.5" /><span>{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-2 bg-gradient-to-r from-[#0B0B0D] to-[#111114] border border-zinc-800 p-8 md:p-12 rounded-sm flex flex-col gap-8">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-[#111114] border border-zinc-800 rounded-full flex items-center justify-center shrink-0 mr-6"><Wrench className="w-8 h-8 text-[#C9A227]" /></div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">An exclusive toolbox</h3>
                  <p className="text-zinc-400 text-sm max-w-2xl">Tools built to help you progress with more rigor, more clarity and more efficiency.</p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {[["AI tools", "To save time, structure your analysis and speed up your work."], ["Technical indicators", "Built to help you read the market with more precision."], ["Online trading journal", "To track performance, understand mistakes and measure progress."]].map(([t, d], i) => (
                  <div key={i} className="bg-[#0B0B0D] border border-zinc-800/50 p-6 rounded-sm">
                    <h4 className="text-white font-bold text-sm flex items-center mb-3"><CheckCircle2 className="w-4 h-4 text-[#C9A227] mr-2 shrink-0" /> {t}</h4>
                    <p className="text-zinc-400 text-xs leading-relaxed">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* PRICE */}
          <div className="mt-4 bg-[#111114] border border-zinc-800 p-8 md:p-12 text-center rounded-sm max-w-3xl mx-auto shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#7A0F0F] blur-[100px] opacity-20"></div>
            <h3 className="text-3xl font-extrabold text-white mb-2">What you really join</h3>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">You're not investing in mere modules. You join a method, ongoing support and a work environment built to grow your trading in the real world.</p>
            <div className="text-6xl font-black text-white mb-4"><CountUp end={997} prefix="$" /></div>
            <div className="text-zinc-400 text-sm mb-8 font-medium">One-time payment. Guaranteed lifetime platform access.<br />Includes: private mentoring (1h/week) for 3 months.</div>
            <Button href="#contact" className="w-full sm:w-auto px-16 py-5 text-lg">Secure my spot</Button>
            <p className="text-xs text-zinc-400 mt-6 max-w-lg mx-auto">Next cohort: <strong className="text-white">{COHORT.dateEn} bootcamp — {COHORT.seats} seats</strong>. A small group to guarantee genuine, hands-on support.</p>
            <p className="text-xs text-zinc-400 mt-4 max-w-lg mx-auto">⚠️ Trading carries a high risk of capital loss. This program is <strong>educational</strong> and does not constitute investment advice. Past performance does not guarantee future results.</p>
          </div>
        </div>
      </section>

      {/* 6. WHO IS IT FOR */}
      <section className="py-24 bg-[#0B0B0D]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-[#C9A227] pl-4">This training is for you if...</h3>
            <ul className="space-y-4">
              {["You're tired of constantly switching methods.", "You finally want to understand what you do on a chart.", "You're ready to learn seriously.", "You want to stop trading at random.", "You accept that real progress takes work."].map((item, i) => (
                <li key={i} className="flex items-start text-zinc-400"><CheckCircle className="w-5 h-5 text-[#C9A227] mr-3 shrink-0" /><span>{item}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-[#7A0F0F] pl-4">It is NOT for you if...</h3>
            <ul className="space-y-4">
              {["You're looking for a miracle or a magic pill.", "You just want to copy-paste Telegram signals.", "You refuse to apply strict discipline.", "You want to get rich fast without learning.", "You're not ready to question yourself."].map((item, i) => (
                <li key={i} className="flex items-start text-zinc-400"><X className="w-5 h-5 text-[#7A0F0F] mr-3 shrink-0" /><span>{item}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="py-24 bg-[#111114] border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="Field proof" title="They stopped hoping. They execute." />
          <div data-reveal-stagger className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { name: "Thomas", level: "2 years trading · scattered self-taught", text: "I kept jumping from one method to another without ever building a real base. This framework let me clean up my charts, simplify my decisions and, above all, spot my recurring cognitive biases." },
              { name: "Julien", level: "Beginner · building from scratch", text: "Instead of burning my capital testing useless indicators, I laid healthy foundations. The weekly mentoring is invaluable — it leaves no mistake unaddressed." },
              { name: "Sarah", level: "3 years trading · unstable execution", text: "I already had the technical background but sorely lacked discipline. KILLEURUSD imposed the clinical rigor I needed to finally smooth my equity curve." },
            ].map((t, idx) => (
              <div key={idx} className="bg-[#0B0B0D] border border-zinc-800 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex text-[#C9A227] mb-6">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}</div>
                  <p className="text-zinc-300 italic mb-8 leading-relaxed text-sm">"{t.text}"</p>
                </div>
                <div className="border-t border-zinc-800 pt-4">
                  <div className="font-bold text-white uppercase tracking-wider text-sm">{t.name}</div>
                  <div className="text-xs text-[#C9A227] font-bold mt-1 uppercase tracking-widest">{t.level}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Our students' results</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {["/avis-1.png", "/avis-2.png", "/avis-3.png"].map((src, idx) => (
                <div key={idx} className="bg-[#0B0B0D] border border-zinc-800 p-2 rounded-sm">
                  <div className="bg-[#111114] flex items-center justify-center overflow-hidden rounded-sm min-h-[200px]">
                    <img src={src} alt={`Execution proof ${idx + 1}`} className="w-full h-auto object-contain" />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-zinc-400 text-xs mt-6 uppercase tracking-wider">Excerpts from our private group and student follow-up.</p>
          </div>
          <div className="bg-[#0B0B0D] border border-zinc-800 p-8 rounded-sm text-center">
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Why trust this approach?</h4>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-zinc-400">
              <div className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#7A0F0F] mr-2" /> 7+ years of real practice</div>
              <div className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#7A0F0F] mr-2" /> Zero marketing illusion</div>
              <div className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#7A0F0F] mr-2" /> Performance audits</div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FOUNDER */}
      <section className="py-24 bg-[#0B0B0D]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <FounderCard className="aspect-[4/5] shadow-[0_0_30px_rgba(0,0,0,0.5)]" role="FOUNDER & HEAD TRADER" />
          <div>
            <SectionHeading subtitle="The expertise" title="You don't need promises — you need a method." align="left" />
            <h3 className="text-2xl font-bold text-white mb-6">The market rewards discipline, not motivation.</h3>
            <div className="text-zinc-400 space-y-6 leading-relaxed text-base">
              <p>I have no interest in selling you the illusion of overnight wealth. My role is to pass on a surgical, field-tested process and to force the correction of your mistakes until you're autonomous.</p>
              <p>The trading industry has become a toxic attention market. But behind the screen, the market remains a merciless mathematical environment. It punishes improvisation and pays for clinical execution.</p>
              <div className="border-l-2 border-[#C9A227] pl-6 my-8"><p className="text-white font-bold italic">"Consistency isn't found in a hidden setup. It comes from the relentless execution of a predefined plan."</p></div>
              <p>KILLEURUSD was founded on that standard: to forge a circle of independent traders, able to analyze without bias and execute with professional composure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8b. KEY NUMBERS (animated counters) */}
      <section className="py-20 bg-[#111114] border-y border-zinc-900">
        <div data-reveal-stagger className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-black text-white tracking-tight"><CountUp end={997} prefix="$" /></div>
            <div className="text-[11px] md:text-xs text-zinc-400 uppercase tracking-widest mt-2">One-time payment</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-black text-[#C9A227] tracking-tight"><CountUp end={3} /></div>
            <div className="text-[11px] md:text-xs text-zinc-400 uppercase tracking-widest mt-2">Months of support</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-black text-white tracking-tight"><CountUp end={1} suffix="h" /></div>
            <div className="text-[11px] md:text-xs text-zinc-400 uppercase tracking-widest mt-2">Coaching / week</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-black text-[#C9A227] tracking-tight"><CountUp end={7} prefix="+" /></div>
            <div className="text-[11px] md:text-xs text-zinc-400 uppercase tracking-widest mt-2">Years of experience</div>
          </div>
        </div>
      </section>

      {/* 9. LEAD CAPTURE */}
      <section className="py-24 bg-[#7A0F0F] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <Download className="w-12 h-12 text-white/50 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Keep going.</h2>
          <p className="text-white/80 mb-10 text-lg max-w-2xl mx-auto">Download <strong className="text-white">"The Disciplined Trader's Audit"</strong> for free. 10 non-negotiable checkpoints before opening any position.</p>
          {leadSent ? (
            <div className="max-w-2xl mx-auto bg-[#0B0B0D]/40 border border-white/20 p-6 rounded-sm text-center">
              <p className="text-white font-bold">Thanks 👍 Check your inbox.</p>
              <p className="text-white/70 text-sm mt-1">The checklist is on its way.</p>
            </div>
          ) : (
          <form className="flex flex-col sm:flex-row sm:flex-wrap gap-4 justify-center max-w-2xl mx-auto" onSubmit={(e: any) => { setLeadSent(true); postForm(e, "lead"); }}>
            <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
            <input type="text" name="prenom" placeholder="Your first name *" aria-label="Your first name" className="px-6 py-4 bg-[#0B0B0D]/50 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white w-full sm:flex-1 sm:min-w-[150px] rounded-sm" required />
            <input type="email" name="email" placeholder="Your email *" aria-label="Your email" className="px-6 py-4 bg-[#0B0B0D]/50 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white w-full sm:flex-1 sm:min-w-[180px] rounded-sm" required />
            <PhoneField lang="en" variant="light" className="w-full sm:flex-1 sm:min-w-[240px]" />
            <button type="submit" className="px-8 py-4 bg-white text-[#7A0F0F] font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors whitespace-nowrap rounded-sm w-full sm:w-auto">Get the checklist</button>
          </form>
          )}
          <p className="text-white/50 text-xs mt-4">* Required fields</p>
          <p className="text-white/70 text-xs mt-1">Instant access. One-click unsubscribe.</p>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="py-24 bg-[#0B0B0D]">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeading subtitle="Answers to the most common questions" title="Frequently asked questions" />
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-zinc-800 bg-[#111114]">
                <button className="w-full text-left px-8 py-6 flex justify-between items-center text-white font-bold hover:text-[#C9A227] transition-colors" onClick={() => setOpenFaq(openFaq === idx ? null : idx)}>
                  <span className="pr-6 text-lg">{faq.q}</span>
                  <ChevronRight className={`w-5 h-5 shrink-0 transition-transform ${openFaq === idx ? "rotate-90 text-[#C9A227]" : "text-zinc-600"}`} />
                </button>
                {openFaq === idx && <div className="px-8 pb-8 text-zinc-400 mt-2 leading-relaxed text-base border-t border-zinc-800/50 pt-6">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. CONTACT (qualifying) */}
      <section id="contact" className="py-24 bg-[#111114] border-y border-zinc-900">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeading subtitle="Get in touch" title="Tell us about you" />
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-12">
            <div className="flex items-center text-white"><Mail className="w-5 h-5 text-[#7A0F0F] mr-3" /><span className="font-bold">contact@killeurusd.com</span></div>
            <div className="flex items-center text-white"><MessageSquare className="w-5 h-5 text-[#7A0F0F] mr-3" /><span className="font-bold">@KILLEURUSD_Support</span></div>
          </div>
          {sent ? (
            <div className="bg-[#0B0B0D] border border-[#C9A227]/40 p-10 rounded-sm text-center">
              <CheckCircle2 className="w-12 h-12 text-[#C9A227] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Request received.</h3>
              <p className="text-zinc-400">Thanks. We'll get back to you within 24 business hours with an answer tailored to your profile.</p>
            </div>
          ) : (
          <form className="space-y-6 text-left bg-[#0B0B0D] border border-zinc-800 p-8 md:p-10 rounded-sm" onSubmit={(e: any) => { setSent(true); postForm(e, "contact"); }}>
            <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
            <p className="text-sm text-zinc-400 -mt-2">A few details help us guide you and personalize our reply.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div><label className={lbl}>Full name *</label><input name="nom" type="text" required className={fld} /></div>
              <div><label className={lbl}>Email *</label><input name="email" type="email" required className={fld} /></div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div><label className={lbl}>Phone *</label><PhoneField lang="en" variant="dark" /></div>
              <div><label className={lbl}>Your current level</label><select name="niveau" className={`${fld} appearance-none`}><option>Beginner</option><option>Intermediate</option><option>Advanced</option></select></div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div><label className={lbl}>How long have you traded?</label><select name="experience" className={`${fld} appearance-none`}><option>Never traded</option><option>Less than 1 year</option><option>1 to 3 years</option><option>More than 3 years</option></select></div>
              <div><label className={lbl}>Main objective</label><select name="objectif" className={`${fld} appearance-none`}><option>Become consistently profitable</option><option>Structure my method</option><option>Manage my emotions / discipline</option><option>Trade for a living</option></select></div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div><label className={lbl}>Starting capital (indicative)</label><select name="capital" className={`${fld} appearance-none`}><option>Under $1,000</option><option>$1,000 – $5,000</option><option>$5,000 – $20,000</option><option>Over $20,000</option></select></div>
              <div><label className={lbl}>Your main blocker today</label><select name="blocage" className={`${fld} appearance-none`}><option>No clear method</option><option>Repeated losses</option><option>Emotions / impulsivity</option><option>Lack of time</option><option>Other</option></select></div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div><label className={lbl}>When do you want to start?</label><select name="demarrage" className={`${fld} appearance-none`}><option>I want to start now</option><option>Within a month</option><option>Just researching</option></select></div>
            </div>
            <div><label className={lbl}>Message (optional)</label><textarea name="message" rows={4} className={fld}></textarea></div>
            <label className="flex items-start gap-3 text-xs text-zinc-400"><input name="consent" type="checkbox" required className="mt-1" /><span>I agree to be contacted by KILLEURUSD about my request. My data stays confidential and is never sold.</span></label>
            <p className="text-xs text-zinc-500">* Required fields</p>
            <button type="submit" className="w-full inline-flex items-center justify-center font-bold uppercase tracking-wider text-sm px-8 py-4 rounded-sm transition-all bg-[#7A0F0F] text-white hover:bg-[#950f0f]">Send my request</button>
          </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0B0B0D] border-t border-zinc-900 pt-16 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-x-8 gap-y-3 justify-center mb-8 text-sm">
            <a href="/en/terms" className="text-zinc-400 hover:text-white transition-colors">Terms of Sale</a>
            <a href="/en/legal" className="text-zinc-400 hover:text-white transition-colors">Legal Notice</a>
            <a href="/en/privacy" className="text-zinc-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="/en/blog" className="text-zinc-400 hover:text-white transition-colors">Blog</a>
            <a href="/en/vision" className="text-zinc-400 hover:text-white transition-colors">Vision</a>
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
