'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ShanghaiTowerCaseStudy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src="/images/projects/shanghai-tower.jpg"
          alt="Shanghai Tower"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Shanghai Tower</h1>
            <p className="text-xl md:text-2xl">Engineering Excellence in Vertical Architecture</p>
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
                As the world's second-tallest building, the Shanghai Tower presented unique challenges 
                in MEP implementation. Our PMEP solutions were crucial in creating a sustainable and 
                efficient vertical city that stands as a testament to engineering innovation.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">PMEP Implementation</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Vertical Transportation</h3>
                  <p className="text-gray-600">
                    Designed and implemented a sophisticated vertical transportation system that includes 
                    high-speed elevators and smart dispatching technology, ensuring efficient movement 
                    of people throughout the building.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Energy Management</h3>
                  <p className="text-gray-600">
                    Developed a comprehensive energy management system that includes double-skin facade 
                    technology, geothermal heating/cooling, and wind turbines integrated into the building's 
                    design.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Smart Building Integration</h3>
                  <p className="text-gray-600">
                    Implemented an advanced building automation system that monitors and controls all 
                    MEP systems, optimizing performance and reducing energy consumption throughout the 
                    building's lifecycle.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">Results & Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Energy Savings</h3>
                  <p className="text-3xl font-bold text-blue-600">35%</p>
                  <p className="text-gray-600">Reduction in energy usage</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Water Efficiency</h3>
                  <p className="text-3xl font-bold text-blue-600">45%</p>
                  <p className="text-gray-600">Reduction in water consumption</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Carbon Footprint</h3>
                  <p className="text-3xl font-bold text-blue-600">50%</p>
                  <p className="text-gray-600">Reduction in carbon emissions</p>
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
                  <dd className="font-medium">Shanghai, China</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Completion Year</dt>
                  <dd className="font-medium">2015</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Building Type</dt>
                  <dd className="font-medium">Commercial</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Total Area</dt>
                  <dd className="font-medium">4.2 million sq ft</dd>
                </div>
              </dl>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Download Resources</h3>
              <div className="space-y-4">
                <Link 
                  href="/documents/case-studies/shanghai-tower.pdf"
                  className="block w-full px-4 py-2 text-center bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                  Download Case Study
                </Link>
                <Link 
                  href="/documents/technical-specs/shanghai-tower.pdf"
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