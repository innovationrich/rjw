import Script from "next/script"

export function GoogleAnalytics() {
  const gaTrackingId = process.env.NEXT_PUBLIC_GA_TRACKING_ID

  if (!gaTrackingId) {
    console.warn("NEXT_PUBLIC_GA_TRACKING_ID is not set. Google Analytics will not load.")
    return null
  }

  return (
    <>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`} />
      <Script
        id="google-analytics-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaTrackingId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}
