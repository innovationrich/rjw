import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { OptimizedImage } from "@/components/optimized-image"

interface BlogPost {
  id: string
  title: string
  description: string
  category: string
  image: string
  publishedAt: string
}

export function BlogGrid({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Card key={post.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
          <Link href={`/blog/${post.id}`}>
            <OptimizedImage
              alt={post.title}
              className="h-48 w-full object-cover"
              height={200}
              src={post.image}
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width={300}
            />
          </Link>
          <CardContent className="flex flex-1 flex-col justify-between p-4">
            <div>
              <Link href={`/blog/${post.id}`}>
                <h3 className="text-xl font-semibold text-gray-900 hover:text-gray-700">{post.title}</h3>
              </Link>
              <p className="mt-2 text-gray-600">{post.description}</p>
            </div>
            <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
              <span>{post.category}</span>
              <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default BlogGrid
