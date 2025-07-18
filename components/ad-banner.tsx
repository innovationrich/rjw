"use client"

import type React from "react"
import { cn } from "@/lib/utils"

export interface AdBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "header" | "sidebar" | "content" | "footer"
}

/** Placeholder ad component – replace with your real ad code later. */
function AdBanner({ type = "content", className, ...props }: AdBannerProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-md border border-dashed border-gray-300 bg-gray-50 text-xs text-gray-500",
        type === "header" && "h-20",
        type === "sidebar" && "h-52",
        type === "content" && "h-40",
        type === "footer" && "h-20",
        className,
      )}
      {...props}
    >
      {`Ad banner – ${type}`}
    </div>
  )
}

export { AdBanner }
export default AdBanner
