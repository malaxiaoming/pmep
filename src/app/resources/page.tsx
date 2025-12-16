import Link from 'next/link'
import { primaryBtn, secondaryBtn } from '@/components/ui/buttons'

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-brand-bg">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-navy to-brand-navyDark text-white py-20">
        <div className="pointer-events-none absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,_#1479FF_0,_transparent_60%)]" />
        <div className="relative max-w-5xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Resources</h1>
          <p className="text-base md:text-lg text-white/80 mb-8">
            Guides, case studies and standards to help you implement DfMA and prefabricated MEP confidently.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/documents/case-studies/stas-collaboration.pdf" className={primaryBtn}>
              Download STAS Case Study
            </Link>
            <Link href="/standards" className={secondaryBtn}>
              View Standards
            </Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Featured Case Study Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-navy mb-4 text-center">Featured Case Study</h2>
          <p className="max-w-3xl mx-auto text-sm md:text-base text-slate-700 text-center mb-10">
            Explore how DfMA and prefabricated MEP deliver measurable impact in real projects.
          </p>
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Collaborative Innovation with STAS</h3>
                <p className="text-gray-700 mb-6">
                  Our comprehensive case study with STAS showcases the successful implementation of DfMA principles in Singapore's construction industry, featuring real-world applications and measurable outcomes.
                </p>
                <div className="flex gap-4">
                  <a 
                    href="/documents/case-studies/stas-collaboration.pdf" 
                    className={primaryBtn}
                  >
                    Download Case Study
                  </a>
                  <Link 
                    href="/about" 
                    className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="bg-brand-bg rounded-2xl flex items-center justify-center h-64">
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
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-navy mb-4 text-center">Interviews & Case Studies</h2>
          <p className="max-w-3xl mx-auto text-sm md:text-base text-slate-700 text-center mb-10">
            Dive deeper into financial ROI, implementation stories and expert perspectives on DfMA.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
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
                <a href="#" className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-md bg-gradient-to-r from-brand-blue to-brand-blueDark hover:shadow-lg hover:scale-[1.02] transition-transform transition-shadow">
                  Listen Now
                </a>
                <a href="#" className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 transition-colors">
                  Read Transcript
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
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
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-navy mb-4 text-center">White Papers & Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">DfMA Implementation Guide</h3>
              <p className="text-gray-700 text-sm mb-4">
                A comprehensive step-by-step guide for implementing DfMA in construction projects.
              </p>
              <a href="#" className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-md bg-gradient-to-r from-brand-blue to-brand-blueDark hover:shadow-lg hover:scale-[1.02] transition-transform transition-shadow">
                Download PDF
              </a>
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Assurance Framework</h3>
              <p className="text-gray-700 text-sm mb-4">
                Best practices for maintaining quality standards in prefabricated construction.
              </p>
              <a href="#" className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-md bg-gradient-to-r from-brand-blue to-brand-blueDark hover:shadow-lg hover:scale-[1.02] transition-transform transition-shadow">
                Download PDF
              </a>
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cost-Benefit Analysis</h3>
              <p className="text-gray-700 text-sm mb-4">
                Detailed analysis of costs and benefits associated with DfMA adoption.
              </p>
              <a href="#" className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-md bg-gradient-to-r from-brand-blue to-brand-blueDark hover:shadow-lg hover:scale-[1.02] transition-transform transition-shadow">
                Download PDF
              </a>
            </div>
          </div>
        </section>

        {/* Glossary Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-navy mb-4 text-center">Glossary of DfMA Terms</h2>
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
            <p className="text-gray-700 mb-6">
              Understanding the terminology is crucial for successful DfMA implementation. This glossary covers regional naming variants and cross-references terms used across different markets.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Terms</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-brand-blue pl-4">
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
              <a href="#" className={primaryBtn}>
                View Complete Glossary
              </a>
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-navy mb-4 text-center">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Industry Reports</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Singapore Construction Industry Transformation Map</li>
                <li>• BCA DfMA Guidelines and Standards</li>
                <li>• ASEAN Construction Market Analysis</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
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