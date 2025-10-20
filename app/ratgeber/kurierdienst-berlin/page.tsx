import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Section, Container, Button, ScrollReveal, StructuredData } from '@/components/ui'
import { Calendar, Clock, ArrowLeft, CheckCircle2, Truck, Phone, Package } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Kurierdienst Berlin: Schnell, zuverlässig, günstig | BC Group Berlin',
  description: 'Express-Lieferungen, Sperrguttransport und Same-Day-Delivery in Berlin – erfahren Sie, was ein professioneller Kurierdienst leistet und wie Sie den richtigen Service wählen.',
  keywords: [
    'Kurierdienst Berlin',
    'Express Kurier Berlin',
    'Sperrgut Transport',
    'Same Day Delivery Berlin',
    'Paketservice Berlin',
    'Kurier Berlin',
    'Botendienst Berlin',
  ],
  openGraph: {
    title: 'Kurierdienst Berlin: Schnell, zuverlässig, günstig',
    description: 'Express-Lieferungen, Sperrguttransport und Same-Day-Delivery in Berlin',
    type: 'article',
    locale: 'de_DE',
    url: 'https://bc-group.de/ratgeber/kurierdienst-berlin',
    siteName: 'BC Group Berlin',
    images: [{
      url: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=1200&auto=format&fit=crop',
      width: 1200,
      height: 630,
      alt: 'Kurierdienst Berlin',
    }],
    publishedTime: '2024-09-29',
  },
  alternates: {
    canonical: 'https://bc-group.de/ratgeber/kurierdienst-berlin',
  },
}

export default function KurierdienstBerlinPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Kurierdienst Berlin: Schnell, zuverlässig, günstig',
    description: 'Express-Lieferungen, Sperrguttransport und Same-Day-Delivery in Berlin – was ein professioneller Kurierdienst leistet.',
    image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=1200&auto=format&fit=crop',
    datePublished: '2024-09-29',
    dateModified: '2024-09-29',
    author: {
      '@type': 'Organization',
      name: 'BC Group Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'BC Group Berlin',
      logo: {
        '@type': 'ImageObject',
        url: 'https://bc-group.de/images/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://bc-group.de/ratgeber/kurierdienst-berlin',
    },
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
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Kurierdienst Berlin',
        item: 'https://bc-group.de/ratgeber/kurierdienst-berlin',
      },
    ],
  }

  return (
    <>
      <StructuredData data={articleSchema} />
      <StructuredData data={breadcrumbSchema} />

      {/* Hero Section */}
      <Section background="dark" padding="large" className="pt-32 md:pt-40">
        <Container size="default">
          <ScrollReveal direction="up">
            <Link 
              href="/ratgeber" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-bold uppercase tracking-wider">Zurück zum Ratgeber</span>
            </Link>

            <div className="mb-6">
              <span className="bg-secondary text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
                Kurierdienst
              </span>
            </div>

            <h1 className="text-hero uppercase font-black mb-6 leading-tight">
              Kurierdienst Berlin:<br />
              <span className="gradient-text">Schnell & Zuverlässig</span>
            </h1>

            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/80 text-sm mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>29. September 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>5 Min. Lesezeit</span>
              </div>
            </div>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl">
              Express-Lieferungen, Sperrguttransport und Same-Day-Delivery in Berlin – erfahren Sie, was ein 
              professioneller Kurierdienst leistet und wie Sie den richtigen Service wählen.
            </p>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Featured Image */}
      <Section background="white" padding="none">
        <Container size="wide">
          <div className="relative h-[400px] md:h-[600px] -mt-12 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=1600&auto=format&fit=crop"
              alt="Kurierdienst Berlin"
              fill
              className="object-cover"
              priority
            />
          </div>
        </Container>
      </Section>

      {/* Article Content */}
      <Section background="white" padding="large">
        <Container size="default">
          <div className="prose prose-lg max-w-none">
            <ScrollReveal direction="up">
              <h2 className="text-section font-black uppercase mb-6">
                Warum ein <span className="gradient-text">lokaler Kurierdienst</span> die beste Wahl ist
              </h2>
              <p className="text-body-lg text-neutral-700 mb-6">
                In einer Großstadt wie Berlin zählt jede Minute. Ob wichtige Geschäftsdokumente, Ersatzteile für 
                die Produktion oder sperrige Möbelstücke – ein lokaler Kurierdienst kennt die Stadt wie seine 
                Westentasche und findet immer den schnellsten Weg. Im Gegensatz zu großen Paketdiensten bieten 
                lokale Kuriere flexiblere Lösungen und persönlichen Service.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="text-section font-black uppercase mb-8 mt-12">
                Diese <span className="gradient-text">Leistungen</span> bietet ein Kurierdienst
              </h2>
            </ScrollReveal>

            {/* Service 1 */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="card-modern p-6 md:p-8 mb-8">
                <div className="flex items-start gap-4">
                  <Truck className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-black mb-4">Express-Lieferung</h3>
                    <p className="text-neutral-700 mb-4">
                      Wenn es wirklich eilig ist, ist eine Express-Lieferung die Lösung:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Same-Day-Delivery:</strong> Zustellung am selben Tag</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>2-Stunden-Express:</strong> Lieferung innerhalb von 2 Stunden</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>1-Stunden-Express:</strong> Für absolut dringende Sendungen</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Direct-Kurier:</strong> Direktfahrt ohne weitere Stopps</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Service 2 */}
            <ScrollReveal direction="up" delay={0.3}>
              <div className="card-modern p-6 md:p-8 mb-8">
                <div className="flex items-start gap-4">
                  <Package className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-black mb-4">Sperrgut und Großtransporte</h3>
                    <p className="text-neutral-700 mb-4">
                      Nicht alles passt in einen normalen Paketkarton:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Möbeltransport:</strong> Einzelne Möbelstücke oder komplette Einrichtungen</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Baumaterial:</strong> Lieferung von Baustoffen zur Baustelle</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Geräte & Maschinen:</strong> Sichere Beförderung schwerer Lasten</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Kunstwerke:</strong> Spezialtransport für empfindliche Güter</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Service 3 */}
            <ScrollReveal direction="up" delay={0.4}>
              <div className="card-modern p-6 md:p-8 mb-8">
                <div className="flex items-start gap-4">
                  <Truck className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-black mb-4">Business-Kurierdienste</h3>
                    <p className="text-neutral-700 mb-4">
                      Spezialisierte Services für Geschäftskunden:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Vertragsauslieferung:</strong> Regelmäßige Touren zu festen Konditionen</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Dokumententransport:</strong> Sichere Beförderung wichtiger Unterlagen</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>E-Commerce-Logistik:</strong> Integration in Online-Shops</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Abholservice:</strong> Regelmäßige Abholung bei Geschäftskunden</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Service 4 */}
            <ScrollReveal direction="up" delay={0.5}>
              <div className="card-modern p-6 md:p-8 mb-8">
                <div className="flex items-start gap-4">
                  <Package className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-black mb-4">Zusatzleistungen</h3>
                    <p className="text-neutral-700 mb-4">
                      Mehr als nur Transport – umfassender Service:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Montageservice:</strong> Aufbau und Installation vor Ort</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Entsorgung:</strong> Mitnahme von Altgeräten und Verpackung</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Warehousing:</strong> Temporäre Lagerung bei Bedarf</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Versicherung:</strong> Umfassender Schutz für wertvolle Güter</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Advantages */}
            <ScrollReveal direction="up" delay={0.6}>
              <h2 className="text-section font-black uppercase mb-6 mt-12">
                Vorteile eines <span className="gradient-text">lokalen Kurierdienstes</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="card-modern p-6">
                  <h4 className="font-black text-lg mb-3">Geschwindigkeit</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-sm">Schnellere Lieferzeiten als Paketdienste</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-sm">Same-Day-Delivery möglich</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-sm">Flexible Express-Optionen</span>
                    </li>
                  </ul>
                </div>
                <div className="card-modern p-6">
                  <h4 className="font-black text-lg mb-3">Flexibilität</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-sm">Individuelle Lösungen möglich</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-sm">Auch Sperrgut und Großtransporte</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-sm">Spontane Beauftragung</span>
                    </li>
                  </ul>
                </div>
                <div className="card-modern p-6">
                  <h4 className="font-black text-lg mb-3">Service</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-sm">Persönlicher Ansprechpartner</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-sm">Ortskenntnisse in Berlin</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-sm">Zusatzservices verfügbar</span>
                    </li>
                  </ul>
                </div>
                <div className="card-modern p-6">
                  <h4 className="font-black text-lg mb-3">Zuverlässigkeit</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-sm">Direkter Kontakt zum Fahrer</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-sm">Live-Tracking der Sendung</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-sm">Zustellgarantie</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* Costs */}
            <ScrollReveal direction="up" delay={0.7}>
              <h2 className="text-section font-black uppercase mb-6 mt-12">
                Was kostet ein <span className="gradient-text">Kurierdienst</span> in Berlin?
              </h2>
              <div className="card-modern p-6 md:p-8 mb-8">
                <p className="text-neutral-700 mb-4">
                  Die Kosten variieren je nach Entfernung, Größe und Dringlichkeit:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="font-black text-lg mb-3">Standardlieferung</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Innerhalb Berlin: ab 15 €</li>
                      <li>• Umland (bis 25 km): ab 25 €</li>
                      <li>• Same-Day: ab 30 €</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-black text-lg mb-3">Express & Sondertransporte</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• 2-Stunden-Express: ab 40 €</li>
                      <li>• 1-Stunden-Express: ab 60 €</li>
                      <li>• Sperrgut: ab 50 €</li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Conclusion */}
            <ScrollReveal direction="up" delay={0.8}>
              <h2 className="text-section font-black uppercase mb-6 mt-12">
                <span className="gradient-text">Fazit</span>
              </h2>
              <p className="text-body-lg text-neutral-700 mb-6">
                Ein lokaler Kurierdienst ist die ideale Lösung für alle, die Wert auf Schnelligkeit, Flexibilität 
                und persönlichen Service legen. BC Group Berlin bietet Ihnen einen umfassenden Kurierdienst – von 
                Express-Lieferungen über Sperrguttransporte bis hin zu maßgeschneiderten Business-Lösungen. Unsere 
                Fahrer kennen Berlin wie ihre Westentasche und bringen Ihre Sendung sicher ans Ziel. Kontaktieren 
                Sie uns für ein individuelles Angebot!
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="dark" padding="large">
        <Container size="default">
          <ScrollReveal direction="up" className="text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase">
              Schneller<br />
              <span className="gradient-text">Kurierdienst</span> gesucht?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Wir liefern Ihre Sendungen schnell, sicher und zuverlässig – überall in Berlin und Umgebung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt">
                <Button variant="gradient" size="lg" className="shadow-xl">
                  Jetzt Angebot einholen
                </Button>
              </Link>
              <Link href="/services/kurierdienst">
                <Button variant="secondary" size="lg">
                  Mehr über Kurierdienst
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Related Articles */}
      <Section background="white" padding="large">
        <Container size="wide">
          <ScrollReveal direction="up">
            <h2 className="text-section font-black uppercase mb-8 md:mb-12 text-center">
              Weitere <span className="gradient-text">Artikel</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Link href="/ratgeber/umzug-checkliste" className="group">
              <div className="card-modern h-full flex flex-col group-hover:scale-[1.02] transition-transform">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1464082354059-27db6ce50048?q=80&w=800&auto=format&fit=crop"
                    alt="Umzug Checkliste"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-black mb-3 group-hover:text-secondary transition-colors">
                    Umzug planen: Checkliste für einen stressfreien Umzug
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Mit unserer Schritt-für-Schritt-Anleitung wird Ihr Umzug zum Kinderspiel.
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/ratgeber/entruempelung-richtig-planen" className="group">
              <div className="card-modern h-full flex flex-col group-hover:scale-[1.02] transition-transform">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1600518464441-9154a4dea21b?q=80&w=800&auto=format&fit=crop"
                    alt="Entrümpelung richtig planen"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-black mb-3 group-hover:text-secondary transition-colors">
                    Entrümpelung richtig planen: Der ultimative Guide
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Von der Vorbereitung bis zur Entsorgung – alles über professionelle Entrümpelung.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  )
}
