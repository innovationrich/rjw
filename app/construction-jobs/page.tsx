import type { Metadata } from "next"
import { SchemaMarkup } from "@/components/schema-markup"
import { AdBanner } from "@/components/ad-banner"
import { Building, MapPin, Clock, DollarSign } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Construction Jobs Hiring Near Me Immediately - Build Your Career",
  description:
    "Find construction jobs hiring immediately near you. Explore opportunities for laborers, skilled trades, and project support roles. Many positions offer competitive pay and immediate start dates. Start building your career in construction today!",
  keywords:
    "construction jobs near me hiring immediately, construction jobs hiring immediately, laborer jobs, skilled trades, immediate construction jobs, no experience construction jobs",
  alternates: {
    canonical: "/construction-jobs",
  },
}

const constructionJobs = [
  {
    title: "Construction Laborer",
    company: "City Builders Inc.",
    location: "Houston, TX",
    salary: "$18-25/hour",
    type: "Full-time",
    description: "Assist with various tasks on construction sites, including site prep and material handling.",
    requirements: ["Ability to lift heavy objects", "Reliable transportation", "Safety-conscious"],
    urgent: true,
  },
  {
    title: "General Handyman",
    company: "Rapid Repair Services",
    location: "Phoenix, AZ",
    salary: "$20-30/hour",
    type: "Full-time",
    description: "Perform general maintenance and repair tasks for residential and commercial properties.",
    requirements: ["Basic tool knowledge", "Problem-solving skills", "Valid driver's license"],
    urgent: false,
  },
]

const jobPostingSchema = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: "Construction Jobs Hiring Immediately",
  description: "Find construction jobs hiring immediately near you.",
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
      minValue: 18,
      maxValue: 30,
      unitText: "HOUR",
    },
  },
}

export default function ConstructionJobsPage() {
  return (
    <>
      <SchemaMarkup schema={jobPostingSchema} />

      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Construction Jobs Hiring Near Me <span className="text-blue-600">Immediately</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Find construction jobs hiring immediately near you. Explore opportunities for laborers, skilled trades,
              and project support roles. Many positions offer competitive pay and immediate start dates.
            </p>
            <div className="flex items-center justify-center space-x-8 text-lg">
              <div className="flex items-center">
                <Building className="h-6 w-6 text-blue-600 mr-2" />
                <span className="font-semibold">880+ Jobs</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-green-600 mr-2" />
                <span className="font-semibold">Immediate Hiring</span>
              </div>
              <div className="flex items-center">
                <DollarSign className="h-6 w-6 text-purple-600 mr-2" />
                <span className="font-semibold">$18-30/hour</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AdBanner slot="construction-jobs-top" />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Construction Jobs Hiring Immediately</h2>

          <div className="space-y-6">
            {constructionJobs.map((job, index) => (
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

      <AdBanner slot="construction-jobs-middle" />

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About Construction Jobs Hiring Immediately</h2>

          <div className="prose prose-lg max-w-none">
            <p>
              The construction industry frequently has immediate hiring needs due to project-based work and high demand.
              These jobs often offer competitive wages and opportunities for skill development.
            </p>

            <h3>Types of Construction Roles</h3>
            <ul>
              <li>
                <strong>Construction Laborer:</strong> General support, site cleanup, material handling.
              </li>
              <li>
                <strong>Skilled Trades:</strong> Electricians, plumbers, carpenters (may require certifications).
              </li>
              <li>
                <strong>Heavy Equipment Operator:</strong> Operating machinery like excavators and bulldozers.
              </li>
            </ul>

            <h3>Benefits of Construction Work</h3>
            <p>
              Beyond immediate employment, construction jobs can lead to long-term careers with increasing pay as skills
              are acquired. Many companies offer benefits and opportunities for apprenticeships.
            </p>
          </div>
        </div>
      </section>

      <AdBanner slot="construction-jobs-bottom" />
    </>
  )
}
