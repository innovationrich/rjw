import type { Metadata } from "next"
import { SchemaMarkup } from "@/components/schema-markup"
import { AdBanner } from "@/components/ad-banner"
import { Heart, MapPin, Clock, DollarSign } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Healthcare Jobs Hiring Near Me Immediately - Medical & Nursing Roles",
  description:
    "Find healthcare jobs hiring immediately near you. Explore opportunities for nurses, medical assistants, CNAs, PCTs, and more. Many positions offer rapid hiring and competitive pay.",
  keywords:
    "healthcare jobs near me hiring immediately, nursing jobs, medical assistant jobs, CNA jobs, LPN jobs, patient care technician jobs, phlebotomist jobs, hospital jobs, medical jobs",
  alternates: { canonical: "/healthcare-jobs" },
}

const healthcareJobs = [
  {
    title: "Certified Nursing Assistant (CNA)",
    company: "Community Care Center",
    location: "Multiple Locations",
    salary: "$18 – $22/hr",
    type: "Full-time / Part-time",
    description: "Provide direct patient care under the supervision of an RN. Immediate start available.",
    requirements: ["Active CNA license", "CPR certification", "Compassionate attitude"],
    urgent: true,
  },
  {
    title: "Medical Assistant",
    company: "City Health Clinic",
    location: "Houston, TX",
    salary: "$17 – $21/hr",
    type: "Full-time",
    description: "Assist physicians with patient intake, vitals, and clerical tasks in a busy outpatient clinic.",
    requirements: ["MA diploma/certification", "Excellent communication skills"],
    urgent: false,
  },
]

const jobPostingSchema = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: "Healthcare Jobs Hiring Immediately",
  description:
    "Search and apply for healthcare jobs hiring immediately near you, including nursing, medical assisting, CNA, and technician roles.",
  datePosted: new Date().toISOString(),
  employmentType: ["FULL_TIME", "PART_TIME"],
  hiringOrganization: {
    "@type": "Organization",
    name: "Jobs Hiring Near Me Immediately",
    sameAs: "https://jobsnearmehiringimmediately.com",
  },
  jobLocationType: "TELECOMMUTE",
  baseSalary: {
    "@type": "MonetaryAmount",
    currency: "USD",
    value: { "@type": "QuantitativeValue", minValue: 17, maxValue: 25, unitText: "HOUR" },
  },
}

export default function HealthcareJobsPage() {
  return (
    <>
      {/* Structured data for SEO */}
      <SchemaMarkup schema={jobPostingSchema} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Healthcare Jobs Hiring <span className="text-blue-600">Immediately</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Explore high-demand medical and nursing positions with quick hiring processes and great pay. Start your
            healthcare career today.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-lg">
            <div className="flex items-center">
              <Heart className="h-6 w-6 text-blue-600 mr-2" />
              <span className="font-semibold">Thousands of Openings</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-6 w-6 text-green-600 mr-2" />
              <span className="font-semibold">Rapid Hiring</span>
            </div>
            <div className="flex items-center">
              <DollarSign className="h-6 w-6 text-purple-600 mr-2" />
              <span className="font-semibold">$17–25 / hr</span>
            </div>
          </div>
        </div>
      </section>

      {/* Top Ad */}
      <AdBanner slot="healthcare-jobs-top" />

      {/* Featured Jobs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Healthcare Jobs Hiring Now</h2>

          <div className="space-y-6">
            {healthcareJobs.map((job, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow duration-200 border border-gray-100">
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900">{job.title}</h3>
                      <p className="text-blue-600 font-medium">{job.company}</p>
                    </div>
                    {job.urgent && <Badge variant="destructive">Urgent Hire</Badge>}
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                    <span className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {job.location}
                    </span>
                    <span className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-1" />
                      {job.salary}
                    </span>
                    <Badge variant="outline">{job.type}</Badge>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 mb-4">{job.description}</p>

                  {/* Requirements */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Requirements</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      {job.requirements.map((req, idx) => (
                        <li key={idx}>{req}</li>
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

      {/* Mid-page Ad */}
      <AdBanner slot="healthcare-jobs-middle" />

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
          <h2>Why Choose a Career in Healthcare?</h2>
          <p>
            Healthcare remains one of the fastest-growing industries in the United States. With an aging population and
            constant advancements in medical technology, the demand for qualified professionals continues to rise. Many
            entry-level roles require only short certification programs, making healthcare accessible for
            career-changers or those entering the workforce for the first time.
          </p>

          <h3>Popular Healthcare Roles</h3>
          <ul>
            <li>
              <strong>Registered Nurse (RN):</strong> Coordinate patient care and provide health education.
            </li>
            <li>
              <strong>Licensed Practical / Vocational Nurse (LPN/LVN):</strong> Deliver basic nursing care in hospitals
              and clinics.
            </li>
            <li>
              <strong>Certified Nursing Assistant (CNA):</strong> Assist patients with daily activities under nurse
              supervision.
            </li>
            <li>
              <strong>Medical Assistant:</strong> Perform clinical and administrative duties in outpatient settings.
            </li>
            <li>
              <strong>Patient Care Technician (PCT):</strong> Support nurses with vital signs, phlebotomy, and EKGs.
            </li>
          </ul>

          <p>
            No matter your background, there’s a healthcare position that matches your skills and goals. Browse our
            listings and apply today to start making a difference!
          </p>
        </div>
      </section>

      {/* Bottom Ad */}
      <AdBanner slot="healthcare-jobs-bottom" />
    </>
  )
}
