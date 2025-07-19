import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, Clock, TrendingUp } from "lucide-react"
import { getAllCategories, getPostsByCategory } from "@/lib/blog-data"

export const metadata: Metadata = {
  title: "All Categories - SideHustlesFromHome.com",
  description:
    "Explore various side hustle categories including online, creative, gig economy, and passive income opportunities.",
  keywords: "side hustle categories, work from home, online income, freelancing, passive income",
  openGraph: {
    title: "Side Hustle Categories | SideHustles FromHome.com",
    description: "Explore proven side hustle categories to start earning money from home.",
    type: "website",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Side Hustle Categories",
  description: "Explore proven side hustle categories to start earning money from home.",
  url: "https://sidehustlesfromhome.com/categories",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: getAllCategories().map((category, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Article",
        name: category,
        description:
          "Detailed guides, real income examples, and step-by-step tutorials to help you start your side hustle journey.",
        url: `https://sidehustlesfromhome.com/categories/${category.toLowerCase().replace(/\s+/g, "-")}`,
      },
    })),
  },
}

export default function CategoriesPage() {
  const categories = getAllCategories()

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {categories.map((category) => {
              const postsInThisCategory = getPostsByCategory(category)
              return (
                <Card key={category} className="hover:shadow-lg transition-shadow duration-300 group">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
                      <Link
                        href={`/categories/${category.toLowerCase().replace(/\s+/g, "-")}`}
                        className="hover:underline"
                      >
                        {category}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{postsInThisCategory.length} articles</p>
                    <Link
                      href={`/categories/${category.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-orange-600 hover:underline mt-2 inline-block"
                    >
                      View all in {category} &rarr;
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
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
