import { Metadata } from 'next'
import Link from 'next/link'
import { Container, Section } from '@/components/ui'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { CTAContact } from '@/components/sections'
import { Clock, CheckCircle, Zap, Phone, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Express-Entrümpelung Berlin - 48h Service | BC Group',
  description: 'Notfall-Entrümpelung innerhalb von 48 Stunden in Berlin. Sofort verfügbar, flexible Planung, schnelle Termine. Express-Service für dringende Fälle.',
  keywords: 'express entrümpelung berlin, notfall entrümpelung, schnelle entrümpelung, 48h entrümpelung',
}

export default function ExpressServicePage() {
  const accent = '#6ee7b7'

  const benefits = [
    {
      icon: Zap,
      title: 'Sofort verfügbar',
      description: 'Einsatz innerhalb von 24-48 Stunden möglich',
    },
    {
      icon: Calendar,
      title: 'Kurze Termine',
      description: 'Auch am Wochenende und an Feiertagen',
    },
    {
      icon: Phone,
      title: 'Flexible Planung',
      description: 'Schnelle Abstimmung per Telefon oder WhatsApp',
    },
  ]

  const situations = [
    'Wohnungsübergabe an den Vermieter steht bevor',
    'Verkauf der Immobilie wurde unerwartet beschleunigt',
    'Gerichtsvollzieher hat Räumung angeordnet',
    'Umzug muss kurzfristig vorgezogen werden',
    'Erbe muss schnell angetreten werden',
    'Notfall in der Familie erfordert sofortiges Handeln',
  ]

  return (
    <>
      {/* Hero Section */}
      <Section padding="large" className="relative overflow-hidden pt-32 pb-20 bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-50">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10" />
        
        <Container size="default" className="relative z-10">
          <Breadcrumb 
            items={[
              { label: 'Services', href: '/#content-start' },
              { label: 'Entrümpelung', href: '/services/entruempelung' },
              { label: 'Express-Service' },
            ]}
            accentColor="#10b981"
          />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-emerald-200 border border-emerald-300">
              <Clock className="w-4 h-4 text-emerald-800" />
              <span className="text-sm font-bold uppercase tracking-wider text-emerald-900">
                Express-Service
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-neutral-900 leading-tight">
              Express-Entrümpelung<br />
              <span className="text-emerald-700">in 48 Stunden</span>
            </h1>

            <p className="text-xl text-neutral-700 leading-relaxed mb-8">
              Notfall-Entrümpelung für dringende Fälle. Sofort verfügbar, flexible Terminplanung, 
              schnelle und professionelle Durchführung. Auch am Wochenende und an Feiertagen.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link 
                href="/kontakt"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                style={{ backgroundColor: '#10b981' }}
              >
                Jetzt anrufen
              </Link>
              <a 
                href="tel:+4930123456789"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-emerald-900 bg-white border-2 border-emerald-300 hover:bg-emerald-50 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                030 / 123 456 789
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section padding="large" background="white">
        <Container size="default">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
            Ihr Express-Vorteil
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
                    style={{ backgroundColor: `${accent}40` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: '#10b981' }} />
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

      {/* Situations */}
      <Section padding="large" className="bg-gradient-to-b from-white to-emerald-50">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center">
              Wann brauchen Sie Express-Service?
            </h2>
            
            <p className="text-lg text-neutral-700 mb-8 text-center">
              Manchmal muss es schnell gehen. In diesen Situationen ist unser Express-Service 
              die richtige Lösung:
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {situations.map((situation, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-emerald-200 hover:border-emerald-400 transition-colors"
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-emerald-600" />
                  <span className="text-neutral-800 font-medium">{situation}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* How it works */}
      <Section padding="large" background="white">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
              So funktioniert der Express-Service
            </h2>

            <div className="space-y-6">
              <div className="flex gap-6 p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-200">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg bg-emerald-600">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    Sofort-Kontakt
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Rufen Sie uns an oder schreiben Sie uns per WhatsApp. Wir melden uns innerhalb 
                    von 15 Minuten zurück und klären die wichtigsten Details telefonisch.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-200">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg bg-emerald-600">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    Schnell-Angebot
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Anhand Ihrer Beschreibung und eventueller Fotos erstellen wir ein Angebot. 
                    Bei Zustimmung können wir oft noch am selben oder nächsten Tag starten.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-200">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg bg-emerald-600">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    Blitz-Entrümpelung
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Unser Team kommt zum vereinbarten Termin und räumt schnell und professionell. 
                    Dank optimierter Prozesse sind wir besonders effizient.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-200">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg bg-emerald-600">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    Fertig!
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Innerhalb kürzester Zeit ist die Räumung abgeschlossen. Sie erhalten die 
                    Räumlichkeiten besenrein zurück und können Ihren Termin einhalten.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Pricing Note */}
      <Section padding="large" className="bg-gradient-to-br from-emerald-50 to-teal-50">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <div className="p-8 rounded-2xl bg-white border-2 border-emerald-200 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 text-center">
                Express-Zuschlag
              </h2>
              <p className="text-lg text-neutral-700 leading-relaxed text-center mb-6">
                Für den Express-Service berechnen wir einen Aufpreis von 20-30% auf den 
                regulären Preis, abhängig von der Dringlichkeit und dem Zeitfenster. 
                In Notfällen lohnt sich dieser Aufschlag, um wichtige Termine einhalten zu können.
              </p>
              <div className="text-center">
                <Link 
                  href="/kontakt"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Jetzt Express-Angebot anfordern
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTAContact />
    </>
  )
}
