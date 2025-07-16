import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Laptop, TrendingUp, Users, ShoppingCart, PenTool, BarChart3 } from "lucide-react"

const categories = [
  {
    name: "Online Side Hustles",
    description: "Digital opportunities you can start from anywhere - virtual assistant, freelance writing, tutoring",
    icon: Laptop,
    count: "65+ articles",
    color: "from-blue-500 to-blue-600",
    href: "/categories/online-side-hustles",
  },
  {
    name: "Freelancing & Writing",
    description: "Turn your writing skills into income - copywriting, content creation, proofreading",
    icon: PenTool,
    count: "42+ articles",
    color: "from-purple-500 to-purple-600",
    href: "/categories/freelancing",
  },
  {
    name: "Healthcare Side Hustles",
    description: "Specialized opportunities for nurses, doctors, and healthcare professionals",
    icon: Users,
    count: "28+ articles",
    color: "from-green-500 to-green-600",
    href: "/categories/healthcare-side-hustles",
  },
  {
    name: "Delivery & Gig Apps",
    description: "Earn with your vehicle - DoorDash, Uber Eats, delivery services, and pickup truck gigs",
    icon: ShoppingCart,
    count: "35+ articles",
    color: "from-orange-500 to-orange-600",
    href: "/categories/delivery-gig-apps",
  },
  {
    name: "Creative & Design",
    description: "Monetize your creativity - graphic design, photography, 3D printing, digital products",
    icon: BarChart3,
    count: "38+ articles",
    color: "from-pink-500 to-pink-600",
    href: "/categories/creative-design",
  },
  {
    name: "Passive Income",
    description: "Build income streams that work while you sleep - real estate, investing, digital products",
    icon: TrendingUp,
    count: "32+ articles",
    color: "from-indigo-500 to-indigo-600",
    href: "/categories/passive-income",
  },
]

export function CategoryHighlights() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Explore by Category</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find the perfect side hustle that matches your skills, interests, and available time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <Link key={category.name} href={category.href}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-orange-600">{category.count}</span>
                      <span className="text-sm text-gray-500 group-hover:text-orange-600 transition-colors">
                        Explore →
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
