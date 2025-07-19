/**
 * Central blog-data module
 *  – exports BlogPost & Category types
 *  – exports blogPosts and categories arrays
 *  – exports helper lookup functions used across the app
 *
 *  NOTE:
 *    • keep every id a string (legacy numeric routes like /blog/2 rely on this)
 *    • keep each post’s `slug` unique for SEO-friendly URLs (/blog/my-post-slug)
 */

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  category: string
  tags: string[]
  image: string
  slug: string
  readTime: string
}

export interface Category {
  id: number
  name: string
  slug: string
  description: string
  count: number
}

/* -------------------------------------------------------------------------- */
/*                                    Data                                    */
/* -------------------------------------------------------------------------- */

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Top 10 Online Side Hustles to Boost Your Income",
    excerpt: "Discover the best online side hustles you can start today to earn extra money from home.",
    content: "<p>Starting an online side hustle is a fantastic way to supplement your income...</p>",
    author: "AI Assistant",
    date: "2024-07-10",
    category: "Online Side Hustles",
    tags: ["online", "side hustle", "income"],
    image: "/online-side-hustles.png",
    slug: "top-10-online-side-hustles",
    readTime: "10 min read",
  },
  {
    id: "2",
    title: "5 Passive Income Ideas That Actually Work",
    excerpt: "Learn how to set up income streams that generate money with minimal ongoing effort.",
    content: "<p>Passive income is the dream for many – earning money while you sleep...</p>",
    author: "AI Assistant",
    date: "2024-07-05",
    category: "Passive Income",
    tags: ["passive income", "investing", "financial freedom"],
    image: "/passive-income-growth.png",
    slug: "5-passive-income-ideas",
    readTime: "8 min read",
  },
  {
    id: "3",
    title: "Freelancing: Your Path to Financial Freedom",
    excerpt: "Explore the world of freelancing and how it can offer flexibility and control over your career.",
    content: "<p>Freelancing has emerged as a powerful alternative to traditional employment...</p>",
    author: "AI Assistant",
    date: "2024-06-28",
    category: "Freelancing",
    tags: ["freelancing", "remote work"],
    image: "/freelance-writing-workspace.png",
    slug: "freelancing-path-to-financial-freedom",
    readTime: "7 min read",
  },
]

export const categories: Category[] = [
  {
    id: 1,
    name: "Online Side Hustles",
    slug: "online-side-hustles",
    description: "Side hustles you can do entirely online.",
    count: 5,
  },
  {
    id: 2,
    name: "Passive Income",
    slug: "passive-income",
    description: "Ways to earn money passively",
    count: 8,
  },
  {
    id: 3,
    name: "Freelancing",
    slug: "freelancing",
    description: "Tips and guides for freelance work",
    count: 12,
  },
]

/* -------------------------------------------------------------------------- */
/*                               Helper functions                             */
/* -------------------------------------------------------------------------- */

export function getAllPosts(): BlogPost[] {
  return blogPosts
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getPostById(id: string): BlogPost | undefined {
  return blogPosts.find((post) => post.id === id)
}

export function getPostsByCategorySlug(categorySlug: string): BlogPost[] {
  return blogPosts.filter((post) => post.category.toLowerCase().replace(/\s+/g, "-") === categorySlug)
}

export function getAllCategories(): Category[] {
  return categories
}

export function getRecentPosts(limit = 5): BlogPost[] {
  return [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, limit)
}

export function getRelatedPosts(currentPostId: string, category: string, limit = 3): BlogPost[] {
  return blogPosts
    .filter((post) => post.id !== currentPostId && post.category === category)
    .sort(() => 0.5 - Math.random()) // Simple shuffle
    .slice(0, limit)
}
