"use client";

import { useEffect, useRef } from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { transformationSteps } from "@/lib/data/site-content";
import { gsap, useGsapPlugin } from "@/lib/animations/gsap";

export function TransformationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useGsapPlugin();

  useEffect(() => {
    if (!sectionRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".transform-item").forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0.2, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              end: "top 35%",
              scrub: true
            }
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32">
      <Container className="space-y-14">
        <SectionHeading
          kicker="Dönüşüm Kurgusu"
          title="İhtiyaçtan çalışan sisteme uzanan net bir yol"
          description="Her projede aynı soruyu soruyoruz: Bu iş daha hızlı, daha sade ve daha ölçülebilir nasıl çalışır?"
        />
        <ol className="grid gap-6 md:grid-cols-5">
          {transformationSteps.map((step, index) => (
            <li key={step} className="transform-item rounded-2xl border border-white/10 bg-white/5 p-6 shadow-cinematic">
              <p className="mb-4 text-xs tracking-[0.2em] text-moxera-highlight">0{index + 1}</p>
              <p className="text-base text-moxera-text-soft">{step}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
