import type React from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Briefcase, Factory, ShoppingBag, HeartPulse, Utensils, Hammer, Clock, Users } from "lucide-react"

export function JobCategories() {
  const categories = [
    {
      title: "Full-Time Jobs",
      description: "Stable, long-term career opportunities.",
      icon: <Briefcase className="h-6 w-6 text-blue-600" />,
      link: "/full-time-jobs",
    },
    {
      title: "Part-Time Jobs",
      description: "Flexible work options to fit your schedule.",
      icon: <Clock className="h-6 w-6 text-green-600" />,
      link: "/part-time-jobs",
    },
    {
      title: "Entry-Level Jobs",
      description: "Roles that require no prior experience.",
      icon: <Users className="h-6 w-6 text-purple-600" />,
      link: "/entry-level-jobs",
    },
    {
      title: "Remote Jobs",
      description: "Work from anywhere with these virtual opportunities.",
      icon: <MapPinIcon className="h-6 w-6 text-red-600" />,
      link: "/remote-jobs",
    },
    {
      title: "Warehouse Jobs",
      description: "Jobs in logistics, fulfillment, and distribution centers.",
      icon: <Factory className="h-6 w-6 text-yellow-600" />,
      link: "/warehouse-jobs",
    },
    {
      title: "Retail Jobs",
      description: "Opportunities in sales, customer service, and store operations.",
      icon: <ShoppingBag className="h-6 w-6 text-indigo-600" />,
      link: "/retail-jobs",
    },
    {
      title: "Healthcare Jobs",
      description: "Roles in hospitals, clinics, and medical facilities.",
      icon: <HeartPulse className="h-6 w-6 text-pink-600" />,
      link: "/healthcare-jobs",
    },
    {
      title: "Fast Food Jobs",
      description: "Quick-service restaurant positions with immediate openings.",
      icon: <Utensils className="h-6 w-6 text-orange-600" />,
      link: "/fast-food-jobs",
    },
    {
      title: "Construction Jobs",
      description: "Build your career in the construction industry.",
      icon: <Hammer className="h-6 w-6 text-brown-600" />,
      link: "/construction-jobs",
    },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Browse Jobs by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card key={category.title} className="flex flex-col items-center text-center p-6">
              <div className="mb-4">{category.icon}</div>
              <CardHeader>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600">{category.description}</p>
              </CardContent>
              <Button asChild variant="outline" className="mt-4 bg-transparent">
                <Link href={category.link}>View Jobs</Link>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function MapPinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
