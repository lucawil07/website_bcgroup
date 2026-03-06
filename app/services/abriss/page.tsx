import { Metadata } from 'next'
import { StructuredData, createFAQSchema, Breadcrumb } from '@/components/ui'
import { CTAContact } from '@/components/sections'
import AbrissPremiumHero from '@/components/sections/abriss/AbrissPremiumHero'
import AbrissServiceShowcase from '@/components/sections/abriss/AbrissServiceShowcase'
import AbrissProcessTimeline from '@/components/sections/abriss/AbrissProcessTimeline'
import AbrissProjectShowcase from '@/components/sections/abriss/AbrissProjectShowcase'
import AbrissExpertise from '@/components/sections/abriss/AbrissExpertise'

const SERVICE_NAME = 'abriss'
const SERVICE_GERMAN = 'Abriss'

const keywords = [
  'abriss berlin',
  'abrissfirma berlin',
  'abbruch berlin',
  'entkernung berlin',
  'abrissunternehmen berlin',
  'gebäudeabriss berlin',
  'abrissarbeiten berlin',
  'haus abriss berlin',
  'wohnungsabriss berlin',
  'gewerbeabriss berlin',
  'abriss kosten berlin',
  'fachgerechter abriss',
  'ökologischer abriss',
  'demontage berlin',
  'abriss genehmigung berlin',
  'bauschuttentsorgung berlin',
  'recycling abriss berlin',
]

const metadata: Metadata = {
  title: `${SERVICE_GERMAN} Berlin - Fachgerechte Gebäudeabrisse & Demontage | BC Group`,
  description: 'Professionelle Abrissdienste in Berlin: Gebäudeabrisse, Demontagen und Sprengtechnik. Sicher, nachhaltig und genehmigt.',
  keywords: keywords.join(', '),
  alternates: {
    canonical: 'https://bcgroup.de/services/abriss',
  },
  openGraph: {
    title: `${SERVICE_GERMAN} Berlin | BC Group`,
    description: 'Fachgerechte Abrissdienste und Gebäudedemontage in Berlin',
    type: 'website',
    locale: 'de_DE',
  },
}

export { metadata }

export default function AbrissPage() {
  const faqSchema = createFAQSchema([
    {
      question: 'Was kostet ein Abriss in Berlin?',
      answer: 'Die Kosten für einen Abriss in Berlin variieren je nach Gebäudegröße, Material und Zugänglichkeit. BC Group erstellt Ihnen nach einer kostenlosen Besichtigung ein individuelles Festpreisangebot. Kleinere Abrissarbeiten beginnen ab ca. 2.000€.',
    },
    {
      question: 'Brauche ich eine Genehmigung für den Abriss?',
      answer: 'Ja, in Berlin ist für die meisten Abrissarbeiten eine Abrissgenehmigung erforderlich. BC Group unterstützt Sie beim gesamten Genehmigungsprozess und übernimmt die Kommunikation mit den Behörden.',
    },
    {
      question: 'Wie lange dauert ein Abriss?',
      answer: 'Die Dauer eines Abrissprojekts hängt von der Gebäudegröße und Komplexität ab. Kleine Projekte können in 1-3 Tagen abgeschlossen werden, größere Gebäudeabrisse dauern 1-4 Wochen. Nach der Besichtigung erhalten Sie einen detaillierten Zeitplan.',
    },
    {
      question: 'Wie wird der Bauschutt entsorgt?',
      answer: 'BC Group kümmert sich um die fachgerechte Entsorgung des gesamten Bauschutts nach den Berliner Abfallvorschriften. Wir trennen recycelbare Materialien und führen diese der Wiederverwertung zu. Die Entsorgung ist im Angebot enthalten.',
    },
  ])

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://bcgroup.de' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://bcgroup.de/services' },
      { '@type': 'ListItem', 'position': 3, 'name': 'Abriss', 'item': 'https://bcgroup.de/services/abriss' },
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
          description: 'Professionelle Abrissdienste und Gebäudedemontage in Berlin',
          url: 'https://bcgroup.de/services/abriss',
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
            { label: 'Abriss' },
          ]}
          accentColor="#d97706"
        />
        {/* Premium Hero Section */}
        <AbrissPremiumHero />
      </div>

      {/* Service Showcase with Masonry */}
      <AbrissServiceShowcase />

      {/* Interactive Process Timeline */}
      <AbrissProcessTimeline />

      {/* Expertise & Certifications */}
      <AbrissExpertise />

      {/* CTA */}
      <CTAContact />
    </>
  )
}
