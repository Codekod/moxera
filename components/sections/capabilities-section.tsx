 "use client";

import { useEffect, useRef } from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { capabilities } from "@/lib/data/site-content";
import { gsap, useGsapPlugin } from "@/lib/animations/gsap";
import { useMotionProfile } from "@/lib/animations/use-motion-profile";
import { revealOnScroll } from "@/lib/animations/motion-helpers";

export function CapabilitiesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { isMobile, shouldReduceMotion, motionTier } = useMotionProfile();
  useGsapPlugin();

  useEffect(() => {
    if (!sectionRef.current || shouldReduceMotion) return;

    const cards = gsap.utils.toArray<HTMLElement>(".capability-card", sectionRef.current);
    const ctx = gsap.context(() => {
      if (isMobile) {
        revealOnScroll({ target: ".capability-heading", trigger: sectionRef.current, fromY: 20, duration: 0.55, start: "top 82%" });
        cards.forEach((card, index) => {
          revealOnScroll({ target: card, trigger: card, fromY: 22, duration: 0.5, delay: index * 0.04, start: "top 88%" });
        });
        return;
      }
      const usePin = motionTier === "full";
      const tl = gsap.timeline(
        usePin
          ? {
              scrollTrigger: {
                trigger: ".capability-stage",
                start: "top 14%",
                end: `+=${cards.length * 250}`,
                scrub: 0.95,
                pin: ".capability-stage"
              }
            }
          : {
              scrollTrigger: {
                trigger: ".capability-stage",
                start: "top 72%"
              }
            }
      );

      tl.fromTo(".capability-heading", { opacity: 0.3, y: 26 }, { opacity: 1, y: 0, duration: 0.8 }, 0);
      gsap.set(cards, { opacity: 0.82, y: 12, scale: 0.992 });
      cards.forEach((card, index) => {
        if (index === 0) {
          tl.to(card, { opacity: 1, y: 0, scale: 1, rotateX: 0, duration: 0.7 }, 0.15);
          return;
        }
        tl.to(cards[index - 1], { opacity: 0.68, y: -6, scale: 0.988, duration: 0.45 });
        tl.to(card, { opacity: 1, y: 0, scale: 1, rotateX: 0, duration: 0.7 }, "+=0.08");
      });
      tl.to(cards, { opacity: 0.9, y: 0, scale: 0.995, duration: 0.45 });
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile, motionTier, shouldReduceMotion]);

  return (
    <section ref={sectionRef} className="relative py-16 md:py-32">
      <div className="pointer-events-none absolute left-[8%] top-8 h-36 w-36 rounded-full bg-moxera-highlight/12 blur-[72px]" />
      <Container className="space-y-10 md:space-y-14">
        <div className="capability-stage scene-shell relative overflow-hidden rounded-[2rem] p-7 md:p-10">
          <div className="pointer-events-none absolute -right-20 top-1/2 h-44 w-44 -translate-y-1/2 rounded-full bg-[#243770]/35 blur-[94px]" />
          <div className="capability-heading mb-7 md:mb-8">
            <SectionHeading
              kicker="Yetenek Alanları"
              title="Hizmetleri kart değil, sistem katmanı olarak ele alıyoruz"
              description="Öncelik sırası net: Web ve mobil, SaaS, yapay zeka ve otomasyon. Her biri aynı mimarinin farklı performans katmanı."
            />
          </div>
          <div className="cinematic-divider mb-6 md:mb-8" />
          <div className="grid gap-4 md:gap-6 md:grid-cols-2">
            {capabilities.map((item, index) => (
              <article
                key={item.title}
                className={`capability-card group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#0F1832]/90 to-[#070D24]/85 p-6 transition duration-500 hover:-translate-y-1 hover:border-moxera-highlight/45 md:p-8 ${
                  index % 2 === 0 ? "md:-mt-4" : ""
                }`}
              >
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,transparent,rgba(102,230,218,0.08),transparent)] opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-moxera-accent/20 blur-3xl transition duration-500 group-hover:scale-125" />
                <p className="mb-4 text-xs uppercase tracking-[0.2em] text-moxera-highlight/90">Katman 0{index + 1}</p>
                <h3 className="mb-3 text-[1.45rem] font-semibold leading-tight text-moxera-text md:mb-4 md:text-2xl">{item.title}</h3>
                <p className="mb-5 max-w-[34ch] leading-relaxed text-moxera-text-soft md:max-w-none">{item.detail}</p>
                <div className="mt-6 h-px w-16 bg-gradient-to-r from-moxera-highlight/60 to-transparent" />
                <p className="mt-3 text-sm uppercase tracking-[0.16em] text-moxera-highlight">{item.metric}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
