import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import {
  Laptop,
  TrendingUp,
  ShoppingCart,
  PenTool,
  BarChart3,
  Stethoscope,
  Camera,
  Truck,
  MapPin,
  Users,
  Briefcase,
} from "lucide-react"

const allCategories = [
  {
    name: "Online Side Hustles",
    description: "Digital opportunities you can start from anywhere - virtual assistant, freelance writing, tutoring",
    icon: Laptop,
    count: "65+ articles",
    color: "from-blue-500 to-blue-600",
    href: "/categories/online-side-hustles",
  },
  {
    name: "Freelancing",
    description: "Turn your skills into income - copywriting, content creation, consulting, and client services",
    icon: PenTool,
    count: "42+ articles",
    color: "from-purple-500 to-purple-600",
    href: "/categories/freelancing",
  },
  {
    name: "Healthcare Side Hustles",
    description: "Specialized opportunities for nurses, doctors, and healthcare professionals",
    icon: Stethoscope,
    count: "28+ articles",
    color: "from-green-500 to-green-600",
    href: "/categories/healthcare-side-hustles",
  },
  {
    name: "Delivery & Gig Apps",
    description: "Earn with your vehicle - DoorDash, Uber Eats, delivery services, and pickup truck gigs",
    icon: Truck,
    count: "35+ articles",
    color: "from-orange-500 to-orange-600",
    href: "/categories/delivery-gig-apps",
  },
  {
    name: "Creative & Design",
    description: "Monetize your creativity - graphic design, photography, 3D printing, digital products",
    icon: Camera,
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
  {
    name: "E-commerce",
    description: "Start and scale your online store with dropshipping, Amazon FBA, and digital products",
    icon: ShoppingCart,
    count: "28+ articles",
    color: "from-emerald-500 to-emerald-600",
    href: "/categories/ecommerce",
  },
  {
    name: "Content Creation",
    description: "YouTube, blogging, social media, and other content monetization strategies",
    icon: BarChart3,
    count: "25+ articles",
    color: "from-violet-500 to-violet-600",
    href: "/categories/content-creation",
  },
  {
    name: "Gig Economy",
    description: "Flexible work opportunities and platform-based earning strategies",
    icon: Briefcase,
    count: "30+ articles",
    color: "from-cyan-500 to-cyan-600",
    href: "/categories/gig-economy",
  },
  {
    name: "Entry-Level Jobs",
    description: "No experience required - retail, food service, warehouse, and beginner-friendly positions",
    icon: Users,
    count: "45+ articles",
    color: "from-rose-500 to-rose-600",
    href: "/categories/entry-level-jobs",
  },
  {
    name: "Local Job Search",
    description: "Find employment opportunities in your area across all industries and skill levels",
    icon: MapPin,
    count: "50+ articles",
    color: "from-amber-500 to-amber-600",
    href: "/categories/local-job-search",
  },
  {
    name: "Specialized Side Hustles",
    description: "Leverage professional expertise - teachers, consultants, and skilled professionals",
    icon: Stethoscope,
    count: "22+ articles",
    color: "from-teal-500 to-teal-600",
    href: "/categories/specialized-side-hustles",
  },
]

export const metadata = {
  title: "Side Hustle Categories - Find Your Perfect Opportunity",
  description:
    "Browse all side hustle categories including online opportunities, freelancing, healthcare, delivery apps, creative work, and passive income strategies.",
}

export default function CategoriesPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gradient-to-r from-orange-50 to-orange-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Side Hustle Categories</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Explore side hustles by category to find opportunities that match your skills, interests, and available
            time.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allCategories.map((category) => {
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
    </div>
  )
}
