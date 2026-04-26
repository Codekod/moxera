"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/data/site-content";
import { Container } from "@/components/ui/container";
import { gsap, useGsapPlugin } from "@/lib/animations/gsap";

export function SiteHeader() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const homeSectionIds = useMemo(() => ["hero", "selected-work", "about", "contact"], []);
  useGsapPlugin();

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

  useEffect(() => {
    if (!headerRef.current) return;
    const nav = headerRef.current.querySelector<HTMLElement>(".desktop-nav");
    const pill = headerRef.current.querySelector<HTMLElement>(".desktop-nav-pill");
    const links = Array.from(headerRef.current.querySelectorAll<HTMLAnchorElement>(".desktop-nav-link"));
    if (!nav || !pill || links.length === 0) return;

    const activeHref = pathname === "/" ? `#${activeSection}` : pathname;
    const activeLink = links.find((link) => link.dataset.href === activeHref) ?? links[0];

    const movePill = (link: HTMLAnchorElement, instant = false) => {
      const navRect = nav.getBoundingClientRect();
      const linkRect = link.getBoundingClientRect();
      gsap.to(pill, {
        x: linkRect.left - navRect.left,
        width: linkRect.width,
        opacity: 1,
        duration: instant ? 0 : 0.42,
        ease: "power3.out",
        overwrite: true
      });
    };

    const ctx = gsap.context(() => {
      movePill(activeLink, true);
      gsap.fromTo(".desktop-nav-link", { y: -6, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.045, duration: 0.45, ease: "power2.out" });
    }, headerRef);

    const listeners = links.map((link) => {
      const enter = () => {
        movePill(link);
        gsap.to(link, { y: -1.5, duration: 0.24, ease: "power2.out", overwrite: true });
      };
      const leave = () => {
        movePill(activeLink);
        gsap.to(link, { y: 0, duration: 0.24, ease: "power2.out", overwrite: true });
      };
      link.addEventListener("mouseenter", enter);
      link.addEventListener("mouseleave", leave);
      return { enter, leave, link };
    });

    const handleResize = () => movePill(activeLink, true);
    window.addEventListener("resize", handleResize);

    return () => {
      listeners.forEach(({ enter, leave, link }) => {
        link.removeEventListener("mouseenter", enter);
        link.removeEventListener("mouseleave", leave);
      });
      window.removeEventListener("resize", handleResize);
      ctx.revert();
    };
  }, [activeSection, pathname]);

  useEffect(() => {
    if (!headerRef.current) return;
    const ctx = gsap.context(() => {
      if (isMenuOpen) {
        gsap.fromTo(".mobile-menu-shell", { yPercent: -4, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.36, ease: "power2.out" });
        gsap.fromTo(".mobile-menu-item", { y: 18, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.06, duration: 0.35, ease: "power2.out", delay: 0.08 });
      }
    }, headerRef);
    return () => ctx.revert();
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 border-b transition duration-500 ${
        isScrolled
          ? "border-white/15 bg-[rgba(5,8,22,0.86)] shadow-[0_8px_38px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          : "border-white/10 bg-[rgba(5,8,22,0.58)] backdrop-blur-lg"
      }`}
    >
      <Container className="flex h-[5.6rem] items-center justify-between">
        <Link href="/" className="group relative inline-flex items-center text-moxera-text">
          <span className="relative block w-[178px] md:w-[206px]">
            <Image
              src="/brand/moxera-logo-light.png"
              alt="Moxera"
              width={5692}
              height={3200}
              sizes="(max-width: 768px) 178px, 206px"
              className="h-auto w-full object-contain object-left"
              priority
            />
          </span>
          <span className="absolute -bottom-[2px] left-0 h-px w-0 bg-moxera-highlight transition-all duration-500 group-hover:w-[76px]" />
        </Link>
        <nav className="desktop-nav relative hidden items-center gap-1 rounded-full border border-white/10 bg-black/15 p-1 md:flex">
          <span className="desktop-nav-pill pointer-events-none absolute left-1 top-1 h-[calc(100%-0.5rem)] rounded-full border border-moxera-highlight/25 bg-moxera-highlight/10 opacity-0 shadow-[0_10px_30px_rgba(46,211,198,0.10)]" />
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={pathname === "/" && item.sectionId ? `#${item.sectionId}` : item.href}
              data-href={pathname === "/" && item.sectionId ? `#${item.sectionId}` : item.href}
              className={`desktop-nav-link group relative z-[1] rounded-full px-5 py-2 text-[12px] font-semibold tracking-[0.15em] transition hover:text-moxera-text ${
                (pathname === "/" && item.sectionId === activeSection) || (pathname !== "/" && item.href === pathname)
                  ? "text-moxera-text"
                  : "text-moxera-text-soft"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-moxera-text-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-moxera-highlight/90" />
            Ankara
          </span>
          <Link href="/iletisim" className="rounded-full border border-moxera-highlight/45 bg-moxera-highlight/10 px-4 py-2 text-[11px] font-semibold tracking-[0.14em] text-moxera-highlight transition hover:bg-moxera-highlight/20">
            Proje Başlat
          </Link>
        </div>
        <button
          type="button"
          className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/20 text-moxera-text md:hidden"
          aria-label={isMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav-panel"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span
            className={`absolute left-1/2 h-[2px] w-[1.125rem] -translate-x-1/2 rounded-full bg-current transition-all duration-300 ease-out ${
              isMenuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-[13px]"
            }`}
          />
          <span
            className={`absolute left-1/2 top-1/2 h-[2px] w-[1.125rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-current transition-all duration-200 ${
              isMenuOpen ? "scale-0 opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-1/2 h-[2px] w-[1.125rem] -translate-x-1/2 rounded-full bg-current transition-all duration-300 ease-out ${
              isMenuOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-[13px]"
            }`}
          />
        </button>
      </Container>
      {isMenuOpen ? (
        <div id="mobile-nav-panel" className="mobile-menu-shell border-t border-white/10 bg-[rgba(5,8,22,0.95)] px-6 pb-6 pt-4 backdrop-blur-xl md:hidden">
          <nav className="space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={pathname === "/" && item.sectionId ? `#${item.sectionId}` : item.href}
                className="mobile-menu-item block rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm tracking-[0.1em] text-moxera-text-soft transition hover:border-moxera-highlight/40 hover:text-moxera-text"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/iletisim" className="mobile-menu-item mt-2 block rounded-xl border border-moxera-highlight/40 bg-moxera-highlight/10 px-4 py-3 text-sm font-semibold tracking-[0.12em] text-moxera-highlight">
              Proje Başlat
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
