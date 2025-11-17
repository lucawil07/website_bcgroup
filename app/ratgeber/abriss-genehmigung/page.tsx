import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Section, Container, Button, ScrollReveal, StructuredData } from '@/components/ui'
import { Calendar, Clock, ArrowLeft, CheckCircle2, AlertTriangle, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Abriss-Genehmigung in Berlin: Was Sie wissen müssen | BC Group Berlin',
  description: 'Wann brauchen Sie eine Abrissgenehmigung in Berlin? Wie läuft das Verfahren ab, und welche Besonderheiten gelten bei Wohnraum, Milieuschutz und Denkmalschutz? Vollständiger Überblick 2025.',
  keywords: [
    'Abrissgenehmigung Berlin',
    'Abriss Genehmigung',
    'Gebäudeabriss Berlin',
    'Abriss beantragen',
    'Abriss ohne Genehmigung',
    'Baugenehmigung Abriss',
    'Abrissarbeiten Berlin',
    'Abbruchanzeige Berlin',
    'Zweckentfremdungsverbot',
    'Milieuschutzgebiet Abriss',
    'Denkmalschutz Abriss',
  ],
  openGraph: {
    title: 'Abriss-Genehmigung in Berlin: Was Sie wissen müssen',
    description: 'Wann brauchen Sie eine Abrissgenehmigung in Berlin? Vollständiger Überblick zu Verfahren, Kosten und Besonderheiten',
    type: 'article',
    locale: 'de_DE',
    url: 'https://bc-group.de/ratgeber/abriss-genehmigung',
    siteName: 'BC Group Berlin',
    images: [{
      url: 'https://images.unsplash.com/photo-1590496793929-5b83d9f89c4a?q=80&w=1200&auto=format&fit=crop',
      width: 1200,
      height: 630,
      alt: 'Abriss Genehmigung Berlin',
    }],
    publishedTime: '2025-11-06',
  },
  alternates: {
    canonical: 'https://bc-group.de/ratgeber/abriss-genehmigung',
  },
}

export default function AbrissGenehmigungPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Abriss-Genehmigung in Berlin: Was Sie wissen müssen',
    description: 'Wann brauchen Sie eine Abrissgenehmigung in Berlin? Wie läuft das Verfahren ab, und welche Besonderheiten gelten bei Wohnraum, Milieuschutz und Denkmalschutz?',
    image: 'https://images.unsplash.com/photo-1590496793929-5b83d9f89c4a?q=80&w=1200&auto=format&fit=crop',
    datePublished: '2025-11-06',
    dateModified: '2025-11-06',
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
              Abriss-Genehmigung<br />
              <span className="gradient-text">in Berlin</span>
            </h1>

            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/80 text-sm mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Aktualisiert: 6. November 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>8 Min. Lesezeit</span>
              </div>
            </div>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl">
              Wann brauchen Sie eine Abrissgenehmigung in Berlin? Wie läuft das Verfahren ab, und welche 
              Besonderheiten gelten bei Wohnraum, Milieuschutz und Denkmalschutz? Hier finden Sie den 
              vollständigen Überblick.
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
                In Berlin ist der Abriss bauordnungsrechtlich in der Regel <strong>genehmigungsfrei, aber anzeigepflichtig</strong>.
              </p>
              <p className="text-body-lg text-neutral-700 mb-6">
                Die Bauordnung für Berlin (BauO Bln, § 61) schreibt vor, dass der Abbruch eines Gebäudes mindestens 
                einen Monat vor Beginn bei der zuständigen Bauaufsichtsbehörde des Bezirks angezeigt werden muss.
              </p>
              <p className="text-body-lg text-neutral-700 mb-6">
                Allerdings können <strong>weitere Genehmigungen nach anderen Gesetzen</strong> erforderlich sein – 
                insbesondere bei Wohnraum, Denkmalschutz oder Milieuschutzgebieten.
              </p>
            </ScrollReveal>

            {/* Procedures Overview Table */}
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="text-section font-black uppercase mb-6 mt-12">
                Überblick: <span className="gradient-text">Welche Verfahren gelten?</span>
              </h2>
              <div className="card-modern overflow-hidden mb-8">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[600px]">
                    <thead>
                      <tr className="bg-gradient-to-r from-amber-900 to-amber-700 text-white">
                        <th className="px-4 md:px-6 py-4 text-left text-sm md:text-base font-black uppercase">Situation</th>
                        <th className="px-4 md:px-6 py-4 text-left text-sm md:text-base font-black uppercase">Erforderlich</th>
                        <th className="px-4 md:px-6 py-4 text-left text-sm md:text-base font-black uppercase">Zuständige Behörde</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200">
                      <tr className="hover:bg-amber-50 transition-colors">
                        <td className="px-4 md:px-6 py-4 text-sm md:text-base font-semibold">Allgemeiner Gebäudeabriss</td>
                        <td className="px-4 md:px-6 py-4 text-sm md:text-base">Abbruchanzeige (§ 61 BauO Bln), 1 Monat vor Beginn</td>
                        <td className="px-4 md:px-6 py-4 text-sm md:text-base">Bauaufsichtsamt des Bezirks</td>
                      </tr>
                      <tr className="hover:bg-amber-50 transition-colors">
                        <td className="px-4 md:px-6 py-4 text-sm md:text-base font-semibold">Wohngebäude / Wohnraum</td>
                        <td className="px-4 md:px-6 py-4 text-sm md:text-base">Genehmigung nach Zweckentfremdungsverbot-Gesetz (ZwVbG)</td>
                        <td className="px-4 md:px-6 py-4 text-sm md:text-base">Wohnungsamt des Bezirks</td>
                      </tr>
                      <tr className="hover:bg-amber-50 transition-colors">
                        <td className="px-4 md:px-6 py-4 text-sm md:text-base font-semibold">Erhaltungs- bzw. Milieuschutzgebiet (§ 172 BauGB)</td>
                        <td className="px-4 md:px-6 py-4 text-sm md:text-base">Erhaltungsrechtliche Genehmigung</td>
                        <td className="px-4 md:px-6 py-4 text-sm md:text-base">Stadtentwicklungsamt / Fachbereich Stadtplanung</td>
                      </tr>
                      <tr className="hover:bg-amber-50 transition-colors">
                        <td className="px-4 md:px-6 py-4 text-sm md:text-base font-semibold">Denkmal oder Ensemble</td>
                        <td className="px-4 md:px-6 py-4 text-sm md:text-base">Denkmalrechtliche Genehmigung (§ 11 DSchG Bln)</td>
                        <td className="px-4 md:px-6 py-4 text-sm md:text-base">Untere Denkmalschutzbehörde des Bezirks</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </ScrollReveal>

            {/* Important Note */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="card-modern p-6 md:p-8 mb-8 bg-amber-50 border-2 border-amber-200">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-black mb-2 text-amber-900">Hinweis</h3>
                    <p className="text-neutral-700 mb-2">
                      Die bauordnungsrechtliche Abbruchanzeige ersetzt <strong>keine</strong> dieser Spezialgenehmigungen.
                    </p>
                    <p className="text-neutral-700">
                      Alle einschlägigen Verfahren müssen vor Beginn des Abrisses abgeschlossen sein.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Examples Section */}
            <ScrollReveal direction="up" delay={0.3}>
              <h2 className="text-section font-black uppercase mb-6 mt-12">
                Beispiele für <span className="gradient-text">Genehmigungspflichten</span>
              </h2>
            </ScrollReveal>

            {/* When Permission Required */}
            <ScrollReveal direction="up" delay={0.4}>
              <h3 className="text-xl md:text-2xl font-black mb-4">
                Genehmigungspflichtig (mindestens anzeigepflichtig):
              </h3>
              <div className="card-modern p-6 md:p-8 mb-8">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                    <span>Abbruch von Wohnhäusern, Mehrfamilien- oder Reihenhäusern</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                    <span>Gebäude in Milieuschutz- oder Erhaltungsgebieten</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                    <span>Denkmäler oder Teile davon</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                    <span>Gewerbliche Bauten mit größerem Volumen oder komplexer Statik</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                    <span>Nebengebäude größerer Dimension, sofern nicht freistehend und geringfügig</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* When No Permission */}
            <ScrollReveal direction="up" delay={0.5}>
              <h3 className="text-xl md:text-2xl font-black mb-4">
                In der Regel genehmigungsfrei (bauordnungsrechtlich, aber Anzeige nötig):
              </h3>
              <div className="card-modern p-6 md:p-8 mb-8 bg-green-50 border-2 border-green-200">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Freistehende kleine Gebäude der Gebäudeklasse 1 oder 3</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Kleine Gartenhäuser, Geräteschuppen oder Garagen, sofern nicht Teil einer Wohnanlage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Nicht tragende Innenwände innerhalb eines Gebäudes (keine Anzeige nötig)</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Warning Box */}
            <ScrollReveal direction="up" delay={0.6}>
              <div className="card-modern p-6 md:p-8 mb-8 bg-red-50 border-2 border-red-300">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-black mb-2 text-red-900">Im Zweifel immer beim zuständigen Bezirksamt nachfragen</h3>
                    <p className="text-neutral-700">
                      Ein unzulässiger Abriss – insbesondere von Wohnraum – kann als Ordnungswidrigkeit mit 
                      <strong> bis zu 500.000 € Bußgeld</strong> geahndet werden (§ 7 ZwVbG).
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Application Process */}
            <ScrollReveal direction="up" delay={0.7}>
              <h2 className="text-section font-black uppercase mb-6 mt-12">
                Der <span className="gradient-text">Ablauf</span> Schritt für Schritt
              </h2>
            </ScrollReveal>

            {/* Step 1 */}
            <ScrollReveal direction="up" delay={0.8}>
              <div className="card-modern p-6 md:p-8 mb-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-900 to-amber-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-lg">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-black mb-4">Vorabklärung</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                        <span>Ist das Gebäude denkmalgeschützt?</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                        <span>Liegt das Grundstück in einem Erhaltungsgebiet (§ 172 BauGB)?</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                        <span>Handelt es sich um Wohnraum im Sinne des ZwVbG?</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                        <span>Bestehen Schadstoffe oder Asbestbelastungen?</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                        <span>Müssen Nachbarn informiert oder gesichert werden?</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Step 2 */}
            <ScrollReveal direction="up" delay={0.9}>
              <div className="card-modern p-6 md:p-8 mb-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-900 to-amber-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-lg">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-black mb-4">Unterlagen zusammenstellen</h3>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                        <span>Formular für Abbruchanzeige (vom Bezirksamt)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                        <span>Lageplan, Grundrisse, ggf. Fotos</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                        <span>Entsorgungskonzept / Nachweis über ordnungsgemäße Entsorgung</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                        <span>Schadstoffgutachten bei Altbauten</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                        <span>Eigentums- oder Nutzungsnachweis</span>
                      </li>
                    </ul>
                    <p className="text-neutral-700 font-semibold mb-2">Je nach Lage zusätzlich:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                        <span>ZwVbG-Antrag (bei Wohnraum)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                        <span>Erhaltungsrechtlicher Antrag</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                        <span>Denkmalrechtlicher Antrag</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Step 3 */}
            <ScrollReveal direction="up" delay={1.0}>
              <div className="card-modern p-6 md:p-8 mb-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-900 to-amber-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-lg">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-black mb-4">Einreichen beim zuständigen Bauamt</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                        <span>Bezirksabhängig (z. B. Pankow, Charlottenburg-Wilmersdorf etc.)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                        <span><strong>Frist:</strong> mindestens 1 Monat vor Abrissbeginn</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                        <span><strong>Gebühren:</strong> je nach Bezirk unterschiedlich (Richtwerte ca. 100 – 500 €)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Step 4 */}
            <ScrollReveal direction="up" delay={1.1}>
              <div className="card-modern p-6 md:p-8 mb-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-900 to-amber-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-lg">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-black mb-4">Entscheidung und Freigabe</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                        <span>Nach Ablauf der Monatsfrist darf der Abriss beginnen, sofern keine Einwände bestehen.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                        <span>Liegen Spezialgenehmigungen (ZwVbG, Erhaltung, Denkmalschutz) vor, darf erst danach begonnen werden.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Costs */}
            <ScrollReveal direction="up" delay={1.2}>
              <h2 className="text-section font-black uppercase mb-6 mt-12">
                Kosten im <span className="gradient-text">Überblick</span> (Richtwerte)
              </h2>
              <div className="card-modern overflow-hidden mb-8">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[600px]">
                    <thead>
                      <tr className="bg-gradient-to-r from-amber-900 to-amber-700 text-white">
                        <th className="px-4 md:px-6 py-4 text-left text-sm md:text-base font-black uppercase">Kostenart</th>
                        <th className="px-4 md:px-6 py-4 text-left text-sm md:text-base font-black uppercase">Typischer Bereich (€)</th>
                        <th className="px-4 md:px-6 py-4 text-left text-sm md:text-base font-black uppercase">Bemerkung</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200">
                      <tr className="hover:bg-amber-50 transition-colors">
                        <td className="px-4 md:px-6 py-4 text-sm md:text-base font-semibold">Bauaufsicht / Anzeige</td>
                        <td className="px-4 md:px-6 py-4 text-sm md:text-base">100 – 500</td>
                        <td className="px-4 md:px-6 py-4 text-sm md:text-base">Bezirklich unterschiedlich</td>
                      </tr>
                      <tr className="hover:bg-amber-50 transition-colors">
                        <td className="px-4 md:px-6 py-4 text-sm md:text-base font-semibold">Schadstoffgutachten (Asbest etc.)</td>
                        <td className="px-4 md:px-6 py-4 text-sm md:text-base">500 – 2.000</td>
                        <td className="px-4 md:px-6 py-4 text-sm md:text-base">Pflicht bei Altbauten</td>
                      </tr>
                      <tr className="hover:bg-amber-50 transition-colors">
                        <td className="px-4 md:px-6 py-4 text-sm md:text-base font-semibold">Statikprüfung / Abbruchkonzept</td>
                        <td className="px-4 md:px-6 py-4 text-sm md:text-base">500 – 1.500</td>
                        <td className="px-4 md:px-6 py-4 text-sm md:text-base">Je nach Gebäudekomplexität</td>
                      </tr>
                      <tr className="hover:bg-amber-50 transition-colors">
                        <td className="px-4 md:px-6 py-4 text-sm md:text-base font-semibold">Vermessung / Lageplan</td>
                        <td className="px-4 md:px-6 py-4 text-sm md:text-base">300 – 800</td>
                        <td className="px-4 md:px-6 py-4 text-sm md:text-base">Falls erforderlich</td>
                      </tr>
                      <tr className="hover:bg-amber-50 transition-colors">
                        <td className="px-4 md:px-6 py-4 text-sm md:text-base font-semibold">Architekt / Bauleiter / Entsorgungsplaner</td>
                        <td className="px-4 md:px-6 py-4 text-sm md:text-base">1.000 – 3.000</td>
                        <td className="px-4 md:px-6 py-4 text-sm md:text-base">Optional, aber empfohlen</td>
                      </tr>
                      <tr className="bg-amber-100">
                        <td className="px-4 md:px-6 py-4 text-sm md:text-base font-black">Gesamtkostenrahmen</td>
                        <td className="px-4 md:px-6 py-4 text-sm md:text-base font-black">ca. 3.000 – 10.000</td>
                        <td className="px-4 md:px-6 py-4 text-sm md:text-base font-semibold">Stark abhängig vom Objekt</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="p-4 bg-amber-50 text-sm text-neutral-700">
                  <p><strong>Hinweis:</strong> Diese Angaben sind Richtwerte – verbindliche Gebühren können nur die zuständigen Bezirksämter nennen.</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Legal Basis */}
            <ScrollReveal direction="up" delay={1.3}>
              <h2 className="text-section font-black uppercase mb-6 mt-12">
                Wichtige <span className="gradient-text">Rechtsgrundlagen</span> (Berlin)
              </h2>
              <div className="card-modern p-6 md:p-8 mb-8">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                    <span><strong>Bauordnung für Berlin (BauO Bln)</strong> – § 61 Beseitigung von Anlagen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                    <span><strong>Gesetz über das Verbot der Zweckentfremdung von Wohnraum (ZwVbG Bln)</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                    <span><strong>Baugesetzbuch (BauGB)</strong> – § 172 Erhaltungssatzung</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                    <span><strong>Denkmalschutzgesetz Berlin (DSchG Bln)</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                    <span><strong>Abfallgesetzgebung / TRGS 519</strong> – Asbest- und Schadstoffvorgaben</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Conclusion */}
            <ScrollReveal direction="up" delay={1.4}>
              <h2 className="text-section font-black uppercase mb-6 mt-12">
                <span className="gradient-text">Fazit</span>
              </h2>
              <p className="text-body-lg text-neutral-700 mb-6">
                Eine Abrissgenehmigung im engeren Sinne ist in Berlin meist nicht mehr erforderlich, aber fast jeder 
                Abriss muss angezeigt und ggf. durch weitere Fachgenehmigungen ergänzt werden.
              </p>
              <p className="text-body-lg text-neutral-700 mb-6">
                Wer Wohnraum, Denkmale oder Gebäude in Milieuschutzgebieten beseitigen will, braucht zwingend vorherige 
                Zustimmung der zuständigen Behörden.
              </p>
              <p className="text-body-lg text-neutral-700 mb-6">
                <strong>BC Group Berlin unterstützt Sie dabei</strong> von der Vorprüfung über die Abbruchanzeige bis 
                zur fachgerechten Durchführung. Wir übernehmen die Koordination mit den Behörden und sorgen für einen 
                rechtssicheren, reibungslosen Ablauf.
              </p>
            </ScrollReveal>

            {/* Sources */}
            <ScrollReveal direction="up" delay={1.5}>
              <div className="card-modern p-6 md:p-8 mb-8 bg-neutral-50">
                <h3 className="text-lg font-black mb-4">Quellen (juristisch geprüft)</h3>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li>• BauO Bln § 61</li>
                  <li>• ZwVbG Bln §§ 2, 7</li>
                  <li>• BauGB § 172</li>
                  <li>• DSchG Bln § 11</li>
                  <li>• Bezirksämter Berlin (u. a. Pankow, Charlottenburg-Wilmersdorf, Tempelhof-Schöneberg – Merkblätter 2024 / 2025)</li>
                </ul>
              </div>
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
              Wir kümmern uns um alle Anzeigen und Genehmigungen – fachgerecht, sicher und termingerecht.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt">
                <Button variant="gradient" size="lg" className="shadow-xl group">
                  <span className="flex items-center gap-2">
                    Jetzt kostenlose Erstberatung anfordern!
                    <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </span>
                </Button>
              </Link>
              <Link href="/services/abriss">
                <Button variant="secondary" size="lg">
                  Mehr über Abriss-Service
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
