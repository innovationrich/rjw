import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, ArrowRight, User } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { AdBanner } from "@/components/ad-banner"

export const metadata: Metadata = {
  title: "Job Search Tips & Career Advice Blog - Jobs Hiring Near Me Immediately",
  description:
    "Get expert job search tips, career advice, and hiring insights. Learn how to find jobs quickly, ace interviews, and build your career successfully. Our blog provides actionable strategies for immediate hiring.",
  keywords:
    "job search tips, career advice, interview tips, resume help, job hunting, immediate hiring advice, career growth",
  alternates: {
    canonical: "/blog",
  },
}

const blogPosts = [
  {
    title: "No Experience Part-Time Jobs Hiring Immediately Near Me",
    excerpt:
      "Find part-time jobs hiring immediately near you with no experience needed. Discover entry-level opportunities in retail, fast food, warehouse, and more. Start working today!",
    date: "2024-07-20",
    author: "JobsNearMeHiringImmediately.com",
    category: "Entry-Level Jobs",
    href: "/blog/no-experience-part-time-jobs",
    readTime: "7 min read",
  },
  {
    title: "Overnight & Night Shift Jobs Hiring Immediately Near Me",
    excerpt:
      "Prefer working when the world sleeps? Discover a wide range of overnight and night shift jobs hiring immediately in your local area.",
    date: "2024-07-20",
    author: "JobsNearMeHiringImmediately.com",
    category: "Shift Work",
    href: "/blog/overnight-night-shift-jobs",
    readTime: "6 min read",
  },
  {
    title: "Top Job Agencies & Temp Jobs Hiring Immediately Near Me",
    excerpt:
      "Need a job fast? Explore how local job agencies and temporary staffing solutions can connect you with immediate hiring opportunities in your area.",
    date: "2024-07-20",
    author: "JobsNearMeHiringImmediately.com",
    category: "Job Search Tools",
    href: "/blog/job-agencies-temp-jobs",
    readTime: "8 min read",
  },
  {
    title: "How to Get Hired in 24 Hours: A Complete Guide",
    excerpt:
      "Learn the proven strategies to land a job quickly, from application to interview to getting hired the same day. Includes templates and scripts.",
    date: "2024-01-15",
    author: "Sarah Johnson",
    category: "Job Search Tips",
    href: "/blog/how-to-get-hired-in-24-hours",
    readTime: "8 min read",
  },
  {
    title: "10 Companies Hiring Near You This Week",
    excerpt:
      "Discover which major employers are actively hiring in your area and how to apply for immediate consideration. Updated weekly.",
    date: "2024-01-12",
    author: "Mike Chen",
    category: "Job Opportunities",
    href: "/blog/companies-hiring-this-week",
    readTime: "6 min read",
  },
  {
    title: "Tips for Landing a Job with No Experience",
    excerpt:
      "Entry-level job seekers can still land great positions. Here's how to highlight your potential, transferable skills, and get hired without prior experience.",
    date: "2024-01-10",
    author: "Jessica Martinez",
    category: "Career Advice",
    href: "/blog/jobs-with-no-experience",
    readTime: "7 min read",
  },
  {
    title: "Gig Jobs That Start Immediately",
    excerpt:
      "Explore flexible gig work opportunities that you can start today. From delivery driving to freelance tasks, find work that fits your schedule.",
    date: "2024-01-08",
    author: "David Rodriguez",
    category: "Gig Economy",
    href: "/blog/gig-jobs-start-immediately",
    readTime: "5 min read",
  },
  {
    title: "Warehouse Job Interview Questions and Answers",
    excerpt:
      "Prepare for your warehouse job interview with common questions and proven answers. Includes tips for physical assessments and safety discussions.",
    date: "2024-01-05",
    author: "Amanda Thompson",
    category: "Interview Tips",
    href: "/blog/warehouse-interview-questions",
    readTime: "9 min read",
  },
  {
    title: "Best Apps for Finding Jobs Hiring Immediately",
    excerpt:
      "Discover the top mobile apps and websites for finding immediate hiring opportunities. Compare features and find the best platforms for your job search.",
    date: "2024-01-03",
    author: "Robert Kim",
    category: "Job Search Tools",
    href: "/blog/best-job-search-apps",
    readTime: "6 min read",
  },
]

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Job Search Tips & Career Advice</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Get expert advice on finding jobs quickly, acing interviews, and building your career. Our blog helps you
              navigate the job market successfully with actionable tips and insider insights.
            </p>
          </div>
        </div>
      </section>

      <AdBanner slot="blog-top" />

      {/* Blog Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {blogPosts.map((post, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
                          {post.category}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600">
                        <Link href={post.href}>{post.title}</Link>
                      </h2>
                      <p className="text-gray-600 mb-4 text-lg">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            {post.author}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {new Date(post.date).toLocaleDateString()}
                          </div>
                          <span>{post.readTime}</span>
                        </div>
                        <Link
                          href={post.href}
                          className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                        >
                          Read More
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                {/* Categories */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Categories</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/blog/category/job-search-tips" className="text-gray-600 hover:text-blue-600">
                          Job Search Tips
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/category/career-advice" className="text-gray-600 hover:text-blue-600">
                          Career Advice
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/category/interview-tips" className="text-gray-600 hover:text-blue-600">
                          Interview Tips
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/category/job-opportunities" className="text-gray-600 hover:text-blue-600">
                          Job Opportunities
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/category/gig-economy" className="text-gray-600 hover:text-blue-600">
                          Gig Economy
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/category/entry-level-jobs" className="text-gray-600 hover:text-blue-600">
                          Entry-Level Jobs
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/category/shift-work" className="text-gray-600 hover:text-blue-600">
                          Shift Work
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/category/job-search-tools" className="text-gray-600 hover:text-blue-600">
                          Job Search Tools
                        </Link>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <AdBanner slot="blog-sidebar" />

                {/* Popular Posts */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Posts</h3>
                    <ul className="space-y-3">
                      <li>
                        <Link
                          href="/blog/how-to-get-hired-in-24-hours"
                          className="text-gray-600 hover:text-blue-600 text-sm"
                        >
                          How to Get Hired in 24 Hours: A Complete Guide
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/blog/jobs-with-no-experience"
                          className="text-gray-600 hover:text-blue-600 text-sm"
                        >
                          Tips for Landing a Job with No Experience
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/blog/warehouse-interview-questions"
                          className="text-gray-600 hover:text-blue-600 text-sm"
                        >
                          Warehouse Job Interview Questions and Answers
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/blog/no-experience-part-time-jobs"
                          className="text-gray-600 hover:text-blue-600 text-sm"
                        >
                          No Experience Part-Time Jobs Hiring Immediately
                        </Link>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AdBanner slot="blog-bottom" />
    </>
  )
}
