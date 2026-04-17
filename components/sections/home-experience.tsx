"use client";

import { useLenis } from "@/lib/animations/use-lenis";
import { useMotionProfile } from "@/lib/animations/use-motion-profile";
import { CinematicBackground } from "@/components/layout/cinematic-background";
import { HeroSection } from "@/components/sections/hero-section";
import { TransformationSection } from "@/components/sections/transformation-section";
import { CapabilitiesSection } from "@/components/sections/capabilities-section";
import { SignatureTransitionSection } from "@/components/sections/signature-transition-section";
import { SelectedWorkSection } from "@/components/sections/selected-work-section";
import { WhyMoxeraSection } from "@/components/sections/why-moxera-section";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";

export function HomeExperience() {
  const { motionTier } = useMotionProfile();
  useLenis(motionTier === "full");

  return (
    <div className="relative">
      <CinematicBackground />
      <div className="relative z-10">
        <HeroSection />
        <TransformationSection />
        <CapabilitiesSection />
        <SignatureTransitionSection />
        <SelectedWorkSection />
        <WhyMoxeraSection />
        <AboutSection />
        <ContactSection />
      </div>
    </div>
  );
}
