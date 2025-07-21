import { Skeleton } from "@/components/ui/skeleton"
import { JobSearchBar } from "@/components/job-search-bar"

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <JobSearchBar />
      <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <Skeleton key={i} className="h-[200px] w-full rounded-lg" />
        ))}
      </div>
    </div>
  )
}
