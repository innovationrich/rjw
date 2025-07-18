export interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  category: string
  tags: string[]
  image: string
  slug: string
}

export interface Category {
  id: number
  name: string
  slug: string
  description: string
  count: number
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 Best Side Hustles to Start in 2024",
    excerpt: "Discover the most profitable side hustles you can start today with minimal investment.",
    content: "Full content here...",
    author: "Admin",
    date: "2024-01-15",
    category: "Side Hustles",
    tags: ["side-hustles", "income", "2024"],
    image: "/placeholder.jpg",
    slug: "10-best-side-hustles-2024",
  },
  {
    id: 2,
    title: "How to Make Money Freelancing Online",
    excerpt: "A comprehensive guide to starting your freelancing career and earning consistent income.",
    content: "Full content here...",
    author: "Admin",
    date: "2024-01-10",
    category: "Freelancing",
    tags: ["freelancing", "online-work", "remote"],
    image: "/placeholder.jpg",
    slug: "make-money-freelancing-online",
  },
  {
    id: 3,
    title: "Passive Income Ideas That Actually Work",
    excerpt: "Explore proven passive income strategies that can generate money while you sleep.",
    content: "Full content here...",
    author: "Admin",
    date: "2024-01-05",
    category: "Passive Income",
    tags: ["passive-income", "investing", "automation"],
    image: "/placeholder.jpg",
    slug: "passive-income-ideas-that-work",
  },
]

export const categories: Category[] = [
  {
    id: 1,
    name: "Side Hustles",
    slug: "side-hustles",
    description: "Various ways to earn extra income",
    count: 15,
  },
  {
    id: 2,
    name: "Freelancing",
    slug: "freelancing",
    description: "Tips and guides for freelance work",
    count: 12,
  },
  {
    id: 3,
    name: "Passive Income",
    slug: "passive-income",
    description: "Ways to earn money passively",
    count: 8,
  },
  {
    id: 4,
    name: "Investing",
    slug: "investing",
    description: "Investment strategies and tips",
    count: 10,
  },
]

export function getAllPosts(): BlogPost[] {
  return blogPosts
}

export function getPostById(id: number): BlogPost | undefined {
  return blogPosts.find((post) => post.id === id)
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) => post.category.toLowerCase() === category.toLowerCase())
}

export function getAllCategories(): Category[] {
  return categories
}

export function getRecentPosts(limit = 5): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, limit)
}
