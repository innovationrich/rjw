import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, User, ArrowRight } from "lucide-react"
import { getAllPosts } from "@/lib/blog-data" // Changed to getAllPosts
import Image from "next/image"

export function FeaturedPosts() {
  const allPosts = getAllPosts() // Get all posts, which are already sorted by date (newest first)
  const mainPost = allPosts[0] // The most recent post
  const otherPosts = allPosts.slice(1, 4) // The next three most recent posts

  if (!mainPost) return null // Handle case where there are no posts

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Featured Articles</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our most popular and actionable content to help you start earning extra income today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Main Featured Post */}
          <Card className="lg:col-span-1 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="aspect-video relative">
              <Image
                src={mainPost.image || "/placeholder.svg"}
                alt={mainPost.alt || mainPost.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200">{mainPost.category}</Badge>
                <span className="text-sm text-gray-500">Featured</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                <Link href={`/blog/${mainPost.slug}`} className="hover:text-orange-600 transition-colors">
                  {mainPost.title}
                </Link>
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{mainPost.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {mainPost.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {mainPost.readTime}
                  </div>
                </div>
                <span>{mainPost.date}</span>
              </div>
            </CardContent>
          </Card>

          {/* Other Featured Posts */}
          <div className="space-y-6">
            {otherPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="w-24 h-24 relative rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.alt || post.title}
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    </div>
                    <div className="flex-1">
                      <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200 mb-2">{post.category}</Badge>
                      <h4 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                        <Link href={`/blog/${post.slug}`} className="hover:text-orange-600 transition-colors">
                          {post.title}
                        </Link>
                      </h4>
                      <div className="flex items-center gap-3 text-sm text-gray-500">
                        <span>{post.author}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link href="/blog">
            <button className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors">
              View All Articles <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
