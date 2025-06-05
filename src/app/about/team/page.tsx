'use client'

import React from 'react'
import Image from 'next/image'

interface TeamMember {
  name: string
  position: string
  bio: string
  image: string
}

const leadershipTeam: TeamMember[] = [
  {
    name: 'Dr. James Chen',
    position: 'Chief Executive Officer',
    bio: 'With over 25 years of experience in the construction industry, Dr. Chen leads PMEP with a vision to revolutionize MEP solutions through innovation and sustainability.',
    image: '/images/team/ceo.jpg'
  },
  {
    name: 'Sarah Wong',
    position: 'Chief Technology Officer',
    bio: 'Sarah brings 15 years of expertise in building automation and smart systems, driving PMEP\'s technological advancement and digital transformation.',
    image: '/images/team/cto.jpg'
  },
  {
    name: 'Michael Tan',
    position: 'Chief Operations Officer',
    bio: 'Michael oversees PMEP\'s manufacturing and installation operations, ensuring the highest standards of quality and efficiency across all projects.',
    image: '/images/team/coo.jpg'
  }
]

const departmentHeads: TeamMember[] = [
  {
    name: 'David Lee',
    position: 'Head of Design & Engineering',
    bio: 'Leading a team of expert engineers, David ensures that all PMEP solutions meet the highest standards of design excellence and technical innovation.',
    image: '/images/team/design-head.jpg'
  },
  {
    name: 'Rachel Lim',
    position: 'Head of Manufacturing',
    bio: 'Rachel manages PMEP\'s state-of-the-art manufacturing facilities, implementing lean processes and quality control measures.',
    image: '/images/team/manufacturing-head.jpg'
  },
  {
    name: 'Alex Kumar',
    position: 'Head of Installation',
    bio: 'With extensive field experience, Alex leads PMEP\'s installation teams, ensuring smooth and efficient project execution.',
    image: '/images/team/installation-head.jpg'
  }
]

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] w-full bg-blue-900">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Team</h1>
            <p className="text-xl md:text-2xl">Meet the Experts Behind PMEP's Success</p>
          </div>
        </div>
      </div>

      {/* Leadership Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadershipTeam.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-4">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Heads Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Department Heads</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {departmentHeads.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-4">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Growing Team</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for innovation and 
            excellence. Explore our current openings and be part of our journey to transform the 
            construction industry.
          </p>
          <a 
            href="/about/careers"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            View Career Opportunities
          </a>
        </div>
      </section>
    </div>
  )
} 