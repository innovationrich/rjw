import { AdSenseBanner } from "./adsense-banner"

interface AdBannerProps {
  type: "header" | "sidebar" | "content" | "footer"
  className?: string
}

export function AdBanner({ type, className = "" }: AdBannerProps) {
  // You'll need to create these ad units in your AdSense account
  const getAdSlot = () => {
    switch (type) {
      case "header":
        return "1234567890" // Replace with your actual header ad slot ID
      case "sidebar":
        return "2345678901" // Replace with your actual sidebar ad slot ID
      case "content":
        return "3456789012" // Replace with your actual in-content ad slot ID
      case "footer":
        return "4567890123" // Replace with your actual footer ad slot ID
      default:
        return "1234567890"
    }
  }

  const getAdFormat = () => {
    switch (type) {
      case "header":
        return "horizontal"
      case "sidebar":
        return "vertical"
      case "content":
        return "rectangle"
      case "footer":
        return "horizontal"
      default:
        return "auto"
    }
  }

  const getContainerStyle = () => {
    switch (type) {
      case "header":
        return "min-h-[100px] lg:min-h-[120px]"
      case "sidebar":
        return "min-h-[250px] w-full"
      case "content":
        return "min-h-[120px] lg:min-h-[150px]"
      case "footer":
        return "min-h-[80px] lg:min-h-[100px]"
      default:
        return "min-h-[120px]"
    }
  }

  return (
    <div className={`${getContainerStyle()} ${className} flex items-center justify-center bg-gray-50 rounded-lg`}>
      <AdSenseBanner
        adSlot={getAdSlot()}
        adFormat={getAdFormat() as any}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
        }}
        className="w-full h-full"
      />
    </div>
  )
}
