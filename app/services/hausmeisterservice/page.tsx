import { Metadata } from 'next'
import { StructuredData, createFAQSchema, Breadcrumb } from '@/components/ui'

import HausmeisterPremiumHero from '@/components/sections/hausmeisterservice/HausmeisterPremiumHero'
import HausmeisterServiceGrid from '@/components/sections/hausmeisterservice/HausmeisterServiceGrid'
import HausmeisterContinuousSupport from '@/components/sections/hausmeisterservice/HausmeisterContinuousSupport'
import HausmeisterServiceAreas from '@/components/sections/hausmeisterservice/HausmeisterServiceAreas'
import HausmeisterTeamShowcase from '@/components/sections/hausmeisterservice/HausmeisterTeamShowcase'
import HausmeisterStatistics from '@/components/sections/hausmeisterservice/HausmeisterStatistics'
import HausmeisterCTA from '@/components/sections/hausmeisterservice/HausmeisterCTA'
import { withSeo, BUSINESS_ID } from '@/lib/seo'

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

const metadata: Metadata = withSeo('/services/hausmeisterservice', {
  title: 'Hausmeisterservice Berlin – Objektbetreuung',
  description: 'Hausmeisterservice in Berlin: Gebäudepflege, Reinigung, Gartenpflege, Winterdienst und Objektmanagement aus einer Hand. Jetzt kostenlos beraten lassen!',
  keywords: keywords.join(', '),
  alternates: {
    canonical: 'https://www.bcgroup.berlin/services/hausmeisterservice',
  },
  openGraph: {
    title: `${SERVICE_GERMAN} Berlin | BC Group`,
    description: 'Professionelle Hausmeisterdienste und Gebäudasverwaltung in Berlin',
    type: 'website',
    locale: 'de_DE',
  },
})

export { metadata }

export default function HausmeisterservicePage() {
  const faqSchema = createFAQSchema([
    {
      question: 'Was beinhaltet ein Hausmeisterservice?',
      answer: 'Ein professioneller Hausmeisterservice von BC Group umfasst Gebäudereinigung, Gartenpflege, Winterdienst, kleinere Reparaturen, Müllmanagement, Schlüsseldienst und regelmäßige Gebäudeinspektionen. Wir bieten maßgeschneiderte Servicepakete für Wohnhäuser und Gewerbeobjekte in Berlin.',
    },
    {
      question: 'Was kostet ein Hausmeisterservice in Berlin?',
      answer: 'Die monatlichen Kosten für einen Hausmeisterservice in Berlin richten sich nach Objektgröße, Leistungsumfang und Frequenz. BC Group erstellt Ihnen ein individuelles Angebot. Für kleinere Wohnanlagen beginnen die Preise ab ca. 200€ monatlich.',
    },
    {
      question: 'Übernehmen Sie auch den Winterdienst?',
      answer: 'Ja, BC Group bietet professionellen Winterdienst in Berlin an. Dies umfasst Schneeräumung, Streuen bei Glätte und die Dokumentation der durchgeführten Maßnahmen gemäß der Berliner Räum- und Streupflicht.',
    },
    {
      question: 'Wie schnell können Sie mit dem Hausmeisterservice beginnen?',
      answer: 'BC Group kann in der Regel innerhalb von 1-2 Wochen mit dem Hausmeisterservice beginnen. Nach einer kostenlosen Objektbesichtigung erstellen wir ein individuelles Servicekonzept und stimmen den Starttermin mit Ihnen ab.',
    },
  ])

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.bcgroup.berlin' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://www.bcgroup.berlin/services' },
      { '@type': 'ListItem', 'position': 3, 'name': 'Hausmeisterservice', 'item': 'https://www.bcgroup.berlin/services/hausmeisterservice' },
    ],
  }

  return (
    <>
      <StructuredData data={breadcrumbSchema} />

      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          provider: { '@id': BUSINESS_ID },
          name: `BC Group - ${SERVICE_GERMAN}`,
          description: 'Professionelle Hausmeisterdienste und Gebäudeverwaltung in Berlin',
          url: 'https://www.bcgroup.berlin/services/hausmeisterservice',
          areaServed: {
            '@type': 'City',
            name: 'Berlin',
          },
          serviceType: SERVICE_GERMAN,
        }}
      />
      <StructuredData data={faqSchema} />

      <div className="relative">
        <Breadcrumb
          items={[
            { label: 'Services', href: '/services' },
            { label: 'Hausmeisterservice' },
          ]}
          accentColor="#8b5cf6"
        />
        {/* Premium Hero Section */}
        <HausmeisterPremiumHero />
      </div>

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

      {/* Custom CTA for Hausmeisterservice */}
      <HausmeisterCTA />
    </>
  )
}
