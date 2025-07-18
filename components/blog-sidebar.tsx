import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { getAllCategories, getRecentPosts } from "@/lib/blog-data" // Import functions
import AdBanner from "@/components/ad-banner" // Declare AdBanner import

export function BlogSidebar() {
  const categories = getAllCategories()
  const recentPosts = getRecentPosts(5) // Get 5 recent posts

  return (
    <aside className="space-y-8">
      {/* Search Widget */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold">Search Blog</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="flex gap-2">
            <Input type="search" placeholder="Search articles..." className="flex-1" />
            <Button type="submit">Search</Button>
          </form>
        </CardContent>
      </Card>

      {/* Categories Widget */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold">Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category.id}>
                <Link
                  href={`/categories/${category.slug}`} // Use category.slug
                  className="text-gray-700 hover:text-blue-600 flex justify-between items-center"
                >
                  <span>{category.name}</span>
                  <span className="text-sm text-gray-500">({category.count})</span>
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Recent Posts Widget */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold">Recent Posts</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {recentPosts.map((post) => (
              <li key={post.id}>
                <Link href={`/blog/${post.slug}`} className="block">
                  {" "}
                  {/* Use post.slug */}
                  <h4 className="text-base font-semibold text-gray-800 hover:text-blue-600">{post.title}</h4>
                  <p className="text-sm text-gray-500">{post.date}</p>
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Ad Widget */}
      <AdBanner type="sidebar" />
    </aside>
  )
}

export default BlogSidebar
