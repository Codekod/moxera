import { Container } from "@/components/ui/container";
import Link from "next/link";
import { navItems } from "@/lib/data/site-content";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/10 py-16">
      <Container className="space-y-10">
        <div className="grid gap-10 md:grid-cols-[1.25fr_0.75fr_0.75fr]">
          <div className="space-y-4">
            <p className="text-base font-semibold tracking-[0.18em] text-moxera-text">MOXERA</p>
            <p className="max-w-md text-sm leading-relaxed text-moxera-text-soft">
              İhtiyaçlarınızı, çalışan dijital sistemlere dönüştürüyoruz. Ankara merkezli butik yaklaşım ile web, mobil, SaaS, yapay zeka ve otomasyon çözümleri geliştiriyoruz.
            </p>
          </div>
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-moxera-highlight">Gezinme</p>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="block text-sm text-moxera-text-soft transition hover:text-moxera-text">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-moxera-highlight">İletişim</p>
            <p className="text-sm text-moxera-text-soft">meliheken@moxera.com.tr</p>
            <p className="text-sm text-moxera-text-soft">0 533 969 78 06</p>
            <p className="text-sm text-moxera-text-soft">Ankara merkez</p>
            <div className="flex items-center gap-3 pt-1 text-moxera-text-soft">
              <span className="inline-block h-8 w-8 rounded-full border border-white/15 bg-black/20" />
              <span className="inline-block h-8 w-8 rounded-full border border-white/15 bg-black/20" />
              <span className="inline-block h-8 w-8 rounded-full border border-white/15 bg-black/20" />
              <span className="inline-block h-8 w-8 rounded-full border border-white/15 bg-black/20" />
            </div>
          </div>
        </div>
        <div className="cinematic-divider" />
        <div className="flex flex-col gap-3 text-xs tracking-[0.06em] text-moxera-text-soft md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Moxera. Tüm hakları saklıdır.</p>
          <p>Butik teknoloji partnerliği · Web/Mobil · SaaS · AI · Otomasyon</p>
        </div>
      </Container>
    </footer>
  );
}
