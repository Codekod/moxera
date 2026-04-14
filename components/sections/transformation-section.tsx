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
      const steps = gsap.utils.toArray<HTMLElement>(".transform-item");
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".transform-stage",
          start: "top 12%",
          end: `+=${steps.length * 280}`,
          scrub: 1,
          pin: ".transform-stage"
        }
      });

      tl.fromTo(".transform-heading", { opacity: 0.35, y: 24 }, { opacity: 1, y: 0, duration: 0.9 }, 0);
      gsap.set(steps, { opacity: 0.86, y: 0, scale: 0.995 });
      steps.forEach((item, index) => {
        if (index !== 0) tl.to(steps[index - 1], { opacity: 0.62, y: -6, scale: 0.988, duration: 0.45, borderColor: "rgba(255,255,255,0.16)" });
        tl.to(item, { opacity: 1, y: 0, scale: 1, duration: 0.68, borderColor: "rgba(102,230,218,0.42)", boxShadow: "0 20px 60px rgba(2,8,26,0.48)" }, index === 0 ? 0.18 : "+=0.1");
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32">
      <Container className="space-y-14">
        <div className="transform-stage scene-shell rounded-[2rem] p-7 md:p-10">
          <div className="transform-heading">
            <SectionHeading
              kicker="Dönüşüm Kurgusu"
              title="İhtiyaçtan çalışan sisteme uzanan net bir yol"
              description="Her projede aynı soruyu soruyoruz: Bu iş daha hızlı, daha sade ve daha ölçülebilir nasıl çalışır?"
            />
          </div>
          <div className="cinematic-divider my-8" />
          <ol className="grid gap-6 md:grid-cols-5">
            {transformationSteps.map((step, index) => (
              <li key={step} className="transform-item rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-cinematic">
                <p className="mb-4 text-sm font-semibold tracking-[0.22em] text-moxera-highlight">0{index + 1}</p>
                <p className="text-[15px] leading-relaxed text-moxera-text-soft">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
