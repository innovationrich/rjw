import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { blogPosts } from "@/lib/blog-data" // Ensure this import is correct

export function BlogSidebar() {
  const recentPosts = blogPosts.slice(0, 5) // Get top 5 recent posts
  const categories = Array.from(new Set(blogPosts.map((post) => post.category)))

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Search</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            <Input placeholder="Search posts..." type="search" />
            <Button>Search</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Posts</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {recentPosts.map((post) => (
              <li key={post.id}>
                <Link className="text-blue-600 hover:underline" href={`/blog/${post.id}`}>
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category}>
                <Link
                  className="text-blue-600 hover:underline"
                  href={`/categories/${category.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Newsletter</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600">Subscribe to our newsletter for the latest side hustle tips!</p>
          <div className="mt-4 flex space-x-2">
            <Input placeholder="Your email" type="email" />
            <Button>Subscribe</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default BlogSidebar
