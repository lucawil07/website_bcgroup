import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Section, Container, Button, ScrollReveal, StructuredData } from '@/components/ui'
import RatgeberContent from '@/components/sections/RatgeberContent'

export const metadata: Metadata = {
  title: 'Ratgeber & News | BC Group Berlin - Tipps zu Entrümpelung, Reinigung & Umzug',
  description: 'Expertenwissen rund um Entrümpelung, Reinigung, Umzug, Abriss und Hausmeisterservice in Berlin. Praktische Tipps, Checklisten und aktuelle Neuigkeiten von BC Group.',
  keywords: [
    'Ratgeber Entrümpelung',
    'Reinigung Tipps Berlin',
    'Umzug Checkliste',
    'Hausmeisterservice Guide',
    'Abriss Planung',
    'BC Group News',
    'Dienstleistungen Berlin',
  ],
  openGraph: {
    title: 'Ratgeber & News | BC Group Berlin',
    description: 'Expertenwissen rund um Entrümpelung, Reinigung, Umzug, Abriss und Hausmeisterservice in Berlin.',
    type: 'website',
    locale: 'de_DE',
    url: 'https://bc-group.de/ratgeber',
    siteName: 'BC Group Berlin',
  },
  alternates: {
    canonical: 'https://bc-group.de/ratgeber',
  },
}

const blogPosts = [
  {
    title: 'Abriss-Genehmigung in Berlin: Das müssen Sie wissen',
    slug: 'abriss-genehmigung',
    excerpt: 'Wann brauchen Sie eine Abrissgenehmigung? Wie läuft das Verfahren ab?',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop',
    date: '12. Oktober 2024',
    category: 'Abriss',
    author: 'BC Group Team',
  },
]

export default function RatgeberPage() {
  // Structured Data for Blog
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'BC Group Berlin Ratgeber',
    description: 'Expertenwissen rund um Entrümpelung, Reinigung, Umzug, Abriss und Hausmeisterservice in Berlin',
    url: 'https://bc-group.de/ratgeber',
    publisher: {
      '@type': 'Organization',
      name: 'BC Group Berlin',
      logo: {
        '@type': 'ImageObject',
        url: 'https://bc-group.de/images/logo.png',
      },
    },
    blogPost: blogPosts.map(post => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      image: post.image,
      datePublished: post.date,
      author: {
        '@type': 'Organization',
        name: post.author,
      },
      url: `https://bc-group.de/ratgeber/${post.slug}`,
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://bc-group.de',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Ratgeber',
        item: 'https://bc-group.de/ratgeber',
      },
    ],
  }

  return (
    <>
      <StructuredData data={blogSchema} />
      <StructuredData data={breadcrumbSchema} />

      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 py-12 md:py-16 lg:py-20 overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
            alt="Knowledge and Expertise Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        {/* Content */}
        <Container size="wide" className="relative z-10">
          <ScrollReveal direction="up" className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-6">
              <span className="text-secondary font-bold text-sm uppercase tracking-[0.3em] bg-secondary/20 px-6 py-2 rounded-full">
                Ratgeber & News
              </span>
            </div>
            <h1 className="text-hero uppercase font-black mb-6 leading-tight">
              WISSEN &<br />
              <span className="gradient-text">EXPERTISE</span>
            </h1>
            <p className="text-base md:text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Expertentipps, praktische Anleitungen und aktuelle Neuigkeiten rund um unsere Dienstleistungen in Berlin
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* Blog Posts Section with Filtering */}
      <Section background="light" padding="large">
        <Container size="wide">
          <RatgeberContent />
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="white" padding="large" className="bg-gradient-to-b from-white to-neutral-800">
        <Container size="default">
          <ScrollReveal direction="up" className="text-center">
            <div className="card-modern p-8 md:p-12 bg-white">
              <h2 className="text-2xl md:text-4xl font-black text-primary mb-4 md:mb-6 uppercase">
                Haben Sie Fragen?
              </h2>
              <p className="text-base md:text-lg text-neutral-600 mb-6 md:mb-8 max-w-2xl mx-auto">
                Unser Team steht Ihnen jederzeit für eine persönliche Beratung zur Verfügung.
              </p>
              <Link href="/kontakt">
                <Button variant="primary" size="lg" className="shadow-xl">
                  Jetzt kontaktieren
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </Container>
      </Section>
    </>
  )
}
