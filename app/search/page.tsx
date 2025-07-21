import type { Metadata } from "next"
import { searchJobs } from "@/lib/job-api"

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
  const limit = 10

  const initial = await searchJobs({
    keywords,
    location,
    jobType: jobType === "all" ? undefined : jobType,
    page,
    limit,
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Job Search</h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Keywords"
              defaultValue={keywords}
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="Location"
              defaultValue={location}
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <select
              defaultValue={jobType}
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Job Types</option>
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="contract">Contract</option>
            </select>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-6">
          <p className="text-gray-600">
            {initial.totalCount > 0 ? (
              <>
                Showing {(initial.currentPage - 1) * 10 + 1}-{Math.min(initial.currentPage * 10, initial.totalCount)} of{" "}
                {initial.totalCount} jobs
                {keywords && <span> for "{keywords}"</span>}
                {location && <span> in {location}</span>}
              </>
            ) : (
              "No jobs found"
            )}
          </p>
        </div>

        {initial.jobs.length > 0 ? (
          <div className="space-y-4">
            {initial.jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                    <p className="text-lg text-gray-700 mb-1">{job.company}</p>
                    <p className="text-gray-600 mb-2">{job.location}</p>
                    {job.salary && <p className="text-green-600 font-medium">{job.salary}</p>}
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-2">
                      {job.jobType}
                    </span>
                    <p className="text-sm text-gray-500">{job.postedDate}</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-4 line-clamp-3">{job.description}</p>

                {job.requirements && job.requirements.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Requirements:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      {job.requirements.slice(0, 3).map((req, index) => (
                        <li key={index} className="text-sm">
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex justify-between items-center">
                  <div className="flex flex-wrap gap-2">
                    {job.benefits &&
                      job.benefits.slice(0, 3).map((benefit, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {benefit}
                        </span>
                      ))}
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg mb-4">No jobs found</div>
            <p className="text-gray-400">Try adjusting your search criteria or browse our job categories.</p>
          </div>
        )}

        {initial.totalPages > 1 && (
          <div className="mt-8 flex justify-center">
            <nav className="flex items-center space-x-2">
              {initial.currentPage > 1 && (
                <a
                  href={`/search?${new URLSearchParams({ ...searchParams, page: String(initial.currentPage - 1) }).toString()}`}
                  className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  Previous
                </a>
              )}

              {[...Array(Math.min(5, initial.totalPages))].map((_, i) => {
                const pageNum = i + 1
                return (
                  <a
                    key={pageNum}
                    href={`/search?${new URLSearchParams({ ...searchParams, page: String(pageNum) }).toString()}`}
                    className={`px-3 py-2 text-sm font-medium rounded-md ${
                      initial.currentPage === pageNum
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {pageNum}
                  </a>
                )
              })}

              {initial.currentPage < initial.totalPages && (
                <a
                  href={`/search?${new URLSearchParams({ ...searchParams, page: String(initial.currentPage + 1) }).toString()}`}
                  className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  Next
                </a>
              )}
            </nav>
          </div>
        )}
      </div>
    </div>
  )
}
