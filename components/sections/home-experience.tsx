"use client";

import { useLenis } from "@/lib/animations/use-lenis";
import { HeroSection } from "@/components/sections/hero-section";
import { TransformationSection } from "@/components/sections/transformation-section";
import { CapabilitiesSection } from "@/components/sections/capabilities-section";
import { SelectedWorkSection } from "@/components/sections/selected-work-section";
import { WhyMoxeraSection } from "@/components/sections/why-moxera-section";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";

export function HomeExperience() {
  useLenis();

  return (
    <>
      <HeroSection />
      <TransformationSection />
      <CapabilitiesSection />
      <SelectedWorkSection />
      <WhyMoxeraSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
