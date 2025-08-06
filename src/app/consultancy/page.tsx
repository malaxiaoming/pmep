import Link from 'next/link'

const services = [
  {
    title: 'Factory Setup & Management',
    summary: 'End-to-end support for setting up and managing DfMA-ready factories, from layout to operations.',
    link: '/consultancy/factory-setup'
  },
  {
    title: 'DfMA Personnel Training & Certification',
    summary: 'Comprehensive training and certification for your team to meet DfMA standards and best practices.',
    link: '/consultancy/personnel-training'
  },
  {
    title: 'Project Planning',
    summary: 'Expert guidance on DfMA project planning, from feasibility to execution, ensuring optimal outcomes.',
    link: '/consultancy/project-planning'
  },
  {
    title: 'Corporate Transition & Sub-Contractor Accreditation',
    summary: 'Smooth transition for corporates and sub-contractors to DfMA workflows, with accreditation support.',
    link: '/consultancy/corporate-transition'
  }
];

export default function ConsultancyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Consultancy & Certification</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Unlock the full potential of DfMA with our expert consultancy and certification services for factories, personnel, and projects.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-700 mb-6">{service.summary}</p>
                </div>
                <Link href={service.link} className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition self-start">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
} 