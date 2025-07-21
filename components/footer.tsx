import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1">
          <Link href="/" className="flex items-center mb-4">
            <Image
              src="/jobs-near-me-immediately-logo.png"
              alt="Jobs Near Me Immediately Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            <span className="text-xl font-bold text-white">Jobs Near Me</span>
          </Link>
          <p className="text-sm">Your go-to source for finding immediate hiring opportunities in your local area.</p>
        </div>

        <div className="col-span-1">
          <h3 className="text-lg font-semibold text-white mb-4">Job Categories</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/full-time-jobs" className="hover:text-white transition-colors">
                Full-Time Jobs
              </Link>
            </li>
            <li>
              <Link href="/part-time-jobs" className="hover:text-white transition-colors">
                Part-Time Jobs
              </Link>
            </li>
            <li>
              <Link href="/entry-level-jobs" className="hover:text-white transition-colors">
                Entry-Level Jobs
              </Link>
            </li>
            <li>
              <Link href="/remote-jobs" className="hover:text-white transition-colors">
                Remote Jobs
              </Link>
            </li>
            <li>
              <Link href="/warehouse-jobs" className="hover:text-white transition-colors">
                Warehouse Jobs
              </Link>
            </li>
            <li>
              <Link href="/retail-jobs" className="hover:text-white transition-colors">
                Retail Jobs
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-1">
          <h3 className="text-lg font-semibold text-white mb-4">Popular Cities</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/houston" className="hover:text-white transition-colors">
                Houston Jobs
              </Link>
            </li>
            <li>
              <Link href="/chicago" className="hover:text-white transition-colors">
                Chicago Jobs
              </Link>
            </li>
            <li>
              <Link href="/atlanta" className="hover:text-white transition-colors">
                Atlanta Jobs
              </Link>
            </li>
            <li>
              <Link href="/phoenix" className="hover:text-white transition-colors">
                Phoenix Jobs
              </Link>
            </li>
            <li>
              <Link href="/philadelphia" className="hover:text-white transition-colors">
                Philadelphia Jobs
              </Link>
            </li>
            <li>
              <Link href="/san-antonio" className="hover:text-white transition-colors">
                San Antonio Jobs
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-1">
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/search" className="hover:text-white transition-colors">
                Job Search
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Jobs Near Me Immediately. All rights reserved.</p>
      </div>
    </footer>
  )
}
