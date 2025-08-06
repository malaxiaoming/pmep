'use client'
import Link from 'next/link'
import { useState } from 'react'
import { siteConfig } from '@/config/site'

export default function Navigation() {
  const [consultancyOpen, setConsultancyOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileConsultancyOpen, setMobileConsultancyOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-blue-900">
            {siteConfig.name}
          </Link>
          
          <div className="hidden md:flex space-x-8 items-center">
            {siteConfig.navigation.main.map((link) => (
              <Link key={link.href} href={link.href} className="text-gray-600 hover:text-blue-900">
                {link.name}
              </Link>
            ))}
            {/* Consultancy Dropdown */}
            <div className="relative group">
              <Link href="/consultancy" className="text-gray-600 hover:text-blue-900 flex items-center gap-1">
                Consultancy
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </Link>
              <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 hover:opacity-100 transition-opacity duration-200 z-20 pointer-events-auto">
                <div className="flex flex-col py-2">
                  {siteConfig.navigation.consultancy.map((link) => (
                    <Link key={link.href} href={link.href} className="px-6 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded transition">
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Hamburger Button for Mobile */}
          <button
            className="md:hidden flex items-center px-3 py-2 border rounded text-blue-900 border-blue-900 focus:outline-none"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg z-30">
          <div className="flex flex-col py-2 px-4 space-y-1">
            {siteConfig.navigation.main.map((link) => (
              <Link key={link.href} href={link.href} className="py-2 text-gray-700 hover:text-blue-900" onClick={() => setMobileOpen(false)}>
                {link.name}
              </Link>
            ))}
            {/* Mobile Consultancy Dropdown */}
            <button
              className="w-full flex items-center justify-between py-2 text-gray-700 hover:text-blue-900 focus:outline-none"
              onClick={() => setMobileConsultancyOpen((open) => !open)}
              aria-expanded={mobileConsultancyOpen}
              aria-controls="mobile-consultancy-menu"
            >
              <span>Consultancy</span>
              <svg className={`w-4 h-4 ml-2 transform transition-transform ${mobileConsultancyOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {mobileConsultancyOpen && (
              <div id="mobile-consultancy-menu" className="ml-4 flex flex-col space-y-1">
                <Link href="/consultancy" className="py-2 text-gray-700 hover:text-blue-900" onClick={() => setMobileOpen(false)}>
                  Consultancy Overview
                </Link>
                {siteConfig.navigation.consultancy.map((link) => (
                  <Link key={link.href} href={link.href} className="py-2 text-gray-700 hover:text-blue-900" onClick={() => setMobileOpen(false)}>
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  )
} 