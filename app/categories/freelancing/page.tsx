import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, User, Calendar, ArrowLeft } from "lucide-react"
import { getPostsByCategory } from "@/lib/blog-data"
import Image from "next/image"

export const metadata = {
  title: "Freelancing Success - Build Your Independent Career",
  description:
    "Master freelancing with guides on finding clients, setting rates, building portfolios, and scaling your freelance business across all industries.",
}

export default function FreelancingPage() {
  const posts = getPostsByCategory("Freelancing")

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gradient-to-r from-purple-50 to-purple-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/categories" className="inline-flex items-center text-purple-600 hover:text-purple-800 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Categories
          </Link>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Freelancing Success</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Build a thriving freelance career with expert advice on client acquisition, pricing strategies, and business
            growth.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 gap-8">
            {posts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <div className="aspect-video md:aspect-square relative">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200">{post.category}</Badge>
                        <div className="flex gap-1">
                          {post.tags.slice(0, 2).map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                        <Link href={`/blog/${post.id}`} className="hover:text-purple-600 transition-colors">
                          {post.title}
                        </Link>
                      </h2>
                      <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No posts found</h3>
            <p className="text-gray-600">Check back soon for new freelancing content!</p>
          </div>
        )}
      </div>
    </div>
  )
}
