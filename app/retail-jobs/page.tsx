import type { Metadata } from "next"
import { SchemaMarkup } from "@/components/schema-markup"
import { AdBanner } from "@/components/ad-banner"
import { ShoppingBag, MapPin, Clock, DollarSign } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Retail Jobs Hiring Near Me Immediately - Start Today",
  description:
    "Find retail jobs hiring immediately near you. Explore positions like sales associates, cashiers, and customer service roles. Many opportunities offer same-day interviews and quick start dates. Begin your retail career today!",
  keywords:
    "retail jobs near me hiring immediately, retail jobs hiring immediately, sales associate jobs, cashier jobs, customer service jobs, immediate retail jobs, no experience retail jobs",
  alternates: {
    canonical: "/retail-jobs",
  },
}

const retailJobs = [
  {
    title: "Retail Sales Associate",
    company: "Target",
    location: "Multiple Locations",
    salary: "$15-17/hour",
    type: "Full-time, Part-time",
    description:
      "Assist customers, process transactions, and maintain store appearance. Employee discount and benefits available.",
    requirements: ["Customer service skills", "Ability to stand for long periods", "Flexible availability"],
    urgent: true,
  },
  {
    title: "Cashier",
    company: "Walmart",
    location: "Chicago, IL",
    salary: "$14-16/hour",
    type: "Part-time",
    description: "Handle cash and card transactions, provide friendly service. Training provided.",
    requirements: ["Basic math skills", "Attention to detail", "Reliable"],
    urgent: false,
  },
]

const jobPostingSchema = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: "Retail Jobs Hiring Immediately",
  description: "Find retail jobs hiring immediately near you.",
  datePosted: new Date().toISOString(),
  employmentType: ["FULL_TIME", "PART_TIME"],
  hiringOrganization: {
    "@type": "Organization",
    name: "Jobs Hiring Near Me Immediately",
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
      minValue: 14,
      maxValue: 17,
      unitText: "HOUR",
    },
  },
}

export default function RetailJobsPage() {
  return (
    <>
      <SchemaMarkup schema={jobPostingSchema} />

      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Retail Jobs Hiring Near Me <span className="text-blue-600">Immediately</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Find retail jobs hiring immediately near you. Explore positions like sales associates, cashiers, and
              customer service roles. Many opportunities offer same-day interviews and quick start dates.
            </p>
            <div className="flex items-center justify-center space-x-8 text-lg">
              <div className="flex items-center">
                <ShoppingBag className="h-6 w-6 text-blue-600 mr-2" />
                <span className="font-semibold">1,300+ Jobs</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-green-600 mr-2" />
                <span className="font-semibold">Immediate Hiring</span>
              </div>
              <div className="flex items-center">
                <DollarSign className="h-6 w-6 text-purple-600 mr-2" />
                <span className="font-semibold">$14-17/hour</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AdBanner slot="retail-jobs-top" />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Retail Jobs Hiring Immediately</h2>

          <div className="space-y-6">
            {retailJobs.map((job, index) => (
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

      <AdBanner slot="retail-jobs-middle" />

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About Retail Jobs Hiring Immediately</h2>

          <div className="prose prose-lg max-w-none">
            <p>
              Retail jobs are a popular choice for those seeking immediate employment, offering flexible schedules and
              opportunities to interact with customers. Many retail positions are entry-level and provide on-the-job
              training.
            </p>

            <h3>Common Retail Positions</h3>
            <ul>
              <li>
                <strong>Sales Associate:</strong> Assist customers, answer questions, and help with purchases.
              </li>
              <li>
                <strong>Cashier:</strong> Process transactions accurately and efficiently.
              </li>
              <li>
                <strong>Stock Clerk:</strong> Organize and replenish merchandise on sales floors and in stockrooms.
              </li>
              <li>
                <strong>Customer Service Representative:</strong> Handle inquiries, resolve issues, and provide support.
              </li>
            </ul>

            <h3>Benefits of Working in Retail</h3>
            <p>
              Beyond immediate hiring, retail jobs often come with employee discounts, flexible hours, and a dynamic
              work environment. They can be a great stepping stone for building customer service and sales skills.
            </p>
          </div>
        </div>
      </section>

      <AdBanner slot="retail-jobs-bottom" />
    </>
  )
}
