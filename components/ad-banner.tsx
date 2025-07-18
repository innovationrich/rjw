import type React from "react"

interface AdBannerProps {
  imageUrl: string
  altText: string
  linkUrl: string
}

const AdBanner: React.FC<AdBannerProps> = ({ imageUrl, altText, linkUrl }) => {
  return (
    <a href={linkUrl} target="_blank" rel="noopener noreferrer">
      <img src={imageUrl || "/placeholder.svg"} alt={altText} style={{ maxWidth: "100%", display: "block" }} />
    </a>
  )
}

// Provide both a named and default export so either import style works.
export { AdBanner }
export default AdBanner
