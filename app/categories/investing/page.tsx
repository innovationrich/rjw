import type { Metadata } from "next"
import { blogPosts } from "@/lib/blog-data"
import BlogGrid from "@/components/blog-grid"
import BlogSidebar from "@/components/blog-sidebar"

export const metadata: Metadata = {
  title: "Investing Side Hustles - SideHustles FromHome.com",
  description: "Explore legitimate investing side hustles and opportunities to grow your income from home.",
  keywords:
    "investing side hustles, passive income investing, stock market side hustles, real estate investing, crypto investing",
  openGraph: {
    title: "Investing Side Hustles - SideHustles FromHome.com",
    description: "Explore legitimate investing side hustles and opportunities to grow your income from home.",
    url: "https://sidehustlesfromhome.com/categories/investing",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Investing Side Hustles - SideHustles FromHome.com",
    description: "Explore legitimate investing side hustles and opportunities to grow your income from home.",
  },
}

export default function InvestingCategoryPage() {
  const investingPosts = blogPosts.filter((post) => post.category === "Investing")

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Investing Side Hustles</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-3">
          {investingPosts.length > 0 ? (
            <BlogGrid posts={investingPosts} />
          ) : (
            <p className="text-center text-gray-600">No investing side hustle posts found yet. Check back soon!</p>
          )}
        </div>
        <div className="md:col-span-1">
          <BlogSidebar />
        </div>
      </div>
    </div>
  )
}
