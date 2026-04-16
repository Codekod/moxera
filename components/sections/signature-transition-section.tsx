"use client";

import { useEffect, useRef } from "react";
import { Container } from "@/components/ui/container";
import { gsap, useGsapPlugin } from "@/lib/animations/gsap";

export function SignatureTransitionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useGsapPlugin();

  useEffect(() => {
    if (!sectionRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      if (isMobile) {
        gsap.fromTo(".signature-copy", { y: 16, opacity: 0.4 }, { y: 0, opacity: 1, duration: 0.55, scrollTrigger: { trigger: sectionRef.current, start: "top 88%" } });
        gsap.fromTo(".signature-path", { strokeDashoffset: 1, opacity: 0.2 }, { strokeDashoffset: 0, opacity: 0.85, duration: 1.2, scrollTrigger: { trigger: sectionRef.current, start: "top 90%" } });
        return;
      }
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "bottom 25%",
          scrub: 1.1
        }
      });

      tl.fromTo(".signature-path", { strokeDashoffset: 1, opacity: 0.22 }, { strokeDashoffset: 0, opacity: 0.95, duration: 1.1 })
        .fromTo(".signature-copy", { y: 22, opacity: 0.35 }, { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }, 0.1)
        .to(".signature-dot", { x: 740, y: -34, duration: 1.1, ease: "none" }, 0.15);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 md:py-16" aria-hidden="true">
      <Container>
        <div className="scene-shell overflow-hidden rounded-3xl px-6 py-7 md:px-10 md:py-9">
          <p className="signature-copy mb-6 text-xs uppercase tracking-[0.24em] text-moxera-highlight/85">
            Akış devam ediyor · sistem katmanları proje sahnelerine bağlanıyor
          </p>
          <svg viewBox="0 0 840 120" className="h-16 w-full md:h-20">
            <path
              className="signature-path"
              d="M10 78C98 24 190 18 258 58C316 90 388 95 462 54C534 13 620 12 830 74"
              stroke="url(#signatureGradient)"
              strokeWidth="2.2"
              fill="none"
              pathLength="1"
              strokeDasharray="1"
              strokeDashoffset="1"
              strokeLinecap="round"
            />
            <circle className="signature-dot" cx="12" cy="78" r="4.8" fill="#66E6DA" />
            <defs>
              <linearGradient id="signatureGradient" x1="0" y1="54" x2="840" y2="72" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1D2A57" />
                <stop offset="0.52" stopColor="#2ED3C6" />
                <stop offset="1" stopColor="#66E6DA" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </Container>
    </section>
  );
}
