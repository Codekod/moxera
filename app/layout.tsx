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
  title: "Moxera | Web, Mobil, SaaS ve Yapay Zeka Çözümleri",
  description:
    "Moxera, ihtiyaçları çalışan dijital sistemlere dönüştüren Ankara merkezli butik teknoloji partneridir. Web, mobil, SaaS, yapay zeka ve otomasyon çözümleri geliştirir.",
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
    icon: "/brand/WEB SİTESİ İÇİN-01.svg",
    apple: "/brand/moxera-logo-dark.png",
    shortcut: "/brand/WEB SİTESİ İÇİN-01.svg"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body className={`${jakarta.variable} ${sora.variable} bg-moxera-bg text-moxera-text antialiased`}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
