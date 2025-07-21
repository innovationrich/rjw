import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FeaturedJobs } from "@/components/featured-jobs"
import { BlogPreview } from "@/components/blog-preview"
import { FAQ } from "@/components/faq"
import { SchemaMarkup } from "@/components/schema-markup"
import { Breadcrumb } from "@/components/breadcrumb"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Part-Time Jobs – Hiring Immediately Near Me",
  description:
    "Find part-time jobs hiring immediately. Explore flexible opportunities across various industries—perfect for students, parents, or anyone needing supplemental income.",
  keywords: [
    "part-time jobs",
    "hiring immediately part-time",
    "flexible jobs",
    "student jobs",
    "supplemental income jobs",
    "evening jobs",
    "weekend jobs",
  ],
  openGraph: {
    title: "Part-Time Jobs – Hiring Immediately Near Me",
    description:
      "Find part-time jobs hiring immediately. Explore flexible opportunities across various industries—perfect for students, parents, or anyone needing supplemental income.",
    url: "https://jobsnearmehiringimmediately.com/part-time-jobs",
    siteName: "Jobs Near Me Hiring Immediately",
    images: [
      {
        url: "https://jobsnearmehiringimmediately.com/retail-worker-smiling.png",
        width: 1200,
        height: 630,
        alt: "Smiling retail worker",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Part-Time Jobs – Hiring Immediately Near Me",
    description:
      "Find part-time jobs hiring immediately. Explore flexible opportunities across various industries—perfect for students, parents, or anyone needing supplemental income.",
    images: ["https://jobsnearmehiringimmediately.com/retail-worker-smiling.png"],
  },
}

export default function PartTimeJobsPage() {
  /* ---------- Schema.org JSON-LD ---------- */
  const jobCategorySchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Part-Time Jobs – Hiring Immediately Near Me",
    description:
      "Find part-time jobs hiring immediately. Explore flexible opportunities across various industries—perfect for students, parents, or anyone needing supplemental income.",
    url: "https://jobsnearmehiringimmediately.com/part-time-jobs",
    about: {
      "@type": "Thing",
      name: "Part-Time Jobs",
    },
  }

  return (
    <>
      <SchemaMarkup schema={jobCategorySchema} />

      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Breadcrumbs */}
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Part-Time Jobs", href: "/part-time-jobs" },
          ]}
        />

        {/* Hero section */}
        <section className="text-center py-12 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg shadow-lg mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Part-Time Jobs – Hiring Immediately</h1>
          <p className="text-xl md:text-2xl mb-6">
            Discover flexible opportunities to fit your schedule and earn income.
          </p>
          <Button asChild className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 text-lg">
            <Link href="/search?jobType=part-time">Search Part-Time Jobs</Link>
          </Button>
        </section>

        {/* Overview */}
        <section className="py-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">What to Expect in Part-Time Roles</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-700 space-y-4">
            <p>
              Part-time jobs offer a flexible way to earn income, gain experience, and balance work with other
              commitments like school, family, or personal projects. These roles typically involve working fewer than 40
              hours per week and are often available with immediate hiring—especially in industries with high turnover
              or fluctuating demand.
            </p>
            <p>
              Responsibilities vary widely but often include customer service, administrative tasks, sales, food
              preparation, or general support. Key qualities for part-time workers include reliability, punctuality,
              adaptability, and strong communication skills.
            </p>
            <p>
              Part-time employment can be a stepping stone to full-time work, a way to supplement income, or a primary
              source of earnings for those who prefer a reduced schedule. Retail, food service, healthcare, and
              administrative support consistently offer part-time opportunities.
            </p>
          </div>
        </section>

        {/* Key aspects */}
        <section className="py-12 bg-white rounded-lg shadow-md mt-12">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Key Aspects of Part-Time Jobs</h2>

            <div className="space-y-6 text-gray-700">
              {/* Job outlook */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Job Outlook &amp; Demand</h3>
                <p>
                  Demand for part-time workers remains strong across many sectors. Businesses need flexible staffing to
                  cover peak hours, seasonal surges, or specific projects. Retail, hospitality, and healthcare are
                  consistent sources of part-time work.
                </p>
              </div>

              {/* Typical roles */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Typical Roles &amp; Responsibilities</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Retail Sales Associate:</strong> Assist customers, process sales, maintain store appearance.
                  </li>
                  <li>
                    <strong>Cashier:</strong> Handle transactions &amp; provide customer service.
                  </li>
                  <li>
                    <strong>Food Service Worker:</strong> Take orders, prepare food, clean work areas.
                  </li>
                  <li>
                    <strong>Customer Service Representative:</strong> Answer inquiries and resolve issues (often remote
                    or in call centers).
                  </li>
                  <li>
                    <strong>Administrative Assistant:</strong> Data entry, scheduling, general office support.
                  </li>
                  <li>
                    <strong>Caregiver / Home Health Aide:</strong> Assist individuals with daily living activities.
                  </li>
                </ul>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Skills &amp; Qualifications</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Reliability and punctuality</li>
                  <li>Strong communication and interpersonal skills</li>
                  <li>Adaptability to varying schedules and tasks</li>
                  <li>Time-management abilities</li>
                  <li>Eagerness to learn and take initiative</li>
                  <li>Basic computer literacy (for many roles)</li>
                  <li>High-school diploma or GED (often preferred but not always required for entry-level)</li>
                </ul>
              </div>

              {/* Career progression */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Career Progression</h3>
                <p>
                  Part-time roles can lead to full-time positions within the same company or provide valuable experience
                  that opens doors to other opportunities. Demonstrating strong performance and a willingness to take on
                  more responsibility accelerates advancement.
                </p>
              </div>

              {/* Related titles */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Related Job Titles</h3>
                <p>Hourly Worker, Seasonal Employee, Contract Worker, Student Worker, Weekend Staff.</p>
              </div>

              {/* FAQs */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">FAQs About Part-Time Jobs</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Do part-time jobs offer benefits?</strong> Some roles—especially those with consistent
                    hours—may offer prorated benefits like health insurance or paid time off.
                  </li>
                  <li>
                    <strong>Are part-time jobs only for students?</strong> No; they suit anyone seeking flexibility,
                    supplemental income, or a gradual return to the workforce.
                  </li>
                  <li>
                    <strong>Is it hard to find a part-time job with no experience?</strong> Many entry-level roles are
                    available, and employers often train motivated individuals.
                  </li>
                  <li>
                    <strong>Can a part-time job become full-time?</strong> Absolutely—many companies use part-time roles
                    to evaluate candidates for full-time positions.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic components */}
        <FeaturedJobs />
        <BlogPreview />
        <FAQ />
      </div>
    </>
  )
}
