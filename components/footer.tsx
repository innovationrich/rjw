import Link from "next/link"
import { Briefcase, Facebook, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Briefcase className="h-8 w-8 text-blue-400" />
              <span className="font-bold text-xl">JobsNearMeHiringImmediately.com</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Find jobs hiring near you immediately. We connect job seekers with employers looking to hire today across
              all industries and experience levels.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
              <Linkedin className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Job Categories */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Job Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/warehouse-jobs" className="text-gray-300 hover:text-white">
                  Warehouse Jobs
                </Link>
              </li>
              <li>
                <Link href="/retail-jobs" className="text-gray-300 hover:text-white">
                  Retail Jobs
                </Link>
              </li>
              <li>
                <Link href="/fast-food-jobs" className="text-gray-300 hover:text-white">
                  Fast Food Jobs
                </Link>
              </li>
              <li>
                <Link href="/entry-level-jobs" className="text-gray-300 hover:text-white">
                  Entry Level Jobs
                </Link>
              </li>
              <li>
                <Link href="/remote-jobs" className="text-gray-300 hover:text-white">
                  Remote Jobs
                </Link>
              </li>
              <li>
                <Link href="/construction-jobs" className="text-gray-300 hover:text-white">
                  Construction Jobs
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="text-gray-300 hover:text-white">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 Jobs Hiring Near Me Immediately. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
