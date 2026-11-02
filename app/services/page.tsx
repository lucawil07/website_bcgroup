import type { Metadata } from 'next'
import Link from 'next/link'
import { Container, Section, StructuredData, createBreadcrumbSchema } from '@/components/ui'
import { ServiceOverview, CTAContact } from '@/components/sections'
import { withSeo } from '@/lib/seo'
import { serviceCatalog } from '@/lib/services'

export const metadata: Metadata = withSeo('/services', {
  title: 'Leistungen in Berlin – alle Services im Überblick',
  description:
    'Alle Leistungen der BC Group in Berlin: Entrümpelung, Abriss, Reinigung, Hausmeisterservice, Umzug und Kurierdienst – mit allen Teilleistungen im Überblick.',
})

export default function ServicesPage() {
  return (
    <>
      <StructuredData
        data={createBreadcrumbSchema([
          { name: 'Home', url: '' },
          { name: 'Leistungen', url: '/services' },
        ])}
      />

      <Section background="gradient" padding="medium" className="pt-32">
        <Container className="text-center">
          <h1 className="text-5xl md:text-6xl font-black text-white uppercase mb-4">
            Unsere Leistungen in Berlin
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Sechs Bereiche, ein Ansprechpartner: von der Entrümpelung bis zum Kurierdienst.
          </p>
        </Container>
      </Section>

      <ServiceOverview />

      <Section background="light" padding="large">
        <Container>
          <h2 className="text-3xl md:text-4xl font-black mb-10">Alle Leistungen im Detail</h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCatalog.map((category) => (
              <div key={category.slug}>
                <h3 className="text-xl font-bold mb-3">
                  <Link href={`/services/${category.slug}`} className="hover:underline">
                    {category.name} Berlin
                  </Link>
                </h3>
                <ul className="space-y-2 text-neutral-700">
                  {category.children.map((child) => (
                    <li key={child.slug}>
                      <Link
                        href={`/services/${category.slug}/${child.slug}`}
                        className="hover:underline"
                      >
                        {child.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTAContact />
    </>
  )
}
