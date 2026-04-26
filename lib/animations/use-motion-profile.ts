"use client";

import { useEffect, useMemo, useState } from "react";

type MotionTier = "full" | "balanced" | "lite";

type MotionProfile = {
  isMobile: boolean;
  shouldReduceMotion: boolean;
  motionTier: MotionTier;
};

function getMotionProfile(): MotionProfile {
  if (typeof window === "undefined") {
    return { isMobile: false, shouldReduceMotion: false, motionTier: "full" };
  }

  const isMobile = window.innerWidth < 768;
  const shouldReduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const navWithMemory = navigator as Navigator & { deviceMemory?: number };
  const deviceMemory = navWithMemory.deviceMemory ?? 8;
  const cores = navigator.hardwareConcurrency ?? 8;

  const isLowPowerDevice = deviceMemory <= 3 || cores <= 4;
  const motionTier: MotionTier = shouldReduceMotion ? "lite" : isLowPowerDevice ? "balanced" : "full";

  return { isMobile, shouldReduceMotion, motionTier };
}

export function useMotionProfile() {
  const [profile, setProfile] = useState<MotionProfile>(() => getMotionProfile());

  useEffect(() => {
    let rafId = 0;
    const updateProfile = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => setProfile(getMotionProfile()));
    };

    updateProfile();
    window.addEventListener("resize", updateProfile, { passive: true });
    window.addEventListener("orientationchange", updateProfile, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", updateProfile);
      window.removeEventListener("orientationchange", updateProfile);
    };
  }, []);

  return useMemo(() => profile, [profile]);
}
