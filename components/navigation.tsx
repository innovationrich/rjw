"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, MapPin, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Briefcase className="h-8 w-8 text-blue-600" />
            <span className="font-bold text-xl text-gray-900">JobsNearMeHiringImmediately.com</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Home
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 font-medium flex items-center">Jobs by Type</button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/warehouse-jobs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  Warehouse Jobs
                </Link>
                <Link href="/retail-jobs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  Retail Jobs
                </Link>
                <Link href="/fast-food-jobs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  Fast Food Jobs
                </Link>
                <Link href="/entry-level-jobs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  Entry Level Jobs
                </Link>
                <Link href="/remote-jobs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  Remote Jobs
                </Link>
                <Link href="/construction-jobs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  Construction Jobs
                </Link>
                <Link href="/part-time-jobs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  Part Time Jobs
                </Link>
                <Link href="/full-time-jobs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  Full Time Jobs
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 font-medium flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                Jobs by Location
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/houston" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  Houston Jobs
                </Link>
                <Link href="/chicago" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  Chicago Jobs
                </Link>
                <Link href="/atlanta" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  Atlanta Jobs
                </Link>
                <Link href="/phoenix" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  Phoenix Jobs
                </Link>
                <Link href="/philadelphia" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  Philadelphia Jobs
                </Link>
                <Link href="/san-antonio" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  San Antonio Jobs
                </Link>
              </div>
            </div>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 font-medium">
              Blog
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-blue-600 font-medium">
              FAQ
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="/" className="flex items-center space-x-2">
                <Briefcase className="h-8 w-8 text-blue-600" />
                <span className="font-bold text-lg text-gray-900 sm:text-xl">JobsNearMeHiringImmediately.com</span>
              </Link>
              <Link href="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">
                Home
              </Link>
              <Link
                href="/warehouse-jobs"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
              >
                Warehouse Jobs
              </Link>
              <Link
                href="/retail-jobs"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
              >
                Retail Jobs
              </Link>
              <Link
                href="/fast-food-jobs"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
              >
                Fast Food Jobs
              </Link>
              <Link
                href="/entry-level-jobs"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
              >
                Entry Level Jobs
              </Link>
              <Link
                href="/remote-jobs"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
              >
                Remote Jobs
              </Link>
              <Link
                href="/construction-jobs"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
              >
                Construction Jobs
              </Link>
              <Link
                href="/part-time-jobs"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
              >
                Part Time Jobs
              </Link>
              <Link
                href="/full-time-jobs"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
              >
                Full Time Jobs
              </Link>
              <Link href="/houston" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">
                Houston Jobs
              </Link>
              <Link href="/chicago" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">
                Chicago Jobs
              </Link>
              <Link href="/atlanta" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">
                Atlanta Jobs
              </Link>
              <Link href="/phoenix" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">
                Phoenix Jobs
              </Link>
              <Link
                href="/philadelphia"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
              >
                Philadelphia Jobs
              </Link>
              <Link
                href="/san-antonio"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
              >
                San Antonio Jobs
              </Link>
              <Link href="/blog" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">
                Blog
              </Link>
              <Link href="/faq" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">
                FAQ
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
