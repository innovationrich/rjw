import type { Metadata } from "next"
import { SchemaMarkup } from "@/components/schema-markup"
import { AdBanner } from "@/components/ad-banner"
import { Truck, MapPin, Clock, DollarSign } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb } from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Warehouse Jobs Hiring Near Me Immediately - Start Today",
  description:
    "Find warehouse jobs hiring immediately near you. Over 8,100 warehouse positions available including packers, forklift operators, and general laborers. Many positions require no experience and offer same-day interviews. Start your new warehouse job today!",
  keywords:
    "warehouse jobs near me hiring immediately, warehouse jobs hiring immediately, forklift operator jobs, packer jobs, warehouse worker, immediate warehouse jobs, no experience warehouse jobs, jobs near me hiring immediately warehouse",
  alternates: {
    canonical: "/warehouse-jobs",
  },
}

const warehouseJobs = [
  {
    title: "Warehouse Associate",
    company: "Amazon Fulfillment",
    location: "Multiple Locations",
    salary: "$18-22/hour",
    type: "Full-time",
    description:
      "Pick, pack, and ship customer orders. No experience required. Benefits include health insurance, 401k, and paid time off.",
    requirements: ["Must be 18+", "Able to lift 50lbs", "Pass background check"],
    urgent: true,
  },
  {
    title: "Forklift Operator",
    company: "FedEx Ground",
    location: "Houston, TX",
    salary: "$20-24/hour",
    type: "Full-time",
    description:
      "Operate forklift to move packages and freight. Forklift certification preferred but training provided.",
    requirements: ["Forklift experience preferred", "Valid driver's license", "Reliable transportation"],
    urgent: true,
  },
  {
    title: "Package Handler",
    company: "UPS",
    location: "Chicago, IL",
    salary: "$16-19/hour",
    type: "Part-time",
    description: "Load and unload packages from delivery trucks. Flexible scheduling available.",
    requirements: ["Must be 18+", "Able to work in fast-paced environment", "Physical stamina required"],
    urgent: false,
  },
]

const jobPostingSchema = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: "Warehouse Jobs Hiring Immediately",
  description: "Find warehouse jobs hiring immediately near you. Over 8,100 positions available.",
  datePosted: new Date().toISOString(),
  employmentType: ["FULL_TIME", "PART_TIME"],
  hiringOrganization: {
    "@type": "Organization",
    name: "Jobs Hiring Near Me Immediately",
    sameAs: "https://jobsnearmehiringimmediately.com",
  },
  jobLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
  },
  baseSalary: {
    "@type": "MonetaryAmount",
    currency: "USD",
    value: {
      "@type": "QuantitativeValue",
      minValue: 16,
      maxValue: 24,
      unitText: "HOUR",
    },
  },
}

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Warehouse Jobs Hiring Near Me Immediately - Start Today",
  description:
    "Find warehouse jobs hiring immediately near you. Over 8,100 warehouse positions available including packers, forklift operators, and general laborers. Many positions require no experience and offer same-day interviews. Start your new warehouse job today!",
  url: "https://jobsnearmehiringimmediately.com/warehouse-jobs",
}

export default function WarehouseJobsPage() {
  return (
    <>
      <SchemaMarkup schema={jobPostingSchema} />
      <SchemaMarkup schema={webPageSchema} />

      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Warehouse Jobs", href: "/warehouse-jobs" },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Warehouse Jobs Hiring Near Me <span className="text-blue-600">Immediately</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Find warehouse jobs hiring immediately near you. Over 8,100 warehouse positions available including
              packers, forklift operators, and general laborers. Many positions require no experience and offer same-day
              interviews.
            </p>
            <div className="flex items-center justify-center space-x-8 text-lg">
              <div className="flex items-center">
                <Truck className="h-6 w-6 text-blue-600 mr-2" />
                <span className="font-semibold">8,100+ Jobs</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-green-600 mr-2" />
                <span className="font-semibold">Immediate Hiring</span>
              </div>
              <div className="flex items-center">
                <DollarSign className="h-6 w-6 text-purple-600 mr-2" />
                <span className="font-semibold">$16-24/hour</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AdBanner slot="warehouse-jobs-top" />

      {/* Job Listings */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Warehouse Jobs Hiring Immediately</h2>

          <div className="space-y-6">
            {warehouseJobs.map((job, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                      <p className="text-lg text-blue-600 font-medium">{job.company}</p>
                    </div>
                    {job.urgent && <Badge variant="destructive">Urgent Hiring</Badge>}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-1" />
                      {job.salary}
                    </div>
                    <Badge variant="outline">{job.type}</Badge>
                  </div>

                  <p className="text-gray-700 mb-4">{job.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <Button size="lg" className="w-full sm:w-auto">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <AdBanner slot="warehouse-jobs-middle" />

      {/* Information Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About Warehouse Jobs Hiring Immediately</h2>

          <div className="prose prose-lg max-w-none">
            <p>
              Warehouse jobs hiring immediately are among the most accessible entry points into the workforce. These
              positions typically offer competitive hourly wages, benefits, and opportunities for advancement without
              requiring extensive prior experience.
            </p>

            <h3>Types of Warehouse Positions Available</h3>
            <ul>
              <li>
                <strong>Warehouse Associates:</strong> General laborers who pick, pack, and ship orders
              </li>
              <li>
                <strong>Forklift Operators:</strong> Specialized workers who move heavy materials and products
              </li>
              <li>
                <strong>Package Handlers:</strong> Workers who sort and process packages for shipping
              </li>
              <li>
                <strong>Inventory Clerks:</strong> Staff who track and manage warehouse inventory
              </li>
              <li>
                <strong>Loading Dock Workers:</strong> Team members who load and unload delivery trucks
              </li>
            </ul>

            <h3>Benefits of Warehouse Employment</h3>
            <p>
              Many warehouse employers offer competitive benefits packages including health insurance, 401k retirement
              plans, paid time off, and employee discounts. Some companies also provide tuition assistance and career
              advancement programs.
            </p>

            <h3>Getting Started in Warehouse Work</h3>
            <p>
              Most warehouse positions require minimal qualifications - typically just the ability to lift 50 pounds,
              pass a background check, and work in a fast-paced environment. Many employers provide on-the-job training
              for specialized equipment like forklifts.
            </p>
          </div>
        </div>
      </section>

      <AdBanner slot="warehouse-jobs-bottom" />
    </>
  )
}
