import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Section, Container, ScrollReveal, StructuredData } from '@/components/ui'
import { Calendar, Clock, ArrowLeft, CheckCircle2, Phone, ArrowRight, AlertTriangle, Droplets, Bug, Trash2, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Kellerentrümpelung Berlin – Schnell & Professionell | BC Group Berlin',
  description: 'Professionelle Kellerentrümpelung in Berlin: Lagerkeller, Mieterkeller, Tiefgaragen-Abstellräume. ✓ Festpreis ✓ Fachgerechte Entsorgung ✓ Auch bei Wasserschäden & Schimmel. Jetzt anfragen!',
  keywords: [
    'Kellerentrümpelung Berlin',
    'Keller entrümpeln Berlin',
    'Keller räumen Berlin',
    'Kellerräumung Berlin',
    'Keller aufräumen lassen',
    'Kellerentrümpelung Kosten',
    'Sperrmüll Keller Berlin',
    'Keller leerräumen Profis',
  ],
  openGraph: {
    title: 'Kellerentrümpelung Berlin – Schnell & Professionell',
    description: 'Professionelle Kellerentrümpelung in Berlin: Lagerkeller, Mieterkeller und Abstellräume schnell und sauber geräumt.',
    type: 'article',
    locale: 'de_DE',
    url: 'https://bcgroup.de/ratgeber/entruempelung/kellerentruempelung-berlin',
    siteName: 'BC Group Berlin',
    images: [{
      url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
      width: 1200,
      height: 630,
      alt: 'Professionelle Kellerentrümpelung in Berlin',
    }],
    publishedTime: '2024-11-01',
    modifiedTime: '2025-03-05T00:00:00.000Z',
  },
  alternates: {
    canonical: 'https://bcgroup.de/ratgeber/entruempelung/kellerentruempelung-berlin',
  },
}

export default function KellerentruempelungBerlinPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Kellerentrümpelung Berlin – Schnell & Professionell',
    description: 'Professionelle Kellerentrümpelung in Berlin: Lagerkeller, Mieterkeller und Abstellräume schnell und sauber geräumt.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    datePublished: '2024-11-01',
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
      '@id': 'https://bcgroup.de/ratgeber/entruempelung/kellerentruempelung-berlin',
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
        name: 'Kellerentrümpelung Berlin',
        item: 'https://bcgroup.de/ratgeber/entruempelung/kellerentruempelung-berlin',
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
              Kellerentrümpelung<br />
              <span className="gradient-text">Berlin</span>
            </h1>

            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/80 text-sm mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>1. November 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>6 Min. Lesezeit</span>
              </div>
            </div>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl">
              Über die Jahre sammelt sich im Keller so einiges an: alte Möbel, kaputte Elektrogeräte, Kartons voller
              Erinnerungen und Dinge, die längst vergessen wurden. Eine professionelle Kellerentrümpelung schafft
              wieder Platz und Ordnung – schnell, sauber und fachgerecht.
            </p>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Featured Image */}
      <Section background="white" padding="none">
        <Container size="wide">
          <div className="relative h-[400px] md:h-[600px] -mt-12 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop"
              alt="Professionelle Kellerentrümpelung in Berlin"
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
                Warum eine <span className="gradient-text">Kellerentrümpelung?</span>
              </h2>
              <p className="text-body-lg text-neutral-700 mb-6">
                Der Keller ist in vielen Berliner Haushalten das Stiefkind der Wohnung. Hier landen Dinge, die
                man „irgendwann noch brauchen könnte" – und dort bleiben sie oft jahrelang. Alte Fahrräder, defekte
                Waschmaschinen, Umzugskartons aus dem vorletzten Umzug, ausgediente Weihnachtsdeko und Möbelstücke,
                für die oben kein Platz mehr ist.
              </p>
              <p className="text-body-lg text-neutral-700 mb-6">
                Das Problem: Ein vollgestopfter Keller ist nicht nur unpraktisch, sondern kann auch zum
                Sicherheitsrisiko werden. Verstopfte Fluchtwege, erhöhte Brandgefahr und die Gefahr von
                Schimmelbildung sind nur einige der Gründe, warum eine regelmäßige Kellerentrümpelung sinnvoll ist.
              </p>
            </ScrollReveal>

            {/* Gründe für eine Kellerentrümpelung */}
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="text-section font-black uppercase mb-6 mt-12">
                Gründe für eine <span className="gradient-text">professionelle Kellerräumung</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <div className="card-modern p-6 md:p-8 mb-8">
                <h3 className="text-2xl font-black mb-6">Typische Anlässe</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span><strong>Umzug:</strong> Vor einem Umzug muss der Keller geräumt und besenrein übergeben
                    werden. Oft stellt sich erst jetzt heraus, wie viel sich über die Jahre angesammelt hat.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span><strong>Aufforderung der Hausverwaltung:</strong> Viele Hausverwaltungen in Berlin führen
                    regelmäßige Kellerbegehungen durch. Überfüllte Keller, die Fluchtwege blockieren, müssen auf
                    Aufforderung geräumt werden.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span><strong>Sanierung oder Renovierung:</strong> Bei Kellersanierungen (Abdichtung,
                    Trockenlegung, Umbau) muss der gesamte Kellerraum leergeräumt werden.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span><strong>Wasserschaden:</strong> Nach einem Rohrbruch oder Hochwasser ist eine schnelle
                    Räumung erforderlich, um den Schaden zu begrenzen und die Trocknung zu ermöglichen.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span><strong>Verkauf oder Neuvermietung:</strong> Beim Eigentümerwechsel oder Mieterwechsel
                    müssen zurückgelassene Gegenstände im Keller fachgerecht entsorgt werden.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span><strong>Platzbedarf:</strong> Wer seinen Keller wieder sinnvoll nutzen möchte – als
                    Hobbyraum, Werkstatt oder Lager – braucht zunächst eine gründliche Entrümpelung.</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Was findet sich typischerweise im Keller? */}
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="text-section font-black uppercase mb-6 mt-12">
                Was findet sich <span className="gradient-text">typischerweise im Keller?</span>
              </h2>
              <p className="text-body-lg text-neutral-700 mb-6">
                Jeder Keller ist anders – und oft überrascht selbst die Bewohner, was sich über die Jahre
                angesammelt hat. Hier eine Übersicht der häufigsten Fundstücke bei unseren Kellerentrümpelung:
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 not-prose">
                <div className="card-modern p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Trash2 className="w-8 h-8 text-emerald-600" />
                    <h3 className="text-xl font-black">Sperrmüll & Möbel</h3>
                  </div>
                  <ul className="space-y-2 text-neutral-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                      <span>Alte Schränke und Regale</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                      <span>Ausgediente Matratzen und Bettgestelle</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                      <span>Kaputte Stühle und Tische</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                      <span>Teppichrollen und Bodenbeläge</span>
                    </li>
                  </ul>
                </div>

                <div className="card-modern p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <ShieldCheck className="w-8 h-8 text-emerald-600" />
                    <h3 className="text-xl font-black">Elektroschrott</h3>
                  </div>
                  <ul className="space-y-2 text-neutral-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                      <span>Alte Waschmaschinen und Trockner</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                      <span>Defekte Fernseher und Monitore</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                      <span>Ausgediente Computer und Drucker</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                      <span>Alte Kabel, Lampen und Kleingeräte</span>
                    </li>
                  </ul>
                </div>

                <div className="card-modern p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="w-8 h-8 text-emerald-600" />
                    <h3 className="text-xl font-black">Sonderabfälle</h3>
                  </div>
                  <ul className="space-y-2 text-neutral-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                      <span>Farb- und Lackreste</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                      <span>Altöl und Chemikalien</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                      <span>Batterien und Akkus</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                      <span>Bauschutt und Dämmmaterial</span>
                    </li>
                  </ul>
                </div>

                <div className="card-modern p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Trash2 className="w-8 h-8 text-emerald-600" />
                    <h3 className="text-xl font-black">Sonstiges</h3>
                  </div>
                  <ul className="space-y-2 text-neutral-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                      <span>Fahrräder und Kinderfahrzeuge</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                      <span>Umzugskartons und Verpackungen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                      <span>Autoreifen und Dachboxen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                      <span>Sport- und Gartengeräte</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* Ablauf */}
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="text-section font-black uppercase mb-8 mt-12">
                So läuft eine <span className="gradient-text">Kellerentrümpelung</span> ab
              </h2>
              <p className="text-body-lg text-neutral-700 mb-8">
                Unser bewährter Prozess sorgt dafür, dass Ihr Keller effizient und gründlich geräumt wird.
                Von der ersten Anfrage bis zum besenreinen Ergebnis begleiten wir Sie in vier klaren Schritten:
              </p>
            </ScrollReveal>

            {/* Schritt 1 */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="card-modern p-6 md:p-8 mb-6 border-l-4 border-emerald-600">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-emerald-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-black text-lg">1</span>
                  <h3 className="text-2xl font-black text-emerald-700">Anfrage & Besichtigung</h3>
                </div>
                <p className="text-neutral-700 mb-4">
                  Kontaktieren Sie uns telefonisch oder über unser Kontaktformular. Für eine genaue Kalkulation
                  kommen wir kostenlos zur Besichtigung vorbei – alternativ können Sie uns Fotos des Kellers senden.
                  Wir bewerten den Umfang, die Art der Gegenstände und eventuelle Besonderheiten wie enge Treppen
                  oder schwer zugängliche Bereiche.
                </p>
              </div>
            </ScrollReveal>

            {/* Schritt 2 */}
            <ScrollReveal direction="up" delay={0.3}>
              <div className="card-modern p-6 md:p-8 mb-6 border-l-4 border-emerald-600">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-emerald-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-black text-lg">2</span>
                  <h3 className="text-2xl font-black text-emerald-700">Angebot & Terminvereinbarung</h3>
                </div>
                <p className="text-neutral-700 mb-4">
                  Sie erhalten ein transparentes Festpreisangebot, das alle Leistungen umfasst: Räumung,
                  Abtransport, Sortierung und fachgerechte Entsorgung. Keine versteckten Kosten, keine
                  Nachforderungen. Gemeinsam vereinbaren wir einen Termin, der in Ihren Zeitplan passt.
                </p>
              </div>
            </ScrollReveal>

            {/* Schritt 3 */}
            <ScrollReveal direction="up" delay={0.4}>
              <div className="card-modern p-6 md:p-8 mb-6 border-l-4 border-emerald-600">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-emerald-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-black text-lg">3</span>
                  <h3 className="text-2xl font-black text-emerald-700">Entrümpelung & Entsorgung</h3>
                </div>
                <p className="text-neutral-700 mb-4">
                  Am vereinbarten Tag rückt unser Team an und beginnt mit der systematischen Räumung. Wir sortieren
                  vor Ort: Was noch verwertbar ist, wird separiert – der Rest wird fachgerecht entsorgt. Bei Bedarf
                  stellen wir Container für größere Mengen Bauschutt oder Sperrmüll.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span>Sperrmüll wird zu den Berliner BSR-Recyclinghöfen gebracht</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span>Elektroschrott wird gemäß ElektroG entsorgt</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span>Sonderabfälle gehen an zugelassene Entsorgungsbetriebe</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Schritt 4 */}
            <ScrollReveal direction="up" delay={0.5}>
              <div className="card-modern p-6 md:p-8 mb-8 border-l-4 border-emerald-600">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-emerald-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-black text-lg">4</span>
                  <h3 className="text-2xl font-black text-emerald-700">Besenreine Übergabe</h3>
                </div>
                <p className="text-neutral-700 mb-4">
                  Nach der Entrümpelung kehren wir den Keller besenrein aus. Sie erhalten einen sauberen,
                  leeren Kellerraum, den Sie ab sofort wieder nutzen können. Auf Wunsch erstellen wir einen
                  Entsorgungsnachweis für die Hausverwaltung.
                </p>
              </div>
            </ScrollReveal>

            {/* Kosten */}
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="text-section font-black uppercase mb-6 mt-12">
                Was kostet eine <span className="gradient-text">Kellerentrümpelung?</span>
              </h2>
              <p className="text-body-lg text-neutral-700 mb-6">
                Die Kosten einer Kellerentrümpelung in Berlin hängen von verschiedenen Faktoren ab. Im Vergleich
                zur kompletten Wohnungsauflösung sind Kellerentrümpelung in der Regel deutlich günstiger, da
                weniger Fläche und weniger Gewicht bewegt werden muss.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <div className="card-modern p-6 md:p-8 mb-8">
                <h3 className="text-2xl font-black mb-6">Einflussfaktoren auf den Preis</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span><strong>Kellergröße:</strong> Ein kleiner Verschlag von 3 m² ist natürlich schneller
                    geräumt als ein 20-m²-Lagerkeller. Die meisten Berliner Altbaukeller bewegen sich zwischen
                    5 und 15 m².</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span><strong>Füllstand:</strong> Ist der Keller halbvoll oder bis unter die Decke
                    vollgestopft? Der Füllgrad bestimmt maßgeblich den Arbeitsaufwand und die notwendige
                    Fahrzeugkapazität.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span><strong>Zugänglichkeit:</strong> Enge Kellergänge, steile Treppen ohne Aufzugszugang
                    oder verwinkelte Kellerflure erhöhen den Zeitaufwand. In vielen Berliner Altbauten sind die
                    Kellerabgänge besonders schmal.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span><strong>Sonderabfälle:</strong> Farben, Lacke, Chemikalien oder asbesthaltige Materialien
                    erfordern eine spezielle (und teurere) Entsorgung. Diese Kosten werden vorab transparent
                    kommuniziert.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span><strong>Schwergewichte:</strong> Alte Öltanks, schwere Werkbänke oder Betonteile
                    erfordern zusätzliches Personal und ggf. spezielle Transportmittel.</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <div className="card-modern p-6 md:p-8 mb-8 bg-emerald-50 border border-emerald-200 not-prose">
                <h3 className="text-xl font-black mb-4">Richtpreise für Kellerentrümpelung Berlin</h3>
                <p className="text-sm text-neutral-600 mb-4">
                  Individuelle Preise nach kostenloser Besichtigung oder Fotoschätzung.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-xl p-4 text-center">
                    <p className="text-sm text-neutral-500 mb-1">Kleiner Keller (bis 5 m²)</p>
                    <p className="text-2xl font-black text-emerald-700">ab 150 €</p>
                    <p className="text-xs text-neutral-400">geringer Füllstand</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center">
                    <p className="text-sm text-neutral-500 mb-1">Mittlerer Keller (5–15 m²)</p>
                    <p className="text-2xl font-black text-emerald-700">ab 300 €</p>
                    <p className="text-xs text-neutral-400">mittlerer Füllstand</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center">
                    <p className="text-sm text-neutral-500 mb-1">Großer Keller (15+ m²)</p>
                    <p className="text-2xl font-black text-emerald-700">ab 500 €</p>
                    <p className="text-xs text-neutral-400">individuell kalkuliert</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Entsorgungsvorschriften */}
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="text-section font-black uppercase mb-6 mt-12">
                <span className="gradient-text">Entsorgungsvorschriften</span> in Berlin
              </h2>
              <p className="text-body-lg text-neutral-700 mb-6">
                Bei der Kellerentrümpelung müssen zahlreiche Entsorgungsvorschriften beachtet werden. In Berlin
                gelten strenge Regeln für die Trennung und Entsorgung verschiedener Abfallarten. Als professioneller
                Entsorgungsdienst kennen wir diese Vorschriften genau und sorgen für eine rechtskonforme Abwicklung.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <div className="card-modern p-6 md:p-8 mb-8">
                <h3 className="text-2xl font-black mb-6">Entsorgung nach Abfallart</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-black text-lg mb-3">Hausmüll & Sperrmüll</h4>
                    <p className="text-sm text-neutral-700 mb-2">
                      Normale Haushaltsabfälle und Sperrmüll werden über die BSR (Berliner Stadtreinigung) oder
                      zugelassene Recyclinghöfe entsorgt. Wir übernehmen den Transport.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-black text-lg mb-3">Elektroschrott</h4>
                    <p className="text-sm text-neutral-700 mb-2">
                      Elektrogeräte müssen gemäß Elektro- und Elektronikgerätegesetz (ElektroG) gesondert
                      entsorgt werden. Wir bringen sie zu den offiziellen Sammelstellen.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-black text-lg mb-3">Schadstoffe</h4>
                    <p className="text-sm text-neutral-700 mb-2">
                      Farben, Lacke, Lösungsmittel und Chemikalien gehören zur Schadstoffsammlung. In Berlin
                      gibt es mobile Schadstoffsammelstellen und feste Abgabepunkte.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-black text-lg mb-3">Bauschutt</h4>
                    <p className="text-sm text-neutral-700 mb-2">
                      Beton, Fliesen, Ziegel und ähnliche Materialien werden als Bauschutt klassifiziert und
                      müssen getrennt von Hausmüll entsorgt werden.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Sonderfälle */}
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="text-section font-black uppercase mb-6 mt-12">
                Sonderfälle: <span className="gradient-text">Wasserschäden & Schimmel</span>
              </h2>
              <p className="text-body-lg text-neutral-700 mb-6">
                Berliner Keller sind besonders anfällig für Feuchtigkeit und Wassereinbrüche. Ältere Gebäude
                haben oft unzureichende Abdichtungen, und nach starken Regenfällen steht in manchen Vierteln
                regelmäßig Wasser im Keller. Dies bringt besondere Herausforderungen mit sich.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <div className="card-modern p-6 md:p-8 mb-6 border-l-4 border-blue-500">
                <div className="flex items-center gap-3 mb-4">
                  <Droplets className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-black text-blue-700">Wasserschäden im Keller</h3>
                </div>
                <p className="text-neutral-700 mb-4">
                  Bei Wasserschäden ist schnelles Handeln gefragt. Durchnässte Möbel, Kartons und Textilien
                  müssen umgehend entfernt werden, bevor sich Schimmel bildet. Wir bieten einen Notfall-Service,
                  bei dem wir innerhalb kürzester Zeit vor Ort sind und den Keller räumen.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span>Sofortige Räumung durchnässter Gegenstände</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span>Dokumentation für die Versicherung</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span>Koordination mit Trocknungsfirmen</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <div className="card-modern p-6 md:p-8 mb-8 border-l-4 border-amber-500">
                <div className="flex items-center gap-3 mb-4">
                  <Bug className="w-6 h-6 text-amber-600" />
                  <h3 className="text-xl font-black text-amber-700">Schimmelbefall</h3>
                </div>
                <p className="text-neutral-700 mb-4">
                  Schimmel im Keller ist ein häufiges Problem in Berliner Altbauten. Feuchte Wände und
                  schlechte Belüftung schaffen ideale Bedingungen für Schimmelpilze. Bei einer Kellerentrümpelung
                  mit Schimmelbefall tragen unsere Mitarbeiter entsprechende Schutzausrüstung und gehen
                  besonders sorgfältig vor.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                    <span>Räumung mit Schutzausrüstung (Atemschutz, Schutzanzüge)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                    <span>Fachgerechte Entsorgung kontaminierter Materialien</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                    <span>Empfehlung zur anschließenden Schimmelsanierung</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Tipps zur Vorbeugung */}
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="text-section font-black uppercase mb-6 mt-12">
                Tipps: <span className="gradient-text">Keller ordentlich halten</span>
              </h2>
              <p className="text-body-lg text-neutral-700 mb-6">
                Nach einer professionellen Kellerentrümpelung lohnt es sich, einige einfache Regeln zu
                befolgen, damit der Keller nicht wieder zum Chaos wird:
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <div className="card-modern p-6 md:p-8 mb-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span><strong>Regelmäßig ausmisten:</strong> Überprüfen Sie mindestens einmal im Jahr, ob
                    Gegenstände im Keller noch gebraucht werden. Was seit über zwei Jahren nicht angefasst wurde,
                    kann in der Regel weg.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span><strong>Regalssysteme nutzen:</strong> Statt alles auf den Boden zu stellen, verwenden
                    Sie stabile Metallregale. Das schützt vor Feuchtigkeit und schafft Übersicht.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span><strong>Plastikboxen statt Kartons:</strong> Kartons ziehen Feuchtigkeit an und
                    werden schnell muffig. Transparente Plastikboxen halten den Inhalt trocken und Sie sehen
                    sofort, was drin ist.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span><strong>Regelmäßig lüften:</strong> Sorgen Sie bei trockenem Wetter für Durchzug im
                    Keller. Vermeiden Sie jedoch Lüften bei schwülem Sommerwetter – das fördert Kondenswasser
                    an den kalten Kellerwänden.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span><strong>Beschriften:</strong> Kennzeichnen Sie Boxen und Regale klar. So finden Sie
                    alles schnell wieder und vermeiden unnötiges Horten.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span><strong>Fluchtwege freihalten:</strong> Laut Bauordnung müssen Kellergänge frei
                    passierbar sein. Stellen Sie nichts in den gemeinsamen Kellerflur.</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Warum BC Group */}
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="text-section font-black uppercase mb-6 mt-12">
                Warum BC Group für Ihre <span className="gradient-text">Kellerentrümpelung?</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <div className="card-modern p-6 md:p-8 mb-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span><strong>Berliner Spezialisten:</strong> Wir kennen die typischen Berliner
                    Kellerverhältnisse – vom engen Altbaukeller in Kreuzberg bis zum großzügigen Lagerkeller
                    im Neubau in Lichtenberg.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span><strong>Festpreis ohne Überraschungen:</strong> Nach der Besichtigung oder
                    Fotoschätzung erhalten Sie einen verbindlichen Festpreis. Was vereinbart ist, gilt.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span><strong>Schnelle Verfügbarkeit:</strong> Standardtermine innerhalb weniger Tage,
                    Express-Service auch kurzfristig möglich. Ideal bei Fristdruck durch Hausverwaltungen.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span><strong>Umweltgerechte Entsorgung:</strong> Wir trennen, recyceln und entsorgen
                    nach allen geltenden Vorschriften. Entsorgungsnachweise auf Anfrage.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span><strong>Sonderfälle willkommen:</strong> Wasserschäden, Schimmel, Sonderabfälle –
                    wir sind auf schwierige Fälle vorbereitet und haben das passende Equipment.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span><strong>Komplettservice:</strong> Auf Wunsch übernehmen wir auch die besenreine
                    Reinigung und erstellen ein Übergabeprotokoll für die Hausverwaltung.</span>
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
                <h3 className="text-lg font-black mb-2">Wie schnell können Sie den Keller räumen?</h3>
                <p className="text-neutral-700">
                  Die meisten Keller sind innerhalb von 2 bis 4 Stunden komplett geräumt. Bei sehr großen oder
                  stark gefüllten Kellern kann es einen halben Tag dauern. In dringenden Fällen bieten wir auch
                  Express-Termine an.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <div className="card-modern p-6 md:p-8 mb-4">
                <h3 className="text-lg font-black mb-2">Muss ich den Keller vorher aufschließen?</h3>
                <p className="text-neutral-700">
                  Ja, Sie oder eine Vertrauensperson sollte am Räumungstag den Keller aufschließen und uns
                  Zugang gewähren. Falls Sie verhindert sind, können Sie den Schlüssel auch im Vorfeld bei
                  uns hinterlegen oder mit der Hausverwaltung einen Zugang vereinbaren.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4}>
              <div className="card-modern p-6 md:p-8 mb-4">
                <h3 className="text-lg font-black mb-2">Was passiert, wenn der Keller einem anderen Mieter gehört?</h3>
                <p className="text-neutral-700">
                  Wir räumen nur Keller, für die ein klarer Auftrag vorliegt. Bei Mieterkellern sollte die
                  Berechtigung durch den Mietvertrag oder eine Vollmacht der Hausverwaltung nachgewiesen werden.
                  So vermeiden wir Konflikte und handeln rechtlich einwandfrei.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.5}>
              <div className="card-modern p-6 md:p-8 mb-8">
                <h3 className="text-lg font-black mb-2">Kann ich einzelne Gegenstände behalten?</h3>
                <p className="text-neutral-700">
                  Selbstverständlich. Markieren Sie vor der Räumung alles, was Sie behalten möchten, oder
                  besprechen Sie dies mit unserem Team vor Ort. Wir sortieren nach Ihren Wünschen und nehmen
                  nur das mit, was wirklich entsorgt werden soll.
                </p>
              </div>
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal direction="up">
              <div className="my-12 p-8 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white not-prose">
                <h3 className="text-2xl font-black mb-4">Keller voller Gerümpel? Wir schaffen Platz!</h3>
                <p className="mb-6 text-white/90">
                  Ob kleiner Verschlag oder großer Lagerkeller – unser erfahrenes Team räumt Ihren Keller
                  schnell, sauber und zu fairen Festpreisen. Inklusive fachgerechter Entsorgung und besenreiner
                  Übergabe. Kontaktieren Sie uns für eine kostenlose Besichtigung oder senden Sie uns Fotos
                  für eine schnelle Einschätzung.
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
              <Link href="/ratgeber/entruempelung/wohnungsaufloesung-berlin" className="group">
                <div className="card-modern h-full flex flex-col group-hover:scale-[1.02] transition-transform">
                  <div className="relative h-48 overflow-hidden rounded-t-2xl">
                    <Image
                      src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=800&auto=format&fit=crop"
                      alt="Wohnungsauflösung Berlin"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6 flex-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Entrümpelung</span>
                    <h3 className="text-xl font-black mb-3 mt-2 group-hover:text-emerald-600 transition-colors">
                      Wohnungsauflösung Berlin
                    </h3>
                    <p className="text-neutral-600 text-sm">
                      Komplettservice von der Besichtigung bis zur besenreinen Übergabe.
                    </p>
                    <span className="text-emerald-600 font-bold text-sm mt-4 inline-flex items-center gap-1">
                      Weiterlesen <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <Link href="/ratgeber/entruempelung/bauschuttentsorgung-berlin" className="group">
                <div className="card-modern h-full flex flex-col group-hover:scale-[1.02] transition-transform">
                  <div className="relative h-48 overflow-hidden rounded-t-2xl">
                    <Image
                      src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop"
                      alt="Bauschuttentsorgung Berlin"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6 flex-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Entrümpelung</span>
                    <h3 className="text-xl font-black mb-3 mt-2 group-hover:text-emerald-600 transition-colors">
                      Bauschuttentsorgung Berlin
                    </h3>
                    <p className="text-neutral-600 text-sm">
                      Fachgerechte Entsorgung von Bauschutt und Baumaterialien in Berlin.
                    </p>
                    <span className="text-emerald-600 font-bold text-sm mt-4 inline-flex items-center gap-1">
                      Weiterlesen <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <Link href="/ratgeber/entruempelung/express-entruempelung-berlin" className="group">
                <div className="card-modern h-full flex flex-col group-hover:scale-[1.02] transition-transform">
                  <div className="relative h-48 overflow-hidden rounded-t-2xl">
                    <Image
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop"
                      alt="Express-Entrümpelung Berlin"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6 flex-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Entrümpelung</span>
                    <h3 className="text-xl font-black mb-3 mt-2 group-hover:text-emerald-600 transition-colors">
                      Express-Entrümpelung Berlin
                    </h3>
                    <p className="text-neutral-600 text-sm">
                      Notfall-Entrümpelung innerhalb von 24–48 Stunden in ganz Berlin.
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
