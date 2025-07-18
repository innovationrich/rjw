import type React from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getAllCategories, getRecentPosts } from "@/lib/blog-data"

const BlogSidebar: React.FC = () => {
  const categories = getAllCategories()
  const recentPosts = getRecentPosts(5)

  return (
    <div className="space-y-6">
      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle>Categories</CardTitle>
        </CardHeader>
        <CardContent>
          {categories && categories.length > 0 ? (
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link href={`/categories/${category.slug}`} className="flex justify-between hover:text-blue-600">
                    <span>{category.name}</span>
                    <span className="text-gray-500">({category.count})</span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No categories available.</p>
          )}
        </CardContent>
      </Card>

      {/* Recent Posts */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Posts</CardTitle>
        </CardHeader>
        <CardContent>
          {recentPosts && recentPosts.length > 0 ? (
            <ul className="space-y-3">
              {recentPosts.map((post) => (
                <li key={post.id}>
                  <Link href={`/blog/${post.id}`} className="block hover:text-blue-600">
                    <h4 className="font-medium text-sm">{post.title}</h4>
                    <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No recent posts available.</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default BlogSidebar
