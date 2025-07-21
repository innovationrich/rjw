import Script from "next/script"

export function GoogleAdsense() {
  const googleAdsenseClientId = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID

  if (!googleAdsenseClientId) {
    console.warn("NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID is not set. Google AdSense will not load.")
    return null
  }

  return (
    <>
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${googleAdsenseClientId}`}
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
    </>
  )
}
