"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/data/site-content";
import { Container } from "@/components/ui/container";

export function SiteHeader() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const homeSectionIds = useMemo(() => ["hero", "selected-work", "about", "contact"], []);

  useEffect(() => {
    if (pathname !== "/") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.2, 0.45, 0.7] }
    );

    homeSectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [pathname, homeSectionIds]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition duration-500 ${
        isScrolled
          ? "border-white/15 bg-[rgba(5,8,22,0.86)] shadow-[0_8px_38px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          : "border-white/10 bg-[rgba(5,8,22,0.58)] backdrop-blur-lg"
      }`}
    >
      <Container className="flex h-[5.35rem] items-center justify-between">
        <Link href="/" className="group relative flex items-center gap-3 text-moxera-text">
          <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-full border border-moxera-highlight/40 bg-moxera-highlight/10">
            <span className="h-2.5 w-2.5 rounded-full bg-moxera-highlight" />
            <span className="absolute h-5 w-5 rounded-full border border-moxera-highlight/40" />
          </span>
          <span className="text-base font-semibold tracking-[0.2em]">MOXERA</span>
          <span className="absolute -bottom-1 left-11 h-px w-0 bg-moxera-highlight transition-all duration-500 group-hover:w-16" />
        </Link>
        <nav className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={pathname === "/" && item.sectionId ? `#${item.sectionId}` : item.href}
              className={`group relative py-1 text-[12px] font-medium tracking-[0.14em] transition hover:text-moxera-text ${
                (pathname === "/" && item.sectionId === activeSection) || (pathname !== "/" && item.href === pathname)
                  ? "text-moxera-text"
                  : "text-moxera-text-soft"
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-moxera-highlight transition-all duration-300 ${
                  (pathname === "/" && item.sectionId === activeSection) || (pathname !== "/" && item.href === pathname)
                    ? "w-full opacity-100"
                    : "w-0 opacity-0 group-hover:w-full group-hover:opacity-80"
                }`}
              />
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2.5 md:flex">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-moxera-text-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-moxera-highlight/90" />
            Ankara
          </span>
          <Link href="/iletisim" className="rounded-full border border-moxera-highlight/45 bg-moxera-highlight/10 px-4 py-2 text-[11px] font-semibold tracking-[0.14em] text-moxera-highlight transition hover:bg-moxera-highlight/20">
            Proje Başlat
          </Link>
        </div>
      </Container>
    </header>
  );
}
