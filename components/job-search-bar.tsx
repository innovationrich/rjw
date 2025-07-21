"use client"

import type React from "react"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SearchIcon } from "lucide-react"

// This file is no longer needed for the /search page, as its functionality is now
// integrated directly into app/search/page.tsx.
// You can safely delete this file.

export function JobSearchBar() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [keywords, setKeywords] = useState(searchParams.get("keywords") || "")
  const [location, setLocation] = useState(searchParams.get("location") || "")
  const [jobType, setJobType] = useState(searchParams.get("jobType") || "all")

  const handleSearch = (e?: React.FormEvent) => {
    e?.preventDefault()
    const params = new URLSearchParams(searchParams.toString())
    if (keywords) {
      params.set("keywords", keywords)
    } else {
      params.delete("keywords")
    }
    if (location) {
      params.set("location", location)
    } else {
      params.delete("location")
    }
    if (jobType && jobType !== "all") {
      params.set("jobType", jobType)
    } else {
      params.delete("jobType")
    }
    params.set("page", "1") // Reset to first page on new search
    router.push(`/search?${params.toString()}`)
  }

  return (
    <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4 p-4 bg-white rounded-lg shadow-md">
      <Input
        type="text"
        placeholder="Keywords (e.g., 'Software Engineer')"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        className="flex-1"
      />
      <Input
        type="text"
        placeholder="Location (e.g., 'New York, NY' or 'Remote')"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="flex-1"
      />
      <Select value={jobType} onValueChange={setJobType}>
        <SelectTrigger className="w-full md:w-[180px]">
          <SelectValue placeholder="Job Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Types</SelectItem>
          <SelectItem value="full-time">Full-time</SelectItem>
          <SelectItem value="part-time">Part-time</SelectItem>
          <SelectItem value="contract">Contract</SelectItem>
          <SelectItem value="temporary">Temporary</SelectItem>
          <SelectItem value="internship">Internship</SelectItem>
        </SelectContent>
      </Select>
      <Button type="submit" className="w-full md:w-auto">
        <SearchIcon className="mr-2 h-4 w-4" /> Search Jobs
      </Button>
    </form>
  )
}
