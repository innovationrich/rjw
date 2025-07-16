import { BlogGrid } from "@/components/blog-grid"
import { BlogSidebar } from "@/components/blog-sidebar"
import { AdBanner } from "@/components/ad-banner"

export const metadata = {
  title: "Gig Economy Jobs - Find Flexible Work Near You",
  description:
    "Discover the best gig work opportunities in your city and online. From delivery apps to professional services, find flexible jobs that fit your schedule.",
}

export default function GigEconomyPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gradient-to-r from-blue-50 to-cyan-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Gig Economy Jobs</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Find flexible gig work opportunities near you and online. From delivery apps to professional services,
            discover jobs that fit your schedule and skills.
          </p>
        </div>
      </div>

      <AdBanner type="header" className="mx-4 my-6" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Popular Gig Categories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Delivery & Transportation</h3>
                  <ul className="text-blue-700 space-y-1 text-sm">
                    <li>• DoorDash, Uber Eats delivery</li>
                    <li>• Rideshare driving</li>
                    <li>• Package delivery</li>
                    <li>• Grocery shopping services</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Professional Services</h3>
                  <ul className="text-green-700 space-y-1 text-sm">
                    <li>• Freelance writing & design</li>
                    <li>• Virtual assistant work</li>
                    <li>• Consulting & coaching</li>
                    <li>• Technical services</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-orange-900 mb-2">Home & Local Services</h3>
                  <ul className="text-orange-700 space-y-1 text-sm">
                    <li>• Handyman tasks</li>
                    <li>• Pet sitting & dog walking</li>
                    <li>• House cleaning</li>
                    <li>• Yard work & landscaping</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">Specialized Gigs</h3>
                  <ul className="text-purple-700 space-y-1 text-sm">
                    <li>• Medical & healthcare gigs</li>
                    <li>• Event staffing</li>
                    <li>• Photography & videography</li>
                    <li>• Tutoring & education</li>
                  </ul>
                </div>
              </div>
            </div>
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
