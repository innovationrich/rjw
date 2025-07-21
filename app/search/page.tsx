/* SERVER-ONLY SEARCH PAGE – 100 % free of client hooks */

import type { Metadata } from "next"
import Link from "next/link"
import { searchJobs, type JobListing } from "@/lib/job-api"

/* ––––– <head> metadata ––––– */
export const metadata: Metadata = {
  title: "Job Search – Find Your Next Opportunity",
  description:
    "Search for jobs by keywords, location, and job type. Discover full-time, part-time, contract, and remote roles hiring now.",
  openGraph: {
    title: "Job Search – Find Your Next Opportunity",
    description:
      "Search for jobs by keywords, location, and job type. Discover full-time, part-time, contract, and remote roles hiring now.",
    url: "https://jobsnearmehiringimmediately.com/search",
    siteName: "Jobs Near Me Hiring Immediately",
    images: [
      {
        url: "https://jobsnearmehiringimmediately.com/images/hero-banner.png",
        width: 1200,
        height: 630,
        alt: "Job search hero image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Job Search – Find Your Next Opportunity",
    description:
      "Search for jobs by keywords, location, and job type. Discover full-time, part-time, contract, and remote roles hiring now.",
    images: ["https://jobsnearmehiringimmediately.com/images/hero-banner.png"],
  },
}

/* ––––– Page component ––––– */
interface PageProps {
  searchParams: {
    keywords?: string
    location?: string
    jobType?: string
    page?: string
  }
}

export default async function SearchPage({ searchParams }: PageProps) {
  /* read URL params */
  const keywords = searchParams.keywords ?? ""
  const location = searchParams.location ?? ""
  const jobTypeParam = searchParams.jobType ?? "all"
  const page = Number.parseInt(searchParams.page ?? "1", 10) || 1
  const limit = 10

  /* server fetch */
  const { jobs, totalCount, currentPage, totalPages } = await searchJobs({
    keywords,
    location,
    jobType: jobTypeParam === "all" ? undefined : jobTypeParam,
    page,
    limit,
  })

  /* helper */
  const buildQS = (extra: Record<string, string>) =>
    new URLSearchParams({
      ...(keywords && { keywords }),
      ...(location && { location }),
      ...(jobTypeParam !== "all" && { jobType: jobTypeParam }),
      ...extra,
    }).toString()

  /* render */
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-white border-b py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Job Search</h1>
          <form method="get" action="/search" className="grid gap-4 md:grid-cols-[repeat(4,1fr)_auto]">
            <input
              name="keywords"
              defaultValue={keywords}
              placeholder="Keywords"
              className="px-4 py-2 border rounded-md"
            />
            <input
              name="location"
              defaultValue={location}
              placeholder="Location"
              className="px-4 py-2 border rounded-md"
            />
            <select name="jobType" defaultValue={jobTypeParam} className="px-4 py-2 border rounded-md">
              <option value="all">All Types</option>
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="contract">Contract</option>
            </select>
            <input type="hidden" name="page" value="1" />
            <button className="px-6 py-2 bg-blue-600 text-white rounded-md">Search</button>
          </form>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-10 space-y-6">
        <p className="text-gray-600">
          {totalCount > 0
            ? `Showing ${(currentPage - 1) * limit + 1}-${Math.min(currentPage * limit, totalCount)} of ${totalCount} jobs`
            : "No jobs found"}
        </p>

        {jobs.length === 0 && <div className="text-center text-gray-500">Try broadening your search terms.</div>}

        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}

        {totalPages > 1 && (
          <nav className="flex justify-center gap-2 pt-8">
            {currentPage > 1 && (
              <Link href={`/search?${buildQS({ page: String(currentPage - 1) })}`} className="px-3 py-2 border rounded">
                ‹ Prev
              </Link>
            )}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <Link
                key={p}
                href={`/search?${buildQS({ page: String(p) })}`}
                className={`px-3 py-2 border rounded ${p === currentPage ? "bg-blue-600 text-white" : ""}`}
              >
                {p}
              </Link>
            ))}
            {currentPage < totalPages && (
              <Link href={`/search?${buildQS({ page: String(currentPage + 1) })}`} className="px-3 py-2 border rounded">
                Next ›
              </Link>
            )}
          </nav>
        )}
      </section>
    </main>
  )
}

/* simple server-rendered card */
function JobCard({ job }: { job: JobListing }) {
  return (
    <article className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition">
      <header className="mb-3">
        <h2 className="text-xl font-semibold">{job.title}</h2>
        <p className="text-gray-700">{job.company}</p>
        <p className="text-gray-600">{job.location}</p>
      </header>
      <p className="text-gray-700 line-clamp-3 mb-4">{job.description}</p>
      <Link href={job.url ?? "#"} className="inline-block px-4 py-2 bg-blue-600 text-white rounded">
        Apply
      </Link>
    </article>
  )
}
