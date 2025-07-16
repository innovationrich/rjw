import { BlogGrid } from "@/components/blog-grid"
import { BlogSidebar } from "@/components/blog-sidebar"
import { AdBanner } from "@/components/ad-banner"

export const metadata = {
  title: "Entry-Level Jobs - No Experience Required",
  description:
    "Find entry-level jobs that don't require experience. From retail and food service to healthcare and warehouses, discover where to apply and get hired fast.",
}

export default function EntryLevelJobsPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gradient-to-r from-green-50 to-emerald-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Entry-Level Jobs</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Find jobs that don't require experience. Perfect for teens, career changers, and anyone looking to start
            their professional journey.
          </p>
        </div>
      </div>

      <AdBanner type="header" className="mx-4 my-6" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Top Industries Hiring Entry-Level Workers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Retail & Customer Service</h3>
                  <ul className="text-blue-700 space-y-1 text-sm">
                    <li>• Sales associates</li>
                    <li>• Cashiers</li>
                    <li>• Stock clerks</li>
                    <li>• Customer service reps</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-orange-900 mb-2">Food Service</h3>
                  <ul className="text-orange-700 space-y-1 text-sm">
                    <li>• Fast food crew members</li>
                    <li>• Baristas</li>
                    <li>• Restaurant servers</li>
                    <li>• Kitchen assistants</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Healthcare Support</h3>
                  <ul className="text-green-700 space-y-1 text-sm">
                    <li>• Patient transport</li>
                    <li>• Dietary aides</li>
                    <li>• Medical records clerks</li>
                    <li>• Childcare assistants</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">Warehouse & Distribution</h3>
                  <ul className="text-purple-700 space-y-1 text-sm">
                    <li>• Package handlers</li>
                    <li>• Warehouse associates</li>
                    <li>• Order pickers</li>
                    <li>• Inventory clerks</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-semibold text-yellow-900 mb-3">💡 Quick Application Tips</h3>
                <ul className="text-yellow-800 space-y-2 text-sm">
                  <li>• Apply online and in-person for better chances</li>
                  <li>• Highlight transferable skills from school or volunteer work</li>
                  <li>• Show enthusiasm and willingness to learn</li>
                  <li>• Follow up within a week of applying</li>
                </ul>
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
