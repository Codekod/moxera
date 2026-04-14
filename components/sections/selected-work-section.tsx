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
          { opacity: 0, y: 55, clipPath: "inset(18% 0 14% 0)" },
          {
            opacity: 1,
            y: 0,
            clipPath: "inset(0% 0 0% 0)",
            duration: 1,
            ease: "power2.out",
            scrollTrigger: { trigger: item, start: "top 82%" }
          }
        );
        gsap.fromTo(
          item.querySelector(".work-media"),
          { opacity: 0.25, scale: 1.08 },
          {
            opacity: 1,
            scale: 1,
            duration: 1.1,
            ease: "power2.out",
            scrollTrigger: { trigger: item, start: "top 74%", end: "bottom 50%", scrub: 0.8 }
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
          {caseStudies.map((item, index) => (
            <article
              key={item.title}
              className={`work-item group grid gap-7 rounded-3xl border p-7 transition md:grid-cols-[1.2fr_1fr] md:p-10 ${
                index === 0
                  ? "scene-shell border-moxera-highlight/35 bg-gradient-to-br from-[#101C3B]/78 to-[#080D21]/92"
                  : "border-white/10 bg-white/[0.03] hover:border-moxera-highlight/40"
              }`}
            >
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.2em] text-moxera-highlight">{index === 0 ? "Öne çıkan çalışma · Gerçek referans" : item.type}</p>
                <h3 className="text-2xl font-semibold leading-tight text-moxera-text md:text-3xl">{item.title}</h3>
                <p className="max-w-[34rem] leading-[1.75] text-moxera-text-soft">{item.summary}</p>
                {index === 0 ? <p className="text-[11px] uppercase tracking-[0.2em] text-moxera-highlight/90">Devam eden ürün geliştirme hattı</p> : null}
              </div>
              <div className={`work-media relative overflow-hidden rounded-2xl border p-7 text-sm text-moxera-text-soft transition duration-500 group-hover:-translate-y-1 group-hover:scale-[1.01] ${
                index === 0
                  ? "border-moxera-highlight/40 bg-[linear-gradient(145deg,rgba(18,28,56,0.95),rgba(6,10,24,0.98))]"
                  : "border-white/15 bg-gradient-to-br from-moxera-navy/60 to-moxera-bg"
              }`}>
                <div className={`absolute inset-3 rounded-xl ${index === 0 ? "border border-moxera-highlight/35" : "border border-moxera-highlight/25"}`} />
                <div className="absolute inset-x-7 top-16 h-px bg-gradient-to-r from-transparent via-moxera-highlight/45 to-transparent" />
                <div className="absolute inset-x-7 bottom-16 h-px bg-gradient-to-r from-transparent via-moxera-highlight/35 to-transparent" />
                <div className="absolute -left-20 top-1/2 h-28 w-52 -translate-y-1/2 bg-[linear-gradient(90deg,transparent,rgba(102,230,218,0.35),transparent)] blur-md transition duration-700 group-hover:left-[70%]" />
                <div className="absolute bottom-6 right-6 h-20 w-20 rounded-full bg-moxera-highlight/18 blur-2xl" />
                <p className="relative text-xs uppercase tracking-[0.16em] text-moxera-highlight/95">Medya Vitrini</p>
                <p className="relative mt-4 max-w-[14rem] leading-relaxed">{item.mediaLabel}</p>
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
