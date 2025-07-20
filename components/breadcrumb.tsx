import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { SchemaMarkup } from "@/components/schema-markup"

interface BreadcrumbItem {
  name: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.href,
    })),
  }

  return (
    <>
      <SchemaMarkup schema={schema} />
      <nav className="flex py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center">
              <Link href={item.href} className="hover:text-blue-600">
                {item.name}
              </Link>
              {index < items.length - 1 && <ChevronRight className="h-4 w-4 text-gray-400 ml-2" aria-hidden="true" />}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
