'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqData = [
    {
      question: "What sets prefab.live leasing apart from traditional leases?",
      answer: "Prefab.live offers a more flexible and cost-efficient leasing structure. Key differences include a shorter minimum lease term of 12 months versus 24 months for traditional leases, bundled costs that reduce upfront expenses, and a lower structural rental deposit requirement. While rental rates per square foot may be higher, these factors contribute to lower initial costs and potentially greater overall savings over the lease term."
    },
    {
      question: "How does prefab.live reduce my initial financial commitment?",
      answer: "By bundling fees such as government charges and software subscriptions into the lease, and requiring a smaller security deposit, prefab.live significantly lowers upfront costs compared to conventional leasing options. This design helps free up capital to support your business growth from day one."
    },
    {
      question: "What is the minimum lease term for prefab.live?",
      answer: "Prefab.live leases start with a minimum tenure of 12 months, providing greater flexibility and agility than traditional 24-month lease terms. This shorter commitment period is ideal for businesses seeking adaptable space solutions."
    },
    {
      question: "Is a security deposit required, and how does it compare to traditional leases?",
      answer: "Yes. Prefab.live requires a structural rental deposit equivalent to one month's rent, which is typically half the deposit required for conventional leases. While rental rates per square foot are higher—impacting the absolute deposit amount—this lower month requirement helps reduce your initial cash outlay."
    },
    {
      question: "Are there cost advantages over the entire lease period?",
      answer: "Yes. When evaluating total costs over their respective minimum lease terms, prefab.live leases can offer substantial savings—typically more than 13% compared to traditional leases. This makes prefab.live a cost-effective choice without compromising on quality or service."
    },
    {
      question: "What costs are included in the prefab.live lease rate?",
      answer: "The lease rate covers several fees commonly charged separately in traditional leases, such as IDD software setup and subscriptions, and government fees related to plant and horizontal modules. Including these in the lease rate streamlines your expenses and simplifies budgeting."
    },
    {
      question: "What types of commercial spaces are offered?",
      answer: "The leasing model is designed for a variety of prefabricated commercial spaces. For detailed information on specific space types and availability, please visit our property listings."
    },
    {
      question: "How can I view available properties or learn more?",
      answer: "Explore our current portfolio of premium prefabricated spaces by visiting our property listings. There, you can browse listings tailored to your business needs and contact our leasing team for personalized support."
    }
  ]

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            PrefabLive: Gateway to DfMA
          </h1>
          <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
            <Link href="/about" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 transition text-lg shadow">
              What is DfMA?
            </Link>
            <Link href="/listings" className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition text-lg border border-white shadow">
              Browse Factory Space
            </Link>
          </div>
        </div>
      </section>

      {/* Three-Column Snapshot */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Factory Space */}
            <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center text-center">
              <h3 className="text-2xl font-semibold mb-3">Factory Space</h3>
              <p className="text-gray-700 mb-6">Find MEP-ready factories, PPVC & precast options coming soon.</p>
              <Link href="/listings" className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition">View Listings</Link>
            </div>
            {/* Digital Platform */}
            <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center text-center">
              <h3 className="text-2xl font-semibold mb-3">Digital Platform</h3>
              <p className="text-gray-700 mb-6">Bridge production and site with our plug-and-play IDD platform.</p>
              <a href="#contact" className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition">Request a Trial</a>
            </div>
            {/* Consultancy & Certification */}
            <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center text-center">
              <h3 className="text-2xl font-semibold mb-3">Consultancy & Certification</h3>
              <p className="text-gray-700 mb-6">End-to-end DfMA setup, training & accreditation.</p>
              <a href="#contact" className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition">Explore Services</a>
            </div>
          </div>
        </div>
      </section>

      {/* Flexible Leasing Made Simple Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Main Heading */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Flexible Leasing Made Simple: Your Next Business Space Awaits
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Finding the right commercial space shouldn't tie up your cash or your plans. Our innovative prefabricated leasing solution is built to give growing businesses the flexibility they need—without the heavy upfront costs or long-term commitments.
              </p>
            </div>

            {/* Why Choose Our Leasing Solution */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Our Leasing Solution?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Lower Upfront Costs */}
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Lower Upfront Costs</h4>
                  <p className="text-gray-600">
                    Say goodbye to unexpected fees. We bundle government charges, setup costs, and essential software subscriptions into one straightforward lease, reducing your initial investment by nearly 40%.
                  </p>
                </div>

                {/* Flexible Lease Terms */}
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Flexible Lease Terms</h4>
                  <p className="text-gray-600">
                    Whether you're scaling up or testing new markets, our 12-month minimum lease gives you the freedom to adapt quickly—no more locking into long, inflexible contracts.
                  </p>
                </div>

                {/* Reduced Security Deposits */}
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Reduced Security Deposits</h4>
                  <p className="text-gray-600">
                    Keep your capital where it belongs—in your business. Our lower deposit requirements free up your cash flow, so you can invest in growth, marketing, or operations instead.
                  </p>
                </div>

                {/* Cost Savings Over Time */}
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Cost Savings Over Time</h4>
                  <p className="text-gray-600">
                    When you factor in total costs over the lease term, tenants save up to 15% compared to traditional leases. It's smarter leasing without compromising on quality or support.
                  </p>
                </div>
              </div>
            </div>

            {/* What Our Tenants Say */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Our Tenants Say</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Testimonial 1 */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 italic mb-4">
                    "Switching to this leasing model was a game changer. Lower upfront costs meant we could invest more in expanding our product line. The flexible lease term gave us the freedom to grow without the pressure of a long contract."
                  </p>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">— Lena M.</p>
                    <p className="text-gray-600 text-sm">Retail Store Owner</p>
                  </div>
                </div>

                {/* Testimonial 2 */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 italic mb-4">
                    "The reduced deposit made it possible for us to secure the space we needed while keeping cash available for operations. Highly recommend for any growing business."
                  </p>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">— Mark T.</p>
                    <p className="text-gray-600 text-sm">Tech Startup Founder</p>
                  </div>
                </div>

                {/* Testimonial 3 */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 italic mb-4">
                    "The streamlined leasing process and bundled costs took away a lot of the usual headaches. It's an ideal solution for businesses like ours needing flexibility and cost control."
                  </p>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">— Sarah K.</p>
                    <p className="text-gray-600 text-sm">Consulting Firm Partner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Podcast Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">PMEP Factory Financial ROI Analysis</h2>
            <p className="text-lg text-gray-600 mb-8">
              Listen to our latest podcast episode discussing the financial returns on investment for PMEP factory operations.
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <iframe 
                data-testid="embed-iframe" 
                style={{borderRadius: '12px'}} 
                src="https://open.spotify.com/embed/episode/4dTxJxWDfcBtoEBnIc4XBF?utm_source=generator" 
                width="100%" 
                height="352" 
                frameBorder="0" 
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <svg
                      className={`w-6 h-6 text-gray-500 transform transition-transform ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`px-8 transition-all duration-300 ease-in-out ${
                      openFaq === index ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
                  >
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">Quick Links</h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/listings" className="px-6 py-3 bg-white rounded-lg shadow hover:shadow-lg font-semibold text-blue-900 border border-blue-100">Factory Listings</Link>
            <a href="#contact" className="px-6 py-3 bg-white rounded-lg shadow hover:shadow-lg font-semibold text-blue-900 border border-blue-100">Accreditation Consultancy</a>
            <Link href="/resources" className="px-6 py-3 bg-white rounded-lg shadow hover:shadow-lg font-semibold text-blue-900 border border-blue-100">Resources</Link>
          </div>
        </div>
      </section>
    </div>
  )
} 