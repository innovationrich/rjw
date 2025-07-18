import type React from "react"
import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import "./globals.css"

export const metadata: Metadata = {
  title: "$ideHustlesFromHome.com",
  description: "Your ultimate guide to side hustles and making money from home",
  generator: "v0.dev",
  applicationName: "$ideHustlesFromHome.com",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
