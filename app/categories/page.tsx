import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, DollarSign, Clock, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "Side Hustle Categories | SideHustles FromHome.com",
  description:
    "Explore proven side hustle categories to start earning money from home. Find freelancing, online business, passive income, and local opportunities.",
  keywords: "side hustle categories, work from home, online income, freelancing, passive income",
  openGraph: {
    title: "Side Hustle Categories | SideHustles FromHome.com",
    description: "Explore proven side hustle categories to start earning money from home.",
    type: "website",
  },
}

const categories = [
  {
    title: "Online Side Hustles",
    slug: "online-side-hustles",
    description: "Digital opportunities you can start today from anywhere with an internet connection.",
    icon: "💻",
    posts: 15,
    avgIncome: "$500-2000/month",
    difficulty: "Beginner",
    timeToStart: "1-7 days",
  },
  {
    title: "Freelancing",
    slug: "freelancing",
    description: "Sell your skills and expertise to clients worldwide through freelance platforms.",
    icon: "🎯",
    posts: 12,
    avgIncome: "$1000-5000/month",
    difficulty: "Intermediate",
    timeToStart: "1-14 days",
  },
  {
    title: "Passive Income",
    slug: "passive-income",
    description: "Build income streams that generate money with minimal ongoing effort.",
    icon: "💰",
    posts: 10,
    avgIncome: "$100-1000/month",
    difficulty: "Advanced",
    timeToStart: "30-90 days",
  },
  {
    title: "Digital Products",
    slug: "digital-products",
    description: "Create and sell digital products like courses, templates, and software.",
    icon: "📱",
    posts: 8,
    avgIncome: "$200-3000/month",
    difficulty: "Intermediate",
    timeToStart: "14-30 days",
  },
  {
    title: "E-commerce",
    slug: "ecommerce",
    description: "Start an online store and sell physical or digital products.",
    icon: "🛒",
    posts: 11,
    avgIncome: "$500-10000/month",
    difficulty: "Advanced",
    timeToStart: "7-30 days",
  },
  {
    title: "Content Creation",
    slug: "content-creation",
    description: "Monetize your creativity through blogging, YouTube, podcasting, and social media.",
    icon: "🎨",
    posts: 9,
    avgIncome: "$100-5000/month",
    difficulty: "Beginner",
    timeToStart: "1-7 days",
  },
  {
    title: "Gig Economy",
    slug: "gig-economy",
    description: "Flexible work opportunities through apps and platforms.",
    icon: "🚗",
    posts: 13,
    avgIncome: "$300-1500/month",
    difficulty: "Beginner",
    timeToStart: "1-3 days",
  },
  {
    title: "Local Job Search",
    slug: "local-job-search",
    description: "Find part-time and flexible work opportunities in your local area.",
    icon: "📍",
    posts: 7,
    avgIncome: "$400-2000/month",
    difficulty: "Beginner",
    timeToStart: "1-14 days",
  },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Side Hustle Categories",
  description: "Explore proven side hustle categories to start earning money from home.",
  url: "https://sidehustlesfromhome.com/categories",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: categories.map((category, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Article",
        name: category.title,
        description: category.description,
        url: `https://sidehustlesfromhome.com/categories/${category.slug}`,
      },
    })),
  },
}

export default function CategoriesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Side Hustle Categories</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover proven ways to earn extra income from home. Each category contains detailed guides, real income
              examples, and step-by-step tutorials to help you start your side hustle journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <DollarSign className="w-4 h-4" />
                <span>Real Income Data</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>Time to Start</span>
              </div>
              <div className="flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                <span>Difficulty Level</span>
              </div>
            </div>
          </div>

          {/* Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {categories.map((category) => (
              <Card key={category.slug} className="hover:shadow-lg transition-shadow duration-300 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-3xl">{category.icon}</span>
                    <Badge variant="secondary">{category.posts} guides</Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    {category.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Avg. Income:</span>
                      <span className="font-semibold text-green-600">{category.avgIncome}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Difficulty:</span>
                      <span className="font-medium">{category.difficulty}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Time to Start:</span>
                      <span className="font-medium">{category.timeToStart}</span>
                    </div>
                  </div>
                  <Link
                    href={`/categories/${category.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium group-hover:underline"
                  >
                    Explore {category.title}
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">How much can I realistically earn?</h3>
                <p className="text-gray-600 text-sm">
                  Earnings vary by category and effort. Beginners typically earn $100-500/month, while experienced side
                  hustlers can earn $1000-5000+ monthly.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Which category is best for beginners?</h3>
                <p className="text-gray-600 text-sm">
                  Online side hustles and gig economy work are ideal for beginners due to low barriers to entry and
                  quick start times.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Do I need special skills or equipment?</h3>
                <p className="text-gray-600 text-sm">
                  Most categories only require a computer and internet connection. Specific skills can be learned
                  through our detailed guides.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">How long before I see results?</h3>
                <p className="text-gray-600 text-sm">
                  Some opportunities like gig work pay immediately, while passive income streams may take 30-90 days to
                  generate meaningful revenue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
