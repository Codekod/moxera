"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/data/site-content";
import { Container } from "@/components/ui/container";

export function SiteHeader() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("hero");
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

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-moxera-bg/70 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-wide text-moxera-text">
          MOXERA
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={pathname === "/" && item.sectionId ? `#${item.sectionId}` : item.href}
              className={`text-sm transition hover:text-moxera-text ${
                (pathname === "/" && item.sectionId === activeSection) || (pathname !== "/" && item.href === pathname)
                  ? "text-moxera-text"
                  : "text-moxera-text-soft"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
