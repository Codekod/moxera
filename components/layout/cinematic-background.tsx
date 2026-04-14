"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, useGsapPlugin } from "@/lib/animations/gsap";

export function CinematicBackground() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  useGsapPlugin();

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (!rootRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const mobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      gsap.to(".bg-far", {
        yPercent: mobile ? 4 : 10,
        xPercent: mobile ? 0 : -2,
        ease: "none",
        scrollTrigger: { trigger: document.body, start: "top top", end: "bottom bottom", scrub: 0.9 }
      });
      gsap.to(".bg-mid", {
        yPercent: mobile ? -5 : -12,
        xPercent: mobile ? 0 : 1.5,
        ease: "none",
        scrollTrigger: { trigger: document.body, start: "top top", end: "bottom bottom", scrub: 1.1 }
      });
      gsap.to(".bg-near", {
        yPercent: mobile ? -8 : -22,
        ease: "none",
        scrollTrigger: { trigger: document.body, start: "top top", end: "bottom bottom", scrub: 1.3 }
      });
      gsap.to(".bg-wave", {
        yPercent: mobile ? -6 : -16,
        opacity: mobile ? 0.38 : 0.58,
        ease: "none",
        scrollTrigger: { trigger: document.body, start: "top top", end: "bottom bottom", scrub: 1.25 }
      });

      gsap.to(".bg-orb-a", { x: mobile ? 40 : 80, y: mobile ? -24 : -50, repeat: -1, yoyo: true, duration: 13, ease: "sine.inOut" });
      gsap.to(".bg-orb-b", { x: mobile ? -45 : -90, y: mobile ? 30 : 70, repeat: -1, yoyo: true, duration: 15, ease: "sine.inOut" });
      gsap.to(".bg-grain", { xPercent: mobile ? 0.7 : 1.5, yPercent: mobile ? -0.7 : -1.5, repeat: -1, yoyo: true, duration: 8, ease: "none" });
    }, rootRef);

    const handlePointer = (event: MouseEvent) => {
      if (mobile) return;
      const x = (event.clientX / window.innerWidth - 0.5) * 40;
      const y = (event.clientY / window.innerHeight - 0.5) * 30;
      gsap.to(".bg-near", { x, y, duration: 1.3, ease: "power3.out" });
      gsap.to(".bg-mid", { x: x * 0.45, y: y * 0.45, duration: 1.4, ease: "power3.out" });
    };

    window.addEventListener("mousemove", handlePointer);
    return () => {
      window.removeEventListener("mousemove", handlePointer);
      ctx.revert();
    };
  }, []);

  return (
    <div ref={rootRef} className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="bg-far absolute inset-0 bg-[radial-gradient(ellipse_at_12%_8%,rgba(46,211,198,0.20),transparent_45%),radial-gradient(ellipse_at_80%_16%,rgba(29,42,87,0.48),transparent_55%),radial-gradient(ellipse_at_50%_120%,rgba(10,18,36,0.9),transparent_58%)]" />
      <div className="bg-mid absolute inset-0">
        <div className={`bg-orb-a absolute left-[14%] top-[8%] rounded-full bg-moxera-accent/20 ${isMobile ? "h-52 w-52 blur-[72px]" : "h-72 w-72 blur-[105px]"}`} />
        <div className={`bg-orb-b absolute bottom-[6%] right-[10%] rounded-full bg-[#1D2A57]/55 ${isMobile ? "h-56 w-56 blur-[82px]" : "h-80 w-80 blur-[130px]"}`} />
      </div>
      <div className={`bg-wave absolute inset-0 ${isMobile ? "opacity-35" : "opacity-55"}`}>
        <svg viewBox="0 0 1600 1000" className="h-full w-full">
          <path d="M-100 350C130 146 384 136 594 290C784 432 982 474 1710 124" stroke="rgba(102,230,218,0.16)" strokeWidth="1.1" fill="none" />
          <path d="M-120 500C182 312 416 320 652 480C890 642 1150 656 1710 430" stroke="rgba(141,170,230,0.15)" strokeWidth="1" fill="none" />
        </svg>
      </div>
      <div className={`bg-near absolute inset-0 ${isMobile ? "opacity-55" : "opacity-85"}`}>
        <svg viewBox="0 0 1600 1000" className="h-full w-full">
          <path d="M-80 430C170 240 390 250 610 396C835 545 1085 564 1680 220" stroke="rgba(102,230,218,0.20)" strokeWidth="1.4" fill="none" />
          <path d="M-120 640C300 430 520 446 760 612C1010 785 1270 812 1710 530" stroke="rgba(46,211,198,0.16)" strokeWidth="1.2" fill="none" />
          <path d="M-80 820C280 662 520 658 770 780C1040 912 1300 916 1700 760" stroke="rgba(120,145,210,0.22)" strokeWidth="1" fill="none" />
        </svg>
      </div>
      <div className="bg-grain absolute inset-0 opacity-[0.08] bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22200%22%20height=%22200%22%20viewBox=%220%200%20200%20200%22%3E%3Cfilter%20id=%22n%22%3E%3CfeTurbulence%20type=%22fractalNoise%22%20baseFrequency=%220.72%22%20numOctaves=%222%22%20stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect%20width=%22200%22%20height=%22200%22%20filter=%22url(%23n)%22%20opacity=%220.7%22/%3E%3C/svg%3E')]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_58%,rgba(2,5,16,0.75)_100%)]" />
    </div>
  );
}
