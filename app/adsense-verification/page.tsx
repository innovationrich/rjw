export const metadata = {
  title: "AdSense Verification - Side Hustle Success",
  description: "AdSense verification page for Side Hustle Success blog.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function AdSenseVerificationPage() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">AdSense Verification</h1>
        <p className="text-gray-600 mb-6">This page verifies AdSense integration for Side Hustle Success.</p>

        <div className="bg-gray-100 p-6 rounded-lg mb-6">
          <h2 className="text-lg font-semibold mb-4">Publisher Information</h2>
          <div className="space-y-2">
            <div>
              <strong>Publisher ID:</strong>
              <code className="ml-2 bg-gray-200 px-2 py-1 rounded text-sm">ca-pub-7250819478010326</code>
            </div>
            <div>
              <strong>Ads.txt Location:</strong>
              <code className="ml-2 bg-gray-200 px-2 py-1 rounded text-sm">/ads.txt</code>
            </div>
            <div>
              <strong>Site Status:</strong>
              <span className="ml-2 text-green-600 font-semibold">Verified</span>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
          <p className="text-blue-800 text-sm">
            This site is properly configured for Google AdSense with ads.txt file and verification meta tags.
          </p>
        </div>
      </div>
    </div>
  )
}
