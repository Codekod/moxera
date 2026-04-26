"use client";

import { useEffect, useRef } from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { gsap, useGsapPlugin } from "@/lib/animations/gsap";
import { useMotionProfile } from "@/lib/animations/use-motion-profile";

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { isMobile, shouldReduceMotion } = useMotionProfile();
  useGsapPlugin();

  useEffect(() => {
    if (!sectionRef.current || shouldReduceMotion) return;
    const ctx = gsap.context(() => {
      if (isMobile) {
        gsap.fromTo(".about-intro", { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.62, ease: "power2.out", scrollTrigger: { trigger: sectionRef.current, start: "top 84%" } });
        gsap.fromTo(".about-line", { scaleX: 0, transformOrigin: "left center" }, { scaleX: 1, duration: 0.72, ease: "power2.out", scrollTrigger: { trigger: ".about-line", start: "top 90%" } });
        gsap.fromTo(
          ".about-panel",
          { opacity: 0, y: 26, scale: 0.985 },
          { opacity: 1, y: 0, scale: 1, duration: 0.68, ease: "power2.out", scrollTrigger: { trigger: ".about-panel", start: "top 88%" } }
        );
        gsap.to(".about-signature", { xPercent: -7, yPercent: -10, scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: 1 } });
        return;
      }
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 72%" }
      });
      tl.fromTo(".about-intro .section-kicker", { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.58, ease: "power2.out" })
        .fromTo(".about-intro .section-title", { opacity: 0, y: 24, clipPath: "inset(0 0 72% 0)" }, { opacity: 1, y: 0, clipPath: "inset(0 0 0 0)", duration: 0.84, ease: "power3.out" }, "-=0.28")
        .fromTo(".about-intro .section-description", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.62, ease: "power2.out" }, "-=0.4")
        .fromTo(".about-panel", { opacity: 0.2, y: 30, scale: 0.985 }, { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: "power2.out" }, "-=0.34")
        .fromTo(".about-line", { scaleX: 0, transformOrigin: "left center" }, { scaleX: 1, duration: 0.74, ease: "power2.out" }, "-=0.62");

      gsap.to(".about-signature", { xPercent: -10, yPercent: -12, scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: 1 } });
    }, sectionRef);
    return () => ctx.revert();
  }, [isMobile, shouldReduceMotion]);

  return (
    <section id="about" ref={sectionRef} className="relative py-24 md:py-32">
      <svg className="about-signature pointer-events-none absolute left-4 top-12 h-40 w-64 opacity-40" viewBox="0 0 280 160" fill="none" aria-hidden="true">
        <path d="M4 104C62 48 112 36 154 74C192 108 224 114 276 80M0 126C48 150 102 152 148 126C200 98 244 94 278 112" stroke="rgba(102,230,218,0.25)" strokeWidth="1.3" />
      </svg>
      <Container className="space-y-11">
        <SectionHeading
          className="about-intro"
          kicker="Hakkımızda"
          title="1 Nisan 2026'dan bu yana butik teknoloji partnerliği"
          description="Moxera, tek kişilik ama yüksek odaklı bir yapı olarak; müşteriyi dinleyen, darboğazı tespit eden ve çalışan sistemi teslim eden bir iş modeliyle ilerler."
        />
        <div className="about-line cinematic-divider" />
        <div className="about-panel scene-shell grid gap-10 rounded-3xl p-8 md:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6 text-moxera-text-soft">
            <p className="max-w-[40ch] leading-[1.85]">Ankara merkezli çalışma modeliyle doğrudan iletişim, hızlı karar ve yüksek özen sağlar.</p>
            <p className="max-w-[42ch] leading-[1.85]">Web ve mobil ürünler, AI katmanları ve otomasyon sistemleri tek bir stratejik çatı altında planlanır.</p>
            <p className="max-w-[42ch] leading-[1.85]">Hedef, sadece dijital varlık üretmek değil; görünürlük, prestij ve operasyonel verim oluşturmaktır.</p>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#121A36]/85 to-[#070D23]/90 p-6">
            <div className="absolute -right-8 top-2 h-24 w-24 rounded-full bg-moxera-highlight/20 blur-2xl" />
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-moxera-highlight">Partner Modeli</p>
            <p className="text-sm leading-relaxed text-moxera-text-soft">
              Az ama doğru projeye odaklanan butik çalışma modeli; iletişimde hız, stratejide netlik ve teslimatta yüksek özen üretir.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
