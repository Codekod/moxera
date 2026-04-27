import type { MetadataRoute } from "next";

const baseUrl = "https://moxera.com.tr";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${baseUrl}/calismalar`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/hakkimizda`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: `${baseUrl}/iletisim`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8
    }
  ];
}
