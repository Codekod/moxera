import { Container } from "@/components/ui/container";
import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/lib/data/site-content";

const footerSocials = [
  { label: "Instagram", icon: <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4.2" /><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" /></svg> },
  { label: "X", icon: <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 4L20 20M20 4L4 20" /></svg> },
  { label: "Facebook", icon: <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M14.5 7H16V4h-1.7c-2.9 0-4.8 1.8-4.8 5V11H7v3h2.5v6h3.2v-6H16l.5-3h-3.8V9.1c0-1.3.5-2.1 1.8-2.1Z" /></svg> },
  { label: "WhatsApp", icon: <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 21a8.7 8.7 0 0 0 4.4-1.2L21 21l-1.3-4.2A8.9 8.9 0 1 0 12 21Z" /><path d="M9 8.8c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .6.5.2.4.7 1.6.8 1.7.1.2.1.4 0 .6-.1.2-.2.4-.4.6-.2.2-.3.3-.1.6.2.2.7 1.2 1.8 1.9 1.4.9 2.5 1.1 2.9 1.2.3.1.5 0 .6-.2.2-.2.8-1 .9-1.4.2-.3.4-.3.6-.2.2.1 1.5.7 1.7.9.2.1.4.2.4.3s0 .9-.5 1.7c-.5.8-1.8 1.5-2.4 1.6-.6.1-1.3.2-2.2-.1-.5-.2-1.1-.4-1.8-.8-3.1-1.7-4.9-4.8-5.1-5.1-.2-.3-1.3-1.8-1.3-3.4 0-1.7.9-2.5 1.2-2.8Z" /></svg> }
];

export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/10 py-16">
      <Container className="space-y-10">
        <div className="grid gap-10 md:grid-cols-[1.35fr_0.75fr_0.75fr]">
          <div className="space-y-5">
            <div className="inline-flex max-w-full rounded-2xl border border-white/10 bg-black/15 px-6 py-5 md:px-7 md:py-6">
              <div className="relative h-[3.35rem] w-[15rem] md:h-[3.75rem] md:w-[17.5rem]">
                <Image
                  src="/brand/moxera-logo-light.png"
                  alt="Moxera"
                  fill
                  sizes="(max-width: 768px) 240px, 280px"
                  className="object-contain object-left"
                />
              </div>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-moxera-text-soft md:text-[15px]">
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
            <div className="flex flex-wrap items-center gap-3 pb-1 pt-3 text-moxera-text-soft">
              {footerSocials.map((social) => (
                <a key={social.label} href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/25 leading-none shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition hover:-translate-y-0.5 hover:border-moxera-highlight/45 hover:text-moxera-highlight" aria-label={social.label}>
                  {social.icon}
                </a>
              ))}
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
