"use client";

import { useEffect, useRef } from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { whyMoxera } from "@/lib/data/site-content";
import { gsap, useGsapPlugin } from "@/lib/animations/gsap";
import { useMotionProfile } from "@/lib/animations/use-motion-profile";

export function WhyMoxeraSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { isMobile, shouldReduceMotion } = useMotionProfile();
  useGsapPlugin();

  useEffect(() => {
    if (!sectionRef.current || shouldReduceMotion) return;
    const ctx = gsap.context(() => {
      if (isMobile) {
        gsap.fromTo(".why-intro", { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.62, ease: "power2.out", scrollTrigger: { trigger: sectionRef.current, start: "top 84%" } });
        gsap.fromTo(".why-line", { scaleX: 0, transformOrigin: "left center" }, { scaleX: 1, duration: 0.7, ease: "power2.out", scrollTrigger: { trigger: ".why-line", start: "top 90%" } });
        gsap.utils.toArray<HTMLElement>(".why-item").forEach((item, index) => {
          gsap.fromTo(
            item,
            { opacity: 0, y: 24, scale: 0.985 },
            { opacity: 1, y: 0, scale: 1, duration: 0.56, ease: "power2.out", delay: index * 0.04, scrollTrigger: { trigger: item, start: "top 90%" } }
          );
          gsap.to(item, {
            borderColor: "rgba(102,230,218,0.30)",
            ease: "none",
            scrollTrigger: { trigger: item, start: "top 76%", end: "bottom 58%", scrub: 0.75 }
          });
        });
        gsap.to(".why-signature", { xPercent: -5, yPercent: -8, scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: 1 } });
        return;
      }
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 72%" }
      });
      tl.fromTo(".why-intro .section-kicker", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
        .fromTo(".why-intro .section-title", { opacity: 0, y: 24, clipPath: "inset(0 0 75% 0)" }, { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)", duration: 0.85, ease: "power3.out" }, "-=0.3")
        .fromTo(".why-intro .section-description", { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.4")
        .fromTo(".why-line", { scaleX: 0, transformOrigin: "left center" }, { scaleX: 1, duration: 0.8, ease: "power2.out" }, "-=0.35");

      gsap.utils.toArray<HTMLElement>(".why-item").forEach((item, index) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 34, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: "power2.out",
            delay: index * 0.08,
            scrollTrigger: { trigger: item, start: "top 84%" }
          }
        );
      });
      gsap.to(".why-signature", { xPercent: -8, yPercent: -10, scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: 1 } });
    }, sectionRef);
    return () => ctx.revert();
  }, [isMobile, shouldReduceMotion]);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32">
      <svg className="why-signature pointer-events-none absolute right-0 top-8 h-44 w-72 opacity-45" viewBox="0 0 320 180" fill="none" aria-hidden="true">
        <path d="M6 105C60 42 116 30 160 78C196 116 236 125 314 68M0 128C70 170 128 166 180 130C228 98 260 92 316 118" stroke="rgba(102,230,218,0.28)" strokeWidth="1.4" />
      </svg>
      <Container className="space-y-13">
        <SectionHeading
          className="why-intro"
          kicker="Neden Moxera"
          title="Butik yapı, yüksek odak, çalışan sonuçlar"
          description="Projelere şablon değil sistem olarak yaklaşır, kararlarımızı estetikle değil iş çıktısıyla doğrularız."
        />
        <div className="why-line cinematic-divider" />
        <ul className="grid gap-5 md:grid-cols-2">
          {whyMoxera.map((item, index) => (
            <li key={item} className={`why-item rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-moxera-text-soft transition duration-300 hover:-translate-y-0.5 hover:border-moxera-highlight/35 ${index === 1 ? "md:translate-y-3" : ""}`}>
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
