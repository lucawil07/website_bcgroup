import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Section, Container, Button, ScrollReveal, StructuredData } from '@/components/ui'
import { Calendar, Clock, ArrowLeft, CheckCircle2, Truck, Phone, Package } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Kurierdienst Berlin | BC Kurierdienst – Vertragliche & regelmäßige Kurierfahrten für Unternehmen',
  description: 'BC Kurierdienst Berlin – Ihr Partner für vertragliche Kurierdienste, regelmäßige Lieferungen & planbare Transporte. Professionell, zuverlässig & individuell für Geschäftskunden.',
  keywords: [
    'Kurierdienst Berlin',
    'Vertraglicher Kurierdienst',
    'Geschäftskunden Kurier',
    'Regelmäßige Lieferungen Berlin',
    'Dokumententransport Berlin',
    'Planbare Kurierfahrten',
    'Business Kurierdienst',
  ],
  openGraph: {
    title: 'Kurierdienst Berlin – Vertragliche Kurierlösungen für Geschäftskunden',
    description: 'BC Kurierdienst Berlin – Ihr Partner für vertragliche Kurierdienste, regelmäßige Lieferungen & planbare Transporte.',
    type: 'article',
    locale: 'de_DE',
    url: 'https://bcgroup.de/ratgeber/kurierdienst-berlin',
    siteName: 'BC Group Berlin',
    images: [{
      url: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=1200&auto=format&fit=crop',
      width: 1200,
      height: 630,
      alt: 'Kurierdienst Berlin',
    }],
    publishedTime: '2024-09-29',
    modifiedTime: '2025-11-16',
  },
  alternates: {
    canonical: 'https://bcgroup.de/ratgeber/kurierdienst-berlin',
  },
}

export default function KurierdienstBerlinPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Kurierdienst Berlin – Vertragliche Kurierlösungen für Geschäftskunden',
    description: 'BC Kurierdienst Berlin ist Ihr fester Partner für regelmäßige Transporte, Dokumentenzustellungen und Unternehmenslogistik in der Hauptstadt.',
    image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=1200&auto=format&fit=crop',
    datePublished: '2024-09-29',
    dateModified: '2025-11-16',
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
              🚚 Kurierdienst Berlin –<br />
              <span className="gradient-text">Vertragliche Kurierlösungen</span><br />
              für Geschäftskunden
            </h1>

            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/80 text-sm mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>16. November 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>8 Min. Lesezeit</span>
              </div>
            </div>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl">
              Ihr verlässlicher Kurierdienst in Berlin – planbar, sicher und professionell. BC Kurierdienst Berlin ist 
              Ihr fester Partner für regelmäßige Transporte, Dokumentenzustellungen und Unternehmenslogistik in der Hauptstadt.
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
            
            {/* Introduction */}
            <ScrollReveal direction="up">
              <p className="text-body-lg text-neutral-700 mb-8 leading-relaxed">
                Wir bieten vertraglich geregelte Kurierdienste, feste Routen und planbare Abläufe – zuverlässig, 
                termintreu und wirtschaftlich im gesamten Berliner Raum. Unser Fokus liegt auf Business-Kunden, 
                die Wert auf Struktur, Vertrauen und langfristige Zusammenarbeit legen.
              </p>
            </ScrollReveal>

            {/* Why Contract-Based Courier */}
            <ScrollReveal direction="up">
              <h2 className="text-section font-black uppercase mb-6 mt-12">
                Warum ein <span className="gradient-text">vertraglicher Kurierdienst</span> in Berlin sinnvoll ist
              </h2>
              <p className="text-body-lg text-neutral-700 mb-6">
                Berlin ist schnelllebig – doch erfolgreiche Unternehmen brauchen planbare Abläufe. Mit einem 
                vertraglichen Kurierdienst profitieren Sie von festen Touren, klaren Prozessen und kalkulierbaren Kosten.
              </p>
              <p className="text-body-lg text-neutral-700 mb-8">
                Ob tägliche Dokumentenfahrten, interne Warenlieferungen oder regelmäßige Standort-Logistik: BC Kurierdienst 
                Berlin sorgt für Zuverlässigkeit, Transparenz und Entlastung in Ihrem Arbeitsalltag.
              </p>
            </ScrollReveal>

            {/* Main Services */}
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="text-section font-black uppercase mb-8 mt-12">
                Unsere <span className="gradient-text">Kurierleistungen</span> für Geschäftskunden
              </h2>
            </ScrollReveal>

            {/* Service 1: Contract Services */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="relative overflow-hidden rounded-2xl mb-8 bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-900 p-8 md:p-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-cyan-500/20 p-3 rounded-xl backdrop-blur-sm">
                      <Package className="w-8 h-8 text-cyan-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                        📦 Vertragliche Kurierdienste – alles aus einer Hand
                      </h3>
                      <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                        Wir entwickeln maßgeschneiderte Kurierlösungen für Unternehmen mit regelmäßigem Transportbedarf. 
                        Ob Dokumente, Waren oder Spezialgüter – wir liefern verlässlich, planbar und vertraglich abgesichert 
                        in ganz Berlin und Umgebung.
                      </p>
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                        <h4 className="text-white font-black mb-4 text-lg">Ihre Vorteile:</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                            <span className="text-blue-100">Feste Routen & planbare Fahrten</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                            <span className="text-blue-100">Vertragliche Rahmenbedingungen</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                            <span className="text-blue-100">Pünktlichkeit und Dokumentation</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                            <span className="text-blue-100">Zuverlässiger Service ohne Ausfälle</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Service 2: Regular Deliveries */}
            <ScrollReveal direction="up" delay={0.3}>
              <div className="relative overflow-hidden rounded-2xl mb-8 bg-gradient-to-br from-indigo-950 via-indigo-900 to-blue-900 p-8 md:p-10">
                <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-blue-500/20 p-3 rounded-xl backdrop-blur-sm">
                      <Truck className="w-8 h-8 text-blue-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                        🔁 Regelmäßige Lieferungen
                      </h3>
                      <p className="text-indigo-100 text-lg mb-6 leading-relaxed">
                        Ideal für Firmen mit wiederkehrenden Transporten zwischen Standorten, Filialen oder Partnern. 
                        Wir garantieren pünktliche Zustellungen, abgestimmte Abholzeiten und absolute Termintreue.
                      </p>
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                        <h4 className="text-white font-black mb-4 text-lg">Leistungsmerkmale:</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                            <span className="text-indigo-100">Wiederkehrende Touren zu festen Zeiten</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                            <span className="text-indigo-100">Vertraglich vereinbarte Abläufe</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                            <span className="text-indigo-100">Erfahrene Fahrer mit Ortskenntnis</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                            <span className="text-indigo-100">Kosteneffiziente Logistikstrukturen</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Service 3: Business Customer Logistics */}
            <ScrollReveal direction="up" delay={0.4}>
              <div className="relative overflow-hidden rounded-2xl mb-8 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 p-8 md:p-10">
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-blue-500/20 p-3 rounded-xl backdrop-blur-sm">
                      <Package className="w-8 h-8 text-blue-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                        🏢 Geschäftskunden-Logistik
                      </h3>
                      <p className="text-slate-100 text-lg mb-6 leading-relaxed">
                        Wir übernehmen die interne und externe Transportlogistik für Unternehmen, Büros und Produktionsstätten. 
                        Unsere Fahrer sind geschult, zuverlässig und repräsentieren Ihr Unternehmen professionell gegenüber 
                        Kunden und Partnern.
                      </p>
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                        <h4 className="text-white font-black mb-4 text-lg">Das bieten wir:</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                            <span className="text-slate-100">Planbare Touren im gesamten Stadtgebiet</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                            <span className="text-slate-100">Kostenoptimierte Streckenplanung</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                            <span className="text-slate-100">Dokumentierte Abläufe und Versicherungsschutz</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                            <span className="text-slate-100">Einheitliche Servicequalität bei allen Fahrten</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Service 4: Documents */}
            <ScrollReveal direction="up" delay={0.5}>
              <div className="relative overflow-hidden rounded-2xl mb-8 bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-900 p-8 md:p-10">
                <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-cyan-500/20 p-3 rounded-xl backdrop-blur-sm">
                      <Phone className="w-8 h-8 text-cyan-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                        🗂️ Dokumenten- & Aktenservice
                      </h3>
                      <p className="text-cyan-100 text-lg mb-6 leading-relaxed">
                        Vertrauliche Dokumente verdienen besondere Sorgfalt. Unser Dokumenten-Kurierdienst Berlin stellt 
                        sicher, dass Ihre Unterlagen diskret, sicher und nachvollziehbar zugestellt werden.
                      </p>
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                        <h4 className="text-white font-black mb-4 text-lg">Leistungen im Überblick:</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                            <span className="text-cyan-100">Vertrauliche Zustellung wichtiger Dokumente und Akten</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                            <span className="text-cyan-100">Quittierung bei Übergabe</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                            <span className="text-cyan-100">Geschulte, verschwiegene Fahrer</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                            <span className="text-cyan-100">Regelmäßige Touren zwischen Kanzleien, Behörden oder Standorten</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Advantages */}
            <ScrollReveal direction="up" delay={0.6}>
              <h2 className="text-section font-black uppercase mb-8 mt-12">
                Warum <span className="gradient-text">BC Kurierdienst Berlin</span> die richtige Wahl ist
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Benefit 1 */}
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-50 to-blue-50 p-6 border border-blue-100">
                  <div className="absolute top-0 right-0 text-8xl font-black text-blue-100 opacity-30">01</div>
                  <div className="relative z-10">
                    <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-black text-xl mb-3 text-slate-900">Vertragliche Planung</h4>
                    <p className="text-slate-700 mb-3">
                      Feste Touren und planbare Abläufe – ideal für Unternehmen mit regelmäßigem Lieferbedarf.
                    </p>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white rounded-full text-sm font-bold">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>100% Planungssicherheit</span>
                    </div>
                  </div>
                </div>

                {/* Benefit 2 */}
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-50 to-cyan-50 p-6 border border-cyan-100">
                  <div className="absolute top-0 right-0 text-8xl font-black text-cyan-100 opacity-30">02</div>
                  <div className="relative z-10">
                    <div className="bg-cyan-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-black text-xl mb-3 text-slate-900">Zuverlässigkeit & Termintreue</h4>
                    <p className="text-slate-700 mb-3">
                      Wir garantieren pünktliche Zustellung und transparente Abläufe – auf Wunsch mit digitaler Sendungsbestätigung.
                    </p>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-600 text-white rounded-full text-sm font-bold">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>100% Verlässlichkeit</span>
                    </div>
                  </div>
                </div>

                {/* Benefit 3 */}
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-50 to-indigo-50 p-6 border border-indigo-100">
                  <div className="absolute top-0 right-0 text-8xl font-black text-indigo-100 opacity-30">03</div>
                  <div className="relative z-10">
                    <div className="bg-indigo-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-black text-xl mb-3 text-slate-900">Persönlicher Ansprechpartner</h4>
                    <p className="text-slate-700 mb-3">
                      Jeder Vertragspartner erhält einen festen Ansprechpartner, der Ihre Touren kennt und individuell betreut.
                    </p>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-600 text-white rounded-full text-sm font-bold">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Individuelle Betreuung</span>
                    </div>
                  </div>
                </div>

                {/* Benefit 4 */}
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-50 to-blue-50 p-6 border border-blue-100">
                  <div className="absolute top-0 right-0 text-8xl font-black text-blue-100 opacity-30">04</div>
                  <div className="relative z-10">
                    <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                      <Truck className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-black text-xl mb-3 text-slate-900">Flexible Lösungen</h4>
                    <p className="text-slate-700 mb-3">
                      Ob tägliche, wöchentliche oder projektbezogene Fahrten – wir passen uns Ihren Abläufen an.
                    </p>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white rounded-full text-sm font-bold">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Flexible Kurierkonzepte</span>
                    </div>
                  </div>
                </div>

                {/* Benefit 5 */}
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-50 to-cyan-50 p-6 border border-cyan-100">
                  <div className="absolute top-0 right-0 text-8xl font-black text-cyan-100 opacity-30">05</div>
                  <div className="relative z-10">
                    <div className="bg-cyan-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-black text-xl mb-3 text-slate-900">Geschultes Fachpersonal</h4>
                    <p className="text-slate-700 mb-3">
                      Unsere Fahrer verfügen über ausgezeichnete Ortskenntnis, sicheres Auftreten und langjährige Erfahrung.
                    </p>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-600 text-white rounded-full text-sm font-bold">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Qualifiziertes Fahrpersonal</span>
                    </div>
                  </div>
                </div>

                {/* Benefit 6 */}
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-50 to-indigo-50 p-6 border border-indigo-100">
                  <div className="absolute top-0 right-0 text-8xl font-black text-indigo-100 opacity-30">06</div>
                  <div className="relative z-10">
                    <div className="bg-indigo-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-black text-xl mb-3 text-slate-900">Hohe Erreichbarkeit</h4>
                    <p className="text-slate-700 mb-3">
                      Unser Dispositionsteam ist während der Geschäftszeiten jederzeit erreichbar und reagiert schnell auf Ihre Anfragen.
                    </p>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-600 text-white rounded-full text-sm font-bold">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Direkter Servicekontakt</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Service Area */}
            <ScrollReveal direction="up" delay={0.7}>
              <h2 className="text-section font-black uppercase mb-6 mt-12">
                <span className="gradient-text">Einsatzgebiet:</span> Ganz Berlin & Umland
              </h2>
              <p className="text-body-lg text-neutral-700 mb-8">
                Wir fahren alle Berliner Bezirke sowie das nahe Umland. Von Charlottenburg über Kreuzberg bis Pankow – 
                unsere Fahrer sind täglich in der gesamten Hauptstadtregion unterwegs. So sichern wir regionale Präsenz 
                und kurze Reaktionszeiten für unsere Vertragspartner.
              </p>
            </ScrollReveal>

            {/* Key Advantages Overview */}
            <ScrollReveal direction="up" delay={0.8}>
              <div className="bg-gradient-to-br from-blue-950 to-cyan-900 rounded-2xl p-8 md:p-10 mb-8">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-6 text-center">
                  Ihre Vorteile im Überblick
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                    <span className="text-blue-100">Vertraglich geregelte Kurierfahrten</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                    <span className="text-blue-100">Einheitliche Prozesse und feste Ansprechpartner</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                    <span className="text-blue-100">Hohe Planungssicherheit & transparente Kosten</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                    <span className="text-blue-100">Geschäftskundenorientierte Servicequalität</span>
                  </div>
                  <div className="flex items-start gap-3 md:col-span-2">
                    <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                    <span className="text-blue-100">Zuverlässige Zustellung im gesamten Berliner Raum</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Conclusion */}
            <ScrollReveal direction="up" delay={0.9}>
              <h2 className="text-section font-black uppercase mb-6 mt-12">
                <span className="gradient-text">Fazit:</span> Ihr verlässlicher Kurierdienst in Berlin
              </h2>
              <p className="text-body-lg text-neutral-700 mb-6 leading-relaxed">
                Ein vertraglicher Kurierdienst in Berlin bietet Unternehmen nicht nur Geschwindigkeit, sondern vor allem 
                Planungssicherheit, Verlässlichkeit und Zeitersparnis. Mit BC Kurierdienst Berlin erhalten Sie einen Partner, 
                der sich nahtlos in Ihre Unternehmensabläufe integriert und Transporte zuverlässig abwickelt – jeden Tag, 
                auf jeder Strecke.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-600 rounded-r-xl p-6 mb-8">
                <p className="text-lg font-bold text-slate-900">
                  BC Kurierdienst Berlin – Ihr starker Partner für regelmäßige, planbare und vertraglich geregelte 
                  Kurierfahrten in der Hauptstadt.
                </p>
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
              Vertraglicher<br />
              <span className="gradient-text">Kurierdienst</span> gesucht?
            </h2>
            <p className="text-lg text-white/90 mb-4 max-w-2xl mx-auto">
              Interessiert an einer festen Kurierpartnerschaft in Berlin?
            </p>
            <p className="text-base text-white/80 mb-8 max-w-2xl mx-auto">
              Fordern Sie jetzt ein unverbindliches Angebot an oder erfahren Sie mehr über unsere vertraglichen 
              Kurierdienste für Geschäftskunden.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt">
                <Button variant="gradient" size="lg" className="shadow-xl">
                  ➡️ Jetzt Angebot einholen
                </Button>
              </Link>
              <Link href="/services/kurierdienst">
                <Button variant="secondary" size="lg">
                  ➡️ Mehr über Kurierdienst
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
