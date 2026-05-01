const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Moxera",
  url: "https://moxera.com.tr",
  email: "hello@moxera.com.tr",
  sameAs: ["https://github.com/Codekod/moxera"],
  description:
    "AI otomasyon, premium web deneyimi ve lansman sistemleri gelistiren teknoloji studyosu.",
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
