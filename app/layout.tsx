import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin-ext"],
  variable: "--font-jakarta",
  display: "swap"
});

const sora = Sora({
  subsets: ["latin-ext"],
  variable: "--font-sora",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://moxera.com.tr"),
  title: {
    default: "Moxera | Web, Mobil, SaaS ve Yapay Zeka Çözümleri",
    template: "%s | Moxera"
  },
  description:
    "Moxera, ihtiyaçları çalışan dijital sistemlere dönüştüren Ankara merkezli butik teknoloji partneridir. Web, mobil, SaaS, yapay zeka ve otomasyon çözümleri geliştirir.",
  keywords: [
    "Moxera",
    "web sitesi geliştirme",
    "web tasarım",
    "web yazılım",
    "kurumsal web sitesi",
    "profesyonel web sitesi",
    "Ankara web tasarım",
    "Ankara yazılım ajansı",
    "özel yazılım geliştirme",
    "mobil uygulama geliştirme",
    "mobil uygulama yaptırmak",
    "iOS Android uygulama geliştirme",
    "SaaS uygulaması",
    "SaaS geliştirme",
    "web uygulaması geliştirme",
    "CRM yazılımı",
    "yapay zeka çözümleri",
    "yapay zeka entegrasyonu",
    "yapay zeka danışmanlığı",
    "AI iş akışı",
    "otomasyon sistemleri",
    "iş süreçleri otomasyonu",
    "dijital dönüşüm danışmanlığı"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Moxera | İhtiyaçları çalışan dijital sistemlere dönüştürüyoruz",
    description:
      "Web ve mobil uygulamalar, SaaS ürünleri, yapay zeka çözümleri ve otomasyon sistemleriyle iş akışlarını hızlandıran butik teknoloji partneri.",
    url: "https://moxera.com.tr",
    siteName: "Moxera",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/brand/moxera-logo-dark.png",
        width: 5692,
        height: 3200,
        alt: "Moxera"
      }
    ]
  },
  icons: {
    icon: "/brand/favicon.svg",
    apple: "/brand/moxera-logo-dark.png",
    shortcut: "/brand/favicon.svg"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Moxera",
    url: "https://moxera.com.tr",
    logo: "https://moxera.com.tr/brand/moxera-logo-dark.png",
    email: "meliheken@moxera.com.tr",
    telephone: "+905339697806",
    areaServed: "TR",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ankara",
      addressCountry: "TR"
    },
    sameAs: [
      "https://www.instagram.com/moxera",
      "https://x.com/moxera",
      "https://www.facebook.com/moxera"
    ],
    serviceType: [
      "Web sitesi geliştirme",
      "Web tasarım",
      "Kurumsal web sitesi geliştirme",
      "Mobil uygulama geliştirme",
      "iOS ve Android uygulama geliştirme",
      "SaaS uygulamaları",
      "Web uygulaması geliştirme",
      "Özel yazılım geliştirme",
      "Yapay zeka iş akışı geliştirme",
      "Yapay zeka entegrasyonu",
      "CRM ve operasyon paneli geliştirme",
      "Otomasyon sistemleri"
    ]
  };

  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${jakarta.variable} ${sora.variable} bg-moxera-bg text-moxera-text antialiased`}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
