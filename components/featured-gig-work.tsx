import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, User, ArrowRight, Smartphone } from "lucide-react"
import { blogPosts } from "@/lib/blog-data"
import Image from "next/image"

export function FeaturedGigWork() {
  // Get the gig work article (ID 3)
  const gigWorkPost = blogPosts.find((post) => post.id === 3)

  if (!gigWorkPost) return null

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Smartphone className="w-6 h-6 text-blue-600" />
            <span className="text-blue-600 font-semibold">GIG ECONOMY GUIDE</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Find Gig Work Near You</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover flexible earning opportunities in your city and online. From delivery apps to professional
            services.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <div className="md:flex">
            <div className="md:w-2/5">
              <div className="aspect-video md:aspect-square relative">
                <Image
                  src={gigWorkPost.image || "/placeholder.svg"}
                  alt={gigWorkPost.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600 text-white hover:bg-blue-700">{gigWorkPost.category}</Badge>
                </div>
              </div>
            </div>
            <div className="md:w-3/5 p-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">{gigWorkPost.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">{gigWorkPost.excerpt}</p>

              <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {gigWorkPost.author}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {gigWorkPost.readTime}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg border">
                  <div className="text-2xl font-bold text-blue-600 mb-1">15+</div>
                  <div className="text-sm text-gray-600">Major Cities Covered</div>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <div className="text-2xl font-bold text-green-600 mb-1">50+</div>
                  <div className="text-sm text-gray-600">Gig Platforms Listed</div>
                </div>
              </div>

              <Link href={`/blog/${gigWorkPost.id}`}>
                <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                  Find Gig Work Now <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>
        </Card>

        {/* Popular Cities */}
        <div className="mt-12 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Popular Gig Work Cities</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { city: "New York", icon: "🏙️" },
              { city: "Los Angeles", icon: "🌴" },
              { city: "Seattle", icon: "☕" },
              { city: "Austin", icon: "🎸" },
              { city: "Denver", icon: "🏔️" },
              { city: "Atlanta", icon: "🍑" },
              { city: "Portland", icon: "🌲" },
              { city: "Las Vegas", icon: "🎰" },
            ].map((location) => (
              <div
                key={location.city}
                className="text-center p-4 bg-white rounded-lg border hover:shadow-md transition-shadow"
              >
                <div className="text-2xl mb-2">{location.icon}</div>
                <div className="font-semibold text-gray-900">{location.city}</div>
                <div className="text-sm text-gray-500">Gig Opportunities</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
