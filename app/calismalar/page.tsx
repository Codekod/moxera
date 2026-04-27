import { SelectedWorkSection } from "@/components/sections/selected-work-section";
import { PageHero } from "@/components/ui/page-hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Çalışmalar",
  description:
    "Moxera'nın web sitesi, SaaS, mobil uygulama, yapay zeka iş akışı ve otomasyon projelerinde kullandığı ürün ve sistem yaklaşımını inceleyin.",
  alternates: {
    canonical: "/calismalar"
  }
};

export default function CalismalarPage() {
  return (
    <>
      <PageHero
        kicker="Çalışmalar"
        title="Dijital ürün, SaaS ve otomasyon projelerinde sistem odaklı çalışma yaklaşımı"
        description="Burada amaç kalabalık bir portfolyo sunmak değil; Moxera'nın projeye nasıl baktığını, hangi katmanları kurduğunu ve işi nasıl yayına hazır bir sisteme dönüştürdüğünü göstermektir."
      />
      <SelectedWorkSection />
    </>
  );
}
