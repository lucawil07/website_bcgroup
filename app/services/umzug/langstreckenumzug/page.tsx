import { Metadata } from 'next'
import Link from 'next/link'
import { Container, Section } from '@/components/ui'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { CTAContact } from '@/components/sections'
import { Truck, CheckCircle, MapPin, Shield, Navigation, Package } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Langstreckenumzug Berlin - Deutschlandweite Umzüge | BC Group',
  description: 'Professioneller Langstreckenumzug von Berlin in ganz Deutschland: GPS-Tracking, Versicherungsschutz und zuverlässige Planung. Bundesweite Umzüge ohne Stress.',
  keywords: 'langstreckenumzug berlin, fernumzug, umzug deutschland, bundesweiter umzug, umzug innerhalb deutschland',
}

export default function LangstreckenumzugPage() {
  const accent = '#f97316'

  const benefits = [
    {
      icon: Navigation,
      title: 'GPS-Tracking',
      description: 'Echtzeit-Verfolgung Ihres Umzugsguts während des gesamten Transports',
    },
    {
      icon: Shield,
      title: 'Vollversicherung',
      description: 'Umfassender Versicherungsschutz für Transportschäden und unvorhersehbare Ereignisse',
    },
    {
      icon: MapPin,
      title: 'Deutschlandweit',
      description: 'Zuverlässiger Service in alle Bundesländer – von Hamburg bis München',
    },
  ]

  const services = [
    'Detaillierte Routenplanung',
    'Professionelle Verpackung für Transport',
    'Sichere Beladung und Fixierung',
    'GPS-gestützte Transportverfolgung',
    'Zwischenlagerung bei Bedarf',
    'Pünktliche Lieferung zum Wunschtermin',
    'Entladung und Aufbau am Zielort',
    'Vollversicherung aller Güter',
  ]

  const processSteps = [
    {
      step: '1',
      title: 'Bedarfsermittlung & Angebot',
      description: 'Wir erfassen Ihr Umzugsvolumen, die Entfernung und besondere Anforderungen. Sie erhalten ein detailliertes Festpreisangebot mit allen Leistungen und Versicherungen.',
    },
    {
      step: '2',
      title: 'Terminkoordination',
      description: 'Wir planen die optimale Route und legen Abhol- sowie Liefertermine fest. Bei Bedarf organisieren wir Zwischenlagerung oder mehrere Liefertermine.',
    },
    {
      step: '3',
      title: 'Transport mit Tracking',
      description: 'Ihr Umzugsgut wird sicher transportiert. Via GPS können Sie jederzeit den aktuellen Standort verfolgen. Wir halten Sie über den Transportfortschritt informiert.',
    },
    {
      step: '4',
      title: 'Lieferung & Aufbau',
      description: 'Pünktlich zum vereinbarten Termin liefern wir Ihr Umzugsgut aus. Wir bauen Möbel auf und stellen alles nach Ihren Wünschen in der neuen Wohnung auf.',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <Section padding="large" className="relative overflow-hidden pt-32 pb-20 bg-gradient-to-br from-red-50 via-orange-50 to-white">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/5 via-transparent to-orange-600/5" />
        
        <Container size="default" className="relative z-10">
          <Breadcrumb 
            items={[
              { label: 'Services', href: '/#content-start' },
              { label: 'Umzug', href: '/services/umzug' },
              { label: 'Langstreckenumzug' },
            ]}
            accentColor={accent}
          />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-red-100 border border-red-200">
              <Truck className="w-4 h-4 text-red-700" />
              <span className="text-sm font-bold uppercase tracking-wider text-red-900">
                Langstreckenumzug
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-neutral-900 leading-tight">
              Bundesweite Umzüge mit Sicherheit und Tracking
            </h1>

            <p className="text-xl text-neutral-700 leading-relaxed mb-8">
              Sie ziehen von Berlin nach München, Hamburg oder Stuttgart? Wir organisieren Ihren 
              Langstreckenumzug mit zuverlässiger Planung, sicherem Transport und GPS-Tracking. 
              Deutschlandweit – pünktlich und versichert.
            </p>

            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: accent }}
            >
              Fernumzug anfragen
            </Link>
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section padding="large" background="white">
        <Container size="default">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
            Warum BC Group für Ihren Langstreckenumzug?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div 
                  key={index}
                  className="p-6 rounded-2xl border-2 border-neutral-100 hover:border-red-200 transition-all duration-300 hover:shadow-lg"
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

      {/* Services Overview */}
      <Section padding="large" className="bg-gradient-to-b from-white to-red-50">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center">
              Unser Langstreckenumzug-Service umfasst
            </h2>
            
            <p className="text-lg text-neutral-700 mb-8 text-center">
              Wir bieten einen umfassenden Service für Fernumzüge:
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-red-100 hover:border-red-300 transition-colors"
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: accent }} />
                  <span className="text-neutral-800 font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Process Section */}
      <Section padding="large" background="white">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
              So läuft Ihr Langstreckenumzug ab
            </h2>

            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div 
                  key={index}
                  className="flex gap-6 p-6 rounded-2xl bg-gradient-to-br from-red-50 to-white border border-red-100"
                >
                  <div 
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg"
                    style={{ backgroundColor: accent }}
                  >
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-neutral-700 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Popular Routes */}
      <Section padding="large" className="bg-gradient-to-b from-white to-orange-50">
        <Container size="default">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center">
              Beliebte Umzugsrouten ab Berlin
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-white border border-orange-100">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5" style={{ color: accent }} />
                  <h3 className="text-lg font-bold text-neutral-900">
                    Berlin → München
                  </h3>
                </div>
                <p className="text-neutral-700">
                  Ca. 590 km | Transportzeit 1-2 Tage
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-orange-100">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5" style={{ color: accent }} />
                  <h3 className="text-lg font-bold text-neutral-900">
                    Berlin → Hamburg
                  </h3>
                </div>
                <p className="text-neutral-700">
                  Ca. 290 km | Transportzeit 1 Tag
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-orange-100">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5" style={{ color: accent }} />
                  <h3 className="text-lg font-bold text-neutral-900">
                    Berlin → Köln
                  </h3>
                </div>
                <p className="text-neutral-700">
                  Ca. 580 km | Transportzeit 1-2 Tage
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-orange-100">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5" style={{ color: accent }} />
                  <h3 className="text-lg font-bold text-neutral-900">
                    Berlin → Frankfurt
                  </h3>
                </div>
                <p className="text-neutral-700">
                  Ca. 550 km | Transportzeit 1-2 Tage
                </p>
              </div>
            </div>

            <p className="text-center text-neutral-600 mt-6">
              Ihr Zielort ist nicht dabei? Wir fahren deutschlandweit und erstellen 
              Ihnen gerne ein individuelles Angebot für Ihre Route.
            </p>
          </div>
        </Container>
      </Section>

      {/* Pricing Info */}
      <Section padding="large" className="bg-gradient-to-br from-red-900 to-orange-800 text-white">
        <Container size="default">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transparente Preise für Langstreckenumzüge
            </h2>
            <p className="text-lg text-red-100 mb-8 leading-relaxed">
              Die Kosten für einen Langstreckenumzug hängen von der Entfernung, dem Umzugsvolumen 
              und gewünschten Zusatzleistungen ab. Wir kalkulieren fair und transparent – 
              inklusive aller Versicherungen und GPS-Tracking ohne Aufpreis.
            </p>
            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-red-900 bg-white hover:bg-red-50 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Jetzt Angebot einholen
            </Link>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTAContact />
    </>
  )
}
