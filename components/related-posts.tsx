import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { blogPosts } from "@/lib/blog-data"
import Image from "next/image"

interface RelatedPostsProps {
  currentPostId: number
  category: string
  limit?: number
}

export function RelatedPosts({ currentPostId, category, limit = 3 }: RelatedPostsProps) {
  // Get posts in the same category, excluding the current post
  const relatedPosts = blogPosts
    .filter((post) => post.id !== currentPostId && post.category === category)
    .slice(0, limit)

  // If we don't have enough posts in the same category, add some from other categories
  const additionalPosts = blogPosts
    .filter((post) => post.id !== currentPostId && post.category !== category)
    .slice(0, limit - relatedPosts.length)

  const postsToShow = [...relatedPosts, ...additionalPosts].slice(0, limit)

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {postsToShow.map((post) => (
        <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="aspect-video relative">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <CardContent className="p-4">
            <div className="text-sm text-orange-600 mb-2">{post.category}</div>
            <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">
              <Link href={`/blog/${post.id}`} className="hover:text-orange-600 transition-colors">
                {post.title}
              </Link>
            </h4>
            <div className="text-sm text-gray-500">{post.readTime}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
