import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, User, ArrowRight, Briefcase } from "lucide-react"
import { blogPosts } from "@/lib/blog-data"
import Image from "next/image"

export function FeaturedEntryLevelJobs() {
  // Get the entry-level jobs article (ID 4)
  const jobsPost = blogPosts.find((post) => post.id === 4)

  if (!jobsPost) return null

  return (
    <section className="py-16 bg-gradient-to-r from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Briefcase className="w-6 h-6 text-green-600" />
            <span className="text-green-600 font-semibold">ENTRY-LEVEL OPPORTUNITIES</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Jobs Hiring With No Experience</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find your first job or make a career change. Discover employers actively hiring entry-level workers in 2025.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <div className="md:flex">
            <div className="md:w-2/5">
              <div className="aspect-video md:aspect-square relative">
                <Image
                  src={jobsPost.image || "/placeholder.svg"}
                  alt={jobsPost.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-green-600 text-white hover:bg-green-700">{jobsPost.category}</Badge>
                </div>
              </div>
            </div>
            <div className="md:w-3/5 p-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">{jobsPost.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">{jobsPost.excerpt}</p>

              <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {jobsPost.author}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {jobsPost.readTime}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg border">
                  <div className="text-2xl font-bold text-green-600 mb-1">100+</div>
                  <div className="text-sm text-gray-600">Companies Hiring</div>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <div className="text-2xl font-bold text-blue-600 mb-1">$12-20</div>
                  <div className="text-sm text-gray-600">Starting Hourly Pay</div>
                </div>
              </div>

              <Link href={`/blog/${jobsPost.id}`}>
                <button className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">
                  Find Jobs Now <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>
        </Card>

        {/* Popular Job Categories */}
        <div className="mt-12 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Popular Entry-Level Categories</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { category: "Retail", icon: "🛍️", companies: "Target, Walmart" },
              { category: "Food Service", icon: "🍔", companies: "McDonald's, Starbucks" },
              { category: "Healthcare", icon: "🏥", companies: "Hospitals, Clinics" },
              { category: "Warehouse", icon: "📦", companies: "Amazon, FedEx" },
            ].map((job) => (
              <div
                key={job.category}
                className="text-center p-4 bg-white rounded-lg border hover:shadow-md transition-shadow"
              >
                <div className="text-2xl mb-2">{job.icon}</div>
                <div className="font-semibold text-gray-900">{job.category}</div>
                <div className="text-xs text-gray-500">{job.companies}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
