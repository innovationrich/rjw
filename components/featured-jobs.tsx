import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Briefcase, DollarSign } from "lucide-react"

export function FeaturedJobs() {
  const featuredJobs = [
    {
      id: 1,
      title: "Warehouse Associate",
      company: "Amazon Fulfillment",
      location: "Houston, TX",
      type: "Full-time",
      salary: "$15 - $18/hr",
      description: "Join our team to help with order fulfillment and inventory management.",
      link: "/warehouse-jobs",
    },
    {
      id: 2,
      title: "Customer Service Rep",
      company: "Global Support Inc.",
      location: "Remote",
      type: "Part-time",
      salary: "$14 - $16/hr",
      description: "Provide excellent customer support via phone and chat from home.",
      link: "/remote-jobs",
    },
    {
      id: 3,
      title: "Retail Sales Associate",
      company: "Target",
      location: "Chicago, IL",
      type: "Part-time",
      salary: "$13 - $15/hr",
      description: "Assist customers, process sales, and maintain store appearance.",
      link: "/retail-jobs",
    },
    {
      id: 4,
      title: "Construction Laborer",
      company: "BuildRight Contractors",
      location: "Atlanta, GA",
      type: "Full-time",
      salary: "$18 - $22/hr",
      description: "Entry-level position assisting skilled trades on various construction sites.",
      link: "/construction-jobs",
    },
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Jobs Hiring Immediately</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredJobs.map((job) => (
            <Card key={job.id} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl">{job.title}</CardTitle>
                <CardDescription className="text-gray-600">{job.company}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-2">
                <div className="flex items-center text-sm text-gray-700">
                  <MapPin className="mr-2 h-4 w-4" /> {job.location}
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <Briefcase className="mr-2 h-4 w-4" /> {job.type}
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <DollarSign className="mr-2 h-4 w-4" /> {job.salary}
                </div>
                <p className="text-sm text-gray-800 mt-2 line-clamp-2">{job.description}</p>
              </CardContent>
              <div className="p-4 pt-0">
                <Button asChild className="w-full">
                  <Link href={job.link}>View Job</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild variant="outline">
            <Link href="/search">View All Jobs</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
