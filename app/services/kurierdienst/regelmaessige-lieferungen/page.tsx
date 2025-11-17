import { Metadata } from 'next'
import Link from 'next/link'
import { Container, Section } from '@/components/ui'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { CTAContact } from '@/components/sections'
import { Clock, CheckCircle, Shield, Calendar, MapPin, Euro } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Regelmäßige Lieferungen Berlin - Planbare Kurier-Routen | BC Group',
  description: 'Vertraglich vereinbarte Kurierdienste mit festen Routen in Berlin. Wiederkehrende Lieferungen für Unternehmen - zuverlässig, pünktlich und kosteneffizient.',
  keywords: 'kurier festroute berlin, wiederkehrende lieferungen, vertragskurier berlin, planbare lieferungen, business kurier, regelmäßiger transport',
}

export default function RegelmaessigeLieferungenPage() {
  const accent = '#00d4ff'

  const benefits = [
    {
      icon: Calendar,
      title: 'Feste Zeitfenster',
      description: 'Vertraglich vereinbarte Abholzeiten und Zustellfenster für maximale Planungssicherheit',
    },
    {
      icon: MapPin,
      title: 'Optimierte Routen',
      description: 'Fest definierte Touren reduzieren Kosten und garantieren pünktliche Zustellung',
    },
    {
      icon: Euro,
      title: 'Kosteneffizienz',
      description: 'Vergünstigte Konditionen durch langfristige Verträge und planbare Auslastung',
    },
  ]

  const services = [
    'Tägliche oder wöchentliche Abholungen',
    'Multi-Stop-Routen für mehrere Standorte',
    'Feste Lieferzeiten zwischen Filialen',
    'Warenverteilung an Außendienst-Teams',
    'Regelmäßige Express-Sendungen',
    'Dokumententransport zwischen Büros',
  ]

  const useCases = [
    {
      title: 'Einzelhandel & Filialen',
      description: 'Täglicher Transport von Belegen, Wechselgeld und Warenmustern zwischen Hauptsitz und Filialen',
      example: 'Beispiel: Fashion-Kette mit 8 Berliner Filialen',
    },
    {
      title: 'Produktion & Logistik',
      description: 'Regelmäßige Lieferung von Kleinteilen, Mustern oder Prototypen zu Produktionsstandorten',
      example: 'Beispiel: Maschinenbauer mit Zulieferern in Berlin-Brandenburg',
    },
    {
      title: 'Medizin & Labore',
      description: 'Zeitkritische Lieferung von Proben, Medikamenten oder medizinischen Geräten',
      example: 'Beispiel: Laborverbund mit täglichen Probentransporten',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <Section padding="large" className="relative overflow-hidden pt-32 pb-20 bg-gradient-to-br from-cyan-50 via-white to-blue-50">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/5 via-transparent to-blue-600/5" />
        
        <Container size="default" className="relative z-10">
          <Breadcrumb 
            items={[
              { label: 'Services', href: '/#content-start' },
              { label: 'Kurierdienst', href: '/services/kurierdienst' },
              { label: 'Regelmäßige Lieferungen' },
            ]}
            accentColor={accent}
          />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-cyan-100 border border-cyan-200">
              <Clock className="w-4 h-4 text-cyan-700" />
              <span className="text-sm font-bold uppercase tracking-wider text-cyan-900">
                Vertragskurier
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-neutral-900 leading-tight">
              Regelmäßige Lieferungen<br />
              <span style={{ color: accent }}>für planbare Abläufe</span>
            </h1>

            <p className="text-xl text-neutral-700 leading-relaxed mb-8">
              Wiederkehrende Kurierfahrten für Unternehmen mit konstantem Transportbedarf. 
              Feste Routen, vertraglich vereinbarte Konditionen und maximale Zuverlässigkeit 
              für Ihre geschäftskritischen Transporte in Berlin und Umgebung.
            </p>

            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: accent }}
            >
              Vertrag anfragen
            </Link>
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section padding="large" background="white">
        <Container size="default">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
            Ihre Vorteile bei Vertragslieferungen
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div 
                  key={index}
                  className="p-6 rounded-2xl border-2 border-neutral-100 hover:border-cyan-200 transition-all duration-300 hover:shadow-lg"
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
      <Section padding="large" className="bg-gradient-to-b from-white to-cyan-50">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center">
              Was wir regelmäßig für Sie transportieren
            </h2>
            
            <p className="text-lg text-neutral-700 mb-8 text-center">
              Von kleinen Dokumentensendungen bis zu größeren Warenpaketen – 
              wir übernehmen jeden wiederkehrenden Transportauftrag:
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-cyan-100 hover:border-cyan-300 transition-colors"
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: accent }} />
                  <span className="text-neutral-800 font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Use Cases Section */}
      <Section padding="large" background="white">
        <Container size="default">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
              Branchen & Anwendungsbeispiele
            </h2>

            <div className="space-y-6">
              {useCases.map((useCase, index) => (
                <div 
                  key={index}
                  className="p-8 rounded-2xl bg-gradient-to-br from-cyan-50 to-white border-2 border-cyan-100 hover:border-cyan-300 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    {useCase.description}
                  </p>
                  <div 
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold"
                    style={{ backgroundColor: `${accent}15`, color: accent }}
                  >
                    <Clock className="w-4 h-4" />
                    {useCase.example}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Process Section */}
      <Section padding="large" className="bg-gradient-to-b from-white to-cyan-50">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
              So starten Sie Ihre Vertragslieferungen
            </h2>

            <div className="space-y-6">
              {[
                {
                  step: '1',
                  title: 'Bedarfsanalyse',
                  description: 'Wir analysieren Ihre Transportrouten, Volumina und zeitlichen Anforderungen. Gemeinsam definieren wir die optimale Route.',
                },
                {
                  step: '2',
                  title: 'Angebot & Vertrag',
                  description: 'Sie erhalten ein transparentes Festpreisangebot mit allen Konditionen. Nach Vertragsabschluss planen wir die erste Tour.',
                },
                {
                  step: '3',
                  title: 'Routenstart',
                  description: 'Unsere Fahrer lernen Ihre Standorte kennen und führen die ersten Lieferungen durch. Optimierungen sind jederzeit möglich.',
                },
                {
                  step: '4',
                  title: 'Laufender Betrieb',
                  description: 'Ihre regelmäßigen Lieferungen laufen automatisch nach Plan. Bei Bedarf passen wir Routen oder Zeiten flexibel an.',
                },
              ].map((step, index) => (
                <div 
                  key={index}
                  className="flex gap-6 p-6 rounded-2xl bg-white border-2 border-cyan-100 hover:border-cyan-300 transition-all duration-300"
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

      {/* Pricing Info */}
      <Section padding="large" className="bg-gradient-to-br from-cyan-900 to-blue-700 text-white">
        <Container size="default">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Attraktive Vertragskonditionen
            </h2>
            <p className="text-lg text-cyan-100 mb-8 leading-relaxed">
              Die Kosten für regelmäßige Lieferungen hängen von Routenlänge, Anzahl der Stops, 
              Lieferfrequenz und Sendungsvolumen ab. Durch die Planbarkeit bieten wir Ihnen 
              deutlich günstigere Konditionen als bei Einzelaufträgen. 
              Fordern Sie ein unverbindliches Angebot an – wir beraten Sie gerne.
            </p>
            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-white hover:bg-cyan-50 transition-all duration-300 hover:scale-105 shadow-lg"
              style={{ color: accent }}
            >
              Kostenlos beraten lassen
            </Link>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTAContact />
    </>
  )
}
