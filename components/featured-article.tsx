import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, User, ArrowRight, TrendingUp } from "lucide-react"
import { blogPosts } from "@/lib/blog-data"
import Image from "next/image"

export function FeaturedArticle() {
  // Get the comprehensive passive income guide (ID 2)
  const featuredPost = blogPosts.find((post) => post.id === 2)

  if (!featuredPost) return null

  return (
    <section className="py-16 bg-gradient-to-r from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <TrendingUp className="w-6 h-6 text-indigo-600" />
            <span className="text-indigo-600 font-semibold">FEATURED GUIDE</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Master Passive Income in 2024</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our most comprehensive guide covering 15 proven strategies to build wealth while you sleep
          </p>
        </div>

        <Card className="max-w-4xl mx-auto overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <div className="md:flex">
            <div className="md:w-2/5">
              <div className="aspect-video md:aspect-square relative">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-indigo-600 text-white hover:bg-indigo-700">{featuredPost.category}</Badge>
                </div>
              </div>
            </div>
            <div className="md:w-3/5 p-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">{featuredPost.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">{featuredPost.excerpt}</p>

              <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {featuredPost.author}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {featuredPost.readTime}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg border">
                  <div className="text-2xl font-bold text-indigo-600 mb-1">15+</div>
                  <div className="text-sm text-gray-600">Passive Income Strategies</div>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <div className="text-2xl font-bold text-green-600 mb-1">$5K+</div>
                  <div className="text-sm text-gray-600">Monthly Potential</div>
                </div>
              </div>

              <Link href={`/blog/${featuredPost.id}`}>
                <button className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors">
                  Read Complete Guide <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>
        </Card>

        {/* Key Topics Covered */}
        <div className="mt-12 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">What You'll Learn</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-indigo-600 font-bold">💰</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Real Estate & REITs</h4>
              <p className="text-sm text-gray-600">Rental properties, land investments, and dividend ETFs</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-green-600 font-bold">📱</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Apps & Digital Income</h4>
              <p className="text-sm text-gray-600">Best passive income apps and affiliate marketing</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-600 font-bold">🌍</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Global Opportunities</h4>
              <p className="text-sm text-gray-600">Passive income visas and international investing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
