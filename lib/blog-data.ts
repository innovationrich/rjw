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

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 Profitable Side Hustles You Can Start This Weekend",
    excerpt:
      "Discover legitimate ways to earn extra money with minimal startup costs and flexible schedules. From virtual assistance to online tutoring, these opportunities require no special skills to get started.",
    content: `
      <p>Starting a side hustle doesn't have to be complicated or require months of preparation. In fact, some of the most profitable side hustles can be launched in just a weekend with minimal upfront investment.</p>
      
      <p>In this comprehensive guide, I'll share 10 proven side hustles that you can start immediately, along with realistic income expectations and step-by-step instructions to get you started.</p>
      
      <h2>1. Virtual Assistant Services</h2>
      <p>Virtual assistance is one of the fastest-growing side hustles, with demand increasing by 41% year-over-year. As a virtual assistant, you can offer services like email management, social media scheduling, data entry, and customer support.</p>
      
      <p><strong>Potential Earnings:</strong> $15-50 per hour</p>
      <p><strong>Getting Started:</strong> Create profiles on Upwork, Fiverr, and Belay. Highlight any administrative experience you have.</p>
      
      <h2>2. Online Tutoring</h2>
      <p>With the rise of remote learning, online tutoring has become incredibly lucrative. You can teach anything from academic subjects to musical instruments or languages.</p>
      
      <p><strong>Potential Earnings:</strong> $20-80 per hour</p>
      <p><strong>Getting Started:</strong> Sign up for platforms like Wyzant, Tutor.com, or Preply. Create a compelling profile showcasing your expertise.</p>
    `,
    category: "Online Side Hustles",
    readTime: "15 min read",
    author: "Alex Johnson",
    date: "Dec 15, 2024",
    image: getBlogPostImage("sideHustleIdeas"),
    featured: true,
    tags: ["beginner-friendly", "weekend-start", "multiple-income", "remote-work"],
  },
  {
    id: 2,
    title: "The Complete Guide to Passive Income: 15 Proven Strategies for 2024",
    excerpt:
      "Master the art of passive income with this comprehensive guide covering real estate, dividend stocks, apps, franchises, and specialized opportunities for professionals. Start building wealth that works while you sleep.",
    content: `
      <p>Passive income is the holy grail of financial freedom – money that flows into your bank account with minimal ongoing effort. In this comprehensive guide, we'll explore 15 proven passive income strategies that can help you build wealth while you sleep.</p>
      
      <h2>What is Passive Income?</h2>
      <p>Passive income refers to earnings that require little to no daily effort to maintain. Unlike active income from a traditional job, passive income streams continue generating money even when you're not actively working.</p>
      
      <h2>1. Real Estate Passive Income</h2>
      <p>Real estate remains one of the most reliable sources of passive income. Here's how to invest in real estate for passive income:</p>
      
      <h3>Rental Properties</h3>
      <p>Owning rental properties provides monthly cash flow through rent payments. The key is finding properties in growing markets with strong rental demand.</p>
      
      <h3>Real Estate Investment Trusts (REITs)</h3>
      <p>REITs allow you to invest in real estate without directly owning property. They typically pay dividends of 4-8% annually and trade like stocks.</p>
      
      <h3>Passive Income from Land</h3>
      <p>Raw land can generate passive income through:</p>
      <ul>
        <li>Agricultural leasing to farmers</li>
        <li>Billboard advertising rights</li>
        <li>Cell tower leasing</li>
        <li>Hunting and recreation leases</li>
        <li>Solar panel installations</li>
      </ul>
      
      <h2>2. Dividend Stocks and ETFs</h2>
      <p>Building a portfolio of dividend-paying stocks creates a steady income stream. The best dividend stocks for passive income typically include:</p>
      
      <h3>Dividend ETFs for Passive Income</h3>
      <p>Dividend ETFs offer diversification and professional management. Popular options include:</p>
      <ul>
        <li>Vanguard Dividend Appreciation ETF (VIG)</li>
        <li>SPDR S&P Dividend ETF (SDY)</li>
        <li>iShares Select Dividend ETF (DVY)</li>
        <li>Schwab US Dividend Equity ETF (SCHD)</li>
      </ul>
      
      <p>These dividend ETFs typically yield 2-4% annually and provide exposure to hundreds of dividend-paying companies.</p>
    `,
    category: "Passive Income",
    readTime: "18 min read",
    author: "Sarah Chen",
    date: "Dec 16, 2024",
    image: getBlogPostImage("passiveIncomeStreams"),
    featured: true,
    tags: ["passive-income", "investing", "real-estate", "dividend-stocks", "comprehensive-guide"],
  },
  {
    id: 3,
    title: "Gig Work Near Me: The Complete Guide to Finding Local & Remote Opportunities",
    excerpt:
      \"Discover the best gig work opportunities in major cities and online. From delivery apps to specialized professional gigs, learn how
