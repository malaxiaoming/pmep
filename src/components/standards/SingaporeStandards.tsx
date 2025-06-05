'use client'

import React from 'react'

const standards = [
  {
    id: 'ss-1',
    code: 'SS 564',
    title: 'Prefabricated MEP Systems',
    description: 'Specification for prefabricated mechanical, electrical, and plumbing systems.',
    lastUpdated: '2024-01-10',
    downloadUrl: '/documents/ss-564.pdf'
  },
  {
    id: 'ss-2',
    code: 'SS 531',
    title: 'Code of Practice for Mechanical Ventilation and Air-conditioning',
    description: 'Standards for mechanical ventilation and air-conditioning systems in buildings.',
    lastUpdated: '2024-02-15',
    downloadUrl: '/documents/ss-531.pdf'
  },
  {
    id: 'ss-3',
    code: 'SS 636',
    title: 'Code of Practice for Electrical Installations',
    description: 'Standards for electrical installations in buildings.',
    lastUpdated: '2024-01-25',
    downloadUrl: '/documents/ss-636.pdf'
  }
]

export default function SingaporeStandards() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Singapore Standards (SS)</h2>
      
      <div className="space-y-6">
        {standards.map((standard) => (
          <div key={standard.id} className="bg-gray-50 p-6 rounded-lg">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {standard.code}
                  </span>
                  <h3 className="text-xl font-medium">{standard.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{standard.description}</p>
                <p className="text-sm text-gray-500">
                  Last updated: {standard.lastUpdated}
                </p>
              </div>
              <a
                href={standard.downloadUrl}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download PDF
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h3 className="text-lg font-medium mb-2">About Singapore Standards</h3>
        <p className="text-gray-700 mb-4">
          Singapore Standards (SS) are national standards that provide technical specifications and guidelines for various industries. 
          These standards ensure consistency, safety, and quality in construction practices.
        </p>
        <a
          href="https://www.singaporestandardseshop.sg/"
          className="text-blue-600 hover:text-blue-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Singapore Standards eShop →
        </a>
      </div>
    </div>
  )
} 