import type { Metadata } from "next"
import { SchemaMarkup } from "@/components/schema-markup"
import { AdBanner } from "@/components/ad-banner"
import { MapPin, Building, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Jobs Hiring Immediately in Philadelphia, PA - 5,900+ Positions",
  description:
    "Find jobs hiring immediately in Philadelphia, Pennsylvania. Over 5,900 immediate hiring opportunities in healthcare, education, hospitality, and retail. Apply today and start working this week in Philadelphia!",
  keywords:
    "jobs hiring immediately Philadelphia PA, Philadelphia jobs, immediate hiring Philadelphia, healthcare jobs Philadelphia, retail jobs Philadelphia, hospitality jobs Philadelphia, Philadelphia PA jobs",
  alternates: {
    canonical: "/philadelphia",
  },
}

const philadelphiaEmployers = [
  {
    name: "University of Pennsylvania Health System",
    jobCount: "1,000+",
    types: ["CNA", "Patient Transporter", "Administrative Assistant"],
    hiring: "Immediate",
  },
  {
    name: "Wawa",
    jobCount: "600+",
    types: ["Customer Service Associate", "Food Service Associate"],
    hiring: "Same Day",
  },
  {
    name: "Jefferson Health",
    jobCount: "500+",
    types: ["Medical Assistant", "Environmental Services"],
    hiring: "Immediate",
  },
]

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Jobs Hiring Immediately Philadelphia",
  description: "Find immediate hiring jobs in Philadelphia, Pennsylvania",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Philadelphia",
    addressRegion: "PA",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 39.9526,
    longitude: -75.1652,
  },
  url: "https://jobshiringnearmeimmediately.com/philadelphia",
}

export default function PhiladelphiaJobsPage() {
  return (
    <>
      <SchemaMarkup schema={localBusinessSchema} />

      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Jobs Hiring Immediately in <span className="text-blue-600">Philadelphia, PA</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Find jobs hiring immediately in Philadelphia, Pennsylvania. Over 5,900 immediate hiring opportunities in
              healthcare, education, hospitality, and retail. Major employers are actively recruiting for positions that
              start this week.
            </p>
            <div className="flex items-center justify-center space-x-8 text-lg">
              <div className="flex items-center">
                <Building className="h-6 w-6 text-blue-600 mr-2" />
                <span className="font-semibold">5,900+ Jobs</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-green-600 mr-2" />
                <span className="font-semibold">Philadelphia Metro</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="h-6 w-6 text-purple-600 mr-2" />
                <span className="font-semibold">Trending: Healthcare</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AdBanner slot="philadelphia-jobs-top" />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Major Philadelphia Employers Hiring Immediately</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {philadelphiaEmployers.map((employer, index) => (
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

      <AdBanner slot="philadelphia-jobs-middle" />

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Philadelphia Job Market Overview</h2>

          <div className="prose prose-lg max-w-none">
            <p>
              Philadelphia's robust economy, particularly in healthcare and education, provides a steady stream of
              immediate hiring opportunities. Its rich history and vibrant culture also fuel a strong hospitality
              sector.
            </p>

            <h3>Top Industries Hiring Immediately in Philadelphia</h3>
            <ul>
              <li>
                <strong>Healthcare:</strong> Home to numerous hospitals and medical research institutions.
              </li>
              <li>
                <strong>Education:</strong> Many universities and schools.
              </li>
              <li>
                <strong>Hospitality & Food Service:</strong> Driven by tourism and a diverse culinary scene.
              </li>
            </ul>

            <h3>Philadelphia Neighborhoods with High Job Availability</h3>
            <p>Job opportunities are concentrated in several key areas of Philadelphia:</p>
            <ul>
              <li>
                <strong>Center City:</strong> Retail, hospitality, and corporate roles.
              </li>
              <li>
                <strong>University City:</strong> Healthcare and education-related positions.
              </li>
              <li>
                <strong>Northeast Philadelphia:</strong> Industrial and retail jobs.
              </li>
            </ul>

            <h3>Average Wages for Immediate Hiring Jobs in Philadelphia</h3>
            <p>Philadelphia offers competitive wages for immediate hiring positions:</p>
            <ul>
              <li>Healthcare Support: $17-23/hour</li>
              <li>Retail Associates: $14-18/hour</li>
              <li>Food Service Workers: $13-16/hour + tips</li>
            </ul>
          </div>
        </div>
      </section>

      <AdBanner slot="philadelphia-jobs-bottom" />
    </>
  )
}
