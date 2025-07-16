// Stock photo URLs for different categories and topics
export const stockImages = {
  // Side Hustle Categories
  onlineSideHustles: [
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop", // Laptop work
    "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&h=600&fit=crop", // Online business
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop", // Digital workspace
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop", // Remote work
  ],

  passiveIncome: [
    "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=600&fit=crop", // Money growth
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop", // Investment charts
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop", // Financial planning
    "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop", // Passive income concept
  ],

  freelancing: [
    "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=600&fit=crop", // Freelancer workspace
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop", // Team collaboration
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop", // Creative work
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop", // Professional headshot
  ],

  ecommerce: [
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop", // E-commerce setup
    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop", // Online shopping
    "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop", // Shipping boxes
    "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=600&fit=crop", // Product photography
  ],

  contentCreation: [
    "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=600&fit=crop", // Content creation
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop", // Video creation
    "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop", // Social media
    "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=600&fit=crop", // Writing
  ],

  investing: [
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop", // Stock charts
    "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop", // Investment growth
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop", // Financial data
    "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=600&fit=crop", // Cryptocurrency
  ],

  // Hero and general images
  hero: [
    "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=1200&h=800&fit=crop", // Success concept
    "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1200&h=800&fit=crop", // Business growth
    "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&h=800&fit=crop", // Financial success
  ],

  // Specific blog post images
  blogPosts: {
    virtualAssistant: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=600&fit=crop",
    onlineTutoring: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    freelanceWriting: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=600&fit=crop",
    socialMediaManagement: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    dropshipping: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop",
    digitalProducts: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    youtubeMonetization: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
    passiveIncomeStreams: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=600&fit=crop",
    freelancingGuide: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop",
    sideHustleIdeas: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&h=600&fit=crop",
  },
}

// Helper function to get random image from category
export function getRandomImage(category: keyof typeof stockImages): string {
  const images = stockImages[category]
  if (Array.isArray(images)) {
    return images[Math.floor(Math.random() * images.length)]
  }
  return images
}

// Helper function to get specific blog post image
export function getBlogPostImage(postType: keyof typeof stockImages.blogPosts): string {
  return stockImages.blogPosts[postType]
}

// Helper function to get category icon image
export function getCategoryImage(category: string): string {
  const categoryKey = category.toLowerCase().replace(/\s+/g, "") as keyof typeof stockImages
  if (stockImages[categoryKey] && Array.isArray(stockImages[categoryKey])) {
    return (stockImages[categoryKey] as string[])[0]
  }
  return stockImages.onlineSideHustles[0] // fallback
}
