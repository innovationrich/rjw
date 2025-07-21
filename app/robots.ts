import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://yourdomain.com" // UPDATE THIS WITH YOUR ACTUAL DOMAIN

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/admin/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`, // UPDATE THIS WITH YOUR ACTUAL DOMAIN
    host: baseUrl, // UPDATE THIS WITH YOUR ACTUAL DOMAIN
  }
}
