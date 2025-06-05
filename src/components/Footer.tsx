'use client'

import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About PMEP</h3>
            <p className="text-gray-400">
              Your authoritative source for Prefabricated MEP information, standards, and best practices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/standards" className="text-gray-400 hover:text-white">
                  Standards & Regulations
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-white">
                  Projects & Case Studies
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-400 hover:text-white">
                  News & Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/standards/bca" className="text-gray-400 hover:text-white">
                  BCA Guidelines
                </Link>
              </li>
              <li>
                <Link href="/standards/ss" className="text-gray-400 hover:text-white">
                  Singapore Standards
                </Link>
              </li>
              <li>
                <Link href="/standards/green" className="text-gray-400 hover:text-white">
                  Green Certifications
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                Email: tladvance@consultant.com
              </li>
              <li className="text-gray-400">
                Phone: +65 XXXX XXXX
              </li>
              <li className="text-gray-400">
                Address: Singapore
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} PMEP. All rights reserved.</p>
          <p className="mt-2 text-sm">
            This website is for informational purposes only. All standards and guidelines referenced are subject to official documentation.
          </p>
        </div>
      </div>
    </footer>
  )
} 