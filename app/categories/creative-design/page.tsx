import { BlogGrid } from "@/components/blog-grid"
import { BlogSidebar } from "@/components/blog-sidebar"
import { AdBanner } from "@/components/ad-banner"

export const metadata = {
  title: "Creative & Design Side Hustles - Photography, Graphic Design & More",
  description:
    "Monetize your creativity with graphic design, photography, 3D printing, and digital product side hustles. Turn your artistic skills into income.",
}

export default function CreativeDesignPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gradient-to-r from-pink-50 to-pink-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Creative & Design Side Hustles</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Turn your artistic talents into profitable side hustles. From graphic design to photography, discover how to
            monetize your creativity.
          </p>
        </div>
      </div>

      <AdBanner type="header" className="mx-4 my-6" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Creative Opportunities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">Graphic Design</h3>
                  <ul className="text-purple-700 space-y-1 text-sm">
                    <li>• Logo design</li>
                    <li>• Social media graphics</li>
                    <li>• Digital planners</li>
                    <li>• Print materials</li>
                  </ul>
                </div>
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-indigo-900 mb-2">Photography</h3>
                  <ul className="text-indigo-700 space-y-1 text-sm">
                    <li>• Stock photography</li>
                    <li>• Event photography</li>
                    <li>• Portrait sessions</li>
                    <li>• Real estate photos</li>
                  </ul>
                </div>
                <div className="bg-teal-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-teal-900 mb-2">3D Printing</h3>
                  <ul className="text-teal-700 space-y-1 text-sm">
                    <li>• Custom prototypes</li>
                    <li>• Replacement parts</li>
                    <li>• Decorative items</li>
                    <li>• Educational models</li>
                  </ul>
                </div>
                <div className="bg-rose-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-rose-900 mb-2">Digital Products</h3>
                  <ul className="text-rose-700 space-y-1 text-sm">
                    <li>• Templates & themes</li>
                    <li>• Digital art prints</li>
                    <li>• Online courses</li>
                    <li>• Design assets</li>
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
