import Link from 'next/link'
import { primaryBtn, secondaryBtn } from '@/components/ui/buttons'

const services = [
  {
    title: 'Factory Setup & Management',
    summary: 'End-to-end support for setting up and managing DfMA-ready factories, from layout to operations.',
    link: '/consultancy/factory-setup',
    comingSoon: false
  },
  {
    title: 'DfMA Personnel Training & Certification',
    summary: 'Comprehensive training and certification for your team to meet DfMA standards and best practices.',
    link: '/consultancy/personnel-training',
    comingSoon: true
  },
  {
    title: 'Project Planning',
    summary: 'Expert guidance on DfMA project planning, from feasibility to execution, ensuring optimal outcomes.',
    link: '/consultancy/project-planning',
    comingSoon: false
  },
  {
    title: 'Corporate Transition & Sub-Contractor Accreditation',
    summary: 'Smooth transition for corporates and sub-contractors to DfMA workflows, with accreditation support.',
    link: '/consultancy/corporate-transition',
    comingSoon: true
  }
];

export default function ConsultancyPage() {
  return (
    <div className="min-h-screen bg-brand-bg">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-navy to-brand-navyDark text-white py-20">
        <div className="pointer-events-none absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,_#1479FF_0,_transparent_60%)]" />
        <div className="relative max-w-5xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Consultancy & Certification</h1>
          <p className="text-base md:text-lg text-white/80 mb-8 max-w-3xl mx-auto">
            Unlock the full potential of DfMA with expert support across factory setup, personnel training, project planning and accreditation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/consultancy/factory-setup" className={primaryBtn}>
              Factory Setup Support
            </Link>
            <Link href="/contact" className={secondaryBtn}>
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-navy mb-4 text-center">Our Services</h2>
          <p className="max-w-3xl mx-auto text-sm md:text-base text-slate-700 text-center mb-10">
            Modular consultancy building blocks to support your DfMA strategy—whether you&apos;re starting a factory,
            training teams or planning complex projects.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-brand-navy mb-3">{service.title}</h3>
                  <p className="text-sm text-slate-700 mb-6">{service.summary}</p>
                </div>
                {service.comingSoon ? (
                  <button 
                    disabled 
                    className="inline-flex items-center justify-center rounded-xl px-6 py-2 text-sm font-semibold text-slate-500 bg-slate-100 cursor-not-allowed opacity-60 self-start"
                  >
                    Coming Soon
                  </button>
                ) : (
                  <Link href={service.link} className={`inline-flex items-center justify-center rounded-xl px-6 py-2 text-sm font-semibold text-white shadow-md bg-gradient-to-r from-brand-blue to-brand-blueDark hover:shadow-lg hover:scale-[1.02] transition-transform transition-shadow self-start`}>
                    Learn More
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
} 