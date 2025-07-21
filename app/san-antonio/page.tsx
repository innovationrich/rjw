import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SchemaMarkup } from "@/components/schema-markup"
import { Breadcrumb } from "@/components/breadcrumb"
import { FAQ } from "@/components/faq"

export const metadata = {
  title: "Jobs in San Antonio, TX - Hiring Immediately",
  description:
    "Find immediate hiring opportunities in San Antonio, TX. Explore various industries, job types, and companies looking for talent now.",
  keywords: [
    "jobs San Antonio",
    "hiring San Antonio",
    "San Antonio jobs immediately",
    "San Antonio employment",
    "jobs in Texas",
  ],
  openGraph: {
    title: "Jobs in San Antonio, TX - Hiring Immediately",
    description:
      "Find immediate hiring opportunities in San Antonio, TX. Explore various industries, job types, and companies looking for talent now.",
    url: "https://jobsnearmehiringimmediately.com/san-antonio",
    siteName: "Jobs Near Me Hiring Immediately",
    images: [
      {
        url: "https://jobsnearmehiringimmediately.com/public/placeholder-v7zml.png", // Placeholder image for San Antonio
        width: 1200,
        height: 630,
        alt: "San Antonio Riverwalk",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jobs in San Antonio, TX - Hiring Immediately",
    description:
      "Find immediate hiring opportunities in San Antonio, TX. Explore various industries, job types, and companies looking for talent now.",
    images: ["https://jobsnearmehiringimmediately.com/public/placeholder-v7zml.png"], // Placeholder image for San Antonio
  },
}

export default function SanAntonioJobsPage() {
  const faqs = [
    {
      question: "What are the key industries hiring in San Antonio?",
      answer:
        "San Antonio's economy is driven by military and defense, healthcare, tourism, cybersecurity, and manufacturing. Retail and food service also have consistent hiring needs.",
    },
    {
      question: "Is San Antonio a good place for entry-level jobs?",
      answer:
        "Yes, San Antonio offers numerous entry-level opportunities, particularly in customer service, retail, hospitality, and administrative support, with many companies providing training.",
    },
    {
      question: "What is the cost of living like in San Antonio?",
      answer:
        "San Antonio is known for its relatively affordable cost of living compared to other major Texas cities like Austin or Dallas, especially in terms of housing.",
    },
    {
      question: "How can I find jobs hiring immediately in San Antonio?",
      answer:
        "Look for 'Now Hiring' signs in local businesses, check online job boards with 'immediate hire' filters, and consider temporary staffing agencies that specialize in quick placements.",
    },
    {
      question: "Is public transportation widely used in San Antonio?",
      answer:
        "VIA Metropolitan Transit provides bus services throughout San Antonio. While many residents rely on cars, public transit is available for commuting to key areas.",
    },
  ]

  const sanAntonioSchema = {
    "@context": "https://schema.org",
    "@type": "City",
    name: "San Antonio, TX",
    url: "https://jobsnearmehiringimmediately.com/san-antonio",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://jobsnearmehiringimmediately.com/san-antonio",
    },
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <SchemaMarkup schema={sanAntonioSchema} />
      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Jobs in San Antonio", href: "/san-antonio" },
        ]}
      />

      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Jobs in San Antonio, TX - Hiring Immediately</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Explore immediate hiring opportunities in the historic and rapidly growing city of San Antonio, Texas. Find
          your next career in a diverse and welcoming community.
        </p>
        <Image
          src="/san-antonio-riverwalk.png"
          alt="San Antonio Riverwalk"
          width={800}
          height={450}
          className="w-full h-auto rounded-md mt-8 shadow-lg"
          priority
        />
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Top Industries Hiring in San Antonio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Military & Defense</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                With several major military bases, San Antonio has a strong demand for civilian support staff,
                contractors, and cybersecurity professionals.
              </p>
              <Button asChild variant="link" className="p-0 h-auto mt-2">
                <Link href="/search?keywords=defense&location=San%20Antonio">View Defense Jobs</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Healthcare</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                San Antonio is a major medical hub in South Texas, offering numerous roles for nurses, doctors, medical
                technicians, and administrative staff.
              </p>
              <Button asChild variant="link" className="p-0 h-auto mt-2">
                <Link href="/healthcare-jobs?location=San%20Antonio">View Healthcare Jobs</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Tourism & Hospitality</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Home to the Alamo and Riverwalk, tourism is a major industry, creating demand for hotel staff,
                restaurant workers, and attraction employees.
              </p>
              <Button asChild variant="link" className="p-0 h-auto mt-2">
                <Link href="/search?keywords=hospitality&location=San%20Antonio">View Hospitality Jobs</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Cybersecurity</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                San Antonio is a growing cybersecurity hub, with opportunities in IT security, network defense, and
                information assurance.
              </p>
              <Button asChild variant="link" className="p-0 h-auto mt-2">
                <Link href="/search?keywords=cybersecurity&location=San%20Antonio">View Cybersecurity Jobs</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Manufacturing</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                The city has a significant manufacturing sector, particularly in automotive, with demand for production
                workers, engineers, and quality control.
              </p>
              <Button asChild variant="link" className="p-0 h-auto mt-2">
                <Link href="/search?keywords=manufacturing&location=San%20Antonio">View Manufacturing Jobs</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Retail & Food Service</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                With a growing population and tourist influx, retail sales associates, cashiers, servers, and cooks are
                consistently in demand.
              </p>
              <Button asChild variant="link" className="p-0 h-auto mt-2">
                <Link href="/retail-jobs?location=San%20Antonio">View Retail Jobs</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Why Work in San Antonio?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Affordable Living</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                San Antonio offers a lower cost of living compared to many other major U.S. cities, making it an
                attractive place to settle.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Rich Culture & History</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Experience a unique blend of Texan and Mexican cultures, historic sites like the Alamo, and vibrant
                festivals.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Growing Job Market</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                The city's economy is expanding, particularly in healthcare, tech, and manufacturing, creating new job
                opportunities.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Family-Friendly Environment</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                San Antonio is known for its family-friendly atmosphere, good schools, and numerous recreational
                activities.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
          Frequently Asked Questions about Jobs in San Antonio
        </h2>
        <FAQ faqs={faqs} />
      </section>

      <div className="text-center mt-8">
        <Button asChild size="lg">
          <Link href="/search?location=San%20Antonio">Search All San Antonio Jobs</Link>
        </Button>
      </div>
    </div>
  )
}
