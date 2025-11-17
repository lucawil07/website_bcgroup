import { Metadata } from 'next'
import Link from 'next/link'
import { Container, Section } from '@/components/ui'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { CTAContact } from '@/components/sections'
import { ArrowUpRight, CheckCircle, Calendar, Shield, Sparkles, Building } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Treppenhausreinigung Berlin - Regelmäßig & Zuverlässig | BC Group',
  description: 'Professionelle Treppenhausreinigung in Berlin. Regelmäßige und gründliche Reinigung von Treppenhäusern und Gemeinschaftsbereichen. Wöchentlich buchbar, diskret, effizient.',
  keywords: 'treppenhausreinigung berlin, treppenhaus reinigen, hausflur reinigung, gemeinschaftsbereich reinigung',
}

export default function TreppenhausreinigungPage() {
  const accent = '#06b6d4'

  const benefits = [
    {
      icon: Calendar,
      title: 'Regelmäßige Termine',
      description: 'Wöchentliche oder 14-tägige Reinigung nach festem Zeitplan für dauerhaft gepflegte Treppenhäuser',
    },
    {
      icon: Shield,
      title: 'Diskret & Effizient',
      description: 'Unauffällige Arbeitsweise während Mieter-freundlicher Zeiten ohne Störung',
    },
    {
      icon: Sparkles,
      title: 'Umfassende Reinigung',
      description: 'Von Stufen bis Handläufe, Fensterbänke bis Briefkästen - wir reinigen alles gründlich',
    },
  ]

  const services = [
    'Treppen: Stufen, Geländer & Handläufe',
    'Podeste & Zwischenabsätze',
    'Eingangsbereiche & Windfänge',
    'Briefkastenanlagen & Klingeltableaus',
    'Lichtschalter & Fenster',
    'Kellerzugänge & Aufzüge (optional)',
  ]

  const buildingTypes = [
    {
      title: 'Wohngebäude',
      description: 'Mehrfamilienhäuser, Wohnanlagen und Wohnungseigentümergemeinschaften',
      icon: '🏢',
    },
    {
      title: 'Gewerbeobjekte',
      description: 'Bürogebäude, Praxishäuser und gemischt genutzte Immobilien',
      icon: '🏛️',
    },
    {
      title: 'Altbauten',
      description: 'Historische Gebäude mit besonderen Anforderungen und Materialien',
      icon: '🏰',
    },
    {
      title: 'Neubauten',
      description: 'Moderne Wohnanlagen mit hochwertigen Oberflächen und Designelementen',
      icon: '🏗️',
    },
  ]

  const process = [
    {
      step: '1',
      title: 'Objektbesichtigung',
      description: 'Wir besichtigen Ihr Treppenhaus: Anzahl Etagen, Belagsart, besondere Verschmutzungen und gewünschte Leistungen.',
    },
    {
      step: '2',
      title: 'Individuelles Angebot',
      description: 'Sie erhalten ein transparentes Festpreisangebot mit Reinigungsintervall (wöchentlich, 14-tägig oder monatlich).',
    },
    {
      step: '3',
      title: 'Terminvereinbarung',
      description: 'Wir legen gemeinsam feste Reinigungstage und -uhrzeiten fest, die zu Ihren Mietern passen.',
    },
    {
      step: '4',
      title: 'Zuverlässige Durchführung',
      description: 'Regelmäßige professionelle Reinigung durch geschultes Personal - pünktlich und in gleichbleibend hoher Qualität.',
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
              { label: 'Treppenhausreinigung' },
            ]}
            accentColor={accent}
          />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-cyan-100 border border-cyan-200">
              <ArrowUpRight className="w-4 h-4 text-cyan-700" />
              <span className="text-sm font-bold uppercase tracking-wider text-cyan-900">
                Treppenhausreinigung
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-neutral-900 leading-tight">
              Professionelle Treppenhausreinigung in Berlin
            </h1>

            <p className="text-xl text-neutral-700 leading-relaxed mb-8">
              Regelmäßige und gründliche Reinigung von Treppenhäusern und Gemeinschaftsbereichen. 
              Wöchentlich buchbar, diskret durchgeführt und zuverlässig - für dauerhaft gepflegte Wohnanlagen.
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
            Warum BC Group für Ihre Treppenhausreinigung?
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

      {/* Building Types Grid */}
      <Section padding="large" className="bg-gradient-to-b from-white to-cyan-50">
        <Container size="default">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center">
            Wir reinigen alle Gebäudetypen
          </h2>
          
          <p className="text-lg text-neutral-700 mb-12 text-center max-w-2xl mx-auto">
            Vom kleinen Wohnhaus bis zum Hochhaus - wir passen unsere Reinigung an Ihre Immobilie an:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {buildingTypes.map((type, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-white border border-cyan-100 hover:border-cyan-300 transition-all duration-300 hover:shadow-lg"
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
              Was umfasst unsere Treppenhausreinigung?
            </h2>
            
            <p className="text-lg text-neutral-700 mb-8 text-center">
              Umfassende Reinigung aller Bereiche für ein gepflegtes Erscheinungsbild:
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
          </div>
        </Container>
      </Section>

      {/* Process Section */}
      <Section padding="large" className="bg-gradient-to-b from-white to-cyan-50">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
              So starten wir mit Ihrer Treppenhausreinigung
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
              <Building className="w-12 h-12" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Der erste Eindruck zählt
              </h2>
            </div>
            <p className="text-lg text-cyan-100 mb-6 leading-relaxed text-center">
              Das Treppenhaus ist die Visitenkarte Ihrer Immobilie. Ein sauberes, gepflegtes Treppenhaus steigert 
              nicht nur die Wohnqualität für Ihre Mieter, sondern auch den Wert Ihrer Immobilie. Unsere regelmäßige 
              professionelle Reinigung sorgt dafür, dass Ihr Gebäude stets einen positiven ersten Eindruck macht.
            </p>
            <div className="text-center">
              <Link 
                href="/kontakt"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-cyan-900 bg-white hover:bg-cyan-50 transition-all duration-300 hover:scale-105 shadow-lg"
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
