'use client'

import { useState } from 'react'
import Link from 'next/link'
import { primaryBtn } from '@/components/ui/buttons'

export default function FactorySetupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    timeline: '',
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
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-navy to-brand-navyDark text-white py-20">
        <div className="pointer-events-none absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,_#1479FF_0,_transparent_60%)]" />
        <div className="relative max-w-5xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Factory Setup & Management</h1>
          <p className="text-base md:text-lg text-white/80 mb-8 max-w-3xl mx-auto">
            Strategic planning, lean processes and regulatory compliance for DfMA-ready prefab factories in Singapore.
          </p>
          <div className="flex justify-center">
            <a href="#quote" className={primaryBtn}>
              Get a Factory Setup Quote
            </a>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Overview Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Overview</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-700 leading-relaxed">
              Setting up a DfMA-compliant prefab factory requires more than machinery—it demands strategic planning, lean process integration, and strict compliance with Singapore's regulatory standards. Our consultancy supports contractors and developers in establishing or upgrading prefabrication facilities to achieve optimal efficiency and compliance.
            </p>
          </div>
        </section>

        {/* Who It's For Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Who It's For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <div className="text-7xl mb-2">👷</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Main Contractors</h3>
              <p className="text-gray-700">Looking to build or upgrade prefab factories</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <div className="text-7xl mb-2">🏢</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Developers</h3>
              <p className="text-gray-700">Exploring in-house prefab manufacturing</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <div className="text-7xl mb-2">🧑‍🏫</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">PMEP & Structural Specialists</h3>
              <p className="text-gray-700">Prefab specialists seeking facility optimization</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <div className="text-7xl mb-2">🏛️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Government-Linked Companies</h3>
              <p className="text-gray-700">Transitioning to PPVC/PC components</p>
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
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Main Contractors</h3>
                <p className="text-gray-700">Looking to build or upgrade prefab factories</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center min-h-[350px] h-full justify-between">
              <div>
                <div className="text-7xl mb-4">🏢</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Developers</h3>
                <p className="text-gray-700">Exploring in-house prefab manufacturing</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center min-h-[350px] h-full justify-between">
              <div>
                <div className="text-7xl mb-4">🧑‍🏫</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">PMEP & Structural Specialists</h3>
                <p className="text-gray-700">Prefab specialists seeking facility optimization</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center min-h-[350px] h-full justify-between">
              <div>
                <div className="text-7xl mb-4">🏛️</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Government-Linked Companies</h3>
                <p className="text-gray-700">Transitioning to PPVC/PC components</p>
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
                  <p className="text-gray-700">Feasibility study and capacity planning</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">Layout design for efficient material flow</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">Machinery and automation advisory</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">QA/QC framework implementation</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">Regulatory compliance (BCA, SCDF, MOM, NEA)</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">SOPs and workforce structuring for smooth operations</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process & Timeline Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Process & Timeline</h2>
          <div className="w-full flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            {/* Step 1 */}
            <div className="flex md:flex-col items-center md:items-start flex-1">
              <div className="flex flex-col items-center md:items-center">
                <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold z-10">1</div>
                <div className="hidden md:block w-24 h-1 bg-blue-200 md:my-2"></div>
                <div className="block md:hidden h-8 w-1 bg-blue-200 my-2"></div>
              </div>
              <div className="ml-4 md:ml-0 md:mt-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Discovery & Audit (Week 1–2)</h3>
                <p className="text-gray-700">Site evaluation, goal alignment</p>
              </div>
            </div>
            {/* Step 2 */}
            <div className="flex md:flex-col items-center md:items-start flex-1">
              <div className="flex flex-col items-center md:items-center">
                <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold z-10">2</div>
                <div className="hidden md:block w-24 h-1 bg-blue-200 md:my-2"></div>
                <div className="block md:hidden h-8 w-1 bg-blue-200 my-2"></div>
              </div>
              <div className="ml-4 md:ml-0 md:mt-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Design & Planning (Week 3–5)</h3>
                <p className="text-gray-700">Layout, equipment, manpower</p>
              </div>
            </div>
            {/* Step 3 */}
            <div className="flex md:flex-col items-center md:items-start flex-1">
              <div className="flex flex-col items-center md:items-center">
                <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold z-10">3</div>
                <div className="hidden md:block w-24 h-1 bg-blue-200 md:my-2"></div>
                <div className="block md:hidden h-8 w-1 bg-blue-200 my-2"></div>
              </div>
              <div className="ml-4 md:ml-0 md:mt-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Execution Support (Week 6–10)</h3>
                <p className="text-gray-700">Vendor coordination, SOPs</p>
              </div>
            </div>
            {/* Step 4 */}
            <div className="flex md:flex-col items-center md:items-start flex-1">
              <div className="flex flex-col items-center md:items-center">
                <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold z-10">4</div>
              </div>
              <div className="ml-4 md:ml-0 md:mt-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Commissioning & Handover (Week 11–12)</h3>
                <p className="text-gray-700">Final testing and training</p>
              </div>
            </div>
          </div>
        </section>

        {/* Get a Quote Form */}
        <section id="quote" className="mb-16">
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
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select project type</option>
                    <option value="new-factory">New Factory Setup</option>
                    <option value="upgrade-existing">Upgrade Existing Factory</option>
                    <option value="compliance-audit">Compliance Audit</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">Timeline</label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select timeline</option>
                    <option value="immediate">Immediate (1-3 months)</option>
                    <option value="short-term">Short-term (3-6 months)</option>
                    <option value="medium-term">Medium-term (6-12 months)</option>
                    <option value="long-term">Long-term (12+ months)</option>
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
                  placeholder="Tell us more about your project requirements..."
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