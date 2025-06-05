import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Prefabricated MEP Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            The Future of Mechanical, Electrical, and Plumbing Systems
          </p>
          <div className="flex gap-4">
            <Link href="/about" className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition">
              Learn More
            </Link>
            <Link href="/projects" className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition">
              View Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Explore PMEP</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/standards" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4">Standards & Regulations</h3>
              <p className="text-gray-600">Learn about BCA guidelines and Singapore Standards</p>
            </Link>
            <Link href="/projects" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4">Projects & Case Studies</h3>
              <p className="text-gray-600">Explore local and international PMEP projects</p>
            </Link>
            <Link href="/resources" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4">News & Resources</h3>
              <p className="text-gray-600">Stay updated with industry articles and research</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
