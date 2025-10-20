import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Section, Container, Button, ScrollReveal, StructuredData } from '@/components/ui'
import { Calendar, Clock, ArrowLeft, CheckCircle2, Sparkles, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Büroreinigung: Darauf sollten Sie achten | BC Group Berlin',
  description: 'Ein sauberes Büro steigert die Produktivität und das Wohlbefinden Ihrer Mitarbeiter. Erfahren Sie, welche Reinigungsstandards wichtig sind und wie oft gereinigt werden sollte.',
  keywords: [
    'Büroreinigung Berlin',
    'Büroreinigung Tipps',
    'Büroreinigung Standards',
    'Gewerbereinigung Berlin',
    'Unterhaltsreinigung Büro',
    'Professionelle Büroreinigung',
  ],
  openGraph: {
    title: 'Büroreinigung: Darauf sollten Sie achten',
    description: 'Ein sauberes Büro steigert die Produktivität und das Wohlbefinden Ihrer Mitarbeiter',
    type: 'article',
    locale: 'de_DE',
    url: 'https://bc-group.de/ratgeber/bueroreinigung-tipps',
    siteName: 'BC Group Berlin',
    images: [{
      url: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=1200&auto=format&fit=crop',
      width: 1200,
      height: 630,
      alt: 'Büroreinigung Tipps',
    }],
    publishedTime: '2024-09-08',
  },
  alternates: {
    canonical: 'https://bc-group.de/ratgeber/bueroreinigung-tipps',
  },
}

export default function BueroreinigungTippsPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Büroreinigung: Darauf sollten Sie achten',
    description: 'Ein sauberes Büro steigert die Produktivität und das Wohlbefinden Ihrer Mitarbeiter. Erfahren Sie, welche Reinigungsstandards wichtig sind.',
    image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=1200&auto=format&fit=crop',
    datePublished: '2024-09-08',
    dateModified: '2024-09-08',
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
      '@id': 'https://bc-group.de/ratgeber/bueroreinigung-tipps',
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
        name: 'Büroreinigung Tipps',
        item: 'https://bc-group.de/ratgeber/bueroreinigung-tipps',
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
              Büroreinigung:<br />
              <span className="gradient-text">Darauf achten</span>
            </h1>

            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/80 text-sm mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>8. September 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>4 Min. Lesezeit</span>
              </div>
            </div>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl">
              Ein sauberes Büro steigert die Produktivität und das Wohlbefinden Ihrer Mitarbeiter. Erfahren Sie, 
              welche Reinigungsstandards wichtig sind und wie oft gereinigt werden sollte.
            </p>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Featured Image */}
      <Section background="white" padding="none">
        <Container size="wide">
          <div className="relative h-[400px] md:h-[600px] -mt-12 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=1600&auto=format&fit=crop"
              alt="Büroreinigung Tipps"
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
                Warum <span className="gradient-text">Sauberkeit im Büro</span> so wichtig ist
              </h2>
              <p className="text-body-lg text-neutral-700 mb-6">
                Die Sauberkeit am Arbeitsplatz hat direkten Einfluss auf die Gesundheit, Motivation und Produktivität 
                Ihrer Mitarbeiter. Ein gepflegtes Büro vermittelt zudem Professionalität gegenüber Kunden und 
                Geschäftspartnern. Studien zeigen, dass Mitarbeiter in sauberen Büros bis zu 15% produktiver arbeiten.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="text-section font-black uppercase mb-6 mt-12">
                Die <span className="gradient-text">wichtigsten Bereiche</span> einer Büroreinigung
              </h2>
            </ScrollReveal>

            {/* Area 1 */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="card-modern p-6 md:p-8 mb-8">
                <div className="flex items-start gap-4">
                  <Sparkles className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-black mb-4">Arbeitsplätze und Schreibtische</h3>
                    <p className="text-neutral-700 mb-4">
                      Der Arbeitsplatz ist der Bereich, an dem Ihre Mitarbeiter die meiste Zeit verbringen:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span>Tägliches Entstauben von Oberflächen</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span>Reinigung von Tastaturen und Bildschirmen</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span>Desinfektion von Telefonen und Türgriffen</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span>Papierkorb-Leerung</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Area 2 */}
            <ScrollReveal direction="up" delay={0.3}>
              <div className="card-modern p-6 md:p-8 mb-8">
                <div className="flex items-start gap-4">
                  <Sparkles className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-black mb-4">Böden und Teppiche</h3>
                    <p className="text-neutral-700 mb-4">
                      Böden sammeln täglich Schmutz und Staub. Eine regelmäßige Bodenreinigung ist essentiell:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Täglich:</strong> Staubsaugen von Teppichen und Läufern</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Täglich:</strong> Wischen von Hartböden</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Wöchentlich:</strong> Feuchtwischen mit Desinfektionsmittel</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Monatlich:</strong> Grundreinigung und Teppichpflege</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Area 3 */}
            <ScrollReveal direction="up" delay={0.4}>
              <div className="card-modern p-6 md:p-8 mb-8">
                <div className="flex items-start gap-4">
                  <Sparkles className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-black mb-4">Sanitäranlagen</h3>
                    <p className="text-neutral-700 mb-4">
                      Saubere Toiletten und Waschräume sind ein Muss für jedes Büro:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span>Mehrfach tägliche Kontrolle und Reinigung</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span>Desinfektion von Toiletten, Waschbecken und Armaturen</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span>Auffüllung von Seife, Papier und Handtüchern</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span>Entfernung von Kalk und Wasserflecken</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Area 4 */}
            <ScrollReveal direction="up" delay={0.5}>
              <div className="card-modern p-6 md:p-8 mb-8">
                <div className="flex items-start gap-4">
                  <Sparkles className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-black mb-4">Küche und Pausenraum</h3>
                    <p className="text-neutral-700 mb-4">
                      Gemeinschaftsräume benötigen besondere Aufmerksamkeit:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span>Reinigung von Arbeitsflächen und Spüle</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span>Entleerung und Desinfektion von Mülleimern</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span>Reinigung von Kühlschrank und Mikrowelle</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span>Geschirrspülmaschine ausräumen</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Cleaning Schedule */}
            <ScrollReveal direction="up" delay={0.6}>
              <h2 className="text-section font-black uppercase mb-6 mt-12">
                Der optimale <span className="gradient-text">Reinigungsrhythmus</span>
              </h2>
              <div className="card-modern p-6 md:p-8 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-black text-lg mb-3 text-secondary">Täglich</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Arbeitsplätze</li>
                      <li>• Böden</li>
                      <li>• Sanitäranlagen</li>
                      <li>• Küche</li>
                      <li>• Mülleimer</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-black text-lg mb-3 text-secondary">Wöchentlich</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Fenster innen</li>
                      <li>• Heizkörper</li>
                      <li>• Türen und Rahmen</li>
                      <li>• Kühlschrank</li>
                      <li>• Teppichpflege</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-black text-lg mb-3 text-secondary">Monatlich</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Fenster außen</li>
                      <li>• Jalousien</li>
                      <li>• Leuchten</li>
                      <li>• Grundreinigung</li>
                      <li>• Sonderreinigungen</li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Benefits */}
            <ScrollReveal direction="up" delay={0.7}>
              <h2 className="text-section font-black uppercase mb-6 mt-12">
                Vorteile einer <span className="gradient-text">professionellen Büroreinigung</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="card-modern p-6">
                  <h4 className="font-black text-lg mb-3">Für Ihr Unternehmen</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-sm">Professionelles Image</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-sm">Zeitersparnis</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-sm">Konstante Qualität</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-sm">Planbare Kosten</span>
                    </li>
                  </ul>
                </div>
                <div className="card-modern p-6">
                  <h4 className="font-black text-lg mb-3">Für Ihre Mitarbeiter</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-sm">Höhere Produktivität</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-sm">Besseres Wohlbefinden</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-sm">Weniger Krankheitstage</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-sm">Mehr Motivation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* Conclusion */}
            <ScrollReveal direction="up" delay={0.8}>
              <h2 className="text-section font-black uppercase mb-6 mt-12">
                <span className="gradient-text">Fazit</span>
              </h2>
              <p className="text-body-lg text-neutral-700 mb-6">
                Eine professionelle Büroreinigung ist eine Investition in die Gesundheit Ihrer Mitarbeiter und den 
                Erfolg Ihres Unternehmens. Mit einem maßgeschneiderten Reinigungsplan sorgen wir von BC Group Berlin 
                dafür, dass Ihre Büroräume immer in bestem Zustand sind. Kontaktieren Sie uns für ein individuelles 
                Angebot!
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
              <span className="gradient-text">Büroreinigung</span> gesucht?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam ein individuelles Reinigungskonzept für Ihr Büro entwickeln.
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
