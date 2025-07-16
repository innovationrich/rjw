import { BlogGrid } from "@/components/blog-grid"
import { BlogSidebar } from "@/components/blog-sidebar"
import { AdBanner } from "@/components/ad-banner"

export const metadata = {
  title: "Delivery & Gig App Side Hustles - DoorDash, Uber Eats & More",
  description:
    "Complete guide to delivery side hustles. Learn about DoorDash, Uber Eats, pickup truck gigs, and other vehicle-based earning opportunities.",
}

export default function DeliveryGigAppsPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gradient-to-r from-orange-50 to-orange-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Delivery & Gig App Side Hustles</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Turn your vehicle into a money-making machine. Explore delivery apps, rideshare opportunities, and
            specialized vehicle-based gigs.
          </p>
        </div>
      </div>

      <AdBanner type="header" className="mx-4 my-6" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Popular Delivery Apps</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-red-50 p-6 rounded-lg text-center">
                  <h3 className="text-lg font-semibold text-red-900 mb-2">DoorDash</h3>
                  <p className="text-red-700 text-sm">Food delivery leader with flexible scheduling</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg text-center">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Uber Eats</h3>
                  <p className="text-green-700 text-sm">Global platform with instant payouts</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg text-center">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Instacart</h3>
                  <p className="text-blue-700 text-sm">Grocery delivery with higher earnings</p>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-semibold text-orange-900 mb-3">Pickup Truck Side Hustles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="text-orange-700 space-y-1 text-sm">
                    <li>• Moving services</li>
                    <li>• Furniture delivery</li>
                    <li>• Junk removal</li>
                    <li>• Landscaping materials</li>
                  </ul>
                  <ul className="text-orange-700 space-y-1 text-sm">
                    <li>• Construction supplies</li>
                    <li>• Appliance delivery</li>
                    <li>• Dump runs</li>
                    <li>• Event equipment transport</li>
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
