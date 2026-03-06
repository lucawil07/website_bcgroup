import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Section, Container, ScrollReveal, StructuredData } from '@/components/ui'
import { Calendar, Clock, ArrowLeft, CheckCircle2, Phone, ArrowRight, AlertTriangle, Euro, Home, Truck, ClipboardCheck, Recycle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Wohnungsauflösung Berlin – Professionell & Zuverlässig | BC Group Berlin',
  description: 'Professionelle Wohnungsauflösung in Berlin: Komplettservice von der Besichtigung bis zur besenreinen Übergabe. ✓ Festpreise ✓ Fachgerechte Entsorgung ✓ Alle Füllstände. Jetzt beraten lassen!',
  keywords: [
    'Wohnungsauflösung Berlin',
    'Wohnung auflösen Berlin',
    'Haushaltsauflösung Berlin',
    'Entrümpelung Wohnung Berlin',
    'Wohnungsräumung Berlin',
    'professionelle Wohnungsauflösung',
    'Wohnung räumen lassen Berlin',
    'Wohnungsauflösung Kosten Berlin',
  ],
  openGraph: {
    title: 'Wohnungsauflösung Berlin – Professionell & Zuverlässig',
    description: 'Professionelle Wohnungsauflösung in Berlin: Komplettservice von der Besichtigung bis zur besenreinen Übergabe.',
    type: 'article',
    locale: 'de_DE',
    url: 'https://bcgroup.de/ratgeber/entruempelung/wohnungsaufloesung-berlin',
    siteName: 'BC Group Berlin',
    images: [{
      url: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=1200&auto=format&fit=crop',
      width: 1200,
      height: 630,
      alt: 'Professionelle Wohnungsauflösung in Berlin',
    }],
    publishedTime: '2024-10-15',
    modifiedTime: '2025-03-05T00:00:00.000Z',
  },
  alternates: {
    canonical: 'https://bcgroup.de/ratgeber/entruempelung/wohnungsaufloesung-berlin',
  },
}

export default function WohnungsaufloesungBerlinPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Wohnungsauflösung Berlin – Professionell & Zuverlässig',
    description: 'Professionelle Wohnungsauflösung in Berlin: Komplettservice von der Besichtigung bis zur besenreinen Übergabe.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=1200&auto=format&fit=crop',
    datePublished: '2024-10-15',
    dateModified: '2025-03-05',
    author: {
      '@type': 'Organization',
      name: 'BC Group Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'BC Group Berlin',
      logo: {
        '@type': 'ImageObject',
        url: 'https://bcgroup.de/images/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://bcgroup.de/ratgeber/entruempelung/wohnungsaufloesung-berlin',
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
        item: 'https://bcgroup.de',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Ratgeber',
        item: 'https://bcgroup.de/ratgeber',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Entrümpelung',
        item: 'https://bcgroup.de/ratgeber/entruempelung',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Wohnungsauflösung Berlin',
        item: 'https://bcgroup.de/ratgeber/entruempelung/wohnungsaufloesung-berlin',
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
              href="/ratgeber/entruempelung"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-bold uppercase tracking-wider">Zurück zum Entrümpelung-Ratgeber</span>
            </Link>

            <div className="mb-6">
              <span className="bg-emerald-600 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
                Entrümpelung
              </span>
            </div>

            <h1 className="text-hero uppercase font-black mb-6 leading-tight">
              Wohnungsauflösung<br />
              <span className="gradient-text">Berlin</span>
            </h1>

            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/80 text-sm mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>15. Oktober 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>8 Min. Lesezeit</span>
              </div>
            </div>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl">
              Von der Single-Wohnung bis zum komplett eingerichteten Familienhaus – eine professionelle Wohnungsauflösung
              in Berlin umfasst weit mehr als nur Möbel raustragen. Erfahren Sie, wie der Prozess abläuft, welche
              Kosten entstehen und warum sich ein erfahrener Dienstleister lohnt.
            </p>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Featured Image */}
      <Section background="white" padding="none">
        <Container size="wide">
          <div className="relative h-[400px] md:h-[600px] -mt-12 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=1600&auto=format&fit=crop"
              alt="Professionelle Wohnungsauflösung in Berlin"
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

            {/* Einleitung */}
            <ScrollReveal direction="up">
              <h2 className="text-section font-black uppercase mb-6">
                Was ist eine <span className="gradient-text">Wohnungsauflösung?</span>
              </h2>
              <p className="text-body-lg text-neutral-700 mb-6">
                Eine Wohnungsauflösung bedeutet die vollständige Räumung einer Wohnung oder eines Hauses – einschließlich
                aller Möbel, Haushaltsgeräte, persönlicher Gegenstände und sonstiger Einrichtung. Anders als bei einer
                einfachen Entrümpelung wird bei einer Wohnungsauflösung die gesamte Immobilie leergeräumt und in der
                Regel besenrein an den Vermieter oder den neuen Eigentümer übergeben.
              </p>
              <p className="text-body-lg text-neutral-700 mb-6">
                In Berlin ist die Nachfrage nach professionellen Wohnungsauflösungen besonders hoch. Die Gründe sind
                vielfältig: Umzüge in eine kleinere Wohnung, Trennungen, Todesfälle in der Familie oder der Einzug
                ins Pflegeheim. Allein in Berlin werden jährlich tausende Wohnungen aufgelöst – und längst nicht immer
                können Angehörige oder Mieter diese Aufgabe selbst stemmen.
              </p>
            </ScrollReveal>

            {/* Wann wird eine Wohnungsauflösung nötig? */}
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="text-section font-black uppercase mb-6 mt-12">
                Wann wird eine <span className="gradient-text">Wohnungsauflösung nötig?</span>
              </h2>
              <p className="text-body-lg text-neutral-700 mb-6">
                Es gibt zahlreiche Situationen, in denen eine Wohnungsauflösung erforderlich wird. Nicht immer ist der
                Anlass erfreulich – umso wichtiger ist ein verständnisvoller und professioneller Partner an Ihrer Seite.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <div className="card-modern p-6 md:p-8 mb-8">
                <h3 className="text-2xl font-black mb-6">Häufige Anlässe für eine Wohnungsauflösung</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span><strong>Todesfall in der Familie:</strong> Nach dem Verlust eines Angehörigen muss der
                    Haushalt aufgelöst werden. Oft stehen Erben unter Zeitdruck, weil die Wohnung gekündigt werden muss
                    oder ein Nachlassverwalter zeitnah eine Räumung verlangt.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span><strong>Umzug ins Pflegeheim:</strong> Wenn ein Familienmitglied in eine betreute
                    Einrichtung zieht, wird die bisherige Wohnung nicht mehr benötigt. Hier gilt es, persönliche
                    Erinnerungsstücke sorgfältig auszusortieren.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span><strong>Trennung oder Scheidung:</strong> Bei einer Auflösung des gemeinsamen Hausstands
                    setzen wir auf diskrete und faire Abwicklung. Wertgegenstände werden dokumentiert und nach
                    Absprache aufgeteilt.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span><strong>Downsizing:</strong> Der Umzug in eine kleinere Wohnung erfordert das Aussortieren
                    von Möbeln und Gegenständen, die im neuen Zuhause keinen Platz mehr finden.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span><strong>Zwangsräumung:</strong> Bei gerichtlich angeordneten Räumungen übernehmen wir die
                    fristgerechte Umsetzung in enger Abstimmung mit Hausverwaltungen und Gerichtsvollziehern.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span><strong>Auswanderung oder längerer Auslandsaufenthalt:</strong> Wenn Sie Deutschland
                    verlassen und Ihre Wohnung nicht behalten möchten, organisieren wir die komplette Auflösung –
                    auch in Ihrer Abwesenheit.</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Was umfasst eine Wohnungsauflösung? */}
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="text-section font-black uppercase mb-6 mt-12">
                Was umfasst eine <span className="gradient-text">professionelle Wohnungsauflösung?</span>
              </h2>
              <p className="text-body-lg text-neutral-700 mb-6">
                Eine Wohnungsauflösung durch BC Group Berlin ist ein Komplettservice. Wir kümmern uns um
                sämtliche Arbeitsschritte, damit Sie sich um nichts selbst kümmern müssen.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 not-prose">
                <div className="card-modern p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Home className="w-8 h-8 text-emerald-600" />
                    <h3 className="text-xl font-black">Räumung & Demontage</h3>
                  </div>
                  <ul className="space-y-2 text-neutral-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                      <span>Komplette Möbeldemontage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                      <span>Abbau von Einbauküchen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                      <span>Entfernung von Bodenbelägen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                      <span>Demontage von Lampen & Gardinen</span>
                    </li>
                  </ul>
                </div>

                <div className="card-modern p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Recycle className="w-8 h-8 text-emerald-600" />
                    <h3 className="text-xl font-black">Entsorgung & Verwertung</h3>
                  </div>
                  <ul className="space-y-2 text-neutral-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                      <span>Fachgerechte Mülltrennung</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                      <span>Sperrmüllentsorgung</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                      <span>Elektrogeräte-Recycling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                      <span>Spende verwertbarer Gegenstände</span>
                    </li>
                  </ul>
                </div>

                <div className="card-modern p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <ClipboardCheck className="w-8 h-8 text-emerald-600" />
                    <h3 className="text-xl font-black">Sortierung & Dokumentation</h3>
                  </div>
                  <ul className="space-y-2 text-neutral-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                      <span>Sichtung persönlicher Dokumente</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                      <span>Separierung von Wertgegenständen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                      <span>Fotodokumentation auf Wunsch</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                      <span>Übergabeprotokoll</span>
                    </li>
                  </ul>
                </div>

                <div className="card-modern p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Truck className="w-8 h-8 text-emerald-600" />
                    <h3 className="text-xl font-black">Zusatzleistungen</h3>
                  </div>
                  <ul className="space-y-2 text-neutral-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                      <span>Besenreine Übergabe</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                      <span>Professionelle Endreinigung</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                      <span>Malerarbeiten & Renovierung</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                      <span>Transport einzelner Möbelstücke</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* Der Ablauf */}
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="text-section font-black uppercase mb-8 mt-12">
                Der <span className="gradient-text">Ablauf</span> in 5 Schritten
              </h2>
              <p className="text-body-lg text-neutral-700 mb-8">
                Unser Prozess ist darauf ausgelegt, Ihnen maximale Transparenz und minimalen Aufwand zu bieten.
                So läuft eine Wohnungsauflösung bei BC Group Berlin ab:
              </p>
            </ScrollReveal>

            {/* Schritt 1 */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="card-modern p-6 md:p-8 mb-6 border-l-4 border-emerald-600">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-emerald-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-black text-lg">1</span>
                  <h3 className="text-2xl font-black text-emerald-700">Kostenlose Besichtigung</h3>
                </div>
                <p className="text-neutral-700 mb-4">
                  Alles beginnt mit einer unverbindlichen Vor-Ort-Besichtigung. Unser erfahrenes Team kommt zu Ihnen,
                  begutachtet die Räumlichkeiten und erfasst den Umfang der Auflösung. Dabei achten wir auf:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span>Wohnungsgröße und Anzahl der Räume</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span>Füllstand und Art der Gegenstände</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span>Zugänglichkeit (Stockwerk, Aufzug, Parkplatzsituation)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span>Sondergegenstände wie Klaviere, Tresore oder Sonderabfälle</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Schritt 2 */}
            <ScrollReveal direction="up" delay={0.3}>
              <div className="card-modern p-6 md:p-8 mb-6 border-l-4 border-emerald-600">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-emerald-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-black text-lg">2</span>
                  <h3 className="text-2xl font-black text-emerald-700">Transparentes Festpreisangebot</h3>
                </div>
                <p className="text-neutral-700 mb-4">
                  Auf Basis der Besichtigung erstellen wir ein detailliertes Festpreisangebot – ohne versteckte Kosten.
                  Der genannte Preis umfasst alle Arbeiten: Demontage, Abtransport, Entsorgung und die besenreine Übergabe.
                  Es gibt keine Überraschungen auf der Rechnung.
                </p>
                <p className="text-neutral-700">
                  Sollten verwertbare Gegenstände vorhanden sein, verrechnen wir deren Wert selbstverständlich mit
                  dem Angebotspreis. Das senkt Ihre Kosten spürbar.
                </p>
              </div>
            </ScrollReveal>

            {/* Schritt 3 */}
            <ScrollReveal direction="up" delay={0.4}>
              <div className="card-modern p-6 md:p-8 mb-6 border-l-4 border-emerald-600">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-emerald-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-black text-lg">3</span>
                  <h3 className="text-2xl font-black text-emerald-700">Professionelle Räumung</h3>
                </div>
                <p className="text-neutral-700 mb-4">
                  Am vereinbarten Termin rückt unser eingespieltes Team an – ausgestattet mit allem, was benötigt wird:
                  Werkzeug für die Demontage, ausreichend Transportfahrzeuge und Verpackungsmaterial für empfindliche
                  Gegenstände. Je nach Wohnungsgröße sind wir mit 2 bis 6 Mitarbeitern vor Ort.
                </p>
                <p className="text-neutral-700">
                  Während der Räumung sortieren wir systematisch: Verwertbares wird separiert, Sondermüll fachgerecht
                  behandelt und persönliche Gegenstände wie Fotos oder Dokumente gesichert und Ihnen übergeben.
                </p>
              </div>
            </ScrollReveal>

            {/* Schritt 4 */}
            <ScrollReveal direction="up" delay={0.5}>
              <div className="card-modern p-6 md:p-8 mb-6 border-l-4 border-emerald-600">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-emerald-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-black text-lg">4</span>
                  <h3 className="text-2xl font-black text-emerald-700">Fachgerechte Entsorgung</h3>
                </div>
                <p className="text-neutral-700 mb-4">
                  Alle Materialien werden umweltgerecht entsorgt. Als zertifizierter Entsorgungsfachbetrieb arbeiten
                  wir mit den Berliner Recyclinghöfen zusammen und stellen sicher, dass Holz, Metall, Elektrogeräte
                  und Restmüll getrennt und ordnungsgemäß verwertet werden.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span>Entsorgungsnachweis auf Wunsch</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span>Sondermüllentsorgung (Farben, Lacke, Chemikalien)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span>Elektrogeräte nach ElektroG</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Schritt 5 */}
            <ScrollReveal direction="up" delay={0.6}>
              <div className="card-modern p-6 md:p-8 mb-8 border-l-4 border-emerald-600">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-emerald-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-black text-lg">5</span>
                  <h3 className="text-2xl font-black text-emerald-700">Besenreine Übergabe</h3>
                </div>
                <p className="text-neutral-700 mb-4">
                  Nach Abschluss der Räumung hinterlassen wir die Wohnung besenrein. Auf Wunsch führen wir eine
                  professionelle Endreinigung durch, sodass die Wohnung direkt an den Vermieter oder Käufer übergeben
                  werden kann. Falls gewünscht, begleiten wir Sie auch bei der Übergabe und erstellen ein Protokoll.
                </p>
              </div>
            </ScrollReveal>

            {/* Füllstände */}
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="text-section font-black uppercase mb-6 mt-12">
                <span className="gradient-text">Füllstände</span> & Schwierigkeitsgrade
              </h2>
              <p className="text-body-lg text-neutral-700 mb-8">
                Der Füllstand einer Wohnung ist einer der wichtigsten Faktoren für den Aufwand und die Kosten
                einer Wohnungsauflösung. Wir unterscheiden vier Kategorien:
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <div className="card-modern p-6 md:p-8 mb-6 border-l-4 border-green-500">
                <h3 className="text-xl font-black mb-3 text-green-700">Geringer Füllstand</h3>
                <p className="text-neutral-700 mb-3">
                  Wenige Möbelstücke, kaum Kleinkram. Typisch für bereits teilgeräumte Wohnungen oder WG-Zimmer.
                  In der Regel innerhalb weniger Stunden erledigt.
                </p>
                <p className="text-sm text-neutral-500">Teamgröße: 2 Mitarbeiter | Dauer: 2–4 Stunden</p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <div className="card-modern p-6 md:p-8 mb-6 border-l-4 border-yellow-500">
                <h3 className="text-xl font-black mb-3 text-yellow-700">Mittlerer Füllstand</h3>
                <p className="text-neutral-700 mb-3">
                  Standard-Haushalt mit normaler Einrichtung. Wohnzimmer, Schlafzimmer und Küche sind vollständig
                  möbliert. Der Keller oder Dachboden kann zusätzliche Gegenstände enthalten.
                </p>
                <p className="text-sm text-neutral-500">Teamgröße: 3–4 Mitarbeiter | Dauer: 4–8 Stunden</p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4}>
              <div className="card-modern p-6 md:p-8 mb-6 border-l-4 border-orange-500">
                <h3 className="text-xl font-black mb-3 text-orange-700">Hoher Füllstand</h3>
                <p className="text-neutral-700 mb-3">
                  Stark gefüllte Räume mit vielen Gegenständen in Schränken, auf Regalen und in Nebenräumen.
                  Die Sortierung nimmt erheblich mehr Zeit in Anspruch – verwertbare Gegenstände müssen identifiziert
                  und separiert werden.
                </p>
                <p className="text-sm text-neutral-500">Teamgröße: 4–5 Mitarbeiter | Dauer: 1–2 Tage</p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.5}>
              <div className="card-modern p-6 md:p-8 mb-8 border-l-4 border-red-500">
                <div className="flex items-center gap-3 mb-3">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                  <h3 className="text-xl font-black text-red-700">Extremfälle (Messie-Wohnungen)</h3>
                </div>
                <p className="text-neutral-700 mb-3">
                  Stark zugestellte oder verschmutzte Wohnungen erfordern eine besondere Herangehensweise. Wir
                  arbeiten mit speziellem Equipment, Schutzausrüstung und der nötigen Sensibilität. Hygienische
                  Herausforderungen wie Schimmel oder Ungezieferbefall werden professionell bewältigt.
                </p>
                <p className="text-sm text-neutral-500">Teamgröße: 4–6 Mitarbeiter | Dauer: 2–5 Tage</p>
              </div>
            </ScrollReveal>

            {/* Kostenfaktoren */}
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="text-section font-black uppercase mb-6 mt-12">
                Was kostet eine <span className="gradient-text">Wohnungsauflösung in Berlin?</span>
              </h2>
              <p className="text-body-lg text-neutral-700 mb-6">
                Die Kosten einer Wohnungsauflösung hängen von mehreren Faktoren ab. Wir bei BC Group Berlin setzen
                auf transparente Festpreise, damit Sie von Anfang an wissen, was auf Sie zukommt.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <div className="card-modern p-6 md:p-8 mb-8">
                <h3 className="text-2xl font-black mb-6">Kostenfaktoren im Überblick</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-black text-lg mb-3 flex items-center gap-2">
                      <Euro className="w-5 h-5 text-emerald-600" />
                      Preissteigernde Faktoren
                    </h4>
                    <ul className="space-y-2 text-sm text-neutral-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                        <span>Große Wohnfläche (ab 100 m²)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                        <span>Hoher Füllstand / Messie-Zustand</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                        <span>Fehlender Aufzug in oberen Stockwerken</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                        <span>Sonderabfälle (Farben, Öle, Asbest)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                        <span>Schwere Einzelgegenstände (Klavier, Tresor)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                        <span>Express-Termin gewünscht</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-black text-lg mb-3 flex items-center gap-2">
                      <Euro className="w-5 h-5 text-emerald-600" />
                      Preissenkende Faktoren
                    </h4>
                    <ul className="space-y-2 text-sm text-neutral-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                        <span>Verwertbare Möbel & Geräte</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                        <span>Ebenerdiger Zugang</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                        <span>Geringer Füllstand</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                        <span>Flexible Terminwahl</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                        <span>Bereits vorsortierter Bestand</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                        <span>Gute Parkplatzsituation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <div className="card-modern p-6 md:p-8 mb-8 bg-emerald-50 border border-emerald-200 not-prose">
                <h3 className="text-xl font-black mb-4">Richtpreise zur Orientierung</h3>
                <p className="text-sm text-neutral-600 mb-4">
                  Die tatsächlichen Kosten können je nach individueller Situation abweichen. Daher empfehlen wir
                  immer eine kostenlose Besichtigung für ein verbindliches Angebot.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-xl p-4 text-center">
                    <p className="text-sm text-neutral-500 mb-1">1-Zimmer-Wohnung</p>
                    <p className="text-2xl font-black text-emerald-700">ab 400 €</p>
                    <p className="text-xs text-neutral-400">geringer Füllstand</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center">
                    <p className="text-sm text-neutral-500 mb-1">2–3-Zimmer-Wohnung</p>
                    <p className="text-2xl font-black text-emerald-700">ab 800 €</p>
                    <p className="text-xs text-neutral-400">mittlerer Füllstand</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center">
                    <p className="text-sm text-neutral-500 mb-1">4+-Zimmer / Haus</p>
                    <p className="text-2xl font-black text-emerald-700">ab 1.500 €</p>
                    <p className="text-xs text-neutral-400">individuell kalkuliert</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Warum BC Group */}
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="text-section font-black uppercase mb-6 mt-12">
                Warum <span className="gradient-text">BC Group Berlin?</span>
              </h2>
              <p className="text-body-lg text-neutral-700 mb-6">
                Bei einer Wohnungsauflösung geht es oft um mehr als nur das Ausräumen von Möbeln. Es geht um
                Erinnerungen, persönliche Gegenstände und manchmal auch um schwierige Lebenssituationen. Deshalb
                setzen wir auf einen ganzheitlichen Ansatz.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <div className="card-modern p-6 md:p-8 mb-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span><strong>Erfahrenes Team:</strong> Über 10 Jahre Erfahrung mit Wohnungsauflösungen in
                    allen Berliner Bezirken – von Mitte bis Marzahn, von Charlottenburg bis Köpenick.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span><strong>Festpreisgarantie:</strong> Sie erhalten ein verbindliches Angebot nach der
                    kostenlosen Besichtigung. Keine Nachforderungen, keine versteckten Kosten.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span><strong>Umweltbewusst:</strong> Wir recyceln, spenden und verwerten so viel wie möglich.
                    Nur wirklicher Abfall wird entsorgt – und das stets fachgerecht und nachweisbar.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span><strong>Diskret und einfühlsam:</strong> Gerade bei Todesfällen oder Pflegeheimeinzügen
                    gehen wir besonders behutsam vor. Persönliche Andenken und Dokumente werden sorgfältig gesichert.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span><strong>Schnell verfügbar:</strong> In dringenden Fällen sind wir innerhalb weniger Tage
                    einsatzbereit. Auf Wunsch bieten wir auch Express-Termine innerhalb von 24–48 Stunden an.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span><strong>Komplettservice:</strong> Von der Besichtigung über die Räumung bis zur
                    Endreinigung – alles aus einer Hand. Sie müssen sich um nichts kümmern.</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Häufige Fragen */}
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="text-section font-black uppercase mb-6 mt-12">
                Häufige <span className="gradient-text">Fragen</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <div className="card-modern p-6 md:p-8 mb-4">
                <h3 className="text-lg font-black mb-2">Wie lange dauert eine Wohnungsauflösung?</h3>
                <p className="text-neutral-700">
                  Das hängt von der Wohnungsgröße und dem Füllstand ab. Eine 1-Zimmer-Wohnung mit wenig Inhalt
                  kann in wenigen Stunden geräumt werden. Bei großen Wohnungen oder stark gefüllten Haushalten
                  dauert es ein bis zwei Tage. Wir arbeiten effizient und termingerecht.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <div className="card-modern p-6 md:p-8 mb-4">
                <h3 className="text-lg font-black mb-2">Muss ich bei der Wohnungsauflösung anwesend sein?</h3>
                <p className="text-neutral-700">
                  Nein, das ist nicht zwingend erforderlich. Nach Auftragserteilung können Sie uns auch einen
                  Schlüssel übergeben. Wir dokumentieren den Vorgang und übergeben die Wohnung anschließend besenrein.
                  Auf Wunsch erhalten Sie eine Fotodokumentation.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4}>
              <div className="card-modern p-6 md:p-8 mb-4">
                <h3 className="text-lg font-black mb-2">Was passiert mit wertvollen Gegenständen?</h3>
                <p className="text-neutral-700">
                  Wertgegenstände, Schmuck, Bargeld und wichtige Dokumente werden separiert und Ihnen übergeben.
                  Gut erhaltene Möbel und Elektrogeräte können auf Wunsch verkauft oder gespendet werden – der
                  Erlös wird mit den Kosten verrechnet.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.5}>
              <div className="card-modern p-6 md:p-8 mb-4">
                <h3 className="text-lg font-black mb-2">Übernehmen Sie auch die Endreinigung?</h3>
                <p className="text-neutral-700">
                  Ja, als Zusatzleistung bieten wir eine professionelle Endreinigung an. Diese umfasst die Reinigung
                  aller Räume, Küche und Bad. So können Sie die Wohnung direkt übergeben – ohne selbst putzen zu
                  müssen.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.6}>
              <div className="card-modern p-6 md:p-8 mb-8">
                <h3 className="text-lg font-black mb-2">In welchen Berliner Bezirken sind Sie tätig?</h3>
                <p className="text-neutral-700">
                  Wir führen Wohnungsauflösungen in ganz Berlin und dem Berliner Umland durch – von Spandau über
                  Reinickendorf und Pankow bis Neukölln und Treptow-Köpenick. Auch im Brandenburger Umland (Potsdam,
                  Bernau, Oranienburg) sind wir im Einsatz.
                </p>
              </div>
            </ScrollReveal>

            {/* Tipps */}
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="text-section font-black uppercase mb-6 mt-12">
                Tipps für <span className="gradient-text">Auftraggeber</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <div className="card-modern p-6 md:p-8 mb-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span><strong>Persönliche Gegenstände vorab sichern:</strong> Gehen Sie vor der Räumung noch
                    einmal durch die Wohnung und nehmen Sie Fotos, Dokumente und Erinnerungsstücke mit, die Sie
                    behalten möchten.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span><strong>Fristen beachten:</strong> Klären Sie vorab die Kündigungsfrist und den
                    Übergabetermin mit dem Vermieter. So vermeiden Sie unnötige Mietkosten.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span><strong>Mehrere Angebote einholen:</strong> Vergleichen Sie Angebote verschiedener
                    Anbieter – achten Sie dabei auf Festpreise und enthaltene Leistungen, nicht nur auf den
                    niedrigsten Preis.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span><strong>Hausverwaltung informieren:</strong> Teilen Sie der Hausverwaltung den Räumungstermin
                    mit, damit der Aufzug reserviert und ggf. ein Halteverbot eingerichtet werden kann.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span><strong>Versorgungsverträge kündigen:</strong> Denken Sie daran, Strom, Gas, Wasser und
                    Internet fristgerecht zu kündigen oder umzumelden.</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal direction="up">
              <div className="my-12 p-8 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white not-prose">
                <h3 className="text-2xl font-black mb-4">Wohnungsauflösung in Berlin? Wir sind für Sie da!</h3>
                <p className="mb-6 text-white/90">
                  Ob nach einem Todesfall, beim Umzug ins Pflegeheim oder einfach für einen Neuanfang – unser
                  erfahrenes Team übernimmt die komplette Wohnungsauflösung für Sie. Diskret, zuverlässig und
                  zu fairen Festpreisen. Kontaktieren Sie uns für eine kostenlose Besichtigung und ein
                  unverbindliches Angebot.
                </p>
                <Link href="/kontakt">
                  <button className="px-8 py-4 bg-white text-emerald-600 font-bold rounded-xl hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Jetzt Kontakt aufnehmen
                  </button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* Related Articles */}
      <Section background="light" padding="large">
        <Container size="wide">
          <ScrollReveal direction="up">
            <h2 className="text-section font-black uppercase mb-8 md:mb-12 text-center">
              Weitere <span className="gradient-text">Artikel</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <ScrollReveal direction="up" delay={0.1}>
              <Link href="/ratgeber/entruempelung/kellerentruempelung-berlin" className="group">
                <div className="card-modern h-full flex flex-col group-hover:scale-[1.02] transition-transform">
                  <div className="relative h-48 overflow-hidden rounded-t-2xl">
                    <Image
                      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
                      alt="Kellerentrümpelung Berlin"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6 flex-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Entrümpelung</span>
                    <h3 className="text-xl font-black mb-3 mt-2 group-hover:text-emerald-600 transition-colors">
                      Kellerentrümpelung Berlin
                    </h3>
                    <p className="text-neutral-600 text-sm">
                      Keller voller alter Sachen? Erfahren Sie, wie eine professionelle Kellerentrümpelung abläuft.
                    </p>
                    <span className="text-emerald-600 font-bold text-sm mt-4 inline-flex items-center gap-1">
                      Weiterlesen <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <Link href="/ratgeber/entruempelung/kosten-wohnungsaufloesung-berlin" className="group">
                <div className="card-modern h-full flex flex-col group-hover:scale-[1.02] transition-transform">
                  <div className="relative h-48 overflow-hidden rounded-t-2xl">
                    <Image
                      src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop"
                      alt="Kosten Wohnungsauflösung Berlin"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6 flex-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Entrümpelung</span>
                    <h3 className="text-xl font-black mb-3 mt-2 group-hover:text-emerald-600 transition-colors">
                      Kosten Wohnungsauflösung Berlin
                    </h3>
                    <p className="text-neutral-600 text-sm">
                      Was kostet eine Wohnungsauflösung wirklich? Alle Preisfaktoren im Detail erklärt.
                    </p>
                    <span className="text-emerald-600 font-bold text-sm mt-4 inline-flex items-center gap-1">
                      Weiterlesen <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <Link href="/ratgeber/entruempelung/messie-wohnung-entruempeln-berlin" className="group">
                <div className="card-modern h-full flex flex-col group-hover:scale-[1.02] transition-transform">
                  <div className="relative h-48 overflow-hidden rounded-t-2xl">
                    <Image
                      src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop"
                      alt="Messie-Wohnung entrümpeln Berlin"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6 flex-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Entrümpelung</span>
                    <h3 className="text-xl font-black mb-3 mt-2 group-hover:text-emerald-600 transition-colors">
                      Messie-Wohnung entrümpeln Berlin
                    </h3>
                    <p className="text-neutral-600 text-sm">
                      Professionelle und einfühlsame Räumung von Messie-Wohnungen in Berlin.
                    </p>
                    <span className="text-emerald-600 font-bold text-sm mt-4 inline-flex items-center gap-1">
                      Weiterlesen <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </Container>
      </Section>
    </>
  )
}
