// Job API integration service
export interface JobSearchParams {
  keywords?: string
  location?: string
  jobType?: string
  page?: number
  limit?: number
}

export interface JobListing {
  id: string
  title: string
  company: string
  location: string
  salary?: string
  jobType: string // e.g., "full-time", "part-time", "contract"
  postedDate: string
  description: string
  requirements: string[]
  benefits?: string[]
  applyUrl?: string
  source: string // e.g., "SerpApi (Google Jobs)", "direct"
}

export interface JobSearchResponse {
  jobs: JobListing[]
  totalCount: number
  currentPage: number
  totalPages: number
}

// Mock job data for demonstration
const mockJobs: JobListing[] = [
  {
    id: "mock-1",
    title: "Warehouse Associate",
    company: "Amazon Fulfillment",
    location: "Houston, TX",
    salary: "$15-18/hour",
    jobType: "full-time",
    postedDate: "2024-01-20",
    description:
      "Join our fast-paced warehouse team. We are looking for reliable individuals to help with order fulfillment, inventory management, and shipping operations.",
    requirements: [
      "Ability to lift up to 50 lbs",
      "High school diploma or equivalent",
      "Previous warehouse experience preferred",
      "Ability to work in a fast-paced environment",
    ],
    benefits: ["Health Insurance", "Paid Time Off", "Career Growth"],
    source: "direct",
  },
  {
    id: "mock-2",
    title: "Customer Service Representative",
    company: "Call Center Solutions",
    location: "Remote",
    salary: "$14-16/hour",
    jobType: "part-time",
    postedDate: "2024-01-19",
    description:
      "Provide excellent customer service via phone, email, and chat. Help customers with inquiries, complaints, and technical support.",
    requirements: [
      "Excellent communication skills",
      "Computer proficiency",
      "Customer service experience preferred",
      "Quiet home office space for remote work",
    ],
    benefits: ["Flexible Schedule", "Training Provided", "Work From Home"],
    source: "direct",
  },
  {
    id: "mock-3",
    title: "Retail Sales Associate",
    company: "Target",
    location: "Chicago, IL",
    salary: "$13-15/hour",
    jobType: "part-time",
    postedDate: "2024-01-18",
    description:
      "Help customers find products, process transactions, and maintain store appearance. Great opportunity for those starting their retail career.",
    requirements: [
      "Friendly and outgoing personality",
      "Basic math skills",
      "Ability to stand for extended periods",
      "Weekend availability required",
    ],
    benefits: ["Employee Discount", "Flexible Hours", "Team Environment"],
    source: "direct",
  },
  {
    id: "mock-4",
    title: "Food Service Worker",
    company: "McDonald's",
    location: "Phoenix, AZ",
    salary: "$12-14/hour",
    jobType: "part-time",
    postedDate: "2024-01-17",
    description:
      "Join our team in providing fast, friendly service. Responsibilities include taking orders, preparing food, and maintaining cleanliness.",
    requirements: [
      "Ability to work in fast-paced environment",
      "Food safety knowledge preferred",
      "Flexible schedule availability",
      "Team player attitude",
    ],
    benefits: ["Free Meals", "Flexible Schedule", "Advancement Opportunities"],
    source: "direct",
  },
  {
    id: "mock-5",
    title: "Construction Laborer",
    company: "BuildRight Construction",
    location: "Atlanta, GA",
    salary: "$16-20/hour",
    jobType: "full-time",
    postedDate: "2024-01-16",
    description:
      "Entry-level construction position. Learn valuable skills while working on residential and commercial projects.",
    requirements: [
      "Physical fitness and stamina",
      "Willingness to learn",
      "Reliable transportation",
      "Safety-conscious mindset",
    ],
    benefits: ["Health Insurance", "Paid Training", "Tool Allowance"],
    source: "direct",
  },
]

// This function fetches jobs from SerpApi's Google Jobs API
async function fetchJobsFromSerpApi(params: JobSearchParams): Promise<JobListing[]> {
  // Use the environment variable for the API key
  const apiKey = process.env.SERPAPI_API_KEY

  if (!apiKey) {
    console.warn("SERPAPI_API_KEY is not set. Using mock data for SerpApi.")
    // Return a subset of mock jobs to simulate SerpApi results
    return mockJobs
      .filter((job) => job.source === "direct")
      .slice(0, 2)
      .map((job) => ({
        ...job,
        id: `serp-${job.id}`, // Prefix to avoid ID conflicts with mock data
        source: "SerpApi (Google Jobs)",
        applyUrl: `https://careers.google.com/jobs/results/${job.id}`, // Example apply URL
      }))
  }

  const query = params.keywords || ""
  const location = params.location || ""
  const jobType = params.jobType && params.jobType !== "all" ? params.jobType : ""

  const searchParams = new URLSearchParams({
    api_key: apiKey,
    engine: "google_jobs", // Use the Google Jobs API engine
    q: `${query} ${jobType} jobs`.trim(), // Combine keywords and job type for the query
    location: location,
    hl: "en", // Host language
    gl: "us", // Geolocation
    google_domain: "google.com", // Ensure this is set for Google Jobs
    start: String(((params.page || 1) - 1) * (params.limit || 10)), // Pagination offset
    num: String(params.limit || 10), // Number of results
  })

  const url = `https://serpapi.com/search.json?${searchParams.toString()}`

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // Cache control to prevent excessive API calls during development
      next: { revalidate: 3600 }, // Revalidate every hour
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error("SerpApi error:", errorData)
      throw new Error(`SerpApi error: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()
    console.log("SerpApi response:", data)

    // Assuming SerpApi's Google Jobs API returns results in `jobs_results`
    // The structure might vary, so adjust mapping as needed based on actual API response
    const serpApiJobs: any[] = data.jobs_results || []

    return serpApiJobs.map((job: any) => ({
      id: job.job_id || job.title + job.company_name + job.location, // Use a unique ID
      title: job.title,
      company: job.company_name,
      location: job.location,
      salary: job.salary,
      jobType: job.detected_extensions?.job_type || "unknown", // Extract job type if available
      postedDate: job.posted_date || "N/A",
      description: job.description,
      requirements: job.qualifications || [], // Assuming qualifications are an array
      benefits: job.benefits || [],
      applyUrl: job.apply_link || job.link, // Use apply_link or general link
      source: "SerpApi (Google Jobs)",
    }))
  } catch (error) {
    console.error("Failed to fetch from SerpApi:", error)
    return [] // Return empty array on error
  }
}

export async function searchJobs(params: JobSearchParams): Promise<JobSearchResponse> {
  // Simulate API delay for mock data
  await new Promise((resolve) => setTimeout(resolve, 500))

  let combinedJobs: JobListing[] = []

  // Filter mock jobs by keywords
  let filteredMockJobs = [...mockJobs]
  if (params.keywords) {
    const keywords = params.keywords.toLowerCase()
    filteredMockJobs = filteredMockJobs.filter(
      (job) =>
        job.title.toLowerCase().includes(keywords) ||
        job.company.toLowerCase().includes(keywords) ||
        job.description.toLowerCase().includes(keywords),
    )
  }

  // Filter mock jobs by location
  if (params.location) {
    const location = params.location.toLowerCase()
    filteredMockJobs = filteredMockJobs.filter((job) => job.location.toLowerCase().includes(location))
  }

  // Filter mock jobs by job type
  if (params.jobType && params.jobType !== "all") {
    filteredMockJobs = filteredMockJobs.filter((job) => job.jobType === params.jobType)
  }

  combinedJobs = [...filteredMockJobs]

  // Attempt to fetch from SerpApi
  const serpApiJobs = await fetchJobsFromSerpApi(params)
  combinedJobs = [...combinedJobs, ...serpApiJobs]

  // Deduplicate jobs if necessary (e.g., if multiple sources return the same job)
  // Using a simple ID-based deduplication. You might need a more robust method
  // if IDs are not globally unique across all sources.
  const uniqueJobs = Array.from(new Map(combinedJobs.map((job) => [job.id, job])).values())

  // Pagination for the combined and unique results
  const page = params.page || 1
  const limit = params.limit || 10
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  const paginatedJobs = uniqueJobs.slice(startIndex, endIndex)

  return {
    jobs: paginatedJobs,
    totalCount: uniqueJobs.length,
    currentPage: page,
    totalPages: Math.ceil(uniqueJobs.length / limit),
  }
}

// This function is now primarily for internal use by searchJobs
export async function searchJobsFromAPIs(params: JobSearchParams): Promise<JobSearchResponse> {
  // This would integrate with real job board APIs
  // For now, it's called by searchJobs to combine results
  return searchJobs(params)
}
