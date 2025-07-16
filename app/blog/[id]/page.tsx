import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AdBanner } from "@/components/ad-banner"
import { InArticleAd } from "@/components/in-article-ad"
import { BlogSidebar } from "@/components/blog-sidebar"
import { Clock, User, Calendar, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { blogPosts } from "@/lib/blog-data"
import Image from "next/image"
import { notFound } from "next/navigation"
import { RelatedPosts } from "@/components/related-posts"
import { TableOfContents } from "@/components/table-of-contents"

export async function generateMetadata({ params }: { params: { id: string } }) {
  const id = Number.parseInt(params.id)
  const post = blogPosts.find((post) => post.id === id)

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} - Side Hustle Success`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const id = Number.parseInt(params.id)
  const post = blogPosts.find((post) => post.id === id)

  if (!post) {
    notFound()
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Header Ad */}
      <AdBanner type="header" className="mx-4 my-6" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2">
            {/* Article Header */}
            <div className="mb-8">
              <div className="aspect-video relative rounded-lg overflow-hidden mb-6">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200 mb-4">{post.category}</Badge>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">{post.title}</h1>

              <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {post.author}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
              </div>

              <div className="flex items-center gap-4 pb-6 border-b border-gray-200">
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            {/* Table of Contents */}
            <TableOfContents />

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p>
                Starting a side hustle doesn't have to be complicated or require months of preparation. In fact, some of
                the most profitable side hustles can be launched in just a weekend with minimal upfront investment.
              </p>

              <p>
                In this comprehensive guide, I'll share 10 proven side hustles that you can start immediately, along
                with realistic income expectations and step-by-step instructions to get you started.
              </p>

              <h2 id="virtual-assistant">1. Virtual Assistant Side Hustle</h2>
              <p>
                Virtual assistance is one of the fastest-growing side hustles, with demand increasing by 41%
                year-over-year. As a virtual assistant, you can offer services like email management, social media
                scheduling, data entry, and customer support.
              </p>

              <p>
                <strong>Potential Earnings:</strong> $15-50 per hour
              </p>
              <p>
                <strong>Getting Started:</strong> Create profiles on Upwork, Fiverr, and Belay. Highlight any
                administrative experience you have.
              </p>

              <p>
                The virtual assistant side hustle has become increasingly popular, especially for those seeking remote
                side hustle jobs. Many entrepreneurs and busy professionals need help managing their day-to-day tasks
                but don't want to hire full-time employees. This creates the perfect opportunity for side hustlers to
                offer their services on a flexible basis.
              </p>

              <p>
                To stand out in this competitive field, consider specializing in a specific industry or skill set. For
                example, you might focus on being a virtual assistant for real estate agents, lawyers, or e-commerce
                businesses. This specialization can help you command higher rates and attract clients who value your
                specific expertise.
              </p>

              <h2 id="online-tutoring">2. Online Tutoring Side Hustle</h2>
              <p>
                With the rise of remote learning, online tutoring has become an incredibly lucrative tutoring side
                hustle. You can teach anything from academic subjects to musical instruments or languages.
              </p>

              <p>
                <strong>Potential Earnings:</strong> $20-80 per hour
              </p>
              <p>
                <strong>Getting Started:</strong> Sign up for platforms like Wyzant, Tutor.com, or Preply. Create a
                compelling profile showcasing your expertise.
              </p>

              <p>
                The online teaching side hustle is perfect for teachers looking for a teacher side hustle to supplement
                their income. Many educators find that they can earn significantly more per hour tutoring privately than
                they do in their regular teaching positions. This makes it an attractive option for teachers during
                evenings, weekends, or summer breaks.
              </p>

              <p>
                To maximize your earnings as a tutor, focus on high-demand subjects like math, science, or test
                preparation (SAT, ACT, GRE). These areas typically command higher rates due to the specialized knowledge
                required and the high stakes for students.
              </p>
            </div>

            {/* In-Article Ad */}
            <InArticleAd className="my-8" />

            {/* More Content */}
            <div className="prose prose-lg max-w-none mt-8">
              <h2 id="freelance-writing">3. Freelance Writing Side Hustle</h2>
              <p>
                Content marketing is essential for businesses, creating a huge demand for the freelance writing side
                hustle. You can write blog posts, website copy, social media content, or email newsletters.
              </p>

              <p>
                <strong>Potential Earnings:</strong> $0.10-2.00 per word
              </p>
              <p>
                <strong>Getting Started:</strong> Build a portfolio with 3-5 sample articles, then pitch to businesses
                in your niche.
              </p>

              <p>
                The writing side hustle has evolved significantly in recent years. While traditional freelance writing
                opportunities still exist, new specializations like copywriting side hustle work have emerged.
                Copywriters focus specifically on creating persuasive content designed to drive sales and conversions,
                which often commands higher rates than general content writing.
              </p>

              <p>
                Another interesting niche is the letter writing side hustle, where writers create personalized letters
                for various occasions or help businesses with professional correspondence. Some writers even find
                success with the writing envelopes side hustle, addressing wedding invitations or holiday cards for
                clients who want beautiful calligraphy but lack the skills themselves.
              </p>

              <h2 id="social-media-management">4. Social Media Management</h2>
              <p>
                Small businesses often struggle to maintain an active social media presence. As a social media manager,
                you can help them create content, schedule posts, and engage with their audience.
              </p>

              <p>
                <strong>Potential Earnings:</strong> $500-3000 per client per month
              </p>
              <p>
                <strong>Getting Started:</strong> Create sample social media strategies for fictional businesses, then
                reach out to local small businesses.
              </p>

              <p>
                The digital marketing side hustle encompasses various specializations, with social media management
                being one of the most accessible entry points. Many small business owners know they need a social media
                presence but lack the time or expertise to manage it effectively.
              </p>

              <p>
                To succeed in this field, stay updated on platform algorithm changes and emerging trends. Offering
                services across multiple platforms (Instagram, Facebook, TikTok, LinkedIn) can make you more valuable to
                clients who want comprehensive social media coverage.
              </p>

              <h2 id="graphic-design">5. Graphic Design Side Hustle</h2>
              <p>
                From logos to social media graphics, businesses of all sizes need design work. The graphic design side
                hustle is perfect for creative individuals with an eye for aesthetics.
              </p>

              <p>
                <strong>Potential Earnings:</strong> $25-150 per hour or project-based fees
              </p>
              <p>
                <strong>Getting Started:</strong> Create a portfolio showcasing your design style, then list your
                services on platforms like Fiverr, 99designs, or Upwork.
              </p>

              <p>
                Many graphic designers find success by creating digital products like templates, illustrations, or fonts
                that they can sell repeatedly. The millennial digital planner side hustle has become particularly
                popular, with designers creating digital planners that appeal to tech-savvy young professionals.
              </p>

              <p>
                To maximize your earnings, consider offering package deals for businesses that need consistent design
                work, such as monthly social media graphics or quarterly marketing materials.
              </p>
            </div>

            {/* Content Ad */}
            <AdBanner type="content" className="my-8" />

            {/* More Content */}
            <div className="prose prose-lg max-w-none mt-8">
              <h2 id="delivery-services">6. Delivery Side Hustle</h2>
              <p>
                The gig economy has made delivery services one of the most accessible side hustles. Apps like DoorDash,
                Uber Eats, and Instacart connect you with people willing to pay for convenience.
              </p>

              <p>
                <strong>Potential Earnings:</strong> $15-25 per hour including tips
              </p>
              <p>
                <strong>Getting Started:</strong> Sign up for delivery apps, complete the verification process, and
                start accepting orders.
              </p>

              <p>
                Many people wonder, "Is DoorDash a good side hustle?" or "Is Uber Eats a good side hustle?" The answer
                depends on your location, vehicle efficiency, and availability during peak hours. Urban areas with high
                restaurant density typically offer the best earning potential.
              </p>

              <p>
                To maximize your earnings with delivery side hustle apps, consider working during peak times (lunch,
                dinner, weekends) and being strategic about which orders you accept based on distance and payout. Some
                drivers also work for multiple services simultaneously to reduce downtime between orders.
              </p>

              <h2 id="healthcare-side-hustles">7. Nursing Side Hustle</h2>
              <p>
                Healthcare professionals have unique opportunities for lucrative side hustles. The nurse side hustle
                market has expanded significantly in recent years.
              </p>

              <p>
                <strong>Potential Earnings:</strong> $25-100+ per hour
              </p>
              <p>
                <strong>Getting Started:</strong> Leverage your healthcare expertise for per diem work, telehealth
                services, or medical writing.
              </p>

              <p>
                For those in the medical field, the nursing side hustle options are diverse. Many nurses pick up extra
                shifts at different facilities through staffing agencies that often pay premium rates. Others explore
                the nurse practitioner side hustle route, offering specialized consultations or services.
              </p>

              <p>
                The physician side hustle market is similarly lucrative, with doctors offering medical consulting,
                expert witness services, or creating educational content for medical students and professionals.
              </p>

              <h2 id="real-estate">8. Real Estate Side Hustle</h2>
              <p>
                Real estate as a side hustle offers multiple pathways to generate income without quitting your day job.
              </p>

              <p>
                <strong>Potential Earnings:</strong> Highly variable, from hundreds to thousands per month
              </p>
              <p>
                <strong>Getting Started:</strong> Research your local market, connect with experienced investors, and
                identify your entry strategy.
              </p>

              <p>
                The real estate side hustle doesn't always require significant capital to get started. House hacking
                (renting out portions of your primary residence), becoming a referral agent, or helping with property
                management are all ways to enter the market with minimal investment.
              </p>

              <p>
                For those with more capital, buying rental properties or participating in real estate investment groups
                can provide passive income streams that grow over time.
              </p>
            </div>

            {/* In-Article Ad */}
            <InArticleAd className="my-8" />

            {/* More Content */}
            <div className="prose prose-lg max-w-none mt-8">
              <h2 id="proofreading">9. Proofreading Side Hustle</h2>
              <p>
                If you have an eye for detail and strong grammar skills, the proofreading side hustle could be perfect
                for you.
              </p>

              <p>
                <strong>Potential Earnings:</strong> $20-50 per hour
              </p>
              <p>
                <strong>Getting Started:</strong> Take a proofreading course to sharpen your skills, create a website
                showcasing your services, and join platforms like Upwork or Fiverr.
              </p>

              <p>
                Proofreading is often confused with editing, but it's actually the final quality check before
                publication. Proofreaders catch spelling errors, punctuation mistakes, and formatting inconsistencies
                that others miss.
              </p>

              <p>
                To succeed in this field, consider specializing in a specific type of content such as academic papers,
                business documents, or books. Many proofreaders find that specialization allows them to work more
                efficiently and command higher rates.
              </p>

              <h2 id="photography">10. Photography Side Hustle</h2>
              <p>
                The side hustle photography market continues to grow as businesses and individuals seek high-quality
                visual content.
              </p>

              <p>
                <strong>Potential Earnings:</strong> $100-500+ per session or licensing fees for stock photos
              </p>
              <p>
                <strong>Getting Started:</strong> Build a portfolio showcasing your style, create social media accounts
                to display your work, and network with potential clients.
              </p>

              <p>
                Many photographers start with specific niches like portraits, events, or real estate photography. As
                your skills and reputation grow, you can expand into more lucrative areas like wedding photography or
                commercial work.
              </p>

              <p>
                Beyond client work, selling stock photos or prints can create passive income streams that continue to
                generate revenue long after you've taken the photos.
              </p>

              <h2 id="bonus-side-hustles">Bonus Side Hustles Worth Exploring</h2>

              <h3>For Parents: Mom Side Hustle Ideas</h3>
              <p>
                The mom side hustle community has grown tremendously, with many stay-at-home parents finding ways to
                earn income while caring for their children. Popular options include virtual assistance, social media
                management, or creating and selling handmade items online.
              </p>

              <p>
                The stay at home mom side hustle ideal balances flexibility with income potential, allowing parents to
                work during nap times or after bedtime.
              </p>

              <h3>For Creatives: 3D Printing Side Hustle</h3>
              <p>
                The 3D print side hustle has low barriers to entry now that printer prices have decreased. Creating
                custom items, replacement parts, or decorative pieces can generate significant income once you've
                mastered the technology.
              </p>

              <h3>For Skilled Trades: Handyman Side Hustle</h3>
              <p>
                The handyman side hustle and other blue collar side hustle options offer excellent income potential for
                those with practical skills. Many homeowners need help with repairs and maintenance but struggle to find
                reliable professionals for smaller jobs.
              </p>

              <h3>For Vehicle Owners: Pickup Truck Side Hustle</h3>
              <p>
                If you own a pickup truck, you can offer moving, hauling, or delivery services. The pickup truck side
                hustle requires minimal additional investment since you already have the primary equipment needed.
              </p>

              <h3>For Travel Enthusiasts: Travel Agent Side Hustle</h3>
              <p>
                The travel agent side hustle has been revitalized in recent years as travelers seek personalized
                experiences and expert guidance. Specializing in specific destinations or types of travel (luxury,
                adventure, family) can help you build a loyal client base.
              </p>
            </div>

            <div className="prose prose-lg max-w-none mt-8">
              <h2 id="getting-started">How to Choose the Right Side Hustle for You</h2>
              <p>
                With so many options available, selecting the best side hustle requires careful consideration of your
                skills, interests, and goals:
              </p>

              <ol>
                <li>
                  <strong>Assess your skills:</strong> Start with side hustles that leverage your existing expertise.
                </li>
                <li>
                  <strong>Consider your schedule:</strong> Some side hustles require specific hours, while others offer
                  complete flexibility.
                </li>
                <li>
                  <strong>Evaluate startup costs:</strong> Many side hustles can be started with minimal investment.
                </li>
                <li>
                  <strong>Research market demand:</strong> Use the best side hustle apps and websites to research
                  opportunities in your area.
                </li>
                <li>
                  <strong>Test before committing:</strong> Try a side hustle on a small scale before making significant
                  investments.
                </li>
              </ol>

              <h2 id="legal-considerations">Legal Considerations for Side Hustlers</h2>
              <p>
                Many side hustlers wonder, "Should I start an LLC for my side hustle?" The answer depends on several
                factors:
              </p>

              <ul>
                <li>Liability concerns in your industry</li>
                <li>Income level and tax implications</li>
                <li>Growth plans for your side business</li>
                <li>Client requirements (some clients prefer working with formal business entities)</li>
              </ul>

              <p>
                Consult with a tax professional or business attorney to determine the best structure for your specific
                situation.
              </p>

              <h2 id="conclusion">Conclusion: Your Side Hustle Journey Starts Now</h2>
              <p>
                Whether you're interested in the freelance writing side hustle, virtual assistant side hustle, or any of
                the other opportunities we've discussed, the most important step is to simply begin. Start small, learn
                as you go, and gradually scale your side hustle as you gain experience and confidence.
              </p>

              <p>
                Remember that the most successful side hustlers are those who provide genuine value, continuously
                improve their skills, and treat their side hustle with the same professionalism as a full-time business.
              </p>

              <p>
                Ready to take action? Choose one side hustle from this list and take the first step this weekend. Your
                future self (and bank account) will thank you!
              </p>
            </div>

            {/* Newsletter Signup */}
            <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white mt-12">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Want More Side Hustle Tips?</h3>
                <p className="text-orange-100 mb-6">
                  Join 50,000+ readers getting weekly side hustle opportunities and success stories.
                </p>
                <Button className="bg-white text-orange-600 hover:bg-gray-100">Subscribe Free</Button>
              </CardContent>
            </Card>

            {/* Related Posts */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
              <RelatedPosts currentPostId={post.id} category={post.category} />
            </div>
          </article>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <BlogSidebar />
          </div>
        </div>
      </div>

      {/* Footer Ad */}
      <AdBanner type="footer" className="mx-4 mb-6" />
    </div>
  )
}
