import type { Metadata } from "next"
import { SchemaMarkup } from "@/components/schema-markup"
import { AdBanner } from "@/components/ad-banner"
import { Home, MapPin, Clock, DollarSign } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Remote Jobs Hiring Immediately - Work From Home Today",
  description:
    "Find remote jobs hiring immediately. Explore work-from-home opportunities across various industries, including customer service, tech support, and data entry. Many positions offer quick hiring processes and flexible schedules. Start your remote career today!",
  keywords:
    "remote jobs near me hiring immediately, jobs near me hiring immediately remote, work from home jobs, immediate remote jobs, online jobs, remote positions no experience",
  alternates: {
    canonical: "/remote-jobs",
  },
}

const remoteJobs = [
  {
    title: "Remote Customer Support Specialist",
    company: "Global Connect",
    location: "Work from Home (Anywhere US)",
    salary: "$18-22/hour",
    type: "Full-time",
    description: "Provide email and chat support to customers. Training and equipment provided.",
    requirements: ["High-speed internet", "Quiet workspace", "Excellent written communication"],
    urgent: true,
  },
  {
    title: "Virtual Assistant",
    company: "Executive Solutions",
    location: "Work from Home",
    salary: "$20-25/hour",
    type: "Part-time",
    description: "Manage schedules, emails, and administrative tasks for clients. Flexible hours.",
    requirements: ["Organizational skills", "Proficiency with office software", "Self-motivated"],
    urgent: false,
  },
]

const jobPostingSchema = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: "Remote Jobs Hiring Immediately",
  description: "Find remote jobs hiring immediately, work from home.",
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
      maxValue: 25,
      unitText: "HOUR",
    },
  },
}

export default function RemoteJobsPage() {
  return (
    <>
      <SchemaMarkup schema={jobPostingSchema} />

      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Remote Jobs Hiring Near Me <span className="text-blue-600">Immediately</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Find remote jobs hiring immediately. Explore work-from-home opportunities across various industries,
              including customer service, tech support, and data entry. Many positions offer quick hiring processes and
              flexible schedules.
            </p>
            <div className="flex items-center justify-center space-x-8 text-lg">
              <div className="flex items-center">
                <Home className="h-6 w-6 text-blue-600 mr-2" />
                <span className="font-semibold">2,400+ Jobs</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-green-600 mr-2" />
                <span className="font-semibold">Work From Home</span>
              </div>
              <div className="flex items-center">
                <DollarSign className="h-6 w-6 text-purple-600 mr-2" />
                <span className="font-semibold">$18-25/hour</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AdBanner slot="remote-jobs-top" />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Remote Jobs Hiring Immediately</h2>

          <div className="space-y-6">
            {remoteJobs.map((job, index) => (
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

      <AdBanner slot="remote-jobs-middle" />

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About Remote Jobs Hiring Immediately</h2>

          <div className="prose prose-lg max-w-none">
            <p>
              Remote jobs offer the flexibility of working from home, eliminating commute times and often providing a
              better work-life balance. Many companies are rapidly expanding their remote workforce, leading to
              immediate hiring needs.
            </p>

            <h3>Popular Remote Job Categories</h3>
            <ul>
              <li>
                <strong>Customer Service:</strong> Providing support via phone, email, or chat.
              </li>
              <li>
                <strong>Data Entry:</strong> Inputting and managing information.
              </li>
              <li>
                <strong>Virtual Assistant:</strong> Offering administrative and organizational support.
              </li>
              <li>
                <strong>Tech Support:</strong> Troubleshooting technical issues for users.
              </li>
            </ul>

            <h3>What You Need for a Remote Job</h3>
            <p>
              Typically, a stable internet connection, a quiet workspace, and good self-discipline are key. Many remote
              roles are entry-level and provide all necessary training and software.
            </p>
          </div>
        </div>
      </section>

      <AdBanner slot="remote-jobs-bottom" />
    </>
  )
}
