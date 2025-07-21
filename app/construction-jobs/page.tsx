import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SchemaMarkup } from "@/components/schema-markup"
import { Breadcrumb } from "@/components/breadcrumb"
import { FAQ } from "@/components/faq"

export const metadata = {
  title: "Construction Jobs Hiring Immediately Near Me",
  description:
    "Find construction jobs hiring immediately. Explore roles like general laborer, carpenter, and electrician with competitive pay and growth opportunities.",
  keywords: [
    "construction jobs",
    "hiring immediately construction",
    "general laborer jobs",
    "carpenter jobs",
    "electrician jobs",
    "construction worker",
  ],
  openGraph: {
    title: "Construction Jobs Hiring Immediately Near Me",
    description:
      "Find construction jobs hiring immediately. Explore roles like general laborer, carpenter, and electrician with competitive pay and growth opportunities.",
    url: "https://jobsnearmehiringimmediately.com/construction-jobs",
    siteName: "Jobs Near Me Hiring Immediately",
    images: [
      {
        url: "https://jobsnearmehiringimmediately.com/public/placeholder-v7zml.png", // Placeholder image for construction
        width: 1200,
        height: 630,
        alt: "Construction workers on a job site",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Jobs Hiring Immediately Near Me",
    description:
      "Find construction jobs hiring immediately. Explore roles like general laborer, carpenter, and electrician with competitive pay and growth opportunities.",
    images: ["https://jobsnearmehiringimmediately.com/public/placeholder-v7zml.png"],
  },
}

export default function ConstructionJobsPage() {
  const faqs = [
    {
      question: "What are the most common entry-level construction jobs?",
      answer:
        "General Laborer is the most common entry-level role, involving tasks like site cleanup, material handling, and assisting skilled trades. Apprenticeships are also a great entry point.",
    },
    {
      question: "Do I need specific training or certifications for construction jobs?",
      answer:
        "For entry-level labor, often no specific certification is needed beyond basic safety training (like OSHA 10). Skilled trades (e.g., electrician, plumber) require apprenticeships, licenses, or certifications.",
    },
    {
      question: "Are construction jobs physically demanding?",
      answer:
        "Yes, most construction jobs are physically demanding, involving heavy lifting, standing for long periods, working outdoors in various weather conditions, and repetitive tasks.",
    },
    {
      question: "What is the job outlook for the construction industry?",
      answer:
        "The construction industry generally has a positive job outlook, driven by infrastructure projects, residential and commercial development, and maintenance needs. Demand for skilled trades is particularly high.",
    },
    {
      question: "What are the career progression opportunities in construction?",
      answer:
        "You can advance from a general laborer to a skilled tradesperson (e.g., carpenter, welder), then to a foreman, superintendent, or even project manager. Many also start their own contracting businesses.",
    },
  ]

  const constructionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Construction Jobs Hiring Immediately Near Me",
    description:
      "Find construction jobs hiring immediately. Explore roles like general laborer, carpenter, and electrician with competitive pay and growth opportunities.",
    url: "https://jobsnearmehiringimmediately.com/construction-jobs",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://jobsnearmehiringimmediately.com/construction-jobs",
    },
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <SchemaMarkup schema={constructionSchema} />
      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Construction Jobs", href: "/construction-jobs" },
        ]}
      />

      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Construction Jobs Hiring Immediately Near Me</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Ready to build your career? Discover a wide range of construction jobs hiring immediately, from general labor
          to skilled trades, with opportunities for growth and competitive pay.
        </p>
        <Image
          src="/construction-workers-job-site.png"
          alt="Construction workers on a job site"
          width={800}
          height={450}
          className="w-full h-auto rounded-md mt-8 shadow-lg"
          priority
        />
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Job Outlook and Demand</h2>
        <p className="mb-4 text-gray-700">
          The construction industry is a robust sector with consistent demand for skilled and unskilled labor. Driven by
          infrastructure projects, residential and commercial development, and ongoing maintenance, construction jobs
          offer stable employment and often provide opportunities for immediate hire. The industry is always looking for
          dedicated individuals ready to contribute to building the future.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong>Steady Growth:</strong> Demand for construction workers is projected to grow.
          </li>
          <li>
            <strong>Infrastructure Investment:</strong> Government spending on infrastructure creates numerous jobs.
          </li>
          <li>
            <strong>Skilled Trades Shortage:</strong> High demand for specialized roles like electricians and plumbers.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Typical Roles and Responsibilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>General Laborer</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Performs various tasks on construction sites, including site cleanup, material handling, digging
                trenches, and assisting skilled tradespeople. Often an entry-level role.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Carpenter</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Constructs, erects, installs, and repairs structures and fixtures made of wood and other materials.
                Involves framing, roofing, and finishing work.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Electrician</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Installs, maintains, and repairs electrical wiring, equipment, and fixtures. Ensures electrical systems
                are safe and up to code. Requires specialized training and licensing.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Plumber</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Installs and repairs pipes, fixtures, and other plumbing systems used for water distribution and waste
                disposal. Requires specialized training and licensing.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Skills and Qualifications</h2>
        <p className="mb-4 text-gray-700">
          While some roles require specific certifications, many construction jobs value practical skills and a strong
          work ethic:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong>Physical Stamina:</strong> Ability to perform strenuous tasks, lift heavy materials, and work in
            various weather conditions.
          </li>
          <li>
            <strong>Safety Consciousness:</strong> Adherence to strict safety protocols and awareness of potential
            hazards.
          </li>
          <li>
            <strong>Teamwork:</strong> Ability to collaborate effectively with other crew members and trades.
          </li>
          <li>
            <strong>Problem-Solving:</strong> Adapting to unexpected challenges on the job site.
          </li>
          <li>
            <strong>Basic Math Skills:</strong> For measurements, calculations, and material estimates.
          </li>
          <li>
            <strong>Tool Proficiency:</strong> Familiarity with common hand and power tools.
          </li>
          <li>
            <strong>Blueprint Reading:</strong> (For skilled trades) Ability to interpret construction plans.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Career Progression</h2>
        <p className="mb-4 text-gray-700">
          The construction industry offers clear and rewarding career paths, often starting from entry-level and
          progressing through skilled trades to management:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>General Laborer → Apprentice (e.g., Carpenter, Electrician) → Journeyman → Master Tradesperson</li>
          <li>Skilled Tradesperson → Foreman → Superintendent → Project Manager</li>
          <li>Opportunities to specialize in specific construction areas (e.g., heavy equipment, green building).</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Related Job Titles</h2>
        <div className="flex flex-wrap justify-center gap-3">
          <Button variant="outline" asChild>
            <Link href="/search?keywords=heavy%20equipment%20operator">Heavy Equipment Operator</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/search?keywords=welder">Welder</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/search?keywords=mason">Mason</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/search?keywords=painter">Painter</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/search?keywords=roofing%20specialist">Roofing Specialist</Link>
          </Button>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
          Frequently Asked Questions about Construction Jobs
        </h2>
        <FAQ faqs={faqs} />
      </section>

      <div className="text-center mt-8">
        <Button asChild size="lg">
          <Link href="/search?keywords=construction">Search All Construction Jobs</Link>
        </Button>
      </div>
    </div>
  )
}
