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
      const intro = gsap.timeline();
      intro
        .fromTo(".hero-kicker", { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" })
        .fromTo(".hero-line", { yPercent: 115, opacity: 0.2 }, { yPercent: 0, opacity: 1, duration: 1, stagger: 0.11, ease: "power3.out" }, "-=0.35")
        .fromTo(".hero-sub", { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, "-=0.35")
        .fromTo(".hero-cta", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.65, stagger: 0.09, ease: "power2.out" }, "-=0.28");

      gsap.to(".hero-glow", { x: 180, y: 80, repeat: -1, yoyo: true, duration: 6, ease: "sine.inOut" });
      gsap.to(".hero-sweep", { xPercent: 30, opacity: 0.34, repeat: -1, yoyo: true, duration: 5.6, ease: "sine.inOut" });
      gsap.to(".hero-depth-card", {
        yPercent: -14,
        scale: 1.04,
        ease: "none",
        scrollTrigger: { trigger: sectionRef.current, start: "top top", end: "bottom top", scrub: 1 }
      });
      gsap.fromTo(
        ".hero-trail-path",
        { strokeDashoffset: 1, opacity: 0.15 },
        { strokeDashoffset: 0, opacity: 0.9, duration: 2.4, ease: "power2.out" }
      );
      gsap.to(".hero-trail-dot", { x: 680, y: 110, duration: 3.2, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".hero-cta-primary", { boxShadow: "0 0 0 0 rgba(102,230,218,0.0), 0 0 36px 4px rgba(46,211,198,0.12)", repeat: -1, yoyo: true, duration: 2.8, ease: "sine.inOut" });

      const heroScroll = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top top", end: "+=90%", scrub: 1.1, pin: true }
      });
      heroScroll.to(".hero-copy", { yPercent: -10, opacity: 0.74 }, 0).to(".hero-bg-right", { xPercent: -8, yPercent: -6 }, 0);
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={sectionRef} className="relative overflow-hidden py-20 md:py-24">
      <div className="hero-glow absolute left-1/3 top-16 h-56 w-56 rounded-full bg-moxera-accent/30 blur-[90px]" />
      <div className="hero-sweep absolute -left-1/3 top-6 h-96 w-[48rem] bg-[radial-gradient(circle,rgba(102,230,218,0.22),transparent_65%)] opacity-20 blur-[80px]" />
      <svg
        className="hero-bg-right pointer-events-none absolute -right-36 top-0 h-[520px] w-[760px] opacity-80"
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
      <Container className="relative z-10">
        <div className="hero-depth-card scene-shell grid gap-12 overflow-hidden rounded-[2rem] px-7 py-10 md:grid-cols-[1.2fr_0.8fr] md:px-12 md:py-14">
          <div className="hero-copy space-y-9">
            <p className="hero-kicker text-xs uppercase tracking-[0.3em] text-moxera-highlight">Moxera · Ankara · 2026</p>
            <h1 className="space-y-2 text-4xl font-semibold leading-[1.04] text-moxera-text md:text-7xl">
              <span className="block overflow-hidden"><span className="hero-line block">İhtiyaçlarınızı,</span></span>
              <span className="block overflow-hidden"><span className="hero-line block">çalışan dijital</span></span>
              <span className="block overflow-hidden"><span className="hero-line block">sistemlere dönüştürüyoruz.</span></span>
            </h1>
            <p className="hero-sub max-w-2xl text-lg leading-relaxed text-moxera-text-soft">
              Web, mobil, SaaS, yapay zeka ve otomasyon katmanlarını tek bir stratejide buluşturuyor; sadece yazılım değil, işleyen sistem teslim ediyoruz.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/iletisim"
                className="hero-cta hero-cta-primary rounded-full bg-moxera-accent px-7 py-3 text-sm font-semibold text-moxera-bg transition duration-300 hover:-translate-y-0.5 hover:scale-[1.015] hover:bg-moxera-highlight active:translate-y-[1px]"
              >
                Proje konuşalım
              </Link>
              <Link
                href="/calismalar"
                className="hero-cta rounded-full border border-white/20 px-7 py-3 text-sm text-moxera-text transition duration-300 hover:-translate-y-0.5 hover:scale-[1.015] hover:border-moxera-highlight active:translate-y-[1px]"
              >
                Çalışmaları incele
              </Link>
            </div>
          </div>
          <div className="relative min-h-[300px] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#121D3A]/84 to-[#060A1B]/95 px-7 py-7 md:min-h-[372px] md:px-8 md:py-8">
            <div className="absolute inset-4 rounded-2xl border border-moxera-highlight/20" />
            <div className="absolute inset-4 bg-[linear-gradient(transparent_31px,rgba(255,255,255,0.04)_32px),linear-gradient(90deg,transparent_31px,rgba(255,255,255,0.03)_32px)] bg-[size:32px_32px] opacity-25" />
            <div className="absolute inset-x-8 top-[74px] h-px bg-gradient-to-r from-transparent via-moxera-highlight/40 to-transparent" />
            <div className="absolute inset-x-8 bottom-[82px] h-px bg-gradient-to-r from-transparent via-moxera-highlight/35 to-transparent" />
            <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-moxera-highlight/20 blur-3xl" />
            <div className="relative flex h-full flex-col justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-moxera-highlight">Sistem Mimari Görünümü</p>
                <h3 className="mt-4 max-w-[14rem] text-xl font-semibold leading-tight text-moxera-text">Analiz · Ürün · Otomasyon</h3>
              </div>
              <p className="max-w-[16rem] text-[13px] leading-[1.8] text-moxera-text-soft">
                İhtiyaç analizi, ürün katmanı, AI destek ve otomasyon bileşenleri; okunur, sürdürülebilir ve ölçülebilir bir operasyon akışında birleşir.
              </p>
              <div className="grid grid-cols-3 gap-2 text-[10px] uppercase tracking-[0.16em] text-moxera-text-soft/85">
                <span className="rounded-full border border-white/10 px-2 py-1 text-center">Web/Mobil</span>
                <span className="rounded-full border border-white/10 px-2 py-1 text-center">SaaS</span>
                <span className="rounded-full border border-white/10 px-2 py-1 text-center">AI/Otomasyon</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
