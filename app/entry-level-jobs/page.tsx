import type { Metadata } from "next"
import { SchemaMarkup } from "@/components/schema-markup"
import { AdBanner } from "@/components/ad-banner"
import { Users, MapPin, Clock, DollarSign } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Entry Level Jobs Hiring Near Me Immediately - No Experience Needed",
  description:
    "Find entry level jobs hiring immediately near you, perfect for those with no experience. Discover opportunities in various industries that offer on-the-job training and quick hiring processes. Start your career today!",
  keywords:
    "entry level jobs near me hiring immediately, no experience jobs near me hiring immediately, immediate entry level jobs, jobs no experience required, first job, entry level positions",
  alternates: {
    canonical: "/entry-level-jobs",
  },
}

const entryLevelJobs = [
  {
    title: "Customer Service Representative",
    company: "Tech Support Solutions",
    location: "Remote",
    salary: "$16-20/hour",
    type: "Full-time",
    description: "Provide support to customers via phone and chat. Paid training provided. No experience necessary.",
    requirements: ["Good communication skills", "Basic computer literacy", "Problem-solving ability"],
    urgent: true,
  },
  {
    title: "General Laborer",
    company: "Construction Crew Inc.",
    location: "Phoenix, AZ",
    salary: "$18-22/hour",
    type: "Full-time",
    description: "Assist skilled tradespeople on construction sites. On-the-job training provided.",
    requirements: ["Ability to lift heavy objects", "Reliable transportation", "Strong work ethic"],
    urgent: false,
  },
]

const jobPostingSchema = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: "Entry Level Jobs Hiring Immediately",
  description: "Find entry level jobs hiring immediately near you, no experience needed.",
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
      minValue: 16,
      maxValue: 22,
      unitText: "HOUR",
    },
  },
}

export default function EntryLevelJobsPage() {
  return (
    <>
      <SchemaMarkup schema={jobPostingSchema} />

      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Entry Level Jobs Hiring Near Me <span className="text-blue-600">Immediately</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Find entry level jobs hiring immediately near you, perfect for those with no experience. Discover
              opportunities in various industries that offer on-the-job training and quick hiring processes.
            </p>
            <div className="flex items-center justify-center space-x-8 text-lg">
              <div className="flex items-center">
                <Users className="h-6 w-6 text-blue-600 mr-2" />
                <span className="font-semibold">480+ Jobs</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-green-600 mr-2" />
                <span className="font-semibold">No Experience Needed</span>
              </div>
              <div className="flex items-center">
                <DollarSign className="h-6 w-6 text-purple-600 mr-2" />
                <span className="font-semibold">$16-22/hour</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AdBanner slot="entry-level-jobs-top" />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Entry Level Jobs Hiring Immediately</h2>

          <div className="space-y-6">
            {entryLevelJobs.map((job, index) => (
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

      <AdBanner slot="entry-level-jobs-middle" />

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About Entry Level Jobs Hiring Immediately</h2>

          <div className="prose prose-lg max-w-none">
            <p>
              Entry-level jobs are perfect for individuals starting their careers or looking to switch industries
              without prior experience. Many companies are actively hiring for these roles and provide comprehensive
              training.
            </p>

            <h3>Industries with Abundant Entry-Level Opportunities</h3>
            <ul>
              <li>
                <strong>Customer Service:</strong> Call centers, online support, and retail.
              </li>
              <li>
                <strong>Warehousing & Logistics:</strong> Packers, sorters, and general laborers.
              </li>
              <li>
                <strong>Food Service:</strong> Crew members, baristas, and kitchen staff.
              </li>
              <li>
                <strong>Administrative Support:</strong> Office assistants and data entry clerks.
              </li>
            </ul>

            <h3>Tips for Landing an Entry-Level Job</h3>
            <p>
              Highlight transferable skills like communication, teamwork, and problem-solving. Emphasize your eagerness
              to learn and strong work ethic. Many employers value potential and attitude over direct experience for
              these roles.
            </p>

            <h3>Job Outlook and Demand for Entry-Level Positions</h3>
            <p>
              Entry-level jobs are consistently in high demand across various industries, as businesses always need new
              talent to grow and replace outgoing staff. These roles are crucial for individuals starting their careers,
              offering a pathway to gain valuable experience and skills without extensive prior qualifications.
            </p>

            <h3>Typical Roles & Responsibilities in Entry-Level Jobs</h3>
            <ul>
              <li>
                <strong>Customer Service Representative:</strong> Answer inquiries, resolve issues, and provide support
                to customers via phone, email, or chat.
              </li>
              <li>
                <strong>General Laborer:</strong> Assist with physical tasks on construction sites, in warehouses, or in
                manufacturing facilities.
              </li>
              <li>
                <strong>Administrative Assistant:</strong> Perform clerical duties, manage schedules, organize files,
                and support office operations.
              </li>
              <li>
                <strong>Data Entry Clerk:</strong> Input and update information into databases, ensuring accuracy and
                efficiency.
              </li>
            </ul>

            <h3>Skills & Qualifications for Entry-Level Jobs</h3>
            <p>
              For entry-level positions, employers often look for transferable skills and a strong willingness to learn:
            </p>
            <ul>
              <li>
                <strong>Communication Skills:</strong> Both verbal and written, for interacting with colleagues and
                clients.
              </li>
              <li>
                <strong>Problem-Solving:</strong> Ability to identify issues and find practical solutions.
              </li>
              <li>
                <strong>Teamwork:</strong> Collaborating effectively with others.
              </li>
              <li>
                <strong>Reliability & Punctuality:</strong> Showing up on time and being dependable.
              </li>
              <li>
                <strong>Basic Computer Literacy:</strong> Familiarity with common software and internet usage.
              </li>
            </ul>

            <h3>Career Progression from Entry-Level</h3>
            <p>
              Entry-level jobs are excellent springboards for career growth. With dedication and a willingness to learn,
              you can often advance to more specialized roles, supervisory positions, or even transition into different
              departments within the same company. Many companies invest in training and development for their
              entry-level hires.
            </p>

            <h3>Related Entry-Level Job Titles</h3>
            <ul>
              <li>Office Assistant</li>
              <li>Receptionist</li>
              <li>Warehouse Packer</li>
              <li>Retail Stocker</li>
              <li>Food Service Worker</li>
              <li>Delivery Driver</li>
            </ul>

            <h3>FAQs About Immediate Entry-Level Hiring</h3>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="faq-1">
                <AccordionTrigger className="text-left">What if I have no work experience at all?</AccordionTrigger>
                <AccordionContent>
                  Many entry-level jobs are specifically designed for individuals with no prior work experience.
                  Highlight your transferable skills from school, volunteer work, or personal projects, and emphasize
                  your eagerness to learn and strong work ethic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <AccordionTrigger className="text-left">Do entry-level jobs offer training?</AccordionTrigger>
                <AccordionContent>
                  Yes, a significant number of entry-level positions provide comprehensive on-the-job training, allowing
                  you to acquire the necessary skills and knowledge directly from the employer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <AdBanner slot="entry-level-jobs-bottom" />
    </>
  )
}
