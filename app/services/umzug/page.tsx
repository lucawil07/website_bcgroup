import { Metadata } from 'next'
import { StructuredData, createFAQSchema, Breadcrumb } from '@/components/ui'
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
  alternates: {
    canonical: 'https://bcgroup.de/services/umzug',
  },
  openGraph: {
    title: `${SERVICE_GERMAN} Berlin | BC Group`,
    description: 'Professionelle Umzugsdienste und Möbeltransporte in Berlin und bundesweit',
    type: 'website',
    locale: 'de_DE',
  },
}

export { metadata }

export default function UmzugPage() {
  const faqSchema = createFAQSchema([
    {
      question: 'Was kostet ein Umzug in Berlin?',
      answer: 'Die Kosten für einen Umzug in Berlin hängen von der Wohnungsgröße, Entfernung und dem Umfang der gewünschten Leistungen ab. Ein Umzug einer 2-Zimmer-Wohnung innerhalb Berlins beginnt ab ca. 400€. BC Group bietet eine kostenlose Besichtigung und ein verbindliches Festpreisangebot.',
    },
    {
      question: 'Wie weit im Voraus sollte ich einen Umzug planen?',
      answer: 'Wir empfehlen, Ihren Umzug mindestens 4-6 Wochen im Voraus zu planen. Für Umzüge zum Monatsende oder am Wochenende ist eine frühere Buchung ratsam. BC Group bietet auch kurzfristige Express-Umzüge innerhalb von 24-48 Stunden an.',
    },
    {
      question: 'Bieten Sie auch Umzüge außerhalb von Berlin an?',
      answer: 'Ja, BC Group führt neben lokalen Umzügen in Berlin auch bundesweite und internationale Umzüge durch. Wir übernehmen den gesamten Transport mit eigener Flotte und bieten Komplettpakete inklusive Ein- und Auspacken.',
    },
    {
      question: 'Sind meine Möbel während des Umzugs versichert?',
      answer: 'Ja, alle Umzüge von BC Group sind über eine Transportversicherung abgesichert. Ihre Möbel und Gegenstände sind während des gesamten Transports gegen Beschädigung und Verlust geschützt. Auf Wunsch bieten wir auch erweiterte Versicherungsoptionen an.',
    },
  ])

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://bcgroup.de' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://bcgroup.de/services' },
      { '@type': 'ListItem', 'position': 3, 'name': 'Umzug & Transport', 'item': 'https://bcgroup.de/services/umzug' },
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
      <StructuredData data={faqSchema} />

      <div className="relative">
        <Breadcrumb
          items={[
            { label: 'Services', href: '/services' },
            { label: 'Umzug & Transport' },
          ]}
          accentColor="#f97316"
        />
        {/* Premium Hero Section */}
        <UmzugPremiumHero />
      </div>

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
