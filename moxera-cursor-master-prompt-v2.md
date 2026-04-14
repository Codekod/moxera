# MOXERA Cursor Master Prompt

Aşağıdaki talimatları tek seferde eksiksiz uygula. Amaç; `moxera.com.tr` için, sıradan AI üretimi landing page kalıplarından tamamen uzak, premium, sinematik, detay işçiliği yüksek, Apple seviyesinde algılanan ama birebir kopya olmayan özgün bir kurumsal dijital deneyim üretmek.

## Rolün
Sen; award-level dijital deneyim tasarımcısı, creative developer, motion director ve senior frontend architect olarak davranacaksın. Çıktın; sadece çalışan bir web sitesi değil, marka algısı güçlü, hikâyesi olan, hareket dili tutarlı, teknik olarak temiz ve performans odaklı bir premium deneyim olacak.

## Projenin Gerçek Bağlamı
- Marka adı: **Moxera**
- Domain: **moxera.com.tr**
- Kuruluş tarihi: **1 Nisan 2026**
- Yapı: **tek kişilik butik teknoloji partneri**
- Konum: **Ankara merkez**
- Dil: **şimdilik sadece Türkçe**
- Birincil CTA: **Proje konuşalım**
- Hedef kitle:
  - KOBİ'ler
  - şahıs şirketleri
  - dijitalleşmek isteyen işletmeler
  - operasyonlarını hızlandırmak isteyen firmalar
  - prestijli ve işlevsel dijital varlık ihtiyacı olan markalar

## Marka Vaadi
Ana mesajı merkeze al:

**İhtiyaçlarınızı, çalışan dijital sistemlere dönüştürüyoruz.**

Bu cümleyi sitenin omurgası gibi düşün. Tüm mimari, içerik ve motion dili şu fikri desteklemeli:
- iş problemlerini dinlemek
- darboğazları tespit etmek
- yapay zeka ve otomasyon ile zaman kazandırmak
- web ve mobil ürünlerle görünürlüğü, prestiji ve satış potansiyelini artırmak
- müşteriye sadece yazılım değil, çalışan sistem teslim etmek

## Moxera'nın Hizmet Önceliği
Aşağıdaki sıralamayı bilgi mimarisinde ve görsel hiyerarşide koru:

1. **Web ve Mobil Uygulamalar**
2. **SaaS Uygulamaları**
3. **Yapay Zeka Çözümleri**
4. **Web ve Mobile Otomasyon Sistemleri**

Not: Yapay zeka önemli ama “gösteri” olarak değil, iş akışlarını hızlandıran sonuç odaklı katman olarak konumlanmalı.

## Tasarım Referans Dili
İlham seviyesi: Apple keynote / Apple product page kalitesi.
Ancak:
- Apple’ı kopyalama.
- Klasik SaaS hero + 3 kart + CTA düzeni kurma.
- “AI ile yapılmış template hissi” veren hazır blok dizilimlerinden kaçın.
- Kullanıcı sayfayı gezerken “bu site özel tasarlanmış” hissini net almalı.
- Tasarım dili **sinematik**, **karanlık**, **derin**, **rafine** ve **butik premium** olmalı.

## Görsel Kimlik ve Logo Kullanımı
Logo dosyaları yüklendi. Tasarımı logo etrafında kur.

Logo karakteri:
- lacivert / koyu mavi ana tonlar
- turkuaz / cyan geçişler
- sonsuzluk ve akış hissi
- modern, geometrik, premium

Bu logodaki sonsuzluk benzeri form, sitenin motion grammar’ının temeli olsun.

Yorum alanları:
- hero’da ışık izi
- arka planda flowing path sistemleri
- sticky sahnelerde bağlantı çizgileri
- hizmet geçişlerinde data-flow metaforu
- final CTA’da logoya geri bağlanan motion

## Renk Sistemi
Önerilen palet:
- `#050816` – ultra deep background
- `#0A1224` – koyu lacivert arka plan
- `#111827` – premium surface
- `#1D2A57` – deep navy
- `#2ED3C6` – teal accent
- `#66E6DA` – aqua highlight
- `#B8C2D9` – soft text
- `#F5F7FB` – high contrast text

Kurallar:
- gradient kullan ama ucuz görünmeyecek şekilde
- glow kontrollü olsun
- cyberpunk neon klişesinden kaçın
- koyu yüzey + seçici ışık yaklaşımı kullan

## Yaratıcı Yön
Standart landing page yapısı istemiyorum. Bunun yerine aşağıdaki yaklaşımları değerlendir:
- narrative scrolling
- sahne bazlı geçişler
- parallax depth composition
- sticky section dramaturgisi
- tipografi odaklı sinematik giriş
- device mockup yerine soyut teknoloji yüzeyleri ve gerektiğinde premium ekran çerçeveleri
- ışık, yansıma, volumetric derinlik
- logo formundan türeyen orbitler / akış patikaları / çizgisel yönlendirmeler
- mikro hareketlerle yaşayan arayüz
- metin, yüzey ve motion’ın tek sistem gibi davranması

## Kesinlikle İstemediğim Şeyler
- template hissi
- sıradan startup illüstrasyonları
- stok görsel ağırlıklı kurgu
- aşırı neon cyberpunk klişesi
- gereksiz particle spam
- okunurluğu düşüren abartılı blur katmanları
- klasik “hero + services + testimonials + faq + contact” dizilimini düz şekilde vermek
- her section’da aynı kart yapısını tekrar etmek
- Tailwind ile hızlıca döşenmiş hissi veren sıkıcı spacing düzeni
- ajans sitesi klişeleri
- “geleceği inşa ediyoruz” tarzı boş jargon

## Teknik Gereksinimler
- Tech stack: **Next.js 14+ App Router**, **TypeScript**, **Tailwind CSS**, **GSAP**, tercihen **Lenis**
- Animasyon altyapısı:
  - GSAP
  - ScrollTrigger
  - text reveal için custom split yaklaşımı veya güvenli yardımcı util
- Mimari:
  - component-based
  - reusable sections
  - animation utilities ayrı
  - constants/data ayrı dosyalarda
  - temiz klasör yapısı
- Kod kalitesi:
  - production-ready
  - erişilebilirlik gözetilmiş
  - semantic HTML
  - mobile responsive
  - performans kontrollü
  - animation cleanup düzgün
  - prefers-reduced-motion fallback

## Site Kapsamı
Bu yalnızca tek bir hero sayfası değil; aşağıdaki alanları içeren tam bir kurumsal site iskeleti tasarla:
- Ana sayfa
- Hizmetler gösterim alanı
- Çalışmalarımız / projeler alanı
- fotoğraf / video / animasyon gösterilebilecek medya blokları
- Hakkımızda alanı
- İletişim alanı

Not: Proje verileri henüz tam hazır değil. Bu yüzden çalışmalar ve referanslar için **premium mock data** kullan. Placeholder'lar ucuz görünmesin; gerçek bir markanın yakında dolduracağı profesyonel alanlar gibi tasarla.

## İçerik Stratejisi
Metinler:
- kısa
- net
- premium
- teknik güven veren
- satış kokmayan
- klişe pazarlama dili düşük
- Türkçe öncelikli

Copy yönü şu fikirlere yaslansın:
- müşteriyi dinleyen yaklaşım
- sorun tespiti
- iş akışı optimizasyonu
- zaman kazandıran otomasyon
- dijital görünürlük ve prestij artışı
- işleyen, sürdürülebilir, ölçeklenebilir sistemler

Aşağıdaki söylem hattını geliştir:
- “İhtiyaçlarınızı, çalışan dijital sistemlere dönüştürüyoruz.”
- “İş akışlarını hızlandıran, zaman kazandıran çözümler.”
- “Web ve mobil ürünlerle görünürlüğünüzü, güvenilirliğinizi ve satış potansiyelinizi güçlendiriyoruz.”
- “Yapay zekayı gösteri için değil, iş sonuçları için kullanıyoruz.”

## Bilgi Mimarisi ve Deneyim Akışı
Klasik section listesi gibi değil, deneyim kurgusu olarak ele al.

### 1. Opening Sequence / Hero Experience
Amaç:
- Moxera’nın ne yaptığını ilk 5 saniyede anlatmak
- güçlü ve sinematik bir ilk izlenim bırakmak
- logodan türeyen motion ile markaya özgü bir açılış sunmak

İçerik:
- ana başlık
- kısa açıklama
- CTA: **Proje konuşalım**
- ikincil CTA: çalışmalar / hizmetler / iletişim gibi mantıklı bir yönlendirme
- derinlikli parallax arka plan
- logo tabanlı light trail veya path motion

### 2. Transformation Narrative
“İhtiyaç → analiz → çözüm → ürün → otomasyon → çalışan sistem” dönüşümünü scroll ile anlat.

Bu bölüm statik metin listesi olmasın. Scroll ile ilerleyen sahne yapısı kur.

### 3. Capability Cinematic
Hizmet alanlarını sıradan kartlar yerine motion-driven paneller, layered canvases, orbit sistemleri veya sticky sahneler ile anlat.

Öncelikli sıralama:
- Web ve Mobil Uygulamalar
- SaaS Uygulamaları
- Yapay Zeka Çözümleri
- Otomasyon Sistemleri

Her hizmet bloğunun ayrı karakteri olsun:
- web/mobile: güven, görünürlük, prestij, satış potansiyeli
- saas: süreç standardizasyonu, ölçeklenebilir yapı
- yapay zeka: hız, verim, desteklenen karar alma
- otomasyon: tekrar eden işlerin sadeleşmesi

### 4. Selected Work / Çalışmalarımız
Gerçek içerikler henüz hazırlanmadığı için mock data kullan.

Kurallar:
- en az 3 premium case preview alanı oluştur
- bunlardan biri **Noter Pusulası** referansına ayrılmış placeholder olabilir
- her çalışma kart gibi değil, case-study teaser gibi hissettirmeli
- fotoğraf, video ve animasyon eklenebilecek alanlar düşünülmeli
- içerik sonradan kolay güncellenebilecek veri yapısında tutulmalı

### 5. Why Moxera
Aşağıdaki farkları anlat:
- hazır kalıplar yerine iş modeline göre çözüm kurma
- sadece yazılım değil, çalışan sistem tasarlama
- yapay zekayı moda olduğu için değil, faydalı olduğu yerde kullanma
- butik çalışma modeli sayesinde daha yakın iletişim ve daha fazla özen

### 6. About / Hakkımızda
Aşağıdaki gerçek bilgileri daha iyi cümlelerle işle:
- Moxera 1 Nisan 2026’da kuruldu
- tek kişilik ama stratejik ve sonuç odaklı bir yapı
- müşteriyi dinleyen, zorlukları anlayan, sorunları tespit eden yaklaşım
- zaman kazandıran yapay zeka ve otomasyon çözümleri
- web ve mobil ürünlerle tanınırlık, prestij ve satış etkisi oluşturma

Bu bölümde “tek başınayım” hissi zayıflık gibi görünmesin. Onu butik, özenli, doğrudan temas kuran uzman partner modeline dönüştür.

### 7. Contact / İletişim
Form alanları:
- ad soyad
- firma adı
- telefon
- e-posta
- ihtiyaç / proje detayı

İletişim bilgileri:
- e-posta: `meliheken@moxera.com.tr`
- telefon: `0 533 969 78 06`
- konum: `Ankara merkez`
- sosyal medya placeholder ikonları: Instagram, X, Facebook, WhatsApp

Bu bölüm sıradan bir form bloğu olmasın. Güçlü bir kapanış sahnesi gibi davransın.

## Motion Direction
Animasyonlar gösterişli ama rafine olmalı:
- girişte opacity + blur spam yok
- mask reveal, directional movement, depth parallax kullan
- scroll ile sahneler arasında geçiş hissi olsun
- hover animasyonları hafif ama premium
- her animasyonun amacı olmalı
- performans pahasına efekt ekleme

Önerilen motion örnekleri:
- hero title line reveal
- path-following ışık izi
- section transition scrub animasyonları
- sticky sahnelerde katman kaymaları
- case preview alanlarında subtle media hover motion
- footer/CTA finalinde yavaş ve tatmin edici kapanış

## UI / Layout Kuralları
- büyük boşluklar, güçlü hiyerarşi, sinematik kırılım
- tipografi ana oyuncu olsun
- kart kullanılacaksa bile klasik SaaS grid görünümünden çıkar
- kontrollü asimetri kullan
- masaüstünde etkileyici, mobilde sadeleşen akış kur
- mobilde efektleri optimize ederek karakteri koru
- medya alanları sonradan gerçek video/görsel ile kolay değiştirilebilir olsun

## SEO ve Meta İçeriği
Türkçe odaklı temel SEO metaları üret:
- title
- description
- open graph title/description
- canonical yapı placeholder
- marka adı ve hizmet alanları uyumlu olsun

## Kod Üretim Kuralları
Aşağıdakileri eksiksiz üret:
1. Proje klasör yapısı
2. Gerekli dependency listesi
3. Ana sayfa ve gerekliyse alt sayfa route önerisi
4. Tüm ana component dosyaları
5. Veri dosyaları
6. GSAP animasyon entegrasyonları
7. Responsive davranışlar
8. SEO metadata temel yapısı
9. Performans notları
10. Kod içinde açıklayıcı ama gereksiz olmayan yorumlar

Ek kurallar:
- Kodları eksik bırakma
- “Burayı sen tamamlarsın” deme
- Placeholder kullanacaksan bilinçli ve premium bağlamda kullan
- her component’in amacı net olsun
- gereksiz bağımlılık ekleme
- asset klasör önerisi yap
- arka plan efektlerini mümkün olduğunca CSS + GSAP ile hafif çöz

## Beklenen Çıktı Formatı
Aşağıdaki sırayla cevap ver:
1. Konsept özeti
2. Tasarım sistemi özeti
3. Bilgi mimarisi
4. Sayfa yapısı
5. Klasör yapısı
6. Kurulum komutları
7. Tüm kod dosyaları
8. Mock data yapısı
9. Uygulama notları
10. Geliştirme sonrası iyileştirme önerileri

Şimdi bu briefe göre, `moxera.com.tr` için sıradışı, premium, sinematik, parallax ve GSAP ağırlıklı bir web sitesi üret. Sıradan landing page kalıbına düşme. Önce deneyim kurgusunu kur, sonra component mimarisini ve kodu üret.
