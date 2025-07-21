"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { JobSearchBar } from "@/components/job-search-bar"
import { JobListingCard } from "@/components/job-listing-card"
import { searchJobs, type JobListing, type JobSearchResponse } from "@/lib/job-api"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
} from "@/components/ui/pagination"
import { Skeleton } from "@/components/ui/skeleton"

interface SearchPageClientProps {
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
  const [totalCount, setTotalCount] = useState<number>(initialTotalCount)
  const [currentPage, setCurrentPage] = useState<number>(initialCurrentPage)
  const [totalPages, setTotalPages] = useState<number>(initialTotalPages)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true)
      setError(null)
      try {
        const keywords = searchParams.get("keywords") || ""
        const location = searchParams.get("location") || ""
        const jobType = searchParams.get("jobType") || "all"
        const page = Number.parseInt(searchParams.get("page") || "1")
        const limit = 10 // Define jobs per page

        const response: JobSearchResponse = await searchJobs({
          keywords,
          location,
          jobType: jobType === "all" ? undefined : jobType,
          page,
          limit,
        })

        setJobs(response.jobs)
        setTotalCount(response.totalCount)
        setCurrentPage(response.currentPage)
        setTotalPages(response.totalPages)
      } catch (err) {
        console.error("Failed to fetch jobs:", err)
        setError("Failed to load jobs. Please try again later.")
        setJobs([])
        setTotalCount(0)
        setCurrentPage(1)
        setTotalPages(1)
      } finally {
        setLoading(false)
      }
    }

    fetchJobs()
  }, [searchParams])

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("page", String(page))
    router.push(`/search?${params.toString()}`)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <JobSearchBar />

      {loading ? (
        <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-[200px] w-full rounded-lg" />
          ))}
        </div>
      ) : error ? (
        <div className="text-center text-red-500 mt-8">{error}</div>
      ) : (
        <>
          <div className="mt-8 text-lg font-semibold">
            Showing {jobs.length} of {totalCount} jobs
          </div>
          <div className="grid gap-6 mt-4 md:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job) => (
              <JobListingCard key={job.id} job={job} />
            ))}
          </div>

          {totalPages > 1 && (
            <Pagination className="mt-8">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={() => handlePageChange(currentPage - 1)}
                    aria-disabled={currentPage <= 1}
                    tabIndex={currentPage <= 1 ? -1 : undefined}
                    className={currentPage <= 1 ? "pointer-events-none opacity-50" : undefined}
                  />
                </PaginationItem>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <PaginationItem key={page}>
                    <PaginationLink href="#" isActive={page === currentPage} onClick={() => handlePageChange(page)}>
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={() => handlePageChange(currentPage + 1)}
                    aria-disabled={currentPage >= totalPages}
                    tabIndex={currentPage >= totalPages ? -1 : undefined}
                    className={currentPage >= totalPages ? "pointer-events-none opacity-50" : undefined}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </>
      )}
    </div>
  )
}
