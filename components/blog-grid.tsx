import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, User } from "lucide-react"
import { getAllPosts } from "@/lib/blog-data"

export async function BlogGrid() {
  const posts = getAllPosts() // Ensure this fetches all posts, sorted by date

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {posts.map((post) => (
        <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="aspect-video relative">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.alt || post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200">{post.category}</Badge>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
              <Link href={`/blog/${post.slug}`} className="hover:text-orange-600 transition-colors">
                {post.title}
              </Link>
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {post.author}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
              </div>
              <span>{post.date}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
