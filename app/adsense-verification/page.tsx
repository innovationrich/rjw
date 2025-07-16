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
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">AdSense Verification</h1>
        <p className="text-gray-600 mb-4">This page verifies AdSense integration for Side Hustle Success.</p>
        <div className="bg-gray-100 p-4 rounded-lg">
          <code className="text-sm text-gray-800">ca-pub-7250819478010326</code>
        </div>
        <p className="text-sm text-gray-500 mt-4">Publisher ID: ca-pub-7250819478010326</p>
      </div>
    </div>
  )
}
