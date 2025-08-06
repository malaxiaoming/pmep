'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function CorporateTransitionPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    transitionType: '',
    companySize: '',
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Corporate Transition & Sub-Contractor Accreditation</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Smooth transition to DfMA workflows with BCA, SCAL, and ISO certification support
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Overview Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Overview</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-700 leading-relaxed">
              Transitioning to DfMA requires organizational change, supported by compliance with BCA's regulatory framework. We assist businesses in their DfMA transformation journey—from internal restructuring to securing accreditation under SCAL or BCA schemes like PPVC Manufacturer Accreditation.
            </p>
          </div>
        </section>

        {/* Who It's For Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Who It's For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <div className="text-7xl mb-2">🧑‍💼</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">SMEs & Traditional Contractors</h3>
              <p className="text-gray-700">Adopting prefab methodologies</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <div className="text-7xl mb-2">🏛️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Firms Targeting Certifications</h3>
              <p className="text-gray-700">SCAL, BCA or ISO certifications</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <div className="text-7xl mb-2">🤝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sub-contractors</h3>
              <p className="text-gray-700">Aiming to qualify for government-linked projects</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <div className="text-7xl mb-2">🏢</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Corporate Leaders</h3>
              <p className="text-gray-700">Managing DfMA transitions</p>
            </div>
          </div>
        </section>

        {/* Tall Card Who It's For Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Who It's For (Tall Cards)</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center min-h-[350px] h-full justify-between">
              <div>
                <div className="text-7xl mb-4">🧑‍💼</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">SMEs & Traditional Contractors</h3>
                <p className="text-gray-700">Adopting prefab methodologies</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center min-h-[350px] h-full justify-between">
              <div>
                <div className="text-7xl mb-4">🏛️</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Firms Targeting Certifications</h3>
                <p className="text-gray-700">SCAL, BCA or ISO certifications</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center min-h-[350px] h-full justify-between">
              <div>
                <div className="text-7xl mb-4">🤝</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Sub-contractors</h3>
                <p className="text-gray-700">Aiming to qualify for government-linked projects</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center min-h-[350px] h-full justify-between">
              <div>
                <div className="text-7xl mb-4">🏢</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Corporate Leaders</h3>
                <p className="text-gray-700">Managing DfMA transitions</p>
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
                  <p className="text-gray-700">Transition roadmap and change management strategy</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">Gap analysis for DfMA compliance</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">Policy documents and SOP templates</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">Assistance with BCA/SCAL accreditation process</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">Coaching for leadership and team readiness</p>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Organizational Audit (Week 1–2)</h3>
              <p className="text-gray-700">Assess current practices and goals</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Transition Planning (Week 3–4)</h3>
              <p className="text-gray-700">Define scope and align resources</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Implementation Support (Week 5–8)</h3>
              <p className="text-gray-700">Systems, documentation, training</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Accreditation Submission & Prep (Week 9–10)</h3>
              <p className="text-gray-700">Final readiness check</p>
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
                  <label htmlFor="transitionType" className="block text-sm font-medium text-gray-700 mb-2">Transition Type</label>
                  <select
                    id="transitionType"
                    name="transitionType"
                    value={formData.transitionType}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select transition type</option>
                    <option value="organizational">Organizational Restructuring</option>
                    <option value="accreditation">BCA/SCAL Accreditation</option>
                    <option value="iso-certification">ISO Certification</option>
                    <option value="government-projects">Government Project Qualification</option>
                    <option value="complete-transition">Complete DfMA Transition</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="companySize" className="block text-sm font-medium text-gray-700 mb-2">Company Size</label>
                  <select
                    id="companySize"
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select company size</option>
                    <option value="startup">Startup (1-10 employees)</option>
                    <option value="small">Small (11-50 employees)</option>
                    <option value="medium">Medium (51-200 employees)</option>
                    <option value="large">Large (201-1000 employees)</option>
                    <option value="enterprise">Enterprise (1000+ employees)</option>
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
                  placeholder="Tell us more about your transition requirements..."
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