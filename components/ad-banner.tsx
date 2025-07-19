import type React from "react"
import { cn } from "@/lib/utils"

interface AdBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  adUnitId?: string
  slotId?: string
  format?: "auto" | "rectangle" | "vertical" | "horizontal"
  responsive?: boolean
}

export default function AdBanner({
  adUnitId = "ca-pub-xxxxxxxxxxxxxx", // Replace with your actual AdSense Publisher ID
  slotId = "xxxxxxxxxx", // Replace with your actual AdSense Slot ID
  format = "auto",
  responsive = true,
  className,
  ...props
}: AdBannerProps) {
  // In a real application, you would load the AdSense script here
  // and render the ins tag. For this example, we'll show a placeholder.

  return (
    <div
      className={cn(
        "flex items-center justify-center bg-gray-100 border border-gray-300 rounded-lg text-gray-500 text-sm p-4",
        "min-h-[90px] md:min-h-[120px] lg:min-h-[200px]", // Example min-heights for different formats
        className,
      )}
      {...props}
    >
      <p>Advertisement (AdSense Placeholder)</p>
      {/*
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client={adUnitId}
          data-ad-slot={slotId}
          data-ad-format={format}
          data-full-width-responsive={responsive ? "true" : "false"}
        ></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      */}
    </div>
  )
}

export { AdBanner }
