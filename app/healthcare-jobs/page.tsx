import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SchemaMarkup } from "@/components/schema-markup"
import { Breadcrumb } from "@/components/breadcrumb"
import { FAQ } from "@/components/faq"

export const metadata = {
  title: "Healthcare Jobs Hiring Immediately Near Me",
  description:
    "Find healthcare jobs hiring immediately. Explore roles like nurses, medical assistants, and administrative staff with competitive pay and benefits.",
  keywords: [
    "healthcare jobs",
    "hiring immediately healthcare",
    "nursing jobs",
    "medical assistant jobs",
    "hospital jobs",
    "clinic jobs",
  ],
  openGraph: {
    title: "Healthcare Jobs Hiring Immediately Near Me",
    description:
      "Find healthcare jobs hiring immediately. Explore roles like nurses, medical assistants, and administrative staff with competitive pay and benefits.",
    url: "https://jobsnearmehiringimmediately.com/healthcare-jobs",
    siteName: "Jobs Near Me Hiring Immediately",
    images: [
      {
        url: "https://jobsnearmehiringimmediately.com/public/placeholder-v7zml.png", // Placeholder image for healthcare
        width: 1200,
        height: 630,
        alt: "Healthcare professionals in a hospital setting",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthcare Jobs Hiring Immediately Near Me",
    description:
      "Find healthcare jobs hiring immediately. Explore roles like nurses, medical assistants, and administrative staff with competitive pay and benefits.",
    images: ["https://jobsnearmehiringimmediately.com/public/placeholder-v7zml.png"],
  },
}

export default function HealthcareJobsPage() {
  const faqs = [
    {
      question: "What are the most in-demand healthcare jobs?",
      answer:
        "Highly in-demand roles include Registered Nurses (RNs), Licensed Practical Nurses (LPNs), Certified Nursing Assistants (CNAs), Medical Assistants, Home Health Aides, and various allied health professionals.",
    },
    {
      question: "Do I need a degree for all healthcare jobs?",
      answer:
        "No, many entry-level healthcare jobs like CNA, Medical Assistant, or Home Health Aide require certifications or associate degrees, not necessarily a four-year bachelor's degree.",
    },
    {
      question: "What is the typical work environment in healthcare?",
      answer:
        "Healthcare environments vary from fast-paced hospitals and emergency rooms to quieter clinics, long-term care facilities, and even in-home care settings. Many roles involve direct patient interaction.",
    },
    {
      question: "Are healthcare jobs available for night shifts?",
      answer:
        "Yes, healthcare is a 24/7 industry, so there are abundant opportunities for night shifts, evening shifts, and weekend shifts, often with shift differentials (higher pay).",
    },
    {
      question: "What are the career progression opportunities in healthcare?",
      answer:
        "Healthcare offers excellent career progression. For example, a CNA can become an LPN, then an RN, and further specialize or move into management roles. Continuous learning and certifications are key.",
    },
  ]

  const healthcareSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Healthcare Jobs Hiring Immediately Near Me",
    description:
      "Find healthcare jobs hiring immediately. Explore roles like nurses, medical assistants, and administrative staff with competitive pay and benefits.",
    url: "https://jobsnearmehiringimmediately.com/healthcare-jobs",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://jobsnearmehiringimmediately.com/healthcare-jobs",
    },
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <SchemaMarkup schema={healthcareSchema} />
      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Healthcare Jobs", href: "/healthcare-jobs" },
        ]}
      />

      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Healthcare Jobs Hiring Immediately Near Me</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Join the vital healthcare sector! Discover a wide range of healthcare jobs hiring immediately, from direct
          patient care to administrative support roles.
        </p>
        <Image
          src="/healthcare-professionals-hospital.png"
          alt="Healthcare professionals in a hospital setting"
          width={800}
          height={450}
          className="w-full h-auto rounded-md mt-8 shadow-lg"
          priority
        />
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Job Outlook and Demand</h2>
        <p className="mb-4 text-gray-700">
          The healthcare industry is one of the fastest-growing sectors globally, driven by an aging population,
          advancements in medical technology, and increased access to care. This translates into a consistent and high
          demand for qualified professionals across various specialties and experience levels. Many healthcare
          facilities are actively seeking to fill positions immediately to meet patient needs.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong>Rapid Growth:</strong> Healthcare employment is projected to grow much faster than the average for
            all occupations.
          </li>
          <li>
            <strong>Diverse Roles:</strong> Opportunities exist for clinical, administrative, and support staff.
          </li>
          <li>
            <strong>Essential Services:</strong> Healthcare is a resilient industry, offering stability and continuous
            demand.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Typical Roles and Responsibilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Registered Nurse (RN)</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Provides direct patient care, administers medications, educates patients and families, and collaborates
                with doctors. Requires an ADN or BSN degree and licensure.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Medical Assistant (MA)</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Performs administrative and clinical tasks in clinics and doctors' offices, such as taking vital signs,
                scheduling appointments, and assisting with examinations. Requires certification.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Certified Nursing Assistant (CNA)</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Assists patients with daily activities like bathing, dressing, and feeding, and monitors vital signs.
                Works under the supervision of nurses. Requires certification.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Medical Receptionist/Secretary</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Manages patient appointments, handles medical records, processes insurance forms, and provides general
                administrative support in healthcare settings.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Skills and Qualifications</h2>
        <p className="mb-4 text-gray-700">
          To succeed in healthcare, a combination of clinical knowledge (where applicable) and soft skills is crucial:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong>Compassion & Empathy:</strong> Essential for providing patient-centered care.
          </li>
          <li>
            <strong>Communication Skills:</strong> Clear and effective communication with patients, families, and
            colleagues.
          </li>
          <li>
            <strong>Attention to Detail:</strong> Critical for accurate record-keeping, medication administration, and
            diagnosis.
          </li>
          <li>
            <strong>Problem-Solving:</strong> Ability to quickly assess situations and make sound decisions.
          </li>
          <li>
            <strong>Teamwork:</strong> Collaborating effectively within a multidisciplinary healthcare team.
          </li>
          <li>
            <strong>Adaptability:</strong> Ability to handle stressful situations and changing priorities.
          </li>
          <li>
            <strong>Relevant Certifications/Licenses:</strong> (e.g., CNA, MA, RN license) are often mandatory.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Career Progression</h2>
        <p className="mb-4 text-gray-700">
          The healthcare field offers extensive opportunities for career growth and specialization:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>CNA → LPN → RN → Nurse Practitioner (NP) / Clinical Nurse Specialist (CNS)</li>
          <li>Medical Assistant → Office Manager → Healthcare Administrator</li>
          <li>Specialization in areas like pediatrics, geriatrics, critical care, or specific medical technologies.</li>
          <li>Leadership and management roles within hospitals or clinics.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Related Job Titles</h2>
        <div className="flex flex-wrap justify-center gap-3">
          <Button variant="outline" asChild>
            <Link href="/search?keywords=patient%20care%20technician">Patient Care Technician</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/search?keywords=phlebotomist">Phlebotomist</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/search?keywords=radiologic%20technologist">Radiologic Technologist</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/search?keywords=physical%20therapist%20assistant">Physical Therapist Assistant</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/search?keywords=dental%20assistant">Dental Assistant</Link>
          </Button>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
          Frequently Asked Questions about Healthcare Jobs
        </h2>
        <FAQ faqs={faqs} />
      </section>

      <div className="text-center mt-8">
        <Button asChild size="lg">
          <Link href="/search?keywords=healthcare">Search All Healthcare Jobs</Link>
        </Button>
      </div>
    </div>
  )
}
