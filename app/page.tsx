import { Hero } from "@/components/hero"
import { JobCategories } from "@/components/job-categories"
import { FeaturedJobs } from "@/components/featured-jobs"
import { LocalJobsSection } from "@/components/local-jobs-section"
import { BlogPreview } from "@/components/blog-preview"
import { FAQ } from "@/components/faq"
import { AdBanner } from "@/components/ad-banner"
import { SchemaMarkup } from "@/components/schema-markup"
import { Breadcrumb } from "@/components/breadcrumb"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Jobs Near Me Hiring Immediately - Find Work Today",
  description:
    "Find jobs near me hiring immediately. Search thousands of immediate hiring opportunities including warehouse, retail, fast food, and entry-level positions. No experience required for many positions. Apply today and start working this week!",
  alternates: {
    canonical: "/",
  },
}

const jobPostingSchema = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: "Jobs Hiring Near Me Immediately",
  description: "Find immediate hiring opportunities in your area",
  datePosted: new Date().toISOString(),
  employmentType: ["FULL_TIME", "PART_TIME", "TEMPORARY"],
  hiringOrganization: {
    "@type": "Organization",
    name: "Jobs Hiring Near Me Immediately",
    sameAs: "https://jobshiringnearmeimmediately.com",
  },
  jobLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How can I find jobs hiring immediately near me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use our job search platform to find immediate hiring opportunities in your area. We list jobs from warehouses, retail stores, restaurants, and other employers looking to hire today. You can search by location, job type, and filter for immediate hiring positions.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need experience for immediate hiring jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Many immediate hiring positions don't require experience. Entry-level jobs in warehouses, retail, fast food, and customer service often provide on-the-job training. Look for positions marked as 'No Experience Required' or 'Entry Level.'",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can I start working after applying?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Many employers offering immediate hiring can have you start within 24-48 hours of applying. Some positions offer same-day interviews and next-day start dates, especially in high-demand industries like warehousing and food service.",
      },
    },
    {
      "@type": "Question",
      name: "What types of jobs hire immediately?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Common immediate hiring jobs include warehouse workers, retail associates, fast food crew members, customer service representatives, delivery drivers, security guards, and cleaning staff. These industries often have high turnover and constant hiring needs.",
      },
    },
    {
      "@type": "Question",
      name: "What should I bring to an immediate hiring interview?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bring multiple copies of your resume, a valid ID, Social Security card, and any relevant certifications. Some employers may conduct on-the-spot hiring, so be prepared to fill out paperwork and potentially start orientation immediately.",
      },
    },
    {
      "@type": "Question",
      name: "Are immediate hiring jobs legitimate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, many legitimate employers offer immediate hiring, especially in industries with high demand for workers. However, be cautious of scams. Legitimate employers will never ask for money upfront or request personal financial information during the initial application process.",
      },
    },
  ],
}

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Jobs Near Me Hiring Immediately - Find Work Today",
  description:
    "Find jobs near me hiring immediately. Search thousands of immediate hiring opportunities including warehouse, retail, fast food, and entry-level positions. No experience required for many positions. Apply today and start working this week!",
  url: "https://jobsnearmehiringimmediately.com",
}

export default function HomePage() {
  return (
    <>
      <SchemaMarkup schema={jobPostingSchema} />
      <SchemaMarkup schema={faqSchema} />
      <SchemaMarkup schema={webPageSchema} />

      <Breadcrumb items={[{ name: "Home", href: "/" }]} />

      <Hero />
      <AdBanner slot="homepage-top" />

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
          <h2>Find Your Next Job Fast: Immediate Hiring Opportunities Near You</h2>
          <p>
            Are you looking for "jobs near me hiring immediately"? You've come to the right place! Our platform
            specializes in connecting job seekers with employers who are actively recruiting and looking to fill
            positions quickly. We understand the urgency of finding work, which is why we focus on roles that offer
            same-day interviews and next-day start dates. Whether you're seeking full-time stability, part-time
            flexibility, or an entry-level position with no experience required, we have thousands of opportunities
            waiting for you.
          </p>
          <p>
            Our extensive database includes a wide range of industries, from high-demand warehouse and logistics roles
            to customer service, retail, and fast food positions. We also feature remote jobs, allowing you to work from
            the comfort of your home, and construction jobs for those looking for hands-on work. Each listing provides
            essential details like location, salary, and job type, making your job search efficient and targeted.
          </p>
          <p>
            Don't waste time sifting through outdated listings. Our platform is updated daily with fresh opportunities
            from employers eager to hire. Take control of your career today and find a job that fits your needs and gets
            you working immediately. Your next opportunity is just a few clicks away!
          </p>
        </div>
      </section>

      <JobCategories />
      <FeaturedJobs />

      <AdBanner slot="homepage-middle" />

      <LocalJobsSection />
      <BlogPreview />
      <FAQ />

      <AdBanner slot="homepage-bottom" />
    </>
  )
}
