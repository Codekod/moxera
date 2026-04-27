import { Container } from "@/components/ui/container";
import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/lib/data/site-content";

const footerSocials = [
  { label: "Instagram", href: "https://www.instagram.com/moxera", icon: <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4.2" /><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" /></svg> },
  { label: "X", href: "https://x.com/moxera", icon: <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 4L20 20M20 4L4 20" /></svg> },
  { label: "Facebook", href: "https://www.facebook.com/moxera", icon: <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M14.5 7H16V4h-1.7c-2.9 0-4.8 1.8-4.8 5V11H7v3h2.5v6h3.2v-6H16l.5-3h-3.8V9.1c0-1.3.5-2.1 1.8-2.1Z" /></svg> },
  { label: "WhatsApp", href: "https://wa.me/905339697806", icon: <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 21a8.7 8.7 0 0 0 4.4-1.2L21 21l-1.3-4.2A8.9 8.9 0 1 0 12 21Z" /><path d="M9 8.8c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .6.5.2.4.7 1.6.8 1.7.1.2.1.4 0 .6-.1.2-.2.4-.4.6-.2.2-.3.3-.1.6.2.2.7 1.2 1.8 1.9 1.4.9 2.5 1.1 2.9 1.2.3.1.5 0 .6-.2.2-.2.8-1 .9-1.4.2-.3.4-.3.6-.2.2.1 1.5.7 1.7.9.2.1.4.2.4.3s0 .9-.5 1.7c-.5.8-1.8 1.5-2.4 1.6-.6.1-1.3.2-2.2-.1-.5-.2-1.1-.4-1.8-.8-3.1-1.7-4.9-4.8-5.1-5.1-.2-.3-1.3-1.8-1.3-3.4 0-1.7.9-2.5 1.2-2.8Z" /></svg> }
];

export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/10 py-16 md:py-20">
      <div className="pointer-events-none absolute left-[10%] top-6 h-44 w-44 rounded-full bg-moxera-highlight/10 blur-[92px]" />
      <div className="pointer-events-none absolute right-[8%] bottom-10 h-52 w-52 rounded-full bg-[#203468]/30 blur-[100px]" />
      <Container className="space-y-8 md:space-y-10">
        <div className="scene-shell rounded-[2rem] p-6 md:p-9">
          <div className="grid gap-8 md:grid-cols-[1.6fr_0.78fr_0.95fr] md:items-start">
            <div className="space-y-5">
              <div className="relative h-[3.9rem] w-[15.75rem] md:h-[5rem] md:w-[21rem]">
                <Image src="/brand/moxera-logo-light.png" alt="Moxera" fill sizes="(max-width: 768px) 252px, 336px" className="object-contain object-left" />
              </div>
              <p className="max-w-[42ch] text-[14px] leading-relaxed text-moxera-text-soft md:text-[15px] md:leading-[1.85]">
                Markanızın dijital ihtiyaçlarını çalışan, ölçülebilir ve sürdürülebilir sistemlere dönüştürüyoruz. Web, mobil, SaaS, yapay zeka ve otomasyon çözümlerini tek stratejik çatı altında geliştiriyoruz.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center justify-center rounded-full border border-moxera-highlight/45 bg-moxera-highlight/12 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-moxera-highlight transition hover:-translate-y-0.5 hover:bg-moxera-highlight/20"
                >
                  Proje Başlat
                </Link>
                <Link
                  href="/calismalar"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-moxera-text-soft transition hover:-translate-y-0.5 hover:border-moxera-highlight/40 hover:text-moxera-text"
                >
                  Çalışmaları İncele
                </Link>
              </div>
            </div>
            <div className="space-y-3.5 md:border-l md:border-white/8 md:pl-8">
              <p className="text-xs uppercase tracking-[0.17em] text-moxera-highlight">Gezinme</p>
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="block text-sm text-moxera-text-soft transition hover:translate-x-0.5 hover:text-moxera-text">
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="space-y-3.5 md:border-l md:border-white/8 md:pl-8">
              <p className="text-xs uppercase tracking-[0.17em] text-moxera-highlight">İletişim</p>
              <p className="text-sm text-moxera-text-soft">meliheken@moxera.com.tr</p>
              <p className="text-sm text-moxera-text-soft">0 533 969 78 06</p>
              <p className="text-sm uppercase tracking-[0.16em] text-moxera-text-soft">Ankara</p>
              <div className="flex flex-wrap items-center gap-2.5 pb-1 pt-2.5 text-moxera-text-soft">
                {footerSocials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/30 leading-none shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.04] hover:border-moxera-highlight/45 hover:text-moxera-highlight hover:shadow-[0_0_16px_rgba(102,230,218,0.22)]"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="cinematic-divider my-7 opacity-80" />
          <div className="flex flex-col gap-3 text-[12px] tracking-[0.05em] text-moxera-text-soft/95 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Moxera. Tüm hakları saklıdır.</p>
            <p className="text-moxera-text-soft/90">Web/Mobil · SaaS · AI İş Akışı · Otomasyon</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
