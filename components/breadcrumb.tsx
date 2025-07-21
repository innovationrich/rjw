import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { SchemaMarkup } from "./schema-markup"

interface BreadcrumbItem {
  name: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://jobsnearmehiringimmediately.com${item.href}`,
    })),
  }

  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
        {items.map((item, index) => (
          <div key={item.href} className="flex items-center">
            <Link href={item.href} className="hover:text-gray-700">
              {item.name}
            </Link>
            {index < items.length - 1 && <ChevronRight className="h-4 w-4 mx-2" />}
          </div>
        ))}
      </nav>
    </>
  )
}
