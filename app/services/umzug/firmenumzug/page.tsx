import { Metadata } from 'next'
import Link from 'next/link'
import { Container, Section } from '@/components/ui'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { CTAContact } from '@/components/sections'
import { Briefcase, CheckCircle, Shield, Clock, FileCheck, Laptop } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Firmenumzug Berlin - Professioneller Büroumzug | BC Group',
  description: 'Effizienter Firmenumzug in Berlin: Minimale Ausfallzeiten, sichere IT-Migration und professionelle Planung. Wir relocaten Ihr Unternehmen reibungslos.',
  keywords: 'firmenumzug berlin, büroumzug, unternehmensumzug, office relocation, it umzug berlin',
}

export default function FirmenumzugPage() {
  const accent = '#f97316'

  const benefits = [
    {
      icon: Clock,
      title: 'Minimale Ausfallzeit',
      description: 'Optimierte Planung für schnelle Durchführung – oft über Nacht oder am Wochenende',
    },
    {
      icon: Laptop,
      title: 'IT-Sicherheit',
      description: 'Spezialisierter Umgang mit Server, Hardware und sensibler IT-Infrastruktur',
    },
    {
      icon: FileCheck,
      title: 'Dokumentensicherheit',
      description: 'Versicherter Transport vertraulicher Unterlagen und Aktenbestände',
    },
  ]

  const services = [
    'Detaillierte Umzugsplanung mit Zeitplan',
    'Professionelle Verpackung von IT-Equipment',
    'Sichere Demontage von Büromöbeln',
    'Kennzeichnung und Inventarisierung',
    'Versicherter Spezialtransport',
    'Schneller Aufbau am neuen Standort',
    'IT-Verkabelung und Anschluss',
    'Entsorgung von Altmöbeln und Elektroschrott',
  ]

  const processSteps = [
    {
      step: '1',
      title: 'Bedarfsanalyse & Planung',
      description: 'Wir analysieren Ihre Räumlichkeiten, IT-Infrastruktur und zeitlichen Anforderungen. Gemeinsam entwickeln wir einen detaillierten Umzugsplan mit minimalem Betriebsausfall.',
    },
    {
      step: '2',
      title: 'Vorbereitung & Koordination',
      description: 'Unser Team erstellt Packing-Listen, koordiniert Halteverbotszone und Technik. IT-Equipment wird erfasst und für den Transport vorbereitet.',
    },
    {
      step: '3',
      title: 'Durchführung',
      description: 'Der Umzug erfolgt zum vereinbarten Termin – oft außerhalb der Geschäftszeiten. Wir arbeiten effizient und mit minimalem Störungsgrad.',
    },
    {
      step: '4',
      title: 'Aufbau & Inbetriebnahme',
      description: 'Am neuen Standort bauen wir alles auf, schließen IT-Systeme an und sorgen für einen schnellen Betriebsstart am nächsten Arbeitstag.',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <Section padding="large" className="relative overflow-hidden pt-32 pb-20 bg-gradient-to-br from-amber-50 via-white to-orange-50">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/5 via-transparent to-orange-600/5" />
        
        <Container size="default" className="relative z-10">
          <Breadcrumb 
            items={[
              { label: 'Services', href: '/#content-start' },
              { label: 'Umzug', href: '/services/umzug' },
              { label: 'Firmenumzug' },
            ]}
            accentColor={accent}
          />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-amber-100 border border-amber-200">
              <Briefcase className="w-4 h-4 text-amber-700" />
              <span className="text-sm font-bold uppercase tracking-wider text-amber-900">
                Firmenumzug
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-neutral-900 leading-tight">
              Professioneller Firmenumzug mit minimaler Ausfallzeit
            </h1>

            <p className="text-xl text-neutral-700 leading-relaxed mb-8">
              Ihr Unternehmen zieht um? Wir sorgen für eine reibungslose Relocation mit optimierter 
              Planung, koordinierter Durchführung und minimalem Betriebsausfall. Von der Startplanung 
              bis zur IT-Inbetriebnahme – alles aus einer Hand.
            </p>

            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: accent }}
            >
              Beratungstermin vereinbaren
            </Link>
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section padding="large" background="white">
        <Container size="default">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
            Warum BC Group für Ihren Firmenumzug?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div 
                  key={index}
                  className="p-6 rounded-2xl border-2 border-neutral-100 hover:border-amber-200 transition-all duration-300 hover:shadow-lg"
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
      <Section padding="large" className="bg-gradient-to-b from-white to-amber-50">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center">
              Unser Firmenumzug-Service umfasst
            </h2>
            
            <p className="text-lg text-neutral-700 mb-8 text-center">
              Wir bieten einen professionellen Full-Service für Ihren Büroumzug:
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-amber-100 hover:border-amber-300 transition-colors"
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
              So läuft Ihr Firmenumzug ab
            </h2>

            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div 
                  key={index}
                  className="flex gap-6 p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-white border border-amber-100"
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

      {/* Industry Experience */}
      <Section padding="large" className="bg-gradient-to-b from-white to-amber-50">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center">
              Erfahrung in verschiedenen Branchen
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-white border border-amber-100">
                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  IT & Tech-Unternehmen
                </h3>
                <p className="text-neutral-700">
                  Spezialisierter Umgang mit Servern, Netzwerktechnik und sensibler IT-Infrastruktur.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-amber-100">
                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  Anwaltskanzleien & Notare
                </h3>
                <p className="text-neutral-700">
                  Versicherter Transport vertraulicher Mandantenakten und Dokumentenarchive.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-amber-100">
                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  Arztpraxen & Medizin
                </h3>
                <p className="text-neutral-700">
                  Umzug medizinischer Geräte, Patientenakten und sensibler Laboreinrichtungen.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-amber-100">
                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  Kreativagenturen & Studios
                </h3>
                <p className="text-neutral-700">
                  Transport hochwertiger Technik, Kameras und empfindlicher Studioeinrichtung.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Pricing Info */}
      <Section padding="large" className="bg-gradient-to-br from-orange-900 to-amber-800 text-white">
        <Container size="default">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Investition in einen reibungslosen Umzug
            </h2>
            <p className="text-lg text-orange-100 mb-8 leading-relaxed">
              Die Kosten für einen Firmenumzug hängen von der Bürogröße, Anzahl der Arbeitsplätze, 
              IT-Komplexität und gewünschtem Zeitfenster ab. Wir erstellen nach einer Begehung ein 
              detailliertes Angebot mit allen Leistungen – transparent und fair kalkuliert.
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
