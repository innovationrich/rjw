import type { Metadata } from "next"
import { SchemaMarkup } from "@/components/schema-markup"
import { AdBanner } from "@/components/ad-banner"
import { MapPin, Building, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Jobs Hiring Immediately in San Antonio, TX - 5,400+ Positions",
  description:
    "Find jobs hiring immediately in San Antonio, Texas. Over 5,400 immediate hiring opportunities in retail, hospitality, military support, and healthcare. Apply today and start working this week in San Antonio!",
  keywords:
    "jobs hiring immediately San Antonio TX, San Antonio jobs, immediate hiring San Antonio, retail jobs San Antonio, hospitality jobs San Antonio, healthcare jobs San Antonio, San Antonio TX jobs",
  alternates: {
    canonical: "/san-antonio",
  },
}

const sanAntonioEmployers = [
  {
    name: "H-E-B Grocery",
    jobCount: "700+",
    types: ["Cashier", "Stock Clerk", "Deli Associate"],
    hiring: "Same Day",
  },
  {
    name: "USAA",
    jobCount: "500+",
    types: ["Customer Service Rep", "Claims Adjuster (Entry-Level)"],
    hiring: "Immediate",
  },
  {
    name: "Six Flags Fiesta Texas",
    jobCount: "400+",
    types: ["Ride Operator", "Food Service", "Retail"],
    hiring: "Seasonal Immediate",
  },
]

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Jobs Hiring Immediately San Antonio",
  description: "Find immediate hiring jobs in San Antonio, Texas",
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Antonio",
    addressRegion: "TX",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 29.4241,
    longitude: -98.4936,
  },
  url: "https://jobshiringnearmeimmediately.com/san-antonio",
}

export default function SanAntonioJobsPage() {
  return (
    <>
      <SchemaMarkup schema={localBusinessSchema} />

      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Jobs Hiring Immediately in <span className="text-blue-600">San Antonio, TX</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Find jobs hiring immediately in San Antonio, Texas. Over 5,400 immediate hiring opportunities in retail,
              hospitality, military support, and healthcare. Major employers are actively recruiting for positions that
              start this week.
            </p>
            <div className="flex items-center justify-center space-x-8 text-lg">
              <div className="flex items-center">
                <Building className="h-6 w-6 text-blue-600 mr-2" />
                <span className="font-semibold">5,400+ Jobs</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-green-600 mr-2" />
                <span className="font-semibold">San Antonio Metro</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="h-6 w-6 text-purple-600 mr-2" />
                <span className="font-semibold">Trending: Retail & Hospitality</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AdBanner slot="san-antonio-jobs-top" />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Major San Antonio Employers Hiring Immediately</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sanAntonioEmployers.map((employer, index) => (
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

      <AdBanner slot="san-antonio-jobs-middle" />

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">San Antonio Job Market Overview</h2>

          <div className="prose prose-lg max-w-none">
            <p>
              San Antonio's economy is diverse, with strong sectors in military, healthcare, tourism, and retail,
              creating consistent demand for immediate hires.
            </p>

            <h3>Top Industries Hiring Immediately in San Antonio</h3>
            <ul>
              <li>
                <strong>Retail & Sales:</strong> Numerous shopping centers and a growing population.
              </li>
              <li>
                <strong>Hospitality & Tourism:</strong> Driven by its popular tourist attractions like the Alamo and
                Riverwalk.
              </li>
              <li>
                <strong>Healthcare:</strong> A significant number of hospitals and medical facilities.
              </li>
            </ul>

            <h3>San Antonio Neighborhoods with High Job Availability</h3>
            <p>Job opportunities are concentrated in several key areas of San Antonio:</p>
            <ul>
              <li>
                <strong>Downtown/Riverwalk:</strong> Hospitality and retail jobs.
              </li>
              <li>
                <strong>Northwest San Antonio:</strong> Retail, healthcare, and corporate offices.
              </li>
              <li>
                <strong>Military Bases:</strong> Support roles for military personnel and families.
              </li>
            </ul>

            <h3>Average Wages for Immediate Hiring Jobs in San Antonio</h3>
            <p>San Antonio offers competitive wages for immediate hiring positions:</p>
            <ul>
              <li>Retail Associates: $13-17/hour</li>
              <li>Food Service Workers: $12-15/hour + tips</li>
              <li>Healthcare Support: $15-20/hour</li>
            </ul>
          </div>
        </div>
      </section>

      <AdBanner slot="san-antonio-jobs-bottom" />
    </>
  )
}
