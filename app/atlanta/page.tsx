import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SchemaMarkup } from "@/components/schema-markup"
import { Breadcrumb } from "@/components/breadcrumb"
import { FAQ } from "@/components/faq"

export const metadata = {
  title: "Jobs in Atlanta, GA - Hiring Immediately",
  description:
    "Find immediate hiring opportunities in Atlanta, GA. Explore various industries, job types, and companies looking for talent now.",
  keywords: ["jobs Atlanta", "hiring Atlanta", "Atlanta jobs immediately", "Atlanta employment", "jobs in Georgia"],
  openGraph: {
    title: "Jobs in Atlanta, GA - Hiring Immediately",
    description:
      "Find immediate hiring opportunities in Atlanta, GA. Explore various industries, job types, and companies looking for talent now.",
    url: "https://jobsnearmehiringimmediately.com/atlanta",
    siteName: "Jobs Near Me Hiring Immediately",
    images: [
      {
        url: "https://jobsnearmehiringimmediately.com/public/placeholder-v7zml.png", // Placeholder image for Atlanta
        width: 1200,
        height: 630,
        alt: "Atlanta city skyline",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jobs in Atlanta, GA - Hiring Immediately",
    description:
      "Find immediate hiring opportunities in Atlanta, GA. Explore various industries, job types, and companies looking for talent now.",
    images: ["https://jobsnearmehiringimmediately.com/public/placeholder-v7zml.png"], // Placeholder image for Atlanta
  },
}

export default function AtlantaJobsPage() {
  const faqs = [
    {
      question: "What are the fastest-growing industries in Atlanta?",
      answer:
        "Atlanta's economy is booming in sectors like technology (FinTech, cybersecurity), film & entertainment, logistics, healthcare, and advanced manufacturing.",
    },
    {
      question: "Is Atlanta a good place for entry-level jobs?",
      answer:
        "Yes, Atlanta has a strong market for entry-level positions, particularly in customer service, retail, hospitality, and administrative support, with many companies offering training.",
    },
    {
      question: "What is the cost of living like in Atlanta?",
      answer:
        "Atlanta's cost of living is generally considered affordable compared to other major U.S. cities, though housing costs have been rising. Transportation can be a factor due to traffic.",
    },
    {
      question: "How can I find jobs hiring immediately in Atlanta?",
      answer:
        "Utilize online job boards with 'immediate hire' filters, check company career pages for 'walk-in interview' events, and connect with local staffing agencies specializing in quick placements.",
    },
    {
      question: "Is public transportation reliable in Atlanta?",
      answer:
        "MARTA (Metropolitan Atlanta Rapid Transit Authority) provides rail and bus services, connecting many parts of the city and surrounding areas. It's a viable option for commuting, especially to downtown and Midtown.",
    },
  ]

  const atlantaSchema = {
    "@context": "https://schema.org",
    "@type": "City",
    name: "Atlanta, GA",
    url: "https://jobsnearmehiringimmediately.com/atlanta",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://jobsnearmehiringimmediately.com/atlanta",
    },
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <SchemaMarkup schema={atlantaSchema} />
      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Jobs in Atlanta", href: "/atlanta" },
        ]}
      />

      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Jobs in Atlanta, GA - Hiring Immediately</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Discover a wealth of immediate hiring opportunities in Atlanta, Georgia. The "Gateway to the South" offers
          diverse roles across booming industries, ready for your talent.
        </p>
        <Image
          src="/atlanta-skyline.png"
          alt="Atlanta city skyline"
          width={800}
          height={450}
          className="w-full h-auto rounded-md mt-8 shadow-lg"
          priority
        />
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Top Industries Hiring in Atlanta</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Film & Entertainment</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Known as "Hollywood of the South," Atlanta has a thriving film and TV production scene, creating jobs in
                various production roles, set design, and support services.
              </p>
              <Button asChild variant="link" className="p-0 h-auto mt-2">
                <Link href="/search?keywords=film&location=Atlanta">View Film Jobs</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Logistics & Transportation</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                As a major transportation hub, Atlanta has high demand for roles in warehousing, supply chain
                management, truck driving, and airport operations.
              </p>
              <Button asChild variant="link" className="p-0 h-auto mt-2">
                <Link href="/warehouse-jobs?location=Atlanta">View Logistics Jobs</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Technology</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Atlanta's tech sector is rapidly expanding, particularly in FinTech, cybersecurity, and software
                development, with numerous startups and established tech companies.
              </p>
              <Button asChild variant="link" className="p-0 h-auto mt-2">
                <Link href="/search?keywords=tech&location=Atlanta">View Tech Jobs</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Healthcare</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                With a large population and major medical centers, healthcare professionals, administrative staff, and
                support roles are consistently in demand.
              </p>
              <Button asChild variant="link" className="p-0 h-auto mt-2">
                <Link href="/healthcare-jobs?location=Atlanta">View Healthcare Jobs</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Retail & Food Service</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Atlanta's vibrant retail scene and diverse culinary landscape mean constant opportunities for sales
                associates, cashiers, servers, cooks, and hospitality staff.
              </p>
              <Button asChild variant="link" className="p-0 h-auto mt-2">
                <Link href="/retail-jobs?location=Atlanta">View Retail Jobs</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Construction</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Ongoing development and infrastructure projects create a steady need for construction laborers, skilled
                trades, and project managers.
              </p>
              <Button asChild variant="link" className="p-0 h-auto mt-2">
                <Link href="/construction-jobs?location=Atlanta">View Construction Jobs</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Why Work in Atlanta?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Growing Economy</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Atlanta boasts one of the fastest-growing economies in the U.S., offering abundant job opportunities and
                career advancement.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Affordable Living</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Compared to other major metropolitan areas, Atlanta generally offers a more affordable cost of living,
                especially for housing.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Cultural Diversity</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                A rich history, diverse communities, and a vibrant arts and food scene make Atlanta a culturally rich
                place to live and work.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Green Spaces</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Despite being a major city, Atlanta is known for its lush tree canopy and numerous parks, offering a
                balance of urban and natural environments.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
          Frequently Asked Questions about Jobs in Atlanta
        </h2>
        <FAQ faqs={faqs} />
      </section>

      <div className="text-center mt-8">
        <Button asChild size="lg">
          <Link href="/search?location=Atlanta">Search All Atlanta Jobs</Link>
        </Button>
      </div>
    </div>
  )
}
