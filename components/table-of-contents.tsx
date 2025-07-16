import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { List } from "lucide-react"

export function TableOfContents() {
  return (
    <Card className="mb-8 border-orange-200">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <List className="w-5 h-5 text-orange-600" />
          <h3 className="text-lg font-semibold text-gray-900">Table of Contents</h3>
        </div>
        <ul className="space-y-2">
          <li>
            <Link href="#virtual-assistant" className="text-gray-700 hover:text-orange-600 transition-colors">
              1. Virtual Assistant Side Hustle
            </Link>
          </li>
          <li>
            <Link href="#online-tutoring" className="text-gray-700 hover:text-orange-600 transition-colors">
              2. Online Tutoring Side Hustle
            </Link>
          </li>
          <li>
            <Link href="#freelance-writing" className="text-gray-700 hover:text-orange-600 transition-colors">
              3. Freelance Writing Side Hustle
            </Link>
          </li>
          <li>
            <Link href="#social-media-management" className="text-gray-700 hover:text-orange-600 transition-colors">
              4. Social Media Management
            </Link>
          </li>
          <li>
            <Link href="#graphic-design" className="text-gray-700 hover:text-orange-600 transition-colors">
              5. Graphic Design Side Hustle
            </Link>
          </li>
          <li>
            <Link href="#delivery-services" className="text-gray-700 hover:text-orange-600 transition-colors">
              6. Delivery Side Hustle
            </Link>
          </li>
          <li>
            <Link href="#healthcare-side-hustles" className="text-gray-700 hover:text-orange-600 transition-colors">
              7. Nursing Side Hustle
            </Link>
          </li>
          <li>
            <Link href="#real-estate" className="text-gray-700 hover:text-orange-600 transition-colors">
              8. Real Estate Side Hustle
            </Link>
          </li>
          <li>
            <Link href="#proofreading" className="text-gray-700 hover:text-orange-600 transition-colors">
              9. Proofreading Side Hustle
            </Link>
          </li>
          <li>
            <Link href="#photography" className="text-gray-700 hover:text-orange-600 transition-colors">
              10. Photography Side Hustle
            </Link>
          </li>
          <li>
            <Link href="#bonus-side-hustles" className="text-gray-700 hover:text-orange-600 transition-colors">
              Bonus Side Hustles Worth Exploring
            </Link>
          </li>
          <li>
            <Link href="#getting-started" className="text-gray-700 hover:text-orange-600 transition-colors">
              How to Choose the Right Side Hustle
            </Link>
          </li>
          <li>
            <Link href="#legal-considerations" className="text-gray-700 hover:text-orange-600 transition-colors">
              Legal Considerations
            </Link>
          </li>
        </ul>
      </CardContent>
    </Card>
  )
}
