import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SchemaMarkup } from "@/components/schema-markup"
import { Breadcrumb } from "@/components/breadcrumb"
import { FAQ } from "@/components/faq"

export const metadata = {
  title: "Jobs in Phoenix, AZ - Hiring Immediately",
  description:
    "Find immediate hiring opportunities in Phoenix, AZ. Explore various industries, job types, and companies looking for talent now.",
  keywords: ["jobs Phoenix", "hiring Phoenix", "Phoenix jobs immediately", "Phoenix employment", "jobs in Arizona"],
  openGraph: {
    title: "Jobs in Phoenix, AZ - Hiring Immediately",
    description:
      "Find immediate hiring opportunities in Phoenix, AZ. Explore various industries, job types, and companies looking for talent now.",
    url: "https://jobsnearmehiringimmediately.com/phoenix",
    siteName: "Jobs Near Me Hiring Immediately",
    images: [
      {
        url: "https://jobsnearmehiringimmediately.com/public/placeholder-v7zml.png", // Placeholder image for Phoenix
        width: 1200,
        height: 630,
        alt: "Phoenix city skyline",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jobs in Phoenix, AZ - Hiring Immediately",
    description:
      "Find immediate hiring opportunities in Phoenix, AZ. Explore various industries, job types, and companies looking for talent now.",
    images: ["https://jobsnearmehiringimmediately.com/public/placeholder-v7zml.png"], // Placeholder image for Phoenix
  },
}

export default function PhoenixJobsPage() {
  const faqs = [
    {
      question: "What are the major industries hiring in Phoenix?",
      answer:
        "Phoenix has strong job markets in healthcare, technology, aerospace, manufacturing, tourism, and hospitality. The city is also a growing hub for logistics and distribution.",
    },
    {
      question: "Are there many remote job opportunities in Phoenix?",
      answer:
        "While Phoenix has many in-person jobs, the tech and customer service sectors, in particular, offer a growing number of remote positions that can be based out of Phoenix.",
    },
    {
      question: "What is the job outlook for Phoenix?",
      answer:
        "Phoenix consistently ranks among the top U.S. cities for job growth, with a positive outlook driven by population growth and business relocation. The demand for skilled labor remains high.",
    },
    {
      question: "How can I find jobs hiring immediately in Phoenix?",
      answer:
        "Check local job boards, company websites for 'walk-in interview' events, and connect with staffing agencies that specialize in rapid placements for roles in retail, food service, and warehouse operations.",
    },
    {
      question: "Is it easy to commute in Phoenix?",
      answer:
        "Phoenix is a car-dependent city, but the Valley Metro light rail and bus system serve major corridors. Commute times can vary, especially during peak hours.",
    },
  ]

  const phoenixSchema = {
    "@context": "https://schema.org",
    "@type": "City",
    name: "Phoenix, AZ",
    url: "https://jobsnearmehiringimmediately.com/phoenix",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://jobsnearmehiringimmediately.com/phoenix",
    },
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <SchemaMarkup schema={phoenixSchema} />
      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Jobs in Phoenix", href: "/phoenix" },
        ]}
      />

      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Jobs in Phoenix, AZ - Hiring Immediately</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Discover immediate hiring opportunities in the thriving desert metropolis of Phoenix, Arizona. Find your next
          career in a city known for its robust economy and sunny disposition.
        </p>
        <Image
          src="/phoenix-skyline.png"
          alt="Phoenix city skyline"
          width={800}
          height={450}
          className="w-full h-auto rounded-md mt-8 shadow-lg"
          priority
        />
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Top Industries Hiring in Phoenix</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Healthcare</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Phoenix's growing population fuels a high demand for healthcare professionals, including nurses, medical
                assistants, and administrative staff in hospitals and clinics.
              </p>
              <Button asChild variant="link" className="p-0 h-auto mt-2">
                <Link href="/healthcare-jobs?location=Phoenix">View Healthcare Jobs</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Technology</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                The tech sector in Phoenix is expanding, with opportunities in software development, IT support, data
                centers, and cybersecurity.
              </p>
              <Button asChild variant="link" className="p-0 h-auto mt-2">
                <Link href="/search?keywords=tech&location=Phoenix">View Tech Jobs</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Tourism & Hospitality</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                As a popular tourist destination, Phoenix offers numerous jobs in hotels, resorts, restaurants, and
                attractions, from front desk to culinary roles.
              </p>
              <Button asChild variant="link" className="p-0 h-auto mt-2">
                <Link href="/search?keywords=hospitality&location=Phoenix">View Hospitality Jobs</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Manufacturing & Aerospace</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Phoenix has a significant presence in manufacturing and aerospace, with demand for engineers, production
                technicians, and assembly line workers.
              </p>
              <Button asChild variant="link" className="p-0 h-auto mt-2">
                <Link href="/search?keywords=manufacturing&location=Phoenix">View Manufacturing Jobs</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Retail & Customer Service</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                With a growing population, retail stores and customer service centers are consistently hiring for sales
                associates, cashiers, and call center representatives.
              </p>
              <Button asChild variant="link" className="p-0 h-auto mt-2">
                <Link href="/retail-jobs?location=Phoenix">View Retail Jobs</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Construction</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Rapid development and infrastructure projects mean a steady need for construction laborers, skilled
                trades, and project support staff.
              </p>
              <Button asChild variant="link" className="p-0 h-auto mt-2">
                <Link href="/construction-jobs?location=Phoenix">View Construction Jobs</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Why Work in Phoenix?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Strong Job Market</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Phoenix consistently ranks among the top U.S. cities for job growth, offering abundant opportunities
                across diverse sectors.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Affordable Living</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Compared to other major Western cities, Phoenix offers a relatively affordable cost of living,
                especially for housing.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Sunny Climate</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Enjoy over 300 days of sunshine per year, perfect for outdoor activities and a vibrant lifestyle.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Growing Tech Hub</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                The city is attracting major tech companies and startups, creating a dynamic environment for tech
                professionals.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
          Frequently Asked Questions about Jobs in Phoenix
        </h2>
        <FAQ faqs={faqs} />
      </section>

      <div className="text-center mt-8">
        <Button asChild size="lg">
          <Link href="/search?location=Phoenix">Search All Phoenix Jobs</Link>
        </Button>
      </div>
    </div>
  )
}
