"use client"

import { useEffect, useRef } from "react"

interface AdBannerProps {
  dataAdSlot: string
  dataAdFormat?: string
  dataFullWidthResponsive?: boolean
}

export function AdBanner({ dataAdSlot, dataAdFormat = "auto", dataFullWidthResponsive = true }: AdBannerProps) {
  const adRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    try {
      if (adRef.current && window.adsbygoogle) {
        // Ensure the ad slot is empty before pushing a new ad
        adRef.current.innerHTML = ""
        // Push the ad to be displayed
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      }
    } catch (e) {
      console.error("Adsense error", e)
    }
  }, [dataAdSlot]) // Re-render ad if slot changes

  return (
    <div className="my-8 text-center">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID}
        data-ad-slot={dataAdSlot}
        data-ad-format={dataAdFormat}
        data-full-width-responsive={dataFullWidthResponsive ? "true" : "false"}
        ref={adRef}
      ></ins>
    </div>
  )
}
