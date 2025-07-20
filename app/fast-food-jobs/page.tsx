import type { Metadata } from "next"
import { SchemaMarkup } from "@/components/schema-markup"
import { AdBanner } from "@/components/ad-banner"
import { Utensils, MapPin, Clock, DollarSign } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Fast Food Jobs Hiring Near Me Immediately - Quick Start",
  description:
    "Find fast food jobs hiring immediately near you. Explore opportunities for crew members, cooks, and shift managers at popular restaurants. Many positions offer same-day interviews and quick start dates. Get hired in fast food today!",
  keywords:
    "fast food jobs near me hiring immediately, fast food jobs hiring immediately, crew member jobs, cook jobs, shift manager jobs, immediate fast food jobs, no experience fast food jobs",
  alternates: {
    canonical: "/fast-food-jobs",
  },
}

const fastFoodJobs = [
  {
    title: "Crew Member",
    company: "McDonald's",
    location: "Multiple Locations",
    salary: "$14-16/hour",
    type: "Full-time, Part-time",
    description: "Prepare food, serve customers, and maintain cleanliness. Free meals and flexible scheduling.",
    requirements: ["Ability to work in a fast-paced environment", "Team player", "Good communication"],
    urgent: true,
  },
  {
    title: "Cook",
    company: "Burger King",
    location: "Atlanta, GA",
    salary: "$15-17/hour",
    type: "Full-time",
    description: "Cook and prepare menu items according to standards. Experience preferred but not required.",
    requirements: ["Basic cooking skills", "Food safety knowledge", "Reliable"],
    urgent: false,
  },
]

const jobPostingSchema = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: "Fast Food Jobs Hiring Immediately",
  description: "Find fast food jobs hiring immediately near you.",
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

export default function FastFoodJobsPage() {
  return (
    <>
      <SchemaMarkup schema={jobPostingSchema} />

      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Fast Food Jobs Hiring Near Me <span className="text-blue-600">Immediately</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Find fast food jobs hiring immediately near you. Explore opportunities for crew members, cooks, and shift
              managers at popular restaurants. Many positions offer same-day interviews and quick start dates.
            </p>
            <div className="flex items-center justify-center space-x-8 text-lg">
              <div className="flex items-center">
                <Utensils className="h-6 w-6 text-blue-600 mr-2" />
                <span className="font-semibold">880+ Jobs</span>
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

      <AdBanner slot="fast-food-jobs-top" />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Fast Food Jobs Hiring Immediately</h2>

          <div className="space-y-6">
            {fastFoodJobs.map((job, index) => (
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

      <AdBanner slot="fast-food-jobs-middle" />

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About Fast Food Jobs Hiring Immediately</h2>

          <div className="prose prose-lg max-w-none">
            <p>
              Fast food jobs are ideal for individuals seeking quick employment and flexible hours. These roles are
              often entry-level and provide valuable experience in customer service, teamwork, and food preparation.
            </p>

            <h3>Typical Fast Food Roles</h3>
            <ul>
              <li>
                <strong>Crew Member:</strong> All-around role, assisting with food prep, serving, and cleaning.
              </li>
              <li>
                <strong>Cook:</strong> Focus on preparing menu items efficiently and to quality standards.
              </li>
              <li>
                <strong>Cashier:</strong> Handle orders and payments, ensuring a smooth customer experience.
              </li>
              <li>
                <strong>Shift Manager:</strong> Oversee daily operations, manage staff, and ensure customer
                satisfaction.
              </li>
            </ul>

            <h3>Why Choose a Fast Food Job?</h3>
            <p>
              Fast food establishments are almost always hiring, making them a reliable source for immediate work. They
              often offer opportunities for rapid advancement, especially for dedicated and reliable employees.
            </p>
          </div>
        </div>
      </section>

      <AdBanner slot="fast-food-jobs-bottom" />
    </>
  )
}
