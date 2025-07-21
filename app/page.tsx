import { Hero } from "@/components/hero"
import { JobCategories } from "@/components/job-categories"
import { FeaturedJobs } from "@/components/featured-jobs"
import { LocalJobsSection } from "@/components/local-jobs-section"
import { BlogPreview } from "@/components/blog-preview"
import { FAQ } from "@/components/faq"
import { AdBanner } from "@/components/ad-banner"
import { SchemaMarkup } from "@/components/schema-markup"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Jobs Near Me Hiring Immediately - Find Your Next Job Today",
  description:
    "Find jobs hiring immediately near you. Explore full-time, part-time, remote, and local opportunities. Your next career starts here!",
  alternates: {
    canonical: "/",
  },
}

const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Jobs Near Me Hiring Immediately",
  url: "https://jobsnearmehiringimmediately.com",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://jobsnearmehiringimmediately.com/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
}

export default function Home() {
  return (
    <>
      <SchemaMarkup schema={homePageSchema} />
      <Hero />
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* The JobSearchBar here is the old one. It will be updated when the new JobSearchBar is imported. */}
          {/* For now, it's just a placeholder to ensure the page renders. */}
          {/* The actual search functionality is on /search page */}
          <div className="flex flex-col sm:flex-row gap-4 p-4 bg-white rounded-lg shadow-md max-w-4xl mx-auto">
            <div className="flex-1 relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-10 pr-4 py-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Job title, keywords, or company"
                type="text"
                aria-label="Job keywords"
              />
            </div>
            <div className="flex-1 relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-10 pr-4 py-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="City, state, or zip code"
                type="text"
                aria-label="Job location"
              />
            </div>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full sm:w-auto px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Search Jobs
            </button>
          </div>
        </div>
      </section>
      <JobCategories />
      <FeaturedJobs />
      <LocalJobsSection />
      <BlogPreview />
      <AdBanner />
      <FAQ />
    </>
  )
}
