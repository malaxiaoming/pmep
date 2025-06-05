'use client'

import React, { useState } from 'react'
import ProjectCard from '@/components/projects/ProjectCard'
import ProjectFilter from '@/components/projects/ProjectFilter'

const projects = [
  {
    id: 1,
    title: 'Marina Bay Financial Centre',
    category: 'local',
    type: 'commercial',
    location: 'Singapore',
    description: 'State-of-the-art PMEP implementation in a landmark commercial development.',
    image: '/images/projects/mbfc.jpg',
    metrics: {
      area: '2.5M sq ft',
      completion: '2023',
      savings: '30%'
    }
  },
  {
    id: 2,
    title: 'Changi Airport Terminal 5',
    category: 'local',
    type: 'infrastructure',
    location: 'Singapore',
    description: 'Innovative PMEP solutions for one of the world\'s busiest airports.',
    image: '/images/projects/changi-t5.jpg',
    metrics: {
      area: '3.5M sq ft',
      completion: '2024',
      savings: '25%'
    }
  },
  {
    id: 3,
    title: 'Shanghai Tower',
    category: 'international',
    type: 'commercial',
    location: 'Shanghai, China',
    description: 'World\'s second-tallest building featuring advanced PMEP systems.',
    image: '/images/projects/shanghai-tower.jpg',
    metrics: {
      area: '4.2M sq ft',
      completion: '2015',
      savings: '35%'
    }
  }
]

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            PMEP Projects & Case Studies
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            Explore our portfolio of successful PMEP implementations, from local landmarks to international best practices.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ProjectFilter 
            activeFilter={activeFilter} 
            onFilterChange={setActiveFilter} 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Project Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">30%</div>
              <div className="text-gray-600">Average Cost Savings</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">40%</div>
              <div className="text-gray-600">Time Reduction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 