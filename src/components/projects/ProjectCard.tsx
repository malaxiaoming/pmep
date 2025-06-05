'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectMetrics {
  area: string
  completion: string
  savings: string
}

interface Project {
  id: number
  title: string
  category: string
  type: string
  location: string
  description: string
  image: string
  metrics: ProjectMetrics
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Project Image */}
      <div className="relative h-48">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
            {project.category === 'local' ? 'Local Project' : 'International'}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        {/* Project Metrics */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div>
            <div className="text-sm text-gray-500">Area</div>
            <div className="font-medium">{project.metrics.area}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Completion</div>
            <div className="font-medium">{project.metrics.completion}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Savings</div>
            <div className="font-medium">{project.metrics.savings}</div>
          </div>
        </div>

        {/* Project Details Link */}
        <Link 
          href={`/projects/${project.id}`}
          className="block text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          View Case Study
        </Link>
      </div>
    </div>
  )
} 