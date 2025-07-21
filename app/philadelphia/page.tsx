import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SchemaMarkup } from "@/components/schema-markup"
import { Breadcrumb } from "@/components/breadcrumb"
import { FAQ } from "@/components/faq"

export const metadata = {
  title: "Jobs in Philadelphia, PA - Hiring Immediately",
  description:
    "Find immediate hiring opportunities in Philadelphia, PA. Explore various industries, job types, and companies looking for talent now.",
  keywords: [
    "jobs Philadelphia",
    "hiring Philadelphia",
    "Philadelphia jobs immediately",
    "Philadelphia employment",
    "jobs in Pennsylvania",
  ],
  openGraph: {
    title: "Jobs in Philadelphia, PA - Hiring Immediately",
    description:
      "Find immediate hiring opportunities in Philadelphia, PA. Explore various industries, job types, and companies looking for talent now.",
    url: "https://jobsnearmehiringimmediately.com/philadelphia",
    siteName: "Jobs Near Me Hiring Immediately",
    images: [
      {
        url: "https://jobsnearmehiringimmediately.com/public/placeholder-v7zml.png", // Placeholder image for Philadelphia
        width: 1200,
        height: 630,
        alt: "Philadelphia city skyline",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jobs in Philadelphia, PA - Hiring Immediately",
    description:
      "Find immediate hiring opportunities in Philadelphia, PA. Explore various industries, job types, and companies looking for talent now.",
    images: ["https://jobsnearmehiringimmediately.com/public/placeholder-v7zml.png"], // Placeholder image for Philadelphia
  },
}

export default function PhiladelphiaJobsPage() {
  const faqs = [
    {
      question: "What are the leading industries for jobs in Philadelphia?",
      answer:
        "Philadelphia's economy is strong in healthcare, education, life sciences, technology, and tourism/hospitality. Manufacturing and logistics also provide significant employment.",
    },
    {
      question: "Are there many entry-level jobs in Philadelphia?",
      answer:
        "Yes, Philadelphia offers numerous entry-level positions, particularly in healthcare support, retail, food service, and administrative roles, often with opportunities for on-the-job training.",
    },
    {
      question: "What is the cost of living in Philadelphia?",
      answer:
        "Philadelphia generally has a lower cost of living compared to other major East Coast cities like New York or Boston, making it an attractive option for many job seekers.",
    },
    {
      question: "How can I find jobs hiring immediately in Philadelphia?",
      answer:
        "Check local job boards, company career pages for 'walk-in interview' events, and consider registering with local staffing agencies that specialize in quick placements.",
    },
    {
      question: "Is public transportation good for commuting to jobs in Philadelphia?",
      answer:
        "SEPTA (Southeastern Pennsylvania Transportation Authority) provides extensive public transit options, including buses, subways, trolleys, and regional rail, making commuting convenient throughout the city and suburbs.",
    },
  ]

  const philadelphiaSchema = {
    "@context": "https://schema.org",
    "@type": "City",
    name: "Philadelphia, PA",
    url: "https://jobsnearmehiringimmediately.com/philadelphia",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://jobsnearmehiringimmediately.com/philadelphia",
    },
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <SchemaMarkup schema={philadelphiaSchema} />
      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Jobs in Philadelphia", href: "/philadelphia" },
        ]}
      />

      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Jobs in Philadelphia, PA - Hiring Immediately</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Discover immediate hiring opportunities in the historic and vibrant city of Philadelphia, Pennsylvania. The
          "City of Brotherly Love" offers diverse roles across thriving sectors.
        </p>
        <Image
          src="/philadelphia-skyline.png"
          alt="Philadelphia city skyline"
          width={800}
          height={450}
          className="w-full h-auto rounded-md mt-8 shadow-lg"
          priority
        />
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Top Industries Hiring in Philadelphia</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Healthcare & Life Sciences</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Home to numerous hospitals and research institutions, Philadelphia has a robust demand for medical
                professionals, researchers, and support staff.
              </p>
              <Button asChild variant="link" className="p-0 h-auto mt-2">
                <Link href="/healthcare-jobs?location=Philadelphia">View Healthcare Jobs</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                With many universities and schools, there's a consistent need for educators, administrative staff, and
                support roles across all levels of education.
              </p>
              <Button asChild variant="link" className="p-0 h-auto mt-2">
                <Link href="/search?keywords=education&location=Philadelphia">View Education Jobs</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Tourism & Hospitality</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                As a city rich in history and attractions, Philadelphia offers numerous jobs in hotels, restaurants,
                museums, and event management.
              </p>
              <Button asChild variant="link" className="p-0 h-auto mt-2">
                <Link href="/search?keywords=hospitality&location=Philadelphia">View Hospitality Jobs</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Technology</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Philadelphia's tech scene is growing, with opportunities in software development, IT support, and
                digital marketing across various startups and established firms.
              </p>
              <Button asChild variant="link" className="p-0 h-auto mt-2">
                <Link href="/search?keywords=tech&location=Philadelphia">View Tech Jobs</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Retail & Customer Service</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                The city's diverse neighborhoods and shopping districts provide ongoing demand for retail sales
                associates, cashiers, and customer service representatives.
              </p>
              <Button asChild variant="link" className="p-0 h-auto mt-2">
                <Link href="/retail-jobs?location=Philadelphia">View Retail Jobs</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Manufacturing & Logistics</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                With its port and strategic location, Philadelphia has a need for warehouse workers, production staff,
                and logistics coordinators.
              </p>
              <Button asChild variant="link" className="p-0 h-auto mt-2">
                <Link href="/warehouse-jobs?location=Philadelphia">View Warehouse Jobs</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Why Work in Philadelphia?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Rich History & Culture</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Immerse yourself in American history, world-class museums, vibrant arts, and a renowned culinary scene.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Affordable Major City</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Enjoy the benefits of a major East Coast city with a more accessible cost of living compared to its
                neighbors.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Strong Healthcare Sector</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                A hub for medical innovation and education, offering numerous opportunities in healthcare and life
                sciences.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Excellent Public Transit</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Navigate the city easily with SEPTA's comprehensive network of trains, subways, and buses.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
          Frequently Asked Questions about Jobs in Philadelphia
        </h2>
        <FAQ faqs={faqs} />
      </section>

      <div className="text-center mt-8">
        <Button asChild size="lg">
          <Link href="/search?location=Philadelphia">Search All Philadelphia Jobs</Link>
        </Button>
      </div>
    </div>
  )
}
