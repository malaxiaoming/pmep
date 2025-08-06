'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function PersonnelTrainingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    trainingType: '',
    participantCount: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">DfMA Personnel Training & Certification</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Comprehensive training and certification aligned with BCA's CoreTrade and SkillsFuture frameworks
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Overview Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Overview</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-700 leading-relaxed">
              DfMA implementation hinges on a skilled workforce. We offer targeted training and certification programs that equip personnel across all levels—from factory operatives to site coordinators—with the skills needed for DfMA success, aligned with BCA's CoreTrade and SkillsFuture frameworks.
            </p>
          </div>
        </section>

        {/* Who It's For Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Who It's For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <div className="text-7xl mb-2">👷</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Construction Firms</h3>
              <p className="text-gray-700">Upskilling internal teams for DfMA workflows</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <div className="text-7xl mb-2">🤝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Subcontractors</h3>
              <p className="text-gray-700">Transitioning into prefab operations</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <div className="text-7xl mb-2">🧑‍💼</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">New Hires & Workers</h3>
              <p className="text-gray-700">Requiring compliance training and certification</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <div className="text-7xl mb-2">🧑‍🏫</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Site/Project Managers</h3>
              <p className="text-gray-700">Seeking DfMA workflow knowledge</p>
            </div>
          </div>
        </section>

        {/* Tall Card Who It's For Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Who It's For (Tall Cards)</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center min-h-[350px] h-full justify-between">
              <div>
                <div className="text-7xl mb-4">👷</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Construction Firms</h3>
                <p className="text-gray-700">Upskilling internal teams for DfMA workflows</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center min-h-[350px] h-full justify-between">
              <div>
                <div className="text-7xl mb-4">🤝</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Subcontractors</h3>
                <p className="text-gray-700">Transitioning into prefab operations</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center min-h-[350px] h-full justify-between">
              <div>
                <div className="text-7xl mb-4">🧑‍💼</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">New Hires & Workers</h3>
                <p className="text-gray-700">Requiring compliance training and certification</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center min-h-[350px] h-full justify-between">
              <div>
                <div className="text-7xl mb-4">🧑‍🏫</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Site/Project Managers</h3>
                <p className="text-gray-700">Seeking DfMA workflow knowledge</p>
              </div>
            </div>
          </div>
        </section>

        {/* What You Get Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What You Get (Deliverables)</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">Competency-based DfMA training syllabus</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">Factory-based hands-on training modules</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">Site workflow simulations</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">Internal certification and/or CoreTrade facilitation</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">Digital training materials for reuse</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process & Timeline Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Process & Timeline</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Training Needs Analysis (Week 1)</h3>
              <p className="text-gray-700">Evaluate current skill gaps</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Curriculum Design (Week 2–3)</h3>
              <p className="text-gray-700">Customize to job roles</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Training Execution (Week 4–6)</h3>
              <p className="text-gray-700">On-site and factory sessions</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Assessment & Certification (Week 6–7)</h3>
              <p className="text-gray-700">Written, practical, BCA CoreTrade-ready</p>
            </div>
          </div>
        </section>

        {/* Get a Quote Form */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Get a Quote</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company *</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="trainingType" className="block text-sm font-medium text-gray-700 mb-2">Training Type</label>
                  <select
                    id="trainingType"
                    name="trainingType"
                    value={formData.trainingType}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select training type</option>
                    <option value="factory-operatives">Factory Operatives</option>
                    <option value="site-coordinators">Site Coordinators</option>
                    <option value="project-managers">Project Managers</option>
                    <option value="compliance-training">Compliance Training</option>
                    <option value="custom">Custom Training</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="participantCount" className="block text-sm font-medium text-gray-700 mb-2">Number of Participants</label>
                  <select
                    id="participantCount"
                    name="participantCount"
                    value={formData.participantCount}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select number</option>
                    <option value="1-5">1-5 participants</option>
                    <option value="6-10">6-10 participants</option>
                    <option value="11-20">11-20 participants</option>
                    <option value="21-50">21-50 participants</option>
                    <option value="50+">50+ participants</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Additional Details</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us more about your training requirements..."
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
                >
                  Get Quote
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Back to Consultancy */}
        <div className="text-center">
          <Link href="/consultancy" className="text-blue-600 hover:text-blue-800 font-semibold">
            ← Back to Consultancy Services
          </Link>
        </div>
      </div>
    </div>
  )
} 