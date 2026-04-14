"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { Container } from "@/components/ui/container";
import { gsap, useGsapPlugin } from "@/lib/animations/gsap";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useGsapPlugin();

  useEffect(() => {
    if (!sectionRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.innerWidth < 768) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-line", { yPercent: 120 }, { yPercent: 0, duration: 1, stagger: 0.12, ease: "power3.out" });
      gsap.to(".hero-glow", { x: 180, y: 80, repeat: -1, yoyo: true, duration: 6, ease: "sine.inOut" });
      gsap.fromTo(
        ".hero-trail-path",
        { strokeDashoffset: 1, opacity: 0.15 },
        { strokeDashoffset: 0, opacity: 0.9, duration: 2.4, ease: "power2.out" }
      );
      gsap.to(".hero-trail-dot", { x: 680, y: 110, duration: 3.2, repeat: -1, yoyo: true, ease: "sine.inOut" });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={sectionRef} className="relative overflow-hidden py-28 md:py-40">
      <div className="hero-glow absolute left-1/3 top-16 h-56 w-56 rounded-full bg-moxera-accent/30 blur-[90px]" />
      <svg
        className="pointer-events-none absolute -right-36 top-0 h-[520px] w-[760px] opacity-70"
        viewBox="0 0 760 520"
        fill="none"
        aria-hidden="true"
      >
        <path
          className="hero-trail-path"
          d="M32 260C130 80 290 56 390 170C472 264 584 292 730 146M30 284C154 448 314 470 432 350C516 264 594 242 734 366"
          stroke="url(#moxeraTrail)"
          strokeWidth="2.5"
          strokeLinecap="round"
          pathLength="1"
          strokeDasharray="1"
          strokeDashoffset="1"
        />
        <circle className="hero-trail-dot" cx="32" cy="260" r="5.5" fill="#66E6DA" />
        <defs>
          <linearGradient id="moxeraTrail" x1="10" y1="120" x2="740" y2="380" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1D2A57" />
            <stop offset="0.55" stopColor="#2ED3C6" />
            <stop offset="1" stopColor="#66E6DA" />
          </linearGradient>
        </defs>
      </svg>
      <Container className="relative z-10 space-y-10">
        <p className="text-xs uppercase tracking-[0.3em] text-moxera-highlight">Moxera · Ankara · 2026</p>
        <h1 className="space-y-2 text-4xl font-semibold leading-[1.05] text-moxera-text md:text-7xl">
          <span className="block overflow-hidden"><span className="hero-line block">İhtiyaçlarınızı,</span></span>
          <span className="block overflow-hidden"><span className="hero-line block">çalışan dijital</span></span>
          <span className="block overflow-hidden"><span className="hero-line block">sistemlere dönüştürüyoruz.</span></span>
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-moxera-text-soft">
          Web, mobil, SaaS, yapay zeka ve otomasyon katmanlarını tek bir stratejide buluşturuyor; sadece yazılım değil, işleyen sistem teslim ediyoruz.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/iletisim" className="rounded-full bg-moxera-accent px-7 py-3 text-sm font-semibold text-moxera-bg transition hover:bg-moxera-highlight">
            Proje konuşalım
          </Link>
          <Link href="/calismalar" className="rounded-full border border-white/20 px-7 py-3 text-sm text-moxera-text transition hover:border-moxera-highlight">
            Çalışmaları incele
          </Link>
        </div>
      </Container>
    </section>
  );
}
