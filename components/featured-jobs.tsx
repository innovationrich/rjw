import { MapPin, Clock, DollarSign } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const featuredJobs = [
  {
    title: "Warehouse Associate",
    company: "Amazon Fulfillment",
    location: "Houston, TX",
    salary: "$18-22/hour",
    type: "Full-time",
    posted: "2 hours ago",
    urgent: true,
    description:
      "Immediate hiring for warehouse associates. No experience required. Benefits include health insurance and 401k.",
  },
  {
    title: "Retail Sales Associate",
    company: "Target",
    location: "Chicago, IL",
    salary: "$15-17/hour",
    type: "Part-time",
    posted: "4 hours ago",
    urgent: true,
    description: "Join our team as a sales associate. Flexible scheduling available. Employee discount and benefits.",
  },
  {
    title: "Fast Food Crew Member",
    company: "McDonald's",
    location: "Atlanta, GA",
    salary: "$14-16/hour",
    type: "Full-time",
    posted: "1 hour ago",
    urgent: true,
    description:
      "Now hiring crew members for all shifts. Free meals and flexible scheduling. Advancement opportunities.",
  },
  {
    title: "Customer Service Representative",
    company: "Call Center Solutions",
    location: "Phoenix, AZ",
    salary: "$16-20/hour",
    type: "Full-time",
    posted: "3 hours ago",
    urgent: false,
    description: "Remote customer service position. Paid training provided. Health benefits and paid time off.",
  },
]

export function FeaturedJobs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Jobs Hiring Immediately</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These employers are actively hiring and looking to fill positions quickly. Apply today for a chance to start
            working this week.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {featuredJobs.map((job, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{job.title}</h3>
                    <p className="text-lg text-blue-600 font-medium">{job.company}</p>
                  </div>
                  {job.urgent && (
                    <Badge variant="destructive" className="ml-2">
                      Urgent Hiring
                    </Badge>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {job.location}
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 mr-1" />
                    {job.salary}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {job.posted}
                  </div>
                  <Badge variant="outline">{job.type}</Badge>
                </div>

                <p className="text-gray-600 mb-4">{job.description}</p>

                <Button className="w-full">Apply Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            View All Jobs
          </Button>
        </div>
      </div>
    </section>
  )
}
