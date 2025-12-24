import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Section, Container, Button, ScrollReveal, StructuredData } from '@/components/ui'
import { Calendar, Clock, ArrowLeft, CheckCircle2, AlertCircle, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Entrümpelung richtig planen: Der ultimative Guide | BC Group Berlin',
  description: 'Von der Vorbereitung bis zur Entsorgung – alles, was Sie über eine professionelle Entrümpelung wissen müssen. Expertentipps vom BC Group Team aus Berlin.',
  keywords: [
    'Entrümpelung planen',
    'Entrümpelung Berlin',
    'Entrümpelung Kosten',
    'Entrümpelung Checkliste',
    'Wohnung entrümpeln',
    'Haus entrümpeln',
    'Professionelle Entrümpelung',
  ],
  openGraph: {
    title: 'Entrümpelung richtig planen: Der ultimative Guide',
    description: 'Von der Vorbereitung bis zur Entsorgung – alles über professionelle Entrümpelung',
    type: 'article',
    locale: 'de_DE',
    url: 'https://bc-group.de/ratgeber/entruempelung-richtig-planen',
    siteName: 'BC Group Berlin',
    images: [{
      url: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?q=80&w=1200&auto=format&fit=crop',
      width: 1200,
      height: 630,
      alt: 'Entrümpelung richtig planen',
    }],
    publishedTime: '2024-09-15',
  },
  alternates: {
    canonical: 'https://bc-group.de/ratgeber/entruempelung-richtig-planen',
  },
}

export default function EntruempelungPlanenPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Entrümpelung richtig planen: Der ultimative Guide',
    description: 'Von der Vorbereitung bis zur Entsorgung – alles, was Sie über eine professionelle Entrümpelung wissen müssen.',
    image: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?q=80&w=1200&auto=format&fit=crop',
    datePublished: '2024-09-15',
    dateModified: '2024-09-15',
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
      '@id': 'https://bc-group.de/ratgeber/entruempelung-richtig-planen',
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
        name: 'Entrümpelung richtig planen',
        item: 'https://bc-group.de/ratgeber/entruempelung-richtig-planen',
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
                Entrümpelung
              </span>
            </div>

            <h1 className="text-hero uppercase font-black mb-6 leading-tight">
              Entrümpelung<br />
              <span className="gradient-text">richtig planen</span>
            </h1>

            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/80 text-sm mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>15. September 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>5 Min. Lesezeit</span>
              </div>
            </div>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl">
              Von der Vorbereitung bis zur Entsorgung – alles, was Sie über eine professionelle Entrümpelung wissen müssen. Erfahren Sie, wie Sie Zeit und Kosten sparen.
            </p>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Featured Image */}
      <Section background="white" padding="none">
        <Container size="wide">
          <div className="relative h-[400px] md:h-[600px] -mt-12 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1600518464441-9154a4dea21b?q=80&w=1600&auto=format&fit=crop"
              alt="Entrümpelung richtig planen"
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
                Warum <span className="gradient-text">professionelle Planung</span> wichtig ist
              </h2>
              <p className="text-body-lg text-neutral-700 mb-6">
                Eine Entrümpelung ist mehr als nur das Wegwerfen alter Gegenstände. Sie erfordert sorgfältige Planung, 
                Organisation und oft auch professionelle Unterstützung. Ob Haushaltsauflösung, Messie-Wohnung oder 
                einfach nur eine gründliche Aufräumaktion – mit der richtigen Vorbereitung sparen Sie Zeit, Geld und Nerven.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="text-section font-black uppercase mb-6 mt-12">
                Die <span className="gradient-text">5 Schritte</span> zur erfolgreichen Entrümpelung
              </h2>
            </ScrollReveal>

            {/* Step 1 */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="card-modern p-6 md:p-8 mb-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-black text-xl">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-black mb-4">Bestandsaufnahme und Sortierung</h3>
                    <p className="text-neutral-700 mb-4">
                      Verschaffen Sie sich zunächst einen Überblick über den Umfang der Entrümpelung. Erstellen Sie Listen 
                      und sortieren Sie Gegenstände in folgende Kategorien:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Behalten:</strong> Wertvolle oder persönlich wichtige Gegenstände</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Verkaufen:</strong> Gut erhaltene Möbel und Elektrogeräte</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Spenden:</strong> Kleidung, Bücher, Haushaltswaren</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Entsorgen:</strong> Defekte oder unbrauchbare Gegenstände</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Step 2 */}
            <ScrollReveal direction="up" delay={0.3}>
              <div className="card-modern p-6 md:p-8 mb-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-black text-xl">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-black mb-4">Zeitplan erstellen</h3>
                    <p className="text-neutral-700 mb-4">
                      Je nach Umfang kann eine Entrümpelung mehrere Tage in Anspruch nehmen. Planen Sie realistisch:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span>Kleine Wohnung (1-2 Zimmer): 1-2 Tage</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span>Mittlere Wohnung (3-4 Zimmer): 2-3 Tage</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span>Großes Haus: 4-7 Tage</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Step 3 */}
            <ScrollReveal direction="up" delay={0.4}>
              <div className="card-modern p-6 md:p-8 mb-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-black text-xl">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-black mb-4">Kosten kalkulieren</h3>
                    <p className="text-neutral-700 mb-4">
                      Die Kosten einer professionellen Entrümpelung setzen sich aus verschiedenen Faktoren zusammen:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span>Volumen des Entrümpelungsguts (in m³)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span>Stockwerk und Zugänglichkeit</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span>Entsorgungskosten für Sondermüll</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span>Anfahrtskosten in Berlin und Umgebung</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Step 4 */}
            <ScrollReveal direction="up" delay={0.5}>
              <div className="card-modern p-6 md:p-8 mb-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-black text-xl">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-black mb-4">Professionelle Hilfe beauftragen</h3>
                    <p className="text-neutral-700 mb-4">
                      Bei größeren Entrümpelungen lohnt sich die Beauftragung eines Profis. Vorteile:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span>Zeitersparnis durch erfahrenes Team</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span>Fachgerechte Entsorgung nach Umweltstandards</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span>Versicherungsschutz bei Schäden</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span>All-inclusive Service ohne Zusatzaufwand</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Step 5 */}
            <ScrollReveal direction="up" delay={0.6}>
              <div className="card-modern p-6 md:p-8 mb-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-black text-xl">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-black mb-4">Nachbereitung und Endreinigung</h3>
                    <p className="text-neutral-700 mb-4">
                      Nach der Entrümpelung sollte eine gründliche Endreinigung erfolgen:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span>Staubentfernung von allen Oberflächen</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span>Bodenreinigung (Staubsaugen und Wischen)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span>Fensterreinigung innen und außen</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span>Bei Bedarf: Grundreinigung für Übergabe</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Warning Box */}
            <ScrollReveal direction="up" delay={0.7}>
              <div className="card-modern p-6 md:p-8 mb-8 bg-amber-50 border-2 border-amber-200">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-black mb-2 text-amber-900">Wichtiger Hinweis</h3>
                    <p className="text-neutral-700">
                      Sondermüll wie Farben, Chemikalien, Batterien und Elektronikschrott müssen fachgerecht entsorgt 
                      werden. Informieren Sie sich über die Annahmestellen in Berlin oder lassen Sie dies von einem 
                      professionellen Entrümpelungsdienst übernehmen.
                    </p>
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
                Eine gut geplante Entrümpelung spart nicht nur Zeit und Geld, sondern reduziert auch Stress. Mit professioneller 
                Unterstützung können Sie sich auf das Wesentliche konzentrieren, während Experten die schwere Arbeit übernehmen. 
                BC Group Berlin steht Ihnen mit jahrelanger Erfahrung zur Seite – von der ersten Besichtigung bis zur 
                Endreinigung.
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
              Benötigen Sie professionelle<br />
              <span className="gradient-text">Entrümpelung?</span>
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Unser erfahrenes Team steht Ihnen für ein kostenloses Beratungsgespräch und 
              eine unverbindliche Besichtigung zur Verfügung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt">
                <Button variant="gradient" size="lg" className="shadow-xl">
                  Jetzt Angebot einholen
                </Button>
              </Link>
              <Link href="/services/entruempelung">
                <Button variant="secondary" size="lg">
                  Mehr über Entrümpelung
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
            <Link href="/ratgeber/bueroreinigung-tipps" className="group">
              <div className="card-modern h-full flex flex-col group-hover:scale-[1.02] transition-transform">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=800&auto=format&fit=crop"
                    alt="Büroreinigung Tipps"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-black mb-3 group-hover:text-secondary transition-colors">
                    Büroreinigung: Darauf sollten Sie achten
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Ein sauberes Büro steigert die Produktivität und das Wohlbefinden Ihrer Mitarbeiter.
                  </p>
                </div>
              </div>
            </Link>

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
          </div>
        </Container>
      </Section>
    </>
  )
}
