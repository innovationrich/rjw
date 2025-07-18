import Link from "next/link"
import { blogPosts } from "@/lib/blog-data"

export function BlogSidebar() {
  const recent = [...blogPosts].slice(0, 5)
  const categories = Array.from(new Set(blogPosts.map((p) => p.category)))

  return (
    <aside className="space-y-8">
      {/* Recent Posts */}
      <section>
        <h3 className="mb-3 text-lg font-semibold">Recent Posts</h3>
        <ul className="space-y-2">
          {recent.map((post) => (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`} className="text-sm text-gray-700 hover:text-emerald-600">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Categories */}
      <section>
        <h3 className="mb-3 text-lg font-semibold">Categories</h3>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li key={cat}>
              <Link
                href={`/categories/${cat.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm text-gray-700 hover:text-emerald-600"
              >
                {cat}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  )
}

export default BlogSidebar
