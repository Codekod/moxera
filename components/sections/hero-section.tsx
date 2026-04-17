"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Container } from "@/components/ui/container";
import { gsap, useGsapPlugin } from "@/lib/animations/gsap";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useGsapPlugin();

  useEffect(() => {
    if (!sectionRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const isMobile = window.innerWidth < 768;
    const ctx = gsap.context(() => {
      if (isMobile) {
        gsap.fromTo(".hero-kicker", { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.55, ease: "power2.out" });
        gsap.fromTo(".hero-line", { yPercent: 80, opacity: 0.2 }, { yPercent: 0, opacity: 1, duration: 0.72, stagger: 0.07, ease: "power2.out", delay: 0.08 });
        gsap.fromTo(".hero-sub, .hero-cta, .hero-panel", { opacity: 0, y: 18 }, { opacity: 1, y: 0, stagger: 0.05, duration: 0.52, ease: "power2.out", delay: 0.16 });
        gsap.to(".hero-glow", { x: 46, y: 16, repeat: -1, yoyo: true, duration: 9.2, ease: "sine.inOut" });
        gsap.fromTo(
          ".hero-pill-el",
          { opacity: 0, y: 14, scale: 0.94 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.12,
            ease: "back.out(1.25)",
            delay: 0.52,
            onComplete: () => {
              gsap.utils.toArray<HTMLElement>(".hero-pill-el").forEach((el, i) => {
                gsap.to(el, {
                  y: -1.5,
                  repeat: -1,
                  yoyo: true,
                  duration: 2.2 + i * 0.12,
                  ease: "sine.inOut",
                  delay: i * 0.08
                });
              });
            }
          }
        );
        return;
      }

      const intro = gsap.timeline();
      intro
        .fromTo(".hero-kicker", { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" })
        .fromTo(".hero-line", { yPercent: 104, opacity: 0.2 }, { yPercent: 0, opacity: 1, duration: 0.95, stagger: 0.1, ease: "power3.out" }, "-=0.35")
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
      gsap.to(".hero-cta-primary", { boxShadow: "0 0 0 0 rgba(102,230,218,0.0), 0 0 24px 2px rgba(46,211,198,0.10)", repeat: -1, yoyo: true, duration: 4.2, ease: "sine.inOut" });
      gsap.to(".hero-tech-pill", { y: -1.5, repeat: -1, yoyo: true, duration: 2.4, stagger: 0.12, ease: "sine.inOut" });

      const heroScroll = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top top", end: "+=90%", scrub: 1.1, pin: true }
      });
      heroScroll.to(".hero-copy", { yPercent: -10, opacity: 0.74 }, 0).to(".hero-bg-right", { xPercent: -8, yPercent: -6 }, 0);
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={sectionRef} className="relative overflow-hidden py-12 md:py-24">
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
        <div className="hero-depth-card scene-shell grid gap-8 overflow-hidden rounded-[2rem] px-5 py-8 sm:gap-12 sm:px-7 sm:py-10 md:grid-cols-[1.2fr_0.8fr] md:px-12 md:py-14">
          <div className="hero-copy space-y-9">
            <p className="hero-kicker text-xs uppercase tracking-[0.3em] text-moxera-highlight">Moxera · Ankara · 2026</p>
            <h1 className="space-y-1 text-[clamp(2.2rem,9.5vw,4.5rem)] font-semibold leading-[1.08] text-moxera-text">
              <span className="block overflow-hidden py-1"><span className="hero-line block">İhtiyaçlarınızı,</span></span>
              <span className="block overflow-hidden py-1"><span className="hero-line block">çalışan dijital</span></span>
              <span className="block overflow-hidden py-1"><span className="hero-line block">sistemlere dönüştürüyoruz.</span></span>
            </h1>
            <p className="hero-sub max-w-2xl text-base leading-relaxed text-moxera-text-soft md:text-lg">
              Web, mobil, SaaS, yapay zeka ve otomasyon katmanlarını tek bir stratejide buluşturuyor; sadece yazılım değil, işleyen sistem teslim ediyoruz.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/iletisim"
                className="hero-cta hero-cta-primary inline-flex w-full items-center justify-center rounded-full bg-moxera-accent px-7 py-3 text-sm font-semibold text-moxera-bg transition duration-300 hover:-translate-y-0.5 hover:scale-[1.015] hover:bg-moxera-highlight active:translate-y-[1px] sm:w-auto"
              >
                Proje konuşalım
              </Link>
              <Link
                href="/calismalar"
                className="hero-cta inline-flex w-full items-center justify-center rounded-full border border-white/20 px-7 py-3 text-sm text-moxera-text transition duration-300 hover:-translate-y-0.5 hover:scale-[1.015] hover:border-moxera-highlight active:translate-y-[1px] sm:w-auto"
              >
                Çalışmaları incele
              </Link>
            </div>
          </div>
          <div className="hero-panel relative min-h-[260px] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#121D3A]/84 to-[#060A1B]/95 px-5 py-6 sm:min-h-[280px] sm:px-6 md:min-h-[372px] md:px-8 md:py-8">
            <div className="pointer-events-none absolute inset-4 rounded-2xl border border-moxera-highlight/20" />
            <div className="pointer-events-none absolute inset-4 hidden bg-[linear-gradient(transparent_31px,rgba(255,255,255,0.04)_32px),linear-gradient(90deg,transparent_31px,rgba(255,255,255,0.03)_32px)] bg-[size:32px_32px] opacity-25 md:block" />
            <div className="pointer-events-none absolute inset-x-6 top-[76px] hidden h-px bg-gradient-to-r from-transparent via-moxera-highlight/35 to-transparent md:block" />
            <div className="pointer-events-none absolute inset-x-6 bottom-[96px] hidden h-px bg-gradient-to-r from-transparent via-moxera-highlight/28 to-transparent md:block" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-moxera-highlight/20 blur-3xl" />
            <div className="relative z-[1] flex min-h-[240px] flex-col gap-5 md:min-h-0 md:justify-between">
              <div className="flex flex-col gap-3 pb-4 max-md:border-b max-md:border-white/[0.06] min-[361px]:flex-row min-[361px]:items-start min-[361px]:justify-between min-[361px]:gap-3 md:gap-8 md:border-0 md:pb-0">
                <div className="min-w-0 flex-1 pr-0 min-[361px]:pr-1">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-moxera-highlight">Sistem Mimari Görünümü</p>
                  <h3 className="mt-3 max-w-[20rem] text-base font-semibold leading-snug text-moxera-text min-[361px]:max-w-[16rem] min-[361px]:text-lg sm:max-w-[18rem] sm:text-xl">
                    Analiz · Ürün · Otomasyon
                  </h3>
                </div>
                <div className="shrink-0 self-end pt-0.5 min-[361px]:self-start">
                  <Image
                    src="/brand/moxera-logo-light.png"
                    alt="Moxera"
                    width={5692}
                    height={3200}
                    sizes="(max-width: 360px) 96px, (max-width: 768px) 112px, 132px"
                    className="h-auto w-[5.75rem] object-contain object-right opacity-95 min-[361px]:w-[6.5rem] sm:w-[7.25rem] md:w-[8.25rem]"
                  />
                </div>
              </div>
              <p className="max-w-none text-[13px] leading-[1.75] text-moxera-text-soft sm:max-w-[18rem] md:max-w-[16rem]">
                İhtiyaç analizi, ürün katmanı, AI destek ve otomasyon bileşenleri; okunur, sürdürülebilir ve ölçülebilir bir operasyon akışında birleşir.
              </p>
              <div className="mt-auto grid w-full grid-cols-1 gap-2 min-[380px]:grid-cols-3">
                <span className="hero-tech-pill hero-pill-el hero-pill-trace flex min-h-[2.5rem] items-center justify-center rounded-full border border-white/10 bg-white/[0.02] px-3 py-2 text-center text-[10px] uppercase leading-tight tracking-[0.15em] text-moxera-text-soft/90 transition duration-300 min-[380px]:text-[10px] min-[380px]:tracking-[0.16em] hover:-translate-y-0.5 hover:border-moxera-highlight/45 hover:bg-moxera-highlight/10 sm:px-3">
                  Web/Mobil
                </span>
                <span className="hero-tech-pill hero-pill-el hero-pill-trace flex min-h-[2.5rem] items-center justify-center rounded-full border border-white/10 bg-white/[0.02] px-3 py-2 text-center text-[10px] uppercase leading-tight tracking-[0.15em] text-moxera-text-soft/90 transition duration-300 min-[380px]:text-[10px] min-[380px]:tracking-[0.16em] hover:-translate-y-0.5 hover:border-moxera-highlight/45 hover:bg-moxera-highlight/10 sm:px-3">
                  SaaS
                </span>
                <span className="hero-tech-pill hero-pill-el hero-pill-trace flex min-h-[2.5rem] items-center justify-center rounded-full border border-white/10 bg-white/[0.02] px-3 py-2 text-center text-[10px] uppercase leading-tight tracking-[0.15em] text-moxera-text-soft/90 transition duration-300 min-[380px]:text-[10px] min-[380px]:tracking-[0.16em] hover:-translate-y-0.5 hover:border-moxera-highlight/45 hover:bg-moxera-highlight/10 sm:px-3">
                  AI/Otomasyon
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
