import { BlogGrid } from "@/components/blog-grid"
import { BlogSidebar } from "@/components/blog-sidebar"
import { AdBanner } from "@/components/ad-banner"

export const metadata = {
  title: "Healthcare Side Hustles - Nursing & Medical Opportunities",
  description:
    "Discover lucrative side hustles for nurses, doctors, and healthcare professionals. Leverage your medical expertise for extra income.",
}

export default function HealthcareSideHustlesPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gradient-to-r from-green-50 to-green-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Healthcare Side Hustles</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Specialized side hustle opportunities for nurses, doctors, and healthcare professionals. Turn your medical
            expertise into extra income.
          </p>
        </div>
      </div>

      <AdBanner type="header" className="mx-4 my-6" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Popular Healthcare Side Hustles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Nurse Side Hustles</h3>
                  <ul className="text-green-700 space-y-1 text-sm">
                    <li>• Per diem nursing shifts</li>
                    <li>• Telehealth consultations</li>
                    <li>• Medical writing</li>
                    <li>• Nursing education</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Physician Side Hustles</h3>
                  <ul className="text-blue-700 space-y-1 text-sm">
                    <li>• Medical consulting</li>
                    <li>• Expert witness services</li>
                    <li>• Online medical courses</li>
                    <li>• Healthcare app development</li>
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
