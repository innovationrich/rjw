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
        <ul className="space-y-2 text-sm">
          <li>
            <Link href="#side-hustles-18-year-olds" className="text-gray-700 hover:text-orange-600 transition-colors">
              Side Hustles for 18 Year Olds
            </Link>
          </li>
          <li>
            <Link href="#side-hustles-teens-online" className="text-gray-700 hover:text-orange-600 transition-colors">
              Side Hustles for Teens Online
            </Link>
          </li>
          <li>
            <Link href="#travel-agent-side-hustle" className="text-gray-700 hover:text-orange-600 transition-colors">
              Travel Agent Side Hustle
            </Link>
          </li>
          <li>
            <Link
              href="#nurse-practitioner-side-hustle"
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              Nurse Practitioner Side Hustle
            </Link>
          </li>
          <li>
            <Link href="#side-hustles-men" className="text-gray-700 hover:text-orange-600 transition-colors">
              Side Hustles for Men
            </Link>
          </li>
          <li>
            <Link href="#pickup-truck-side-hustle" className="text-gray-700 hover:text-orange-600 transition-colors">
              Pickup Truck Side Hustle
            </Link>
          </li>
          <li>
            <Link href="#side-hustles-like-doordash" className="text-gray-700 hover:text-orange-600 transition-colors">
              Side Hustles Like DoorDash
            </Link>
          </li>
          <li>
            <Link href="#lawyer-side-hustle" className="text-gray-700 hover:text-orange-600 transition-colors">
              Lawyer Side Hustle
            </Link>
          </li>
          <li>
            <Link href="#blue-collar-side-hustle" className="text-gray-700 hover:text-orange-600 transition-colors">
              Blue Collar Side Hustle
            </Link>
          </li>
          <li>
            <Link
              href="#is-instacart-good-side-hustle"
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              Is Instacart a Good Side Hustle?
            </Link>
          </li>
          <li>
            <Link href="#side-hustles-engineers" className="text-gray-700 hover:text-orange-600 transition-colors">
              Side Hustles for Engineers
            </Link>
          </li>
          <li>
            <Link href="#is-uber-good-side-hustle" className="text-gray-700 hover:text-orange-600 transition-colors">
              Is Uber a Good Side Hustle?
            </Link>
          </li>
          <li>
            <Link href="#welding-side-hustle" className="text-gray-700 hover:text-orange-600 transition-colors">
              Welding Side Hustle
            </Link>
          </li>
          <li>
            <Link
              href="#best-side-hustles-disabled-adults"
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              Best Side Hustles for Disabled Adults
            </Link>
          </li>
          <li>
            <Link href="#florist-side-hustle" className="text-gray-700 hover:text-orange-600 transition-colors">
              Florist Side Hustle
            </Link>
          </li>
          <li>
            <Link href="#side-hustles-rural-areas" className="text-gray-700 hover:text-orange-600 transition-colors">
              Side Hustles for Rural Areas
            </Link>
          </li>
        </ul>
      </CardContent>
    </Card>
  )
}
