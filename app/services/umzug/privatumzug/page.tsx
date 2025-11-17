import { Metadata } from 'next'
import Link from 'next/link'
import { Container, Section } from '@/components/ui'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { CTAContact } from '@/components/sections'
import { Home, CheckCircle, Shield, Clock, Users, Package } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privatumzug Berlin - Professioneller Wohnungsumzug | BC Group',
  description: 'Stressfreier Privatumzug in Berlin: Professionelle Möbelpacker, sorgfältiger Transport und kompletter Service. Von der Planung bis zur Einrichtung - wir kümmern uns um alles.',
  keywords: 'privatumzug berlin, wohnungsumzug, möbelpacker, umzugsservice privat, umzug wohnung',
}

export default function PrivatumzugPage() {
  const accent = '#f97316'

  const benefits = [
    {
      icon: Users,
      title: 'Erfahrenes Team',
      description: 'Professionelle Möbelpacker mit jahrelanger Erfahrung und sorgfältiger Arbeitsweise',
    },
    {
      icon: Shield,
      title: 'Rundum-Schutz',
      description: 'Vollversicherung für Transport und Schäden während des gesamten Umzugs',
    },
    {
      icon: Clock,
      title: 'Pünktlich & Zuverlässig',
      description: 'Termingerechte Durchführung - Ihr Umzug erfolgt planmäßig ohne Verzögerungen',
    },
  ]

  const services = [
    'Kostenlose Besichtigung und Beratung',
    'Bereitstellung von Umzugskartons',
    'Professionelles Verpacken Ihrer Gegenstände',
    'Demontage und Montage von Möbeln',
    'Sorgfältiger Transport aller Möbel',
    'Aufbau am neuen Wohnort',
    'Entsorgung von Verpackungsmaterial',
    'Endreinigung der alten Wohnung',
  ]

  const processSteps = [
    {
      step: '1',
      title: 'Kostenlose Besichtigung',
      description: 'Wir besichtigen Ihre aktuelle und neue Wohnung, ermitteln den Umfang und erstellen ein detailliertes Festpreisangebot ohne versteckte Kosten.',
    },
    {
      step: '2',
      title: 'Umzugsplanung',
      description: 'Gemeinsam legen wir den Umzugstermin fest. Wir koordinieren alle Details: Halteverbotszone, Möbellift und den genauen Zeitplan.',
    },
    {
      step: '3',
      title: 'Verpackung & Demontage',
      description: 'Am Umzugstag verpackt unser Team alle Gegenstände sicher. Möbel werden fachgerecht demontiert und für den Transport vorbereitet.',
    },
    {
      step: '4',
      title: 'Transport & Aufbau',
      description: 'Wir transportieren alles sicher zur neuen Wohnung. Dort bauen wir Möbel wieder auf und stellen alles nach Ihren Wünschen auf.',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <Section padding="large" className="relative overflow-hidden pt-32 pb-20 bg-gradient-to-br from-orange-50 via-white to-amber-50">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/5 via-transparent to-orange-600/5" />
        
        <Container size="default" className="relative z-10">
          <Breadcrumb 
            items={[
              { label: 'Services', href: '/#content-start' },
              { label: 'Umzug', href: '/services/umzug' },
              { label: 'Privatumzug' },
            ]}
            accentColor={accent}
          />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-orange-100 border border-orange-200">
              <Home className="w-4 h-4 text-orange-700" />
              <span className="text-sm font-bold uppercase tracking-wider text-orange-900">
                Privatumzug
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-neutral-900 leading-tight">
              Ihr stressfreier Privatumzug in Berlin
            </h1>

            <p className="text-xl text-neutral-700 leading-relaxed mb-8">
              Von der Planung bis zur Einrichtung – wir übernehmen Ihren kompletten Wohnungsumzug. 
              Mit professionellem Team, sorgfältiger Handhabung aller Gegenstände und umfassender 
              Versicherung sorgen wir für einen reibungslosen Ablauf.
            </p>

            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: accent }}
            >
              Kostenloses Angebot
            </Link>
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section padding="large" background="white">
        <Container size="default">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
            Warum BC Group für Ihren Privatumzug?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div 
                  key={index}
                  className="p-6 rounded-2xl border-2 border-neutral-100 hover:border-orange-200 transition-all duration-300 hover:shadow-lg"
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
      <Section padding="large" className="bg-gradient-to-b from-white to-orange-50">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center">
              Unser Privatumzug-Service umfasst
            </h2>
            
            <p className="text-lg text-neutral-700 mb-8 text-center">
              Wir bieten einen Rundum-Service, der alle Aspekte Ihres Umzugs abdeckt:
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-orange-100 hover:border-orange-300 transition-colors"
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
              So läuft Ihr Privatumzug ab
            </h2>

            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div 
                  key={index}
                  className="flex gap-6 p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-white border border-orange-100"
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

      {/* Tips Section */}
      <Section padding="large" className="bg-gradient-to-b from-white to-orange-50">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center">
              Tipps für Ihren Privatumzug
            </h2>
            
            <div className="space-y-4">
              <div className="p-6 rounded-xl bg-white border border-orange-100">
                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  Früh planen lohnt sich
                </h3>
                <p className="text-neutral-700">
                  Buchen Sie Ihren Umzug mindestens 4-6 Wochen im Voraus, besonders am Monatsende 
                  und in den Sommermonaten sind Umzugsunternehmen stark ausgelastet.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-orange-100">
                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  Ausmisten vor dem Umzug
                </h3>
                <p className="text-neutral-700">
                  Nutzen Sie den Umzug, um sich von ungenutzten Gegenständen zu trennen. 
                  Das spart Umzugskosten und Sie starten mit weniger Ballast in der neuen Wohnung.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-orange-100">
                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  Wichtige Dokumente getrennt aufbewahren
                </h3>
                <p className="text-neutral-700">
                  Packen Sie wichtige Dokumente, Wertsachen und persönliche Gegenstände in eine 
                  separate Tasche, die Sie selbst transportieren.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Pricing Info */}
      <Section padding="large" className="bg-gradient-to-br from-orange-900 to-orange-700 text-white">
        <Container size="default">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transparente Preisgestaltung
            </h2>
            <p className="text-lg text-orange-100 mb-8 leading-relaxed">
              Die Kosten für Ihren Privatumzug richten sich nach der Wohnungsgröße, der Entfernung, 
              dem Stockwerk und gewünschten Zusatzleistungen. Nach einer kostenlosen Besichtigung 
              erhalten Sie ein verbindliches Festpreisangebot – fair, transparent und ohne versteckte Kosten.
            </p>
            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-orange-900 bg-white hover:bg-orange-50 transition-all duration-300 hover:scale-105 shadow-lg"
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
