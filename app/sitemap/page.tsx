import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const sitemapData = {
  "Main Pages": [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: "Categories", url: "/categories" },
    { name: "About", url: "/about" },
    { name: "Contact", url: "/contact" },
  ],
  Categories: [
    { name: "Online Side Hustles", url: "/categories/online-side-hustles" },
    { name: "Passive Income", url: "/categories/passive-income" },
    { name: "Freelancing", url: "/categories/freelancing" },
    { name: "E-commerce", url: "/categories/ecommerce" },
    { name: "Content Creation", url: "/categories/content-creation" },
    { name: "Investing", url: "/categories/investing" },
  ],
  "Popular Articles": [
    { name: "10 Profitable Side Hustles You Can Start This Weekend", url: "/blog/1" },
    { name: "How I Built a $5,000/Month Passive Income Stream", url: "/blog/2" },
    { name: "The Complete Guide to Freelancing Success in 2024", url: "/blog/3" },
    { name: "Digital Products That Actually Sell: 7 Proven Ideas", url: "/blog/4" },
  ],
  "Legal Pages": [
    { name: "Privacy Policy", url: "/privacy-policy" },
    { name: "Terms of Service", url: "/terms-of-service" },
    { name: "Affiliate Disclosure", url: "/affiliate-disclosure" },
  ],
}

export const metadata = {
  title: "Sitemap - Side Hustle Success",
  description: "Complete sitemap of all pages and articles on Side Hustle Success blog.",
}

export default function SitemapPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gradient-to-r from-orange-50 to-orange-100 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Sitemap</h1>
          <p className="text-xl text-gray-600">Find all pages and articles on Side Hustle Success</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(sitemapData).map(([section, links]) => (
            <Card key={section}>
              <CardHeader>
                <CardTitle className="text-xl text-orange-600">{section}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.url}>
                      <Link
                        href={link.url}
                        className="text-gray-700 hover:text-orange-600 transition-colors flex items-center"
                      >
                        <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Looking for something specific?</h2>
              <p className="text-gray-600 mb-6">
                Can't find what you're looking for? Use our search feature or contact us directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/blog"
                  className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
                >
                  Browse All Articles
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border border-orange-600 text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
