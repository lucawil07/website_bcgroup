import { SITE_URL, BUSINESS_ID, ORGANIZATION_ID } from '@/lib/seo'

interface StructuredDataProps {
  data: any
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// Organization Schema for BC Group
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': ORGANIZATION_ID,
  name: 'BC Group Berlin',
  alternateName: ['BC Group', 'Berlin ClearOut'],
  url: 'https://www.bcgroup.berlin',
  logo: `${SITE_URL}/icon-512.png`,
  description: 'Professionelle Dienstleistungen in Berlin: Entrümpelung, Abriss, Reinigung, Hausmeisterservice, Umzug und Kurierdienst.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Willmanndamm 7',
    addressLocality: 'Berlin',
    postalCode: '10827',
    addressCountry: 'DE',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+49-176-63213253',
    email: 'info@bcgroup.berlin',
    contactType: 'customer service',
    areaServed: 'Berlin',
    availableLanguage: ['de', 'en'],
  },
  sameAs: [
    'https://facebook.com/bcgroupberlin',
    'https://instagram.com/bcgroupberlin',
    'https://youtube.com/@bcgroupberlin',
  ],
  foundingDate: '2014',
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    value: 25,
  },
}

// Local Business Schema for BC Group
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'BC Group Berlin',
  image: `${SITE_URL}/images/og-bcgroup.jpg`,
  '@id': BUSINESS_ID,
  logo: `${SITE_URL}/icon-512.png`,
  parentOrganization: { '@id': ORGANIZATION_ID },
  url: 'https://www.bcgroup.berlin',
  telephone: '+49-176-63213253',
  email: 'info@bcgroup.berlin',
  priceRange: '€€',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Willmanndamm 7',
    addressLocality: 'Berlin',
    postalCode: '10827',
    addressCountry: 'DE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 52.4861, // Approximate for Willmanndamm 7
    longitude: 13.3573,
  },
  areaServed: {
    '@type': 'City',
    name: 'Berlin',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '14:00',
    },
  ],
}

// Website Schema
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'BC Group Berlin',
  url: SITE_URL,
  publisher: { '@id': ORGANIZATION_ID },
  inLanguage: 'de-DE',
}

// Service Schemas
export function createServiceSchema(service: {
  name: string
  description: string
  url: string
  image: string
  areaServed?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    name: service.name,
    description: service.description,
    url: service.url,
    image: service.image,
    provider: { '@id': BUSINESS_ID },
    areaServed: {
      '@type': 'City',
      name: service.areaServed || 'Berlin',
    },
  }
}

// Breadcrumb Schema Generator
export function createBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://www.bcgroup.berlin${item.url}`,
    })),
  }
}

// FAQ Schema Generator
export function createFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}
