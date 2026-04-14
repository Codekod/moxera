import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32">
      <Container className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
        <SectionHeading
          kicker="Hakkımızda"
          title="1 Nisan 2026'dan bu yana butik teknoloji partnerliği"
          description="Moxera, tek kişilik ama yüksek odaklı bir yapı olarak; müşteriyi dinleyen, darboğazı tespit eden ve çalışan sistemi teslim eden bir iş modeliyle ilerler."
        />
        <div className="space-y-5 rounded-3xl border border-white/10 bg-moxera-bg-soft p-8 text-moxera-text-soft">
          <p>Ankara merkezli çalışma modeliyle doğrudan iletişim, hızlı karar ve yüksek özen sağlar.</p>
          <p>Web ve mobil ürünler, AI katmanları ve otomasyon sistemleri tek bir stratejik çatı altında planlanır.</p>
          <p>Hedef, sadece dijital varlık üretmek değil; görünürlük, prestij ve operasyonel verim oluşturmaktır.</p>
        </div>
      </Container>
    </section>
  );
}
