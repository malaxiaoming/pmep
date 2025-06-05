'use client'

import React from 'react'

const certifications = [
  {
    id: 'green-1',
    name: 'Green Mark',
    level: 'Platinum',
    description: 'Singapore\'s national green building rating system that evaluates a building\'s environmental impact and performance.',
    requirements: [
      'Energy efficiency in MEP systems',
      'Sustainable materials usage',
      'Water efficiency',
      'Indoor environmental quality'
    ],
    link: 'https://www.bca.gov.sg/greenmark/green_mark_buildings.html'
  },
  {
    id: 'green-2',
    name: 'LEED',
    level: 'Gold',
    description: 'Leadership in Energy and Environmental Design (LEED) is a globally recognized green building certification system.',
    requirements: [
      'Energy and atmosphere optimization',
      'Materials and resources efficiency',
      'Indoor environmental quality',
      'Innovation in design'
    ],
    link: 'https://www.usgbc.org/leed'
  },
  {
    id: 'green-3',
    name: 'WELL Building Standard',
    level: 'Silver',
    description: 'A performance-based system for measuring, certifying, and monitoring features of the built environment that impact human health and wellbeing.',
    requirements: [
      'Air quality management',
      'Water quality optimization',
      'Thermal comfort',
      'Acoustic performance'
    ],
    link: 'https://www.wellcertified.com/'
  }
]

export default function GreenCertifications() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Green Building Certifications</h2>
      
      <div className="space-y-8">
        {certifications.map((cert) => (
          <div key={cert.id} className="bg-gray-50 p-6 rounded-lg">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-medium">{cert.name}</h3>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                    {cert.level}
                  </span>
                </div>
                <p className="text-gray-600 mt-2">{cert.description}</p>
              </div>
              <a
                href={cert.link}
                className="text-blue-600 hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More →
              </a>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">Key Requirements:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {cert.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-green-50 rounded-lg">
        <h3 className="text-lg font-medium mb-2">Benefits of Green Certification</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Enhanced building performance and efficiency</li>
          <li>Reduced operational costs</li>
          <li>Improved occupant health and wellbeing</li>
          <li>Positive environmental impact</li>
          <li>Increased property value</li>
        </ul>
      </div>
    </div>
  )
} 