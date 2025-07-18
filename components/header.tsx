"use client"

import Link from "next/link"
import { useState } from "react"

/**
 * Site-wide header with logo, desktop nav and a custom (CSS) mobile hamburger.
 * No external icon libraries are used, eliminating the lucide-react load error.
 */
export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
            {"$ideHustlesFromHome.com"}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6 text-gray-700">
          <Link className="hover:text-blue-600 transition-colors" href="/">
            Home
          </Link>
          <Link className="hover:text-blue-600 transition-colors" href="/blog">
            Blog
          </Link>
          <Link className="hover:text-blue-600 transition-colors" href="/categories">
            Categories
          </Link>
          <Link className="hover:text-blue-600 transition-colors" href="/about">
            About
          </Link>
          <Link className="hover:text-blue-600 transition-colors" href="/contact">
            Contact
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col space-y-1.5 focus:outline-none"
        >
          <span
            aria-hidden="true"
            className={`h-0.5 w-6 bg-gray-700 transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span aria-hidden="true" className={`h-0.5 w-6 bg-gray-700 ${open ? "opacity-0" : ""}`} />
          <span
            aria-hidden="true"
            className={`h-0.5 w-6 bg-gray-700 transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden border-t border-gray-200 bg-white pb-4">
          <div className="flex flex-col px-4 pt-4 space-y-2 text-gray-700">
            <Link href="/" onClick={() => setOpen(false)} className="py-2 hover:text-blue-600">
              Home
            </Link>
            <Link href="/blog" onClick={() => setOpen(false)} className="py-2 hover:text-blue-600">
              Blog
            </Link>
            <Link href="/categories" onClick={() => setOpen(false)} className="py-2 hover:text-blue-600">
              Categories
            </Link>
            <Link href="/about" onClick={() => setOpen(false)} className="py-2 hover:text-blue-600">
              About
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="py-2 hover:text-blue-600">
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
