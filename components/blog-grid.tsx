import { getAllPosts } from "@/lib/blog-data"
import Link from "next/link"
import Image from "next/image"

interface BlogGridProps {
  posts?: any[]
}

const BlogGrid = ({ posts }: BlogGridProps) => {
  // If no posts are passed as props, fetch them from the data source
  const blogPosts = posts || getAllPosts()

  if (!blogPosts || blogPosts.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">No blog posts found.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogPosts.map((post) => (
        <article
          key={post.id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div className="relative h-48">
            <Image src={post.image || "/placeholder.jpg"} alt={post.title} fill className="object-cover" />
          </div>
          <div className="p-6">
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <span>{post.category}</span>
              <span className="mx-2">•</span>
              <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
            </div>
            <h2 className="text-xl font-semibold mb-3 line-clamp-2">
              <Link href={`/blog/${post.id}`} className="hover:text-blue-600 transition-colors">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
            <Link
              href={`/blog/${post.id}`}
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              Read More
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </article>
      ))}
    </div>
  )
}

export default BlogGrid
