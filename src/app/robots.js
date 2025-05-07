import sitemap from "./sitemap";

const baseUrl = process.env.NEXT_PUBLIC_SEO_URL;

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}sitemap.xml`,
  };
}
