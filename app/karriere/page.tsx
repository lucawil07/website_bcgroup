import { Metadata } from 'next'
import {
  KarriereHero,
  WhyJoinBCGroup,
  OpenPositions,
  KarriereContactCTA,
} from '@/components/sections'
import { StructuredData } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Karriere bei BC Group | Jobs in Berlin - Entrümpelung, Reinigung, Umzug',
  description:
    'Starten Sie Ihre Karriere bei BC Group Berlin. Finden Sie offene Stellen in Entrümpelung, Reinigung, Abriss, Umzug und mehr. Wir suchen motivierte Talente für unsere Teams.',
  keywords: 'Karriere Berlin, Jobs, Stellenangebote, Entrümpelung Jobs, Reinigung Jobs, Abriss Jobs, Umzug Jobs, Kurierdienst Jobs, Hausmeisterservice Jobs',
  openGraph: {
    title: 'Karriere bei BC Group | Offene Stellen in Berlin',
    description: 'Entdecken Sie Karrieremöglichkeiten bei BC Group Berlin mit attraktiven Positionen in verschiedenen Bereichen',
    url: 'https://bcgroup.de/karriere',
    type: 'website',
    images: [
      {
        url: '/images/og-karriere.jpg',
        width: 1200,
        height: 630,
        alt: 'BC Group Karriere - Offene Stellen in Berlin',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Karriere bei BC Group Berlin',
    description: 'Offene Stellen und Karrieremöglichkeiten',
    images: ['/images/og-karriere.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
  alternates: {
    canonical: 'https://bcgroup.de/karriere',
  },
}

// Structured data for job postings
const jobPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  hiringOrganization: {
    '@type': 'Organization',
    name: 'BC Group',
    sameAs: 'https://bcgroup.de',
  },
  jobLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'DE',
      addressLocality: 'Berlin',
      addressRegion: 'Berlin',
    },
  },
  baseSalary: {
    '@type': 'PriceSpecification',
    priceCurrency: 'EUR',
    price: 'Auf Anfrage',
  },
}

const organizationCareerSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'BC Group',
  url: 'https://bcgroup.de',
  logo: 'https://bcgroup.de/logo.png',
  description: 'Professionelle Dienstleistungen in Berlin',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'DE',
    addressLocality: 'Berlin',
  },
  // Career page
  knowsAbout: ['Entrümpelung', 'Abriss', 'Reinigung', 'Hausmeisterservice', 'Umzug', 'Kurierdienst'],
}

export default function KarrierePage() {
  return (
    <>
      {/* Structured Data for SEO */}
      <StructuredData data={jobPostingSchema} />
      <StructuredData data={organizationCareerSchema} />

      {/* Scroll anchor for smooth navigation */}
      <div id="content-start" className="scroll-mt-20" />

      {/* Main Sections */}
      <KarriereHero />
      <WhyJoinBCGroup />
      <OpenPositions />

      {/* Custom CTA Contact */}
      <KarriereContactCTA />
    </>
  )
}
