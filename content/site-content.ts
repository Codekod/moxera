export const siteContent = {
  nav: {
    links: [
      { label: "Servisler", href: "#services" },
      { label: "Projeler", href: "#projects" },
      { label: "Akis", href: "#protocol" },
      { label: "Iletisim", href: "#contact" },
    ],
    cta: {
      label: "Brief Planlayalim",
      href: "#contact",
    },
  },
  hero: {
    kicker: "AI automation / premium web / launch systems",
    dynamicPhrases: [
      "operasyonlari otomasyonla hizlandirir",
      "markalari premium dijital deneyime tasir",
      "lansmanlari olculebilir sisteme cevirir",
    ],
    lines: [
      "AI destekli",
      "premium web ve",
      "otomasyon sistemleri.",
    ],
    copy:
      "Moxera; markalarin ilk temasini, operasyon akislarini ve lansman sureclerini tek bir yuksek algili dijital sisteme baglayan urun odakli bir teknoloji studyosudur.",
    actions: [
      { label: "Brief Planlayalim", href: "#contact", variant: "primary" },
      { label: "Sistemi Kesfet", href: "#services", variant: "secondary" },
    ],
    stageNotes: [
      {
        title: "Motion system",
        body: "Premium algi icin kontrollu hareket dili",
        className: "chip-alpha",
        depth: 30,
      },
      {
        title: "Logo focus",
        body: "Marka varligini sahnenin merkezine alir",
        className: "chip-beta",
        depth: 24,
      },
      {
        title: "Signal layer",
        body: "CTA, kanit ve akisi ayni ritme baglar",
        className: "chip-gamma",
        depth: 18,
      },
    ],
    footerStats: [
      { label: "Focus", value: "qualified demand" },
      { label: "System", value: "automation-ready" },
      { label: "Brand", value: "premium perception" },
    ],
  },
  services: {
    kicker: "Service architecture",
    title: "Tasarim, otomasyon ve lansmani tek sistem gibi kuruyoruz.",
    copy:
      "Sadece guzel gorunen sayfalar degil; lead toplama, operasyon, entegrasyon ve yayin sonrasi iterasyonu dusunen dijital altyapilar tasarliyoruz.",
    items: [
      {
        code: "01",
        title: "AI automation systems",
        body: "Tekrarlayan isleri agent mantigi, entegrasyon ve karar akislariyla takip edilebilir sistemlere ceviriyoruz.",
        meta: "n8n / AI / API",
        accent: "Signal orchestration",
      },
      {
        code: "02",
        title: "Premium web experiences",
        body: "Markayi sadece guzel gosteren degil; guven, netlik ve donusum hissi veren web deneyimleri tasarliyoruz.",
        meta: "Brand / Motion / UX",
        accent: "Narrative interaction",
      },
      {
        code: "03",
        title: "Launch choreography",
        body: "Yayin, icerik, teknik altyapi ve olcumleme katmanini tek bir lansman planina bagliyoruz.",
        meta: "Launch / Content / Systems",
        accent: "Go-live command center",
      },
    ],
  },
  projects: {
    kicker: "Urun gelistirme hatti",
    title: "Fikirden yayina uzanan urunleri gercek ekranlariyla gelistiriyoruz.",
    copy:
      "Her urunu hedef kullanici, bilgi akisi, arayuz ritmi ve lansman ihtiyacina gore ele aliyoruz. Tasarim, otomasyon ve tanitim materyalleri ayni gelistirme hattinda ilerliyor.",
    items: [
      {
        label: "Product 01",
        title: "Noter Pusulasi",
        body: "Hukuk ve noter sureclerinde bilgi akisini sadelestiren, kullaniciyi dogru adima yonlendiren dijital urun deneyimi.",
        image: "/content/project-01.svg",
        video: "/content/noter-pusulasi-product-demo.mp4?v=20260502",
        metrics: ["Product video ready", "Guided user flow"],
        summary: "Noter islemlerinde dijital yon bulma",
      },
      {
        label: "System 02",
        title: "Operational surfaces with depth",
        body: "Arka plandaki karmasayi tek panel mantigina indirip daha hizli karar alan ekipler icin kontrol katmani olusturuyoruz.",
        image: "/content/project-02.svg",
        metrics: ["8 core automations", "Realtime decision layer"],
        summary: "Tek panelde karar ve akis",
      },
      {
        label: "Launch 03",
        title: "Demand-focused digital systems",
        body: "Acilis ekrani, bilgi ritmi ve CTA kurgusunu beraber optimize ederek daha nitelikli ilgi ve talep uretiyoruz.",
        image: "/content/project-03.svg",
        metrics: ["x2 content velocity", "Conversion-first funnel"],
        summary: "Talep odakli buyume sistemi",
      },
    ],
  },
  protocol: {
    kicker: "Delivery protocol",
    title: "Premium algi ancak net surec ve olculebilir ciktiyla kalici olur.",
    copy:
      "Her isi once hedef, kanal, operasyon yuku ve donusum noktalarina gore modelliyoruz. Sonra tasarim, motion, otomasyon ve yayin surecini ayni plan icinde ilerletiyoruz.",
    items: [
      {
        label: "Discovery",
        title: "Hedef, kitle ve sistem haritasi",
        body: "Teklif, karar verici profili, operasyon ihtiyaci ve veri akislarini netlestiririz.",
      },
      {
        label: "Build",
        title: "Premium arayuz + otomasyon altyapisi",
        body: "Web deneyimi, CTA akisi, entegrasyon ve takip mekaniklerini birlikte kurariz.",
      },
      {
        label: "Launch",
        title: "Yayin, olcumleme ve iterasyon",
        body: "Yayindan sonra form, mail, analitik ve donusum verisine gore sistemi iyilestiririz.",
      },
    ],
  },
  contact: {
    kicker: "Next step",
    title: "Yeni web deneyimini ve otomasyon ihtiyacini 30 dakikalik brief ile netlestirelim.",
    email: "hello@moxera.com.tr",
    subject: "Moxera proje brief talebi",
  },
} as const;
