import { blogPosts } from "@/lib/blog-data"
import { BlogGrid } from "@/components/blog-grid"
import { BlogSidebar } from "@/components/blog-sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function InvestingCategoryPage() {
  const investingPosts = blogPosts.filter((post) => post.category === "Investing")

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">Investing Side Hustles</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700">
                Explore various ways to generate passive income and grow your wealth through smart investing strategies.
                From stock market basics to real estate and alternative investments, find the best investing side
                hustles for your financial goals.
              </p>
            </CardContent>
          </Card>
          {investingPosts.length > 0 ? (
            <BlogGrid posts={investingPosts} />
          ) : (
            <p className="text-center text-gray-600">No investing articles found yet. Check back soon!</p>
          )}
        </div>
        <div className="md:col-span-1">
          <BlogSidebar />
        </div>
      </div>
    </div>
  )
}
