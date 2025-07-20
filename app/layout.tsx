import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GoogleAdsense } from "@/components/google-adsense"
import { GoogleAnalytics } from "@/components/google-analytics"
import { Suspense } from "react"
import { SchemaMarkup } from "@/components/schema-markup"

const inter = Inter({ subsets: ["latin"] })

// WebSite Schema for the entire site
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Jobs Near Me Hiring Immediately",
  url: "https://jobsnearmehiringimmediately.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://jobsnearmehiringimmediately.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
}

export const metadata: Metadata = {
  title: {
    default: "Jobs Near Me Hiring Immediately - Find Work Today",
    template: "%s | Jobs Near Me Hiring Immediately",
  },
  description:
    "Find jobs near me hiring immediately. Thousands of companies are hiring today - warehouse, retail, fast food, entry-level positions with no experience required. Start your new job today!",
  keywords:
    "jobs hiring immediately, jobs near me, immediate hiring, no experience jobs, warehouse jobs, retail jobs, fast food jobs, entry-level jobs, remote jobs, construction jobs, part-time jobs, full-time jobs",
  authors: [{ name: "JobsNearMeHiringImmediately.com" }],
  creator: "JobsNearMeHiringImmediately.com",
  publisher: "JobsNearMeHiringImmediately.com",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://jobsnearmehiringimmediately.com"),
  alternates: {
    canonical: "https://jobsnearmehiringimmediately.com",
  },
  openGraph: {
    title: "Jobs Near Me Hiring Immediately - Find Work Today",
    description:
      "Find jobs near me hiring immediately. Thousands of companies are hiring today - warehouse, retail, fast food, entry-level positions with no experience required. Start your new job today!",
    url: "https://jobsnearmehiringimmediately.com",
    siteName: "JobsNearMeHiringImmediately.com",
    images: [
      {
        url: "/jobs-hiring-banner.png", // Using placeholder for now
        width: 1200,
        height: 630,
        alt: "Jobs Hiring Near Me Immediately - Find Work Today",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jobs Near Me Hiring Immediately - Find Work Today",
    description:
      "Find jobs near me hiring immediately. Thousands of companies are hiring today - warehouse, retail, fast food, entry-level positions with no experience required. Start your new job today!",
    images: ["/jobs-hiring-banner.png"], // Using placeholder for now
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
    google: "your-google-verification-code", // REMINDER: Replace with your actual Google Search Console verification code
  },
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <GoogleAdsense />
        <GoogleAnalytics />
        <SchemaMarkup schema={websiteSchema} />
      </head>
      <body className={inter.className}>
        <Suspense fallback={<div>Loading...</div>}>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Suspense>
      </body>
    </html>
  )
}
