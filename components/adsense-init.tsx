"use client"

import { useEffect } from "react"

export function AdSenseInit() {
  useEffect(() => {
    // Initialize AdSense
    if (typeof window !== "undefined") {
      window.adsbygoogle = window.adsbygoogle || []
    }
  }, [])

  return null
}
