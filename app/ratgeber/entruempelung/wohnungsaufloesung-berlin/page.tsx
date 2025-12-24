import { Metadata } from 'next'
import Link from 'next/link'
import { Container, Section } from '@/components/ui'
import { ArrowRight, Home, CheckCircle, Euro, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Wohnungsauflösung Berlin - Professionell & Zuverlässig | BC Group',
  description: 'Professionelle Wohnungsauflösung in Berlin. Von geringem Füllstand bis zu Extremfällen - wir kümmern uns um alles. ✓ Festpreise ✓ Schnell ✓ Diskret',
  keywords: 'wohnungsauflösung berlin, wohnung auflösen berlin, haushaltsauflösung berlin, entrümpelung wohnung',
}

export default function WohnungsaufloesungBerlinPage() {
  const relatedArticles = [
    {
      title: 'Kosten Wohnungsauflösung Berlin',
      link: '/ratgeber/entruempelung/kosten-wohnungsaufloesung-berlin'
    },
    {
      title: 'Messie Wohnung entrümpeln Berlin',
      link: '/ratgeber/entruempelung/messie-wohnung-entruempeln-berlin'
    },
    {
      title: 'Berliner Räumung',
      link: '/ratgeber/entruempelung/berliner-raeumung'
    }
  ]

  return (
    <>
      <Section background="white" padding="large">
        <Container size="default">
          <article className="max-w-4xl mx-auto prose prose-lg">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-neutral-600 mb-8">
              <Link href="/" className="hover:text-emerald-600">Home</Link>
              <span>/</span>
              <Link href="/ratgeber" className="hover:text-emerald-600">Ratgeber</Link>
              <span>/</span>
              <Link href="/ratgeber/entruempelung" className="hover:text-emerald-600">Entrümpelung</Link>
              <span>/</span>
              <span className="text-neutral-900 font-semibold">Wohnungsauflösung Berlin</span>
            </nav>

            {/* Hero */}
            <div className="mb-12 not-prose">
              <div className="inline-block mb-4 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200">
                <span className="text-sm font-bold uppercase tracking-wider text-emerald-900">
                  Ratgeber
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6 leading-tight">
                Wohnungsauflösung Berlin
              </h1>
              
              <p className="text-xl text-neutral-600 leading-relaxed">
                Von der Single-Wohnung bis zum Palazzo – von geringem Füllstand zu Extremfällen – 
                wir räumen professionell leer und sorgen für eine fachgerechte Entsorgung.
              </p>
            </div>

            {/* Content */}
            <h2>Was ist eine Wohnungsauflösung?</h2>
            <p>
              Eine Wohnungsauflösung umfasst die vollständige Räumung und Entrümpelung einer Wohnung oder eines Hauses. 
              Dies kann verschiedene Gründe haben: Umzug, Todesfall, Trennung oder einfach der Wunsch nach einem Neuanfang. 
              Bei BC Group Berlin übernehmen wir alle Schritte – von der Planung über die Entrümpelung bis zur fachgerechten 
              Entsorgung und optional der Endreinigung.
            </p>

            <h2>Unsere Leistungen bei der Wohnungsauflösung</h2>
            <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
              {[
                'Komplette Wohnungsräumung',
                'Möbeldemontage und -abtransport',
                'Fachgerechte Entsorgung',
                'Sortierung verwertbarer Gegenstände',
                'Endreinigung (optional)',
                'Diskrete und schnelle Abwicklung'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-xl border-2 border-emerald-100 bg-emerald-50/50">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-neutral-900 font-semibold">{item}</span>
                </div>
              ))}
            </div>

            <h2>Von geringem Füllstand zu Extremfällen</h2>
            <p>
              Jede Wohnung ist anders – und wir passen unseren Service an Ihre Bedürfnisse an:
            </p>
            <ul>
              <li><strong>Geringer Füllstand:</strong> Wenige Möbel und Gegenstände, schnelle Räumung möglich</li>
              <li><strong>Mittlerer Füllstand:</strong> Normale Haushaltsausstattung, systematische Räumung</li>
              <li><strong>Hoher Füllstand:</strong> Vollgestellte Räume, aufwendige Sortierung erforderlich</li>
              <li><strong>Extremfälle (Messie-Wohnungen):</strong> Professionelle Herangehensweise mit speziellem Equipment</li>
            </ul>

            <h2>Der Ablauf einer Wohnungsauflösung</h2>
            <ol>
              <li><strong>Kostenlose Besichtigung:</strong> Wir schauen uns die Wohnung an und erstellen ein Festpreisangebot</li>
              <li><strong>Terminvereinbarung:</strong> Wir finden einen passenden Termin – auch kurzfristig</li>
              <li><strong>Professionelle Räumung:</strong> Unser Team entrümpelt diskret und effizient</li>
              <li><strong>Fachgerechte Entsorgung:</strong> Alle Materialien werden sortiert und umweltgerecht entsorgt</li>
              <li><strong>Übergabe:</strong> Die Wohnung wird besenrein oder nach Wunsch tiefengereinigt übergeben</li>
            </ol>

            <h2>Kosten einer Wohnungsauflösung in Berlin</h2>
            <p>
              Die Kosten für eine Wohnungsauflösung hängen von verschiedenen Faktoren ab:
            </p>
            <ul>
              <li>Größe der Wohnung (Quadratmeter und Zimmeranzahl)</li>
              <li>Füllgrad (von leer bis vollgestellt)</li>
              <li>Stockwerk und Aufzugverfügbarkeit</li>
              <li>Parkmöglichkeiten für den LKW</li>
              <li>Zusatzleistungen (Demontage, Endreinigung)</li>
            </ul>
            <p>
              Nach einer kostenlosen Besichtigung erhalten Sie von uns ein transparentes Festpreisangebot – 
              ohne versteckte Kosten.
            </p>

            {/* CTA Box */}
            <div className="my-12 p-8 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white not-prose">
              <h3 className="text-2xl font-black mb-4">Kostenlose Beratung zur Wohnungsauflösung</h3>
              <p className="mb-6 text-white/90">
                Kontaktieren Sie uns für ein unverbindliches Angebot. Wir beraten Sie gerne!
              </p>
              <Link href="/kontakt">
                <button className="px-8 py-4 bg-white text-emerald-600 font-bold rounded-xl hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Jetzt Kontakt aufnehmen
                </button>
              </Link>
            </div>

            <h2>Warum BC Group für Ihre Wohnungsauflösung?</h2>
            <ul>
              <li><strong>Erfahrung:</strong> Über 400 erfolgreich durchgeführte Wohnungsauflösungen</li>
              <li><strong>Festpreise:</strong> Transparente Kalkulation ohne Überraschungen</li>
              <li><strong>Schnell:</strong> Auch Express-Termine innerhalb von 24-48 Stunden</li>
              <li><strong>Diskret:</strong> Professionelle und rücksichtsvolle Abwicklung</li>
              <li><strong>Umweltfreundlich:</strong> 800 Tonnen Material bereits recycelt</li>
              <li><strong>Versichert:</strong> Vollumfänglicher Versicherungsschutz</li>
            </ul>

            {/* Related Articles */}
            <div className="mt-16 p-8 rounded-2xl bg-neutral-50 border-2 border-neutral-200 not-prose">
              <h3 className="text-xl font-bold text-neutral-900 mb-6">
                Möchten Sie mehr zu diesem Thema erfahren?
              </h3>
              <div className="space-y-4">
                {relatedArticles.map((article, idx) => (
                  <Link
                    key={idx}
                    href={article.link}
                    className="group flex items-center justify-between p-4 rounded-xl bg-white border-2 border-neutral-200 hover:border-emerald-400 transition-all"
                  >
                    <span className="font-semibold text-neutral-900 group-hover:text-emerald-600 transition-colors">
                      {article.title}
                    </span>
                    <ArrowRight className="w-5 h-5 text-emerald-600 group-hover:translate-x-1 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>
          </article>
        </Container>
      </Section>
    </>
  )
}
