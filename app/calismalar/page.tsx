import { SelectedWorkSection } from "@/components/sections/selected-work-section";
import { PageHero } from "@/components/ui/page-hero";

export default function CalismalarPage() {
  return (
    <>
      <PageHero
        kicker="Çalışmalar"
        title="Dijital ürün, SaaS ve otomasyon projeleri için seçili çalışma yaklaşımı"
        description="Burada amaç portfolyo kalabalığı değil; Moxera'nın projeye nasıl baktığını, hangi sistem katmanlarını kurduğunu ve işi nasıl yayına hazır hale getirdiğini net göstermektir."
      />
      <SelectedWorkSection />
    </>
  );
}
