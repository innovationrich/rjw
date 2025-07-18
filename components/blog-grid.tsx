import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { getAllBlogPosts } from "@/lib/blog-data" // Import the data function

export default function BlogGrid() {
  const posts = getAllBlogPosts() // Fetch posts directly

  if (!posts || posts.length === 0) {
    return <div className="text-center py-8">No blog posts found.</div>
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Card
          key={post.id}
          className="flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <Link href={`/blog/${post.id}`} className="block">
            <Image
              src={post.image || "/placeholder.svg?height=200&width=300&text=Blog+Post"}
              alt={post.title}
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
          </Link>
          <CardContent className="p-4 flex flex-col flex-grow">
            <CardTitle className="text-xl font-bold mb-2">
              <Link href={`/blog/${post.id}`} className="hover:underline">
                {post.title}
              </Link>
            </CardTitle>
            <CardDescription className="text-gray-600 text-sm mb-3 flex-grow">{post.excerpt}</CardDescription>
            <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
              <span>{post.date}</span>
              <Link
                href={`/categories/${post.category.toLowerCase().replace(/\s/g, "-")}`}
                className="text-blue-600 hover:underline"
              >
                {post.category}
              </Link>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
