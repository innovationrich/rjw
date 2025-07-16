import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AdSenseInit } from "@/components/adsense-init"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Side Hustle Success - Your Guide to Extra Income",
  description:
    "Discover proven side hustles, passive income strategies, and freelancing tips to boost your earnings. Start your journey to financial freedom today.",
  keywords: "side hustles, passive income, freelancing, online business, extra money, financial freedom",
  authors: [{ name: "Side Hustle Success Team" }],
  verification: {
    google: "google2d25a61afde90888",
  },
  other: {
    "google-adsense-account": "ca-pub-7250819478010326",
  },
  openGraph: {
    title: "Side Hustle Success - Your Guide to Extra Income",
    description:
      "Discover proven side hustles, passive income strategies, and freelancing tips to boost your earnings.",
    type: "website",
    locale: "en_US",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-7250819478010326" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7250819478010326"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
      </head>
      <body className={inter.className}>
        <AdSenseInit />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
