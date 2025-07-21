"use client"

import { useState, useEffect, useCallback } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { JobListingCard } from "@/components/job-listing-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { searchJobs, type JobListing } from "@/lib/job-api"
import { Breadcrumb } from "@/components/breadcrumb"
import { SchemaMarkup } from "@/components/schema-markup"

export interface SearchPageClientProps {
  initialJobs: JobListing[]
  initialTotalCount: number
  initialCurrentPage: number
  initialTotalPages: number
}

function SearchPageClient({
  initialJobs,
  initialTotalCount,
  initialCurrentPage,
  initialTotalPages,
}: SearchPageClientProps) {
  const router = useRouter()
  const urlParams = useSearchParams()

  /* ---------- UI state ---------- */
  const [jobs, setJobs] = useState<JobListing[]>(initialJobs)
  const [totalCount, setTotalCount] = useState(initialTotalCount)
  const [currentPage, setCurrentPage] = useState(initialCurrentPage)
  const [totalPages, setTotalPages] = useState(initialTotalPages)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [keywords, setKeywords] = useState(urlParams.get("keywords") || "")
  const [location, setLocation] = useState(urlParams.get("location") || "")
  const [jobType, setJobType] = useState(urlParams.get("jobType") || "all")

  /* ---------- search handler ---------- */
  const runSearch = useCallback(
    async (page = 1) => {
      setLoading(true)
      setError(null)
      try {
        const res = await searchJobs({
          keywords,
          location,
          jobType: jobType === "all" ? undefined : jobType,
          page,
          limit: 10,
        })
        setJobs(res.jobs)
        setTotalCount(res.totalCount)
        setCurrentPage(res.currentPage)
        setTotalPages(res.totalPages)

        /* Update URL (CSR only) */
        const p = new URLSearchParams()
        if (keywords) p.set("keywords", keywords)
        if (location) p.set("location", location)
        if (jobType) p.set("jobType", jobType)
        p.set("page", String(page))
        router.push(`/search?${p.toString()}`, { scroll: false })
      } catch (e) {
        setError("Failed to load jobs. Please try again later.")
        console.error(e)
      } finally {
        setLoading(false)
      }
    },
    [keywords, location, jobType, router],
  )

  /* ---------- run once on mount if URL params differ ---------- */
  useEffect(() => {
    if (urlParams.size > 0 && initialCurrentPage === 1) {
      runSearch(Number(urlParams.get("page") || 1))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /* ---------- schema ---------- */
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://jobsnearmehiringimmediately.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Job Search",
        item: "https://jobsnearmehiringimmediately.com/search",
      },
    ],
  }

  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Job Search", href: "/search" },
          ]}
        />

        {/* --- Search form --- */}
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <Input placeholder="Keywords" value={keywords} onChange={(e) => setKeywords(e.target.value)} />
          <Input placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
          <Select value={jobType} onValueChange={setJobType}>
            <SelectTrigger>
              <SelectValue placeholder="Job type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="full-time">Full-time</SelectItem>
              <SelectItem value="part-time">Part-time</SelectItem>
              <SelectItem value="contract">Contract</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={() => runSearch(1)} className="md:col-span-3 w-full" disabled={loading}>
            {loading ? "Searching…" : "Search"}
          </Button>
        </div>

        {/* --- Results --- */}
        {error && <p className="text-red-600">{error}</p>}
        {!error && (
          <>
            <p className="font-semibold mb-4">
              Showing {jobs.length} of {totalCount} jobs
            </p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {jobs.map((job) => (
                <JobListingCard key={job.id} job={job} />
              ))}
            </div>
            {/* --- simple pager --- */}
            {totalPages > 1 && (
              <div className="flex gap-2 mt-8">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                  <Button
                    key={n}
                    size="sm"
                    variant={n === currentPage ? "default" : "outline"}
                    onClick={() => runSearch(n)}
                  >
                    {n}
                  </Button>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </>
  )
}

export { SearchPageClient }
export default SearchPageClient
