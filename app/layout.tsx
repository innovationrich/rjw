import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import AdSenseInit from "@/components/adsense-init"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "$ideHustlesFromHome.com - Your Guide to Financial Freedom",
    template: "%s | $ideHustlesFromHome.com",
  },
  description:
    "Discover the best side hustles, passive income strategies, and work-from-home opportunities to achieve financial freedom.",
  keywords: ["side hustles", "passive income", "work from home", "financial freedom", "online income", "freelancing"],
  authors: [{ name: "$ideHustlesFromHome.com" }],
  creator: "$ideHustlesFromHome.com",
  publisher: "$ideHustlesFromHome.com",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://sidehustlesfromhome.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sidehustlesfromhome.com",
    siteName: "$ideHustlesFromHome.com",
    title: "$ideHustlesFromHome.com - Your Guide to Financial Freedom",
    description:
      "Discover the best side hustles, passive income strategies, and work-from-home opportunities to achieve financial freedom.",
    images: [
      {
        url: "/placeholder-logo.png",
        width: 1200,
        height: 630,
        alt: "$ideHustlesFromHome.com Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "$ideHustlesFromHome.com - Your Guide to Financial Freedom",
    description:
      "Discover the best side hustles, passive income strategies, and work-from-home opportunities to achieve financial freedom.",
    images: ["/placeholder-logo.png"],
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
    google: "google2d25a61afde90888",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <AdSenseInit />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
