import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SchemaMarkup } from "@/components/schema-markup"
import { Breadcrumb } from "@/components/breadcrumb"
import { FAQ } from "@/components/faq"

export const metadata = {
  title: "Jobs in Chicago, IL - Hiring Immediately",
  description:
    "Find immediate hiring opportunities in Chicago, IL. Explore various industries, job types, and companies looking for talent now.",
  keywords: ["jobs Chicago", "hiring Chicago", "Chicago jobs immediately", "Chicago employment", "jobs in Illinois"],
  openGraph: {
    title: "Jobs in Chicago, IL - Hiring Immediately",
    description:
      "Find immediate hiring opportunities in Chicago, IL. Explore various industries, job types, and companies looking for talent now.",
    url: "https://jobsnearmehiringimmediately.com/chicago",
    siteName: "Jobs Near Me Hiring Immediately",
    images: [
      {
        url: "https://jobsnearmehiringimmediately.com/public/placeholder-v7zml.png", // Placeholder image for Chicago
        width: 1200,
        height: 630,
        alt: "Chicago city skyline",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jobs in Chicago, IL - Hiring Immediately",
    description:
      "Find immediate hiring opportunities in Chicago, IL. Explore various industries, job types, and companies looking for talent now.",
    images: ["https://jobsnearmehiringimmediately.com/public/placeholder-v7zml.png"], // Placeholder image for Chicago
  },
}

export default function ChicagoJobsPage() {
  const faqs = [
    {
      question: "What are the most common industries hiring in Chicago?",
      answer:
        "Chicago has a diverse job market with strong sectors in finance, technology, healthcare, manufacturing, transportation & logistics, and hospitality. Retail and food service also have consistent hiring needs.",
    },
    {
      question: "Are there many entry-level jobs available in Chicago?",
      answer:
        "Yes, Chicago offers numerous entry-level opportunities, especially in retail, food service, customer service, and administrative roles. Many companies are willing to train new employees.",
    },
    {
      question: "What is the average salary in Chicago?",
      answer:
        "The average salary in Chicago varies widely by industry and experience. As of recent data, it's generally competitive with other major U.S. cities, but it's best to research specific roles.",
    },
    {
      question: "How can I find jobs hiring immediately in Chicago?",
      answer:
        "Look for 'Now Hiring' signs in local businesses, check online job boards with 'immediate hire' filters, and consider temporary staffing agencies that specialize in quick placements.",
    },
    {
      question: "Is public transportation good for commuting to jobs in Chicago?",
      answer:
        "Chicago has an extensive public transportation system (CTA trains and buses) that makes commuting accessible from many neighborhoods. This is a significant advantage for job seekers.",
    },
  ]

  const chicagoSchema = {
    "@context": "https://schema.org",
    "@type": "City",
    name: "Chicago, IL",
    url: "https://jobsnearmehiringimmediately.com/chicago",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://jobsnearmehiringimmediately.com/chicago",
    },
    // You can add more specific properties like population, area, etc. if desired
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <SchemaMarkup schema={chicagoSchema} />
      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Jobs in Chicago", href: "/chicago" },
        ]}
      />

      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Jobs in Chicago, IL - Hiring Immediately</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Explore a wide range of job opportunities in the vibrant city of Chicago. From bustling downtown offices to
          neighborhood businesses, find your next career move with immediate hiring needs.
        </p>
        <Image
          src="/chicago-skyline.png"
          alt="Chicago city skyline"
          width={800}
          height={450}
          className="w-full h-auto rounded-md mt-8 shadow-lg"
          priority
        />
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Top Industries Hiring in Chicago</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Healthcare</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Chicago is home to world-class hospitals and research institutions, creating constant demand for nurses,
                medical assistants, administrative staff, and specialists.
              </p>
              <Button asChild variant="link" className="p-0 h-auto mt-2">
                <Link href="/healthcare-jobs?location=Chicago">View Healthcare Jobs</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Technology</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                A growing tech hub, Chicago offers roles in software development, IT support, data analysis, and
                cybersecurity across various startups and established companies.
              </p>
              <Button asChild variant="link" className="p-0 h-auto mt-2">
                <Link href="/search?keywords=tech&location=Chicago">View Tech Jobs</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Retail & Hospitality</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                With a thriving tourism industry and numerous shopping districts, retail sales, customer service, hotel
                staff, and restaurant positions are frequently available.
              </p>
              <Button asChild variant="link" className="p-0 h-auto mt-2">
                <Link href="/retail-jobs?location=Chicago">View Retail Jobs</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Manufacturing & Logistics</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                As a major transportation hub, Chicago has a strong manufacturing base and a high demand for warehouse
                associates, production workers, and logistics coordinators.
              </p>
              <Button asChild variant="link" className="p-0 h-auto mt-2">
                <Link href="/warehouse-jobs?location=Chicago">View Warehouse Jobs</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Finance</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                A global financial center, Chicago offers opportunities in banking, trading, accounting, and financial
                analysis.
              </p>
              <Button asChild variant="link" className="p-0 h-auto mt-2">
                <Link href="/search?keywords=finance&location=Chicago">View Finance Jobs</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                From public schools to universities, there's a consistent need for teachers, administrative staff, and
                support roles in Chicago's educational institutions.
              </p>
              <Button asChild variant="link" className="p-0 h-auto mt-2">
                <Link href="/search?keywords=education&location=Chicago">View Education Jobs</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Why Work in Chicago?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Diverse Economy</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Chicago's economy is highly diversified, offering stability and a wide array of job opportunities across
                numerous sectors, reducing reliance on any single industry.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Cultural Hub</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Enjoy world-class museums, theaters, music venues, and a vibrant food scene. Chicago offers a rich
                cultural experience outside of work.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Public Transportation</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                The CTA provides extensive train and bus networks, making it easy to commute to work without a car,
                saving time and money.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Affordable Living (for a major city)</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Compared to other major global cities, Chicago offers a relatively affordable cost of living, especially
                in terms of housing.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
          Frequently Asked Questions about Jobs in Chicago
        </h2>
        <FAQ faqs={faqs} />
      </section>

      <div className="text-center mt-8">
        <Button asChild size="lg">
          <Link href="/search?location=Chicago">Search All Chicago Jobs</Link>
        </Button>
      </div>
    </div>
  )
}
