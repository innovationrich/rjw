import type { Metadata } from "next"
import { SchemaMarkup } from "@/components/schema-markup"
import { AdBanner } from "@/components/ad-banner"
import { Clock, MapPin, DollarSign } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

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

            <h3>Job Outlook and Demand for Part-Time Positions</h3>
            <p>
              Part-time jobs are consistently available across various sectors, driven by businesses needing flexible
              staffing to cover peak hours, seasonal demands, or specific project needs. This makes part-time work an
              excellent option for students, parents, or anyone seeking supplemental income or a flexible schedule.
            </p>

            <h3>Typical Roles & Responsibilities in Part-Time Jobs</h3>
            <ul>
              <li>
                <strong>Part-Time Retail Associate:</strong> Assist customers, manage sales, and maintain store
                appearance during specific shifts.
              </li>
              <li>
                <strong>Food Service Worker:</strong> Serve customers, prepare food, or assist in the kitchen for a few
                hours a day or on weekends.
              </li>
              <li>
                <strong>Customer Service Representative:</strong> Handle inquiries and provide support during specific
                hours, often remotely or in a call center.
              </li>
              <li>
                <strong>Delivery Driver:</strong> Transport food or packages on a flexible schedule, often using your
                own vehicle.
              </li>
            </ul>

            <h3>Skills & Qualifications for Part-Time Jobs</h3>
            <p>Part-time roles often prioritize reliability, customer service, and a willingness to learn:</p>
            <ul>
              <li>
                <strong>Flexibility:</strong> Ability to work varying shifts, including evenings or weekends.
              </li>
              <li>
                <strong>Time Management:</strong> Balancing work with other commitments (e.g., school, family).
              </li>
              <li>
                <strong>Communication:</strong> Clear and effective interaction with customers and colleagues.
              </li>
              <li>
                <strong>Reliability:</strong> Being dependable and punctual for scheduled shifts.
              </li>
              <li>
                <strong>Basic Skills:</strong> Depending on the role, this could include basic math, computer literacy,
                or physical stamina.
              </li>
            </ul>

            <h3>Career Progression from Part-Time</h3>
            <p>
              Part-time positions can be a stepping stone to full-time employment within the same company, or they can
              provide valuable experience for future career opportunities. Many employers offer training and development
              for part-time staff, and demonstrating strong performance can lead to increased hours or promotions.
            </p>

            <h3>Related Part-Time Job Titles</h3>
            <ul>
              <li>Tutor</li>
              <li>Dog Walker</li>
              <li>Babysitter</li>
              <li>Event Staff</li>
              <li>Gym Attendant</li>
              <li>Library Assistant</li>
            </ul>

            <h3>FAQs About Immediate Part-Time Hiring</h3>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="faq-1">
                <AccordionTrigger className="text-left">Can I work part-time with no experience?</AccordionTrigger>
                <AccordionContent>
                  Yes, many part-time jobs, especially in retail, food service, and general labor, are entry-level and
                  do not require prior experience. They are ideal for students or those new to the workforce.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <AccordionTrigger className="text-left">What are the benefits of a part-time job?</AccordionTrigger>
                <AccordionContent>
                  Part-time jobs offer flexibility, allowing you to balance work with other commitments. They provide
                  income, valuable work experience, and opportunities to build your resume and professional network.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <AdBanner slot="part-time-jobs-bottom" />
    </>
  )
}
