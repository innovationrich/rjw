import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GoogleAdsense } from "@/components/google-adsense"
import { GoogleAnalytics } from "@/components/google-analytics"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://jobsnearmehiringimmediately.com"),
  title: {
    default: "Jobs Near Me Hiring Immediately - Find Your Next Job Today",
    template: "%s | Jobs Near Me Hiring Immediately",
  },
  description:
    "Find jobs hiring immediately near you. Explore full-time, part-time, remote, and local opportunities. Your next career starts here!",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jobs Near Me Hiring Immediately - Find Your Next Job Today",
    description:
      "Find jobs hiring immediately near you. Explore full-time, part-time, remote, and local opportunities. Your next career starts here!",
    url: "https://jobsnearmehiringimmediately.com",
    siteName: "Jobs Near Me Hiring Immediately",
    images: [
      {
        url: "https://jobsnearmehiringimmediately.com/jobs-hiring-banner.png", // Replace with your actual image path
        width: 1200,
        height: 630,
        alt: "Jobs Near Me Hiring Immediately Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jobs Near Me Hiring Immediately - Find Your Next Job Today",
    description:
      "Find jobs hiring immediately near you. Explore full-time, part-time, remote, and local opportunities. Your next career starts here!",
    images: ["https://jobsnearmehiringimmediately.com/jobs-hiring-banner.png"], // Replace with your actual image path
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "YOUR_GOOGLE_SITE_VERIFICATION_CODE", // Replace with your Google Site Verification code
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAdsense pId={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID || ""} />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ""} />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
