import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    title: "How to Get Hired in 24 Hours: A Complete Guide",
    excerpt:
      "Learn the proven strategies to land a job quickly, from application to interview to getting hired the same day.",
    date: "2024-01-15",
    href: "/blog/how-to-get-hired-in-24-hours",
    category: "Job Search Tips",
  },
  {
    title: "10 Companies Hiring Near You This Week",
    excerpt:
      "Discover which major employers are actively hiring in your area and how to apply for immediate consideration.",
    date: "2024-01-12",
    href: "/blog/companies-hiring-this-week",
    category: "Job Opportunities",
  },
  {
    title: "Tips for Landing a Job with No Experience",
    excerpt:
      "Entry-level job seekers can still land great positions. Here's how to highlight your potential and get hired.",
    date: "2024-01-10",
    href: "/blog/jobs-with-no-experience",
    category: "Career Advice",
  },
]

export function BlogPreview() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Job Search Tips & Career Advice</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get expert advice on finding jobs quickly, acing interviews, and building your career. Our blog helps you
            navigate the job market successfully.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.title} className="hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <Link href={post.href} className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg" asChild>
            <Link href="/blog">View All Articles</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
