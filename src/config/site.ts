export const siteConfig = {
  // Basic site information
  name: 'PrefabLive',
  description: 'Your authoritative source for Prefabricated MEP information, standards, and best practices',
  url: 'https://prefablive.com',
  
  // Contact information
  contact: {
    email: 'tladvance@consultant.com',
    phone: '+65 98765432',
    location: 'Singapore',
  },
  
  // Social media links
  social: {
    facebook: 'https://www.facebook.com/prefablive',
    linkedin: null, // Add when available
    twitter: null, // Add when available
    youtube: null, // Add when available
  },
  
  // Navigation links
  navigation: {
    main: [
      { name: 'Home', href: '/' },
      { name: 'About Us', href: '/about' },
      { name: 'Listing', href: '/listings' },
      { name: 'Resources', href: '/resources' },
      { name: 'Contact', href: '/contact' },
    ],
    consultancy: [
      { name: 'Factory Setup & Management', href: '/consultancy/factory-setup' },
      { name: 'Personnel Training & Certification', href: '/consultancy/personnel-training' },
      { name: 'Project Planning', href: '/consultancy/project-planning' },
      { name: 'Corporate Transition', href: '/consultancy/corporate-transition' },
    ],
  },
  
  // Footer links
  footer: {
    quickLinks: [
      { name: 'Home', href: '/' },
      { name: 'About Us', href: '/about' },
      { name: 'Listing', href: '/listings' },
      { name: 'Resources', href: '/resources' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Sitemap', href: '/sitemap' },
    ],
  },
  
  // SEO metadata
  seo: {
    title: 'PrefabLive - Prefabricated MEP Solutions',
    description: 'Your authoritative source for Prefabricated MEP information, standards, and best practices',
    keywords: ['prefabricated', 'MEP', 'construction', 'building', 'standards', 'consultancy'],
  },
} as const

export type SiteConfig = typeof siteConfig 