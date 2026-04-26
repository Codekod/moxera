"use client";

import { useEffect, useRef } from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { transformationSteps } from "@/lib/data/site-content";
import { gsap, useGsapPlugin } from "@/lib/animations/gsap";
import { useMotionProfile } from "@/lib/animations/use-motion-profile";

export function TransformationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { isMobile, shouldReduceMotion, motionTier } = useMotionProfile();
  useGsapPlugin();

  useEffect(() => {
    if (!sectionRef.current || shouldReduceMotion) return;
    const ctx = gsap.context(() => {
      const steps = gsap.utils.toArray<HTMLElement>(".transform-item");
      if (isMobile) {
        gsap.fromTo(".transform-heading", { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.62, ease: "power2.out", scrollTrigger: { trigger: sectionRef.current, start: "top 84%" } });
        gsap.to(".transform-parallax", {
          yPercent: 14,
          xPercent: -3,
          ease: "none",
          scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: 1.05 }
        });
        steps.forEach((item) => {
          gsap.fromTo(
            item,
            { opacity: 0, y: 32, scale: 0.98 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.58,
              ease: "power3.out",
              scrollTrigger: { trigger: item, start: "top 89%", toggleActions: "play none none reverse" }
            }
          );
          gsap.fromTo(
            item,
            { borderColor: "rgba(255,255,255,0.10)", backgroundColor: "rgba(255,255,255,0.04)" },
            {
              borderColor: "rgba(102,230,218,0.34)",
              backgroundColor: "rgba(102,230,218,0.075)",
              boxShadow: "0 18px 48px rgba(2,8,26,0.42)",
              ease: "none",
              scrollTrigger: { trigger: item, start: "top 72%", end: "bottom 54%", scrub: 0.7 }
            }
          );
        });
        return;
      }
      const usePin = motionTier === "full";
      gsap.to(".transform-parallax", {
        yPercent: -18,
        xPercent: 4,
        ease: "none",
        scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: 1.2 }
      });
      const tl = gsap.timeline(
        usePin
          ? {
              scrollTrigger: {
                trigger: ".transform-stage",
                start: "top 14%",
                end: `+=${steps.length * 220}`,
                scrub: 0.9,
                pin: ".transform-stage"
              }
            }
          : {
              scrollTrigger: {
                trigger: ".transform-stage",
                start: "top 72%"
              }
            }
      );

      tl.fromTo(".transform-heading", { opacity: 0.35, y: 24 }, { opacity: 1, y: 0, duration: 0.9 }, 0);
      gsap.set(steps, { opacity: 0.86, y: 0, scale: 0.995 });
      steps.forEach((item, index) => {
        if (index !== 0) tl.to(steps[index - 1], { opacity: 0.62, y: -6, scale: 0.988, duration: 0.45, borderColor: "rgba(255,255,255,0.16)" });
        tl.to(item, { opacity: 1, y: 0, scale: 1, duration: 0.68, borderColor: "rgba(102,230,218,0.42)", boxShadow: "0 20px 60px rgba(2,8,26,0.48)" }, index === 0 ? 0.18 : "+=0.1");
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [isMobile, motionTier, shouldReduceMotion]);

  return (
    <section ref={sectionRef} className="py-16 md:py-32">
      <Container className="space-y-10 md:space-y-14">
        <div className="transform-stage relative overflow-hidden rounded-[2rem] border border-white/[0.07] bg-[linear-gradient(165deg,rgba(11,18,40,0.72),rgba(5,8,22,0.5))] p-7 shadow-[inset_0_0_0_1px_rgba(102,230,218,0.05),0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-[3px] md:p-10">
          <div className="transform-parallax pointer-events-none absolute -right-16 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-moxera-accent/18 blur-[100px] md:-right-24 md:h-96 md:w-96" />
          <div className="transform-parallax pointer-events-none absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-[#1D2A57]/45 blur-[80px] md:-left-16 md:h-64 md:w-64" />
          <div className="relative z-[1]">
            <div className="transform-heading">
              <SectionHeading
                kicker="Dönüşüm Kurgusu"
                title="Fikirden yayına, yayından çalışan sisteme"
                description="Web sitesi, mobil uygulama, SaaS, AI iş akışı ve otomasyon projelerinde önce iş hedefini netleştirir, sonra ölçülebilir bir uygulama planına dönüştürürüz."
              />
            </div>
            <div className="cinematic-divider my-8" />
            <ol className="grid gap-4 md:gap-6 md:grid-cols-5">
              {transformationSteps.map((step, index) => (
                <li key={step} className="transform-item rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-cinematic">
                  <p className="mb-4 text-sm font-semibold tracking-[0.22em] text-moxera-highlight">0{index + 1}</p>
                  <p className="text-[15px] leading-relaxed text-moxera-text-soft">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
