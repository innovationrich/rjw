"use client"

import Link from "next/link"
import { useState } from "react"
import { cn } from "@/lib/utils"

export default function Header() {
  const [open, setOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/categories", label: "Categories" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold tracking-tight">
          <span
            className={cn(
              "bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 bg-clip-text text-transparent drop-shadow",
            )}
          >
            {"$ideHustlesFromHome.com"}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-emerald-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button aria-label="Toggle navigation" onClick={() => setOpen((p) => !p)} className="block md:hidden">
          {/* Unicode hamburger to avoid icon import */}
          <span className="text-2xl leading-none">☰</span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t bg-white pb-3 pt-2 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-emerald-600"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}

/* also provide named export */
export { Header }
