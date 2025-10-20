import {
  HeroCarousel,
  CompanyIntro,
  ServiceOverview,
  ValuesSection,
  NewsSection,
  CTAContact,
} from '@/components/sections'
import { 
  StructuredData, 
  organizationSchema, 
  localBusinessSchema, 
  websiteSchema 
} from '@/components/ui'

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
      <NewsSection />
      <CTAContact />
    </>
  )
}

