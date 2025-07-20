import { Search, MapPin, Clock } from "lucide-react"

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
