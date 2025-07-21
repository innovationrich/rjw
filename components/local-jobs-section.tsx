import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

export function LocalJobsSection() {
  const cities = [
    { name: "Houston, TX", link: "/houston" },
    { name: "Chicago, IL", link: "/chicago" },
    { name: "Atlanta, GA", link: "/atlanta" },
    { name: "Phoenix, AZ", link: "/phoenix" },
    { name: "Philadelphia, PA", link: "/philadelphia" },
    { name: "San Antonio, TX", link: "/san-antonio" },
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Find Jobs in Your City</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city) => (
            <Card key={city.name} className="flex flex-col items-center text-center p-6">
              <MapPin className="h-8 w-8 text-blue-600 mb-4" />
              <CardHeader>
                <CardTitle className="text-xl">{city.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600">Explore immediate hiring opportunities in {city.name}.</p>
              </CardContent>
              <Button asChild variant="outline" className="mt-4 bg-transparent">
                <Link href={city.link}>View Jobs</Link>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
