"use client"

import { useState, useEffect, useCallback } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { JobListingCard } from "@/components/job-listing-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { searchJobs } from "@/lib/job-api"
import { Breadcrumb } from "@/components/breadcrumb"
import { SchemaMarkup } from "@/components/schema-markup"
import type { JobListing } from "@/lib/job-api"

function SearchPageClient() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [jobs, setJobs] = useState<JobListing[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState(searchParams.get("q") || "")
  const [location, setLocation] = useState(searchParams.get("location") || "")
  const [jobType, setJobType] = useState(searchParams.get("type") || "all")
  const [distance, setDistance] = useState(searchParams.get("distance") || "25")

  const handleSearch = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const fetched = await searchJobs({
        keywords: searchTerm,
        location,
        jobType,
        page: 1,
        limit: 50,
      })
      setJobs(fetched.jobs)

      // Update URL parameters
      const params = new URLSearchParams()
      if (searchTerm) params.set("q", searchTerm)
      if (location) params.set("location", location)
      if (jobType) params.set("type", jobType)
      if (distance) params.set("distance", distance)
      router.push(`/search?${params.toString()}`, { scroll: false })
    } catch (err) {
      console.error("Failed to fetch jobs:", err)
      setError("Failed to load jobs. Please try again later.")
    } finally {
      setLoading(false)
    }
  }, [searchTerm, location, jobType, distance, router])

  useEffect(() => {
    handleSearch()
  }, [handleSearch])

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
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Job Search</h1>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Input
            placeholder="Job title, keywords, or company"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Job keywords"
          />
          <Input
            placeholder="City, state, or zip code"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            aria-label="Job location"
          />
          <Select value={jobType} onValueChange={setJobType} aria-label="Job type">
            <SelectTrigger>
              <SelectValue placeholder="Job Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="full-time">Full-Time</SelectItem>
              <SelectItem value="part-time">Part-Time</SelectItem>
              <SelectItem value="contract">Contract</SelectItem>
              <SelectItem value="temporary">Temporary</SelectItem>
              <SelectItem value="internship">Internship</SelectItem>
            </SelectContent>
          </Select>
          <Select value={distance} onValueChange={setDistance} aria-label="Search distance">
            <SelectTrigger>
              <SelectValue placeholder="Distance" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5 miles</SelectItem>
              <SelectItem value="10">10 miles</SelectItem>
              <SelectItem value="25">25 miles</SelectItem>
              <SelectItem value="50">50 miles</SelectItem>
              <SelectItem value="100">100 miles</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={handleSearch} className="lg:col-span-4">
            Search Jobs
          </Button>
        </div>

        {loading && <p className="text-center text-gray-600">Loading jobs...</p>}
        {error && <p className="text-center text-red-600">{error}</p>}
        {!loading && !error && jobs.length === 0 && (
          <p className="text-center text-gray-600">No jobs found matching your criteria.</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobListingCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </>
  )
}

export { SearchPageClient } // named export for <Suspense>
export default SearchPageClient // keep default export just in case
