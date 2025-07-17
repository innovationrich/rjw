import { getBlogPostImage } from "@/lib/images"

export interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  category: string
  readTime: string
  author: string
  date: string
  image: string
  featured?: boolean
  tags: string[]
}

/**
 * IMPORTANT:
 * Long–form HTML was trimmed to keep the source readable.
 * Add more detail later by editing the `content` fields – just
 * remember to close each template-literal (back-tick) and object!
 */
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 Profitable Side Hustles You Can Start This Weekend",
    excerpt: "Discover legitimate ways to earn extra money with minimal startup costs and flexible schedules.",
    content: `
      <p>Starting a side hustle doesn't have to be complicated or require months of preparation.</p>
      <h2>1. Virtual Assistant Services</h2>
      <p>Virtual assistance is one of the fastest-growing side hustles …</p>
    `,
    category: "Online Side Hustles",
    readTime: "15 min read",
    author: "Alex Johnson",
    date: "Dec 15, 2024",
    image: getBlogPostImage("sideHustleIdeas"),
    featured: true,
    tags: ["beginner-friendly", "weekend-start", "remote-work"],
  },
  {
    id: 2,
    title: "The Complete Guide to Passive Income: 15 Proven Strategies for 2024",
    excerpt:
      "Master the art of passive income with this comprehensive guide covering real estate, dividend stocks, and more.",
    content: `
      <p>Passive income is the holy grail of financial freedom – money that flows in with minimal effort.</p>
    `,
    category: "Passive Income",
    readTime: "18 min read",
    author: "Sarah Chen",
    date: "Dec 16, 2024",
    image: getBlogPostImage("passiveIncomeStreams"),
    featured: true,
    tags: ["passive-income", "investing"],
  },
  {
    id: 3,
    title: "Gig Work Near Me: The Complete Guide",
    excerpt: "Discover the best gig work opportunities in major cities and online.",
    content: `
      <p>The gig economy has revolutionised how people work …</p>
    `,
    category: "Gig Economy",
    readTime: "16 min read",
    author: "Marcus Thompson",
    date: "Dec 17, 2024",
    image: getBlogPostImage("socialMediaManagement"),
    featured: true,
    tags: ["gig-work", "flexible-jobs"],
  },
  {
    id: 4,
    title: "Jobs Hiring Near Me With No Experience – Where to Apply in 2025",
    excerpt: "Find entry-level jobs in your area that don't require experience.",
    content: `
      <p>Finding a job when you have no experience can feel overwhelming …</p>
    `,
    category: "Entry-Level Jobs",
    readTime: "20 min read",
    author: "Jennifer Walsh",
    date: "Dec 18, 2024",
    image: getBlogPostImage("virtualAssistant"),
    featured: true,
    tags: ["entry-level", "job-search"],
  },
  {
    id: 5,
    title: "The Ultimate Guide to Local Jobs Hiring Near Me",
    excerpt: "The most comprehensive guide to finding local employment opportunities.",
    content: `
      <p>Finding local employment has never been more important …</p>
    `,
    category: "Local Job Search",
    readTime: "25 min read",
    author: "Marcus Thompson",
    date: "Dec 19, 2024",
    image: getBlogPostImage("socialMediaManagement"),
    featured: true,
    tags: ["local-jobs", "hiring-near-me"],
  },
  {
    id: 15,
    title: "Side Hustles for Every Age and Profession: The Complete 2024 Guide",
    excerpt:
      "A specialised guide covering side hustles for 18-year-olds, teens, professionals, and blue-collar workers.",
    content: `
      <p>This article covers side hustles tailored to specific demographics, professions and circumstances.</p>
      <p>See the full guide on its dedicated page for detailed breakdowns.</p>
    `,
    category: "Specialized Side Hustles",
    readTime: "22 min read",
    author: "Sarah Chen",
    date: "Dec 20, 2024",
    image: getBlogPostImage("sideHustleIdeas"),
    featured: false,
    tags: ["side-hustles", "specialized", "seo", "2024-guide"],
  },
]

/* ---------- Helper functions ---------- */

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) => post.category.toLowerCase() === category.toLowerCase())
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.featured)
}

export function getRecentPosts(limit = 5): BlogPost[] {
  return blogPosts
    .slice() // shallow copy so original isn't mutated
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit)
}
