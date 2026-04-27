import { AboutSection } from "@/components/sections/about-section";
import { WhyMoxeraSection } from "@/components/sections/why-moxera-section";
import { PageHero } from "@/components/ui/page-hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Moxera, web, mobil, SaaS, yapay zeka ve otomasyon projelerinde strateji, tasarım ve uygulamayı birleştiren butik teknoloji partneridir.",
  alternates: {
    canonical: "/hakkimizda"
  }
};

export default function HakkimizdaPage() {
  return (
    <>
      <PageHero
        kicker="Hakkımızda"
        title="Net kapsam, rafine tasarım ve çalışan dijital sistem odağı"
        description="Moxera; web sitesi, mobil uygulama, SaaS, yapay zeka ve otomasyon projelerinde hedefi netleştiren, darboğazı çözen ve sürdürülebilir sistemi teslim eden bir teknoloji partneri olarak çalışır."
      />
      <AboutSection />
      <WhyMoxeraSection />
    </>
  );
}
