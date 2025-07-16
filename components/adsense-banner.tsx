"use client"

import type React from "react"
import { useEffect } from "react"

interface AdSenseBannerProps {
  adSlot: string
  adFormat?: "auto" | "rectangle" | "vertical" | "horizontal"
  fullWidthResponsive?: boolean
  style?: React.CSSProperties
  className?: string
}

declare global {
  interface Window {
    adsbygoogle: any[]
  }
}

export function AdSenseBanner({
  adSlot,
  adFormat = "auto",
  fullWidthResponsive = true,
  style = { display: "block" },
  className = "",
}: AdSenseBannerProps) {
  useEffect(() => {
    const loadAds = () => {
      try {
        if (typeof window !== "undefined" && window.adsbygoogle) {
          window.adsbygoogle.push({})
        }
      } catch (error) {
        console.error("AdSense error:", error)
      }
    }

    // Load ads after a short delay to ensure DOM is ready
    const timer = setTimeout(loadAds, 300)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`adsense-container ${className}`}>
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client="ca-pub-7250819478010326"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive.toString()}
      />
    </div>
  )
}
