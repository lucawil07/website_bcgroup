import { Metadata } from 'next'
import { StructuredData } from '@/components/ui'
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
  openGraph: {
    title: `${SERVICE_GERMAN} Berlin | BC Group`,
    description: 'Fachgerechte Abrissdienste und Gebäudedemontage in Berlin',
    type: 'website',
    locale: 'de_DE',
  },
}

export { metadata }

export default function AbrissPage() {
  return (
    <>
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
        }}
      />

      {/* Premium Hero Section */}
      <AbrissPremiumHero />

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
