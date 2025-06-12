export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">About Prefabricated MEP</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What is PMEP?</h2>
        <p className="text-gray-700 mb-4">
          Prefabricated MEP (Mechanical, Electrical, and Plumbing) is a modern construction approach that involves the off-site manufacturing of building services components. This innovative method brings numerous benefits to the construction industry, including improved quality, reduced construction time, and enhanced safety.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Benefits & Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Key Benefits</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Improved construction quality</li>
              <li>Reduced on-site labor requirements</li>
              <li>Faster project completion</li>
              <li>Enhanced safety standards</li>
              <li>Better cost predictability</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Common Applications</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Commercial buildings</li>
              <li>Healthcare facilities</li>
              <li>Data centers</li>
              <li>Industrial complexes</li>
              <li>Residential developments</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Comparison with Traditional MEP</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 mb-4">
            Traditional MEP installation methods often face challenges such as coordination issues, quality inconsistencies, and schedule delays. PMEP addresses these challenges through:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Standardized manufacturing processes</li>
            <li>Advanced quality control measures</li>
            <li>Better coordination through BIM integration</li>
            <li>Reduced on-site work and associated risks</li>
          </ul>
        </div>
      </section>
    </div>
  )
} 