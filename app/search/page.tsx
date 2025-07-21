import { Suspense } from "react"
import type { Metadata } from "next"
import { searchJobs } from "@/lib/job-api"
import { SearchPageClient } from "./SearchPageClient"
import Loading from "./loading"

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

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const keywords = searchParams.keywords || ""
  const location = searchParams.location || ""
  const jobType = searchParams.jobType || "all"
  const page = Number.parseInt(searchParams.page || "1")
  const limit = 10 // Consistent with client-side limit

  const initialResponse = await searchJobs({
    keywords,
    location,
    jobType: jobType === "all" ? undefined : jobType,
    page,
    limit,
  })

  return (
    <Suspense fallback={<Loading />}>
      <SearchPageClient
        initialJobs={initialResponse.jobs}
        initialTotalCount={initialResponse.totalCount}
        initialCurrentPage={initialResponse.currentPage}
        initialTotalPages={initialResponse.totalPages}
      />
    </Suspense>
  )
}
