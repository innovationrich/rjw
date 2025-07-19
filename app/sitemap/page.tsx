import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { getAllPosts, getAllCategories } from "@/lib/blog-data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sitemap - SideHustlesFromHome.com",
  description:
    "Browse a comprehensive list of all pages and blog posts on SideHustlesFromHome.com to easily navigate our content.",
}

export default function HtmlSitemapPage() {
  const posts = getAllPosts()
  const categories = getAllCategories()

  const staticPages = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/categories", label: "Categories" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/affiliate-disclosure", label: "Affiliate Disclosure" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-of-service", label: "Terms of Service" },
    // { href: "/admin/indexnow", label: "IndexNow Admin (Internal)" }, // Consider if you want to link this publicly
  ]

  return (
    <div className="container mx-auto py-8 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Website Sitemap</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8 text-gray-700">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Main Pages</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {staticPages.map((page) => (
                <li key={page.href}>
                  <Link href={page.href} className="text-blue-600 hover:underline">
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Blog Categories</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link href={`/categories/${category.slug}`} className="text-blue-600 hover:underline">
                    {category.name} ({category.count})
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">All Blog Posts</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
