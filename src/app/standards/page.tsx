import React from 'react'
import StandardsTabs from '@/components/standards/StandardsTabs'

export default function StandardsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Standards & Regulations</h1>
      <p className="text-gray-700 mb-8 max-w-3xl">
        Explore the comprehensive guidelines and standards that govern Prefabricated MEP systems in Singapore. 
        These standards ensure quality, safety, and sustainability in PMEP implementation.
      </p>
      
      <StandardsTabs />
    </div>
  )
} 