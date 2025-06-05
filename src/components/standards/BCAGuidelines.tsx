'use client'

import React from 'react'

const guidelines = [
  {
    id: 'bca-1',
    title: 'Prefabricated MEP Guidelines',
    description: 'Comprehensive guidelines for the implementation of prefabricated MEP systems in building projects.',
    lastUpdated: '2024-01-15',
    downloadUrl: '/documents/bca-pmep-guidelines.pdf'
  },
  {
    id: 'bca-2',
    title: 'Quality Assessment Framework',
    description: 'Framework for assessing the quality of prefabricated MEP components and installations.',
    lastUpdated: '2024-02-01',
    downloadUrl: '/documents/bca-quality-framework.pdf'
  },
  {
    id: 'bca-3',
    title: 'Safety Requirements',
    description: 'Safety standards and requirements for prefabricated MEP systems.',
    lastUpdated: '2024-01-20',
    downloadUrl: '/documents/bca-safety-requirements.pdf'
  }
]

export default function BCAGuidelines() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">BCA Guidelines for PMEP</h2>
      
      <div className="space-y-6">
        {guidelines.map((guideline) => (
          <div key={guideline.id} className="bg-gray-50 p-6 rounded-lg">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-medium mb-2">{guideline.title}</h3>
                <p className="text-gray-600 mb-4">{guideline.description}</p>
                <p className="text-sm text-gray-500">
                  Last updated: {guideline.lastUpdated}
                </p>
              </div>
              <a
                href={guideline.downloadUrl}
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
        <h3 className="text-lg font-medium mb-2">Important Notes</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>All PMEP installations must comply with these guidelines</li>
          <li>Regular updates are published to reflect industry best practices</li>
          <li>Contact BCA for clarification on specific requirements</li>
        </ul>
      </div>
    </div>
  )
} 