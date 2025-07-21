import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function BlogPreview() {
  const blogPosts = [
    {
      id: 1,
      title: "How to Get Hired in 24 Hours: A Step-by-Step Guide",
      description: "Need a job fast? This guide provides actionable steps to help you land a job within 24 hours.",
      image: "/job-application-rush.png",
      link: "/blog/how-to-get-hired-in-24-hours",
    },
    {
      id: 2,
      title: "Jobs with No Experience: Your Guide to Entry-Level Employment",
      description: "Discover a wide range of jobs that don't require prior experience.",
      image: "/confident-new-employee.png",
      link: "/blog/jobs-with-no-experience",
    },
    {
      id: 3,
      title: "Top Warehouse Interview Questions & Answers",
      description: "Prepare for your warehouse job interview with common questions and expert answers.",
      image: "/warehouse-handshake.png",
      link: "/blog/warehouse-interview-questions",
    },
    {
      id: 4,
      title: "Best Job Search Apps: Find Your Next Job On-The-Go",
      description: "Explore the top job search apps to streamline your job hunt directly from your smartphone.",
      image: "/job-search-app.png",
      link: "/blog/best-job-search-apps",
    },
    {
      id: 5,
      title: "No Experience Part-Time Jobs: Your Guide to Flexible Entry-Level Roles",
      description: "Find part-time jobs that don't require prior experience.",
      image: "/retail-worker-smiling.png",
      link: "/blog/no-experience-part-time-jobs",
    },
    {
      id: 6,
      title: "Overnight & Night Shift Jobs: Opportunities and Benefits",
      description: "Explore industries offering overnight and night shift jobs.",
      image: "/night-work.png",
      link: "/blog/overnight-night-shift-jobs",
    },
    {
      id: 7,
      title: "Job Agencies & Temp Jobs: Your Pathway to Employment",
      description: "Discover how job agencies and temporary staffing can help you find work quickly.",
      image: "/quick-job-application.png",
      link: "/blog/job-agencies-temp-jobs",
    },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Latest from Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="flex flex-col">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={400}
                height={225}
                className="w-full h-48 object-cover rounded-t-lg"
                priority
              />
              <CardHeader>
                <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="line-clamp-3">{post.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <Button asChild variant="link" className="p-0 h-auto">
                  <Link href={post.link}>Read More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild variant="outline">
            <Link href="/blog">View All Blog Posts</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
