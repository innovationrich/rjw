import type { Metadata } from "next"

// Dummy blog post data for demonstration purposes
// In a real application, this data would come from a CMS, database, or markdown files.
export const blogPosts = [
  {
    id: "1",
    title: "10 Profitable Side Hustles You Can Start This Weekend",
    slug: "10-profitable-side-hustles-you-can-start-this-weekend",
    date: "2024-07-15",
    category: "Online Side Hustles",
    excerpt: "Discover easy-to-start side hustles that can boost your income quickly.",
    content: `
      <p>This is the full content for the first blog post. It covers various online side hustles like:</p>
      <ul>
        <li>Freelance writing</li>
        <li>Social media management</li>
        <li>Online tutoring</li>
        <li>Dropshipping</li>
      </ul>
      <p>Each idea includes tips on how to get started and potential earnings.</p>
    `,
    image: "/online-side-hustles.png",
    alt: "Person working on laptop with money icons",
  },
  {
    id: "2",
    title: "The Complete Guide to Passive Income: 15 Proven Strategies for 2024",
    slug: "the-complete-guide-to-passive-income-15-proven-strategies-for-2024",
    date: "2024-07-10",
    category: "Passive Income",
    excerpt: "Learn how to build wealth that works for you, even while you sleep.",
    content: `
      <p>This guide dives deep into passive income strategies, including:</p>
      <ul>
        <li>Dividend investing</li>
        <li>Real estate crowdfunding</li>
        <li>Creating digital products</li>
        <li>Affiliate marketing</li>
      </ul>
      <p>Understand the pros and cons of each and how to get started.</p>
    `,
    image: "/passive-income-growth.png",
    alt: "Financial growth chart with coins",
  },
  {
    id: "3",
    title: "Gig Work Near Me: The Complete Guide to Finding Local & Remote Opportunities",
    slug: "gig-work-near-me-the-complete-guide-to-finding-local-remote-opportunities",
    date: "2024-07-08",
    category: "Gig Economy",
    excerpt: "Explore flexible work options from local delivery to remote tasks.",
    content: `
      <p>Find out about various gig economy jobs, both local and remote:</p>
      <ul>
        <li>Food delivery apps (DoorDash, Uber Eats)</li>
        <li>Ridesharing (Uber, Lyft)</li>
        <li>Task-based apps (TaskRabbit)</li>
        <li>Online freelancing platforms</li>
      </ul>
      <p>Tips for maximizing your earnings and staying safe.</p>
    `,
    image: "/gig-work-juggler.png",
    alt: "Person juggling multiple tasks representing gig work",
  },
  {
    id: "4",
    title: "Jobs Hiring Near Me With No Experience – Where to Apply in 2025",
    slug: "jobs-hiring-near-me-with-no-experience-where-to-apply-in-2025",
    date: "2024-07-05",
    category: "Entry-Level Jobs",
    excerpt: "Discover entry-level positions that don't require prior work history.",
    content: `
      <p>This article focuses on finding jobs for those with no experience:</p>
      <ul>
        <li>Retail and customer service</li>
        <li>Food service</li>
        <li>Entry-level administrative roles</li>
        <li>Apprenticeships and training programs</li>
      </ul>
      <p>Tips for writing a compelling resume and acing interviews.</p>
    `,
    image: "/new-job-start.png",
    alt: "Person starting a new job",
  },
  {
    id: "5",
    title: "The Ultimate Guide to Local Jobs Hiring Near Me: Every Industry, Every Age Group",
    slug: "the-ultimate-guide-to-local-jobs-hiring-near-me-every-industry-every-age-group",
    date: "2024-07-03",
    category: "Local Job Search",
    excerpt: "Your comprehensive resource for finding local employment opportunities.",
    content: `
      <p>A detailed guide to local job markets:</p>
      <ul>
        <li>Healthcare support</li>
        <li>Construction</li>
        <li>Hospitality</li>
        <li>Education</li>
      </ul>
      <p>Includes advice for different age groups and skill levels.</p>
    `,
    image: "/local-job-search.png",
    alt: "Map with job search pins",
  },
  {
    id: "6",
    title: "How I Built a $5,000/Month Passive Income Stream",
    slug: "how-i-built-a-5000-month-passive-income-stream",
    date: "2024-06-28",
    category: "Passive Income",
    excerpt: "A personal case study on achieving significant passive income.",
    content: `
      <p>This post shares a personal journey of building a passive income stream:</p>
      <ul>
        <li>Initial investment and strategy</li>
        <li>Challenges faced and overcome</li>
        <li>Tools and resources used</li>
        <li>Scaling the income stream</li>
      </ul>
      <p>Practical advice for aspiring passive income earners.</p>
    `,
    image: "/financial-growth-coins.png",
    alt: "Stack of coins representing financial growth",
  },
  {
    id: "7",
    title: "The Complete Guide to Freelancing Success in 2024",
    slug: "the-complete-guide-to-freelancing-success-in-2024",
    date: "2024-06-25",
    category: "Freelancing",
    excerpt: "Everything you need to know to thrive as an independent professional.",
    content: `
      <p>A comprehensive guide for freelancers:</p>
      <ul>
        <li>Finding clients and projects</li>
        <li>Setting rates and managing finances</li>
        <li>Building a strong portfolio</li>
        <li>Marketing yourself effectively</li>
      </ul>
      <p>Tips for long-term success in the freelance world.</p>
    `,
    image: "/freelance-writing-workspace.png",
    alt: "Person working on a laptop in a home office",
  },
  {
    id: "8",
    title: "Digital Products That Actually Sell: 7 Proven Ideas",
    slug: "digital-products-that-actually-sell-7-proven-ideas",
    date: "2024-06-20",
    category: "Digital Products",
    excerpt: "Explore profitable digital product ideas you can create and sell online.",
    content: `
      <p>This article explores various digital product ideas:</p>
      <ul>
        <li>E-books and guides</li>
        <li>Online courses</li>
        <li>Templates and printables</li>
        <li>Stock photos and videos</li>
      </ul>
      <p>Steps to create, market, and sell your digital products.</p>
    `,
    image: "/digital-products-collage.png",
    alt: "Collage of digital products like e-books and courses",
  },
  {
    id: "9",
    title: "From Zero to $3K: My Dropshipping Journey",
    slug: "from-zero-to-3k-my-dropshipping-journey",
    date: "2024-06-18",
    category: "Ecommerce",
    excerpt: "A step-by-step account of building a successful dropshipping business.",
    content: `
      <p>A personal story of starting a dropshipping business:</p>
      <ul>
        <li>Niche selection and product research</li>
        <li>Setting up an online store</li>
        <li>Marketing strategies</li>
        <li>Overcoming challenges and scaling</li>
      </ul>
      <p>Insights for aspiring e-commerce entrepreneurs.</p>
    `,
    image: "/e-commerce-concept.png",
    alt: "E-commerce shopping cart with products",
  },
  {
    id: "10",
    title: "YouTube Monetization: Beyond Ad Revenue",
    slug: "youtube-monetization-beyond-ad-revenue",
    date: "2024-06-15",
    category: "Content Creation",
    excerpt: "Discover diverse ways to earn money from your YouTube channel.",
    content: `
      <p>This article explores various ways to monetize a YouTube channel:</p>
      <ul>
        <li>Affiliate marketing</li>
        <li>Brand sponsorships</li>
        <li>Selling merchandise</li>
        <li>Patreon and crowdfunding</li>
      </ul>
      <p>Strategies for growing your audience and income on YouTube.</p>
    `,
    image: "/content-creation-workspace.png",
    alt: "Person editing video on a computer",
  },
  {
    id: "11",
    title: "Virtual Assistant Mastery: From $10 to $50/Hour",
    slug: "virtual-assistant-mastery-from-10-to-50-hour",
    date: "2024-06-12",
    category: "Freelancing",
    excerpt: "A guide to scaling your virtual assistant services and income.",
    content: `
      <p>Learn how to become a highly paid virtual assistant:</p>
      <ul>
        <li>Identifying high-demand skills</li>
        <li>Finding premium clients</li>
        <li>Setting competitive rates</li>
        <li>Building a strong reputation</li>
      </ul>
      <p>Tips for long-term career growth as a VA.</p>
    `,
    image: "/digital-asset-recovery.png",
    alt: "Person working on a laptop with digital assets",
  },
  {
    id: "12",
    title: "Social Media Management: $2K-$5K Monthly Clients",
    slug: "social-media-management-2k-5k-monthly-clients",
    date: "2024-06-10",
    category: "Content Creation",
    excerpt: "How to land high-paying social media management clients.",
    content: `
      <p>This guide focuses on building a profitable social media management business:</p>
      <ul>
        <li>Crafting compelling proposals</li>
        <li>Client acquisition strategies</li>
        <li>Delivering measurable results</li>
        <li>Scaling your agency</li>
      </ul>
      <p>Insights for aspiring social media managers.</p>
    `,
    image: "/digital-marketing-strategy-board.png",
    alt: "Digital marketing strategy board",
  },
  {
    id: "13",
    title: "Remote Side Hustle Jobs: The Ultimate Guide",
    slug: "remote-side-hustle-jobs-the-ultimate-guide",
    date: "2024-06-05",
    category: "Online Side Hustles",
    excerpt: "Comprehensive guide to finding and succeeding in remote side hustles.",
    content: `
      <p>Explore a wide range of remote side hustle opportunities:</p>
      <ul>
        <li>Online surveys and microtasks</li>
        <li>Virtual tutoring and teaching</li>
        <li>Customer service roles</li>
        <li>Data entry and transcription</li>
      </ul>
      <p>Tips for setting up your home office and staying productive.</p>
    `,
    image: "/online-side-hustles.png",
    alt: "Person working on laptop with money icons",
  },
  {
    id: "14",
    title: "Side Hustles for Teachers: Leverage Your Expertise",
    slug: "side-hustles-for-teachers-leverage-your-expertise",
    date: "2024-06-01",
    category: "Specialized Side Hustles",
    excerpt: "Discover ways teachers can use their skills for extra income.",
    content: `
      <p>This article highlights side hustles tailored for teachers:</p>
      <ul>
        <li>Online course creation</li>
        <li>Tutoring and test prep</li>
        <li>Curriculum development</li>
        <li>Educational consulting</li>
      </ul>
      <p>How to transition teaching skills into profitable ventures.</p>
    `,
    image: "/specialized-skills.png",
    alt: "Person demonstrating specialized skills",
  },
  {
    id: "15",
    title: "Mastering Digital Marketing: SMM, Content, & Influencer",
    slug: "mastering-digital-marketing-smm-content-influencer",
    date: "2024-05-28",
    category: "Content Creation",
    excerpt: "A deep dive into digital marketing strategies for side hustlers.",
    content: `
      <p>This post covers key aspects of digital marketing:</p>
      <ul>
        <li>Social Media Marketing (SMM)</li>
        <li>Content Marketing strategies</li>
        <li>Working with influencers</li>
        <li>SEO basics for content creators</li>
      </ul>
      <p>How to effectively promote your side hustle online.</p>
    `,
    image: "/digital-marketing-strategy-board.png",
    alt: "Digital marketing strategy board",
  },
  {
    id: "16",
    title: "Creative & Design Side Hustles: Photography, Graphic Design & More",
    slug: "creative-design-side-hustles-photography-graphic-design-more",
    date: "2024-05-25",
    category: "Creative & Design",
    excerpt: "Turn your artistic talents into profitable side income.",
    content: `
      <p>Explore creative side hustles for artists and designers:</p>
      <ul>
        <li>Freelance graphic design</li>
        <li>Selling stock photography</li>
        <li>Custom illustration services</li>
        <li>Web design for small businesses</li>
      </ul>
      <p>Tips for building a portfolio and finding clients.</p>
    `,
    image: "/creative-designer.png",
    alt: "Person working on graphic design",
  },
  {
    id: "17",
    title: "Delivery & Gig App Side Hustles: DoorDash, Uber Eats & More",
    slug: "delivery-gig-app-side-hustles-doordash-uber-eats-more",
    date: "2024-05-20",
    category: "Delivery & Gig Apps",
    excerpt: "A guide to earning money with popular delivery and gig economy apps.",
    content: `
      <p>This article covers popular delivery and gig apps:</p>
      <ul>
        <li>DoorDash and Uber Eats for food delivery</li>
        <li>Instacart for grocery shopping</li>
        <li>Shipt for personal shopping</li>
        <li>Amazon Flex for package delivery</li>
      </ul>
      <p>Tips for maximizing earnings and understanding the platforms.</p>
    `,
    image: "/food-delivery-smartphone.png",
    alt: "Smartphone with food delivery app",
  },
  {
    id: "18",
    title: "Healthcare Side Hustles: Nursing & Medical Opportunities",
    slug: "healthcare-side-hustles-nursing-medical-opportunities",
    date: "2024-05-18",
    category: "Healthcare Side Hustles",
    excerpt: "Explore flexible and lucrative side hustles for healthcare professionals.",
    content: `
      <p>Discover side hustles for those in the healthcare field:</p>
      <ul>
        <li>Telehealth consulting</li>
        <li>Medical writing and editing</li>
        <li>Private duty nursing</li>
        <li>Health coaching</li>
      </ul>
      <p>How to leverage your medical expertise for additional income.</p>
    `,
    image: "/medical-professional-laptop.png",
    alt: "Medical professional working on a laptop",
  },
  {
    id: "19",
    title: "Investing for Beginners: Start Your Wealth Journey",
    slug: "investing-for-beginners-start-your-wealth-journey",
    date: "2024-05-15",
    category: "Investing",
    excerpt: "A simple guide to getting started with investing for long-term growth.",
    content: `
      <p>This guide simplifies investing for beginners:</p>
      <ul>
        <li>Understanding stocks, bonds, and mutual funds</li>
        <li>Setting financial goals</li>
        <li>Choosing a brokerage account</li>
        <li>Basic investment strategies</li>
      </ul>
      <p>Tips for building a diversified portfolio.</p>
    `,
    image: "/digital-coins-piggy-bank.png",
    alt: "Digital coins falling into a piggy bank",
  },
]

export function getAllPosts() {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPosts(limit?: number) {
  const sortedPosts = getAllPosts()
  return limit ? sortedPosts.slice(0, limit) : sortedPosts
}

// Return the N most-recent posts (default 5), keeping the original order newest→oldest
export function getRecentPosts(limit = 5) {
  return getAllPosts().slice(0, limit)
}

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}

export function getPostById(id: string) {
  return blogPosts.find((post) => post.id === id)
}

export function getRelatedPosts(currentPostSlug: string, limit = 3) {
  const currentPost = getPostBySlug(currentPostSlug)
  if (!currentPost) return []

  const related = blogPosts.filter((post) => post.category === currentPost.category && post.slug !== currentPostSlug)

  // If not enough related posts from the same category, fill with other recent posts
  if (related.length < limit) {
    const otherPosts = blogPosts.filter((post) => post.slug !== currentPostSlug && !related.includes(post))
    return [...related, ...otherPosts].slice(0, limit)
  }

  return related.slice(0, limit)
}

export function getPostsByCategory(categorySlug: string) {
  const normalizedCategorySlug = categorySlug.toLowerCase().replace(/-/g, " ")
  return blogPosts.filter((post) => post.category.toLowerCase().replace(/\s+/g, " ") === normalizedCategorySlug)
}

export function getAllCategories() {
  const categoriesMap = new Map<string, { name: string; count: number }>()

  blogPosts.forEach((post) => {
    const categoryName = post.category
    if (categoriesMap.has(categoryName)) {
      categoriesMap.get(categoryName)!.count++
    } else {
      categoriesMap.set(categoryName, { name: categoryName, count: 1 })
    }
  })

  return Array.from(categoriesMap.values()).map((category) => ({
    ...category,
    slug: category.name.toLowerCase().replace(/\s+/g, "-"),
  }))
}

// Type definition for blog posts
export type BlogPost = (typeof blogPosts)[0]

// Type definition for category metadata
export type CategoryMetadata = Metadata & {
  title: string
  description: string
}
