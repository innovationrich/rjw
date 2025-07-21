"use client"

import { useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { searchJobs, type JobListing } from "@/lib/job-api"
import { JobListingCard } from "@/components/job-listing-card"
import { JobSearchBar } from "@/components/job-search-bar"

export interface SearchPageClientProps {
  initialJobs: JobListing[]
  initialTotalCount: number
  initialCurrentPage: number
  initialTotalPages: number
}

export function SearchPageClient({
  initialJobs,
  initialTotalCount,
  initialCurrentPage,
  initialTotalPages,
}: SearchPageClientProps) {
  const searchParams = useSearchParams()
  const router = useRouter()

  const [jobs, setJobs] = useState<JobListing[]>(initialJobs)
  const [totalCount, setTotalCount] = useState(initialTotalCount)
  const [currentPage, setCurrentPage] = useState(initialCurrentPage)
  const [totalPages, setTotalPages] = useState(initialTotalPages)
  const [isLoading, setIsLoading] = useState(false)

  const keywords = searchParams.get("keywords") || ""
  const location = searchParams.get("location") || ""
  const jobType = searchParams.get("jobType") || "all"

  const handleSearch = async (searchData: {
    keywords: string
    location: string
    jobType: string
  }) => {
    setIsLoading(true)

    const params = new URLSearchParams()
    if (searchData.keywords) params.set("keywords", searchData.keywords)
    if (searchData.location) params.set("location", searchData.location)
    if (searchData.jobType && searchData.jobType !== "all") params.set("jobType", searchData.jobType)
    params.set("page", "1")

    router.push(`/search?${params.toString()}`)

    try {
      const response = await searchJobs({
        keywords: searchData.keywords,
        location: searchData.location,
        jobType: searchData.jobType === "all" ? undefined : searchData.jobType,
        page: 1,
        limit: 10,
      })

      setJobs(response.jobs)
      setTotalCount(response.totalCount)
      setCurrentPage(response.currentPage)
      setTotalPages(response.totalPages)
    } catch (error) {
      console.error("Search failed:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handlePageChange = async (page: number) => {
    setIsLoading(true)

    const params = new URLSearchParams(searchParams.toString())
    params.set("page", page.toString())
    router.push(`/search?${params.toString()}`)

    try {
      const response = await searchJobs({
        keywords,
        location,
        jobType: jobType === "all" ? undefined : jobType,
        page,
        limit: 10,
      })

      setJobs(response.jobs)
      setTotalCount(response.totalCount)
      setCurrentPage(response.currentPage)
      setTotalPages(response.totalPages)
    } catch (error) {
      console.error("Page change failed:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Job Search</h1>
          <JobSearchBar
            onSearch={handleSearch}
            initialKeywords={keywords}
            initialLocation={location}
            initialJobType={jobType}
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {isLoading ? (
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow animate-pulse">
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="mb-6">
              <p className="text-gray-600">
                {totalCount > 0 ? (
                  <>
                    Showing {(currentPage - 1) * 10 + 1}-{Math.min(currentPage * 10, totalCount)} of {totalCount} jobs
                    {keywords && <span> for "{keywords}"</span>}
                    {location && <span> in {location}</span>}
                  </>
                ) : (
                  "No jobs found"
                )}
              </p>
            </div>

            {jobs.length > 0 ? (
              <div className="space-y-4">
                {jobs.map((job) => (
                  <JobListingCard key={job.id} job={job} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-500 text-lg mb-4">No jobs found</div>
                <p className="text-gray-400">Try adjusting your search criteria or browse our job categories.</p>
              </div>
            )}

            {totalPages > 1 && (
              <div className="mt-8 flex justify-center">
                <nav className="flex items-center space-x-2">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage <= 1}
                    className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>

                  {[...Array(Math.min(5, totalPages))].map((_, i) => {
                    const pageNum = i + 1
                    return (
                      <button
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        className={`px-3 py-2 text-sm font-medium rounded-md ${
                          currentPage === pageNum
                            ? "bg-blue-600 text-white"
                            : "text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        {pageNum}
                      </button>
                    )
                  })}

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage >= totalPages}
                    className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </nav>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default SearchPageClient
