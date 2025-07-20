import type { Metadata } from "next"
import { SchemaMarkup } from "@/components/schema-markup"
import { AdBanner } from "@/components/ad-banner"
import { MapPin, Building, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Jobs Hiring Immediately in Phoenix, AZ - 6,800+ Positions",
  description:
    "Find jobs hiring immediately in Phoenix, Arizona. Over 6,800 immediate hiring opportunities in construction, manufacturing, healthcare, and tourism. Apply today and start working this week in Phoenix!",
  keywords:
    "jobs hiring immediately Phoenix AZ, Phoenix jobs, immediate hiring Phoenix, construction jobs Phoenix, manufacturing jobs Phoenix, healthcare jobs Phoenix, Phoenix AZ jobs",
  alternates: {
    canonical: "/phoenix",
  },
}

const phoenixEmployers = [
  {
    name: "Banner Health",
    jobCount: "900+",
    types: ["CNA", "Medical Assistant", "Support Staff"],
    hiring: "Immediate",
  },
  {
    name: "Intel",
    jobCount: "500+",
    types: ["Manufacturing Technician", "Assembly Line Worker"],
    hiring: "Immediate",
  },
  {
    name: "Grand Canyon University",
    jobCount: "300+",
    types: ["Campus Support", "Food Service", "Administrative"],
    hiring: "This Week",
  },
]

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Jobs Hiring Immediately Phoenix",
  description: "Find immediate hiring jobs in Phoenix, Arizona",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Phoenix",
    addressRegion: "AZ",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.4484,
    longitude: -112.074,
  },
  url: "https://jobshiringnearmeimmediately.com/phoenix",
}

export default function PhoenixJobsPage() {
  return (
    <>
      <SchemaMarkup schema={localBusinessSchema} />

      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Jobs Hiring Immediately in <span className="text-blue-600">Phoenix, AZ</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Find jobs hiring immediately in Phoenix, Arizona. Over 6,800 immediate hiring opportunities in
              construction, manufacturing, healthcare, and tourism. Major employers are actively recruiting for
              positions that start this week.
            </p>
            <div className="flex items-center justify-center space-x-8 text-lg">
              <div className="flex items-center">
                <Building className="h-6 w-6 text-blue-600 mr-2" />
                <span className="font-semibold">6,800+ Jobs</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-green-600 mr-2" />
                <span className="font-semibold">Phoenix Metro</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="h-6 w-6 text-purple-600 mr-2" />
                <span className="font-semibold">Trending: Manufacturing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AdBanner slot="phoenix-jobs-top" />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Major Phoenix Employers Hiring Immediately</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {phoenixEmployers.map((employer, index) => (
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

      <AdBanner slot="phoenix-jobs-middle" />

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Phoenix Job Market Overview</h2>

          <div className="prose prose-lg max-w-none">
            <p>
              Phoenix's booming economy, particularly in technology, manufacturing, and healthcare, offers a wealth of
              immediate hiring opportunities. Its growing population fuels demand across various service sectors.
            </p>

            <h3>Top Industries Hiring Immediately in Phoenix</h3>
            <ul>
              <li>
                <strong>Manufacturing:</strong> Driven by semiconductor and advanced manufacturing companies.
              </li>
              <li>
                <strong>Construction:</strong> Due to rapid urban development and expansion.
              </li>
              <li>
                <strong>Healthcare:</strong> Hospitals and clinics are constantly expanding.
              </li>
            </ul>

            <h3>Phoenix Neighborhoods with High Job Availability</h3>
            <p>Job opportunities are concentrated in several key areas of Phoenix:</p>
            <ul>
              <li>
                <strong>Chandler/Tempe:</strong> Tech and manufacturing jobs.
              </li>
              <li>
                <strong>Downtown Phoenix:</strong> Healthcare, hospitality, and retail.
              </li>
              <li>
                <strong>Glendale/Peoria:</strong> Retail, logistics, and service industries.
              </li>
            </ul>

            <h3>Average Wages for Immediate Hiring Jobs in Phoenix</h3>
            <p>Phoenix offers competitive wages for immediate hiring positions:</p>
            <ul>
              <li>Manufacturing Technicians: $20-28/hour</li>
              <li>Construction Laborers: $18-25/hour</li>
              <li>Healthcare Support: $16-22/hour</li>
            </ul>
          </div>
        </div>
      </section>

      <AdBanner slot="phoenix-jobs-bottom" />
    </>
  )
}
