import { Hero } from "@/components/hero"
import { FeaturedArticle } from "@/components/featured-article"
import { FeaturedGigWork } from "@/components/featured-gig-work"
import { FeaturedEntryLevelJobs } from "@/components/featured-entry-level-jobs"
import { FeaturedPosts } from "@/components/featured-posts"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { AdBanner } from "@/components/ad-banner"

export default function HomePage() {
  return (
    <div className="bg-white">
      <Hero />
      <AdBanner type="header" />
      <FeaturedArticle />
      <FeaturedGigWork />
      <FeaturedEntryLevelJobs />
      <FeaturedPosts />
      <NewsletterSignup />
    </div>
  )
}
