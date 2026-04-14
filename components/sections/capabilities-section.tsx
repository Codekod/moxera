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
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${cards.length * 260}`,
          scrub: 1,
          pin: ".capability-stage"
        }
      });

      cards.forEach((card, index) => {
        if (index === 0) {
          tl.fromTo(card, { opacity: 0.45, y: 40 }, { opacity: 1, y: 0, duration: 0.5 }, 0);
          return;
        }
        tl.to(cards[index - 1], { opacity: 0.35, y: -20, duration: 0.45 });
        tl.fromTo(card, { opacity: 0.3, y: 36 }, { opacity: 1, y: 0, duration: 0.55 });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32">
      <Container className="space-y-14">
        <SectionHeading
          kicker="Yetenek Alanları"
          title="Hizmetleri kart değil, sistem katmanı olarak ele alıyoruz"
          description="Öncelik sırası net: Web ve mobil, SaaS, yapay zeka ve otomasyon. Her biri aynı mimarinin farklı performans katmanı."
        />
        <div className="capability-stage grid gap-6 md:grid-cols-2">
          {capabilities.map((item) => (
            <article key={item.title} className="capability-card group relative overflow-hidden rounded-3xl border border-white/10 bg-moxera-bg-soft p-8">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-moxera-accent/20 blur-3xl transition group-hover:scale-125" />
              <h3 className="mb-4 text-2xl font-semibold text-moxera-text">{item.title}</h3>
              <p className="mb-5 leading-relaxed text-moxera-text-soft">{item.detail}</p>
              <p className="text-sm uppercase tracking-[0.16em] text-moxera-highlight">{item.metric}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
