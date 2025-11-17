import { Metadata } from 'next'
import { StructuredData } from '@/components/ui'
import { CTAContact } from '@/components/sections'
import KurierdienslHero from '@/components/sections/kurierdienst/KurierdienslHero'
import KurierdienslServices from '@/components/sections/kurierdienst/KurierdienslServices'
import KurierdienslBenefits from '@/components/sections/kurierdienst/KurierdienslBenefits'
import KurierdienslServiceAreas from '@/components/sections/kurierdienst/KurierdienslServiceAreas'

const SERVICE_NAME = 'kurierdienst'
const SERVICE_GERMAN = 'Kurierdienst'

const keywords = [
  'kurierdienst berlin',
  'express kurier berlin',
  'same day delivery berlin',
  'kurier express',
  'sperrgut transport berlin',
  'paketservice berlin',
  'schneller kurierdienst',
  'kurierdienst 24/7',
  'express lieferung berlin',
  'kurier samstag berlin',
  'zuverlässiger kurier',
  'kurierdienst günstig',
  'botendienst berlin',
  'expressversand berlin',
]

const metadata: Metadata = {
  title: `${SERVICE_GERMAN} Berlin - Express-Lieferungen & Sperrguttransporte | BC Group`,
  description: 'Express-Kurierdienst in Berlin: Same-Day-Delivery, Sperrguttransport und zuverlässige Lieferungen. Schnell, professionell und überall in Berlin erreichbar.',
  keywords: keywords.join(', '),
  openGraph: {
    title: `${SERVICE_GERMAN} Berlin | BC Group`,
    description: 'Express-Kurierdienst mit schnellster Lieferzeit in Berlin',
    type: 'website',
    locale: 'de_DE',
  },
}

export { metadata }

export default function KurierdienslPage() {
  return (
    <>
      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: `BC Group - ${SERVICE_GERMAN}`,
          description: 'Express-Kurierdienst mit Same-Day-Delivery in Berlin und Umland',
          url: 'https://bcgroup.de/services/kurierdienst',
          areaServed: {
            '@type': 'City',
            name: 'Berlin',
          },
          serviceType: SERVICE_GERMAN,
        }}
      />

      {/* Hero Section - Inspired by Abriss with unique courier theme */}
      <KurierdienslHero />

      {/* Services Showcase - Unique grid layout */}
      <KurierdienslServices />

      {/* Benefits Section - Unique approach with stats */}
      <KurierdienslBenefits />

      {/* Service Areas & Districts - Interactive visualization */}
      <KurierdienslServiceAreas />

      {/* CTA */}
      <CTAContact />
    </>
  )
}
