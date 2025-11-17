import { Metadata } from 'next'
import Link from 'next/link'
import { Container, Section } from '@/components/ui'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { CTAContact } from '@/components/sections'
import { Home, CheckCircle, Clock, Shield, Truck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Wohnungsauflösung Berlin - Professionell & Zuverlässig | BC Group',
  description: 'Professionelle Wohnungsauflösung in Berlin. Von Single-Wohnung bis Palazzo - wir räumen fachgerecht und vollständig. Faire Preise, schnelle Abwicklung.',
  keywords: 'wohnungsauflösung berlin, wohnung auflösen, haushaltsauflösung, entrümpelung wohnung',
}

export default function WohnungsaufloesungPage() {
  const accent = '#10b981'

  const benefits = [
    {
      icon: Clock,
      title: 'Schnelle Räumung',
      description: 'Termingerechte Durchführung innerhalb von 24-48 Stunden',
    },
    {
      icon: Shield,
      title: 'Schonung der Wände',
      description: 'Professioneller Schutz von Böden, Wänden und Türrahmen',
    },
    {
      icon: Truck,
      title: 'Vollständige Entsorgung',
      description: 'Fachgerechte Entsorgung und Recycling aller Materialien',
    },
  ]

  const services = [
    'Single-Wohnungen und Apartments',
    'Mehrfamilienhäuser und große Wohnungen',
    'Penthouse und Luxuswohnungen',
    'Messie-Wohnungen mit Extremfällen',
    'Studentenwohnungen und WG-Zimmer',
    'Seniorenwohnungen und Pflegeheime',
  ]

  return (
    <>
      {/* Hero Section */}
      <Section padding="large" className="relative overflow-hidden pt-32 pb-20 bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/5 via-transparent to-emerald-600/5" />
        
        <Container size="default" className="relative z-10">
          <Breadcrumb 
            items={[
              { label: 'Services', href: '/#content-start' },
              { label: 'Entrümpelung', href: '/services/entruempelung' },
              { label: 'Wohnungsauflösung' },
            ]}
            accentColor={accent}
          />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200">
              <Home className="w-4 h-4 text-emerald-700" />
              <span className="text-sm font-bold uppercase tracking-wider text-emerald-900">
                Wohnungsauflösung
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-neutral-900 leading-tight">
              Professionelle Wohnungsauflösung in Berlin
            </h1>

            <p className="text-xl text-neutral-700 leading-relaxed mb-8">
              Von der Single-Wohnung bis zum großzügigen Palazzo – wir räumen Ihre Immobilie fachgerecht, 
              schnell und vollständig. Unabhängig vom Füllstand oder Zustand übernehmen wir alle Arbeiten.
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
            Ihre Vorteile bei der BC Group
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div 
                  key={index}
                  className="p-6 rounded-2xl border-2 border-neutral-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-lg"
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
      <Section padding="large" className="bg-gradient-to-b from-white to-emerald-50">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center">
              Welche Wohnungen räumen wir?
            </h2>
            
            <p className="text-lg text-neutral-700 mb-8 text-center">
              Wir übernehmen Wohnungsauflösungen jeder Größe und jeden Zustands. 
              Unsere Erfahrung umfasst:
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-emerald-100 hover:border-emerald-300 transition-colors"
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
              So läuft Ihre Wohnungsauflösung ab
            </h2>

            <div className="space-y-6">
              {[
                {
                  step: '1',
                  title: 'Kostenlose Besichtigung',
                  description: 'Wir besichtigen die Wohnung vor Ort oder per Videocall und erstellen Ihnen ein transparentes Festpreisangebot.',
                },
                {
                  step: '2',
                  title: 'Terminvereinbarung',
                  description: 'Wir vereinbaren einen für Sie passenden Termin. Auch kurzfristige Termine innerhalb von 48h sind möglich.',
                },
                {
                  step: '3',
                  title: 'Professionelle Räumung',
                  description: 'Unser erfahrenes Team räumt die Wohnung vollständig. Wände, Böden und Türen werden geschützt.',
                },
                {
                  step: '4',
                  title: 'Endreinigung & Übergabe',
                  description: 'Nach der Räumung führen wir eine Grundreinigung durch. Die Wohnung wird besenrein übergeben.',
                },
              ].map((step, index) => (
                <div 
                  key={index}
                  className="flex gap-6 p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-100"
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
      <Section padding="large" className="bg-gradient-to-br from-emerald-900 to-emerald-700 text-white">
        <Container size="default">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transparente Preisgestaltung
            </h2>
            <p className="text-lg text-emerald-100 mb-8 leading-relaxed">
              Die Kosten für eine Wohnungsauflösung hängen von verschiedenen Faktoren ab: 
              Größe der Wohnung, Füllstand, Stockwerk und Entsorgungsaufwand. 
              Nach einer kostenlosen Besichtigung erhalten Sie ein verbindliches Festpreisangebot ohne versteckte Kosten.
            </p>
            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-emerald-900 bg-white hover:bg-emerald-50 transition-all duration-300 hover:scale-105 shadow-lg"
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
