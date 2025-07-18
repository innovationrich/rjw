import { getAllCategories, getRecentPosts } from "@/lib/blog-data"
import Link from "next/link"

interface BlogSidebarProps {
  categories?: any[]
  recentPosts?: any[]
}

const BlogSidebar = ({ categories, recentPosts }: BlogSidebarProps) => {
  // If no data is passed as props, fetch from the data source
  const sidebarCategories = categories || getAllCategories()
  const sidebarRecentPosts = recentPosts || getRecentPosts(5)

  return (
    <aside className="space-y-8">
      {/* Categories */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Categories</h3>
        {sidebarCategories && sidebarCategories.length > 0 ? (
          <ul className="space-y-2">
            {sidebarCategories.map((category) => (
              <li key={category.id || category.slug}>
                <Link
                  href={`/categories/${category.slug}`}
                  className="flex justify-between items-center text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <span>{category.name}</span>
                  <span className="text-sm text-gray-500">({category.count || 0})</span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No categories available.</p>
        )}
      </div>

      {/* Recent Posts */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Recent Posts</h3>
        {sidebarRecentPosts && sidebarRecentPosts.length > 0 ? (
          <ul className="space-y-4">
            {sidebarRecentPosts.map((post) => (
              <li key={post.id}>
                <Link href={`/blog/${post.id}`} className="block hover:text-blue-600 transition-colors">
                  <h4 className="font-medium line-clamp-2 mb-1">{post.title}</h4>
                  <p className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No recent posts available.</p>
        )}
      </div>

      {/* Newsletter Signup */}
      <div className="bg-blue-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
        <p className="text-gray-600 mb-4">Get the latest side hustle tips and opportunities delivered to your inbox.</p>
        <form className="space-y-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </aside>
  )
}

export default BlogSidebar
