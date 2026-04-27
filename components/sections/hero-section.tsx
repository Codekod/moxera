"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Container } from "@/components/ui/container";
import { gsap, useGsapPlugin } from "@/lib/animations/gsap";
import { useMotionProfile } from "@/lib/animations/use-motion-profile";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { isMobile, shouldReduceMotion, motionTier } = useMotionProfile();
  useGsapPlugin();

  useEffect(() => {
    if (!sectionRef.current || shouldReduceMotion) return;
    const ctx = gsap.context(() => {
      if (isMobile) {
        gsap.fromTo(".hero-kicker", { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.55, ease: "power2.out" });
        gsap.fromTo(".hero-line", { yPercent: 80, opacity: 0.2 }, { yPercent: 0, opacity: 1, duration: 0.72, stagger: 0.07, ease: "power2.out", delay: 0.08 });
        gsap.fromTo(".hero-sub, .hero-cta, .hero-panel", { opacity: 0, y: 18 }, { opacity: 1, y: 0, stagger: 0.05, duration: 0.52, ease: "power2.out", delay: 0.16 });
        gsap.fromTo(
          ".hero-trail-path",
          { strokeDashoffset: 1, opacity: 0.12 },
          { strokeDashoffset: 0, opacity: 0.7, duration: 1.6, ease: "power2.out", delay: 0.18 }
        );
        gsap.to(".hero-panel", {
          yPercent: -8,
          ease: "none",
          scrollTrigger: { trigger: sectionRef.current, start: "top 18%", end: "bottom top", scrub: 0.9 }
        });
        gsap.to(".hero-bg-right", {
          xPercent: -5,
          yPercent: -8,
          opacity: 0.92,
          ease: "none",
          scrollTrigger: { trigger: sectionRef.current, start: "top top", end: "bottom top", scrub: 1 }
        });
        if (motionTier !== "lite") {
          gsap.to(".hero-glow", { x: 46, y: 16, repeat: -1, yoyo: true, duration: 9.2, ease: "sine.inOut" });
          gsap.to(".hero-trail-dot", { x: 240, y: 48, duration: 4.4, repeat: -1, yoyo: true, ease: "sine.inOut" });
          gsap.to(".hero-mobile-orb", { x: 58, y: -16, scale: 1.18, repeat: -1, yoyo: true, duration: 5.8, ease: "sine.inOut" });
        }
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
      gsap.to(".hero-sweep", { xPercent: 30, opacity: 0.34, repeat: -1, yoyo: true, duration: 8.2, ease: "sine.inOut" });
      gsap.to(".hero-depth-card", {
        yPercent: -14,
        scale: 1.04,
        ease: "none",
        scrollTrigger: { trigger: sectionRef.current, start: "top top", end: "bottom top", scrub: 1 }
      });
      gsap.to(".hero-panel", {
        yPercent: -8,
        rotateX: 1.4,
        rotateY: -1,
        transformPerspective: 1200,
        ease: "none",
        scrollTrigger: { trigger: sectionRef.current, start: "top 12%", end: "bottom top", scrub: 1.05 }
      });
      gsap.fromTo(
        ".hero-trail-path",
        { strokeDashoffset: 1, opacity: 0.15 },
        { strokeDashoffset: 0, opacity: 0.9, duration: 2.4, ease: "power2.out" }
      );
      if (motionTier === "full") {
        gsap.to(".hero-trail-dot", { x: 680, y: 110, duration: 3.8, repeat: -1, yoyo: true, ease: "sine.inOut" });
        gsap.to(".hero-cta-primary", { boxShadow: "0 0 0 0 rgba(102,230,218,0.0), 0 0 24px 2px rgba(46,211,198,0.10)", repeat: -1, yoyo: true, duration: 4.2, ease: "sine.inOut" });
        gsap.to(".hero-tech-pill", { y: -1.5, repeat: -1, yoyo: true, duration: 2.4, stagger: 0.12, ease: "sine.inOut" });
      }

      if (motionTier === "full") {
        const heroScroll = gsap.timeline({
          scrollTrigger: { trigger: sectionRef.current, start: "top top", end: "+=78%", scrub: 1, pin: true }
        });
        heroScroll.to(".hero-copy", { yPercent: -10, opacity: 0.74 }, 0).to(".hero-bg-right", { xPercent: -8, yPercent: -6 }, 0);
      }
    }, sectionRef);
    return () => ctx.revert();
  }, [isMobile, motionTier, shouldReduceMotion]);

  return (
    <section id="hero" ref={sectionRef} className="relative overflow-hidden pb-8 pt-12 md:py-24">
      <div className="hero-glow absolute left-1/3 top-16 h-56 w-56 rounded-full bg-moxera-accent/30 blur-[90px]" />
      <span className="hero-mobile-orb pointer-events-none absolute right-16 top-24 z-[1] h-3 w-3 rounded-full bg-moxera-highlight shadow-[0_0_24px_rgba(102,230,218,0.78)] md:hidden" aria-hidden="true" />
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
              Web, mobil, SaaS, yapay zeka ve otomasyon ihtiyaçlarını tek bir ürün stratejisinde birleştiriyor; markanız için çalışan, ölçülebilir ve sürdürülebilir dijital sistemler kuruyoruz.
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
          <div className="hero-panel relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#121D3A]/84 to-[#060A1B]/95 px-6 py-5 shadow-[0_28px_80px_rgba(0,0,0,0.22)] sm:px-7 sm:py-6 md:px-7 md:py-7">
            <div className="pointer-events-none absolute inset-4 rounded-2xl border border-moxera-highlight/20" />
            <div className="pointer-events-none absolute inset-4 hidden bg-[linear-gradient(transparent_31px,rgba(255,255,255,0.04)_32px),linear-gradient(90deg,transparent_31px,rgba(255,255,255,0.03)_32px)] bg-[size:32px_32px] opacity-25 md:block" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-moxera-highlight/20 blur-3xl" />
            <div className="relative z-[1] flex flex-col gap-5">
              <div className="flex flex-col gap-3 border-b border-white/[0.07] pb-4 min-[420px]:flex-row min-[420px]:items-start min-[420px]:justify-between md:gap-8">
                <div className="min-w-0 flex-1 pr-0 min-[361px]:pr-1">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-moxera-highlight sm:text-[11px] sm:tracking-[0.2em]">Sistem Mimari Görünümü</p>
                  <h3 className="mt-3 max-w-[20rem] text-xl font-semibold leading-tight text-moxera-text min-[420px]:max-w-[15rem] md:text-2xl">
                    Strateji · Ürün · Otomasyon
                  </h3>
                </div>
                <div className="shrink-0 self-start pt-0.5 min-[420px]:self-start">
                  <Image
                    src="/brand/moxera-logo-light.png"
                    alt="Moxera"
                    width={5692}
                    height={3200}
                    sizes="(max-width: 420px) 112px, (max-width: 768px) 128px, 142px"
                    className="h-auto w-[7rem] object-contain object-left opacity-95 min-[420px]:w-[7.75rem] md:w-[8.85rem]"
                  />
                </div>
              </div>
              <p className="max-w-[36rem] text-[13px] leading-[1.75] text-moxera-text-soft md:max-w-[25rem] md:text-sm">
                Web sitesi, mobil uygulama, SaaS, AI iş akışı ve otomasyon bileşenleri; tek bir marka deneyimi ve operasyon mimarisi altında birleşir.
              </p>
              <div className="grid gap-2 min-[430px]:grid-cols-3">
                <span className="hero-tech-pill hero-pill-el hero-pill-trace flex min-h-[2.35rem] min-w-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] px-2.5 py-2 text-center text-[9.5px] uppercase leading-tight tracking-[0.09em] text-moxera-text-soft/90 transition duration-300 hover:-translate-y-0.5 hover:border-moxera-highlight/45 hover:bg-moxera-highlight/10 sm:px-3 sm:text-[10px] sm:tracking-[0.14em]">
                  Web/Mobil
                </span>
                <span className="hero-tech-pill hero-pill-el hero-pill-trace flex min-h-[2.35rem] min-w-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] px-2.5 py-2 text-center text-[9.5px] uppercase leading-tight tracking-[0.09em] text-moxera-text-soft/90 transition duration-300 hover:-translate-y-0.5 hover:border-moxera-highlight/45 hover:bg-moxera-highlight/10 sm:px-3 sm:text-[10px] sm:tracking-[0.14em]">
                  SaaS
                </span>
                <span className="hero-tech-pill hero-pill-el hero-pill-trace flex min-h-[2.35rem] min-w-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] px-2.5 py-2 text-center text-[9.5px] uppercase leading-tight tracking-[0.09em] text-moxera-text-soft/90 transition duration-300 hover:-translate-y-0.5 hover:border-moxera-highlight/45 hover:bg-moxera-highlight/10 sm:px-3 sm:text-[10px] sm:tracking-[0.14em]">
                  AI/Otomasyon
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 border-t border-white/[0.07] pt-4">
                {["Strateji", "Tasarım", "Yayın"].map((item, index) => (
                  <div key={item} className="rounded-2xl border border-white/[0.08] bg-black/15 px-3 py-3">
                    <p className="text-[10px] uppercase tracking-[0.16em] text-moxera-highlight/80">0{index + 1}</p>
                    <p className="mt-1 text-xs font-semibold text-moxera-text/90">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
