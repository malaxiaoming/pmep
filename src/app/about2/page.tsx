// This is a duplicate of the About page for stakeholder comparison.
// You can modify this page independently from the original About page.

import Link from 'next/link'

export default function About2Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Prefab Live</h1>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Our Story Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Story</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-700 leading-relaxed mb-6">
              PrefabLive was born in Singapore, a city-state known for its innovative approach to construction and urban development. Our journey began with TL Advance, a pioneering consultancy firm that recognized the transformative potential of Design for Manufacturing and Assembly (DfMA) in the construction industry.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With deep roots in Singapore's construction ecosystem and a vision to revolutionize how buildings are designed and constructed, we've developed a comprehensive platform that bridges the gap between traditional construction methods and modern, efficient prefabrication techniques.
            </p>
          </div>
        </section>



        {/* Partners & Pilots Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Partners & Pilots</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-700 mb-8">
              We collaborate with leading construction companies, developers, and government agencies to pilot and refine our DfMA solutions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Placeholder logos for pilot partners */}
              <div className="w-full h-20 bg-gray-200 rounded flex items-center justify-center text-gray-400 font-bold border">
                Partner Logo
              </div>
              <div className="w-full h-20 bg-gray-200 rounded flex items-center justify-center text-gray-400 font-bold border">
                Partner Logo
              </div>
              <div className="w-full h-20 bg-gray-200 rounded flex items-center justify-center text-gray-400 font-bold border">
                Partner Logo
              </div>
              <div className="w-full h-20 bg-gray-200 rounded flex items-center justify-center text-gray-400 font-bold border">
                Partner Logo
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section (MODIFIED) */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What Industry Leaders Say About DfMA</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700 italic mb-4">
                "DfMA is transforming the way we think about construction — faster delivery, higher quality, and safer worksites."
              </p>
              <div className="text-right text-gray-900 font-semibold">– Dr. John Keung, Former CEO, BCA Singapore</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700 italic mb-4">
                "Adopting DfMA is not just about productivity—it's about being future-ready in a competitive construction landscape."
              </p>
              <div className="text-right text-gray-900 font-semibold">– Tan Swee Yiow, CEO, Keppel Land (via media interview)</div>
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Case Study</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Collaborative Innovation with STAS</h3>
                <p className="text-gray-700 mb-6">
                  We are proud to announce our collaboration with STAS on a comprehensive case study showcasing the successful implementation of DfMA principles in Singapore's construction industry.
                </p>
                <p className="text-gray-700 mb-6">
                  This joint publication explores real-world applications, challenges overcome, and measurable outcomes that demonstrate the transformative potential of prefabricated MEP solutions.
                </p>
                <div className="flex gap-4">
                  <a 
                    href="/documents/case-studies/stas-collaboration.pdf" 
                    className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition"
                  >
                    Download Case Study
                  </a>
                  <Link 
                    href="/resources" 
                    className="bg-gray-100 text-gray-700 px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition"
                  >
                    View Resources
                  </Link>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg flex items-center justify-center h-64">
                <div className="text-center">
                  <div className="text-6xl mb-4">📄</div>
                  <p className="text-gray-600">Case Study PDF</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 