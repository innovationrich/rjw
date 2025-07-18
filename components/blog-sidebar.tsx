>
\
1.  **Replace the entire file
with the following
implementation:
**

```tsx
'use client'

import Link from "next/link"
import { categories, getPostsByCategory } from "@/lib/blog-data"

export default function BlogSidebar() {
  return (
    <aside className="space-y-8">
      <section>
        <h4 className="mb-4 text-lg font-semibold text-gray-900">Categories</h4>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li key={cat}>
              <Link
                href={`/categories/${encodeURIComponent(cat.toLowerCase().replace(/\s+/g, "-"))}`}
                className="text-sm text-gray-700 hover:text-orange-600"
              >
                {cat} ({getPostsByCategory(cat).length})
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  )
}
