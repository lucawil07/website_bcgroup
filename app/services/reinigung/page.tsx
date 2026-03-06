import { Metadata } from 'next'
import { StructuredData, createFAQSchema, Breadcrumb } from '@/components/ui'
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
  alternates: {
    canonical: 'https://bcgroup.de/services/reinigung',
  },
  openGraph: {
    title: `${SERVICE_GERMAN} Berlin | BC Group`,
    description: 'Professionelle Gebäudereinigung und Unterhaltsreinigung in Berlin',
    type: 'website',
    locale: 'de_DE',
  },
}

export { metadata }

export default function ReinigungPage() {
  const faqSchema = createFAQSchema([
    {
      question: 'Was kostet eine professionelle Reinigung in Berlin?',
      answer: 'Die Kosten für eine professionelle Reinigung hängen von der Fläche, dem Verschmutzungsgrad und der Art der Reinigung ab. BC Group erstellt Ihnen ein individuelles Angebot nach einer kostenlosen Besichtigung. Büroreinigungen beginnen ab ca. 15€ pro Stunde.',
    },
    {
      question: 'Wie oft sollte eine Büroreinigung durchgeführt werden?',
      answer: 'Für Büroräume empfehlen wir eine regelmäßige Reinigung 2-5 Mal pro Woche, je nach Frequentierung und Branche. BC Group bietet flexible Reinigungsintervalle an, die auf Ihre Bedürfnisse abgestimmt sind.',
    },
    {
      question: 'Verwenden Sie umweltfreundliche Reinigungsmittel?',
      answer: 'Ja, BC Group setzt auf umweltfreundliche und biologisch abbaubare Reinigungsmittel. Unsere ökologische Reinigungsstrategie schont die Umwelt und ist gleichzeitig sicher für Mitarbeiter und Besucher Ihrer Räumlichkeiten.',
    },
    {
      question: 'Bieten Sie auch Grundreinigungen an?',
      answer: 'Ja, BC Group bietet professionelle Grundreinigungen für Wohnungen, Büros und Gewerberäume in Berlin an. Eine Grundreinigung umfasst die intensive Tiefenreinigung aller Oberflächen, Böden, Fenster und schwer zugänglicher Bereiche.',
    },
  ])

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://bcgroup.de' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://bcgroup.de/services' },
      { '@type': 'ListItem', 'position': 3, 'name': 'Reinigung', 'item': 'https://bcgroup.de/services/reinigung' },
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
          description: 'Professionelle Gebäudereinigung und Unterhaltsreinigung in Berlin',
          url: 'https://bcgroup.de/services/reinigung',
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
            { label: 'Reinigung' },
          ]}
          accentColor="#06b6d4"
        />
        {/* Premium Modern Hero Section */}
        <ReinigungModernHero />
      </div>

      {/* Service Types Showcase */}
      <ReinigungServiceTypes />

      {/* Process Timeline */}
      <ReinigungProcess />

      {/* CTA */}
      <CTAContact />
    </>
  )
}
