"use client";

import { gsap } from "@/lib/animations/gsap";

type RevealConfig = {
  target: gsap.TweenTarget;
  trigger: Element | string;
  fromY?: number;
  duration?: number;
  start?: string;
  ease?: string;
  delay?: number;
};

export function revealOnScroll({
  target,
  trigger,
  fromY = 20,
  duration = 0.6,
  start = "top 84%",
  ease = "power2.out",
  delay = 0
}: RevealConfig) {
  return gsap.fromTo(
    target,
    { opacity: 0, y: fromY },
    {
      opacity: 1,
      y: 0,
      duration,
      ease,
      delay,
      scrollTrigger: { trigger, start }
    }
  );
}

type BatchRevealConfig = {
  targets: gsap.TweenTarget;
  trigger: Element | string;
  fromY?: number;
  stagger?: number;
  duration?: number;
  start?: string;
};

export function staggerRevealOnScroll({
  targets,
  trigger,
  fromY = 16,
  stagger = 0.06,
  duration = 0.48,
  start = "top 88%"
}: BatchRevealConfig) {
  return gsap.fromTo(
    targets,
    { opacity: 0, y: fromY, scale: 0.97 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration,
      stagger,
      ease: "power2.out",
      scrollTrigger: { trigger, start }
    }
  );
}
