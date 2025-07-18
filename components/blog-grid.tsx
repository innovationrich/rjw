import Image from "next/image"
import Link from "next/link"
import { blogPosts } from "@/lib/blog-data"
import { Badge } from "@/components/ui/badge"

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  category: string
  date: string
  image?: string
}

export function BlogGrid({ posts = blogPosts }: { posts?: BlogPost[] }) {
  if (!posts || posts.length === 0) {
    return <p className="py-10 text-center text-gray-600">No blog posts found.</p>
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <article key={post.id} className="overflow-hidden rounded-lg bg-white shadow hover:shadow-lg">
          <Link href={`/blog/${post.id}`}>
            <Image
              src={post.image ?? "/placeholder.svg?height=200&width=400&query=blog+thumbnail"}
              alt={post.title}
              width={400}
              height={200}
              className="h-48 w-full object-cover"
            />
          </Link>
          <div className="space-y-3 p-4">
            <Badge variant="secondary">{post.category}</Badge>
            <h2 className="text-lg font-semibold leading-tight">
              <Link href={`/blog/${post.id}`} className="hover:text-emerald-600">
                {post.title}
              </Link>
            </h2>
            <p className="text-sm text-gray-600">{post.excerpt}</p>
            <time className="block text-xs text-gray-500">{new Date(post.date).toLocaleDateString()}</time>
          </div>
        </article>
      ))}
    </div>
  )
}

export default BlogGrid
