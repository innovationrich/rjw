import Link from "next/link"

export default function Footer() {
  const primary = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/categories", label: "Categories" },
  ]

  const company = [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/affiliate-disclosure", label: "Affiliate Disclosure" },
  ]

  const legal = [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-of-service", label: "Terms of Service" },
    { href: "/sitemap", label: "Sitemap" },
  ]

  return (
    <footer className="border-t bg-gray-50 py-10">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-2 md:grid-cols-4 md:px-6">
        {/* Brand */}
        <div>
          <h3 className="mb-3 text-lg font-semibold">$ideHustlesFromHome.com</h3>
          <p className="text-sm text-gray-600">
            Your go-to resource for making money on the side from the comfort of your home.
          </p>
        </div>

        {/* Columns */}
        {[
          { title: "Explore", links: primary },
          { title: "Company", links: company },
          { title: "Legal", links: legal },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="mb-3 text-sm font-semibold text-gray-800">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-gray-600 hover:text-emerald-600">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 border-t pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} $ideHustlesFromHome.com. All rights reserved.
      </div>
    </footer>
  )
}

export { Footer }
