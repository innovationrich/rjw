import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { AdBanner } from "@/components/ad-banner"
import { Search, TrendingUp } from "lucide-react"

const popularPosts = [
  {
    id: 1,
    title: "How to Make $1000 in Your First Month",
    category: "Getting Started",
    readTime: "5 min",
  },
  {
    id: 2,
    title: "Best Side Hustles for Students",
    category: "Student Tips",
    readTime: "7 min",
  },
  {
    id: 3,
    title: "Passive Income Myths Debunked",
    category: "Passive Income",
    readTime: "6 min",
  },
]

const categories = [
  { name: "Online Side Hustles", count: 45 },
  { name: "Passive Income", count: 32 },
  { name: "Freelancing", count: 38 },
  { name: "E-commerce", count: 28 },
  { name: "Content Creation", count: 25 },
  { name: "Investing", count: 22 },
]

export function BlogSidebar() {
  return (
    <div className="space-y-8">
      {/* Search */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="w-5 h-5" />
            Search Articles
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input placeholder="Search for topics..." className="flex-1" />
            <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
              Search
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Ad Banner */}
      <AdBanner type="sidebar" />

      {/* Popular Posts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Popular This Week
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {popularPosts.map((post) => (
              <div key={post.id} className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0">
                <h4 className="font-semibold text-gray-900 mb-2 leading-tight">
                  <Link href={`/blog/${post.id}`} className="hover:text-orange-600 transition-colors">
                    {post.title}
                  </Link>
                </h4>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs">
                    {post.category}
                  </Badge>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle>Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={`/categories/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-orange-50 transition-colors group"
              >
                <span className="text-gray-700 group-hover:text-orange-600">{category.name}</span>
                <Badge variant="secondary" className="text-xs">
                  {category.count}
                </Badge>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Newsletter Signup */}
      <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <CardHeader>
          <CardTitle>Stay Updated</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-orange-100 mb-4">Get weekly side hustle tips and opportunities delivered to your inbox.</p>
          <div className="space-y-2">
            <Input placeholder="Your email address" className="bg-white text-gray-900 border-0" />
            <Button className="w-full bg-white text-orange-600 hover:bg-gray-100">Subscribe Free</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
