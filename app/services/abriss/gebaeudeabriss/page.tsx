import { Metadata } from 'next'
import Link from 'next/link'
import { Container, Section } from '@/components/ui'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { CTAContact } from '@/components/sections'
import { Building2, CheckCircle, Shield, Clock, Recycle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Gebäudeabriss Berlin - Professionell & Sicher | BC Group',
  description: 'Professioneller Gebäudeabriss in Berlin. Kompletter Abriss von Wohnhäusern, Mehrfamilienhäusern und Bürogebäuden. Sicher, nachhaltig und mit allen Genehmigungen.',
  keywords: 'gebäudeabriss berlin, haus abriss berlin, gebäude abriss, abbruch berlin, abrissunternehmen',
}

export default function GebaeudeabrissPage() {
  const accent = '#d97706'

  const benefits = [
    {
      icon: Shield,
      title: 'Höchste Sicherheitsstandards',
      description: 'Umfassende Sicherheitsmaßnahmen für Menschen und Umgebung während des gesamten Abrissprozesses',
    },
    {
      icon: Clock,
      title: 'Termingerechte Durchführung',
      description: 'Präzise Planung und Umsetzung mit klar definierten Zeitfenstern und transparenten Zeitplänen',
    },
    {
      icon: Recycle,
      title: 'Umweltgerechte Entsorgung',
      description: 'Fachgerechte Trennung und Recycling aller Abrissmaterialien nach neuesten Umweltstandards',
    },
  ]

  const buildingTypes = [
    'Einfamilienhäuser und Villen',
    'Mehrfamilienhäuser und Wohnanlagen',
    'Bürogebäude und Gewerbeobjekte',
    'Industriehallen und Lagerbauten',
    'Garagen und Nebengebäude',
    'Alte und denkmalgeschützte Gebäude',
  ]

  return (
    <>
      {/* Hero Section */}
      <Section padding="large" className="relative overflow-hidden pt-32 pb-20 bg-gradient-to-br from-amber-50 via-white to-orange-50">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/5 via-transparent to-amber-600/5" />
        
        <Container size="default" className="relative z-10">
          <Breadcrumb 
            items={[
              { label: 'Services', href: '/#content-start' },
              { label: 'Abriss', href: '/services/abriss' },
              { label: 'Gebäudeabriss' },
            ]}
            accentColor={accent}
          />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-amber-100 border border-amber-200">
              <Building2 className="w-4 h-4 text-amber-700" />
              <span className="text-sm font-bold uppercase tracking-wider text-amber-900">
                Gebäudeabriss
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-neutral-900 leading-tight">
              Kompletter Gebäudeabriss in Berlin
            </h1>

            <p className="text-xl text-neutral-700 leading-relaxed mb-8">
              Professioneller Abriss von Wohnhäusern, Mehrfamilienhäusern und Bürogebäuden. 
              Mit modernster Technik, höchsten Sicherheitsstandards und umweltgerechter Entsorgung setzen wir Ihr Abrissvorhaben sicher und termingerecht um.
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

      {/* Building Types */}
      <Section padding="large" className="bg-gradient-to-b from-white to-amber-50">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center">
              Welche Gebäude reißen wir ab?
            </h2>
            
            <p className="text-lg text-neutral-700 mb-8 text-center">
              Wir übernehmen den professionellen Abriss aller Gebäudetypen. 
              Von kleinen Einfamilienhäusern bis zu großen Gewerbeobjekten:
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {buildingTypes.map((type, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-amber-100 hover:border-amber-300 transition-colors"
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: accent }} />
                  <span className="text-neutral-800 font-medium">{type}</span>
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
              So läuft Ihr Gebäudeabriss ab
            </h2>

            <div className="space-y-6">
              {[
                {
                  step: '1',
                  title: 'Begutachtung & Planung',
                  description: 'Detaillierte Begutachtung vor Ort, Prüfung der Bausubstanz und Erstellung eines präzisen Abrisskonzepts mit Kostenvoranschlag.',
                },
                {
                  step: '2',
                  title: 'Genehmigungen einholen',
                  description: 'Wir kümmern uns um alle erforderlichen Genehmigungen und Anmeldungen bei den zuständigen Behörden.',
                },
                {
                  step: '3',
                  title: 'Sicherheitsmaßnahmen',
                  description: 'Absperrung der Baustelle, Staubschutz, Lärmschutz und alle notwendigen Sicherheitsvorkehrungen werden getroffen.',
                },
                {
                  step: '4',
                  title: 'Kontrollierter Abriss',
                  description: 'Professioneller Abriss mit modernsten Maschinen und geschultem Personal unter ständiger Überwachung.',
                },
                {
                  step: '5',
                  title: 'Entsorgung & Recycling',
                  description: 'Fachgerechte Trennung und Entsorgung aller Materialien mit maximalem Recycling-Anteil gemäß Umweltvorschriften.',
                },
              ].map((step, index) => (
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

      {/* Safety & Environment */}
      <Section padding="large" className="bg-gradient-to-br from-amber-900 to-amber-700 text-white">
        <Container size="default">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Sicherheit & Umweltschutz
            </h2>
            <p className="text-lg text-amber-100 mb-8 leading-relaxed">
              Bei jedem Abriss steht die Sicherheit aller Beteiligten an erster Stelle. 
              Wir arbeiten nach den neuesten Sicherheitsstandards und achten auf maximalen Umweltschutz. 
              Alle Materialien werden fachgerecht sortiert und soweit möglich recycelt. 
              Unser erfahrenes Team garantiert einen reibungslosen, sauberen und sicheren Ablauf.
            </p>
            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-amber-900 bg-white hover:bg-amber-50 transition-all duration-300 hover:scale-105 shadow-lg"
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
