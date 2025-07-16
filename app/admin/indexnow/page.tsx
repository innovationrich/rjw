import { IndexNowAdmin } from "@/components/indexnow-admin"

export const metadata = {
  title: "IndexNow Admin - Side Hustle Success",
  description: "Submit URLs to IndexNow for instant search engine indexing",
  robots: {
    index: false,
    follow: false,
  },
}

export default function IndexNowAdminPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gradient-to-r from-orange-50 to-orange-100 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">IndexNow Management</h1>
          <p className="text-xl text-gray-600">Submit your URLs for instant indexing across multiple search engines</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <IndexNowAdmin />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Supported Search Engines</h3>
            <ul className="text-blue-700 space-y-2">
              <li>• Microsoft Bing</li>
              <li>• Yandex</li>
              <li>• Seznam.cz</li>
              <li>• Naver (coming soon)</li>
            </ul>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-green-900 mb-3">When to Use IndexNow</h3>
            <ul className="text-green-700 space-y-2">
              <li>• New blog posts published</li>
              <li>• Content updates or edits</li>
              <li>• New pages or categories</li>
              <li>• URL structure changes</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-orange-50 border border-orange-200 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-orange-900 mb-3">API Key Information</h3>
          <p className="text-orange-700 mb-2">
            Your IndexNow API key is hosted at:{" "}
            <code className="bg-orange-100 px-2 py-1 rounded">
              https://your-domain.com/22edc7cab1d846889a863530975e6e09.txt
            </code>
          </p>
          <p className="text-sm text-orange-600">
            This key file must be accessible for IndexNow to verify domain ownership.
          </p>
        </div>
      </div>
    </div>
  )
}
