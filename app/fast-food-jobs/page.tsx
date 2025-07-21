import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SchemaMarkup } from "@/components/schema-markup"
import { Breadcrumb } from "@/components/breadcrumb"
import { FAQ } from "@/components/faq"

export const metadata = {
  title: "Fast Food Jobs Hiring Immediately Near Me",
  description:
    "Find fast food jobs hiring immediately. Explore roles like crew member, cashier, and cook with flexible hours and quick hiring processes.",
  keywords: [
    "fast food jobs",
    "hiring immediately fast food",
    "crew member jobs",
    "cashier fast food",
    "cook fast food",
    "restaurant jobs",
  ],
  openGraph: {
    title: "Fast Food Jobs Hiring Immediately Near Me",
    description:
      "Find fast food jobs hiring immediately. Explore roles like crew member, cashier, and cook with flexible hours and quick hiring processes.",
    url: "https://jobsnearmehiringimmediately.com/fast-food-jobs",
    siteName: "Jobs Near Me Hiring Immediately",
    images: [
      {
        url: "https://jobsnearmehiringimmediately.com/public/placeholder-v7zml.png", // Placeholder image for fast food
        width: 1200,
        height: 630,
        alt: "Fast food worker serving a customer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fast Food Jobs Hiring Immediately Near Me",
    description:
      "Find fast food jobs hiring immediately. Explore roles like crew member, cashier, and cook with flexible hours and quick hiring processes.",
    images: ["https://jobsnearmehiringimmediately.com/public/placeholder-v7zml.png"],
  },
}

export default function FastFoodJobsPage() {
  const faqs = [
    {
      question: "What are the typical roles in a fast food restaurant?",
      answer: "Common roles include Crew Member, Cashier, Cook, Drive-Thru Attendant, Food Prep, and Shift Supervisor.",
    },
    {
      question: "Do fast food jobs offer flexible hours?",
      answer:
        "Yes, fast food restaurants are known for offering flexible schedules, including part-time, evening, weekend, and late-night shifts, making them suitable for students or those needing adaptable hours.",
    },
    {
      question: "Is experience required for fast food jobs?",
      answer:
        "Many fast food positions are entry-level and do not require prior experience. Employers often prioritize a positive attitude, strong work ethic, and good customer service skills.",
    },
    {
      question: "What skills are important for working in fast food?",
      answer:
        "Key skills include customer service, teamwork, speed and efficiency, attention to detail, basic math for handling cash, and the ability to work in a fast-paced environment.",
    },
    {
      question: "What are the career progression opportunities in fast food?",
      answer:
        "Many fast food chains offer clear paths for advancement: Crew Member → Shift Supervisor → Assistant Manager → Store Manager → District Manager. Some even offer tuition assistance.",
    },
  ]

  const fastFoodSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Fast Food Jobs Hiring Immediately Near Me",
    description:
      "Find fast food jobs hiring immediately. Explore roles like crew member, cashier, and cook with flexible hours and quick hiring processes.",
    url: "https://jobsnearmehiringimmediately.com/fast-food-jobs",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://jobsnearmehiringimmediately.com/fast-food-jobs",
    },
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <SchemaMarkup schema={fastFoodSchema} />
      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Fast Food Jobs", href: "/fast-food-jobs" },
        ]}
      />

      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Fast Food Jobs Hiring Immediately Near Me</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Craving a new opportunity? Discover fast food jobs hiring immediately, offering quick entry, flexible hours,
          and a dynamic work environment.
        </p>
        <Image
          src="/placeholder-9k1wp.png"
          alt="Fast food worker serving a customer"
          width={800}
          height={450}
          className="w-full h-auto rounded-md mt-8 shadow-lg"
          priority
        />
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Job Outlook and Demand</h2>
        <p className="mb-4 text-gray-700">
          The fast food industry is a massive employer with a constant demand for staff due to high turnover and the
          need for 24/7 operations in many locations. It's an excellent sector for those seeking immediate employment,
          flexible hours, or their first job. Fast food establishments are always looking for energetic and reliable
          individuals to join their teams.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong>High Volume Hiring:</strong> Constant need for new employees due to growth and turnover.
          </li>
          <li>
            <strong>Entry-Level Friendly:</strong> Many positions require no prior experience.
          </li>
          <li>
            <strong>Flexible Schedules:</strong> Ideal for students, part-time seekers, or those needing varied hours.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Typical Roles and Responsibilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Crew Member</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Performs a variety of tasks including taking orders, preparing food, serving customers, cleaning, and
                maintaining restaurant standards.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Cashier</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Handles customer transactions, operates the cash register, processes payments, and provides friendly
                service at the front counter or drive-thru.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Cook/Food Prep</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Prepares food items according to recipes and safety standards, manages cooking stations, and ensures
                food quality and presentation.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Drive-Thru Attendant</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Takes orders, processes payments, and delivers food to customers in the drive-thru lane, focusing on
                speed and accuracy.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Skills and Qualifications</h2>
        <p className="mb-4 text-gray-700">
          While specific experience might not be required, certain soft skills are highly valued in fast food roles:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong>Customer Service:</strong> Friendly demeanor and ability to handle customer interactions positively.
          </li>
          <li>
            <strong>Teamwork:</strong> Working effectively with colleagues in a fast-paced, often high-pressure
            environment.
          </li>
          <li>
            <strong>Speed & Efficiency:</strong> Ability to perform tasks quickly and accurately.
          </li>
          <li>
            <strong>Attention to Detail:</strong> Ensuring order accuracy and food quality.
          </li>
          <li>
            <strong>Basic Math Skills:</strong> For handling cash and making change.
          </li>
          <li>
            <strong>Reliability & Punctuality:</strong> Essential for maintaining smooth shift operations.
          </li>
          <li>
            <strong>Ability to Multitask:</strong> Juggling multiple responsibilities during busy periods.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Career Progression</h2>
        <p className="mb-4 text-gray-700">
          The fast food industry offers clear pathways for advancement, often from within:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Crew Member → Shift Supervisor → Assistant Manager → Store Manager → District Manager</li>
          <li>Opportunities to specialize in training, inventory, or specific kitchen roles.</li>
          <li>Many companies offer tuition reimbursement or scholarship programs for employees.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Related Job Titles</h2>
        <div className="flex flex-wrap justify-center gap-3">
          <Button variant="outline" asChild>
            <Link href="/search?keywords=barista">Barista</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/search?keywords=food%20prep%20worker">Food Prep Worker</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/search?keywords=server">Server</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/search?keywords=restaurant%20team%20member">Restaurant Team Member</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/search?keywords=kitchen%20assistant">Kitchen Assistant</Link>
          </Button>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
          Frequently Asked Questions about Fast Food Jobs
        </h2>
        <FAQ faqs={faqs} />
      </section>

      <div className="text-center mt-8">
        <Button asChild size="lg">
          <Link href="/search?keywords=fast%20food">Search All Fast Food Jobs</Link>
        </Button>
      </div>
    </div>
  )
}
