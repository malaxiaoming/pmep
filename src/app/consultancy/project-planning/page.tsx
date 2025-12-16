'use client'

import { useState } from 'react'
import Link from 'next/link'
import { primaryBtn } from '@/components/ui/buttons'

export default function ProjectPlanningPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    projectSize: '',
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
    <div className="min-h-screen bg-brand-bg">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-navy to-brand-navyDark text-white py-20">
        <div className="pointer-events-none absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,_#1479FF_0,_transparent_60%)]" />
        <div className="relative max-w-5xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Project Planning</h1>
          <p className="text-base md:text-lg text-white/80 mb-8 max-w-3xl mx-auto">
            Align design, production and site logistics early to de-risk DfMA projects and hit productivity targets.
          </p>
          <div className="flex justify-center">
            <a href="#quote" className={primaryBtn}>
              Plan My DfMA Project
            </a>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Overview Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-navy mb-4 text-center">Overview</h2>
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 max-w-4xl mx-auto">
            <p className="text-gray-700 leading-relaxed">
              Planning a DfMA-based project requires early integration of design, production, and logistics. We help stakeholders embed DfMA into the pre-construction and construction phases—mitigating risks and delivering efficient, cost-effective builds aligned with BCA's productivity roadmap.
            </p>
          </div>
        </section>

        {/* Who It's For Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-navy mb-4 text-center">Who It&apos;s For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col items-center text-center">
              <div className="text-7xl mb-2">🏢</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Developers & Consultants</h3>
              <p className="text-gray-700">Seeking DfMA integration expertise</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col items-center text-center">
              <div className="text-7xl mb-2">👷</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Main Contractors</h3>
              <p className="text-gray-700">And DfMA coordinators</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col items-center text-center">
              <div className="text-7xl mb-2">🏗️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Architects & ID Consultants</h3>
              <p className="text-gray-700">Needing DfMA alignment</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col items-center text-center">
              <div className="text-7xl mb-2">🧑‍🔧</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Prefab Specialists</h3>
              <p className="text-gray-700">Planning for long-lead items</p>
            </div>
          </div>
        </section>

        {/* Tall Card Who It's For Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-navy mb-4 text-center">Who It&apos;s For (Tall Cards)</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center min-h-[350px] h-full justify-between">
              <div>
                <div className="text-7xl mb-4">🏢</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Developers & Consultants</h3>
                <p className="text-gray-700">Seeking DfMA integration expertise</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center min-h-[350px] h-full justify-between">
              <div>
                <div className="text-7xl mb-4">👷</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Main Contractors</h3>
                <p className="text-gray-700">And DfMA coordinators</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center min-h-[350px] h-full justify-between">
              <div>
                <div className="text-7xl mb-4">🏗️</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Architects & ID Consultants</h3>
                <p className="text-gray-700">Needing DfMA alignment</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center min-h-[350px] h-full justify-between">
              <div>
                <div className="text-7xl mb-4">🧑‍🔧</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Prefab Specialists</h3>
                <p className="text-gray-700">Planning for long-lead items</p>
              </div>
            </div>
          </div>
        </section>

        {/* What You Get Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-navy mb-4 text-center">What You Get (Deliverables)</h2>
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-brand-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">Precast and MEP sequencing strategy</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-brand-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">DfMA-fitted BIM planning</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-brand-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">Off-site logistics and on-site assembly planning</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-brand-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">Shop drawing coordination</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-brand-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">Integrated timeline with main construction program</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process & Timeline Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-navy mb-4 text-center">Process &amp; Timeline</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Design Review (Week 1–2)</h3>
              <p className="text-gray-700">Assess buildability and prefabrication potential</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Planning Phase (Week 3–5)</h3>
              <p className="text-gray-700">Develop logistics and integration plans</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Coordination (Week 6–8)</h3>
              <p className="text-gray-700">Sync factory and site deliverables</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Monitoring & Revisions (Ongoing)</h3>
              <p className="text-gray-700">Adapt to real-world project demands</p>
            </div>
          </div>
        </section>

        {/* Get a Quote Form */}
        <section id="quote" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-navy mb-4 text-center">Get a Quote</h2>
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
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
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select project type</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="industrial">Industrial</option>
                    <option value="infrastructure">Infrastructure</option>
                    <option value="mixed-use">Mixed-use</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="projectSize" className="block text-sm font-medium text-gray-700 mb-2">Project Size</label>
                  <select
                    id="projectSize"
                    name="projectSize"
                    value={formData.projectSize}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select project size</option>
                    <option value="small">Small (&lt; 10,000 sq ft)</option>
                    <option value="medium">Medium (10,000 - 50,000 sq ft)</option>
                    <option value="large">Large (50,000 - 200,000 sq ft)</option>
                    <option value="mega">Mega (&gt; 200,000 sq ft)</option>
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
                  placeholder="Tell us more about your project planning requirements..."
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className={primaryBtn}
                >
                  Get Quote
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Back to Consultancy */}
        <div className="text-center">
          <Link href="/consultancy" className="text-brand-blue hover:text-brand-blueDark font-semibold">
            ← Back to Consultancy Services
          </Link>
        </div>
      </div>
    </div>
  )
} 