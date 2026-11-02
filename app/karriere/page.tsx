import { Metadata } from 'next'
import {
  KarriereHero,
  WhyJoinBCGroup,
  OpenPositions,
  KarriereContactCTA,
} from '@/components/sections'
import { StructuredData } from '@/components/ui'
import { withSeo } from '@/lib/seo'

export const metadata: Metadata = withSeo('/karriere', {
  title: 'Karriere & Jobs in Berlin',
  description:
    'Karriere bei BC Group Berlin: Jobs in Entrümpelung, Reinigung, Abriss, Umzug und mehr. Wir suchen motivierte Verstärkung für unsere Teams.',
  keywords: 'Karriere Berlin, Jobs, Stellenangebote, Entrümpelung Jobs, Reinigung Jobs, Abriss Jobs, Umzug Jobs, Kurierdienst Jobs, Hausmeisterservice Jobs',
  openGraph: {
    title: 'Karriere bei BC Group | Offene Stellen in Berlin',
    description: 'Entdecken Sie Karrieremöglichkeiten bei BC Group Berlin mit attraktiven Positionen in verschiedenen Bereichen',
    url: 'https://www.bcgroup.berlin/karriere',
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
    canonical: 'https://www.bcgroup.berlin/karriere',
  },
})

// Structured data for job postings

const organizationCareerSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'BC Group',
  url: 'https://www.bcgroup.berlin',
  logo: 'https://www.bcgroup.berlin/icon-512.png',
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
