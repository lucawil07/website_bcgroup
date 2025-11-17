import { Metadata } from 'next'
import Link from 'next/link'
import { Container, Section } from '@/components/ui'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { CTAContact } from '@/components/sections'
import { Wrench, CheckCircle, Lightbulb, Target, Users, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Spezialreinigung Berlin - Maßgeschneiderte Lösungen | BC Group',
  description: 'Professionelle Spezialreinigung in Berlin. Maßgeschneiderte Reinigungslösungen für individuelle Anforderungen. Flexibel, anfrage-basiert, professionell.',
  keywords: 'spezialreinigung berlin, sonderreinigung, individuelle reinigung, spezielle reinigung, maßgeschneiderte reinigung',
}

export default function SpezialreinigungPage() {
  const accent = '#06b6d4'

  const benefits = [
    {
      icon: Target,
      title: 'Maßgeschneidert',
      description: 'Individuelle Lösungen für besondere Anforderungen und spezielle Reinigungsaufgaben',
    },
    {
      icon: Lightbulb,
      title: 'Flexibel Einsetzbar',
      description: 'Von Einzelmaßnahmen bis zu regelmäßigen Spezialeinsätzen - wir finden die Lösung',
    },
    {
      icon: Users,
      title: 'Erfahrenes Team',
      description: 'Fachpersonal mit speziellen Kenntnissen und Ausrüstung für außergewöhnliche Aufgaben',
    },
  ]

  const specialServices = [
    {
      title: 'Industriereinigung',
      description: 'Reinigung von Produktionshallen, Maschinen und industriellen Anlagen',
      icon: '🏭',
      examples: ['Maschinenhallen', 'Lager & Logistikzentren', 'Werkstätten'],
    },
    {
      title: 'Tatortreinigung',
      description: 'Diskrete, professionelle Reinigung nach besonderen Vorfällen',
      icon: '🔬',
      examples: ['Nach Unfällen', 'Wohnungsauflösungen', 'Spezialsituationen'],
    },
    {
      title: 'Hygiene-Spezialreinigung',
      description: 'Desinfektion und Sanierung bei extremen Verschmutzungen',
      icon: '🧪',
      examples: ['Schimmelbefall', 'Keimbelastung', 'Geruchssanierung'],
    },
    {
      title: 'Hochregallager',
      description: 'Reinigung schwer zugänglicher Bereiche mit Spezialausrüstung',
      icon: '📦',
      examples: ['Höhenreinigung', 'Lagerreinigung', 'Dachbereiche'],
    },
    {
      title: 'Event-Reinigung',
      description: 'Vor- und Nachbereitung von Veranstaltungen und Messen',
      icon: '🎪',
      examples: ['Messestände', 'Eventlocations', 'Festival-Gelände'],
    },
    {
      title: 'Spezialflächen',
      description: 'Reinigung besonderer Oberflächen und Materialien',
      icon: '💎',
      examples: ['Marmor & Naturstein', 'Spezialböden', 'Kunstobjekte'],
    },
  ]

  const process = [
    {
      step: '1',
      title: 'Anfrage & Problemanalyse',
      description: 'Schildern Sie uns Ihre spezielle Reinigungsaufgabe - wir analysieren die Anforderungen und Herausforderungen.',
    },
    {
      step: '2',
      title: 'Vor-Ort-Besichtigung',
      description: 'Unsere Spezialisten besichtigen das Objekt und entwickeln eine passgenaue Reinigungsstrategie.',
    },
    {
      step: '3',
      title: 'Individuelles Konzept',
      description: 'Sie erhalten ein detailliertes Konzept mit Methoden, Zeitplan, erforderlicher Ausrüstung und Festpreis.',
    },
    {
      step: '4',
      title: 'Fachgerechte Ausführung',
      description: 'Unser spezialisiertes Team setzt die Maßnahmen mit professioneller Ausrüstung und Know-how um.',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <Section padding="large" className="relative overflow-hidden pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-gray-50">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/5 via-transparent to-gray-600/5" />
        
        <Container size="default" className="relative z-10">
          <Breadcrumb 
            items={[
              { label: 'Services', href: '/#content-start' },
              { label: 'Reinigung', href: '/services/reinigung' },
              { label: 'Spezialreinigung' },
            ]}
            accentColor={accent}
          />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-slate-100 border border-slate-200">
              <Wrench className="w-4 h-4 text-slate-700" />
              <span className="text-sm font-bold uppercase tracking-wider text-slate-900">
                Spezialreinigung
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-neutral-900 leading-tight">
              Professionelle Spezialreinigung in Berlin
            </h1>

            <p className="text-xl text-neutral-700 leading-relaxed mb-8">
              Maßgeschneiderte Reinigungslösungen für individuelle Anforderungen und besondere Herausforderungen. 
              Flexibel einsetzbar, anfrage-basiert und professionell - wenn Standard-Reinigung nicht ausreicht.
            </p>

            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: accent }}
            >
              Anfrage stellen
            </Link>
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section padding="large" background="white">
        <Container size="default">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
            Warum BC Group für Spezialreinigung?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div 
                  key={index}
                  className="p-6 rounded-2xl border-2 border-neutral-100 hover:border-slate-300 transition-all duration-300 hover:shadow-lg"
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

      {/* Special Services Grid */}
      <Section padding="large" className="bg-gradient-to-b from-white to-slate-50">
        <Container size="default">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center">
            Unsere Spezialreinigungs-Bereiche
          </h2>
          
          <p className="text-lg text-neutral-700 mb-12 text-center max-w-2xl mx-auto">
            Von Industrie bis Event - wir haben Lösungen für außergewöhnliche Reinigungsaufgaben:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialServices.map((service, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-white border border-slate-100 hover:border-slate-300 transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2 pt-4 border-t border-slate-100">
                  {service.examples.map((example, eidx) => (
                    <div key={eidx} className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 shrink-0" style={{ color: accent }} />
                      <span className="text-sm text-neutral-600">{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process Section */}
      <Section padding="large" background="white">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
              So gehen wir vor
            </h2>

            <div className="space-y-6">
              {process.map((step, index) => (
                <div 
                  key={index}
                  className="flex gap-6 p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100"
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
      <Section padding="large" className="bg-gradient-to-br from-slate-900 to-gray-700 text-white">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Sparkles className="w-12 h-12" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Keine Aufgabe ist zu speziell
              </h2>
            </div>
            <p className="text-lg text-slate-100 mb-6 leading-relaxed text-center">
              Ob Industriehalle, Messebau, Tatortreinigung oder die Reinigung hochsensibler Bereiche - 
              wir haben das Know-how, die Ausrüstung und die Erfahrung für außergewöhnliche Reinigungsaufgaben. 
              Kontaktieren Sie uns mit Ihrer Herausforderung - gemeinsam finden wir die passende Lösung!
            </p>
            <div className="text-center">
              <Link 
                href="/kontakt"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-slate-900 bg-white hover:bg-slate-50 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Jetzt unverbindlich anfragen
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
