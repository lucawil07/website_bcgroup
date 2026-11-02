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
  websiteSchema 
} from '@/components/ui'
import { withSeo } from '@/lib/seo'

export const metadata: Metadata = withSeo('/', {
  title: { absolute: 'Entrümpelung, Umzug & Reinigung in Berlin | BC Group' },
  description: 'Entrümpelung, Abriss, Reinigung, Hausmeisterservice, Umzug und Kurierdienst in Berlin – alles aus einer Hand. Kostenlose Beratung und faire Festpreise.',
  openGraph: {
    title: 'BC Group Berlin – Entrümpelung, Umzug, Reinigung & mehr',
    description: 'Professionelle Dienstleistungen in Berlin: Entrümpelung, Abriss, Reinigung, Hausmeisterservice, Umzug und Kurierdienst. Kostenlose Beratung und faire Festpreise.',
  },
})

export default function Home() {
  return (
    <>
      {/* Structured Data for SEO */}
      <StructuredData data={organizationSchema} />
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

