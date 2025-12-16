import Link from 'next/link'
import { primaryBtn, secondaryBtn } from '@/components/ui/buttons'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-navy to-brand-navyDark text-white py-20">
        <div className="pointer-events-none absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,_#1479FF_0,_transparent_60%)]" />
        <div className="relative max-w-5xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">About Prefab Live</h1>
          <p className="text-base md:text-lg text-white/80 mb-8">
            Learn how PrefabLive connects DfMA-ready factories, digital platforms and expert consultancy into one ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/listings" className={primaryBtn}>
              Browse Factory Space
            </Link>
            <Link href="/consultancy" className={secondaryBtn}>
              Explore Consultancy
            </Link>
          </div>
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