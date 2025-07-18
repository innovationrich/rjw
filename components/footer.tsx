import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Link href="/" className="text-xl font-bold mb-4 block">
              <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                $ideHustlesFromHome.com
              </span>
            </Link>
            <p className="text-gray-300 text-sm">
              Your ultimate resource for side hustles, passive income, and financial freedom from home.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-300 hover:text-white transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/categories/online-side-hustles"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Online Side Hustles
                </Link>
              </li>
              <li>
                <Link href="/categories/passive-income" className="text-gray-300 hover:text-white transition-colors">
                  Passive Income
                </Link>
              </li>
              <li>
                <Link href="/categories/freelancing" className="text-gray-300 hover:text-white transition-colors">
                  Freelancing
                </Link>
              </li>
              <li>
                <Link href="/categories/digital-products" className="text-gray-300 hover:text-white transition-colors">
                  Digital Products
                </Link>
              </li>
              <li>
                <Link href="/categories/ecommerce" className="text-gray-300 hover:text-white transition-colors">
                  E-commerce
                </Link>
              </li>
              <li>
                <Link href="/categories/content-creation" className="text-gray-300 hover:text-white transition-colors">
                  Content Creation
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal & Info</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/affiliate-disclosure" className="text-gray-300 hover:text-white transition-colors">
                  Affiliate Disclosure
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="text-gray-300 hover:text-white transition-colors">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} $ideHustlesFromHome.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
