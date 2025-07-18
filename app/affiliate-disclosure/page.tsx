import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Affiliate Disclosure - SideHustles FromHome.com",
  description: "Learn about our affiliate disclosure policy at SideHustles FromHome.com.",
  keywords: "affiliate disclosure, affiliate links, transparency, side hustles",
  openGraph: {
    title: "Affiliate Disclosure - SideHustles FromHome.com",
    description: "Learn about our affiliate disclosure policy at SideHustles FromHome.com.",
    url: "https://sidehustlesfromhome.com/affiliate-disclosure",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Affiliate Disclosure - SideHustles FromHome.com",
    description: "Learn about our affiliate disclosure policy at SideHustles FromHome.com.",
  },
}

export default function AffiliateDisclosurePage() {
  return (
    <main className="container mx-auto px-4 py-8 md:py-12">
      <article className="prose prose-lg mx-auto max-w-3xl dark:prose-invert">
        <h1 className="text-4xl font-bold mb-6">Affiliate Disclosure</h1>
        <p className="text-lg mb-4">
          SideHustles FromHome.com participates in various affiliate marketing programs, which means we may get paid
          commissions on editorially chosen products purchased through our links to retailer sites. This comes at no
          extra cost to you.
        </p>
        <p className="text-lg mb-4">
          Our goal is to provide valuable content and resources to help you find legitimate side hustles and
          work-from-home opportunities. We only recommend products and services that we genuinely believe will be
          beneficial to our readers.
        </p>
        <p className="text-lg mb-4">
          When you click on an affiliate link and make a purchase, we may receive a small commission from the retailer.
          This helps support our website and allows us to continue creating high-quality content for you.
        </p>
        <p className="text-lg mb-4">
          We are committed to transparency and honesty. Our editorial content is not influenced by advertisers or
          affiliate partnerships. We strive to provide unbiased reviews and information to help you make informed
          decisions.
        </p>
        <p className="text-lg mb-4">Thank you for supporting SideHustles FromHome.com!</p>
      </article>
    </main>
  )
}
