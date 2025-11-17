import { Metadata } from 'next'
import Link from 'next/link'
import { Container, Section } from '@/components/ui'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { CTAContact } from '@/components/sections'
import { Wrench, CheckCircle, Recycle, TrendingUp, Layers } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Selektive Demontage Berlin - Ressourcenschonend & Effizient | BC Group',
  description: 'Fachgerechte selektive Demontage in Berlin mit Rückgewinnung wertvoller Materialien. Nachhaltig, ressourcenschonend und optimal für Recycling.',
  keywords: 'selektive demontage berlin, rückbau berlin, material recycling, nachhaltige demontage, ressourcenschonend',
}

export default function SelektiveDemontagePage() {
  const accent = '#d97706'

  const benefits = [
    {
      icon: Recycle,
      title: 'Material-Recycling',
      description: 'Systematische Trennung und Rückgewinnung wertvoller Materialien für maximale Wiederverwertung',
    },
    {
      icon: TrendingUp,
      title: 'Ressourcenschonung',
      description: 'Nachhaltige Demontage mit Fokus auf Wiederverwendung und Reduzierung von Abfall',
    },
    {
      icon: Layers,
      title: 'Optimale Verwertung',
      description: 'Fachgerechte Sortierung nach Materialtypen für bestmögliche Verwertungswege',
    },
  ]

  const materials = [
    'Metalle (Stahl, Kupfer, Aluminium)',
    'Holzkonstruktionen und Balken',
    'Ziegel und Betonsteine',
    'Dachziegel und Dachkonstruktionen',
    'Fenster und Türelemente',
    'Sanitär- und Heizungsinstallationen',
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
              { label: 'Selektive Demontage' },
            ]}
            accentColor={accent}
          />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-amber-100 border border-amber-200">
              <Wrench className="w-4 h-4 text-amber-700" />
              <span className="text-sm font-bold uppercase tracking-wider text-amber-900">
                Selektive Demontage
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-neutral-900 leading-tight">
              Selektive Demontage in Berlin
            </h1>

            <p className="text-xl text-neutral-700 leading-relaxed mb-8">
              Fachgerechte Demontage mit Rückgewinnung wertvoller Materialien. 
              Wir zerlegen Gebäude systematisch und sortieren alle Materialien für optimales Recycling und Wiederverwendung. 
              Nachhaltig, ressourcenschonend und wirtschaftlich sinnvoll.
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
            Warum selektive Demontage?
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

      {/* Materials Section */}
      <Section padding="large" className="bg-gradient-to-b from-white to-amber-50">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center">
              Welche Materialien gewinnen wir zurück?
            </h2>
            
            <p className="text-lg text-neutral-700 mb-8 text-center">
              Bei der selektiven Demontage trennen wir alle Materialien sorgfältig und bereiten sie für die Wiederverwertung auf:
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {materials.map((material, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-amber-100 hover:border-amber-300 transition-colors"
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: accent }} />
                  <span className="text-neutral-800 font-medium">{material}</span>
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
              Unser Demontage-Prozess
            </h2>

            <div className="space-y-6">
              {[
                {
                  step: '1',
                  title: 'Detaillierte Analyse',
                  description: 'Genaue Untersuchung des Gebäudes und Identifikation verwertbarer Materialien. Erstellung eines Demontage- und Verwertungskonzepts.',
                },
                {
                  step: '2',
                  title: 'Schadstoffsanierung',
                  description: 'Falls erforderlich: Fachgerechte Entfernung von Schadstoffen wie Asbest vor Beginn der Demontage.',
                },
                {
                  step: '3',
                  title: 'Systematische Demontage',
                  description: 'Schichtweiser Rückbau von innen nach außen mit sorgfältiger Trennung aller Materialarten.',
                },
                {
                  step: '4',
                  title: 'Material-Sortierung',
                  description: 'Präzise Sortierung in verschiedene Materialfraktionen: Metalle, Holz, Beton, Ziegel, Kunststoffe etc.',
                },
                {
                  step: '5',
                  title: 'Verwertung & Recycling',
                  description: 'Transport der sortierten Materialien zu spezialisierten Recyclinganlagen für optimale Wiederverwertung.',
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

      {/* Sustainability Focus */}
      <Section padding="large" className="bg-gradient-to-br from-amber-900 to-amber-700 text-white">
        <Container size="default">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nachhaltigkeit im Fokus
            </h2>
            <p className="text-lg text-amber-100 mb-8 leading-relaxed">
              Selektive Demontage ist der nachhaltigste Weg, ein Gebäude zurückzubauen. 
              Durch die systematische Trennung können bis zu 90% der Materialien recycelt oder wiederverwendet werden. 
              Das schont nicht nur die Umwelt, sondern reduziert auch Ihre Entsorgungskosten erheblich. 
              Wir arbeiten nach den neuesten Umweltstandards und dokumentieren die Verwertungswege transparent.
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
