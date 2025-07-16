import { AdSenseBanner } from "./adsense-banner"

interface InArticleAdProps {
  className?: string
}

export function InArticleAd({ className = "" }: InArticleAdProps) {
  return (
    <div className={`my-8 ${className}`}>
      <div className="text-center text-xs text-gray-500 mb-2">Advertisement</div>
      <div className="bg-gray-50 rounded-lg p-4 min-h-[200px] flex items-center justify-center">
        <AdSenseBanner
          adSlot="5678901234" // Replace with your in-article ad slot ID
          adFormat="auto"
          style={{
            display: "block",
            textAlign: "center",
          }}
          className="w-full"
        />
      </div>
    </div>
  )
}
