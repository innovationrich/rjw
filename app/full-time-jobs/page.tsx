import type { Metadata } from "next"
import { SchemaMarkup } from "@/components/schema-markup"
import { AdBanner } from "@/components/ad-banner"
import { Briefcase, MapPin, Clock, DollarSign } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Full Time Jobs Hiring Near Me Immediately - Stable Employment",
  description:
    "Find full time jobs hiring immediately near you. Discover stable employment opportunities across various sectors, including manufacturing, healthcare, and logistics. Many positions offer competitive salaries, benefits, and quick hiring processes. Secure your full-time career today!",
  keywords:
    "full time jobs near me hiring immediately, jobs near me hiring immediately full time, immediate full time jobs, stable employment, full-time careers",
  alternates: {
    canonical: "/full-time-jobs",
  },
}

const fullTimeJobs = [
  {
    title: "Production Associate",
    company: "Manufacturing Solutions",
    location: "Atlanta, GA",
    salary: "$20-25/hour",
    type: "Full-time",
    description: "Work on an assembly line, ensuring quality and efficiency. Benefits include health and dental.",
    requirements: ["Attention to detail", "Ability to stand for long periods", "Team player"],
    urgent: true,
  },
  {
    title: "Medical Assistant",
    company: "Community Health Clinic",
    location: "Phoenix, AZ",
    salary: "$18-22/hour",
    type: "Full-time",
    description: "Assist doctors and nurses with patient care and administrative tasks. Certification preferred.",
    requirements: [
      "Medical assistant certification (or willingness to obtain)",
      "Compassionate",
      "Organizational skills",
    ],
    urgent: false,
  },
]

const jobPostingSchema = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: "Full Time Jobs Hiring Immediately",
  description: "Find full time jobs hiring immediately near you.",
  datePosted: new Date().toISOString(),
  employmentType: "FULL_TIME",
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

export default function FullTimeJobsPage() {
  return (
    <>
      <SchemaMarkup schema={jobPostingSchema} />

      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Full Time Jobs Hiring Near Me <span className="text-blue-600">Immediately</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Find full time jobs hiring immediately near you. Discover stable employment opportunities across various
              sectors, including manufacturing, healthcare, and logistics. Many positions offer competitive salaries,
              benefits, and quick hiring processes.
            </p>
            <div className="flex items-center justify-center space-x-8 text-lg">
              <div className="flex items-center">
                <Briefcase className="h-6 w-6 text-blue-600 mr-2" />
                <span className="font-semibold">6,600+ Jobs</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-green-600 mr-2" />
                <span className="font-semibold">Immediate Hiring</span>
              </div>
              <div className="flex items-center">
                <DollarSign className="h-6 w-6 text-purple-600 mr-2" />
                <span className="font-semibold">$18-25/hour</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AdBanner slot="full-time-jobs-top" />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Full Time Jobs Hiring Immediately</h2>

          <div className="space-y-6">
            {fullTimeJobs.map((job, index) => (
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

      <AdBanner slot="full-time-jobs-middle" />

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About Full Time Jobs Hiring Immediately</h2>

          <div className="prose prose-lg max-w-none">
            <p>
              Full-time jobs offer stability, consistent income, and often comprehensive benefits packages. Many
              companies are in urgent need of full-time staff, leading to immediate hiring opportunities across various
              sectors.
            </p>

            <h3>Industries with High Full-Time Demand</h3>
            <ul>
              <li>
                <strong>Manufacturing:</strong> Production, assembly, and quality control roles.
              </li>
              <li>
                <strong>Healthcare:</strong> Medical assistants, CNAs, and administrative staff.
              </li>
              <li>
                <strong>Logistics:</strong> Drivers, warehouse managers, and supply chain coordinators.
              </li>
              <li>
                <strong>Customer Service:</strong> Dedicated representatives for long-term client support.
              </li>
            </ul>

            <h3>Benefits of Full-Time Employment</h3>
            <p>
              Beyond a steady paycheck, full-time positions typically include health insurance, retirement plans, paid
              time off, and opportunities for career growth and professional development.
            </p>

            <h3>Job Outlook and Demand for Full-Time Positions</h3>
            <p>
              Full-time jobs represent the backbone of the economy, offering stable employment and comprehensive
              benefits. Industries across the board, from manufacturing and logistics to healthcare and technology,
              consistently have a high demand for full-time employees, often leading to immediate hiring opportunities
              to fill critical roles.
            </p>

            <h3>Typical Roles & Responsibilities in Full-Time Jobs</h3>
            <ul>
              <li>
                <strong>Production Associate:</strong> Work on assembly lines, operate machinery, and ensure quality
                control in manufacturing settings.
              </li>
              <li>
                <strong>Logistics Coordinator:</strong> Manage supply chain operations, track shipments, and optimize
                delivery routes.
              </li>
              <li>
                <strong>Administrative Professional:</strong> Provide extensive support to teams or executives,
                including scheduling, data management, and project coordination.
              </li>
              <li>
                <strong>Sales Executive:</strong> Develop client relationships, present products/services, and close
                deals to meet sales targets.
              </li>
            </ul>

            <h3>Skills & Qualifications for Full-Time Jobs</h3>
            <p>Full-time roles often require a blend of technical skills, experience, and professional attributes:</p>
            <ul>
              <li>
                <strong>Professionalism:</strong> Adherence to workplace ethics and conduct.
              </li>
              <li>
                <strong>Problem-Solving:</strong> Ability to analyze complex issues and implement effective solutions.
              </li>
              <li>
                <strong>Adaptability:</strong> Willingness to learn new skills and adjust to changing work environments.
              </li>
              <li>
                <strong>Accountability:</strong> Taking ownership of tasks and responsibilities.
              </li>
              <li>
                <strong>Specific Technical Skills:</strong> Depending on the industry (e.g., software proficiency,
                machinery operation).
              </li>
            </ul>

            <h3>Career Progression in Full-Time Employment</h3>
            <p>
              Full-time employment typically offers the most robust career progression opportunities. Employees can
              advance through promotions, take on leadership roles, specialize in niche areas, or transition into
              management. Companies often invest in training, mentorship, and professional development for their
              full-time staff.
            </p>

            <h3>Related Full-Time Job Titles</h3>
            <ul>
              <li>Account Manager</li>
              <li>Project Manager</li>
              <li>Human Resources Specialist</li>
              <li>Marketing Coordinator</li>
              <li>Financial Analyst</li>
              <li>Software Developer</li>
            </ul>

            <h3>FAQs About Immediate Full-Time Hiring</h3>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="faq-1">
                <AccordionTrigger className="text-left">What benefits come with full-time jobs?</AccordionTrigger>
                <AccordionContent>
                  Most full-time positions offer comprehensive benefits packages, including health, dental, and vision
                  insurance, 401(k) or retirement plans, paid time off (vacation, sick leave, holidays), and sometimes
                  life insurance or disability benefits.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <AccordionTrigger className="text-left">Are full-time jobs truly "immediate hiring"?</AccordionTrigger>
                <AccordionContent>
                  Yes, many companies have urgent needs for full-time staff, especially in high-turnover or rapidly
                  expanding sectors. They often streamline their hiring processes to bring qualified candidates on board
                  quickly.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <AdBanner slot="full-time-jobs-bottom" />
    </>
  )
}
