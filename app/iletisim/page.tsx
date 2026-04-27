import { ContactSection } from "@/components/sections/contact-section";
import { PageHero } from "@/components/ui/page-hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Web sitesi, mobil uygulama, SaaS, yapay zeka iş akışı veya otomasyon projeniz için Moxera ile iletişime geçin.",
  alternates: {
    canonical: "/iletisim"
  }
};

export default function IletisimPage() {
  return (
    <>
      <PageHero
        kicker="İletişim"
        title="Projenizi net kapsam ve doğru dijital mimariyle başlatalım"
        description="Web, mobil, SaaS, AI iş akışı veya otomasyon ihtiyacınızı netleştirmek için hedefinizi, mevcut darboğazınızı ve ilk uygulanabilir adımı birlikte değerlendirelim."
      />
      <ContactSection />
    </>
  );
}
