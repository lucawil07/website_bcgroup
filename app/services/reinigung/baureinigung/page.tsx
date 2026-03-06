import { Metadata } from 'next'
import Link from 'next/link'
import { Container, Section } from '@/components/ui'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { CTAContact } from '@/components/sections'
import { HardHat, CheckCircle, Shield, Sparkles, Wrench, CheckCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Baureinigung Berlin - Endreinigung nach Bau & Renovierung | BC Group',
  description: 'Professionelle Baureinigung in Berlin. Gründliche Endreinigung nach Bau- und Renovierungsarbeiten. Baustaubentfernung, Feinreinigung, abnahmebereit.',
  keywords: 'baureinigung berlin, endreinigung, bauendreinigung, bauschlussreinigung, renovierungsreinigung',
}

export default function BaureinigungPage() {
  const accent = '#06b6d4'

  const benefits = [
    {
      icon: Shield,
      title: 'Baustaubentfernung',
      description: 'Gründliche Entfernung von Baustaub, Zementschleiern und Handwerkerspuren',
    },
    {
      icon: Sparkles,
      title: 'Feinreinigung',
      description: 'Detaillierte Reinigung aller Oberflächen, Fenster und schwer zugänglichen Bereiche',
    },
    {
      icon: CheckCheck,
      title: 'Abnahmebereit',
      description: 'Übergabefähiger Zustand für Bauabnahme, Bezug oder Vermietung',
    },
  ]

  const services = [
    'Grobe Bauschutt-Beseitigung',
    'Fein-Baureinigung aller Räume',
    'Fenster, Rahmen & Fensterbänke',
    'Entfernung von Farb- & Kleberesten',
    'Boden-Grundreinigung & Versiegelung',
    'Sanitäranlagen & Armaturen',
  ]

  const projectTypes = [
    {
      title: 'Neubauten',
      description: 'Erstbezugsreinigung für neu errichtete Wohn- und Gewerbeimmobilien',
      icon: '🏗️',
    },
    {
      title: 'Renovierungen',
      description: 'Endreinigung nach Teil- oder Komplettsanierung von Bestandsobjekten',
      icon: '🔨',
    },
    {
      title: 'Umbau-Projekte',
      description: 'Reinigung nach Umbaumaßnahmen in bewohnten oder genutzten Gebäuden',
      icon: '⚒️',
    },
    {
      title: 'Sanierungen',
      description: 'Spezialreinigung nach Denkmal- oder Altbausanierungen',
      icon: '🏛️',
    },
  ]

  const process = [
    {
      step: '1',
      title: 'Baustellenbesichtigung',
      description: 'Wir begutachten die Baustelle und den Verschmutzungsgrad: Baustaub, Handwerkerspuren, besondere Anforderungen.',
    },
    {
      step: '2',
      title: 'Individuelles Reinigungskonzept',
      description: 'Erstellung eines detaillierten Plans mit allen erforderlichen Reinigungsschritten und transparentem Festpreis.',
    },
    {
      step: '3',
      title: 'Koordination mit Gewerken',
      description: 'Abstimmung mit Ihren Handwerkern und Bauverantwortlichen für optimale Terminplanung.',
    },
    {
      step: '4',
      title: 'Professionelle Durchführung',
      description: 'Mehrstufige Reinigung von grob bis fein - bis zur schlüsselfertigen Übergabe oder Bauabnahme.',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <Section padding="none" className="relative overflow-hidden pt-6 pb-20 bg-gradient-to-br from-orange-50 via-white to-red-50">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/5 via-transparent to-red-600/5" />
        
        <Container size="default" className="relative z-10">
          <Breadcrumb 
            items={[
              { label: 'Services', href: '/#content-start' },
              { label: 'Reinigung', href: '/services/reinigung' },
              { label: 'Baureinigung' },
            ]}
            accentColor={accent}
            variant="inline"
          />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-orange-100 border border-orange-200">
              <HardHat className="w-4 h-4 text-orange-700" />
              <span className="text-sm font-bold uppercase tracking-wider text-orange-900">
                Baureinigung
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-neutral-900 leading-tight">
              Professionelle Baureinigung in Berlin
            </h1>

            <p className="text-xl text-neutral-700 leading-relaxed mb-8">
              Gründliche Endreinigung nach Bau- und Renovierungsarbeiten. Wir entfernen Baustaub, Handwerkerspuren 
              und bereiten Ihre Immobilie abnahmebereit vor - für einen perfekten Abschluss Ihres Bauprojekts.
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
            Warum BC Group für Ihre Baureinigung?
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

      {/* Project Types Grid */}
      <Section padding="large" className="bg-gradient-to-b from-white to-orange-50">
        <Container size="default">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center">
            Wir reinigen alle Bauprojekte
          </h2>
          
          <p className="text-lg text-neutral-700 mb-12 text-center max-w-2xl mx-auto">
            Von der kleinen Renovierung bis zum Großprojekt - wir haben die Erfahrung:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {projectTypes.map((type, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-white border border-orange-100 hover:border-orange-300 transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {type.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Services Overview */}
      <Section padding="large" background="white">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center">
              Was umfasst unsere Baureinigung?
            </h2>
            
            <p className="text-lg text-neutral-700 mb-8 text-center">
              Mehrstufiger Reinigungsprozess für perfekte Ergebnisse:
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-orange-50 to-white border border-orange-100 hover:border-orange-300 transition-colors"
                >
                  <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: accent }} />
                  <span className="text-neutral-800 font-medium">{service}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200">
              <p className="text-neutral-700 leading-relaxed text-center">
                <strong className="text-orange-900">Wichtig:</strong> Die Baureinigung erfolgt in mehreren Durchgängen - 
                von der groben Bauschutt-Beseitigung bis zur finalen Feinreinigung. Wir passen den Umfang an Ihre 
                Anforderungen an.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Process Section */}
      <Section padding="large" className="bg-gradient-to-b from-white to-orange-50">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
              So läuft Ihre Baureinigung ab
            </h2>

            <div className="space-y-6">
              {process.map((step, index) => (
                <div 
                  key={index}
                  className="flex gap-6 p-6 rounded-2xl bg-white border border-orange-100"
                >
                  <div 
                    className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg"
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
      <Section padding="large" className="bg-gradient-to-br from-orange-900 to-red-700 text-white">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Wrench className="w-12 h-12" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Der letzte Schliff für Ihr Projekt
              </h2>
            </div>
            <p className="text-lg text-orange-100 mb-6 leading-relaxed text-center">
              Nach Monaten Bauzeit ist die professionelle Baureinigung der krönende Abschluss. Sie verwandelt 
              eine staubige Baustelle in eine bezugsfertige Immobilie. Ob für die Bauabnahme, den Erstbezug oder 
              die Vermietung - mit unserer gründlichen Endreinigung präsentiert sich Ihr Projekt von seiner besten Seite.
            </p>
            <div className="text-center">
              <Link 
                href="/kontakt"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-orange-900 bg-white hover:bg-orange-50 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Jetzt Angebot einholen
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
