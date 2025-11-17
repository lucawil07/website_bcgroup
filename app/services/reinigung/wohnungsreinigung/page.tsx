import { Metadata } from 'next'
import Link from 'next/link'
import { Container, Section } from '@/components/ui'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { CTAContact } from '@/components/sections'
import { HomeIcon, CheckCircle, Heart, Shield, Sparkles, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Wohnungsreinigung Berlin - Professionell & Zuverlässig | BC Group',
  description: 'Professionelle Wohnungsreinigung in Berlin. Individuelle Reinigung von Wohnungen und Apartments nach Ihren Wünschen. Zuverlässig, vertrauensvoll, anpassbar.',
  keywords: 'wohnungsreinigung berlin, apartment reinigung, privatreinigung, haushaltshilfe berlin, putzservice',
}

export default function WohnungsreinigungPage() {
  const accent = '#06b6d4'

  const benefits = [
    {
      icon: Heart,
      title: 'Individuell Anpassbar',
      description: 'Reinigungsplan genau nach Ihren Wünschen und Bedürfnissen zusammengestellt',
    },
    {
      icon: Shield,
      title: 'Vertrauensvoll',
      description: 'Zuverlässiges, überprüftes Personal mit Diskretion und Respekt für Ihre Privatsphäre',
    },
    {
      icon: Users,
      title: 'Persönlicher Service',
      description: 'Festes Reinigungsteam, das Ihre Wohnung und Ihre Vorlieben kennt',
    },
  ]

  const services = [
    'Wohn- & Schlafräume',
    'Küche inkl. Geräte-Reinigung',
    'Badezimmer & Sanitäranlagen',
    'Böden saugen & wischen',
    'Fenster & Fensterbänke',
    'Abstauben & Oberflächen',
  ]

  const packages = [
    {
      title: 'Basis-Reinigung',
      description: 'Regelmäßige Grundreinigung für gepflegte Wohnungen',
      frequency: 'Wöchentlich oder 14-tägig',
      features: ['Staubsaugen & Wischen', 'Bad & Küche', 'Oberflächen abstauben', 'Müllentsorgung'],
    },
    {
      title: 'Intensiv-Reinigung',
      description: 'Umfassende Reinigung inklusive Details',
      frequency: 'Nach Bedarf buchbar',
      features: ['Alle Basis-Leistungen', 'Fensterreinigung', 'Kühlschrank innen', 'Backofen & Herd'],
    },
    {
      title: 'Premium-Service',
      description: 'Rundum-Sorglos-Paket für höchste Ansprüche',
      frequency: 'Flexibel kombinierbar',
      features: ['Alle Leistungen', 'Bügel-Service', 'Wäsche waschen', 'Betten beziehen'],
    },
  ]

  const process = [
    {
      step: '1',
      title: 'Persönliches Erstgespräch',
      description: 'Wir besprechen Ihre Wünsche: Welche Räume, welche Leistungen, wie oft und zu welchen Zeiten?',
    },
    {
      step: '2',
      title: 'Individuelles Angebot',
      description: 'Sie erhalten ein maßgeschneidertes Angebot mit transparenten Preisen und flexiblen Leistungspaketen.',
    },
    {
      step: '3',
      title: 'Kennenlernen & Start',
      description: 'Ihr persönliches Reinigungsteam lernt Ihre Wohnung und Ihre Vorstellungen kennen.',
    },
    {
      step: '4',
      title: 'Regelmäßiger Service',
      description: 'Zuverlässige Reinigung nach Ihrem Plan - Sie können jederzeit Anpassungen vornehmen.',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <Section padding="large" className="relative overflow-hidden pt-32 pb-20 bg-gradient-to-br from-teal-50 via-white to-green-50">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/5 via-transparent to-green-600/5" />
        
        <Container size="default" className="relative z-10">
          <Breadcrumb 
            items={[
              { label: 'Services', href: '/#content-start' },
              { label: 'Reinigung', href: '/services/reinigung' },
              { label: 'Wohnungsreinigung' },
            ]}
            accentColor={accent}
          />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-teal-100 border border-teal-200">
              <HomeIcon className="w-4 h-4 text-teal-700" />
              <span className="text-sm font-bold uppercase tracking-wider text-teal-900">
                Wohnungsreinigung
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-neutral-900 leading-tight">
              Professionelle Wohnungsreinigung in Berlin
            </h1>

            <p className="text-xl text-neutral-700 leading-relaxed mb-8">
              Individuelle Reinigung von Wohnungen und Apartments genau nach Ihren Wünschen. Zuverlässig, 
              vertrauensvoll und mit persönlichem Service - für mehr Zeit für die schönen Dinge im Leben.
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
            Warum BC Group für Ihre Wohnungsreinigung?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div 
                  key={index}
                  className="p-6 rounded-2xl border-2 border-neutral-100 hover:border-teal-200 transition-all duration-300 hover:shadow-lg"
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

      {/* Packages Section */}
      <Section padding="large" className="bg-gradient-to-b from-white to-teal-50">
        <Container size="default">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center">
            Unsere Reinigungs-Pakete
          </h2>
          
          <p className="text-lg text-neutral-700 mb-12 text-center max-w-2xl mx-auto">
            Wählen Sie das passende Paket oder stellen Sie Ihr individuelles Leistungspaket zusammen:
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-white border-2 border-teal-100 hover:border-teal-300 transition-all duration-300 hover:shadow-xl"
              >
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  {pkg.title}
                </h3>
                <p className="text-neutral-600 mb-4">
                  {pkg.description}
                </p>
                <div className="mb-6 pb-4 border-b border-teal-100">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: `${accent}20`, color: accent }}>
                    {pkg.frequency}
                  </span>
                </div>
                <div className="space-y-3">
                  {pkg.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: accent }} />
                      <span className="text-sm text-neutral-700">{feature}</span>
                    </div>
                  ))}
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
              Standard-Leistungen bei jeder Reinigung
            </h2>
            
            <p className="text-lg text-neutral-700 mb-8 text-center">
              Diese Bereiche reinigen wir bei jedem regulären Termin:
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-teal-50 to-white border border-teal-100 hover:border-teal-300 transition-colors"
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
      <Section padding="large" className="bg-gradient-to-b from-white to-teal-50">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
              So starten Sie mit Ihrer Wohnungsreinigung
            </h2>

            <div className="space-y-6">
              {process.map((step, index) => (
                <div 
                  key={index}
                  className="flex gap-6 p-6 rounded-2xl bg-white border border-teal-100"
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
      <Section padding="large" className="bg-gradient-to-br from-teal-900 to-green-700 text-white">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Sparkles className="w-12 h-12" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Mehr Zeit für das, was zählt
              </h2>
            </div>
            <p className="text-lg text-teal-100 mb-6 leading-relaxed text-center">
              Verbringen Sie Ihre Freizeit mit Familie, Hobbys und Entspannung statt mit Putzen. Unsere professionelle 
              Wohnungsreinigung gibt Ihnen wertvolle Lebenszeit zurück und sorgt gleichzeitig für ein sauberes, 
              hygienisches Zuhause, in dem Sie sich rundum wohlfühlen können.
            </p>
            <div className="text-center">
              <Link 
                href="/kontakt"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-teal-900 bg-white hover:bg-teal-50 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Jetzt Termin vereinbaren
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
