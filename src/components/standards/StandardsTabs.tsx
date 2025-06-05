'use client'

import React, { useState } from 'react'
import BCAGuidelines from './BCAGuidelines'
import SingaporeStandards from './SingaporeStandards'
import GreenCertifications from './GreenCertifications'

const tabs = [
  { id: 'bca', label: 'BCA Guidelines' },
  { id: 'ss', label: 'Singapore Standards' },
  { id: 'green', label: 'Green Building Certifications' }
]

export default function StandardsTabs() {
  const [activeTab, setActiveTab] = useState('bca')

  return (
    <div className="bg-white rounded-lg shadow-md">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="flex -mb-px">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                py-4 px-6 text-sm font-medium border-b-2
                ${activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {activeTab === 'bca' && <BCAGuidelines />}
        {activeTab === 'ss' && <SingaporeStandards />}
        {activeTab === 'green' && <GreenCertifications />}
      </div>
    </div>
  )
} 