export interface Post {
  title: string
  slug: string
  date: string
  content: string
  category: string
}

export const posts: Post[] = [
  {
    title: "First Post",
    slug: "first-post",
    date: "2024-01-01",
    content: "This is the content of the first post.",
    category: "Technology",
  },
  {
    title: "Second Post",
    slug: "second-post",
    date: "2024-01-05",
    content: "This is the content of the second post.",
    category: "Travel",
  },
  {
    title: "Third Post",
    slug: "third-post",
    date: "2024-01-10",
    content: "This is the content of the third post.",
    category: "Technology",
  },
]

// Alias for backwards-compatibility with components that import `blogPosts`.
export const blogPosts = posts

export function getPostsByCategory(category: string) {
  return posts.filter((p) => p.category === category)
}
