import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://jobsnearmehiringimmediately.com" // Updated to your actual domain

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/admin/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`, // Updated to your actual domain
    host: baseUrl, // Updated to your actual domain
  }
}
