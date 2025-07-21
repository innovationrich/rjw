import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SchemaMarkup } from "@/components/schema-markup"
import { Breadcrumb } from "@/components/breadcrumb"

export const metadata = {
  title: "Job Search Blog - Tips, Guides, and Advice",
  description:
    "Explore our blog for expert tips, comprehensive guides, and valuable advice on job searching, interviews, career development, and more.",
  keywords: ["job search blog", "career advice", "interview tips", "resume help", "employment guide"],
  openGraph: {
    title: "Job Search Blog - Tips, Guides, and Advice",
    description:
      "Explore our blog for expert tips, comprehensive guides, and valuable advice on job searching, interviews, career development, and more.",
    url: "https://jobsnearmehiringimmediately.com/blog",
    siteName: "Jobs Near Me Hiring Immediately",
    images: [
      {
        url: "https://jobsnearmehiringimmediately.com/public/new-job-nervous.png",
        width: 1200,
        height: 630,
        alt: "Person looking at job listings on a laptop",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Job Search Blog - Tips, Guides, and Advice",
    description:
      "Explore our blog for expert tips, comprehensive guides, and valuable advice on job searching, interviews, career development, and more.",
    images: ["https://jobsnearmehiringimmediately.com/public/new-job-nervous.png"],
  },
}

export default function BlogPage() {
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

  const blogPageSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Job Search Blog - Tips, Guides, and Advice",
    description:
      "Explore our blog for expert tips, comprehensive guides, and valuable advice on job searching, interviews, career development, and more.",
    url: "https://jobsnearmehiringimmediately.com/blog",
    publisher: {
      "@type": "Organization",
      name: "Jobs Near Me Hiring Immediately",
      logo: {
        "@type": "ImageObject",
        url: "https://jobsnearmehiringimmediately.com/public/jobs-near-me-immediately-logo.png",
      },
    },
    blogPosts: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      image: `https://jobsnearmehiringimmediately.com${post.image}`,
      url: `https://jobsnearmehiringimmediately.com${post.link}`,
      description: post.description,
    })),
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <SchemaMarkup schema={blogPageSchema} />
      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
        ]}
      />

      <h1 className="text-4xl font-bold text-center mb-8">Our Job Search Blog</h1>
      <p className="text-lg text-gray-700 text-center mb-12 max-w-2xl mx-auto">
        Dive into our articles for expert tips, comprehensive guides, and valuable advice to help you navigate your job
        search, ace interviews, and advance your career.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.id} className="flex flex-col overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-t-lg"
                priority
              />
            </div>
            <CardHeader className="flex-grow">
              <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
              <CardDescription className="line-clamp-3">{post.description}</CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <Button asChild variant="link" className="p-0 h-auto">
                <Link href={post.link}>Read More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
