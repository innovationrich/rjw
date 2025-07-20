import type { Metadata } from "next"
import { SchemaMarkup } from "@/components/schema-markup"
import { AdBanner } from "@/components/ad-banner"
import { MapPin, Building, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Breadcrumb } from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Jobs Hiring Immediately in Houston, TX - 12,500+ Positions",
  description:
    "Find jobs hiring immediately in Houston, Texas. Over 12,500 immediate hiring opportunities in warehouses, retail, restaurants, and more. Apply today and start working this week in Houston!",
  keywords:
    "jobs hiring immediately Houston TX, Houston jobs, immediate hiring Houston, warehouse jobs Houston, retail jobs Houston, fast food jobs Houston, Houston TX jobs, jobs near me hiring immediately Houston",
  alternates: {
    canonical: "/houston",
  },
}

const houstonEmployers = [
  {
    name: "Amazon Fulfillment Centers",
    jobCount: "2,500+",
    types: ["Warehouse Associate", "Forklift Operator", "Package Handler"],
    hiring: "Immediate",
  },
  {
    name: "H-E-B Grocery",
    jobCount: "800+",
    types: ["Cashier", "Stock Clerk", "Deli Associate"],
    hiring: "Same Day",
  },
  {
    name: "FedEx Ground",
    jobCount: "600+",
    types: ["Package Handler", "Loader", "Sorter"],
    hiring: "Immediate",
  },
  {
    name: "Walmart Distribution",
    jobCount: "450+",
    types: ["Order Filler", "Forklift Operator", "Maintenance"],
    hiring: "This Week",
  },
]

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Jobs Hiring Immediately Houston",
  description: "Find immediate hiring jobs in Houston, Texas",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Houston",
    addressRegion: "TX",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 29.7604,
    longitude: -95.3698,
  },
  url: "https://jobsnearmehiringimmediately.com/houston",
}

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Jobs Hiring Immediately in Houston, TX - 12,500+ Positions",
  description:
    "Find jobs hiring immediately in Houston, Texas. Over 12,500 immediate hiring opportunities in warehouses, retail, restaurants, and more. Apply today and start working this week in Houston!",
  url: "https://jobsnearmehiringimmediately.com/houston",
}

export default function HoustonJobsPage() {
  return (
    <>
      <SchemaMarkup schema={localBusinessSchema} />
      <SchemaMarkup schema={webPageSchema} />

      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Houston Jobs", href: "/houston" },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Jobs Hiring Immediately in <span className="text-blue-600">Houston, TX</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Find jobs hiring immediately in Houston, Texas. Over 12,500 immediate hiring opportunities in warehouses,
              retail, restaurants, and more. Major employers are actively recruiting for positions that start this week.
            </p>
            <div className="flex items-center justify-center space-x-8 text-lg">
              <div className="flex items-center">
                <Building className="h-6 w-6 text-blue-600 mr-2" />
                <span className="font-semibold">12,500+ Jobs</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-green-600 mr-2" />
                <span className="font-semibold">Houston Metro</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="h-6 w-6 text-purple-600 mr-2" />
                <span className="font-semibold">Trending: Logistics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AdBanner slot="houston-jobs-top" />

      {/* Major Employers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Major Houston Employers Hiring Immediately</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {houstonEmployers.map((employer, index) => (
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

      <AdBanner slot="houston-jobs-middle" />

      {/* Houston Job Market Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Houston Job Market Overview</h2>

          <div className="prose prose-lg max-w-none">
            <p>
              Houston's job market is thriving with immediate hiring opportunities across multiple industries. As the
              fourth-largest city in the United States and a major hub for energy, logistics, and healthcare, Houston
              offers diverse employment opportunities for job seekers at all experience levels.
            </p>

            <h3>Top Industries Hiring Immediately in Houston</h3>
            <ul>
              <li>
                <strong>Logistics & Warehousing:</strong> With the Port of Houston and major distribution centers,
                warehouse jobs are abundant
              </li>
              <li>
                <strong>Retail & Customer Service:</strong> Major retailers like H-E-B, Walmart, and Target are
                constantly hiring
              </li>
              <li>
                <strong>Food Service & Hospitality:</strong> Restaurants and hotels throughout the metro area need
                immediate staff
              </li>
              <li>
                <strong>Healthcare Support:</strong> Hospitals and clinics need support staff, orderlies, and
                administrative workers
              </li>
              <li>
                <strong>Construction & Manufacturing:</strong> Houston's growing economy drives demand for construction
                and manufacturing workers
              </li>
            </ul>

            <h3>Houston Neighborhoods with High Job Availability</h3>
            <p>Job opportunities are concentrated in several key areas of Houston:</p>
            <ul>
              <li>
                <strong>Northwest Houston (77040, 77041):</strong> Major distribution centers and warehouses
              </li>
              <li>
                <strong>Southwest Houston (77074, 77036):</strong> Retail and service industry jobs
              </li>
              <li>
                <strong>East Houston (77015, 77020):</strong> Port-related logistics and manufacturing
              </li>
              <li>
                <strong>North Houston (77060, 77032):</strong> Airport area with hospitality and service jobs
              </li>
            </ul>

            <h3>Average Wages for Immediate Hiring Jobs in Houston</h3>
            <p>Houston offers competitive wages for immediate hiring positions:</p>
            <ul>
              <li>Warehouse Associates: $16-22/hour</li>
              <li>Retail Associates: $14-18/hour</li>
              <li>Food Service Workers: $13-16/hour + tips</li>
              <li>Customer Service Representatives: $15-20/hour</li>
              <li>Construction Laborers: $18-25/hour</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Google Map Embed */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Houston Job Locations</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.0!2d-95.3698!3d29.7604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b7b4b8b8b8b8%3A0x8640b7b4b8b8b8b8!2sHouston%2C%20TX!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
              title="Google Map of Houston, TX" // Added title for accessibility
            />
          </div>
        </div>
      </section>

      <AdBanner slot="houston-jobs-bottom" />
    </>
  )
}
