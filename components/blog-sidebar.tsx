import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getAllCategories, getRecentPosts } from "@/lib/blog-data" // Import data functions

export default function BlogSidebar() {
  const categories = getAllCategories()
  const recentPosts = getRecentPosts(5) // Get 5 recent posts

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-bold">Categories</CardTitle>
        </CardHeader>
        <CardContent>
          {categories && categories.length > 0 ? (
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link href={`/categories/${category.slug}`} className="text-blue-600 hover:underline">
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No categories available.</p>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-bold">Recent Posts</CardTitle>
        </CardHeader>
        <CardContent>
          {recentPosts && recentPosts.length > 0 ? (
            <ul className="space-y-2">
              {recentPosts.map((post) => (
                <li key={post.id}>
                  <Link href={`/blog/${post.id}`} className="text-blue-600 hover:underline">
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No recent posts available.</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
