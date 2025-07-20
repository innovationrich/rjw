import type { Metadata } from "some-module" // Assuming Metadata is imported from a module

// Define a type for your blog post structure
export type BlogPost = {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string // YYYY-MM-DD format
  readTime: string
  category: string
  image?: string // Optional image URL
  alt?: string // Alt text for the image
  tags?: string[] // Optional tags
}

// Dummy blog post data for demonstration purposes
// In a real application, this data would come from a CMS, database, or markdown files.
export const blogPosts: BlogPost[] = [
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
    readTime: "10 min read",
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
    readTime: "8 min read",
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
    readTime: "7 min read",
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
    readTime: "6 min read",
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
    readTime: "8 min read",
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
    readTime: "9 min read",
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
    readTime: "7 min read",
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
    readTime: "6 min read",
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
    readTime: "8 min read",
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
    readTime: "7 min read",
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
    readTime: "6 min read",
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
    readTime: "7 min read",
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
    readTime: "8 min read",
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
    readTime: "7 min read",
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
    readTime: "7 min read",
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
    readTime: "6 min read",
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
    readTime: "5 min read",
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
    readTime: "7 min read",
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
    readTime: "6 min read",
  },
  {
    id: "20",
    title: "Accounts Payable Job Description: Roles, Responsibilities, and Career Outlook",
    slug: "accounts-payable-job-description-roles-responsibilities-career-outlook",
    date: "2025-07-20", // Current date
    category: "Entry-Level Jobs", // Most fitting category
    excerpt:
      "Discover the complete accounts payable job description, responsibilities, and career outlook. Learn what duties are involved in AP roles and how they contribute to a business’s success.",
    content: `
      <p>In any well-run business, the accounts payable (AP) department plays a critical behind-the-scenes role in managing cash flow and maintaining strong relationships with vendors. If you're curious about what an accounts payable job description includes—or considering a career in this field—this guide breaks it down clearly and practically.</p>
      <p>Whether you're an employer crafting a job post or someone exploring a new opportunity, understanding the accounts payable job description and duties can help you set clear expectations and build an efficient AP process.</p>
      <h2>What Is Accounts Payable?</h2>
      <p>Accounts payable refers to the money a company owes to its suppliers or vendors for goods and services received. It’s listed as a liability on the balance sheet until the company pays the invoice.</p>
      <p>In real terms, the AP team ensures that payments are made accurately, on time, and with proper documentation. This makes them a key player in budgeting, cash flow management, and maintaining vendor trust.</p>
      <h2>Core Accounts Payable Job Description</h2>
      <p>A typical account payable job description includes several essential tasks, all centered around processing and managing a company’s financial obligations.</p>
      <p>Here’s a standard overview of the accounts payable job description responsibilities:</p>
      <h3>Primary Duties:</h3>
      <ul>
        <li><strong>Invoice Processing:</strong> Receive, review, and verify invoices for accuracy.</li>
        <li><strong>Vendor Management:</strong> Maintain vendor records and respond to inquiries or disputes.</li>
        <li><strong>Payment Processing:</strong> Schedule and process payments via checks, ACH, wire transfers, or other methods.</li>
        <li><strong>Recordkeeping:</strong> Ensure all financial transactions are properly recorded for auditing and compliance.</li>
        <li><strong>Expense Reporting:</strong> Assist in reconciling corporate credit cards and employee expense reports.</li>
        <li><strong>Reconciliation:</strong> Match invoices with purchase orders and delivery receipts; resolve discrepancies.</li>
        <li><strong>Compliance:</strong> Adhere to company policies and legal regulations concerning financial documentation and data security.</li>
        <li><strong>Month-End Close:</strong> Support financial reporting by preparing AP aging reports and reconciling accounts.</li>
      </ul>
      <h2>Accounts Payable Job Description and Duties (Expanded View)</h2>
      <p>The duties listed above only scratch the surface. Let’s take a deeper look into the day-to-day accounts payable job description and duties typically expected in a mid-sized to large organization:</p>
      <table>
        <thead>
          <tr>
            <th>Task Description</th>
            <th>Data Entry</th>
            <th>Accurately input invoice data into accounting software (e.g., QuickBooks, SAP, Oracle)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Three-Way Matching</td>
            <td>Ensure that invoices match purchase orders and receiving documents to prevent overpayment</td>
            <td></td>
          </tr>
          <tr>
            <td>1099 Preparation</td>
            <td>Track payments to independent contractors for year-end tax filings</td>
            <td></td>
          </tr>
          <tr>
            <td>Internal Collaboration</td>
            <td>Coordinate with procurement, finance, and receiving teams to resolve payment-related issues</td>
            <td></td>
          </tr>
          <tr>
            <td>Audit Support</td>
            <td>Prepare documentation for internal and external audits</td>
            <td></td>
          </tr>
          <tr>
            <td>Fraud Prevention</td>
            <td>Implement and follow internal controls to prevent fraudulent payments</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <p>These responsibilities ensure smooth operations across departments while upholding financial integrity.</p>
      <h2>Accounts Payable Accountant Job Description</h2>
      <p>The accounts payable accountant job description expands on the traditional AP clerk role by adding more analytical responsibilities. In some companies, this title reflects a mid- or senior-level position with oversight of more complex AP processes.</p>
      <h3>Typical Responsibilities of an Accounts Payable Accountant:</h3>
      <ul>
        <li>Perform detailed account analysis and reporting</li>
        <li>Review and reconcile vendor statements</li>
        <li>Assist with financial audits and tax preparation</li>
        <li>Work closely with the general ledger and treasury functions</li>
        <li>Develop and implement process improvements</li>
        <li>Train junior AP staff or manage small teams</li>
      </ul>
      <p>An accounts payable accountant often acts as a bridge between transactional processing and strategic financial planning.</p>
      <h2>Accounts Payable Job Description for a Resume (Sample)</h2>
      <p>If you're applying for a job in this field, your resume should reflect both technical skills and a clear understanding of the AP cycle. Here’s an example of how to phrase it:</p>
      <p><strong>Accounts Payable Specialist</strong><br />XYZ Corporation – Houston, TX<br />January 2022 – Present</p>
      <ul>
        <li>Processed 300+ invoices weekly with 98% accuracy rate</li>
        <li>Maintained relationships with 75+ vendors; resolved payment issues within 24 hours on average</li>
        <li>Collaborated with procurement to streamline purchase order workflows, reducing payment errors by 15%</li>
        <li>Supported month-end close with AP aging reports and reconciliations</li>
        <li>Assisted in onboarding new vendors and implemented fraud prevention checks</li>
      </ul>
      <p>This structure highlights impact, efficiency, and attention to detail—exactly what employers look for in AP roles.</p>
      <h2>Skills Required for Accounts Payable Roles</h2>
      <p>Regardless of the job title—whether you're an accounts payable clerk, specialist, or accountant—there are core skills that ensure success in this field:</p>
      <h3>Hard Skills:</h3>
      <ul>
        <li>Proficiency in accounting software (QuickBooks, SAP, NetSuite)</li>
        <li>Understanding of basic accounting principles (GAAP)</li>
        <li>Excel (VLOOKUP, Pivot Tables, formulas)</li>
        <li>Invoice and PO matching</li>
        <li>Reconciliation techniques</li>
      </ul>
      <h3>Soft Skills:</h3>
      <ul>
        <li>Attention to detail</li>
        <li>Strong communication (for dealing with vendors and internal teams)</li>
        <li>Time management and organizational skills</li>
        <li>Integrity and discretion</li>
        <li>Analytical thinking</li>
      </ul>
      <p>AP is a role where precision matters. Even a small mistake—like duplicating a payment—can have financial consequences. That’s why reliability and diligence are prized traits.</p>
      <h2>Career Growth & Salary Expectations</h2>
      <p>According to the U.S. Bureau of Labor Statistics and Glassdoor, entry-level AP clerks earn around $40,000–$50,000 annually, while experienced accounts payable accountants can earn $60,000–$80,000 or more depending on location, industry, and company size.</p>
      <h3>Career growth in AP can lead to:</h3>
      <ul>
        <li>Senior AP Specialist</li>
        <li>AP Manager or Supervisor</li>
        <li>Accounting Analyst</li>
        <li>Staff Accountant</li>
        <li>Controller or Director of Finance (with further education or CPA credentials)</li>
      </ul>
      <p>This pathway offers solid upward mobility for detail-oriented professionals who want to stay close to operational finance.</p>
      <h2>How Employers Can Write a Clear Accounts Payable Job Description</h2>
      <p>If you're hiring for this role, be specific and concise in your listing. Use keywords like:</p>
      <ul>
        <li>Accounts payable job description</li>
        <li>Accounts payable job description responsibilities</li>
        <li>Account payable job description</li>
        <li>Accounts payable accountant job description</li>
      </ul>
      <p>Here’s a quick sample for a job post:</p>
      <p><strong>Job Title:</strong> Accounts Payable Specialist<br /><strong>Location:</strong> Remote or On-site | Full-Time<br /><strong>Salary:</strong> $45,000–$55,000</p>
      <p><strong>Job Description:</strong><br />We are seeking an organized and detail-oriented Accounts Payable Specialist to join our finance team. The ideal candidate will be responsible for managing the full-cycle AP process including invoice processing, vendor communications, reconciliations, and assisting with monthly closings.</p>
      <h3>Responsibilities:</h3>
      <ul>
        <li>Process a high volume of invoices and expense reports</li>
        <li>Maintain vendor accounts and resolve payment issues</li>
        <li>Reconcile accounts and prepare AP reports</li>
        <li>Assist with audits and financial reporting</li>
      </ul>
      <h3>Requirements:</h3>
      <ul>
        <li>2+ years of experience in AP or similar accounting role</li>
        <li>Familiarity with accounting software</li>
        <li>Strong attention to detail and communication skills</li>
      </ul>
      <p>This makes it easy for job seekers and search engines to understand exactly what the job entails.</p>
      <h2>Conclusion: AP Roles Are the Backbone of Financial Operations</h2>
      <p>The accounts payable job description may not always sound glamorous, but it’s one of the most essential roles in any business that depends on reliable supplier relationships and accurate financial reporting.</p>
      <p>Whether you're looking to hire, apply, or simply better understand AP as a function, knowing the full scope of accounts payable job description and duties sets you up for smarter decisions and smoother operations.</p>
      <p>From invoice entry to strategic analysis, the value AP professionals bring to the table is both measurable and indispensable.</p>
    `,
    image: "/accounts-payable-review.png",
    alt: "Accounts payable professional reviewing invoices",
    tags: ["accounts payable", "job description", "finance", "accounting", "career outlook", "entry-level jobs"],
    readTime: "7 min read", // Estimated read time for 1500 words
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

// Type definition for category metadata
export type CategoryMetadata = Metadata & {
  title: string
  description: string
}
