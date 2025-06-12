import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-blue-900">
            PMEP
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/about" className="text-gray-600 hover:text-blue-900">
              About PMEP
            </Link>
            <Link href="/standards" className="text-gray-600 hover:text-blue-900">
              Standards
            </Link>
            <Link href="/projects" className="text-gray-600 hover:text-blue-900">
              Projects
            </Link>
            <Link href="/resources" className="text-gray-600 hover:text-blue-900">
              Resources
            </Link>
            <Link href="/directory" className="text-gray-600 hover:text-blue-900">
              Directory
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-900">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 