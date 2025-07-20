import type { Metadata } from "next"
import { SchemaMarkup } from "@/components/schema-markup"
import { AdBanner } from "@/components/ad-banner"
import { MapPin, Building, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Jobs Hiring Immediately in Chicago, IL - 8,900+ Positions",
  description:
    "Find jobs hiring immediately in Chicago, Illinois. Over 8,900 immediate hiring opportunities in retail, hospitality, logistics, and more. Apply today and start working this week in Chicago!",
  keywords:
    "jobs hiring immediately Chicago IL, Chicago jobs, immediate hiring Chicago, retail jobs Chicago, hospitality jobs Chicago, warehouse jobs Chicago, Chicago IL jobs",
  alternates: {
    canonical: "/chicago",
  },
}

const chicagoEmployers = [
  {
    name: "O'Hare International Airport",
    jobCount: "1,200+",
    types: ["Baggage Handler", "Security", "Retail"],
    hiring: "Immediate",
  },
  {
    name: "Mariano's (Kroger)",
    jobCount: "700+",
    types: ["Cashier", "Deli Clerk", "Stock Associate"],
    hiring: "Same Day",
  },
  {
    name: "UPS Customer Center",
    jobCount: "500+",
    types: ["Package Handler", "Driver Helper"],
    hiring: "Immediate",
  },
]

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Jobs Hiring Immediately Chicago",
  description: "Find immediate hiring jobs in Chicago, Illinois",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chicago",
    addressRegion: "IL",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.8781,
    longitude: -87.6298,
  },
  url: "https://jobshiringnearmeimmediately.com/chicago",
}

export default function ChicagoJobsPage() {
  return (
    <>
      <SchemaMarkup schema={localBusinessSchema} />

      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Jobs Hiring Immediately in <span className="text-blue-600">Chicago, IL</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Find jobs hiring immediately in Chicago, Illinois. Over 8,900 immediate hiring opportunities in retail,
              hospitality, logistics, and more. Major employers are actively recruiting for positions that start this
              week.
            </p>
            <div className="flex items-center justify-center space-x-8 text-lg">
              <div className="flex items-center">
                <Building className="h-6 w-6 text-blue-600 mr-2" />
                <span className="font-semibold">8,900+ Jobs</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-green-600 mr-2" />
                <span className="font-semibold">Chicago Metro</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="h-6 w-6 text-purple-600 mr-2" />
                <span className="font-semibold">Trending: Hospitality</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AdBanner slot="chicago-jobs-top" />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Major Chicago Employers Hiring Immediately</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {chicagoEmployers.map((employer, index) => (
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

      <AdBanner slot="chicago-jobs-middle" />

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Chicago Job Market Overview</h2>

          <div className="prose prose-lg max-w-none">
            <p>
              Chicago's diverse economy offers a wide range of immediate hiring opportunities. As a major transportation
              hub and a vibrant city, there's constant demand for workers in various sectors.
            </p>

            <h3>Top Industries Hiring Immediately in Chicago</h3>
            <ul>
              <li>
                <strong>Hospitality & Food Service:</strong> Hotels, restaurants, and event venues.
              </li>
              <li>
                <strong>Retail:</strong> Numerous shopping districts and malls.
              </li>
              <li>
                <strong>Logistics & Transportation:</strong> Driven by O'Hare and Midway airports, and major rail lines.
              </li>
            </ul>

            <h3>Chicago Neighborhoods with High Job Availability</h3>
            <p>Job opportunities are concentrated in several key areas of Chicago:</p>
            <ul>
              <li>
                <strong>Downtown Loop:</strong> Retail, hospitality, and office support.
              </li>
              <li>
                <strong>O'Hare Area:</strong> Airport-related logistics and service jobs.
              </li>
              <li>
                <strong>Suburban Retail Centers:</strong> Various retail and customer service roles.
              </li>
            </ul>

            <h3>Average Wages for Immediate Hiring Jobs in Chicago</h3>
            <p>Chicago offers competitive wages for immediate hiring positions:</p>
            <ul>
              <li>Retail Associates: $15-19/hour</li>
              <li>Food Service Workers: $14-17/hour + tips</li>
              <li>Warehouse Associates: $17-21/hour</li>
            </ul>
          </div>
        </div>
      </section>

      <AdBanner slot="chicago-jobs-bottom" />
    </>
  )
}
