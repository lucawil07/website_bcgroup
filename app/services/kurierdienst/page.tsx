import { Metadata } from 'next'
import { StructuredData, createFAQSchema, Breadcrumb } from '@/components/ui'
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
  alternates: {
    canonical: 'https://bcgroup.de/services/kurierdienst',
  },
  openGraph: {
    title: `${SERVICE_GERMAN} Berlin | BC Group`,
    description: 'Express-Kurierdienst mit schnellster Lieferzeit in Berlin',
    type: 'website',
    locale: 'de_DE',
  },
}

export { metadata }

export default function KurierdienslPage() {
  const faqSchema = createFAQSchema([
    {
      question: 'Wie schnell liefert der Kurierdienst in Berlin?',
      answer: 'BC Group bietet Express-Lieferungen in Berlin mit einer Zustellzeit von 1-3 Stunden an. Für besonders dringende Sendungen ist ein Same-Day-Service innerhalb von 60 Minuten verfügbar. Unser Kurierdienst ist 24/7 erreichbar.',
    },
    {
      question: 'Was kostet ein Kurierdienst in Berlin?',
      answer: 'Die Kosten für unseren Kurierdienst in Berlin richten sich nach Entfernung, Sendungsgröße und Dringlichkeit. Standard-Lieferungen innerhalb Berlins beginnen ab 15€. Express-Zustellungen und Sperrguttransporte werden individuell kalkuliert.',
    },
    {
      question: 'Können auch sperrige Gegenstände transportiert werden?',
      answer: 'Ja, BC Group transportiert auch Sperrgut, Möbel und großvolumige Sendungen in Berlin. Unser Fuhrpark umfasst verschiedene Fahrzeuggrößen für jeden Bedarf. Kontaktieren Sie uns für ein Angebot.',
    },
    {
      question: 'Ist der Kurierdienst auch am Wochenende verfügbar?',
      answer: 'Ja, der Kurierdienst von BC Group ist 7 Tage die Woche, 24 Stunden am Tag verfügbar. Wir bieten Abholungen und Zustellungen auch an Samstagen, Sonntagen und Feiertagen in Berlin an.',
    },
  ])

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://bcgroup.de' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://bcgroup.de/services' },
      { '@type': 'ListItem', 'position': 3, 'name': 'Kurierdienst', 'item': 'https://bcgroup.de/services/kurierdienst' },
    ],
  }

  return (
    <>
      <StructuredData data={breadcrumbSchema} />

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
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: '320',
            bestRating: '5',
          },
        }}
      />
      <StructuredData data={faqSchema} />

      <div className="relative">
        <Breadcrumb
          items={[
            { label: 'Services', href: '/services' },
            { label: 'Kurierdienst' },
          ]}
          accentColor="#00d4ff"
        />
        {/* Hero Section - Inspired by Abriss with unique courier theme */}
        <KurierdienslHero />
      </div>

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
