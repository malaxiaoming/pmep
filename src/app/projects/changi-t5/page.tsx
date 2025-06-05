'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ChangiT5CaseStudy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src="/images/projects/changi-airport.jpg"
          alt="Changi Airport Terminal 5"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Changi Airport Terminal 5</h1>
            <p className="text-xl md:text-2xl">Revolutionizing Airport Infrastructure with PMEP</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-3xl font-bold mb-4">Project Overview</h2>
              <p className="text-gray-600 leading-relaxed">
                Terminal 5 at Changi Airport represents a significant expansion of Singapore's world-renowned 
                aviation hub. Our PMEP solutions were instrumental in creating a sustainable, efficient, and 
                future-ready terminal that sets new standards for airport infrastructure.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">PMEP Implementation</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Smart Building Systems</h3>
                  <p className="text-gray-600">
                    Implemented an integrated building management system that coordinates HVAC, lighting, 
                    and security systems. The system uses AI to optimize energy usage based on passenger 
                    flow and weather conditions.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Modular Construction</h3>
                  <p className="text-gray-600">
                    Utilized prefabricated MEP modules to accelerate construction while maintaining 
                    high quality standards. This approach minimized disruption to airport operations 
                    during the construction phase.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Sustainable Design</h3>
                  <p className="text-gray-600">
                    Incorporated renewable energy systems and water conservation measures, including 
                    rainwater harvesting and greywater recycling. The terminal is designed to achieve 
                    Green Mark Platinum certification.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">Results & Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Energy Efficiency</h3>
                  <p className="text-3xl font-bold text-blue-600">35%</p>
                  <p className="text-gray-600">Reduction in energy consumption</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Construction Time</h3>
                  <p className="text-3xl font-bold text-blue-600">45%</p>
                  <p className="text-gray-600">Faster completion</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Water Savings</h3>
                  <p className="text-3xl font-bold text-blue-600">40%</p>
                  <p className="text-gray-600">Reduction in water usage</p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Project Details</h3>
              <dl className="space-y-4">
                <div>
                  <dt className="text-gray-500">Location</dt>
                  <dd className="font-medium">Changi Airport, Singapore</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Completion Year</dt>
                  <dd className="font-medium">2024</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Building Type</dt>
                  <dd className="font-medium">Infrastructure</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Total Area</dt>
                  <dd className="font-medium">3.5 million sq ft</dd>
                </div>
              </dl>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Download Resources</h3>
              <div className="space-y-4">
                <Link 
                  href="/documents/case-studies/changi-t5.pdf"
                  className="block w-full px-4 py-2 text-center bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                  Download Case Study
                </Link>
                <Link 
                  href="/documents/technical-specs/changi-t5.pdf"
                  className="block w-full px-4 py-2 text-center bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition"
                >
                  Technical Specifications
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 