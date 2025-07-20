import type { Metadata } from "next"
import { SchemaMarkup } from "@/components/schema-markup"
import { AdBanner } from "@/components/ad-banner"
import { Clock, MapPin, DollarSign } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Part Time Jobs Hiring Near Me Immediately - Flexible Work",
  description:
    "Find part time jobs hiring immediately near you. Discover flexible opportunities in retail, food service, customer support, and more. Ideal for students, parents, or those seeking supplemental income. Apply today for quick hire!",
  keywords:
    "part time jobs near me hiring immediately, jobs near me hiring immediately part time, immediate part time jobs, flexible jobs, student jobs, part-time work",
  alternates: {
    canonical: "/part-time-jobs",
  },
}

const partTimeJobs = [
  {
    title: "Part-Time Retail Associate",
    company: "Local Boutique",
    location: "Houston, TX",
    salary: "$14-16/hour",
    type: "Part-time",
    description: "Assist customers, manage inventory, and maintain store appearance. Flexible shifts available.",
    requirements: ["Customer service skills", "Weekend availability", "Reliable"],
    urgent: true,
  },
  {
    title: "Evening Dishwasher",
    company: "Downtown Diner",
    location: "Chicago, IL",
    salary: "$13-15/hour",
    type: "Part-time",
    description: "Wash dishes, clean kitchen, and assist with basic food prep during evening shifts.",
    requirements: ["Ability to stand for long periods", "Team player", "Food handler's permit (can obtain after hire)"],
    urgent: false,
  },
]

const jobPostingSchema = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: "Part Time Jobs Hiring Immediately",
  description: "Find part time jobs hiring immediately near you.",
  datePosted: new Date().toISOString(),
  employmentType: "PART_TIME",
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
      minValue: 13,
      maxValue: 16,
      unitText: "HOUR",
    },
  },
}

export default function PartTimeJobsPage() {
  return (
    <>
      <SchemaMarkup schema={jobPostingSchema} />

      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Part Time Jobs Hiring Near Me <span className="text-blue-600">Immediately</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Find part time jobs hiring immediately near you. Discover flexible opportunities in retail, food service,
              customer support, and more. Ideal for students, parents, or those seeking supplemental income.
            </p>
            <div className="flex items-center justify-center space-x-8 text-lg">
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-blue-600 mr-2" />
                <span className="font-semibold">2,900+ Jobs</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-green-600 mr-2" />
                <span className="font-semibold">Flexible Hours</span>
              </div>
              <div className="flex items-center">
                <DollarSign className="h-6 w-6 text-purple-600 mr-2" />
                <span className="font-semibold">$13-16/hour</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AdBanner slot="part-time-jobs-top" />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Part Time Jobs Hiring Immediately</h2>

          <div className="space-y-6">
            {partTimeJobs.map((job, index) => (
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

      <AdBanner slot="part-time-jobs-middle" />

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About Part Time Jobs Hiring Immediately</h2>

          <div className="prose prose-lg max-w-none">
            <p>
              Part-time jobs offer flexibility and are a great option for students, parents, or anyone looking to
              supplement their income. Many industries have immediate needs for part-time staff, making it easy to find
              quick employment.
            </p>

            <h3>Popular Part-Time Roles</h3>
            <ul>
              <li>
                <strong>Retail Sales:</strong> Flexible shifts in stores, assisting customers and managing sales.
              </li>
              <li>
                <strong>Food Service:</strong> Waitstaff, baristas, and kitchen help with varying hours.
              </li>
              <li>
                <strong>Customer Service:</strong> Part-time roles in call centers or online support.
              </li>
              <li>
                <strong>Delivery Driver:</strong> Flexible hours for food or package delivery services.
              </li>
            </ul>

            <h3>Benefits of Part-Time Work</h3>
            <p>
              Part-time positions often provide valuable work experience, networking opportunities, and a chance to earn
              income without the commitment of a full-time schedule. Many offer immediate start dates.
            </p>
          </div>
        </div>
      </section>

      <AdBanner slot="part-time-jobs-bottom" />
    </>
  )
}
