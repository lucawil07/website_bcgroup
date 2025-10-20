import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Section, Container, Button, ScrollReveal, StaggerContainer, StaggerItem, StructuredData } from '@/components/ui'
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react'

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

interface BlogPost {
  title: string
  excerpt: string
  image: string
  date: string
  readTime: string
  slug: string
  category: string
  author: string
}

const blogPosts: BlogPost[] = [
  {
    title: 'Abriss-Genehmigung in Berlin: Das müssen Sie wissen',
    excerpt: 'Wann brauchen Sie eine Abrissgenehmigung? Wie läuft das Verfahren ab? Alle wichtigen Informationen zu Abriss und Genehmigungen in Berlin im Überblick.',
    image: 'https://images.unsplash.com/photo-1590496793929-5b83d9f89c4a?q=80&w=800&auto=format&fit=crop',
    date: '12. Oktober 2024',
    readTime: '8 Min.',
    slug: 'abriss-genehmigung',
    category: 'Abriss',
    author: 'BC Group Team',
  },
  {
    title: 'Hausmeisterservice: Diese Aufgaben übernimmt ein professioneller Hausmeister',
    excerpt: 'Von der Grünpflege bis zum Winterdienst – erfahren Sie, welche Aufgaben ein professioneller Hausmeisterservice übernimmt und wie Sie davon profitieren können.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop',
    date: '5. Oktober 2024',
    readTime: '7 Min.',
    slug: 'hausmeisterservice-aufgaben',
    category: 'Hausmeisterservice',
    author: 'BC Group Team',
  },
  {
    title: 'Kurierdienst Berlin: Schnell, zuverlässig, günstig',
    excerpt: 'Express-Lieferungen, Sperrguttransport und Same-Day-Delivery in Berlin – erfahren Sie, was ein professioneller Kurierdienst leistet und wie Sie den richtigen Service wählen.',
    image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=800&auto=format&fit=crop',
    date: '29. September 2024',
    readTime: '5 Min.',
    slug: 'kurierdienst-berlin',
    category: 'Kurierdienst',
    author: 'BC Group Team',
  },
  {
    title: 'Grundreinigung Wohnung: Wann ist sie notwendig?',
    excerpt: 'Grundreinigung nach Auszug oder für Neubezug – erfahren Sie, was dazugehört, wie viel es kostet und worauf Sie achten sollten. Expertentipps vom BC Group Team.',
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=800&auto=format&fit=crop',
    date: '22. September 2024',
    readTime: '6 Min.',
    slug: 'grundreinigung-wohnung',
    category: 'Reinigung',
    author: 'BC Group Team',
  },
  {
    title: 'Entrümpelung richtig planen: Der ultimative Guide',
    excerpt: 'Von der Vorbereitung bis zur Entsorgung – alles, was Sie über eine professionelle Entrümpelung wissen müssen. Erfahren Sie, wie Sie Zeit und Kosten sparen.',
    image: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?q=80&w=800&auto=format&fit=crop',
    date: '15. September 2024',
    readTime: '5 Min.',
    slug: 'entruempelung-richtig-planen',
    category: 'Entrümpelung',
    author: 'BC Group Team',
  },
  {
    title: 'Büroreinigung: Darauf sollten Sie achten',
    excerpt: 'Ein sauberes Büro steigert die Produktivität und das Wohlbefinden Ihrer Mitarbeiter. Erfahren Sie, welche Reinigungsstandards wichtig sind und wie oft gereinigt werden sollte.',
    image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=800&auto=format&fit=crop',
    date: '8. September 2024',
    readTime: '4 Min.',
    slug: 'bueroreinigung-tipps',
    category: 'Reinigung',
    author: 'BC Group Team',
  },
  {
    title: 'Umzug planen: Checkliste für einen stressfreien Umzug',
    excerpt: 'Mit unserer Schritt-für-Schritt-Anleitung wird Ihr Umzug zum Kinderspiel. Jetzt Checkliste downloaden und nichts mehr vergessen!',
    image: 'https://images.unsplash.com/photo-1464082354059-27db6ce50048?q=80&w=800&auto=format&fit=crop',
    date: '1. September 2024',
    readTime: '6 Min.',
    slug: 'umzug-checkliste',
    category: 'Umzug',
    author: 'BC Group Team',
  },
]

const categories = ['Alle', 'Entrümpelung', 'Reinigung', 'Umzug', 'Hausmeisterservice', 'Abriss', 'Kurierdienst']

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
      <Section background="dark" padding="large" className="pt-32 md:pt-40">
        <Container size="wide">
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

          {/* Category Filter */}
          <ScrollReveal direction="up" delay={0.2} className="mb-12 md:mb-16">
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-bold text-sm md:text-base transition-all ${
                    category === 'Alle'
                      ? 'bg-secondary text-white shadow-lg shadow-secondary/30'
                      : 'glass text-white hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Blog Posts Grid */}
      <Section background="white" padding="large">
        <Container size="wide">
          <StaggerContainer delay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map((post) => (
              <StaggerItem key={post.slug}>
                <Link 
                  href={`/ratgeber/${post.slug}`} 
                  className="group block"
                  aria-label={`Artikel lesen: ${post.title}`}
                >
                  <article className="card-modern h-full flex flex-col group-hover:scale-[1.02] transition-transform duration-300">
                    <div className="relative overflow-hidden h-56 md:h-64">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                      
                      {/* Category badge */}
                      <div className="absolute top-3 left-3 md:top-4 md:left-4">
                        <span className="bg-secondary text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs font-bold uppercase tracking-wider">
                          {post.category}
                        </span>
                      </div>

                      {/* Date badge */}
                      <div className="absolute top-3 right-3 md:top-4 md:right-4">
                        <div className="glass px-3 py-1.5 md:px-4 md:py-2 rounded-xl">
                          <div className="flex items-center gap-2 text-white text-xs font-bold">
                            <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                            <span className="hidden sm:inline">{post.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 md:p-8 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 text-xs md:text-sm text-neutral-500 mb-3 md:mb-4">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                      
                      <h2 className="text-lg md:text-xl font-black text-primary mb-3 md:mb-4 leading-tight group-hover:text-secondary transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                      
                      <p className="text-sm md:text-base text-neutral-600 leading-relaxed mb-4 md:mb-6 line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-2 text-secondary font-bold text-xs md:text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                        <span>Weiterlesen</span>
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Stats */}
          <ScrollReveal direction="up" delay={0.3} className="text-center mt-12 md:mt-16">
            <div className="inline-flex items-center gap-2 text-neutral-600">
              <span className="text-sm md:text-base font-bold">{blogPosts.length} Artikel</span>
              <span className="text-neutral-400">•</span>
              <span className="text-sm md:text-base">Regelmäßig neue Inhalte</span>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="light" padding="large">
        <Container size="default">
          <ScrollReveal direction="up" className="text-center">
            <div className="card-modern p-8 md:p-12 bg-gradient-to-br from-primary to-primary/90">
              <h2 className="text-2xl md:text-4xl font-black text-white mb-4 md:mb-6 uppercase">
                Haben Sie Fragen?
              </h2>
              <p className="text-base md:text-lg text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto">
                Unser Team steht Ihnen jederzeit für eine persönliche Beratung zur Verfügung.
              </p>
              <Link href="/kontakt">
                <Button variant="secondary" size="lg" className="shadow-xl">
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
