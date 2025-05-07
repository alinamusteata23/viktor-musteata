const baseUrl = process.env.NEXT_PUBLIC_SEO_URL;

export default function sitemap() {
  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
}
