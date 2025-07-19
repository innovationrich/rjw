import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getPostsByCategory, getAllCategories } from "@/lib/blog-data"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

// Generate static params for all categories
export async function generateStaticParams() {
  const categories = getAllCategories()
  return categories.map((category) => ({
    "category-slug": category.toLowerCase().replace(/\s+/g, "-"),
  }))
}

export async function generateMetadata({ params }: { params: { "category-slug": string } }): Promise<Metadata> {
  const categoryName = params["category-slug"]
    .replace(/-/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
  const posts = getPostsByCategory(categoryName)

  if (posts.length === 0) {
    return {
      title: "Category Not Found",
      description: "The requested category could not be found.",
    }
  }

  return {
    title: `${categoryName} - SideHustlesFromHome.com`,
    description: `Explore articles on ${categoryName} side hustles and opportunities.`,
    openGraph: {
      title: `${categoryName} - SideHustlesFromHome.com`,
      description: `Explore articles on ${categoryName} side hustles and opportunities.`,
      type: "website",
    },
  }
}

export default function CategoryPage({ params }: { params: { "category-slug": string } }) {
  const categoryName = params["category-slug"]
    .replace(/-/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
  const posts = getPostsByCategory(categoryName)

  if (posts.length === 0) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">{categoryName} Side Hustles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Card
            key={post.id}
            className="flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="relative h-48 w-full">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </Link>
            <CardContent className="flex flex-col flex-grow p-6">
              <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200 mb-3 self-start">
                {post.category}
              </Badge>
              <Link href={`/blog/${post.slug}`} className="block">
                <h2 className="text-xl font-semibold text-gray-900 hover:text-orange-600 transition-colors mb-2 leading-tight">
                  {post.title}
                </h2>
              </Link>
              <p className="text-gray-600 text-sm mb-4 flex-grow">{post.excerpt}</p>
              <div className="flex items-center text-sm text-gray-500">
                <span>{post.author}</span>
                <span className="mx-2">•</span>
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
