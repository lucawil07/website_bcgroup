import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Section, Container, Button, ScrollReveal, StructuredData } from '@/components/ui'
import { Calendar, Clock, ArrowLeft, CheckCircle2, AlertTriangle, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Abriss-Genehmigung in Berlin: Das müssen Sie wissen | BC Group Berlin',
  description: 'Wann brauchen Sie eine Abrissgenehmigung? Wie läuft das Verfahren ab? Alle wichtigen Informationen zu Abriss und Genehmigungen in Berlin im Überblick.',
  keywords: [
    'Abrissgenehmigung Berlin',
    'Abriss Genehmigung',
    'Gebäudeabriss Berlin',
    'Abriss beantragen',
    'Abriss ohne Genehmigung',
    'Baugenehmigung Abriss',
    'Abrissarbeiten Berlin',
  ],
  openGraph: {
    title: 'Abriss-Genehmigung in Berlin: Das müssen Sie wissen',
    description: 'Wann brauchen Sie eine Abrissgenehmigung? Alle wichtigen Informationen zu Abriss und Genehmigungen in Berlin',
    type: 'article',
    locale: 'de_DE',
    url: 'https://bc-group.de/ratgeber/abriss-genehmigung',
    siteName: 'BC Group Berlin',
    images: [{
      url: 'https://images.unsplash.com/photo-1590496793929-5b83d9f89c4a?q=80&w=1200&auto=format&fit=crop',
      width: 1200,
      height: 630,
      alt: 'Abriss Genehmigung',
    }],
    publishedTime: '2024-10-12',
  },
  alternates: {
    canonical: 'https://bc-group.de/ratgeber/abriss-genehmigung',
  },
}

export default function AbrissGenehmigungPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Abriss-Genehmigung in Berlin: Das müssen Sie wissen',
    description: 'Wann brauchen Sie eine Abrissgenehmigung? Wie läuft das Verfahren ab? Alle wichtigen Informationen im Überblick.',
    image: 'https://images.unsplash.com/photo-1590496793929-5b83d9f89c4a?q=80&w=1200&auto=format&fit=crop',
    datePublished: '2024-10-12',
    dateModified: '2024-10-12',
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
      '@id': 'https://bc-group.de/ratgeber/abriss-genehmigung',
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
        name: 'Abriss Genehmigung',
        item: 'https://bc-group.de/ratgeber/abriss-genehmigung',
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
                Abriss
              </span>
            </div>

            <h1 className="text-hero uppercase font-black mb-6 leading-tight">
              Abriss-Genehmigung:<br />
              <span className="gradient-text">Was Sie wissen müssen</span>
            </h1>

            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/80 text-sm mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>12. Oktober 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>8 Min. Lesezeit</span>
              </div>
            </div>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl">
              Wann brauchen Sie eine Abrissgenehmigung? Wie läuft das Verfahren ab? Alle wichtigen 
              Informationen zu Abriss und Genehmigungen in Berlin im Überblick.
            </p>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Featured Image */}
      <Section background="white" padding="none">
        <Container size="wide">
          <div className="relative h-[400px] md:h-[600px] -mt-12 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1590496793929-5b83d9f89c4a?q=80&w=1600&auto=format&fit=crop"
              alt="Abriss Genehmigung"
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
                Wann ist eine <span className="gradient-text">Abrissgenehmigung</span> erforderlich?
              </h2>
              <p className="text-body-lg text-neutral-700 mb-6">
                In Berlin gilt: Nicht jeder Abriss benötigt eine Genehmigung, aber die meisten schon. Die Berliner 
                Bauordnung (BauO Bln) regelt genau, wann Sie eine Abrissgenehmigung benötigen und wann nicht. Ein 
                Abriss ohne erforderliche Genehmigung kann zu hohen Bußgeldern und rechtlichen Konsequenzen führen.
              </p>
            </ScrollReveal>

            {/* When Permission Required */}
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="text-section font-black uppercase mb-6 mt-12">
                Diese Abrisse sind <span className="gradient-text">genehmigungspflichtig</span>
              </h2>
              <div className="card-modern p-6 md:p-8 mb-8">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <span><strong>Wohngebäude:</strong> Alle Gebäude, die dem dauerhaften Aufenthalt von Menschen dienen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <span><strong>Denkmalgeschützte Gebäude:</strong> Besonderer Schutz durch Denkmalschutzbehörde</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <span><strong>Gewerbliche Bauten:</strong> Bürogebäude, Läden, Werkstätten über bestimmter Größe</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <span><strong>Gebäude in Milieuschutzgebieten:</strong> Strengere Auflagen in besonderen Wohngebieten</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <span><strong>Größere Nebengebäude:</strong> Abhängig von Größe und Nutzung</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* When No Permission */}
            <ScrollReveal direction="up" delay={0.2}>
              <h2 className="text-section font-black uppercase mb-6 mt-12">
                Diese Abrisse sind <span className="gradient-text">genehmigungsfrei</span>
              </h2>
              <div className="card-modern p-6 md:p-8 mb-8 bg-green-50 border-2 border-green-200">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span><strong>Kleine Gartenhäuser:</strong> Bis 10 m² Grundfläche ohne Aufenthaltsräume</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span><strong>Gewächshäuser:</strong> Bis zu einer bestimmten Größe</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span><strong>Garagen:</strong> Unter 30 m² und ohne Verbindung zum Hauptgebäude</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span><strong>Innenwände:</strong> Nicht tragende Wände im Inneren eines Gebäudes</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Warning Box */}
            <ScrollReveal direction="up" delay={0.3}>
              <div className="card-modern p-6 md:p-8 mb-8 bg-amber-50 border-2 border-amber-200">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-black mb-2 text-amber-900">Wichtig!</h3>
                    <p className="text-neutral-700">
                      Im Zweifelsfall sollten Sie immer beim zuständigen Bauamt nachfragen. Ein ungenehmigter Abriss 
                      kann zu Bußgeldern bis zu 500.000 Euro führen und im schlimmsten Fall muss das Gebäude 
                      wiederaufgebaut werden!
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Application Process */}
            <ScrollReveal direction="up" delay={0.4}>
              <h2 className="text-section font-black uppercase mb-6 mt-12">
                Der <span className="gradient-text">Antragsweg</span> Schritt für Schritt
              </h2>
            </ScrollReveal>

            {/* Step 1 */}
            <ScrollReveal direction="up" delay={0.5}>
              <div className="card-modern p-6 md:p-8 mb-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-black text-xl">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-black mb-4">Vorabklärung</h3>
                    <p className="text-neutral-700 mb-4">
                      Bevor Sie den Antrag stellen, sollten Sie folgende Punkte klären:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span>Ist das Gebäude denkmalgeschützt?</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span>Liegt das Grundstück in einem Milieuschutzgebiet?</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span>Gibt es Altlasten (Asbest, Schadstoffe)?</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span>Sind Nachbarn betroffen?</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Step 2 */}
            <ScrollReveal direction="up" delay={0.6}>
              <div className="card-modern p-6 md:p-8 mb-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-black text-xl">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-black mb-4">Unterlagen zusammenstellen</h3>
                    <p className="text-neutral-700 mb-4">
                      Für den Antrag benötigen Sie folgende Dokumente:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span>Bauantragsformular (vom Bauamt)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span>Lageplan und Grundrisse</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span>Fotos des Gebäudes</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span>Entsorgungskonzept für Bauschutt</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span>Schadstoffgutachten (bei Altbauten)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span>Eigentumsnachweise</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Step 3 */}
            <ScrollReveal direction="up" delay={0.7}>
              <div className="card-modern p-6 md:p-8 mb-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-black text-xl">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-black mb-4">Antrag einreichen</h3>
                    <p className="text-neutral-700 mb-4">
                      Den vollständigen Antrag reichen Sie beim zuständigen Bauamt ein:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span>Zuständig ist das Bauamt des jeweiligen Berliner Bezirks</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span>Bearbeitungsgebühren: ca. 200-500 Euro (je nach Umfang)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span>Bearbeitungszeit: 4-12 Wochen</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Step 4 */}
            <ScrollReveal direction="up" delay={0.8}>
              <div className="card-modern p-6 md:p-8 mb-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-black text-xl">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-black mb-4">Genehmigung abwarten</h3>
                    <p className="text-neutral-700 mb-4">
                      Das Bauamt prüft Ihren Antrag und kann:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Genehmigen:</strong> Sie erhalten die Abrissgenehmigung</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Nachfragen:</strong> Weitere Unterlagen werden angefordert</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Ablehnen:</strong> Der Abriss wird nicht genehmigt (z.B. bei Denkmalschutz)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Costs */}
            <ScrollReveal direction="up" delay={0.9}>
              <h2 className="text-section font-black uppercase mb-6 mt-12">
                Kosten einer <span className="gradient-text">Abrissgenehmigung</span>
              </h2>
              <div className="card-modern p-6 md:p-8 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-black text-lg mb-3">Behördliche Kosten</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Antragsgebühren: 200-500 €</li>
                      <li>• Statikprüfung: 500-1.500 €</li>
                      <li>• Schadstoffgutachten: 500-2.000 €</li>
                      <li>• Vermessung: 300-800 €</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-black text-lg mb-3">Zusätzliche Kosten</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Architekt/Bauplaner: 1.000-3.000 €</li>
                      <li>• Gutachter: 500-2.000 €</li>
                      <li>• Anwalt (bei Problemen): ab 1.500 €</li>
                      <li>• Gesamtkosten: ca. 3.000-10.000 €</li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Conclusion */}
            <ScrollReveal direction="up" delay={1.0}>
              <h2 className="text-section font-black uppercase mb-6 mt-12">
                <span className="gradient-text">Fazit</span>
              </h2>
              <p className="text-body-lg text-neutral-700 mb-6">
                Eine Abrissgenehmigung zu beantragen ist komplex und erfordert umfangreiche Kenntnisse der Berliner 
                Bauordnung. BC Group Berlin unterstützt Sie von der Antragstellung bis zur fachgerechten Durchführung 
                des Abrisses. Wir koordinieren alle notwendigen Schritte, kümmern uns um Genehmigungen und sorgen 
                für einen reibungslosen Ablauf. Kontaktieren Sie uns für eine kostenlose Erstberatung!
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
              Professioneller<br />
              <span className="gradient-text">Abrissservice</span> mit Genehmigung
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Wir kümmern uns um alle Genehmigungen und führen den Abriss fachgerecht und termingerecht durch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt">
                <Button variant="gradient" size="lg" className="shadow-xl">
                  Jetzt beraten lassen
                </Button>
              </Link>
              <Link href="/services/abriss">
                <Button variant="secondary" size="lg">
                  Mehr über Abriss
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
            <Link href="/ratgeber/hausmeisterservice-aufgaben" className="group">
              <div className="card-modern h-full flex flex-col group-hover:scale-[1.02] transition-transform">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop"
                    alt="Hausmeisterservice Aufgaben"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-black mb-3 group-hover:text-secondary transition-colors">
                    Hausmeisterservice: Diese Aufgaben übernimmt ein Hausmeister
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Von der Grünpflege bis zum Winterdienst – alle Aufgaben im Überblick.
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
