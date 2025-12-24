import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Section, Container, Button, ScrollReveal, StructuredData } from '@/components/ui'
import { Calendar, Clock, ArrowLeft, CheckCircle2, Download, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Umzug planen: Checkliste für einen stressfreien Umzug | BC Group Berlin',
  description: 'Mit unserer Schritt-für-Schritt-Anleitung wird Ihr Umzug zum Kinderspiel. Jetzt Checkliste downloaden und nichts mehr vergessen! Expertentipps vom BC Group Team.',
  keywords: [
    'Umzug planen',
    'Umzug Checkliste',
    'Umzug Berlin',
    'Umzug Tipps',
    'Stressfrei umziehen',
    'Umzugsplanung',
    'Professioneller Umzug',
  ],
  openGraph: {
    title: 'Umzug planen: Checkliste für einen stressfreien Umzug',
    description: 'Mit unserer Schritt-für-Schritt-Anleitung wird Ihr Umzug zum Kinderspiel',
    type: 'article',
    locale: 'de_DE',
    url: 'https://bc-group.de/ratgeber/umzug-checkliste',
    siteName: 'BC Group Berlin',
    images: [{
      url: 'https://images.unsplash.com/photo-1464082354059-27db6ce50048?q=80&w=1200&auto=format&fit=crop',
      width: 1200,
      height: 630,
      alt: 'Umzug Checkliste',
    }],
    publishedTime: '2024-09-01',
  },
  alternates: {
    canonical: 'https://bc-group.de/ratgeber/umzug-checkliste',
  },
}

export default function UmzugChecklistePage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Umzug planen: Checkliste für einen stressfreien Umzug',
    description: 'Mit unserer Schritt-für-Schritt-Anleitung wird Ihr Umzug zum Kinderspiel. Jetzt Checkliste downloaden!',
    image: 'https://images.unsplash.com/photo-1464082354059-27db6ce50048?q=80&w=1200&auto=format&fit=crop',
    datePublished: '2024-09-01',
    dateModified: '2024-09-01',
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
      '@id': 'https://bc-group.de/ratgeber/umzug-checkliste',
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
        name: 'Umzug Checkliste',
        item: 'https://bc-group.de/ratgeber/umzug-checkliste',
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
                Umzug
              </span>
            </div>

            <h1 className="text-hero uppercase font-black mb-6 leading-tight">
              Umzug planen:<br />
              <span className="gradient-text">Checkliste</span>
            </h1>

            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/80 text-sm mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>1. September 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>6 Min. Lesezeit</span>
              </div>
            </div>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl">
              Mit unserer Schritt-für-Schritt-Anleitung wird Ihr Umzug zum Kinderspiel. Jetzt Checkliste 
              downloaden und nichts mehr vergessen!
            </p>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Featured Image */}
      <Section background="white" padding="none">
        <Container size="wide">
          <div className="relative h-[400px] md:h-[600px] -mt-12 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1464082354059-27db6ce50048?q=80&w=1600&auto=format&fit=crop"
              alt="Umzug Checkliste"
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
                Ein <span className="gradient-text">gut geplanter Umzug</span> spart Nerven
              </h2>
              <p className="text-body-lg text-neutral-700 mb-6">
                Ein Umzug gehört zu den stressigsten Ereignissen im Leben. Doch mit der richtigen Vorbereitung 
                und Organisation lässt sich vieles vereinfachen. Unsere Checkliste hilft Ihnen, den Überblick 
                zu behalten und nichts zu vergessen.
              </p>
            </ScrollReveal>

            {/* Timeline Section */}
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="text-section font-black uppercase mb-8 mt-12">
                Die <span className="gradient-text">Umzugs-Timeline</span>
              </h2>
            </ScrollReveal>

            {/* 3 Months Before */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="card-modern p-6 md:p-8 mb-8 border-l-4 border-secondary">
                <h3 className="text-2xl md:text-3xl font-black mb-4 text-secondary">3 Monate vorher</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <span><strong>Wohnungssuche abschließen:</strong> Besichtigungen wahrnehmen, Mietvertrag unterschreiben</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <span><strong>Alte Wohnung kündigen:</strong> Kündigungsfrist beachten (meist 3 Monate)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <span><strong>Umzugsunternehmen beauftragen:</strong> Angebote einholen und vergleichen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <span><strong>Urlaub einreichen:</strong> Freinehmen für Umzugstag und Nachbereitung</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <span><strong>Ausmisten beginnen:</strong> Gegenstände sortieren (behalten, verkaufen, spenden, entsorgen)</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* 6 Weeks Before */}
            <ScrollReveal direction="up" delay={0.3}>
              <div className="card-modern p-6 md:p-8 mb-8 border-l-4 border-secondary">
                <h3 className="text-2xl md:text-3xl font-black mb-4 text-secondary">6 Wochen vorher</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <span><strong>Ummeldungen vorbereiten:</strong> Listen erstellen mit allen zu benachrichtigenden Stellen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <span><strong>Renovierung planen:</strong> Schönheitsreparaturen in alter Wohnung koordinieren</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <span><strong>Umzugsmaterial besorgen:</strong> Kartons, Klebeband, Luftpolsterfolie, Marker</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <span><strong>Sperrmüll anmelden:</strong> Termin beim Berliner Entsorgungsdienst vereinbaren</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <span><strong>Nachsendeauftrag einrichten:</strong> Bei der Post beantragen</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* 2 Weeks Before */}
            <ScrollReveal direction="up" delay={0.4}>
              <div className="card-modern p-6 md:p-8 mb-8 border-l-4 border-secondary">
                <h3 className="text-2xl md:text-3xl font-black mb-4 text-secondary">2 Wochen vorher</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <span><strong>Packen beginnen:</strong> Zimmer für Zimmer vorgehen, Kartons beschriften</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <span><strong>Halteverbotszone beantragen:</strong> Für Umzugswagen in alter und neuer Straße</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <span><strong>Helfer organisieren:</strong> Freunde und Familie rechtzeitig informieren</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <span><strong>Verträge kündigen/ummelden:</strong> Strom, Gas, Internet, Telefon, GEZ</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <span><strong>Übergabetermin vereinbaren:</strong> Mit Vermieter für alte und neue Wohnung</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* 1 Week Before */}
            <ScrollReveal direction="up" delay={0.5}>
              <div className="card-modern p-6 md:p-8 mb-8 border-l-4 border-secondary">
                <h3 className="text-2xl md:text-3xl font-black mb-4 text-secondary">1 Woche vorher</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <span><strong>Kühlschrank abtauen:</strong> Lebensmittel verbrauchen oder verschenken</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <span><strong>Letzte Kartons packen:</strong> Nur Notwendigstes offen lassen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <span><strong>Renovierung abschließen:</strong> Malerarbeiten, Bohrlöcher verschließen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <span><strong>Möbel demontieren:</strong> Schrauben in Tüten sammeln und beschriften</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <span><strong>Wichtige Dokumente zusammenstellen:</strong> Personalausweis, Verträge, Schlüssel</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Moving Day */}
            <ScrollReveal direction="up" delay={0.6}>
              <div className="card-modern p-6 md:p-8 mb-8 border-l-4 border-accent bg-accent/5">
                <h3 className="text-2xl md:text-3xl font-black mb-4 text-accent">Am Umzugstag</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span><strong>Früh starten:</strong> Team-Besprechung mit allen Helfern</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span><strong>Zählerstände ablesen:</strong> Strom, Gas, Wasser fotografieren</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span><strong>Systematisch verladen:</strong> Schwere Gegenstände zuerst, Empfindliches gut sichern</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span><strong>Wohnung kontrollieren:</strong> Alle Räume, Keller und Speicher prüfen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span><strong>Wohnungsübergabe:</strong> Protokoll erstellen, Schlüssel übergeben</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span><strong>Neue Wohnung übernehmen:</strong> Zählerstände notieren, Mängel dokumentieren</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* After Moving */}
            <ScrollReveal direction="up" delay={0.7}>
              <div className="card-modern p-6 md:p-8 mb-8 border-l-4 border-secondary">
                <h3 className="text-2xl md:text-3xl font-black mb-4 text-secondary">Nach dem Umzug</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <span><strong>Ummeldung beim Bürgeramt:</strong> Innerhalb von 2 Wochen verpflichtend</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <span><strong>Kfz-Zulassung ummelden:</strong> Bei Wechsel des Bezirks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <span><strong>Bank und Versicherungen informieren:</strong> Neue Adresse mitteilen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <span><strong>Nachbarn kennenlernen:</strong> Sich vorstellen und für Umzugslärm entschuldigen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <span><strong>Kaution-Rückzahlung prüfen:</strong> Nach 3-6 Monaten nachfragen</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Important Contacts */}
            <ScrollReveal direction="up" delay={0.8}>
              <h2 className="text-section font-black uppercase mb-6 mt-12">
                Wichtige <span className="gradient-text">Kontakte & Ummeldungen</span>
              </h2>
              <div className="card-modern p-6 md:p-8 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-black text-lg mb-3">Behörden</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Bürgeramt (Anmeldung)</li>
                      <li>• Finanzamt</li>
                      <li>• Kfz-Zulassungsstelle</li>
                      <li>• Arbeitsagentur/Jobcenter</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-black text-lg mb-3">Verträge</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Stromanbieter</li>
                      <li>• Gasanbieter</li>
                      <li>• Internet & Telefon</li>
                      <li>• GEZ (Rundfunkbeitrag)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-black text-lg mb-3">Versicherungen</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Krankenversicherung</li>
                      <li>• Hausratversicherung</li>
                      <li>• Haftpflichtversicherung</li>
                      <li>• Kfz-Versicherung</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-black text-lg mb-3">Sonstige</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Bank/Kreditinstitut</li>
                      <li>• Arbeitgeber</li>
                      <li>• Abonnements & Mitgliedschaften</li>
                      <li>• Online-Shops & Services</li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Download CTA */}
            <ScrollReveal direction="up" delay={0.9}>
              <div className="card-modern p-8 md:p-12 text-center bg-gradient-to-br from-secondary to-secondary/90 mt-12">
                <Download className="w-16 h-16 text-white mx-auto mb-6" />
                <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                  Checkliste als PDF herunterladen
                </h3>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                  Laden Sie unsere umfassende Umzugs-Checkliste herunter und behalten Sie den Überblick 
                  über alle wichtigen Aufgaben.
                </p>
                <Link href="/kontakt">
                  <Button variant="secondary" size="lg" className="shadow-xl">
                    Jetzt Checkliste anfordern
                  </Button>
                </Link>
              </div>
            </ScrollReveal>

            {/* Conclusion */}
            <ScrollReveal direction="up" delay={1.0}>
              <h2 className="text-section font-black uppercase mb-6 mt-12">
                <span className="gradient-text">Fazit</span>
              </h2>
              <p className="text-body-lg text-neutral-700 mb-6">
                Mit dieser Checkliste und guter Planung wird Ihr Umzug deutlich entspannter. Vergessen Sie nicht: 
                Professionelle Hilfe kann viel Stress ersparen. BC Group Berlin unterstützt Sie mit erfahrenen 
                Umzugshelfern, passendem Equipment und jahrelanger Expertise. Kontaktieren Sie uns für ein 
                individuelles Angebot!
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
              <span className="gradient-text">Umzugsservice</span> gesucht?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Lehnen Sie sich zurück und lassen Sie uns die Arbeit machen. Unser Team sorgt für einen 
              reibungslosen Umzug.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt">
                <Button variant="gradient" size="lg" className="shadow-xl">
                  Jetzt Angebot einholen
                </Button>
              </Link>
              <Link href="/services/umzug">
                <Button variant="secondary" size="lg">
                  Mehr über Umzug
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
          </div>
        </Container>
      </Section>
    </>
  )
}
