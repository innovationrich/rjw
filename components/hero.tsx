import { Search, MapPin, Clock } from "lucide-react"
import Image from "next/image" // Add this import

export function Hero() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {" "}
      {/* Modified section classes */}
      {/* Background Image with Opacity */}
      <Image
        src="/images/hero-banner.png" // Path to the generated image
        alt="Diverse workers in warehouse, retail, and customer service jobs, representing immediate hiring opportunities" // SEO-friendly alt text
        fill // Fills the parent element
        style={{ objectFit: "cover", opacity: 0.15 }} // Object fit cover, and opacity
        className="absolute inset-0 z-0" // Position absolutely, behind content
        priority // Load eagerly for LCP
      />
      {/* Gradient Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 opacity-80 z-10"></div>{" "}
      {/* Added gradient overlay */}
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        {/* Added relative z-20 */}
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Jobs Near Me Hiring <span className="text-blue-600">Immediately</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Find jobs near me hiring immediately. Search thousands of immediate hiring opportunities including
            warehouse, retail, fast food, and entry-level positions. Many positions require no experience and offer
            same-day interviews.
          </p>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3">
              <Clock className="h-8 w-8 text-blue-600" />
              <span className="text-lg font-semibold text-gray-700">Immediate Hiring</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="h-8 w-8 text-green-600" />
              <span className="text-lg font-semibold text-gray-700">Local Opportunities</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Search className="h-8 w-8 text-purple-600" />
              <span className="text-lg font-semibold text-gray-700">No Experience Required</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
