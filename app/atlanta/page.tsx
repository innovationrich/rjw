import type { Metadata } from "next"
import { SchemaMarkup } from "@/components/schema-markup"
import { AdBanner } from "@/components/ad-banner"
import { MapPin, Building, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Jobs Hiring Immediately in Atlanta, GA - 7,200+ Positions",
  description:
    "Find jobs hiring immediately in Atlanta, Georgia. Over 7,200 immediate hiring opportunities in food service, logistics, film production, and more. Apply today and start working this week in Atlanta!",
  keywords:
    "jobs hiring immediately Atlanta GA, Atlanta jobs, immediate hiring Atlanta, fast food jobs Atlanta, warehouse jobs Atlanta, film jobs Atlanta, Atlanta GA jobs",
  alternates: {
    canonical: "/atlanta",
  },
}

const atlantaEmployers = [
  {
    name: "Hartsfield-Jackson Atlanta Airport",
    jobCount: "1,500+",
    types: ["Customer Service", "Baggage Handler", "Retail"],
    hiring: "Immediate",
  },
  {
    name: "Chick-fil-A",
    jobCount: "600+",
    types: ["Team Member", "Kitchen Staff", "Shift Leader"],
    hiring: "Same Day",
  },
  {
    name: "Amazon Fulfillment",
    jobCount: "400+",
    types: ["Warehouse Associate", "Sorter"],
    hiring: "Immediate",
  },
]

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Jobs Hiring Immediately Atlanta",
  description: "Find immediate hiring jobs in Atlanta, Georgia",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Atlanta",
    addressRegion: "GA",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.749,
    longitude: -84.388,
  },
  url: "https://jobshiringnearmeimmediately.com/atlanta",
}

export default function AtlantaJobsPage() {
  return (
    <>
      <SchemaMarkup schema={localBusinessSchema} />

      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Jobs Hiring Immediately in <span className="text-blue-600">Atlanta, GA</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Find jobs hiring immediately in Atlanta, Georgia. Over 7,200 immediate hiring opportunities in food
              service, logistics, film production, and more. Major employers are actively recruiting for positions that
              start this week.
            </p>
            <div className="flex items-center justify-center space-x-8 text-lg">
              <div className="flex items-center">
                <Building className="h-6 w-6 text-blue-600 mr-2" />
                <span className="font-semibold">7,200+ Jobs</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-green-600 mr-2" />
                <span className="font-semibold">Atlanta Metro</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="h-6 w-6 text-purple-600 mr-2" />
                <span className="font-semibold">Trending: Food Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AdBanner slot="atlanta-jobs-top" />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Major Atlanta Employers Hiring Immediately</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {atlantaEmployers.map((employer, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{employer.name}</h3>
                    <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      {employer.hiring}
                    </span>
                  </div>
                  <p className="text-blue-600 font-medium mb-3">{employer.jobCount} positions available</p>
                  <div className="space-y-1">
                    {employer.types.map((type, typeIndex) => (
                      <span
                        key={typeIndex}
                        className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm mr-2 mb-1"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <AdBanner slot="atlanta-jobs-middle" />

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Atlanta Job Market Overview</h2>

          <div className="prose prose-lg max-w-none">
            <p>
              Atlanta's dynamic economy, fueled by its status as a major transportation hub and growing tech and film
              industries, creates numerous immediate hiring opportunities.
            </p>

            <h3>Top Industries Hiring Immediately in Atlanta</h3>
            <ul>
              <li>
                <strong>Food Service & Hospitality:</strong> Driven by tourism and a vibrant culinary scene.
              </li>
              <li>
                <strong>Logistics & Transportation:</strong> Due to Hartsfield-Jackson Atlanta International Airport.
              </li>
              <li>
                <strong>Retail:</strong> Major shopping centers and a growing population.
              </li>
            </ul>

            <h3>Atlanta Neighborhoods with High Job Availability</h3>
            <p>Job opportunities are concentrated in several key areas of Atlanta:</p>
            <ul>
              <li>
                <strong>Midtown/Downtown:</strong> Hospitality, retail, and corporate support.
              </li>
              <li>
                <strong>Airport Area:</strong> Logistics, transportation, and airport services.
              </li>
              <li>
                <strong>Perimeter Center:</strong> Corporate offices and retail.
              </li>
            </ul>

            <h3>Average Wages for Immediate Hiring Jobs in Atlanta</h3>
            <p>Atlanta offers competitive wages for immediate hiring positions:</p>
            <ul>
              <li>Food Service Workers: $13-16/hour + tips</li>
              <li>Retail Associates: $14-18/hour</li>
              <li>Warehouse Associates: $16-20/hour</li>
            </ul>
          </div>
        </div>
      </section>

      <AdBanner slot="atlanta-jobs-bottom" />
    </>
  )
}
