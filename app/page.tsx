import type { Metadata } from 'next'
import {
  HeroCarousel,
  CompanyIntro,
  ServiceOverview,
  ValuesSection,
  NewsSection,
  CTAContact,
} from '@/components/sections'
import { ReviewMarquee } from '@/components/sections/ReviewMarquee'
import { 
  StructuredData, 
  organizationSchema, 
  localBusinessSchema, 
  websiteSchema 
} from '@/components/ui'

export const metadata: Metadata = {
  title: 'BC Group Berlin – Ihr Servicepartner für Entrümpelung, Abriss, Reinigung & mehr',
  description: 'BC Group Berlin bietet professionelle Dienstleistungen: Entrümpelung, Abriss, Reinigung, Hausmeisterservice, Umzug und Kurierdienst. Über 300 positive Bewertungen. Kostenlose Beratung ✓ Faire Festpreise ✓ 24/7 erreichbar.',
  alternates: {
    canonical: 'https://bcgroup.de',
  },
  openGraph: {
    title: 'BC Group Berlin – Ihr Servicepartner für Entrümpelung, Abriss, Reinigung & mehr',
    description: 'Professionelle Dienstleistungen in Berlin: Entrümpelung, Abriss, Reinigung, Hausmeisterservice, Umzug und Kurierdienst. Kostenlose Beratung und faire Festpreise.',
    url: 'https://bcgroup.de',
    type: 'website',
    locale: 'de_DE',
  },
}

export default function Home() {
  return (
    <>
      {/* Structured Data for SEO */}
      <StructuredData data={organizationSchema} />
      <StructuredData data={localBusinessSchema} />
      <StructuredData data={websiteSchema} />
      
      <HeroCarousel />
      
      {/* Scroll anchor for smooth navigation */}
      <div id="content-start" className="scroll-mt-20" />
      
      <CompanyIntro />
      <ServiceOverview />
      <ReviewMarquee />
      <NewsSection />
    </>
  )
}

