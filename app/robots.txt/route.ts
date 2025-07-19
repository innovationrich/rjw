import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/private/"], // Disallow admin and private paths
    },
    sitemap: "https://sidehustlesfromhome.com/sitemap.xml", // Ensure this points to your sitemap
  }
}
