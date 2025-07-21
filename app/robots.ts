import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/", // Example: Disallow a private directory
    },
    sitemap: "https://jobsnearmehiringimmediately.com/sitemap.xml",
    host: "https://jobsnearmehiringimmediately.com",
  }
}
