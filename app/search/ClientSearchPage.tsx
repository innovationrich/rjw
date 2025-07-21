"use client"

import dynamic from "next/dynamic"
import type { JobListing } from "@/lib/job-api"

export interface SearchPageClientProps {
  initialJobs: JobListing[]
  initialTotalCount: number
  initialCurrentPage: number
  initialTotalPages: number
}

const SearchPageClient = dynamic(() => import("./SearchPageClient"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow">
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
})

export default function ClientSearchPage(props: SearchPageClientProps) {
  // This file is no longer needed. Its functionality has been moved to a pure
  // server component (app/search/page.tsx).
  // You can safely delete this file.
  return <SearchPageClient {...props} />
}
