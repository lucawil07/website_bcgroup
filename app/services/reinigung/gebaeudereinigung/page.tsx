import { Metadata } from 'next'
import Link from 'next/link'
import { Container, Section } from '@/components/ui'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { CTAContact } from '@/components/sections'
import { Building2, CheckCircle, Shield, Droplets, Wind, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Gebäudereinigung Berlin - Fassaden & Fenster professionell | BC Group',
  description: 'Professionelle Gebäudereinigung in Berlin. Außen- & Innenfassadenreinigung, Fensterreinigung mit moderner Technologie. Zuverlässig, termintreu, sicher.',
  keywords: 'gebäudereinigung berlin, fassadenreinigung, fensterreinigung berlin, gebäudereinigung, facility cleaning',
}

export default function GebaeudereinigungPage() {
  const accent = '#06b6d4'

  const benefits = [
    {
      icon: Shield,
      title: 'Zertifizierte Sicherheit',
      description: 'Arbeiten in der Höhe nach höchsten Sicherheitsstandards mit zertifiziertem Personal',
    },
    {
      icon: Droplets,
      title: 'Moderne Technologie',
      description: 'Osmose-Anlagen und professionelle Reinigungstechnik für streifenfreie Ergebnisse',
    },
    {
      icon: Wind,
      title: 'Umweltschonend',
      description: 'Einsatz umweltfreundlicher Reinigungsmittel und wassersparender Verfahren',
    },
  ]

  const services = [
    'Fassadenreinigung (Glas, Stein, Metall, Putz)',
    'Fensterreinigung innen und außen',
    'Rahmenreinigung und Dichtungspflege',
    'Graffiti- und Verschmutzungsentfernung',
    'Dachrinnen- und Fallrohrreinigung',
    'Photovoltaik- und Solaranlagenreinigung',
  ]

  const process = [
    {
      step: '1',
      title: 'Objektbesichtigung',
      description: 'Wir analysieren Ihr Gebäude vor Ort: Fassadentyp, Verschmutzungsgrad, Zugänglichkeit und besondere Anforderungen.',
    },
    {
      step: '2',
      title: 'Reinigungskonzept',
      description: 'Entwicklung eines maßgeschneiderten Reinigungsplans mit optimaler Methode (Teleskopstange, Hebebühne, Seilzugang) und Festpreis.',
    },
    {
      step: '3',
      title: 'Terminkoordination',
      description: 'Flexible Terminplanung auch außerhalb der Geschäftszeiten oder am Wochenende, ohne Störung Ihrer Betriebsabläufe.',
    },
    {
      step: '4',
      title: 'Professionelle Ausführung',
      description: 'Unsere geschulten Teams führen die Reinigung sicher und gründlich durch - mit abschließender Qualitätskontrolle.',
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
              { label: 'Reinigung', href: '/services/reinigung' },
              { label: 'Gebäudereinigung' },
            ]}
            accentColor={accent}
          />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-cyan-100 border border-cyan-200">
              <Building2 className="w-4 h-4 text-cyan-700" />
              <span className="text-sm font-bold uppercase tracking-wider text-cyan-900">
                Gebäudereinigung
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-neutral-900 leading-tight">
              Professionelle Gebäudereinigung in Berlin
            </h1>

            <p className="text-xl text-neutral-700 leading-relaxed mb-8">
              Professionelle Außen- und Innenfassadenreinigung sowie Fensterreinigung mit modernster Technologie. 
              Für strahlende Sauberkeit und gepflegte Gebäude - zuverlässig, termintreu und 100% sicher.
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
              Umfassende Reinigungsleistungen
            </h2>
            
            <p className="text-lg text-neutral-700 mb-8 text-center">
              Von der Hochhausfassade bis zum Einfamilienhaus - wir reinigen alle Gebäudetypen 
              und Materialien professionell und schonend:
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

      {/* Process Section */}
      <Section padding="large" background="white">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
              Unser Ablauf für Ihre Gebäudereinigung
            </h2>

            <div className="space-y-6">
              {process.map((step, index) => (
                <div 
                  key={index}
                  className="flex gap-6 p-6 rounded-2xl bg-gradient-to-br from-cyan-50 to-white border border-cyan-100"
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

      {/* Feature Highlight */}
      <Section padding="large" className="bg-gradient-to-br from-cyan-900 to-blue-700 text-white">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Sparkles className="w-12 h-12" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Streifenfreie Perfektion
              </h2>
            </div>
            <p className="text-lg text-cyan-100 mb-6 leading-relaxed text-center">
              Mit unseren modernen Osmose-Reinigungssystemen erzielen wir streifenfreie, kristallklare Fenster 
              ohne den Einsatz von Chemikalien. Das Ergebnis: Perfekte Sauberkeit und langanhaltender Glanz 
              bei maximaler Umweltschonung. Ideal für Bürogebäude, Wohnanlagen und öffentliche Einrichtungen.
            </p>
            <div className="text-center">
              <Link 
                href="/kontakt"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-cyan-900 bg-white hover:bg-cyan-50 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Jetzt Angebot anfragen
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTAContact />
    </>
  )
}
