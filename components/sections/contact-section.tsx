 "use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { gsap, useGsapPlugin } from "@/lib/animations/gsap";

const socialIcons = [
  {
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
      </svg>
    )
  },
  {
    label: "X",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 4L20 20M20 4L4 20" />
      </svg>
    )
  },
  {
    label: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M14.5 7H16V4h-1.7c-2.9 0-4.8 1.8-4.8 5V11H7v3h2.5v6h3.2v-6H16l.5-3h-3.8V9.1c0-1.3.5-2.1 1.8-2.1Z" />
      </svg>
    )
  },
  {
    label: "WhatsApp",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 21a8.7 8.7 0 0 0 4.4-1.2L21 21l-1.3-4.2A8.9 8.9 0 1 0 12 21Z" />
        <path d="M9 8.8c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .6.5.2.4.7 1.6.8 1.7.1.2.1.4 0 .6-.1.2-.2.4-.4.6-.2.2-.3.3-.1.6.2.2.7 1.2 1.8 1.9 1.4.9 2.5 1.1 2.9 1.2.3.1.5 0 .6-.2.2-.2.8-1 .9-1.4.2-.3.4-.3.6-.2.2.1 1.5.7 1.7.9.2.1.4.2.4.3s0 .9-.5 1.7c-.5.8-1.8 1.5-2.4 1.6-.6.1-1.3.2-2.2-.1-.5-.2-1.1-.4-1.8-.8-3.1-1.7-4.9-4.8-5.1-5.1-.2-.3-1.3-1.8-1.3-3.4 0-1.7.9-2.5 1.2-2.8Z" />
      </svg>
    )
  }
];

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<"success" | "error" | null>(null);
  useGsapPlugin();

  useEffect(() => {
    if (!sectionRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.innerWidth < 768) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".contact-shell", { opacity: 0.6, scale: 0.98 }, { opacity: 1, scale: 1, duration: 1, scrollTrigger: { trigger: sectionRef.current, start: "top 75%" } });
      gsap.fromTo(".contact-flow", { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 2.6, ease: "power2.out", scrollTrigger: { trigger: sectionRef.current, start: "top 82%" } });
      gsap.to(".contact-pulse", { scale: 1.22, opacity: 0.35, repeat: -1, yoyo: true, duration: 1.8, ease: "sine.inOut" });
      gsap.to(".contact-submit", { boxShadow: "0 0 0 0 rgba(102,230,218,0), 0 0 28px 4px rgba(46,211,198,0.12)", repeat: -1, yoyo: true, duration: 2.7, ease: "sine.inOut" });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!message) return;
    const timeoutId = window.setTimeout(() => {
      setMessage(null);
      setMessageType(null);
    }, 4200);
    return () => window.clearTimeout(timeoutId);
  }, [message]);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = {
      fullName: String(formData.get("fullName") ?? ""),
      companyName: String(formData.get("companyName") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      email: String(formData.get("email") ?? ""),
      details: String(formData.get("details") ?? ""),
      website: String(formData.get("website") ?? "")
    };

    if (!payload.fullName || !payload.email || !payload.details) {
      setMessage("Lütfen ad soyad, e-posta ve proje detayı alanlarını doldurun.");
      setMessageType("error");
      return;
    }

    setIsSending(true);
    setMessage(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = (await response.json()) as { message?: string };
      setMessage(data.message ?? "Mesajınız alındı. En kısa sürede dönüş sağlayacağız.");
      setMessageType(response.ok ? "success" : "error");
      if (response.ok) event.currentTarget.reset();
    } catch {
      setMessage("Bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
      setMessageType("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 md:py-32">
      <svg className="pointer-events-none absolute inset-0 mx-auto h-full w-full max-w-6xl opacity-50" viewBox="0 0 1200 540" fill="none" aria-hidden="true">
        <path
          className="contact-flow"
          d="M40 360C230 260 360 230 520 300C650 356 760 356 930 260C1000 218 1060 188 1160 210"
          stroke="url(#contactTrail)"
          strokeWidth="2"
          pathLength="1"
          strokeDasharray="1"
          strokeDashoffset="1"
        />
        <defs>
          <linearGradient id="contactTrail" x1="40" y1="280" x2="1160" y2="210" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1D2A57" />
            <stop offset="0.55" stopColor="#2ED3C6" />
            <stop offset="1" stopColor="#66E6DA" />
          </linearGradient>
        </defs>
      </svg>
      <Container className="contact-shell scene-shell relative grid gap-10 rounded-3xl p-8 md:grid-cols-[1fr_1.1fr] md:p-10">
        <div className="space-y-8">
          <SectionHeading
            kicker="İletişim"
            title="Projenizi birlikte netleştirelim"
            description="Sıradan bir form yerine, ihtiyaçları sistem perspektifinden konuştuğumuz güçlü bir başlangıç noktası."
          />
          <div className="space-y-3 rounded-2xl border border-white/10 bg-black/20 p-5 text-sm text-moxera-text-soft">
            <p className="text-[11px] uppercase tracking-[0.2em] text-moxera-highlight">Doğrudan İletişim</p>
            <p>meliheken@moxera.com.tr</p>
            <p>0 533 969 78 06</p>
            <p>Ankara merkez</p>
          </div>
          <div className="flex flex-wrap gap-3 pt-1">
            {socialIcons.map((social) => (
              <a key={social.label} href="#" className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-3 py-2 text-xs tracking-[0.1em] text-moxera-text-soft transition hover:border-moxera-highlight/45 hover:text-moxera-highlight">
                {social.icon}
                {social.label}
              </a>
            ))}
          </div>
        </div>
        <form className="grid gap-4 rounded-2xl border border-white/10 bg-black/20 p-6" onSubmit={onSubmit} aria-label="Proje iletişim formu">
          <input name="fullName" required className="premium-focus rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-moxera-text outline-none" placeholder="Ad Soyad" />
          <input name="companyName" className="premium-focus rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-moxera-text outline-none" placeholder="Firma Adı" />
          <input name="phone" className="premium-focus rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-moxera-text outline-none" placeholder="Telefon" />
          <input name="email" type="email" required className="premium-focus rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-moxera-text outline-none" placeholder="E-posta" />
          <input
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />
          <textarea name="details" required className="premium-focus min-h-28 rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-moxera-text outline-none" placeholder="İhtiyaç / proje detayı" />
          <div className="cinematic-divider my-1" />
          <button type="submit" disabled={isSending} className="contact-submit rounded-full bg-moxera-accent px-6 py-3 text-sm font-semibold text-moxera-bg transition duration-300 hover:-translate-y-0.5 hover:scale-[1.015] hover:bg-moxera-highlight active:translate-y-[1px] disabled:cursor-not-allowed disabled:opacity-70">
            {isSending ? "Gönderiliyor..." : "Proje konuşalım"}
          </button>
        </form>
        {message ? (
          <div
            role="status"
            className={`absolute bottom-5 right-5 max-w-xs rounded-xl border px-4 py-3 text-sm shadow-cinematic ${
              messageType === "success"
                ? "border-emerald-400/40 bg-emerald-500/10 text-emerald-100"
                : "border-rose-400/40 bg-rose-500/10 text-rose-100"
            }`}
          >
            {message}
          </div>
        ) : null}
        <span className="contact-pulse pointer-events-none absolute -right-2 -top-2 h-6 w-6 rounded-full bg-moxera-highlight/50 blur-sm" />
      </Container>
    </section>
  );
}
