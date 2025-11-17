import { Metadata } from 'next'
import Link from 'next/link'
import { Container, Section } from '@/components/ui'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { CTAContact } from '@/components/sections'
import { Film, CheckCircle, Zap, Users, Clock, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Kinoreinigung Berlin - Schnelle Saalreinigung zwischen Shows | BC Group',
  description: 'Professionelle Kinoreinigung in Berlin. Schnelle Kinosaalreinigung zwischen Vorstellungen und Tiefenreinigung. Zeiteffizient, gründlich, erfahren.',
  keywords: 'kinoreinigung berlin, kinosaal reinigung, cinema cleaning, theater reinigung, vorstellungsreinigung',
}

export default function KinoreinigungPage() {
  const accent = '#06b6d4'

  const benefits = [
    {
      icon: Zap,
      title: 'Zeiteffizient',
      description: 'Blitzschnelle Reinigung zwischen Vorstellungen ohne Verzögerung des Spielplans',
    },
    {
      icon: Users,
      title: 'Erfahrenes Team',
      description: 'Speziell geschultes Personal mit Erfahrung in Cinema-Betrieben',
    },
    {
      icon: Star,
      title: 'Gründliche Säuberung',
      description: 'Von Sitzbereichen bis Böden - wir hinterlassen einen makellosen Kinosaal',
    },
  ]

  const services = [
    'Express-Reinigung zwischen Shows',
    'Sitze, Armlehnen & Getränkehalter',
    'Gangflächen & Bodenbereiche',
    'Popcorn- & Essensreste-Entfernung',
    'Tiefenreinigung nach Tagesprogramm',
    'Sanitärbereiche & Foyer-Reinigung',
  ]

  const cinemaTypes = [
    {
      title: 'Multiplex-Kinos',
      description: 'Koordinierte Reinigung mehrerer Säle mit engen Zeitfenstern',
      icon: '🎬',
    },
    {
      title: 'Programmkinos',
      description: 'Individuelle Reinigungskonzepte für besondere Kinoerlebnisse',
      icon: '🎭',
    },
    {
      title: 'IMAX & Premium-Säle',
      description: 'Schonende Reinigung hochwertiger Ausstattung und Technik',
      icon: '⭐',
    },
    {
      title: 'Open-Air-Kinos',
      description: 'Flexible Outdoor-Reinigung für Sommerkino-Events',
      icon: '🌟',
    },
  ]

  const process = [
    {
      step: '1',
      title: 'Spielplan-Analyse',
      description: 'Wir analysieren Ihre Vorstellungszeiten und ermitteln optimale Reinigungsfenster zwischen den Shows.',
    },
    {
      step: '2',
      title: 'Maßgeschneiderter Reinigungsplan',
      description: 'Entwicklung eines zeitlich perfekt abgestimmten Plans: Express-Reinigung zwischen Filmen und Tiefenreinigung nachts.',
    },
    {
      step: '3',
      title: 'Team-Koordination',
      description: 'Einteilung flexibler Teams, die sich perfekt in Ihre Betriebsabläufe einfügen - ohne Verzögerungen.',
    },
    {
      step: '4',
      title: 'Zuverlässige Durchführung',
      description: 'Pünktliche, schnelle und gründliche Reinigung - täglich neu für perfekte Kinoerlebnisse Ihrer Gäste.',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <Section padding="large" className="relative overflow-hidden pt-32 pb-20 bg-gradient-to-br from-pink-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-900/5 via-transparent to-purple-600/5" />
        
        <Container size="default" className="relative z-10">
          <Breadcrumb 
            items={[
              { label: 'Services', href: '/#content-start' },
              { label: 'Reinigung', href: '/services/reinigung' },
              { label: 'Kinoreinigung' },
            ]}
            accentColor={accent}
          />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-pink-100 border border-pink-200">
              <Film className="w-4 h-4 text-pink-700" />
              <span className="text-sm font-bold uppercase tracking-wider text-pink-900">
                Kinoreinigung
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-neutral-900 leading-tight">
              Professionelle Kinoreinigung in Berlin
            </h1>

            <p className="text-xl text-neutral-700 leading-relaxed mb-8">
              Schnelle Kinosaalreinigung zwischen Vorstellungen und gründliche Tiefenreinigung nach Tagesschluss. 
              Zeiteffizient, gründlich und mit erfahrenem Team - für perfekte Kinoerlebnisse.
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
            Warum BC Group für Ihre Kinoreinigung?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div 
                  key={index}
                  className="p-6 rounded-2xl border-2 border-neutral-100 hover:border-pink-200 transition-all duration-300 hover:shadow-lg"
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

      {/* Cinema Types Grid */}
      <Section padding="large" className="bg-gradient-to-b from-white to-pink-50">
        <Container size="default">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center">
            Wir reinigen alle Kino-Formate
          </h2>
          
          <p className="text-lg text-neutral-700 mb-12 text-center max-w-2xl mx-auto">
            Vom kleinen Programmkino bis zum großen Multiplex - wir kennen die Herausforderungen:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {cinemaTypes.map((type, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-white border border-pink-100 hover:border-pink-300 transition-all duration-300 hover:shadow-lg"
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
              Unser Kinoreinigungs-Service
            </h2>
            
            <p className="text-lg text-neutral-700 mb-8 text-center">
              Von der Blitzreinigung bis zur Tiefenreinigung - wir decken alle Bereiche ab:
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-pink-50 to-white border border-pink-100 hover:border-pink-300 transition-colors"
                >
                  <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: accent }} />
                  <span className="text-neutral-800 font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Process Section */}
      <Section padding="large" className="bg-gradient-to-b from-white to-pink-50">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
              So starten wir mit Ihrer Kinoreinigung
            </h2>

            <div className="space-y-6">
              {process.map((step, index) => (
                <div 
                  key={index}
                  className="flex gap-6 p-6 rounded-2xl bg-white border border-pink-100"
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
      <Section padding="large" className="bg-gradient-to-br from-pink-900 to-purple-700 text-white">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Clock className="w-12 h-12" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Jede Minute zählt
              </h2>
            </div>
            <p className="text-lg text-pink-100 mb-6 leading-relaxed text-center">
              Zwischen zwei Vorstellungen bleiben oft nur 15-20 Minuten. In dieser Zeit müssen mehrere hundert Sitze 
              gereinigt, Böden gesaugt und alles für die nächsten Gäste vorbereitet werden. Unser eingespieltes Team 
              arbeitet schnell, leise und äußerst effizient - damit Ihr Spielplan läuft wie geplant!
            </p>
            <div className="text-center">
              <Link 
                href="/kontakt"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-pink-900 bg-white hover:bg-pink-50 transition-all duration-300 hover:scale-105 shadow-lg"
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
