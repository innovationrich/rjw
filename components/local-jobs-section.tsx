import Link from "next/link"
import { MapPin, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const cities = [
  {
    name: "Houston, TX",
    jobCount: "12,500+",
    trending: "Warehouse & Logistics",
    href: "/houston",
  },
  {
    name: "Chicago, IL",
    jobCount: "8,900+",
    trending: "Retail & Customer Service",
    href: "/chicago",
  },
  {
    name: "Atlanta, GA",
    jobCount: "7,200+",
    trending: "Food Service & Hospitality",
    href: "/atlanta",
  },
  {
    name: "Phoenix, AZ",
    jobCount: "6,800+",
    trending: "Construction & Manufacturing",
    href: "/phoenix",
  },
  {
    name: "Philadelphia, PA",
    jobCount: "5,900+",
    trending: "Healthcare & Support",
    href: "/philadelphia",
  },
  {
    name: "San Antonio, TX",
    jobCount: "5,400+",
    trending: "Retail & Sales",
    href: "/san-antonio",
  },
]

export function LocalJobsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Jobs Hiring Immediately by Location</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find immediate hiring opportunities in major cities across the United States. Local employers are actively
            recruiting for immediate start positions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city) => (
            <Link key={city.name} href={city.href}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-200 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <MapPin className="h-6 w-6 text-blue-600 mr-3" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{city.name}</h3>
                      <p className="text-blue-600 font-medium">{city.jobCount} jobs available</p>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    <span>Trending: {city.trending}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">Don't see your city? We have jobs available nationwide.</p>
          <Link href="/locations" className="text-blue-600 hover:text-blue-700 font-medium">
            View All Locations →
          </Link>
        </div>
      </div>
    </section>
  )
}
