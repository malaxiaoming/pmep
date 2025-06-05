'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import propertiesData from '@/data/properties.json'

interface Property {
  id: string
  title: string
  district: string
  zoning: string
  area: number
  rentalPrice: {
    min: number
    max: number
  }
  qualification: 'MAS Qualified' | 'MAS Certified'
  image: string
}

export default function ListingsPage() {
  const [selectedQualification, setSelectedQualification] = useState<string>('all')
  const [selectedZoning, setSelectedZoning] = useState<string>('all')
  const [selectedDistrict, setSelectedDistrict] = useState<string>('all')

  // Get unique values for filters
  const uniqueZonings = useMemo(() => 
    Array.from(new Set(propertiesData.properties.map(p => p.zoning))).sort(),
    []
  )

  const uniqueDistricts = useMemo(() => 
    Array.from(new Set(propertiesData.properties.map(p => p.district))).sort(),
    []
  )

  const filteredProperties = propertiesData.properties.filter(property => {
    const matchesQualification = selectedQualification === 'all' || property.qualification === selectedQualification
    const matchesZoning = selectedZoning === 'all' || property.zoning === selectedZoning
    const matchesDistrict = selectedDistrict === 'all' || property.district === selectedDistrict
    return matchesQualification && matchesZoning && matchesDistrict
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] w-full bg-blue-900">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Property Listings</h1>
            <p className="text-xl md:text-2xl">MAS Qualified & MAS Certified Properties</p>
          </div>
        </div>
      </div>

      {/* Listings Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Section */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-4 items-center">
              <label className="text-gray-700 font-medium">Filter by:</label>
              
              {/* Qualification Filter */}
              <select
                value={selectedQualification}
                onChange={(e) => setSelectedQualification(e.target.value)}
                className="px-4 py-2 border border-gray-400 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-800"
              >
                <option value="all">All Qualifications</option>
                <option value="MAS Qualified">MAS Qualified</option>
                <option value="MAS Certified">MAS Certified</option>
              </select>

              {/* Zoning Filter */}
              <select
                value={selectedZoning}
                onChange={(e) => setSelectedZoning(e.target.value)}
                className="px-4 py-2 border border-gray-400 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-800"
              >
                <option value="all">All Zones</option>
                {uniqueZonings.map(zoning => (
                  <option key={zoning} value={zoning}>{zoning}</option>
                ))}
              </select>

              {/* District Filter */}
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="px-4 py-2 border border-gray-400 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-800"
              >
                <option value="all">All Districts</option>
                {uniqueDistricts.map(district => (
                  <option key={district} value={district}>{district}</option>
                ))}
              </select>

              {/* Reset Filters Button */}
              {(selectedQualification !== 'all' || selectedZoning !== 'all' || selectedDistrict !== 'all') && (
                <button
                  onClick={() => {
                    setSelectedQualification('all')
                    setSelectedZoning('all')
                    setSelectedDistrict('all')
                  }}
                  className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900 font-medium"
                >
                  Reset Filters
                </button>
              )}
            </div>
          </div>

          {/* Properties List */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {/* Table Header - Hidden on mobile */}
            <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200">
              <div className="col-span-5">
                <span className="text-gray-700 font-semibold">Property</span>
              </div>
              <div className="col-span-2 text-left">
                <span className="text-gray-700 font-semibold">Area</span>
              </div>
              <div className="col-span-3 text-left">
                <span className="text-gray-700 font-semibold">Rental Price</span>
              </div>
              <div className="col-span-2 text-left">
                <span className="text-gray-700 font-semibold">Action</span>
              </div>
            </div>

            {/* Properties List */}
            {filteredProperties.map((property) => (
              <div
                key={property.id}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 px-4 md:px-6 py-4 border-b border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <div className="col-span-1 md:col-span-5">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-24 h-48 md:h-24 relative flex-shrink-0">
                      <Image
                        src={property.image}
                        alt={property.title}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-gray-900 font-medium">{property.title}</h3>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {property.district}
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {property.zoning}
                        </span>
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                          property.qualification === 'MAS Certified'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {property.qualification}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 md:col-span-2 flex md:block justify-between items-center">
                  <span className="md:hidden text-gray-700 font-medium text-left">Area:</span>
                  <span className="text-gray-900 text-right md:text-center">{property.area.toLocaleString()} sqft</span>
                </div>
                <div className="col-span-1 md:col-span-3 flex md:block justify-between items-center">
                  <span className="md:hidden text-gray-700 font-medium">Rental Price:</span>
                  <span className="text-gray-900">
                    {`$${property.rentalPrice.min.toFixed(2)}-${property.rentalPrice.max.toFixed(2)}/psf`}
                  </span>
                </div>
                <div className="col-span-1 md:col-span-2 flex md:block justify-center md:justify-end">
                  <a
                    href={`https://wa.me/6591099623?text=Hi, I'm interested in the property: ${encodeURIComponent(property.title)} (ID: ${property.id})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 transition-colors"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            ))}

            {filteredProperties.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No properties found matching the selected criteria.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
} 