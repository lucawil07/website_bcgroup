import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Section, Container, Button, ScrollReveal, StructuredData } from '@/components/ui'
import { Calendar, Clock, ArrowLeft, CheckCircle2, Sparkles, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Grundreinigung Wohnung: Wann ist sie notwendig? | BC Group Berlin',
  description: 'Grundreinigung nach Auszug oder für Neubezug – erfahren Sie, was dazugehört, wie viel es kostet und worauf Sie achten sollten. Expertentipps vom BC Group Team.',
  keywords: [
    'Grundreinigung Wohnung',
    'Grundreinigung Berlin',
    'Grundreinigung Kosten',
    'Endreinigung Wohnung',
    'Wohnung grundreinigen',
    'Auszugsreinigung',
    'Professionelle Grundreinigung',
  ],
  openGraph: {
    title: 'Grundreinigung Wohnung: Wann ist sie notwendig?',
    description: 'Grundreinigung nach Auszug oder für Neubezug – was dazugehört und worauf Sie achten sollten',
    type: 'article',
    locale: 'de_DE',
    url: 'https://bc-group.de/ratgeber/grundreinigung-wohnung',
    siteName: 'BC Group Berlin',
    images: [{
      url: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=1200&auto=format&fit=crop',
      width: 1200,
      height: 630,
      alt: 'Grundreinigung Wohnung',
    }],
    publishedTime: '2024-09-22',
  },
  alternates: {
    canonical: 'https://bc-group.de/ratgeber/grundreinigung-wohnung',
  },
}

export default function GrundreinigungWohnungPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Grundreinigung Wohnung: Wann ist sie notwendig?',
    description: 'Grundreinigung nach Auszug oder für Neubezug – erfahren Sie, was dazugehört und wie viel es kostet.',
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=1200&auto=format&fit=crop',
    datePublished: '2024-09-22',
    dateModified: '2024-09-22',
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
      '@id': 'https://bc-group.de/ratgeber/grundreinigung-wohnung',
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
        name: 'Grundreinigung Wohnung',
        item: 'https://bc-group.de/ratgeber/grundreinigung-wohnung',
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
                Reinigung
              </span>
            </div>

            <h1 className="text-hero uppercase font-black mb-6 leading-tight">
              Grundreinigung:<br />
              <span className="gradient-text">Wann notwendig?</span>
            </h1>

            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/80 text-sm mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>22. September 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>6 Min. Lesezeit</span>
              </div>
            </div>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl">
              Grundreinigung nach Auszug oder für Neubezug – erfahren Sie, was dazugehört, wie viel es kostet 
              und worauf Sie achten sollten. Expertentipps vom BC Group Team.
            </p>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Featured Image */}
      <Section background="white" padding="none">
        <Container size="wide">
          <div className="relative h-[400px] md:h-[600px] -mt-12 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=1600&auto=format&fit=crop"
              alt="Grundreinigung Wohnung"
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
                Was ist eine <span className="gradient-text">Grundreinigung?</span>
              </h2>
              <p className="text-body-lg text-neutral-700 mb-6">
                Eine Grundreinigung geht weit über die normale Haushaltsreinigung hinaus. Es handelt sich um eine 
                intensive, gründliche Reinigung aller Bereiche einer Wohnung oder eines Hauses. Besonders wichtig 
                ist sie beim Auszug, um die Wohnung besenrein zu übergeben, oder beim Einzug, um in eine wirklich 
                saubere Wohnung zu ziehen.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="text-section font-black uppercase mb-8 mt-12">
                Wann ist eine <span className="gradient-text">Grundreinigung</span> sinnvoll?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="card-modern p-6">
                  <h4 className="font-black text-lg mb-3">Für Mieter</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-sm">Bei Auszug (Übergabepflicht)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-sm">Bei Einzug in Altbau</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-sm">Für Kautionsrückgabe</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-sm">Nach Renovierungsarbeiten</span>
                    </li>
                  </ul>
                </div>
                <div className="card-modern p-6">
                  <h4 className="font-black text-lg mb-3">Für Vermieter</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-sm">Vor Neuvermietung</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-sm">Nach Mieterauszug</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-sm">Für Besichtigungstermine</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-sm">Werterhalt der Immobilie</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <h2 className="text-section font-black uppercase mb-6 mt-12">
                Was gehört zur <span className="gradient-text">Grundreinigung</span> dazu?
              </h2>
            </ScrollReveal>

            {/* Area 1: Kitchen */}
            <ScrollReveal direction="up" delay={0.3}>
              <div className="card-modern p-6 md:p-8 mb-8">
                <div className="flex items-start gap-4">
                  <Sparkles className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-black mb-4">Küche</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Backofen & Herd:</strong> Entfernung von eingebrannten Fett- und Speiseresten</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Kühlschrank:</strong> Innen und außen reinigen, Abtauen</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Dunstabzugshaube:</strong> Fettfilter reinigen oder austauschen</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Schränke:</strong> Innen und außen auswischen</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Fliesen & Fugen:</strong> Tiefenreinigung, Kalkentfernung</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Area 2: Bathroom */}
            <ScrollReveal direction="up" delay={0.4}>
              <div className="card-modern p-6 md:p-8 mb-8">
                <div className="flex items-start gap-4">
                  <Sparkles className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-black mb-4">Badezimmer</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Toilette:</strong> Komplettreinigung inkl. Kalk- und Urinsteinentfernung</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Dusche/Badewanne:</strong> Armaturen polieren, Silikonfugen säubern</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Waschbecken:</strong> Kalkablagerungen entfernen</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Fliesen & Fugen:</strong> Schimmel entfernen, Fugen aufhellen</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Spiegel & Glas:</strong> Streifenfrei polieren</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Area 3: Living Areas */}
            <ScrollReveal direction="up" delay={0.5}>
              <div className="card-modern p-6 md:p-8 mb-8">
                <div className="flex items-start gap-4">
                  <Sparkles className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-black mb-4">Wohn- und Schlafräume</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Böden:</strong> Gründliches Saugen und Wischen (Parkett, Laminat, Fliesen)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Fenster:</strong> Rahmen, Scheiben und Fensterbänke innen und außen</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Heizkörper:</strong> Entstauben und abwischen</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Türen & Zargen:</strong> Abwischen von Griffspuren</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Wände:</strong> Staubentfernung, leichte Fleckenentfernung</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Area 4: Additional */}
            <ScrollReveal direction="up" delay={0.6}>
              <div className="card-modern p-6 md:p-8 mb-8">
                <div className="flex items-start gap-4">
                  <Sparkles className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-black mb-4">Sonstige Bereiche</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Flur & Treppenhaus:</strong> Böden wischen, Wände abwischen</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Balkon/Terrasse:</strong> Fegen und Hochdruckreinigung</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Keller:</strong> Grobe Reinigung, Spinnweben entfernen</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Lampen & Leuchten:</strong> Entstauben und polieren</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Costs */}
            <ScrollReveal direction="up" delay={0.7}>
              <h2 className="text-section font-black uppercase mb-6 mt-12">
                Was kostet eine <span className="gradient-text">Grundreinigung?</span>
              </h2>
              <div className="card-modern p-6 md:p-8 mb-8">
                <p className="text-neutral-700 mb-4">
                  Die Kosten für eine professionelle Grundreinigung hängen von verschiedenen Faktoren ab:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="font-black text-lg mb-3">Preisfaktoren</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Wohnungsgröße (qm)</li>
                      <li>• Anzahl der Zimmer</li>
                      <li>• Verschmutzungsgrad</li>
                      <li>• Zusatzleistungen (Fenster, Balkon)</li>
                      <li>• Anfahrtsweg</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-black text-lg mb-3">Richtwerte Berlin</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• 1-Zimmer: 150-250 €</li>
                      <li>• 2-Zimmer: 200-350 €</li>
                      <li>• 3-Zimmer: 300-500 €</li>
                      <li>• 4-Zimmer: 400-650 €</li>
                      <li>• 5+ Zimmer: ab 600 €</li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Tips */}
            <ScrollReveal direction="up" delay={0.8}>
              <h2 className="text-section font-black uppercase mb-6 mt-12">
                Tipps für die <span className="gradient-text">Grundreinigung</span>
              </h2>
              <div className="card-modern p-6 md:p-8 mb-8">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <span><strong>Früh buchen:</strong> Besonders in den Umzugsmonaten (April-September) frühzeitig Termine vereinbaren</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <span><strong>Wohnung ausräumen:</strong> Komplett leere Wohnung spart Zeit und Kosten</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <span><strong>Übergabeprotokoll:</strong> Dokumentieren Sie den Zustand vor und nach der Reinigung</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <span><strong>Vermieter informieren:</strong> Abstimmung mit Vermieter über erforderliche Reinigungsarbeiten</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <span><strong>Profis beauftragen:</strong> Spart Zeit, Nerven und garantiert professionelles Ergebnis</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Conclusion */}
            <ScrollReveal direction="up" delay={0.9}>
              <h2 className="text-section font-black uppercase mb-6 mt-12">
                <span className="gradient-text">Fazit</span>
              </h2>
              <p className="text-body-lg text-neutral-700 mb-6">
                Eine professionelle Grundreinigung ist die beste Voraussetzung für eine reibungslose Wohnungsübergabe 
                und die Rückzahlung Ihrer Kaution. BC Group Berlin bietet Ihnen einen kompletten Reinigungsservice – 
                von der Beratung bis zur Abnahme durch den Vermieter. Unsere erfahrenen Reinigungskräfte sorgen dafür, 
                dass Ihre Wohnung in neuem Glanz erstrahlt. Kontaktieren Sie uns für ein unverbindliches Angebot!
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
              Professionelle<br />
              <span className="gradient-text">Grundreinigung</span> gesucht?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Wir sorgen für eine perfekte Wohnungsübergabe und kümmern uns um alle Reinigungsarbeiten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt">
                <Button variant="gradient" size="lg" className="shadow-xl">
                  Jetzt Angebot einholen
                </Button>
              </Link>
              <Link href="/services/reinigung">
                <Button variant="secondary" size="lg">
                  Mehr über Reinigung
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
