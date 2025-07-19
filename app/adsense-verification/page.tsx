import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AdSense Verification - SideHustlesFromHome.com",
  description: "This page is for Google AdSense verification purposes only.",
  robots: {
    index: false, // Prevent indexing of this page
    follow: false,
  },
}

export default function AdsenseVerificationPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">AdSense Verification</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-gray-700">
          <p>This page is used for Google AdSense verification purposes. It does not contain any public content.</p>
          {/* You might place a specific AdSense verification code here if required */}
          {/* Example: <meta name="google-adsense-account" content="ca-pub-YOUR_ADSENSE_ID"> */}
        </CardContent>
      </Card>
    </div>
  )
}
