import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : "http://localhost:3000"
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/admin/"],
    },
    sitemap: "https://jobsnearmehiringimmediately.vercel.app/sitemap.xml", // This URL should be your deployed site's sitemap
    IndexNow: `${baseUrl}/indexnow.txt`,
  }
}
