import { Metadata } from 'next'
import { StructuredData } from '@/components/ui'
import { CTAContact } from '@/components/sections'
import UmzugPremiumHero from '@/components/sections/umzug/UmzugPremiumHero'
import UmzugMovingTypes from '@/components/sections/umzug/UmzugMovingTypes'
import UmzugProcessTimeline from '@/components/sections/umzug/UmzugProcessTimeline'
import UmzugStatsGuarantee from '@/components/sections/umzug/UmzugStatsGuarantee'
import UmzugServiceAreas from '@/components/sections/umzug/UmzugServiceAreas'

const SERVICE_NAME = 'umzug'
const SERVICE_GERMAN = 'Umzug & Transport'

const keywords = [
  'umzug berlin',
  'umzugsfirma berlin',
  'umzugsunternehmen berlin',
  'umzug kosten',
  'privatumzug',
  'firmenumzug',
  'möbeltransport',
  'umzugsservice',
  'professioneller umzug',
  'umzug mit service',
  'lagerung umzug',
  'internationale umzüge',
  'umzugsteam',
  'umzugshelfer',
  'möbel transport berlin',
  'bundesweiter umzug',
  'seniorenumzug',
  'express umzug',
  'umzug planung',
  'umzug versicherung',
]

const metadata: Metadata = {
  title: `${SERVICE_GERMAN} Berlin - Professionelle Umzugsdienste | BC Group`,
  description: 'Umzugsservice in Berlin: Professionelle Umzüge, Möbeltransport und Lagerlösungen. Versichert, pünktlich, deutschlandweit.',
  keywords: keywords.join(', '),
  openGraph: {
    title: `${SERVICE_GERMAN} Berlin | BC Group`,
    description: 'Professionelle Umzugsdienste und Möbeltransporte in Berlin und bundesweit',
    type: 'website',
    locale: 'de_DE',
  },
}

export { metadata }

export default function UmzugPage() {
  return (
    <>
      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: `BC Group - ${SERVICE_GERMAN}`,
          description: 'Professionelle Umzugsdienste und Möbeltransporte in Berlin und deutschlandweit',
          url: 'https://bcgroup.de/services/umzug',
          areaServed: [
            {
              '@type': 'City',
              name: 'Berlin',
            },
            {
              '@type': 'Country',
              name: 'Deutschland',
            },
          ],
          serviceType: SERVICE_GERMAN,
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            reviewCount: '142',
          },
        }}
      />

      {/* Premium Hero Section */}
      <UmzugPremiumHero />

      {/* Moving Types Showcase */}
      <UmzugMovingTypes />

      {/* Process Timeline */}
      <UmzugProcessTimeline />

      {/* Stats & Guarantees */}
      <UmzugStatsGuarantee />

      {/* Service Areas */}
      <UmzugServiceAreas />

      {/* CTA */}
      <CTAContact />
    </>
  )
}
