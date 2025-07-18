import { blogPosts, categories } from "@/lib/blog-data"

export async function GET() {
  const baseUrl = "https://sidehustlesfromhome.com" // Replace with your actual domain

  const staticPages = [
    "", // Home page
    "/about",
    "/blog",
    "/contact",
    "/privacy-policy",
    "/terms-of-service",
    "/affiliate-disclosure",
    // Removed "/sitemap" from here as it points to the HTML sitemap page
    "/adsense-verification",
    "/admin/indexnow",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: path === "" ? 1.0 : 0.8,
  }))

  const blogPostEntries = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`, // Use post.slug
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: "weekly",
    priority: 0.7,
  }))

  const categoryEntries = categories.map((category) => ({
    url: `${baseUrl}/categories/${category.slug}`, // Use category.slug
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: 0.6,
  }))

  const allUrls = [...staticPages, ...blogPostEntries, ...categoryEntries]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allUrls
    .map(
      (url) => `
    <url>
      <loc>${url.url}</loc>
      <lastmod>${url.lastModified}</lastmod>
      <changefreq>${url.changeFrequency}</changefreq>
      <priority>${url.priority}</priority>
    </url>
  `,
    )
    .join("")}
</urlset>`

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}
