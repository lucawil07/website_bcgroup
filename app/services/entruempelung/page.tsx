import { Metadata } from 'next'
import { StructuredData } from '@/components/ui'
import { CTAContact } from '@/components/sections'
import EntruempelungPremiumHero from '@/components/sections/entruempelung/EntruempelungPremiumHero'
import EntruempelungServiceShowcase from '@/components/sections/entruempelung/EntruempelungServiceShowcase'
import EntruempelungProcess from '@/components/sections/entruempelung/EntruempelungProcess'
import EntruempelungBenefits from '@/components/sections/entruempelung/EntruempelungBenefits'
import EntruempelungStatistics from '@/components/sections/entruempelung/EntruempelungStatistics'
import EntruempelungFunnelWrapper from '@/components/sections/entruempelung/EntruempelungFunnelWrapper'

const SERVICE_NAME = 'entruempelung'
const SERVICE_GERMAN = 'Entrümpelung'

const keywords = [
  'entrümpelung berlin',
  'entrümpelung kosten',
  'entrümpelungsfirma berlin',
  'wohnungsentrümpelung',
  'hausräumung berlin',
  'keller entrümpelung',
  'speicherentrümpelung',
  'nachlass entrümpelung',
  'gewerbliche entrümpelung',
  'schnelle entrümpelung',
  'professionelle entrümpelung',
  'entrümpelung entsorgung',
  'entrümpelung mit entsorgung',
  'entrümpelung sammelstelle',
  'entrümpelung termine',
]

const metadata: Metadata = {
  title: `${SERVICE_GERMAN} Berlin - Professionelle Wohnungsentrümpelung | BC Group`,
  description: 'Professionelle Entrümpelung in Berlin: Schnell, zuverlässig und umweltgerecht. Wir kümmern uns um Ihre Wohnungsentrümpelung mit vollständiger Entsorgung.',
  keywords: keywords.join(', '),
  openGraph: {
    title: `${SERVICE_GERMAN} Berlin | BC Group`,
    description: 'Professionelle und schnelle Entrümpelung in Berlin - Vollständige Entsorgung',
    type: 'website',
    locale: 'de_DE',
  },
}

export { metadata }

export default function EntruempelungPage() {
  return (
    <EntruempelungFunnelWrapper>
      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: `BC Group - ${SERVICE_GERMAN}`,
          description: 'Professionelle Entrümpelung und Wohnungsräumung in Berlin',
          url: 'https://bcgroup.de/services/entruempelung',
          areaServed: {
            '@type': 'City',
            name: 'Berlin',
          },
          serviceType: SERVICE_GERMAN,
        }}
      />

      {/* Premium Hero Section */}
      <EntruempelungPremiumHero />

      {/* Service Showcase */}
      <EntruempelungServiceShowcase />

      {/* Process Section */}
      <EntruempelungProcess />

      {/* Benefits & Statistics */}
      <EntruempelungBenefits />

      {/* Quick Stats */}
      <EntruempelungStatistics />

      {/* CTA */}
      <CTAContact />
    </EntruempelungFunnelWrapper>
  )
}
