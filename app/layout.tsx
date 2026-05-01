import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moxera | Orbit Control",
  description:
    "Moxera, AI, otomasyon ve dijital urunleri tek bir premium kontrol katmaninda birlestiren sistem studyo deneyimi sunar.",
  metadataBase: new URL("https://moxera.com.tr"),
  openGraph: {
    title: "Moxera | Orbit Control",
    description:
      "AI-native sistemler, otomasyon mimarisi ve premium urun deneyimi.",
    url: "https://moxera.com.tr",
    siteName: "Moxera",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="h-full scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
