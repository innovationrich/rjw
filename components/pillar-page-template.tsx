import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, DollarSign, Clock, Users, TrendingUp } from "lucide-react"

interface PillarPageProps {
  category: {
    title: string
    slug: string
    description: string
    icon: string
    avgIncome: string
    difficulty: string
    timeToStart: string
    totalOpportunities: number
  }
  relatedPosts: Array<{
    title: string
    slug: string
    excerpt: string
    readTime: string
  }>
  faqs: Array<{
    question: string
    answer: string
  }>
}

export function PillarPageTemplate({ category, relatedPosts, faqs }: PillarPageProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${category.title} Side Hustles: Complete Guide to Earning Money From Home`,
    description: category.description,
    author: {
      "@type": "Organization",
      name: "SideHustles FromHome.com",
    },
    publisher: {
      "@type": "Organization",
      name: "SideHustles FromHome.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://sidehustlesfromhome.com/categories/${category.slug}`,
    },
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">{category.icon}</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {category.title} Side Hustles: Complete Guide
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {category.description} Discover proven strategies, real income examples, and step-by-step tutorials.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <DollarSign className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">{category.avgIncome}</div>
                <div className="text-sm text-gray-500">Avg. Income</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <Clock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">{category.timeToStart}</div>
                <div className="text-sm text-gray-500">Time to Start</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <TrendingUp className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">{category.difficulty}</div>
                <div className="text-sm text-gray-500">Difficulty</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <Users className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">{category.totalOpportunities}+</div>
                <div className="text-sm text-gray-500">Opportunities</div>
              </div>
            </div>

            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Get Started Today
            </Button>
          </div>

          {/* Table of Contents */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>What You'll Learn</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Best {category.title.toLowerCase()} opportunities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Step-by-step getting started guide</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Real income examples and case studies</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Common mistakes to avoid</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Tools and resources you'll need</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Scaling strategies for higher income</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Related Posts */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{category.title} Opportunities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((post) => (
                <Card key={post.slug} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{post.title}</CardTitle>
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <Badge variant="outline">{post.readTime}</Badge>
                      <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:text-blue-800 font-medium">
                        Read More →
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
