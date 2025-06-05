'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function MarinaBayCaseStudy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src="/images/projects/marina-bay.jpg"
          alt="Marina Bay Financial Centre"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Marina Bay Financial Centre</h1>
            <p className="text-xl md:text-2xl">A Landmark in Sustainable Building Design</p>
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
                The Marina Bay Financial Centre (MBFC) is a premier integrated development in Singapore's 
                central business district. Our PMEP solutions played a crucial role in achieving the 
                project's sustainability goals while ensuring optimal building performance.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">PMEP Implementation</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Modular MEP Systems</h3>
                  <p className="text-gray-600">
                    Implemented prefabricated MEP modules for faster installation and reduced on-site 
                    construction time. The modular approach allowed for better quality control and 
                    minimized waste.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Energy Efficiency</h3>
                  <p className="text-gray-600">
                    Integrated advanced HVAC systems with smart controls to optimize energy consumption. 
                    The building achieved a 30% reduction in energy usage compared to conventional systems.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Sustainable Materials</h3>
                  <p className="text-gray-600">
                    Utilized eco-friendly materials in MEP components, contributing to the building's 
                    LEED Platinum certification.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">Results & Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Time Savings</h3>
                  <p className="text-3xl font-bold text-blue-600">40%</p>
                  <p className="text-gray-600">Reduction in installation time</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Cost Savings</h3>
                  <p className="text-3xl font-bold text-blue-600">25%</p>
                  <p className="text-gray-600">Reduction in overall costs</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Energy Savings</h3>
                  <p className="text-3xl font-bold text-blue-600">30%</p>
                  <p className="text-gray-600">Reduction in energy consumption</p>
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
                  <dd className="font-medium">Marina Bay, Singapore</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Completion Year</dt>
                  <dd className="font-medium">2012</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Building Type</dt>
                  <dd className="font-medium">Commercial</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Total Area</dt>
                  <dd className="font-medium">2.5 million sq ft</dd>
                </div>
              </dl>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Download Resources</h3>
              <div className="space-y-4">
                <Link 
                  href="/documents/case-studies/marina-bay.pdf"
                  className="block w-full px-4 py-2 text-center bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                  Download Case Study
                </Link>
                <Link 
                  href="/documents/technical-specs/marina-bay.pdf"
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