import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Section, Container, Button, ScrollReveal, StructuredData } from '@/components/ui'
import { Calendar, Clock, ArrowLeft, CheckCircle2, Wrench, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hausmeisterservice: Diese Aufgaben übernimmt ein professioneller Hausmeister | BC Group Berlin',
  description: 'Von der Grünpflege bis zur Winterdienst – erfahren Sie, welche Aufgaben ein professioneller Hausmeisterservice übernimmt und wie Sie davon profitieren können.',
  keywords: [
    'Hausmeisterservice Berlin',
    'Hausmeister Aufgaben',
    'Hausmeisterdienst',
    'Hausbetreuung Berlin',
    'Facility Management',
    'Professioneller Hausmeister',
    'Immobilienpflege',
  ],
  openGraph: {
    title: 'Hausmeisterservice: Diese Aufgaben übernimmt ein professioneller Hausmeister',
    description: 'Von der Grünpflege bis zur Winterdienst – alle Aufgaben eines Hausmeisterservice im Überblick',
    type: 'article',
    locale: 'de_DE',
    url: 'https://bc-group.de/ratgeber/hausmeisterservice-aufgaben',
    siteName: 'BC Group Berlin',
    images: [{
      url: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop',
      width: 1200,
      height: 630,
      alt: 'Hausmeisterservice Aufgaben',
    }],
    publishedTime: '2024-10-05',
  },
  alternates: {
    canonical: 'https://bc-group.de/ratgeber/hausmeisterservice-aufgaben',
  },
}

export default function HausmeisterserviceAufgabenPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Hausmeisterservice: Diese Aufgaben übernimmt ein professioneller Hausmeister',
    description: 'Von der Grünpflege bis zur Winterdienst – erfahren Sie, welche Aufgaben ein professioneller Hausmeisterservice übernimmt.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop',
    datePublished: '2024-10-05',
    dateModified: '2024-10-05',
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
      '@id': 'https://bc-group.de/ratgeber/hausmeisterservice-aufgaben',
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
        name: 'Hausmeisterservice Aufgaben',
        item: 'https://bc-group.de/ratgeber/hausmeisterservice-aufgaben',
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
                Hausmeisterservice
              </span>
            </div>

            <h1 className="text-hero uppercase font-black mb-6 leading-tight">
              Hausmeister:<br />
              <span className="gradient-text">Alle Aufgaben</span>
            </h1>

            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/80 text-sm mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>5. Oktober 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>7 Min. Lesezeit</span>
              </div>
            </div>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl">
              Von der Grünpflege bis zum Winterdienst – erfahren Sie, welche Aufgaben ein professioneller 
              Hausmeisterservice übernimmt und wie Sie davon profitieren können.
            </p>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Featured Image */}
      <Section background="white" padding="none">
        <Container size="wide">
          <div className="relative h-[400px] md:h-[600px] -mt-12 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1600&auto=format&fit=crop"
              alt="Hausmeisterservice Aufgaben"
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
                Was macht ein <span className="gradient-text">Hausmeisterservice?</span>
              </h2>
              <p className="text-body-lg text-neutral-700 mb-6">
                Ein professioneller Hausmeisterservice ist das Rückgrat jeder Immobilie. Ob Wohnhaus, Gewerbeobjekt 
                oder öffentliche Einrichtung – ein zuverlässiger Hausmeister sorgt dafür, dass alles reibungslos 
                funktioniert, die Immobilie gepflegt aussieht und der Wert langfristig erhalten bleibt. Doch welche 
                Aufgaben gehören genau dazu?
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="text-section font-black uppercase mb-8 mt-12">
                Die <span className="gradient-text">Kernaufgaben</span> im Überblick
              </h2>
            </ScrollReveal>

            {/* Task 1 */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="card-modern p-6 md:p-8 mb-8">
                <div className="flex items-start gap-4">
                  <Wrench className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-black mb-4">Gebäudereinigung und -pflege</h3>
                    <p className="text-neutral-700 mb-4">
                      Die regelmäßige Pflege der Immobilie steht an erster Stelle:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Treppenhaus:</strong> Reinigung und Kontrolle der Beleuchtung</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Gemeinschaftsflächen:</strong> Eingangsbereiche, Flure, Aufzüge</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Außenanlagen:</strong> Gehwege, Parkplätze, Mülltonnenplätze</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Kellerräume:</strong> Ordnung und Sauberkeit in Kellergängen</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Task 2 */}
            <ScrollReveal direction="up" delay={0.3}>
              <div className="card-modern p-6 md:p-8 mb-8">
                <div className="flex items-start gap-4">
                  <Wrench className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-black mb-4">Grünpflege und Außenanlagen</h3>
                    <p className="text-neutral-700 mb-4">
                      Ein gepflegter Außenbereich ist die Visitenkarte jeder Immobilie:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Rasenpflege:</strong> Mähen, Vertikutieren, Düngen</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Heckenschnitt:</strong> Formschnitt und Pflege von Sträuchern</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Unkrautentfernung:</strong> Gehwege und Beete freihalten</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Laubbeseitigung:</strong> Im Herbst besonders wichtig</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Task 3 */}
            <ScrollReveal direction="up" delay={0.4}>
              <div className="card-modern p-6 md:p-8 mb-8">
                <div className="flex items-start gap-4">
                  <Wrench className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-black mb-4">Winterdienst und Schneeräumung</h3>
                    <p className="text-neutral-700 mb-4">
                      In den Wintermonaten besonders wichtig für die Verkehrssicherheit:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Schneeräumung:</strong> Gehwege und Zufahrten freihalten</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Streudienst:</strong> Glättegefahr mit Sand oder Salz bekämpfen</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>24/7 Bereitschaft:</strong> Auch an Wochenenden und Feiertagen</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Dokumentation:</strong> Nachweis der durchgeführten Maßnahmen</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Task 4 */}
            <ScrollReveal direction="up" delay={0.5}>
              <div className="card-modern p-6 md:p-8 mb-8">
                <div className="flex items-start gap-4">
                  <Wrench className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-black mb-4">Kleinreparaturen und Instandhaltung</h3>
                    <p className="text-neutral-700 mb-4">
                      Schnelle Hilfe bei kleineren Problemen verhindert größere Schäden:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Elektrik:</strong> Glühbirnen wechseln, Steckdosen prüfen</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Sanitär:</strong> Tropfende Wasserhähne, verstopfte Abflüsse</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Türen und Fenster:</strong> Einstellen, ölen, kleinere Reparaturen</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Schönheitsreparaturen:</strong> Ausbessern von Wänden und Böden</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Task 5 */}
            <ScrollReveal direction="up" delay={0.6}>
              <div className="card-modern p-6 md:p-8 mb-8">
                <div className="flex items-start gap-4">
                  <Wrench className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-black mb-4">Müllentsorgung und Recycling</h3>
                    <p className="text-neutral-700 mb-4">
                      Ordnungsgemäße Abfallwirtschaft ist Pflicht für jeden Hausmeister:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Tonnenbereitstellung:</strong> Mülltonnen rausstellen und wieder reinholen</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Müllplatzpflege:</strong> Reinigung und Ordnung am Müllstandplatz</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Sperrmüll:</strong> Koordination der Sperrmüllabholung</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Trennung:</strong> Kontrolle der korrekten Mülltrennung</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Task 6 */}
            <ScrollReveal direction="up" delay={0.7}>
              <div className="card-modern p-6 md:p-8 mb-8">
                <div className="flex items-start gap-4">
                  <Wrench className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-black mb-4">Kontrollrundgänge und Sicherheit</h3>
                    <p className="text-neutral-700 mb-4">
                      Regelmäßige Kontrollen schützen vor Schäden und erhöhen die Sicherheit:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Rundgänge:</strong> Tägliche Kontrolle der Immobilie</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Schadensfrüherkennung:</strong> Wasserschäden, Risse, defekte Technik</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Brandschutz:</strong> Kontrolle von Feuerlöschern und Fluchtwegen</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span><strong>Dokumentation:</strong> Protokollierung aller Auffälligkeiten</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Benefits */}
            <ScrollReveal direction="up" delay={0.8}>
              <h2 className="text-section font-black uppercase mb-6 mt-12">
                Vorteile eines <span className="gradient-text">professionellen Hausmeisterservice</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="card-modern p-6">
                  <h4 className="font-black text-lg mb-3">Für Eigentümer</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-sm">Werterhalt der Immobilie</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-sm">Kosteneinsparung durch Prävention</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-sm">Zeitersparnis</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-sm">Professionelle Dokumentation</span>
                    </li>
                  </ul>
                </div>
                <div className="card-modern p-6">
                  <h4 className="font-black text-lg mb-3">Für Mieter</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-sm">Gepflegte Wohnumgebung</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-sm">Schnelle Hilfe bei Problemen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-sm">Höhere Wohnqualität</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-sm">Fester Ansprechpartner</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* Conclusion */}
            <ScrollReveal direction="up" delay={0.9}>
              <h2 className="text-section font-black uppercase mb-6 mt-12">
                <span className="gradient-text">Fazit</span>
              </h2>
              <p className="text-body-lg text-neutral-700 mb-6">
                Ein professioneller Hausmeisterservice ist weit mehr als nur „Treppen putzen". Es geht um den 
                langfristigen Werterhalt Ihrer Immobilie, die Sicherheit aller Bewohner und ein gepflegtes 
                Erscheinungsbild. BC Group Berlin bietet Ihnen einen zuverlässigen Full-Service-Hausmeister, 
                der sich um alle anfallenden Aufgaben kümmert – damit Sie sich zurücklehnen können.
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
              <span className="gradient-text">Hausmeisterservice</span> gesucht?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Wir kümmern uns zuverlässig um Ihre Immobilie – 365 Tage im Jahr.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt">
                <Button variant="gradient" size="lg" className="shadow-xl">
                  Jetzt Angebot einholen
                </Button>
              </Link>
              <Link href="/services/hausmeisterservice">
                <Button variant="secondary" size="lg">
                  Mehr über Hausmeisterservice
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
