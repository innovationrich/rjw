import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, DollarSign, Users } from "lucide-react"
import { stockImages } from "@/lib/images"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-orange-50 to-orange-100 py-20 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={stockImages.hero[0] || "/placeholder.svg"}
          alt="Side hustle success background"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Turn Your Skills Into
              <span className="text-orange-600"> Extra Income</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover proven side hustles, passive income strategies, and freelancing tips that have helped thousands
              earn an extra $1,000+ per month. Start your journey to financial freedom today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                <Link href="/blog" className="flex items-center">
                  Start Reading <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
              >
                <Link href="/categories">Browse Categories</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mb-2 mx-auto">
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Success Stories</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mb-2 mx-auto">
                  <DollarSign className="w-6 h-6 text-orange-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">$2M+</div>
                <div className="text-sm text-gray-600">Generated Income</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mb-2 mx-auto">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">50K+</div>
                <div className="text-sm text-gray-600">Community Members</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-6 text-white mb-6">
                <h3 className="text-2xl font-bold mb-2">This Month's Top Earner</h3>
                <p className="text-orange-100">Sarah M. - Virtual Assistant</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Monthly Income:</span>
                  <span className="text-2xl font-bold text-green-600">$4,250</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Hours/Week:</span>
                  <span className="font-semibold">15-20</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Started:</span>
                  <span className="font-semibold">6 months ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
