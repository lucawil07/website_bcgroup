import { Metadata } from 'next'
import { StructuredData } from '@/components/ui'
import { CTAContact } from '@/components/sections'
import HausmeisterPremiumHero from '@/components/sections/hausmeisterservice/HausmeisterPremiumHero'
import HausmeisterServiceGrid from '@/components/sections/hausmeisterservice/HausmeisterServiceGrid'
import HausmeisterContinuousSupport from '@/components/sections/hausmeisterservice/HausmeisterContinuousSupport'
import HausmeisterServiceAreas from '@/components/sections/hausmeisterservice/HausmeisterServiceAreas'
import HausmeisterTeamShowcase from '@/components/sections/hausmeisterservice/HausmeisterTeamShowcase'
import HausmeisterStatistics from '@/components/sections/hausmeisterservice/HausmeisterStatistics'

const SERVICE_NAME = 'hausmeisterservice'
const SERVICE_GERMAN = 'Hausmeisterservice'

const keywords = [
  'hausmeisterservice berlin',
  'hausmeister berlin',
  'gebäudeverwaltung berlin',
  'immobilienverwaltung berlin',
  'facility management berlin',
  'gebäudereinigung berlin',
  'wartung und instandhaltung',
  'technischer service berlin',
  'hausverwaltung berlin',
  'zuverlässiger hausmeister',
  'professionelle hausmeisterdienste',
  'gebäudeservice berlin',
  'instandhaltungsservice',
  'wartungsservice berlin',
  'facilities berlin',
]

const metadata: Metadata = {
  title: `${SERVICE_GERMAN} Berlin - Professionelle Gebäudeasverwaltung & Wartung | BC Group`,
  description: 'Zuverlässige Hausmeisterdienste in Berlin: Gebäudewartung, Facility Management und Instandhaltung rund um die Uhr.',
  keywords: keywords.join(', '),
  openGraph: {
    title: `${SERVICE_GERMAN} Berlin | BC Group`,
    description: 'Professionelle Hausmeisterdienste und Gebäudeasverwaltung in Berlin',
    type: 'website',
    locale: 'de_DE',
  },
}

export { metadata }

export default function HausmeisterservicePage() {
  return (
    <>
      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: `BC Group - ${SERVICE_GERMAN}`,
          description: 'Professionelle Hausmeisterdienste und Gebäudeverwaltung in Berlin',
          url: 'https://bcgroup.de/services/hausmeisterservice',
          areaServed: {
            '@type': 'City',
            name: 'Berlin',
          },
          serviceType: SERVICE_GERMAN,
        }}
      />

      {/* Premium Hero Section */}
      <HausmeisterPremiumHero />

      {/* Service Grid - Interactive Card System */}
      <HausmeisterServiceGrid />

      {/* Continuous Support & Availability */}
      <HausmeisterContinuousSupport />

      {/* Service Areas Covered */}
      <HausmeisterServiceAreas />

      {/* Team & Expertise Showcase */}
      <HausmeisterTeamShowcase />

      {/* Statistics & Trust Indicators */}
      <HausmeisterStatistics />

      {/* CTA */}
      <CTAContact />
    </>
  )
}
