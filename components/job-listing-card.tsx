// This file is no longer needed for the /search page, as its functionality is now
// integrated directly into app/search/page.tsx.
// You can safely delete this file.

import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { JobListing } from "@/lib/job-api" // Ensure this import path is correct

interface JobListingCardProps {
  job: JobListing
}

export function JobListingCard({ job }: JobListingCardProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{job.title}</CardTitle>
        <CardDescription className="flex items-center justify-between">
          <span>
            {job.company} - {job.location}
          </span>
          {job.salary && <Badge variant="secondary">{job.salary}</Badge>}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 line-clamp-3">{job.description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Badge variant="outline">{job.jobType}</Badge>
          <Badge variant="outline">Posted: {job.postedDate}</Badge>
          {job.source && <Badge variant="outline">Source: {job.source}</Badge>}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        {job.applyUrl ? (
          <Button asChild>
            <Link href={job.applyUrl} target="_blank" rel="noopener noreferrer">
              Apply Now
            </Link>
          </Button>
        ) : (
          <Button disabled>Apply Now</Button>
        )}
      </CardFooter>
    </Card>
  )
}
