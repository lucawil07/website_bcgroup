import { Metadata } from 'next'
import Link from 'next/link'
import { Container, Section } from '@/components/ui'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { CTAContact } from '@/components/sections'
import { Users, CheckCircle, Building, Clock, Package } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Gewerbliche Räumung Berlin - Büros, Läden & Lager | BC Group',
  description: 'Professionelle gewerbliche Räumung in Berlin. Büros, Läden und Lagerhallen diskret und effizient geräumt. Flexible Zeitfenster, große Mengen.',
  keywords: 'gewerbliche räumung berlin, büroräumung, ladenräumung, lagerräumung, gewerbeentrümpelung',
}

export default function GewerblicheRaeumungPage() {
  const accent = '#34d399'

  const benefits = [
    {
      icon: Clock,
      title: 'Flexible Zeitfenster',
      description: 'Auch außerhalb der Geschäftszeiten, am Wochenende oder nachts',
    },
    {
      icon: Package,
      title: 'Große Mengen',
      description: 'Professionelle Logistik für Gewerberäumungen jeder Größe',
    },
    {
      icon: Building,
      title: 'Diskrete Abwicklung',
      description: 'Unauffällige und professionelle Durchführung',
    },
  ]

  const commercialTypes = [
    'Büroräume und Verwaltungsgebäude',
    'Einzelhandelsgeschäfte und Läden',
    'Lagerhallen und Logistikzentren',
    'Restaurants und Gastronomiebetriebe',
    'Praxen und medizinische Einrichtungen',
    'Produktionsstätten und Werkstätten',
    'Hotels und Beherbergungsbetriebe',
    'Fitnessstudios und Freizeiteinrichtungen',
  ]

  return (
    <>
      {/* Hero Section */}
      <Section padding="large" className="relative overflow-hidden pt-32 pb-20 bg-gradient-to-br from-emerald-50 via-white to-green-50">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 via-transparent to-green-500/5" />
        
        <Container size="default" className="relative z-10">
          <Breadcrumb 
            items={[
              { label: 'Services', href: '/#content-start' },
              { label: 'Entrümpelung', href: '/services/entruempelung' },
              { label: 'Gewerbliche Räumung' },
            ]}
            accentColor={accent}
          />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-emerald-200 border border-emerald-300">
              <Users className="w-4 h-4 text-emerald-800" />
              <span className="text-sm font-bold uppercase tracking-wider text-emerald-900">
                Gewerbliche Räumung
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-neutral-900 leading-tight">
              Gewerbliche Räumung in Berlin
            </h1>

            <p className="text-xl text-neutral-700 leading-relaxed mb-8">
              Komplette Leerung von Büros, Läden und Lagerhallen. Flexible Zeitfenster, 
              diskrete Abwicklung und professionelle Entsorgung großer Mengen.
            </p>

            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: accent }}
            >
              Kostenlose Beratung
            </Link>
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section padding="large" background="white">
        <Container size="default">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
            Vorteile für Gewerbetreibende
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div 
                  key={index}
                  className="p-6 rounded-2xl border-2 border-neutral-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg"
                >
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${accent}20` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: accent }} />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* Commercial Types */}
      <Section padding="large" className="bg-gradient-to-b from-white to-emerald-50">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center">
              Welche Gewerbe räumen wir?
            </h2>
            
            <p className="text-lg text-neutral-700 mb-8 text-center">
              Unsere Erfahrung erstreckt sich über alle Arten von gewerblichen Räumlichkeiten:
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {commercialTypes.map((type, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-emerald-200 hover:border-emerald-400 transition-colors"
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: accent }} />
                  <span className="text-neutral-800 font-medium">{type}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Details Section */}
      <Section padding="large" background="white">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
              Besonderheiten der Gewerberäumung
            </h2>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-200">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  Flexible Terminplanung
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Wir passen uns Ihren Geschäftszeiten an. Ob am Wochenende, nachts oder während 
                  der Betriebsferien - wir räumen dann, wenn es für Sie am besten passt, 
                  ohne Ihren laufenden Betrieb zu stören.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-200">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  Datenschutz & Vertraulichkeit
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Geschäftsunterlagen und sensible Daten werden nach höchsten Sicherheitsstandards 
                  behandelt. Wir bieten auf Wunsch zertifizierte Aktenvernichtung und dokumentieren 
                  die fachgerechte Entsorgung.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-200">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  Demontage & Entsorgung
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Büromöbel, IT-Equipment, Ladeneinrichtungen - wir demontieren und entsorgen alles 
                  fachgerecht. Wertvolles Equipment kann auf Wunsch auch verkauft oder gespendet werden.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-200">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  Komplette Abwicklung
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Von der Planung über die Durchführung bis zur Endreinigung - wir übernehmen 
                  alle Schritte. Sie erhalten die Räumlichkeiten besenrein zurück und können sich 
                  auf Ihr Kerngeschäft konzentrieren.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section padding="large" className="bg-gradient-to-br from-emerald-800 to-emerald-600 text-white">
        <Container size="default">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Gewerberäumung anfragen
            </h2>
            <p className="text-lg text-emerald-100 mb-8 leading-relaxed">
              Planen Sie einen Umzug, eine Betriebsaufgabe oder Umstrukturierung? 
              Wir erstellen Ihnen ein maßgeschneidertes Angebot für Ihre gewerbliche Räumung. 
              Kontaktieren Sie uns für eine kostenlose Beratung.
            </p>
            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-emerald-900 bg-white hover:bg-emerald-50 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Angebot anfordern
            </Link>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTAContact />
    </>
  )
}
