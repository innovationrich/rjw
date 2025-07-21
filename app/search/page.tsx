import type { Metadata } from "next"
import { Suspense } from "react"
import { searchJobs } from "@/lib/job-api"
import Loading from "./loading"

/* Client wrapper (defined above) */
import ClientSearchPage from "./ClientSearchPage"

/* ---------- <head> metadata ---------- */
export const metadata: Metadata = {
  title: "Job Search - Find Your Next Opportunity",
  description:
    "Search for jobs by keywords, location, and job type. Find full-time, part-time, contract, and remote jobs.",
  keywords: ["job search", "find jobs", "job listings", "employment", "career"],
  openGraph: {
    title: "Job Search - Find Your Next Opportunity",
    description:
      "Search for jobs by keywords, location, and job type. Find full-time, part-time, contract, and remote jobs.",
    url: "https://jobsnearmehiringimmediately.com/search",
    siteName: "Jobs Near Me Hiring Immediately",
    images: [
      {
        url: "https://jobsnearmehiringimmediately.com/images/hero-banner.png",
        width: 1200,
        height: 630,
        alt: "Job Search Page",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Job Search - Find Your Next Opportunity",
    description:
      "Search for jobs by keywords, location, and job type. Find full-time, part-time, contract, and remote jobs.",
    images: ["https://jobsnearmehiringimmediately.com/images/hero-banner.png"],
  },
}

interface SearchPageProps {
  searchParams: {
    keywords?: string
    location?: string
    jobType?: string
    page?: string
  }
}

/* ---------------- Server Component ---------------- */
export default async function SearchPage({ searchParams }: SearchPageProps) {
  const keywords = searchParams.keywords || ""
  const location = searchParams.location || ""
  const jobType = searchParams.jobType || "all"
  const page = Number.parseInt(searchParams.page || "1")
  const limit = 10

  /* Pre-fetch first page so hydration is instant */
  const initial = await searchJobs({
    keywords,
    location,
    jobType: jobType === "all" ? undefined : jobType,
    page,
    limit,
  })

  return (
    <Suspense fallback={<Loading />}>
      <ClientSearchPage
        initialJobs={initial.jobs}
        initialTotalCount={initial.totalCount}
        initialCurrentPage={initial.currentPage}
        initialTotalPages={initial.totalPages}
      />
    </Suspense>
  )
}
