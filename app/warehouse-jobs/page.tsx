import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SchemaMarkup } from "@/components/schema-markup"
import { Breadcrumb } from "@/components/breadcrumb"
import { FAQ } from "@/components/faq"

export const metadata = {
  title: "Warehouse Jobs Hiring Immediately Near Me",
  description:
    "Find warehouse jobs hiring immediately. Explore roles like forklift operator, packer, and sorter with competitive pay and benefits.",
  keywords: [
    "warehouse jobs",
    "hiring immediately warehouse",
    "forklift operator jobs",
    "packer jobs",
    "sorter jobs",
    "logistics jobs",
  ],
  openGraph: {
    title: "Warehouse Jobs Hiring Immediately Near Me",
    description:
      "Find warehouse jobs hiring immediately. Explore roles like forklift operator, packer, and sorter with competitive pay and benefits.",
    url: "https://jobsnearmehiringimmediately.com/warehouse-jobs",
    siteName: "Jobs Near Me Hiring Immediately",
    images: [
      {
        url: "https://jobsnearmehiringimmediately.com/public/warehouse-handshake.png",
        width: 1200,
        height: 630,
        alt: "Warehouse workers shaking hands",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Warehouse Jobs Hiring Immediately Near Me",
    description:
      "Find warehouse jobs hiring immediately. Explore roles like forklift operator, packer, and sorter with competitive pay and benefits.",
    images: ["https://jobsnearmehiringimmediately.com/public/warehouse-handshake.png"],
  },
}

export default function WarehouseJobsPage() {
  const faqs = [
    {
      question: "What are the typical responsibilities of a warehouse associate?",
      answer:
        "Responsibilities often include receiving and processing incoming stock, picking and packing orders, managing inventory, loading and unloading shipments, and maintaining a clean and organized work environment.",
    },
    {
      question: "Do I need experience to get a warehouse job?",
      answer:
        "Many entry-level warehouse positions do not require prior experience, as companies often provide on-the-job training. However, experience with forklifts or other equipment can be a plus.",
    },
    {
      question: "What kind of pay can I expect for warehouse jobs?",
      answer:
        "Pay for warehouse jobs varies by location, company, and specific role, but many offer competitive hourly wages, often with opportunities for overtime and benefits.",
    },
    {
      question: "Are warehouse jobs physically demanding?",
      answer:
        "Yes, warehouse jobs often involve standing for long periods, lifting heavy objects, bending, and repetitive motions. Physical stamina and the ability to lift a certain weight are usually required.",
    },
    {
      question: "What are the career progression opportunities in a warehouse?",
      answer:
        "With experience, warehouse associates can advance to roles like team lead, supervisor, inventory manager, logistics coordinator, or even move into administrative or management positions within the company.",
    },
  ]

  const warehouseSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Warehouse Jobs Hiring Immediately Near Me",
    description:
      "Find warehouse jobs hiring immediately. Explore roles like forklift operator, packer, and sorter with competitive pay and benefits.",
    url: "https://jobsnearmehiringimmediately.com/warehouse-jobs",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://jobsnearmehiringimmediately.com/warehouse-jobs",
    },
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <SchemaMarkup schema={warehouseSchema} />
      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Warehouse Jobs", href: "/warehouse-jobs" },
        ]}
      />

      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Warehouse Jobs Hiring Immediately Near Me</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Looking for a dynamic role in logistics and supply chain? Discover a wide range of warehouse jobs hiring
          immediately, from entry-level positions to specialized roles.
        </p>
        <Image
          src="/warehouse-handshake.png"
          alt="Warehouse workers shaking hands"
          width={800}
          height={450}
          className="w-full h-auto rounded-md mt-8 shadow-lg"
          priority
        />
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Job Outlook and Demand</h2>
        <p className="mb-4 text-gray-700">
          The demand for warehouse and logistics professionals remains consistently high, driven by the growth of
          e-commerce and global supply chains. Companies are constantly seeking reliable individuals to manage their
          inventory, fulfill orders, and ensure smooth operations. This sector offers stable employment with
          opportunities for quick entry and career advancement.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong>High Demand:</strong> E-commerce boom ensures continuous need for warehouse staff.
          </li>
          <li>
            <strong>Growth Opportunities:</strong> Automation and technology are creating new, more specialized roles.
          </li>
          <li>
            <strong>Essential Industry:</strong> Warehouse and logistics are critical components of the economy,
            offering job security.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Typical Roles and Responsibilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Warehouse Associate</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Responsible for receiving, storing, and distributing products. This includes picking, packing, and
                shipping orders, as well as maintaining inventory accuracy.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Forklift Operator</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Operates forklifts and other heavy machinery to move materials, load/unload trucks, and stack goods
                safely within the warehouse. Requires certification.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Picker/Packer</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Locates items in the warehouse according to order lists (picking) and prepares them for shipment by
                packaging them securely (packing).
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Shipping/Receiving Clerk</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Manages incoming and outgoing shipments, verifies contents, prepares documentation, and coordinates with
                delivery drivers.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Skills and Qualifications</h2>
        <p className="mb-4 text-gray-700">
          While many warehouse jobs are entry-level, certain skills and qualifications will make you a more attractive
          candidate:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong>Physical Stamina:</strong> Ability to lift, bend, stand for long periods, and perform repetitive
            tasks.
          </li>
          <li>
            <strong>Attention to Detail:</strong> Crucial for accurate order picking, packing, and inventory management.
          </li>
          <li>
            <strong>Reliability & Punctuality:</strong> Essential for maintaining smooth operations and meeting
            deadlines.
          </li>
          <li>
            <strong>Teamwork:</strong> Ability to collaborate effectively with colleagues in a fast-paced environment.
          </li>
          <li>
            <strong>Basic Math Skills:</strong> For counting inventory and verifying quantities.
          </li>
          <li>
            <strong>Safety Consciousness:</strong> Understanding and adherence to safety protocols.
          </li>
          <li>
            <strong>Forklift Certification:</strong> (For operator roles) A significant advantage.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Career Progression</h2>
        <p className="mb-4 text-gray-700">
          Warehouse jobs offer clear paths for career advancement. Starting as an associate, you can move into
          specialized roles or leadership positions:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Warehouse Associate → Lead/Trainer → Supervisor → Warehouse Manager</li>
          <li>
            Specialized roles like Inventory Control Specialist, Logistics Coordinator, or Quality Control Inspector.
          </li>
          <li>Opportunities to cross-train on different equipment or systems.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Related Job Titles</h2>
        <div className="flex flex-wrap justify-center gap-3">
          <Button variant="outline" asChild>
            <Link href="/search?keywords=logistics%20coordinator">Logistics Coordinator</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/search?keywords=inventory%20specialist">Inventory Specialist</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/search?keywords=material%20handler">Material Handler</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/search?keywords=delivery%20driver">Delivery Driver</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/search?keywords=supply%20chain%20assistant">Supply Chain Assistant</Link>
          </Button>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
          Frequently Asked Questions about Warehouse Jobs
        </h2>
        <FAQ faqs={faqs} />
      </section>

      <div className="text-center mt-8">
        <Button asChild size="lg">
          <Link href="/search?keywords=warehouse">Search All Warehouse Jobs</Link>
        </Button>
      </div>
    </div>
  )
}
