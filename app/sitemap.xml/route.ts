import { blogPosts } from "@/lib/blog-data"

// Gracefully handle bad or missing dates
function formatIso(dateLike: string | number | Date | null | undefined) {
  const d = dateLike ? new Date(dateLike) : undefined
  return (!d || Number.isNaN(d.getTime()) ? new Date() : d).toISOString()
}

export async function GET() {
  const baseUrl = "https://sidehustlesfromhome.com"

  // Static pages
  const staticPages = [
    "",
    "/about",
    "/blog",
    "/categories",
    "/contact",
    "/privacy-policy",
    "/terms-of-service",
    "/affiliate-disclosure",
  ]

  // Category pages
  const categoryPages = [
    "/categories/online-side-hustles",
    "/categories/passive-income",
    "/categories/freelancing",
    "/categories/digital-products",
    "/categories/ecommerce",
    "/categories/content-creation",
    "/categories/specialized-side-hustles",
    "/categories/local-job-search",
    "/categories/gig-economy",
    "/categories/delivery-gig-apps",
    "/categories/creative-design",
    "/categories/healthcare-side-hustles",
    "/categories/entry-level-jobs",
    "/categories/investing", // Add the new Investing category
  ]

  // Blog posts with date validation
  const blogPostUrls = blogPosts
    .filter((post) => {
      // Validate date before using it
      const date = new Date(post.publishedAt || post.date)
      return !isNaN(date.getTime())
    })
    .map((post) => ({
      url: `${baseUrl}/blog/${post.id}`,
      lastModified: formatIso(post.publishedAt || post.date),
    }))

  // Combine all URLs
  const allUrls = [
    ...staticPages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly" as const,
      priority: page === "" ? 1.0 : 0.8,
    })),
    ...categoryPages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...blogPostUrls.map((post) => ({
      url: post.url,
      lastModified: post.lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    ({ url, lastModified, changeFrequency, priority }) => `
  <url>
    <loc>${url}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${changeFrequency}</changefreq>
    <priority>${priority}</priority>
  </url>`,
  )
  .join("")}
</urlset>`

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}
