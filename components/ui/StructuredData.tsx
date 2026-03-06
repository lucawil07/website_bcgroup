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
  name: 'BC Group Berlin',
  alternateName: ['BC Group', 'Berlin ClearOut'],
  url: 'https://bcgroup.de',
  logo: 'https://bcgroup.de/images/logo.png',
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
  image: 'https://bcgroup.de/images/image_bcgroup.png',
  '@id': 'https://bcgroup.de',
  url: 'https://bcgroup.de',
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
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '157',
  },
}

// Website Schema
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'BC Group Berlin',
  url: 'https://bcgroup.de',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://bcgroup.de/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
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
    provider: {
      '@type': 'LocalBusiness',
      name: 'BC Group Berlin',
      telephone: '+49-176-63213253',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Berlin',
        addressCountry: 'DE',
      },
    },
    areaServed: {
      '@type': 'City',
      name: service.areaServed || 'Berlin',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '157',
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
      item: `https://bcgroup.de${item.url}`,
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
