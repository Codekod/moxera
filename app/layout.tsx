import type { Metadata } from "next";
import { StructuredData } from "@/components/structured-data";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Moxera | AI Automation & Premium Web Systems",
    template: "%s | Moxera",
  },
  description:
    "Moxera; AI otomasyon, premium web deneyimi ve lansman sistemlerini tek bir dijital altyapida birlestiren teknoloji studyosudur.",
  metadataBase: new URL("https://moxera.com.tr"),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "AI otomasyon",
    "premium web tasarim",
    "dijital lansman",
    "web otomasyon",
    "Moxera",
  ],
  openGraph: {
    title: "Moxera | AI Automation & Premium Web Systems",
    description:
      "AI otomasyon, premium web deneyimi ve olculebilir lansman sistemleri.",
    url: "https://moxera.com.tr",
    siteName: "Moxera",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Moxera premium web ve AI otomasyon sistemleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moxera | AI Automation & Premium Web Systems",
    description:
      "AI otomasyon, premium web deneyimi ve olculebilir lansman sistemleri.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="h-full scroll-smooth">
      <body>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
