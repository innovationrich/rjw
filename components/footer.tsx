import Link from "next/link"

/**
 * Site-wide footer with quick links, category shortcuts and legal pages.
 */
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="container mx-auto grid gap-8 px-4 py-12 md:grid-cols-4">
        {/* Brand blurb */}
        <div>
          <Link href="/" className="text-xl font-bold block mb-4">
            <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              {"$ideHustlesFromHome.com"}
            </span>
          </Link>
          <p className="text-sm text-gray-300">
            Your ultimate resource for side hustles, passive income and financial freedom - all from home.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link className="hover:text-white" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/categories">
                Categories
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link className="hover:text-white" href="/categories/online-side-hustles">
                Online Side Hustles
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/categories/passive-income">
                Passive Income
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/categories/freelancing">
                Freelancing
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/categories/digital-products">
                Digital Products
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/categories/ecommerce">
                E-commerce
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/categories/content-creation">
                Content Creation
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold mb-4">Legal &amp; Info</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link className="hover:text-white" href="/privacy-policy">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/terms-of-service">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/affiliate-disclosure">
                Affiliate Disclosure
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/sitemap">
                Sitemap
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-6 text-gray-300 text-sm">
        &copy; {new Date().getFullYear()} {"$ideHustlesFromHome.com"} — All rights reserved.
      </div>
    </footer>
  )
}
