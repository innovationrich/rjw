import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SchemaMarkup } from "@/components/schema-markup"
import { Breadcrumb } from "@/components/breadcrumb"
import { FAQ } from "@/components/faq"

export const metadata = {
  title: "Entry-Level Jobs Hiring Immediately Near Me",
  description:
    "Find entry-level jobs hiring immediately. Explore opportunities that require no prior experience and offer on-the-job training.",
  keywords: [
    "entry-level jobs",
    "hiring immediately entry-level",
    "no experience jobs",
    "first job",
    "beginner jobs",
    "jobs with training",
  ],
  openGraph: {
    title: "Entry-Level Jobs Hiring Immediately Near Me",
    description:
      "Find entry-level jobs hiring immediately. Explore opportunities that require no prior experience and offer on-the-job training.",
    url: "https://jobsnearmehiringimmediately.com/entry-level-jobs",
    siteName: "Jobs Near Me Hiring Immediately",
    images: [
      {
        url: "https://jobsnearmehiringimmediately.com/public/confident-new-employee.png",
        width: 1200,
        height: 630,
        alt: "Confident new employee starting their first job",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Entry-Level Jobs Hiring Immediately Near Me",
    description:
      "Find entry-level jobs hiring immediately. Explore opportunities that require no prior experience and offer on-the-job training.",
    images: ["https://jobsnearmehiringimmediately.com/public/confident-new-employee.png"],
  },
}

export default function EntryLevelJobsPage() {
  const faqs = [
    {
      question: "What does 'entry-level' mean?",
      answer:
        "Entry-level jobs are positions that typically require little to no prior work experience and often provide on-the-job training. They are ideal for recent graduates, students, or those changing careers.",
    },
    {
      question: "How can I get an entry-level job with no experience?",
      answer:
        "Focus on highlighting transferable skills (communication, teamwork, problem-solving), relevant coursework, volunteer experience, and a strong willingness to learn and grow.",
    },
    {
      question: "What industries commonly offer entry-level jobs?",
      answer:
        "Retail, food service, customer service, administrative support, general labor, and some healthcare support roles (e.g., CNA) are common industries for entry-level positions.",
    },
    {
      question: "Should I include a cover letter for an entry-level job?",
      answer:
        "Yes, a cover letter is highly recommended. It allows you to express your enthusiasm, explain your motivation, and connect your transferable skills to the job requirements.",
    },
    {
      question: "What are the career prospects for entry-level positions?",
      answer:
        "Entry-level jobs are stepping stones. With experience and dedication, you can often advance within the company, gain promotions, or use the skills learned to move into higher-paying or more specialized roles.",
    },
  ]

  const entryLevelSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Entry-Level Jobs Hiring Immediately Near Me",
    description:
      "Find entry-level jobs hiring immediately. Explore opportunities that require no prior experience and offer on-the-job training.",
    url: "https://jobsnearmehiringimmediately.com/entry-level-jobs",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://jobsnearmehiringimmediately.com/entry-level-jobs",
    },
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <SchemaMarkup schema={entryLevelSchema} />
      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Entry-Level Jobs", href: "/entry-level-jobs" },
        ]}
      />

      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Entry-Level Jobs Hiring Immediately Near Me</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Starting your career or looking for a fresh start? Discover a wide array of entry-level jobs hiring
          immediately, perfect for gaining experience and building your professional foundation.
        </p>
        <Image
          src="/confident-new-employee.png"
          alt="Confident new employee starting their first job"
          width={800}
          height={450}
          className="w-full h-auto rounded-md mt-8 shadow-lg"
          priority
        />
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Job Outlook and Demand</h2>
        <p className="mb-4 text-gray-700">
          Entry-level positions are the gateway to many industries, and the demand for new talent remains constant.
          Companies are always looking for enthusiastic individuals they can train and develop. This sector is
          particularly robust in industries with high turnover or continuous growth, offering numerous opportunities for
          those eager to learn and contribute.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong>Consistent Openings:</strong> High demand for new talent across various sectors.
          </li>
          <li>
            <strong>Training Provided:</strong> Many roles offer comprehensive on-the-job training.
          </li>
          <li>
            <strong>Stepping Stone:</strong> Excellent way to gain initial work experience and build a resume.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Typical Roles and Responsibilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Retail Sales Associate</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Assists customers, processes sales, stocks shelves, and maintains store cleanliness. Focuses on customer
                service and basic retail operations.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Customer Service Representative</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Handles customer inquiries, resolves issues, and provides information via phone, email, or chat. Often
                involves training on specific products or services.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Administrative Assistant</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Provides office support, including data entry, scheduling, filing, and managing communications. Basic
                computer skills are usually required.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Warehouse Worker/Laborer</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Involves tasks like picking, packing, sorting, loading, and unloading goods in a warehouse or industrial
                setting. Physical stamina is often key.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Food Service Worker</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Prepares and serves food, takes orders, handles cash, and cleans dining areas in restaurants, cafes, or
                fast-food establishments.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Caregiver/Home Health Aide</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Assists individuals with daily living activities, personal care, and companionship in their homes. Often
                requires compassion and a background check.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Skills and Qualifications</h2>
        <p className="mb-4 text-gray-700">
          Even without direct work experience, you possess valuable transferable skills that employers seek:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong>Communication:</strong> Ability to listen, speak clearly, and interact effectively with others.
          </li>
          <li>
            <strong>Teamwork:</strong> Experience collaborating in school projects, sports, or volunteer activities.
          </li>
          <li>
            <strong>Problem-Solving:</strong> Demonstrating how you've overcome challenges or found solutions.
          </li>
          <li>
            <strong>Reliability & Punctuality:</strong> Essential for any job, showing you can be counted on.
          </li>
          <li>
            <strong>Willingness to Learn:</strong> Eagerness to acquire new skills and adapt to new environments.
          </li>
          <li>
            <strong>Basic Computer Skills:</strong> Proficiency in common software (e.g., Microsoft Office, Google
            Suite).
          </li>
          <li>
            <strong>Positive Attitude:</strong> Enthusiasm and a can-do approach are highly valued.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Career Progression</h2>
        <p className="mb-4 text-gray-700">
          Entry-level jobs are foundational. With dedication and a proactive approach, you can build a successful
          career:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Entry-level roles often lead to promotions within the same company (e.g., associate to team lead).</li>
          <li>Gain specialized skills and certifications to move into more advanced or technical roles.</li>
          <li>Network and build professional relationships that can open doors to new opportunities.</li>
          <li>The experience gained is highly transferable, allowing you to pivot to different industries.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Related Job Titles</h2>
        <div className="flex flex-wrap justify-center gap-3">
          <Button variant="outline" asChild>
            <Link href="/search?keywords=office%20assistant">Office Assistant</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/search?keywords=general%20laborer">General Laborer</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/search?keywords=receptionist">Receptionist</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/search?keywords=data%20entry%20clerk">Data Entry Clerk</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/search?keywords=production%20associate">Production Associate</Link>
          </Button>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
          Frequently Asked Questions about Entry-Level Jobs
        </h2>
        <FAQ faqs={faqs} />
      </section>

      <div className="text-center mt-8">
        <Button asChild size="lg">
          <Link href="/search?jobType=entry-level">Search All Entry-Level Jobs</Link>
        </Button>
      </div>
    </div>
  )
}
