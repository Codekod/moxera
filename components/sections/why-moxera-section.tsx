import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { whyMoxera } from "@/lib/data/site-content";

export function WhyMoxeraSection() {
  return (
    <section className="py-24 md:py-32">
      <Container className="space-y-12">
        <SectionHeading
          kicker="Neden Moxera"
          title="Butik yapı, yüksek odak, çalışan sonuçlar"
          description="Projelere şablon değil sistem olarak yaklaşır, kararlarımızı estetikle değil iş çıktısıyla doğrularız."
        />
        <ul className="grid gap-5 md:grid-cols-2">
          {whyMoxera.map((item) => (
            <li key={item} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-moxera-text-soft">
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
