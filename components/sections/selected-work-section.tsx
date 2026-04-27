"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { caseStudies } from "@/lib/data/site-content";
import { gsap, useGsapPlugin } from "@/lib/animations/gsap";
import { useMotionProfile } from "@/lib/animations/use-motion-profile";

export function SelectedWorkSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { isMobile, shouldReduceMotion, motionTier } = useMotionProfile();
  useGsapPlugin();

  useEffect(() => {
    if (!sectionRef.current || shouldReduceMotion) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".work-item").forEach((item) => {
        if (isMobile) {
          const media = item.querySelector(".work-media");
          gsap.fromTo(
            item,
            { opacity: 0, y: 28 },
            { opacity: 1, y: 0, duration: 0.56, ease: "power2.out", scrollTrigger: { trigger: item, start: "top 90%" } }
          );
          if (media) {
            gsap.fromTo(
              media,
              { yPercent: 8, scale: 1.025, opacity: 0.82 },
              {
                yPercent: -6,
                scale: 1,
                opacity: 1,
                ease: "none",
                scrollTrigger: { trigger: item, start: "top bottom", end: "bottom top", scrub: 0.85 }
              }
            );
          }
          return;
        }
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
        if (motionTier !== "lite") {
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
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [isMobile, motionTier, shouldReduceMotion]);

  return (
    <section id="selected-work" ref={sectionRef} className="relative py-16 md:py-32">
      <div className="pointer-events-none absolute right-[7%] top-10 h-44 w-44 rounded-full bg-[#1D2A57]/45 blur-[92px]" />
      <Container className="space-y-10 md:space-y-14">
        <SectionHeading
          kicker="Çalışmalarımız"
          title="Dijital ürünü sadece tasarlamıyor, çalışır bir sisteme dönüştürüyoruz"
          description="Her çalışma; marka algısı, kullanıcı deneyimi, teknik mimari ve operasyonel karşılığı birlikte düşünülerek kurgulanır."
        />
        <div className="space-y-6 md:space-y-8">
          {caseStudies.map((item, index) => (
            <article
              key={item.title}
              className={`work-item group grid gap-6 rounded-3xl border p-5 transition sm:p-6 md:grid-cols-[1.2fr_1fr] md:gap-7 md:p-10 ${
                index === 0
                  ? "scene-shell border-moxera-highlight/35 bg-gradient-to-br from-[#101C3B]/78 to-[#080D21]/92"
                  : "border-white/10 bg-white/[0.03] hover:border-moxera-highlight/40"
              }`}
            >
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.2em] text-moxera-highlight">{index === 0 ? "Ürün geliştirme hattı" : item.type}</p>
                <h3 className="text-[1.55rem] font-semibold leading-tight text-moxera-text md:text-3xl">{item.title}</h3>
                <p className="max-w-[34rem] leading-[1.75] text-moxera-text-soft">{item.summary}</p>
                {index === 0 ? <p className="text-[11px] uppercase tracking-[0.2em] text-moxera-highlight/90">Devam eden ürün geliştirme hattı</p> : null}
              </div>
              <div className={`work-media relative flex min-h-[220px] items-start overflow-hidden rounded-2xl border p-4 text-sm text-moxera-text-soft transition duration-500 group-hover:-translate-y-1 group-hover:scale-[1.01] md:min-h-[244px] md:p-5 ${
                index === 0
                  ? "border-moxera-highlight/40 bg-[linear-gradient(145deg,rgba(18,28,56,0.95),rgba(6,10,24,0.98))]"
                  : "border-white/15 bg-gradient-to-br from-moxera-navy/60 to-moxera-bg"
              }`}>
                <div className={`absolute inset-2 rounded-xl ${index === 0 ? "border border-moxera-highlight/35" : "border border-moxera-highlight/25"}`} />
                <div className="relative z-[1] grid w-full gap-4">
                  <div className={`relative overflow-hidden rounded-xl ${item.media.aspectRatio === "16:9" ? "aspect-video" : "aspect-[4/3]"}`}>
                    {item.media.kind === "video" ? (
                      <LazyWorkVideo src={item.media.src} poster={item.media.poster ?? item.media.src} alt={item.media.alt} />
                    ) : (
                      <Image src={item.media.src} alt={item.media.alt} fill sizes="(max-width: 768px) 92vw, 38vw" className="object-cover" />
                    )}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-moxera-highlight/10" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.16em] text-moxera-highlight/95">Sistem Kesiti</p>
                    <p className="leading-relaxed">{item.mediaLabel}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <Link href="/calismalar" className="inline-flex rounded-full border border-white/20 px-6 py-3 text-sm text-moxera-text transition hover:border-moxera-highlight">
          Çalışma yaklaşımını incele
        </Link>
      </Container>
    </section>
  );
}

function LazyWorkVideo({ src, poster, alt }: { src: string; poster: string; alt: string }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (shouldLoad || !wrapperRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "360px 0px" }
    );

    observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, [shouldLoad]);

  return (
    <div ref={wrapperRef} className="absolute inset-0">
      {shouldLoad ? (
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          aria-label={alt}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <Image src={poster} alt={alt} fill sizes="(max-width: 768px) 92vw, 38vw" className="object-cover" />
      )}
    </div>
  );
}
