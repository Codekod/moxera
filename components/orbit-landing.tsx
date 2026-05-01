"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { LandingNav } from "@/components/landing-nav";
import { MoxeraMark } from "@/components/moxera-mark";
import { MoxeraWordmark } from "@/components/moxera-wordmark";
import { siteContent } from "@/content/site-content";

gsap.registerPlugin(
  ScrollTrigger,
  ScrollToPlugin,
  SplitText,
  DrawSVGPlugin,
);

export function OrbitLanding() {
  const [dynamicPhraseIndex, setDynamicPhraseIndex] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const heroSceneRef = useRef<HTMLElement>(null);
  const servicesSceneRef = useRef<HTMLElement>(null);
  const projectsSceneRef = useRef<HTMLElement>(null);
  const heroVisualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const heroScene = heroSceneRef.current;
    const servicesScene = servicesSceneRef.current;
    const projectsScene = projectsSceneRef.current;
    const heroVisual = heroVisualRef.current;

    if (!root || !heroScene || !servicesScene || !projectsScene || !heroVisual) {
      return;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const mm = gsap.matchMedia();
    const splitInstances: SplitText[] = [];
    const navHoverListeners: Array<{
      link: HTMLAnchorElement;
      enter: () => void;
      leave: () => void;
    }> = [];
    let handleNavResize: (() => void) | null = null;
    let dynamicPhraseInterval: number | null = null;

    if (!reduceMotion && siteContent.hero.dynamicPhrases.length > 1) {
      dynamicPhraseInterval = window.setInterval(() => {
        setDynamicPhraseIndex(
          (index) => (index + 1) % siteContent.hero.dynamicPhrases.length,
        );
      }, 2600);
    }

    const ctx = gsap.context(() => {
      const splitReveal = (selector: string, start = "top 86%") => {
        gsap.utils.toArray<HTMLElement>(selector).forEach((element) => {
          const split = SplitText.create(element, {
            type: "lines",
            linesClass: "split-line",
            mask: "lines",
          });
          splitInstances.push(split);

          gsap.from(split.lines, {
            yPercent: 115,
            opacity: 0,
            duration: 1.05,
            ease: "power4.out",
            stagger: 0.08,
            scrollTrigger: {
              trigger: element,
              start,
              toggleActions: "play none none reverse",
            },
          });
        });
      };

      splitReveal(".js-section-title", "top 84%");

      if (!reduceMotion) {
        gsap
          .timeline({
            defaults: { ease: "power3.out" },
          })
          .from(".js-nav-shell", { y: -20, opacity: 0, duration: 0.8 })
          .from(
            ".js-nav-link",
            { y: 10, opacity: 0, stagger: 0.06, duration: 0.5 },
            "-=0.5",
          )
          .from(".js-nav-cta", { y: 12, opacity: 0, duration: 0.5 }, "-=0.38")
          .from(".js-hero-kicker", { y: 18, opacity: 0, duration: 0.65 }, "-=0.45")
          .from(
            ".js-hero-line",
            {
              yPercent: 112,
              opacity: 0,
              stagger: 0.12,
              duration: 0.95,
              ease: "power4.out",
            },
            "-=0.32",
          )
          .from(".js-hero-copy", { y: 24, opacity: 0, duration: 0.75 }, "-=0.35")
          .from(
            ".js-hero-actions > *",
            { y: 16, opacity: 0, stagger: 0.08, duration: 0.58 },
            "-=0.4",
          )
          .from(
            ".js-logo-card",
            { y: 42, scale: 0.95, opacity: 0, duration: 1.05 },
            "-=0.55",
          )
          .from(
            ".js-chip",
            { y: 20, opacity: 0, stagger: 0.08, duration: 0.6 },
            "-=0.45",
          );

        gsap.from(".js-draw-orbit", {
          drawSVG: "0% 0%",
          duration: 1.6,
          stagger: 0.18,
          ease: "power2.out",
        });

        gsap.to(".js-draw-orbit", {
          drawSVG: "32% 100%",
          duration: 7.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: 0.12,
        });

        gsap.to(".js-float", {
          y: -12,
          duration: 2.6,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          stagger: 0.18,
        });

      }

      mm.add("(min-width: 901px)", () => {
        gsap
          .timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: heroScene,
              start: "top top",
              end: "+=1750",
              pin: ".hero-pin",
              scrub: 1,
              anticipatePin: 1,
            },
          })
          .to(".js-hero-copy-wrap", { yPercent: -22, opacity: 0.52 }, 0)
          .to(".js-hero-aurora", { xPercent: 8, yPercent: 4, scale: 1.09 }, 0)
          .to(".js-logo-card", { yPercent: -6, scale: 1.018, rotateY: -2 }, 0.06)
          .to(".js-logo-icon-wrap", { x: -10, y: -4, rotate: -2 }, 0.2)
          .to(".js-logo-word-wrap", { x: 10, y: 4, rotate: 1 }, 0.2)
          .to(".js-logo-icon-wrap", { x: 4, y: 1, rotate: 0.5 }, 0.55)
          .to(".js-logo-word-wrap", { x: -4, y: -1, rotate: -0.5 }, 0.55)
          .to(".js-logo-icon-wrap", { x: 0, y: 0, rotate: 0 }, 0.92)
          .to(".js-logo-word-wrap", { x: 0, y: 0, rotate: 0 }, 0.92)
          .to(".js-logo-accent", { x: 18, width: 58 }, 0.3)
          .to(".js-chip-alpha", { x: -42, y: -26, rotate: -5 }, 0.26)
          .to(".js-chip-beta", { x: 48, y: -24, rotate: 4 }, 0.3)
          .to(".js-chip-gamma", { y: 50, x: 12, rotate: 2 }, 0.34)
          .fromTo(
            ".js-stage-footer",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0 },
            0.46,
          );

        const servicesTrack = root.querySelector<HTMLElement>(".js-services-track");
        const servicesViewport =
          root.querySelector<HTMLElement>(".js-services-viewport");

        if (servicesTrack && servicesViewport) {
          const serviceCards = gsap.utils.toArray<HTMLElement>(
            ".js-service-card",
            servicesTrack,
          );
          const serviceTravel = () =>
            Math.max(servicesTrack.scrollWidth - servicesViewport.clientWidth, 0);
          const serviceAllVisibleProgress = () => {
            const travel = serviceTravel();
            if (!serviceCards.length || travel <= 0) {
              return 0;
            }

            const viewportWidth = servicesViewport.clientWidth;
            let lowerBound = -Infinity;
            let upperBound = Infinity;

            serviceCards.forEach((card) => {
              const left = card.offsetLeft;
              const right = left + card.offsetWidth;
              lowerBound = Math.max(lowerBound, -left);
              upperBound = Math.min(upperBound, viewportWidth - right);
            });

            if (!Number.isFinite(lowerBound) || !Number.isFinite(upperBound)) {
              return 0.5;
            }

            if (lowerBound > upperBound) {
              return 0.5;
            }

            const targetX = gsap.utils.clamp(
              -travel,
              0,
              (lowerBound + upperBound) / 2,
            );

            return gsap.utils.clamp(0, 1, Math.abs(targetX) / travel);
          };
          const serviceSnapPoints = () => {
            const points = [0, serviceAllVisibleProgress(), 1]
              .map((point) => Math.round(point * 1000) / 1000)
              .filter((point, index, arr) => arr.indexOf(point) === index)
              .sort((a, b) => a - b);

            return points;
          };
          const snapToClosest = (value: number) => {
            const points = serviceSnapPoints();
            let closest = points[0] ?? 0;
            let minDistance = Infinity;

            points.forEach((point) => {
              const distance = Math.abs(value - point);
              if (distance < minDistance) {
                minDistance = distance;
                closest = point;
              }
            });

            return closest;
          };

          const serviceEnd = () =>
            `+=${Math.max(serviceTravel() + window.innerHeight * 0.85, 1550)}`;

          const serviceTween = gsap.fromTo(
            servicesTrack,
            {
              x: 0,
            },
            {
              x: () => -serviceTravel(),
              ease: "none",
              scrollTrigger: {
                trigger: servicesScene,
                start: "top top+=104",
                end: serviceEnd,
                pin: ".services-pin",
                scrub: 1,
                invalidateOnRefresh: true,
                anticipatePin: 1,
                snap: {
                  snapTo: snapToClosest,
                  duration: { min: 0.14, max: 0.34 },
                  delay: 0.02,
                  ease: "power1.inOut",
                },
              },
            },
          );

          gsap.to(".js-services-intro", {
            yPercent: -16,
            opacity: 0.5,
            ease: "none",
            scrollTrigger: {
              trigger: servicesScene,
              start: "top top+=104",
              end: serviceEnd,
              scrub: 1,
            },
          });

          gsap.utils.toArray<HTMLElement>(".js-service-card").forEach((card) => {
            gsap.fromTo(
              card,
              { opacity: 0.74 },
              {
                opacity: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: card,
                  containerAnimation: serviceTween,
                  start: "left 78%",
                  end: "left 42%",
                  scrub: 1,
                },
              },
            );
          });
        }

        const projectTrack = root.querySelector<HTMLElement>(".js-projects-track");
        const projectViewport =
          root.querySelector<HTMLElement>(".js-projects-viewport");
        const projectProgress =
          root.querySelector<HTMLElement>(".js-project-progress");

        if (projectTrack && projectViewport) {
          const projectSlides = gsap.utils.toArray<HTMLElement>(
            ".js-project-slide",
            projectTrack,
          );
          const projectTravel = () =>
            Math.max(projectTrack.scrollWidth - projectViewport.clientWidth, 0);
          const projectStepCount = Math.max(projectSlides.length - 1, 1);
          const projectStep = () => {
            const firstSlide = projectSlides[0];
            if (!firstSlide) {
              return 0;
            }
            const computed = window.getComputedStyle(projectTrack);
            const gap =
              Number.parseFloat(computed.columnGap || computed.gap || "0") || 0;
            return firstSlide.offsetWidth + gap;
          };
          const xForPhase = (phase: number) => {
            const target = projectStep() * phase;
            return -Math.min(target, projectTravel());
          };
          const setProjectPhase = (phase: number) => {
            const safePhase = gsap.utils.clamp(0, projectStepCount, phase);
            gsap.set(projectTrack, { x: xForPhase(safePhase) });

            projectSlides.forEach((slide, slideIndex) => {
              const delta = slideIndex - safePhase;
              const proximity = gsap.utils.clamp(0, 1, 1 - Math.abs(delta));
              const isActive = Math.abs(delta) < 0.5;
              const activeLock = Math.abs(delta) < 0.34;

              slide.classList.toggle("is-active", isActive);

              gsap.set(slide, {
                y: activeLock ? 0 : (1 - proximity) * 18,
                scale: activeLock ? 1 : 0.94 + proximity * 0.06,
                rotateY: activeLock ? 0 : gsap.utils.clamp(-6, 6, delta * -6),
                opacity: 0.46 + proximity * 0.54,
                zIndex: Math.round(proximity * 100) + 1,
              });

              const copy = slide.querySelector<HTMLElement>(".project-slide-copy");
              if (copy) {
                gsap.set(copy, {
                  y: activeLock ? 0 : (1 - proximity) * 10,
                  opacity: 0.62 + proximity * 0.38,
                });
              }

              const imageShell = slide.querySelector<HTMLElement>(
                ".js-project-image-shell",
              );
              if (imageShell) {
                gsap.set(imageShell, {
                  yPercent: activeLock ? 0 : delta * 6,
                  scale: activeLock ? 1 : 1.05 - proximity * 0.05,
                });
              }
            });
          };

          setProjectPhase(0);

          const projectEnd = () => `+=${Math.max(window.innerHeight * 2.8, 2800)}`;

          ScrollTrigger.create({
            trigger: projectsScene,
            start: "top top+=104",
            end: projectEnd,
            pin: ".projects-pin",
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            fastScrollEnd: false,
            onRefresh: (self) => {
              setProjectPhase(self.progress * projectStepCount);
            },
            onUpdate: (self) => {
              setProjectPhase(self.progress * projectStepCount);

              if (projectProgress) {
                gsap.set(projectProgress, { scaleX: self.progress });
              }
            },
            snap: {
              snapTo: 1 / projectStepCount,
              directional: false,
              inertia: false,
              duration: { min: 0.2, max: 0.42 },
              delay: 0.02,
              ease: "power1.inOut",
            },
          });

          gsap.to(".js-projects-head", {
            yPercent: -10,
            opacity: 0.72,
            ease: "none",
            scrollTrigger: {
              trigger: projectsScene,
              start: "top top+=104",
              end: "+=360",
              scrub: 1,
            },
          });
        }
      });

      mm.add("(max-width: 900px)", () => {
        gsap.from(".js-service-card", {
          y: 34,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: servicesScene,
            start: "top 78%",
          },
        });

        gsap.from(".js-project-slide", {
          y: 36,
          opacity: 0,
          duration: 0.86,
          stagger: 0.16,
          ease: "power3.out",
          scrollTrigger: {
            trigger: projectsScene,
            start: "top 78%",
          },
        });
      });

      gsap.from(".js-reveal", {
        y: 26,
        opacity: 0,
        duration: 0.78,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".js-reveal-group",
          start: "top 84%",
        },
      });

      const navLinks = Array.from(
        root.querySelectorAll<HTMLAnchorElement>(".js-nav-link"),
      );
      const navLinksWrap = root.querySelector<HTMLElement>(".js-nav-menu");
      const navActivePill = root.querySelector<HTMLElement>(".js-nav-active-pill");
      const navTextTimelines = new Map<HTMLAnchorElement, gsap.core.Timeline>();
      let hoveredNavLink: HTMLAnchorElement | null = null;

      const moveNavPill = (target: HTMLAnchorElement, instant = false) => {
        if (!navLinksWrap || !navActivePill) {
          return;
        }

        const wrapRect = navLinksWrap.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();
        const x = targetRect.left - wrapRect.left;

        gsap.to(navActivePill, {
          x,
          width: targetRect.width,
          opacity: 1,
          duration: instant ? 0 : 0.38,
          ease: "power3.out",
          overwrite: true,
        });
      };

      const setActiveLink = (hash: string) => {
        let activeLink: HTMLAnchorElement | null = null;
        navLinks.forEach((link) => {
          const isActive = link.getAttribute("href") === hash;
          link.classList.toggle("is-active", isActive);
          const tl = navTextTimelines.get(link);
          if (tl) {
            if (isActive || hoveredNavLink === link) {
              tl.play();
            } else {
              tl.reverse();
            }
          }
          if (isActive) {
            activeLink = link;
          }
        });

        if (activeLink && !hoveredNavLink) {
          moveNavPill(activeLink);
        }
      };

      navLinks.forEach((link, index) => {
        const track = link.querySelector<HTMLElement>(".js-nav-link-track");

        if (track) {
          const tl = gsap.timeline({ paused: true, defaults: { ease: "power3.out" } });
          tl.to(track, { yPercent: -50, duration: 0.36 }, 0);
          navTextTimelines.set(link, tl);
          if (index === 0) {
            tl.progress(1);
          }
        }

        const enter = () => {
          hoveredNavLink = link;
          navTextTimelines.get(link)?.play();
          moveNavPill(link);
        };

        const leave = () => {
          hoveredNavLink = null;
          if (!link.classList.contains("is-active")) {
            navTextTimelines.get(link)?.reverse();
          }

          const activeLink =
            navLinks.find((navLink) => navLink.classList.contains("is-active")) ??
            navLinks[0];
          if (activeLink) {
            moveNavPill(activeLink);
          }
        };

        link.addEventListener("mouseenter", enter);
        link.addEventListener("mouseleave", leave);
        navHoverListeners.push({ link, enter, leave });
      });

      navLinks.forEach((link) => {
        const hash = link.getAttribute("href");
        if (!hash) {
          return;
        }

        const section = document.querySelector(hash);
        if (!(section instanceof HTMLElement)) {
          return;
        }

        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onToggle: (self) => {
            if (self.isActive) {
              setActiveLink(hash);
            }
          },
        });
      });

      const initialNavHash = window.location.hash;
      if (initialNavHash) {
        setActiveLink(initialNavHash);
      } else if (navLinks[0]) {
        navLinks[0].classList.add("is-active");
        moveNavPill(navLinks[0], true);
      }

      const navShell = root.querySelector<HTMLElement>(".js-nav-shell");
      if (navShell) {
        ScrollTrigger.create({
          start: 8,
          end: 240,
          onUpdate: (self) => {
            navShell.classList.toggle("nav-shell--scrolled", self.progress > 0.08);
          },
        });
      }

      handleNavResize = () => {
        const target =
          hoveredNavLink ??
          navLinks.find((link) => link.classList.contains("is-active")) ??
          navLinks[0];
        if (target) {
          moveNavPill(target, true);
        }
      };
      window.addEventListener("resize", handleNavResize);
      window.setTimeout(() => handleNavResize?.(), 24);
    }, root);

    const navLinks = Array.from(
      root.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'),
    ).filter((link) => {
      const href = link.getAttribute("href");
      return href !== null && href !== "#";
    });

    const scrollToHash = (hash: string, animate = true) => {
      const target = document.querySelector(hash);
      if (!(target instanceof HTMLElement)) {
        return;
      }

      const navShell = root.querySelector(".site-nav");
      const navOffset =
        navShell instanceof HTMLElement ? navShell.offsetHeight + 22 : 120;
      const currentY = window.scrollY;
      const y = target.getBoundingClientRect().top + currentY - navOffset;

      if (animate) {
        gsap.to(window, {
          duration: 1,
          ease: "power3.inOut",
          scrollTo: { y, autoKill: true },
        });
      } else {
        window.scrollTo({ top: y });
      }
    };

    const handleAnchorClick = (event: Event) => {
      const link = event.currentTarget as HTMLAnchorElement;
      const hash = link.getAttribute("href");
      if (!hash || !hash.startsWith("#")) {
        return;
      }

      event.preventDefault();
      scrollToHash(hash, true);
      window.history.replaceState(null, "", hash);
    };

    navLinks.forEach((link) => link.addEventListener("click", handleAnchorClick));

    const initialHash = window.location.hash;
    if (initialHash) {
      window.setTimeout(() => {
        scrollToHash(initialHash, false);
        ScrollTrigger.refresh();
      }, 100);
    }

    let handleMove: ((event: PointerEvent) => void) | null = null;
    let resetMove: (() => void) | null = null;

    if (!reduceMotion) {
      handleMove = (event: PointerEvent) => {
        const rect = heroVisual.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;

        gsap.to(".js-depth", {
          x: (_, target) => x * Number(target.getAttribute("data-depth")),
          y: (_, target) => y * Number(target.getAttribute("data-depth")) * 0.7,
          rotateY: x * 5,
          rotateX: y * -3,
          duration: 0.8,
          ease: "power3.out",
          overwrite: true,
        });
      };

      resetMove = () => {
        gsap.to(".js-depth", {
          x: 0,
          y: 0,
          rotateY: 0,
          rotateX: 0,
          duration: 0.95,
          ease: "power3.out",
          overwrite: true,
        });
      };

      heroVisual.addEventListener("pointermove", handleMove);
      heroVisual.addEventListener("pointerleave", resetMove);
    }

    window.setTimeout(() => ScrollTrigger.refresh(), 240);

    return () => {
      navLinks.forEach((link) =>
        link.removeEventListener("click", handleAnchorClick),
      );
      navHoverListeners.forEach(({ link, enter, leave }) => {
        link.removeEventListener("mouseenter", enter);
        link.removeEventListener("mouseleave", leave);
      });
      if (handleNavResize) {
        window.removeEventListener("resize", handleNavResize);
      }
      if (dynamicPhraseInterval) {
        window.clearInterval(dynamicPhraseInterval);
      }
      if (handleMove) {
        heroVisual.removeEventListener("pointermove", handleMove);
      }
      if (resetMove) {
        heroVisual.removeEventListener("pointerleave", resetMove);
      }

      mm.revert();
      ctx.revert();
      splitInstances.forEach((split) => split.revert());
    };
  }, []);

  return (
    <div ref={rootRef} className="premium-shell">
      <LandingNav />

      <main>
            <section id="hero" ref={heroSceneRef} className="hero-scene">
              <div className="hero-pin">
                <div className="hero-backdrop-grid" />
                <div className="hero-aurora js-hero-aurora" />

                <div className="page-wrap hero-layout">
                  <div className="hero-copy-wrap js-hero-copy-wrap">
                    <span className="hero-kicker js-hero-kicker">
                      {siteContent.hero.kicker}
                    </span>
                    <div className="hero-headline">
                      {siteContent.hero.lines.map((line) => (
                        <div key={line} className="hero-line-mask">
                          <h1 className="hero-line js-hero-line">{line}</h1>
                        </div>
                      ))}
                    </div>
                    <p className="hero-copy js-hero-copy">{siteContent.hero.copy}</p>
                    <p className="hero-dynamic">
                      <span>Moxera</span>
                      <strong className="js-dynamic-phrase">
                        {siteContent.hero.dynamicPhrases[dynamicPhraseIndex]}
                      </strong>
                    </p>
                    <div className="hero-actions js-hero-actions">
                      {siteContent.hero.actions.map((action) => (
                        <a
                          key={action.label}
                          className={
                            action.variant === "primary"
                              ? "button-primary"
                              : "button-secondary"
                          }
                          href={action.href}
                        >
                          {action.label}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div ref={heroVisualRef} className="hero-visual">
                    <div className="logo-stage js-depth" data-depth="14">
                      <svg
                        className="hero-orbits"
                        viewBox="0 0 1000 1000"
                        aria-hidden="true"
                      >
                        <circle
                          className="js-draw-orbit"
                          cx="500"
                          cy="500"
                          r="430"
                        />
                        <circle
                          className="js-draw-orbit"
                          cx="500"
                          cy="500"
                          r="330"
                        />
                        <circle
                          className="js-draw-orbit"
                          cx="500"
                          cy="500"
                          r="220"
                        />
                      </svg>

                      {siteContent.hero.stageNotes.map((note) => (
                        <article
                          key={note.title}
                          className={`floating-chip ${note.className} js-chip js-${note.className} js-float js-depth`}
                          data-depth={note.depth}
                        >
                          <strong>{note.title}</strong>
                          <span>{note.body}</span>
                        </article>
                      ))}

                      <div className="logo-card js-logo-card js-depth" data-depth="20">
                        <div className="logo-card-surface">
                          <div className="logo-stage-icon js-logo-icon-wrap">
                            <MoxeraMark className="logo-stage-icon-svg" />
                          </div>
                          <div className="logo-stage-wordmark js-logo-word-wrap">
                            <MoxeraWordmark className="logo-stage-wordmark-svg" />
                          </div>
                          <span className="logo-bar-accent js-logo-accent" />
                        </div>
                        <div className="logo-card-meta">
                          <span>AI / automation / web</span>
                          <strong>System, not template</strong>
                        </div>
                      </div>

                      <div className="stage-footer js-stage-footer">
                        {siteContent.hero.footerStats.map((item) => (
                          <div key={item.label} className="stage-footer-item">
                            <span>{item.label}</span>
                            <strong>{item.value}</strong>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="services" ref={servicesSceneRef} className="services-scene">
              <div className="services-pin">
                <div className="page-wrap services-layout">
                  <div className="services-intro js-services-intro">
                    <span className="section-kicker">{siteContent.services.kicker}</span>
                    <h2 className="section-title js-section-title">
                      {siteContent.services.title}
                    </h2>
                    <p className="section-copy">{siteContent.services.copy}</p>
                  </div>

                  <div className="services-track-viewport js-services-viewport">
                    <div className="services-track js-services-track">
                      {siteContent.services.items.map((service) => (
                        <article
                          key={service.code}
                          className="service-card js-service-card"
                        >
                          <span className="service-code">{service.code}</span>
                          <h3>{service.title}</h3>
                          <p>{service.body}</p>
                          <div className="service-foot">
                            <span className="service-meta">{service.meta}</span>
                            <small>{service.accent}</small>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="projects" ref={projectsSceneRef} className="projects-scene">
              <div className="projects-pin">
                <div className="page-wrap">
                  <div className="section-head projects-head js-projects-head">
                    <div>
                      <span className="section-kicker">{siteContent.projects.kicker}</span>
                      <h2 className="section-title js-section-title">
                        {siteContent.projects.title}
                      </h2>
                    </div>
                    <p className="section-copy">{siteContent.projects.copy}</p>
                  </div>

                  <div className="projects-gallery-viewport js-projects-viewport">
                    <div className="projects-gallery-track js-projects-track">
                      {siteContent.projects.items.map((project) => (
                        <article key={project.label} className="project-slide js-project-slide">
                          <div className="project-slide-copy">
                            <span className="project-label">{project.label}</span>
                            <h3>{project.title}</h3>
                            <p>{project.body}</p>
                            <p className="project-summary">{project.summary}</p>
                            <div className="project-metrics">
                              {project.metrics.map((metric) => (
                                <small key={metric}>{metric}</small>
                              ))}
                            </div>
                          </div>
                          <div className="project-slide-media">
                            <div className="project-image-shell js-project-image-shell">
                              <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="project-image"
                                sizes="(max-width: 900px) 100vw, 48vw"
                              />
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>

                  <div className="project-progress-rail">
                    <span className="project-progress-fill js-project-progress" />
                  </div>
                </div>
              </div>
            </section>

            <section id="protocol" className="protocol-section">
              <div className="page-wrap protocol-layout js-reveal-group">
                <div className="protocol-copy">
                  <span className="section-kicker">{siteContent.protocol.kicker}</span>
                  <h2 className="section-title js-section-title">
                    {siteContent.protocol.title}
                  </h2>
                  <p className="section-copy">{siteContent.protocol.copy}</p>
                </div>
                <div className="protocol-grid">
                  {siteContent.protocol.items.map((item) => (
                    <article key={item.label} className="protocol-card js-reveal">
                      <span>{item.label}</span>
                      <strong>{item.title}</strong>
                      <p>{item.body}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section id="contact" className="contact-section">
              <div className="page-wrap contact-band">
                <div>
                  <span className="section-kicker">{siteContent.contact.kicker}</span>
                  <h2 className="section-title js-section-title">
                    {siteContent.contact.title}
                  </h2>
                </div>
                <a
                  className="button-primary"
                  href={`mailto:${siteContent.contact.email}?subject=${encodeURIComponent(
                    siteContent.contact.subject,
                  )}`}
                >
                  {siteContent.contact.email}
                </a>
              </div>
            </section>
      </main>
    </div>
  );
}
