import { AboutSection } from "@/components/sections/about-section";
import { WhyMoxeraSection } from "@/components/sections/why-moxera-section";
import { PageHero } from "@/components/ui/page-hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Moxera, Ankara merkezli butik teknoloji partneri olarak web, mobil, SaaS, yapay zeka ve otomasyon projeleri geliştirir.",
  alternates: {
    canonical: "/hakkimizda"
  }
};

export default function HakkimizdaPage() {
  return (
    <>
      <PageHero
        kicker="Hakkımızda"
        title="Butik teknoloji partnerliği, net kapsam ve yüksek uygulama odağı"
        description="Moxera; web sitesi, mobil uygulama, SaaS, yapay zeka ve otomasyon projelerinde müşteriyi dinleyen, darboğazı tespit eden ve çalışan sistemi teslim eden bir yapı olarak çalışır."
      />
      <AboutSection />
      <WhyMoxeraSection />
    </>
  );
}
