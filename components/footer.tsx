import Link from "next/link"
import { Mail, Twitter, Facebook, Instagram, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">$</span>
              </div>
              <span className="text-xl font-bold">Side Hustle Success</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Your ultimate guide to building profitable side hustles and achieving financial freedom. Join thousands of
              readers who are already earning extra income.
            </p>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-orange-400">Subscribe to Our Newsletter</h3>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
                <Button className="bg-orange-600 hover:bg-orange-700">
                  <Mail className="w-4 h-4 mr-2" />
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-orange-400 transition-colors">
                  All Articles
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/online-side-hustles"
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  Online Side Hustles
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/passive-income"
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  Passive Income
                </Link>
              </li>
              <li>
                <Link href="/categories/freelancing" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Freelancing
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-orange-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sitemap" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Sitemap
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/affiliate-disclosure" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Affiliate Disclosure
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-orange-400">
              <Twitter className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-orange-400">
              <Facebook className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-orange-400">
              <Instagram className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-orange-400">
              <Youtube className="w-5 h-5" />
            </Button>
          </div>
          <p className="text-gray-400 text-sm">© {currentYear} Side Hustle Success. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
