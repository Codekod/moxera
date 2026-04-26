import { AboutSection } from "@/components/sections/about-section";
import { WhyMoxeraSection } from "@/components/sections/why-moxera-section";
import { PageHero } from "@/components/ui/page-hero";

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
