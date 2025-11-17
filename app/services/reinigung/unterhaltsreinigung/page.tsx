import { Metadata } from 'next'
import Link from 'next/link'
import { Container, Section } from '@/components/ui'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { CTAContact } from '@/components/sections'
import { Clock, CheckCircle, TrendingUp, Shield, Award, CalendarCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Unterhaltsreinigung Berlin - Professionelle Dauerpflege | BC Group',
  description: 'Professionelle Unterhaltsreinigung in Berlin. Regelmäßige Reinigung für langfristig gepflegte Räumlichkeiten. Flexibel planbar, kontinuierliche Qualität, kosteneffizient.',
  keywords: 'unterhaltsreinigung berlin, regelmäßige reinigung, dauerreinigung, objektreinigung, facility service',
}

export default function UnterhaltsreinigungPage() {
  const accent = '#06b6d4'

  const benefits = [
    {
      icon: CalendarCheck,
      title: 'Flexibel Planbar',
      description: 'Individuelle Reinigungsintervalle: täglich, wöchentlich, monatlich - passend zu Ihrem Bedarf',
    },
    {
      icon: Award,
      title: 'Kontinuierliche Qualität',
      description: 'Gleichbleibend hohe Reinigungsstandards durch geschultes Stammpersonal',
    },
    {
      icon: TrendingUp,
      title: 'Kosteneffizient',
      description: 'Langfristige Verträge zu fairen Konditionen - günstiger als Einzelreinigungen',
    },
  ]

  const services = [
    'Bodenreinigung & -pflege',
    'Sanitäranlagen & Nassräume',
    'Büro- & Arbeitsflächen',
    'Gemeinschaftsbereiche & Flure',
    'Fenster & Glasflächen',
    'Müllentsorgung & Recycling',
  ]

  const intervals = [
    {
      title: 'Tägliche Reinigung',
      description: 'Ideal für stark frequentierte Büros, Praxen und Geschäftsräume',
      frequency: 'Montag - Freitag',
      bestFor: 'Büros, Praxen, Geschäfte',
    },
    {
      title: 'Wöchentliche Reinigung',
      description: 'Perfekt für Treppenhäuser, kleine Büros und Gemeinschaftsflächen',
      frequency: '1-2x pro Woche',
      bestFor: 'Treppenhäuser, Coworking',
    },
    {
      title: '14-tägige Reinigung',
      description: 'Optimal für Wohngebäude und wenig frequentierte Bereiche',
      frequency: 'Alle 2 Wochen',
      bestFor: 'Wohnanlagen, Archive',
    },
    {
      title: 'Monatliche Reinigung',
      description: 'Grundpflege für Lagerräume und gering genutzte Flächen',
      frequency: '1x pro Monat',
      bestFor: 'Lager, Keller, Dachböden',
    },
  ]

  const process = [
    {
      step: '1',
      title: 'Bedarfsermittlung',
      description: 'Wir analysieren Ihre Räumlichkeiten und Nutzung: Größe, Frequentierung, besondere Anforderungen und gewünschtes Reinigungsintervall.',
    },
    {
      step: '2',
      title: 'Individuelles Konzept',
      description: 'Entwicklung eines maßgeschneiderten Reinigungsplans mit Leistungsumfang, Zeitfenstern und transparentem Festpreis.',
    },
    {
      step: '3',
      title: 'Vertragliche Vereinbarung',
      description: 'Flexible Vertragslaufzeiten mit fairen Konditionen. Sie können jederzeit Leistungen anpassen oder erweitern.',
    },
    {
      step: '4',
      title: 'Kontinuierliche Betreuung',
      description: 'Regelmäßige Reinigung durch Ihr festes Reinigungsteam. Qualitätskontrollen und persönlicher Ansprechpartner inklusive.',
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
              { label: 'Unterhaltsreinigung' },
            ]}
            accentColor={accent}
          />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-cyan-100 border border-cyan-200">
              <Clock className="w-4 h-4 text-cyan-700" />
              <span className="text-sm font-bold uppercase tracking-wider text-cyan-900">
                Unterhaltsreinigung
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-neutral-900 leading-tight">
              Professionelle Unterhaltsreinigung in Berlin
            </h1>

            <p className="text-xl text-neutral-700 leading-relaxed mb-8">
              Regelmäßige professionelle Reinigung für langfristig gepflegte Räumlichkeiten. Flexibel planbar 
              mit kontinuierlicher Qualität und kosteneffizient - Ihr Partner für dauerhaft saubere Objekte.
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
            Vorteile der Unterhaltsreinigung
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

      {/* Intervals Grid */}
      <Section padding="large" className="bg-gradient-to-b from-white to-cyan-50">
        <Container size="default">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center">
            Wählen Sie Ihr Reinigungsintervall
          </h2>
          
          <p className="text-lg text-neutral-700 mb-12 text-center max-w-2xl mx-auto">
            Wir passen die Reinigungshäufigkeit an Ihre Anforderungen und Ihr Budget an:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {intervals.map((interval, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-white border border-cyan-100 hover:border-cyan-300 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-neutral-900">
                    {interval.title}
                  </h3>
                  <span 
                    className="px-3 py-1 rounded-full text-xs font-bold"
                    style={{ backgroundColor: `${accent}20`, color: accent }}
                  >
                    {interval.frequency}
                  </span>
                </div>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  {interval.description}
                </p>
                <div className="pt-4 border-t border-cyan-100">
                  <span className="text-sm text-neutral-500 font-medium">
                    Ideal für: {interval.bestFor}
                  </span>
                </div>
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
              Was umfasst die Unterhaltsreinigung?
            </h2>
            
            <p className="text-lg text-neutral-700 mb-8 text-center">
              Umfassende Reinigungsleistungen für dauerhaft gepflegte Objekte:
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-cyan-50 to-white border border-cyan-100 hover:border-cyan-300 transition-colors"
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: accent }} />
                  <span className="text-neutral-800 font-medium">{service}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200">
              <p className="text-neutral-700 leading-relaxed text-center">
                <strong className="text-cyan-900">Hinweis:</strong> Der Leistungsumfang wird individuell auf Ihre 
                Bedürfnisse zugeschnitten. Weitere Leistungen wie Fensterreinigung, Grünpflanzenpflege oder 
                Spezialreinigungen können jederzeit hinzugebucht werden.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Process Section */}
      <Section padding="large" className="bg-gradient-to-b from-white to-cyan-50">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
              So starten wir mit Ihrer Unterhaltsreinigung
            </h2>

            <div className="space-y-6">
              {process.map((step, index) => (
                <div 
                  key={index}
                  className="flex gap-6 p-6 rounded-2xl bg-white border border-cyan-100"
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
              <Shield className="w-12 h-12" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Prävention statt Sanierung
              </h2>
            </div>
            <p className="text-lg text-cyan-100 mb-6 leading-relaxed text-center">
              Regelmäßige Unterhaltsreinigung ist mehr als nur Sauberkeit - sie ist Werterhaltung. Durch kontinuierliche 
              Pflege vermeiden Sie teure Grundreinigungen und Sanierungen. Böden bleiben länger schön, Oberflächen länger 
              intakt und die Hygiene ist dauerhaft gewährleistet. Investieren Sie in die Pflege, nicht in die Reparatur!
            </p>
            <div className="text-center">
              <Link 
                href="/kontakt"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-cyan-900 bg-white hover:bg-cyan-50 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Jetzt Angebot anfordern
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
