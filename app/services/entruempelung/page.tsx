import { Metadata } from 'next'
import { StructuredData, createServiceSchema, createFAQSchema } from '@/components/ui'
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
  const serviceSchema = createServiceSchema({
    name: 'Entrümpelung Berlin',
    description: 'Professionelle Entrümpelung und Wohnungsauflösung in Berlin. Schnell, diskret und besenrein.',
    url: 'https://bcgroup.de/services/entruempelung',
    image: 'https://bcgroup.de/images/services/entruempelung.jpg',
    areaServed: 'Berlin',
  })

  const faqSchema = createFAQSchema([
    {
      question: 'Was kostet eine Entrümpelung in Berlin?',
      answer: 'Die Kosten für eine Entrümpelung in Berlin hängen von der Größe des Objekts und der Menge des zu entsorgenden Guts ab. Wir bieten kostenlose Besichtigungen und Festpreisangebote an.',
    },
    {
      question: 'Wie schnell können Sie entrümpeln?',
      answer: 'In der Regel können wir innerhalb von 24-48 Stunden mit der Entrümpelung beginnen. Für Notfälle bieten wir auch einen Express-Service an.',
    },
    {
      question: 'Muss ich bei der Entrümpelung anwesend sein?',
      answer: 'Nein, Sie müssen nicht die ganze Zeit anwesend sein. Eine Schlüsselübergabe reicht aus. Wir übergeben das Objekt besenrein.',
    },
  ])

  return (
    <EntruempelungFunnelWrapper>
      <StructuredData data={serviceSchema} />
      <StructuredData data={faqSchema} />

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
