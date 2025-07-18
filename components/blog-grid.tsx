import type React from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getAllPosts, type BlogPost } from "@/lib/blog-data"

const BlogGrid: React.FC = () => {
  const posts = getAllPosts()

  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">No blog posts available at the moment.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post: BlogPost) => (
        <Card key={post.id} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <CardTitle className="text-lg">
              <Link href={`/blog/${post.id}`} className="hover:text-blue-600">
                {post.title}
              </Link>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <div className="flex justify-between items-center">
              <Badge variant="secondary">{post.category}</Badge>
              <span className="text-sm text-gray-500">{post.date}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default BlogGrid
