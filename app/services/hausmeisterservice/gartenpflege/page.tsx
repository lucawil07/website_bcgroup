import { Metadata } from 'next'
import Link from 'next/link'
import { Container, Section } from '@/components/ui'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { CTAContact } from '@/components/sections'
import { Leaf, CheckCircle, Trees, Scissors, Sun, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Gartenpflege & Außenanlagen Berlin - Rasenmähen, Heckenschneiden | BC Group',
  description: 'Professionelle Gartenpflege in Berlin: Rasenmähen, Heckenschneiden, Unkrautentfernung und Außenanlagenpflege. Gepflegte Grünflächen durch BC Hausmeisterservice.',
  keywords: 'gartenpflege berlin, rasenmähen, heckenschneiden, außenanlagenpflege, grünflächenpflege, unkrautentfernung berlin',
}

export default function GartenpflegePage() {
  const accent = '#8b5cf6'

  const benefits = [
    {
      icon: Trees,
      title: 'Fachgerechte Pflege',
      description: 'Professionelle Gartenarbeit nach gärtnerischen Standards',
    },
    {
      icon: Sun,
      title: 'Saisonale Betreuung',
      description: 'Ganzjährige Pflege angepasst an die Jahreszeiten',
    },
    {
      icon: Shield,
      title: 'Naturschutz-konform',
      description: 'Beachtung aller gesetzlichen Bestimmungen (§ 39 BNatSchG)',
    },
  ]

  const gardenServices = [
    'Rasen mähen, vertikutieren & nachsähen',
    'Hecken schneiden & Formschnitt',
    'Unkraut entfernen & Beete pflegen',
    'Bepflanzung & saisonale Gestaltung',
    'Bewässerung & Pflanzenpflege',
    'Laubbeseitigung im Herbst',
    'Pflege von Grünflächen & Spielplätzen',
    'Reinigung von Wegen, Terrassen & Parkflächen',
  ]

  const seasonalTasks = [
    {
      season: 'Frühjahr',
      icon: Sun,
      tasks: ['Frühjahrsschnitt', 'Beete vorbereiten', 'Erste Rasenarbeiten', 'Neue Bepflanzung'],
      color: 'from-green-400 to-emerald-500',
    },
    {
      season: 'Sommer',
      icon: Trees,
      tasks: ['Regelmäßiges Rasenmähen', 'Bewässerung', 'Unkrautbekämpfung', 'Formschnitte'],
      color: 'from-green-500 to-teal-600',
    },
    {
      season: 'Herbst',
      icon: Leaf,
      tasks: ['Laubbeseitigung', 'Heckenschnitt', 'Wintervorbereitung', 'Letzte Rasenpflege'],
      color: 'from-amber-500 to-orange-600',
    },
    {
      season: 'Winter',
      icon: Scissors,
      tasks: ['Winterschnitt', 'Schutz empfindlicher Pflanzen', 'Schneeräumung', 'Gehölzpflege'],
      color: 'from-blue-400 to-cyan-500',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <Section padding="large" className="relative overflow-hidden pt-32 pb-20 bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <div className="absolute inset-0 bg-gradient-to-br from-green-800/5 via-transparent to-emerald-600/5" />
        
        <Container size="default" className="relative z-10">
          <Breadcrumb 
            items={[
              { label: 'Services', href: '/#content-start' },
              { label: 'Hausmeisterservice', href: '/services/hausmeisterservice' },
              { label: 'Gartenpflege' },
            ]}
            accentColor={accent}
          />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-green-100 border border-green-200">
              <Leaf className="w-4 h-4 text-green-700" />
              <span className="text-sm font-bold uppercase tracking-wider text-green-900">
                Außen- & Gartenpflege
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-neutral-900 leading-tight">
              Garten&shy;pflege & Außen&shy;anlagen in Berlin
            </h1>

            <p className="text-xl text-neutral-700 leading-relaxed mb-8">
              Ein gepflegter Außenbereich ist die Visitenkarte jeder Immobilie. Wir kümmern uns 
              professionell um Grünflächen und Außenanlagen – ganzjährig und naturschutzgerecht.
            </p>

            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: accent }}
            >
              Gartenpflege anfragen
            </Link>
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section padding="large" background="white">
        <Container size="default">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
            Professionelle Außenanlagenpflege
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div 
                  key={index}
                  className="p-6 rounded-2xl border-2 border-neutral-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg"
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

      {/* Garden Services */}
      <Section padding="large" className="bg-gradient-to-b from-white to-green-50">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center">
              Unsere Gartenpflege-Leistungen
            </h2>
            
            <p className="text-lg text-neutral-700 mb-8 text-center">
              Wir bieten umfassende Gartenpflege für Wohnanlagen, Gewerbeobjekte und öffentliche Einrichtungen:
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {gardenServices.map((service, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-green-100 hover:border-green-300 transition-colors"
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: accent }} />
                  <span className="text-neutral-800 font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Seasonal Tasks */}
      <Section padding="large" background="white">
        <Container size="default">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 text-center">
              Gartenpflege im Jahresverlauf
            </h2>
            <p className="text-lg text-neutral-600 mb-12 text-center">
              Unsere Leistungen orientieren sich an den Jahreszeiten und den Bedürfnissen Ihrer Grünflächen
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {seasonalTasks.map((season, index) => {
                const Icon = season.icon
                return (
                  <div 
                    key={index}
                    className="p-6 rounded-2xl bg-gradient-to-br from-white to-green-50 border-2 border-green-100 hover:border-green-300 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${season.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-4">
                      {season.season}
                    </h3>
                    <ul className="space-y-2">
                      {season.tasks.map((task, tidx) => (
                        <li key={tidx} className="flex items-start gap-2 text-sm text-neutral-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* Details Section */}
      <Section padding="large" className="bg-gradient-to-b from-white to-green-50">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
              Naturschutz & gesetzliche Vorgaben
            </h2>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-white border border-green-100">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  Schutz von Brutvögeln (§ 39 BNatSchG)
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Zwischen dem 1. März und 30. September ist ein radikaler Heckenschnitt zum Schutz brütender 
                  Vögel verboten. Wir beachten diese Schnittzeiten gewissenhaft und führen in dieser Zeit nur 
                  schonende Formschnitte durch. Alle größeren Rückschnitte planen wir außerhalb der Brutzeit.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-green-100">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  Umweltgerechte Entsorgung
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Grünschnitt, Laub und Gartenabfälle entsorgen wir fachgerecht über zugelassene Entsorgungsbetriebe 
                  oder Kompostieranlagen. Chemische Unkrautvernichter setzen wir nur nach Absprache ein – wo möglich, 
                  bevorzugen wir mechanische oder biologische Alternativen.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-green-100">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  Spielplätze & Verkehrssicherheit
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Bei der Pflege von Spielplätzen und öffentlichen Flächen achten wir besonders auf die 
                  Verkehrssicherheit. Wir entfernen Gefahrenquellen wie überhängende Äste, prüfen den Zustand 
                  von Zäunen und sorgen für freie Sichtachsen an Zugangswegen.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section padding="large" className="bg-gradient-to-br from-green-900 to-emerald-800 text-white">
        <Container size="default">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ihr Garten in besten Händen
            </h2>
            <p className="text-lg text-green-100 mb-8 leading-relaxed">
              Lassen Sie uns die Pflege Ihrer Außenanlagen übernehmen. Wir erstellen Ihnen ein 
              individuelles Pflegekonzept – abgestimmt auf Ihre Grünflächen und Ihr Budget.
            </p>
            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-green-900 bg-white hover:bg-green-50 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Kostenlose Gartenberatung
            </Link>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTAContact />
    </>
  )
}
