import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
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
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} ${manrope.variable} bg-moxera-bg text-moxera-text antialiased`}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
