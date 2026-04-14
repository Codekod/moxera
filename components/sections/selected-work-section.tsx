 "use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { caseStudies } from "@/lib/data/site-content";
import { gsap, useGsapPlugin } from "@/lib/animations/gsap";

export function SelectedWorkSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useGsapPlugin();

  useEffect(() => {
    if (!sectionRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.innerWidth < 768) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".work-item").forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: { trigger: item, start: "top 82%" }
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="selected-work" ref={sectionRef} className="py-24 md:py-32">
      <Container className="space-y-14">
        <SectionHeading
          kicker="Çalışmalarımız"
          title="Case-study teaser diliyle tasarlanan proje önizlemeleri"
          description="Gerçek vaka detayları eklendikçe içerik kolay güncellenebilir. Şimdilik premium mock data ile kurumsal bir vitrin hazırlanmıştır."
        />
        <div className="space-y-8">
          {caseStudies.map((item) => (
            <article key={item.title} className="work-item group grid gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-moxera-highlight/40 md:grid-cols-[1.4fr_1fr] md:p-10">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.2em] text-moxera-highlight">{item.type}</p>
                <h3 className="text-2xl font-semibold text-moxera-text md:text-3xl">{item.title}</h3>
                <p className="max-w-xl leading-relaxed text-moxera-text-soft">{item.summary}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-moxera-navy/60 to-moxera-bg p-6 text-sm text-moxera-text-soft transition duration-500 group-hover:-translate-y-1 group-hover:scale-[1.01]">
                {item.mediaLabel}
              </div>
            </article>
          ))}
        </div>
        <Link href="/calismalar" className="inline-flex rounded-full border border-white/20 px-6 py-3 text-sm text-moxera-text transition hover:border-moxera-highlight">
          Tüm çalışma yapısına git
        </Link>
      </Container>
    </section>
  );
}
