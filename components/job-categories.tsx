import Link from "next/link"
import { Truck, ShoppingBag, Utensils, Users, Home, Building, Clock, Briefcase } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const categories = [
  {
    title: "Warehouse Jobs",
    description: "Immediate hiring for warehouse workers, packers, and forklift operators",
    icon: Truck,
    href: "/warehouse-jobs",
    count: "8,100+ jobs",
  },
  {
    title: "Retail Jobs",
    description: "Sales associates, cashiers, and customer service positions",
    icon: ShoppingBag,
    href: "/retail-jobs",
    count: "1,300+ jobs",
  },
  {
    title: "Fast Food Jobs",
    description: "Restaurant crew, cooks, and shift managers hiring today",
    icon: Utensils,
    href: "/fast-food-jobs",
    count: "880+ jobs",
  },
  {
    title: "Entry Level Jobs",
    description: "No experience required - perfect for first-time job seekers",
    icon: Users,
    href: "/entry-level-jobs",
    count: "480+ jobs",
  },
  {
    title: "Remote Jobs",
    description: "Work from home opportunities with immediate start dates",
    icon: Home,
    href: "/remote-jobs",
    count: "2,400+ jobs",
  },
  {
    title: "Construction Jobs",
    description: "Construction workers, laborers, and skilled trades",
    icon: Building,
    href: "/construction-jobs",
    count: "880+ jobs",
  },
  {
    title: "Part Time Jobs",
    description: "Flexible hours for students, parents, or supplemental income",
    icon: Clock,
    href: "/part-time-jobs",
    count: "2,900+ jobs",
  },
  {
    title: "Full Time Jobs",
    description: "Stable employment with competitive salaries and benefits",
    icon: Briefcase,
    href: "/full-time-jobs",
    count: "6,600+ jobs",
  },
]

export function JobCategories() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Job Categories Hiring Immediately</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse jobs by category to find immediate hiring opportunities in your field. Many positions offer same-day
            interviews and quick start dates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Link key={category.title} href={category.href}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-200 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-blue-100 rounded-lg mr-4">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                        <p className="text-sm text-blue-600 font-medium">{category.count}</p>
                      </div>
                    </div>
                    <p className="text-gray-600">{category.description}</p>
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
