export const siteContent = {
  nav: {
    links: [
      { label: "Servisler", href: "#services" },
      { label: "Projeler", href: "#projects" },
      { label: "Akis", href: "#protocol" },
      { label: "Iletisim", href: "#contact" },
    ],
    cta: {
      label: "Sistem Tasarlayalim",
      href: "#contact",
    },
  },
  hero: {
    kicker: "Premium motion / orbit control / staged storytelling",
    dynamicPhrases: [
      "AI sistemleri tasarlar",
      "markalari hareketle hikayelestirir",
      "operasyonlari otomasyonla hizlandirir",
    ],
    lines: [
      "Moxera statik",
      "bir landing page",
      "gibi hissetmemeli.",
    ],
    copy:
      "Hedefimiz duz bir agency vitrini degil. Scroll ile acilan, derinlik hissi veren, logoyu sahnenin parcasi yapan ve markaya yuksek algi kazandiran bir dijital sistem kuruyoruz.",
    actions: [
      { label: "Projeyi Baslatalim", href: "#contact", variant: "primary" },
      { label: "Sahneyi Kesfet", href: "#services", variant: "secondary" },
    ],
    stageNotes: [
      {
        title: "Motion system",
        body: "Parallax + scrub + staged depth",
        className: "chip-alpha",
        depth: 30,
      },
      {
        title: "Logo focus",
        body: "Icon ve metin uyumlu hareket ediyor",
        className: "chip-beta",
        depth: 24,
      },
      {
        title: "Signal layer",
        body: "UI degil, sahne koreografisi",
        className: "chip-gamma",
        depth: 18,
      },
    ],
    footerStats: [
      { label: "Depth", value: "multi-layer parallax" },
      { label: "Motion", value: "scroll-linked timeline" },
      { label: "Brand", value: "original logo preserved" },
    ],
  },
  services: {
    kicker: "Service reel",
    title: "Yatay akan bir servis sahnesiyle premium hareket hissi.",
    copy:
      "Bu bolum artik duz grid degil. Scroll ettikce sahne yatay akiyor, servis panelleri ritimle yer degistiriyor ve anlatim klasik landing davranisindan cikiyor.",
    items: [
      {
        code: "01",
        title: "AI automation systems",
        body: "Tekrarlayan operasyonlari agent mantigi, entegrasyon ve karar akislariyla calisan sistemlere ceviriyoruz.",
        meta: "n8n / AI / API",
        accent: "Signal orchestration",
      },
      {
        code: "02",
        title: "Premium web experiences",
        body: "Markayi sadece guzel gosteren degil, ritmi, guveni ve donusumu hissettiren acilis deneyimleri tasarliyoruz.",
        meta: "Brand / Motion / UX",
        accent: "Narrative interaction",
      },
      {
        code: "03",
        title: "Launch choreography",
        body: "Yayin, icerik, teknik altyapi ve hareket dilini tek bir kontrol senaryosuna bagliyoruz.",
        meta: "Launch / Content / Systems",
        accent: "Go-live command center",
      },
    ],
  },
  projects: {
    kicker: "Project stack",
    title: "Projeler de scroll ile katman degistiren bir stack halinde.",
    copy:
      "Burada premium hissi; kutu kutu portfolio degil, editorial stack gecisi uretiyor. Kartlar scroll ile ayrisiyor ve derinlik hissi veriyor.",
    items: [
      {
        label: "Signal 01",
        title: "Launch systems that feel expensive",
        body: "Yeni bir sirketin ilk temasini siradan agency hissinden cikarip guclu bir urun sahnesine tasiyoruz.",
        image: "/content/project-01.svg",
        metrics: ["+42% qualified lead", "6-week go-live"],
        summary: "Ilk temas / guven / net pozisyon",
      },
      {
        label: "Signal 02",
        title: "Operational surfaces with depth",
        body: "Arka plandaki karmasayi tek panel mantigina indirip daha net karar alan ekipler icin kontrol katmani olusturuyoruz.",
        image: "/content/project-02.svg",
        metrics: ["8 core automations", "Realtime decision layer"],
        summary: "Tek panelde karar ve akis",
      },
      {
        label: "Signal 03",
        title: "Demand-focused digital systems",
        body: "Acilis ekrani, bilgi ritmi ve CTA kurgusunu beraber optimize ederek daha iyi ilgi ve talep uretiyoruz.",
        image: "/content/project-03.svg",
        metrics: ["x2 content velocity", "Conversion-first funnel"],
        summary: "Talep odakli buyume sistemi",
      },
    ],
  },
  protocol: {
    kicker: "What changed",
    title: "Logo bozulmadi, sahneye alindi. Hareket de artik sadece lafta degil.",
    copy:
      "Bu versiyonda animasyonlari tek timeline mimarisine alarak geri kaydirmada da stabil davranan premium bir akis kuruyoruz. Sonraki adimda bunu gercek case-video ve metric panelleriyle daha da guclendirebiliriz.",
  },
  contact: {
    kicker: "Next step",
    title: "Hazirsan bunu gercek icerik ve case study verileriyle dolduralim.",
    email: "hello@moxera.com.tr",
  },
} as const;
