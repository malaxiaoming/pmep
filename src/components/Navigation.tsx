'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile menu when route changes
  React.useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <nav className="bg-white shadow-md relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-blue-900">
            DFMA-Hub
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/about" className="text-gray-600 hover:text-blue-900">
              About DFMA-Hub
            </Link>
            <Link href="/standards" className="text-gray-600 hover:text-blue-900">
              Standards
            </Link>
            <Link href="/projects" className="text-gray-600 hover:text-blue-900">
              Projects
            </Link>
            <Link
              href="/listings"
              className="relative text-gray-600 hover:text-blue-900"
            >
              MAS Listing
              <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-xs px-1.5 py-0.3 rounded-full animate-pulse">
                NEW
              </span>
            </Link>
            {/* <Link href="/resources" className="text-gray-600 hover:text-blue-900">
              Resources
            </Link> */}
            {/* <Link href="/directory" className="text-gray-600 hover:text-blue-900">
              Directory
            </Link> */}
            <Link href="/contact" className="text-gray-600 hover:text-blue-900">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-900 hover:bg-gray-100 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-50">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/about"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-900 hover:bg-gray-50"
              >
                About DFMA-Hub
              </Link>
              <Link
                href="/standards"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-900 hover:bg-gray-50"
              >
                Standards
              </Link>
              <Link
                href="/projects"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-900 hover:bg-gray-50"
              >
                Projects
              </Link>
              <Link
                href="/listings"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-900 hover:bg-gray-50"
              >
                <div className="flex items-center">
                  MAS Listing
                  <span className="ml-2 bg-red-500 text-white text-xs px-1.5 py-0.3 rounded-full animate-pulse">
                    NEW
                  </span>
                </div>
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-900 hover:bg-gray-50"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 