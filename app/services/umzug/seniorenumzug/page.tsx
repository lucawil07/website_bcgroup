import { Metadata } from 'next'
import Link from 'next/link'
import { Container, Section } from '@/components/ui'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { CTAContact } from '@/components/sections'
import { Users, CheckCircle, Heart, Clock, Shield, HandHeart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Seniorenumzug Berlin - Einfühlsamer Umzugsservice | BC Group',
  description: 'Seniorenumzug in Berlin: Einfühlsam, rücksichtsvoll und mit Extra-Zeit. Wir begleiten ältere Menschen beim Wohnungswechsel mit Beratung und Unterstützung.',
  keywords: 'seniorenumzug berlin, umzug senioren, altersgerechter umzug, betreutes wohnen umzug',
}

export default function SeniorenumzugPage() {
  const accent = '#f97316'

  const benefits = [
    {
      icon: Heart,
      title: 'Einfühlsames Team',
      description: 'Speziell geschulte Mitarbeiter mit viel Geduld und Verständnis für besondere Bedürfnisse',
    },
    {
      icon: Clock,
      title: 'Keine Hektik',
      description: 'Wir planen ausreichend Zeit ein und arbeiten in einem angenehmen, ruhigen Tempo',
    },
    {
      icon: HandHeart,
      title: 'Persönliche Betreuung',
      description: 'Beratung bei Entscheidungen, Hilfe beim Aussortieren und emotionale Unterstützung',
    },
  ]

  const services = [
    'Ausführliche Vorab-Beratung',
    'Unterstützung beim Aussortieren',
    'Sorgfältiges Verpacken persönlicher Gegenstände',
    'Demontage und Montage von Möbeln',
    'Behutsamer Transport aller Habseligkeiten',
    'Aufbau und Einrichtung in neuer Wohnung',
    'Entsorgung nicht benötigter Gegenstände',
    'Koordination mit Pflegediensten',
  ]

  const processSteps = [
    {
      step: '1',
      title: 'Persönliches Kennenlernen',
      description: 'Wir besuchen Sie zu Hause, lernen uns kennen und besprechen in Ruhe alle Ihre Wünsche und Sorgen. Dabei nehmen wir uns viel Zeit für Ihre Fragen.',
    },
    {
      step: '2',
      title: 'Gemeinsame Planung',
      description: 'Wir planen gemeinsam den Umzug, helfen beim Entscheiden was mitkommt und organisieren alle notwendigen Schritte. Nichts muss überstürzt werden.',
    },
    {
      step: '3',
      title: 'Behutsame Durchführung',
      description: 'Am Umzugstag arbeitet unser einfühlsames Team in einem angenehmen Tempo. Wir kümmern uns um alles und Sie können sich entspannen.',
    },
    {
      step: '4',
      title: 'Einrichtung & Begleitung',
      description: 'In der neuen Wohnung richten wir alles nach Ihren Wünschen ein. Wir nehmen uns Zeit, bis Sie sich wohlfühlen und alles an seinem Platz ist.',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <Section padding="large" className="relative overflow-hidden pt-32 pb-20 bg-gradient-to-br from-orange-50 via-amber-50 to-white">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/5 via-transparent to-amber-600/5" />
        
        <Container size="default" className="relative z-10">
          <Breadcrumb 
            items={[
              { label: 'Services', href: '/#content-start' },
              { label: 'Umzug', href: '/services/umzug' },
              { label: 'Seniorenumzug' },
            ]}
            accentColor={accent}
          />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-orange-100 border border-orange-200">
              <Users className="w-4 h-4 text-orange-700" />
              <span className="text-sm font-bold uppercase tracking-wider text-orange-900">
                Seniorenumzug
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-neutral-900 leading-tight">
              Einfühlsamer Seniorenumzug in Berlin
            </h1>

            <p className="text-xl text-neutral-700 leading-relaxed mb-8">
              Ein Umzug im Alter ist oft eine große Herausforderung. Wir begleiten Sie mit Geduld, 
              Verständnis und viel Zeit. Ob in eine kleinere Wohnung, betreutes Wohnen oder Pflegeheim – 
              wir sorgen für einen schonenden und rücksichtsvollen Ablauf.
            </p>

            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: accent }}
            >
              Beratungsgespräch vereinbaren
            </Link>
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section padding="large" background="white">
        <Container size="default">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
            Was macht unseren Seniorenumzug besonders?
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

      {/* Services Overview */}
      <Section padding="large" className="bg-gradient-to-b from-white to-orange-50">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center">
              Unser Seniorenumzug-Service umfasst
            </h2>
            
            <p className="text-lg text-neutral-700 mb-8 text-center">
              Wir bieten einen umfassenden Service mit persönlicher Betreuung:
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-orange-100 hover:border-orange-300 transition-colors"
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
              So läuft Ihr Seniorenumzug ab
            </h2>

            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div 
                  key={index}
                  className="flex gap-6 p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-white border border-orange-100"
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

      {/* Special Considerations */}
      <Section padding="large" className="bg-gradient-to-b from-white to-orange-50">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center">
              Besondere Situationen, die wir verstehen
            </h2>
            
            <div className="space-y-4">
              <div className="p-6 rounded-xl bg-white border border-orange-100">
                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  Umzug ins betreute Wohnen
                </h3>
                <p className="text-neutral-700">
                  Wir helfen beim Übergang in eine kleinere Wohneinheit und koordinieren mit der 
                  Einrichtung. Dabei bewahren wir wichtige persönliche Gegenstände und schaffen 
                  eine vertraute Atmosphäre im neuen Zuhause.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-orange-100">
                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  Wohnungsverkleinerung
                </h3>
                <p className="text-neutral-700">
                  Der Abschied vom langjährigen Zuhause fällt schwer. Wir nehmen uns Zeit beim 
                  Aussortieren, helfen bei emotionalen Entscheidungen und finden würdevolle 
                  Lösungen für nicht mehr benötigte Gegenstände.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-orange-100">
                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  Zusammenarbeit mit Angehörigen
                </h3>
                <p className="text-neutral-700">
                  Gerne arbeiten wir eng mit Ihren Kindern oder anderen Familienangehörigen 
                  zusammen. So können Sie sich sicher fühlen und haben vertraute Menschen an 
                  Ihrer Seite.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Pricing Info */}
      <Section padding="large" className="bg-gradient-to-br from-orange-900 to-orange-700 text-white">
        <Container size="default">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Faire Preise für Seniorenumzüge
            </h2>
            <p className="text-lg text-orange-100 mb-8 leading-relaxed">
              Wir bieten faire Konditionen für Seniorenumzüge an. Die Kosten richten sich nach 
              dem Umfang, der Entfernung und gewünschten Zusatzleistungen. Nach einem persönlichen 
              Kennenlernen erstellen wir ein transparentes Angebot, das alle Leistungen umfasst.
            </p>
            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-orange-900 bg-white hover:bg-orange-50 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Jetzt Kontakt aufnehmen
            </Link>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTAContact />
    </>
  )
}
