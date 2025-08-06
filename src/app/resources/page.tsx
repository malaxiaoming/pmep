import Link from 'next/link'

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Resources</h1>
          <p className="text-xl md:text-2xl">
            Comprehensive guides, case studies, and insights for DfMA implementation
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Featured Case Study Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Case Study</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Collaborative Innovation with STAS</h3>
                <p className="text-gray-700 mb-6">
                  Our comprehensive case study with STAS showcases the successful implementation of DfMA principles in Singapore's construction industry, featuring real-world applications and measurable outcomes.
                </p>
                <div className="flex gap-4">
                  <a 
                    href="/documents/case-studies/stas-collaboration.pdf" 
                    className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition"
                  >
                    Download Case Study
                  </a>
                  <Link 
                    href="/about" 
                    className="bg-gray-100 text-gray-700 px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg flex items-center justify-center h-64">
                <div className="text-center">
                  <div className="text-6xl mb-4">📄</div>
                  <p className="text-gray-600">STAS Collaboration PDF</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interviews & Case Studies Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Interviews & Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">🎙️</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Financial ROI of DfMA: A Singapore Pilot</h3>
                  <p className="text-gray-600 text-sm">Podcast Interview</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                An in-depth discussion with industry experts on the financial returns and cost benefits of implementing DfMA in Singapore's construction sector.
              </p>
              <div className="flex gap-2">
                <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-blue-700 transition">
                  Listen Now
                </a>
                <a href="#" className="bg-gray-100 text-gray-700 px-4 py-2 rounded text-sm font-semibold hover:bg-gray-200 transition">
                  Read Transcript
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">📊</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">DfMA Implementation Success Stories</h3>
                  <p className="text-gray-600 text-sm">Case Study Collection</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                A compilation of successful DfMA implementations across different project types and scales in the ASEAN region.
              </p>
              <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-blue-700 transition">
                View Collection
              </a>
            </div>
          </div>
        </section>

        {/* White Papers & Guides Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">White Papers & Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">DfMA Implementation Guide</h3>
              <p className="text-gray-700 text-sm mb-4">
                A comprehensive step-by-step guide for implementing DfMA in construction projects.
              </p>
              <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-blue-700 transition">
                Download PDF
              </a>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Assurance Framework</h3>
              <p className="text-gray-700 text-sm mb-4">
                Best practices for maintaining quality standards in prefabricated construction.
              </p>
              <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-blue-700 transition">
                Download PDF
              </a>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cost-Benefit Analysis</h3>
              <p className="text-gray-700 text-sm mb-4">
                Detailed analysis of costs and benefits associated with DfMA adoption.
              </p>
              <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-blue-700 transition">
                Download PDF
              </a>
            </div>
          </div>
        </section>

        {/* Glossary Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Glossary of DfMA Terms</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-700 mb-6">
              Understanding the terminology is crucial for successful DfMA implementation. This glossary covers regional naming variants and cross-references terms used across different markets.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Terms</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-900">DfMA (Design for Manufacturing and Assembly)</h4>
                    <p className="text-gray-600 text-sm">Primary term used in Singapore and UK markets</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-900">MMC (Modern Methods of Construction)</h4>
                    <p className="text-gray-600 text-sm">Commonly used in Malaysia and Australia</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Volumetric Construction</h4>
                    <p className="text-gray-600 text-sm">Preferred term in some ASEAN markets</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Regional Variations</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded">
                    <h4 className="font-semibold text-gray-900">Singapore/UK</h4>
                    <p className="text-gray-600 text-sm">DfMA, Off-site Construction, Prefabrication</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <h4 className="font-semibold text-gray-900">Malaysia/Australia</h4>
                    <p className="text-gray-600 text-sm">MMC, Industrialized Building System (IBS)</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <h4 className="font-semibold text-gray-900">ASEAN Markets</h4>
                    <p className="text-gray-600 text-sm">Volumetric, Modular, Prefabricated</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <a href="#" className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition">
                View Complete Glossary
              </a>
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Industry Reports</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Singapore Construction Industry Transformation Map</li>
                <li>• BCA DfMA Guidelines and Standards</li>
                <li>• ASEAN Construction Market Analysis</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Training Materials</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• DfMA Training Modules</li>
                <li>• Certification Programs</li>
                <li>• Workshop Materials</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 