 "use client";

import { useEffect, useRef } from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { capabilities } from "@/lib/data/site-content";
import { gsap, useGsapPlugin } from "@/lib/animations/gsap";

export function CapabilitiesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useGsapPlugin();

  useEffect(() => {
    if (!sectionRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cards = gsap.utils.toArray<HTMLElement>(".capability-card", sectionRef.current);
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".capability-stage",
          start: "top 12%",
          end: `+=${cards.length * 340}`,
          scrub: 1.1,
          pin: ".capability-stage"
        }
      });

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
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32">
      <Container className="space-y-14">
        <div className="capability-stage scene-shell rounded-[2rem] p-7 md:p-10">
          <div className="capability-heading mb-8">
            <SectionHeading
              kicker="Yetenek Alanları"
              title="Hizmetleri kart değil, sistem katmanı olarak ele alıyoruz"
              description="Öncelik sırası net: Web ve mobil, SaaS, yapay zeka ve otomasyon. Her biri aynı mimarinin farklı performans katmanı."
            />
          </div>
          <div className="cinematic-divider mb-8" />
          <div className="grid gap-6 md:grid-cols-2">
            {capabilities.map((item, index) => (
              <article
                key={item.title}
                className={`capability-card group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#0F1832]/90 to-[#070D24]/85 p-8 transition duration-500 hover:-translate-y-1 hover:border-moxera-highlight/45 ${
                  index % 2 === 0 ? "md:-mt-4" : ""
                }`}
              >
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,transparent,rgba(102,230,218,0.08),transparent)] opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-moxera-accent/20 blur-3xl transition duration-500 group-hover:scale-125" />
                <p className="mb-4 text-xs uppercase tracking-[0.2em] text-moxera-highlight/90">Katman 0{index + 1}</p>
                <h3 className="mb-4 text-2xl font-semibold text-moxera-text">{item.title}</h3>
                <p className="mb-5 leading-relaxed text-moxera-text-soft">{item.detail}</p>
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
