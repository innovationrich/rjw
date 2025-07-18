export interface BlogPost {
  id: string
  title: string
  slug: string
  date: string
  category: string
  image: string
  excerpt: string
  content: string // Full content for individual blog post pages
}

export interface Category {
  name: string
  slug: string
}

// Mock data for blog posts
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Ultimate Guide to Freelance Writing",
    slug: "ultimate-guide-freelance-writing",
    date: "2023-10-26",
    category: "Freelancing",
    image: "/freelance-writing-workspace.png",
    excerpt: "Discover how to kickstart your freelance writing career and find high-paying clients.",
    content: "This is the full content for the ultimate guide to freelance writing...",
  },
  {
    id: "2",
    title: "Top 5 Digital Products to Sell Online",
    slug: "top-5-digital-products",
    date: "2023-11-01",
    category: "Digital Products",
    image: "/digital-products-collage.png",
    excerpt: "Explore profitable digital products you can create and sell from home.",
    content: "This is the full content for top 5 digital products...",
  },
  {
    id: "3",
    title: "Passive Income Strategies for Beginners",
    slug: "passive-income-strategies",
    date: "2023-11-10",
    category: "Passive Income",
    image: "/passive-income-growth.png",
    excerpt: "Learn how to build sustainable passive income streams with minimal effort.",
    content: "This is the full content for passive income strategies...",
  },
  {
    id: "4",
    title: "Getting Started with E-commerce: A Step-by-Step Guide",
    slug: "ecommerce-step-by-step",
    date: "2023-11-15",
    category: "Ecommerce",
    image: "/e-commerce-concept.png",
    excerpt: "Your comprehensive guide to launching a successful online store.",
    content: "This is the full content for e-commerce guide...",
  },
  {
    id: "5",
    title: "Creative Design Side Hustles for Artists",
    slug: "creative-design-side-hustles",
    date: "2023-11-20",
    category: "Creative Design",
    image: "/placeholder.jpg", // Assuming a placeholder for this one
    excerpt: "Turn your artistic skills into a profitable side hustle.",
    content: "This is the full content for creative design side hustles...",
  },
  {
    id: "6",
    title: "Content Creation: Tools and Tips for Success",
    slug: "content-creation-tools-tips",
    date: "2023-11-25",
    category: "Content Creation",
    image: "/content-creation-workspace.png",
    excerpt: "Master content creation with these essential tools and expert tips.",
    content: "This is the full content for content creation...",
  },
  {
    id: "7",
    title: "Navigating the Gig Economy: Best Practices",
    slug: "navigating-gig-economy",
    date: "2023-12-01",
    category: "Gig Economy",
    image: "/placeholder.jpg",
    excerpt: "Understand the gig economy and how to thrive in it.",
    content: "This is the full content for navigating the gig economy...",
  },
  {
    id: "8",
    title: "Delivery Gig Apps: Which One is Right for You?",
    slug: "delivery-gig-apps",
    date: "2023-12-05",
    category: "Delivery Gig Apps",
    image: "/placeholder.jpg",
    excerpt: "A comparison of popular delivery apps to help you choose.",
    content: "This is the full content for delivery gig apps...",
  },
  {
    id: "9",
    title: "Entry-Level Remote Jobs: Your Path to Working From Home",
    slug: "entry-level-remote-jobs",
    date: "2023-12-10",
    category: "Entry-Level Jobs",
    image: "/placeholder.jpg",
    excerpt: "Find your first remote job with this comprehensive guide.",
    content: "This is the full content for entry-level remote jobs...",
  },
  {
    id: "10",
    title: "Local Job Search Strategies That Work",
    slug: "local-job-search-strategies",
    date: "2023-12-15",
    category: "Local Job Search",
    image: "/local-job-search.png",
    excerpt: "Effective strategies for finding local employment opportunities.",
    content: "This is the full content for local job search...",
  },
  {
    id: "11",
    title: "Online Side Hustles: Make Money from Anywhere",
    slug: "online-side-hustles",
    date: "2023-12-20",
    category: "Online Side Hustles",
    image: "/online-side-hustles.png",
    excerpt: "A list of online side hustles you can start today.",
    content: "This is the full content for online side hustles...",
  },
  {
    id: "12",
    title: "Healthcare Side Hustles: Boost Your Income",
    slug: "healthcare-side-hustles",
    date: "2023-12-25",
    category: "Healthcare Side Hustles",
    image: "/placeholder.jpg",
    excerpt: "Opportunities for healthcare professionals to earn extra income.",
    content: "This is the full content for healthcare side hustles...",
  },
  {
    id: "13",
    title: "Investing for Beginners: A Simple Guide",
    slug: "investing-for-beginners",
    date: "2024-01-01",
    category: "Investing",
    image: "/placeholder.jpg",
    excerpt: "Start your investment journey with this easy-to-understand guide.",
    content: "This is the full content for investing for beginners...",
  },
  {
    id: "14",
    title: "Specialized Side Hustles: Niche Opportunities",
    slug: "specialized-side-hustles",
    date: "2024-01-05",
    category: "Specialized Side Hustles",
    image: "/placeholder.jpg",
    excerpt: "Explore unique and specialized ways to make money.",
    content: "This is the full content for specialized side hustles...",
  },
  {
    id: "15",
    title: "Understanding SEO for Bloggers",
    slug: "understanding-seo-for-bloggers",
    date: "2024-01-10",
    category: "Content Creation",
    image: "/placeholder.jpg",
    excerpt: "A guide to optimizing your blog posts for search engines.",
    content: "This is the full content for understanding SEO...",
  },
]

// Mock data for categories
export const categories: Category[] = [
  { name: "Content Creation", slug: "content-creation" },
  { name: "Creative Design", slug: "creative-design" },
  { name: "Delivery Gig Apps", slug: "delivery-gig-apps" },
  { name: "Digital Products", slug: "digital-products" },
  { name: "Ecommerce", slug: "ecommerce" },
  { name: "Entry-Level Jobs", slug: "entry-level-jobs" },
  { name: "Freelancing", slug: "freelancing" },
  { name: "Gig Economy", slug: "gig-economy" },
  { name: "Healthcare Side Hustles", slug: "healthcare-side-hustles" },
  { name: "Investing", slug: "investing" },
  { name: "Local Job Search", slug: "local-job-search" },
  { name: "Online Side Hustles", slug: "online-side-hustles" },
  { name: "Passive Income", slug: "passive-income" },
  { name: "Specialized Side Hustles", slug: "specialized-side-hustles" },
]

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts
}

export function getBlogPostById(id: string): BlogPost | undefined {
  return blogPosts.find((post) => post.id === id)
}

export function getBlogPostsByCategory(categorySlug: string): BlogPost[] {
  return blogPosts.filter((post) => post.category.toLowerCase().replace(/\s/g, "-") === categorySlug)
}

export function getAllCategories(): Category[] {
  return categories
}

export function getRecentPosts(count = 5): BlogPost[] {
  return [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, count)
}

export const getPostsByCategory = (category: string) => {
  return blogPosts.filter((post) => post.category === category)
}

export const getPostById = (id: string) => {
  return blogPosts.find((post) => post.id === id)
}
