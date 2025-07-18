import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/app/globals.css"

import { ThemeProvider } from "@/components/theme-provider"
import { Header as NamedHeader } from "@/components/header"
import { Footer as NamedFooter } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "$ideHustlesFromHome.com",
  description: "Make money on the side from the comfort of your home.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <NamedHeader />
          <main className="min-h-[calc(100vh-8rem)]">{children}</main>
          <NamedFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}
