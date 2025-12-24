import { Metadata } from 'next'
import { StructuredData } from '@/components/ui'
import { CTAContact } from '@/components/sections'
import ReinigungModernHero from '@/components/sections/reinigung/ReinigungModernHero'
import ReinigungServiceTypes from '@/components/sections/reinigung/ReinigungServiceTypes'
import ReinigungProcess from '@/components/sections/reinigung/ReinigungProcess'
import ReinigungAreaShowcase from '@/components/sections/reinigung/ReinigungAreaShowcase'

const SERVICE_NAME = 'reinigung'
const SERVICE_GERMAN = 'Reinigung'

const keywords = [
  'gebäudereinigung berlin',
  'büroreinigung berlin',
  'gebäudereinigung',
  'professionelle reinigung',
  'reinigungsfirma berlin',
  'gebäudekeeping berlin',
  'unterhaltsreinigung berlin',
  'grundreinigung berlin',
  'fensterreinigung berlin',
  'praxisreinigung berlin',
  'treppenhausreinigung berlin',
  'büroreinigung kosten',
  'reinigung berlin preise',
  'eco reinigung berlin',
  'umweltfreundliche reinigung',
  'ökologische reinigung berlin',
]

const metadata: Metadata = {
  title: `${SERVICE_GERMAN} Berlin - Professionelle Gebäudereinigung | BC Group`,
  description: 'Professionelle Gebäudereinigung in Berlin: Büroreinigung, Grundreinigung, Fensterreinigung & mehr. Zertifiziert, zuverlässig, umweltfreundlich.',
  keywords: keywords.join(', '),
  openGraph: {
    title: `${SERVICE_GERMAN} Berlin | BC Group`,
    description: 'Professionelle Gebäudereinigung und Unterhaltsreinigung in Berlin',
    type: 'website',
    locale: 'de_DE',
  },
}

export { metadata }

export default function ReinigungPage() {
  return (
    <>
      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: `BC Group - ${SERVICE_GERMAN}`,
          description: 'Professionelle Gebäudereinigung und Unterhaltsreinigung in Berlin',
          url: 'https://bcgroup.de/services/reinigung',
          areaServed: {
            '@type': 'City',
            name: 'Berlin',
          },
          serviceType: SERVICE_GERMAN,
        }}
      />

      {/* Premium Modern Hero Section */}
      <ReinigungModernHero />

      {/* Service Types Showcase */}
      <ReinigungServiceTypes />

      {/* Process Timeline */}
      <ReinigungProcess />

      {/* CTA */}
      <CTAContact />
    </>
  )
}
