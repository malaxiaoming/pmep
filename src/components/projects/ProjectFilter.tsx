'use client'

import React from 'react'

interface ProjectFilterProps {
  activeFilter: string
  onFilterChange: (filter: string) => void
}

const filters = [
  { id: 'all', label: 'All Projects' },
  { id: 'local', label: 'Local Projects' },
  { id: 'international', label: 'International Projects' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'infrastructure', label: 'Infrastructure' }
]

export default function ProjectFilter({ activeFilter, onFilterChange }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-4">
      {filters.map(filter => (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          className={`
            px-4 py-2 rounded-full text-sm font-medium transition
            ${activeFilter === filter.id
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }
          `}
        >
          {filter.label}
        </button>
      ))}
    </div>
  )
} 