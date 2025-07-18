import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AdBanner } from "@/components/ad-banner"
import { BlogSidebar } from "@/components/blog-sidebar"
import { Clock, User, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getPostBySlug, getRelatedPosts } from "@/lib/blog-data"
import Image from "next/image"
import { notFound } from "next/navigation"
import { TableOfContents } from "@/components/table-of-contents"

export async function generateMetadata() {
  const post = getPostBySlug("mastering-digital-marketing-smm-content-influencer")

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} - $ideHustlesFromHome.com`,
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

export default function MasteringDigitalMarketingPage() {
  const post = getPostBySlug("mastering-digital-marketing-smm-content-influencer")

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
                {/* Social Share Buttons - Placeholder for future implementation */}
                <Button variant="outline" size="sm">
                  Share
                </Button>
              </div>
            </div>

            {/* Table of Contents */}
            <TableOfContents />

            {/* Article Content */}
            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

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
              {/* Using getRelatedPosts with post.id and post.category */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getRelatedPosts(post.id, post.category).map((relatedPost) => (
                  <Card key={relatedPost.id}>
                    <CardContent className="p-4">
                      <Link href={`/blog/${relatedPost.slug}`}>
                        <h4 className="text-lg font-semibold hover:text-blue-600">{relatedPost.title}</h4>
                      </Link>
                      <p className="text-sm text-gray-600 mt-2">{relatedPost.excerpt}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
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
