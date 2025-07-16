import { BlogGrid } from "@/components/blog-grid"
import { BlogSidebar } from "@/components/blog-sidebar"
import { AdBanner } from "@/components/ad-banner"

export const metadata = {
  title: "Side Hustle Blog - Latest Articles & Tips",
  description: "Browse our complete collection of side hustle guides, passive income strategies, and freelancing tips.",
}

export default function BlogPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gradient-to-r from-orange-50 to-orange-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Side Hustle Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Discover proven strategies, real success stories, and actionable tips to build your perfect side hustle and
            achieve financial freedom.
          </p>
        </div>
      </div>

      <AdBanner type="header" className="mx-4 my-6" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <BlogGrid />
          </div>
          <div className="lg:col-span-1">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  )
}
