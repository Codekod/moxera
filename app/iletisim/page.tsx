import { ContactSection } from "@/components/sections/contact-section";
import { PageHero } from "@/components/ui/page-hero";

export default function IletisimPage() {
  return (
    <>
      <PageHero
        kicker="İletişim"
        title="Projenizi doğru kapsam, doğru öncelik ve doğru sistemle başlatalım"
        description="Web, mobil, SaaS, AI iş akışı veya otomasyon ihtiyacınızı netleştirmek için hedefinizi, mevcut darboğazınızı ve ilk uygulanabilir adımı birlikte konuşalım."
      />
      <ContactSection />
    </>
  );
}
