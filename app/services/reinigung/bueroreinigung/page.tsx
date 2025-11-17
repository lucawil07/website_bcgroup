import { Metadata } from 'next'
import Link from 'next/link'
import { Container, Section } from '@/components/ui'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { CTAContact } from '@/components/sections'
import { Briefcase, CheckCircle, Clock, Shield, Sparkles, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Büroreinigung Berlin - Professionelle Reinigung für Ihr Büro | BC Group',
  description: 'Professionelle Büroreinigung in Berlin. Tägliche & wöchentliche Reinigung für optimale Hygiene und Produktivität. Diskret, zuverlässig, ergonomisch.',
  keywords: 'büroreinigung berlin, büroreinigung, office cleaning, gewerbereinigung berlin, büro reinigen',
}

export default function BueroreinigungPage() {
  const accent = '#06b6d4'
  const accentDark = '#0f2f51'

  const benefits = [
    {
      icon: Clock,
      title: 'Flexible Zeitfenster',
      description: 'Reinigung außerhalb Ihrer Geschäftszeiten - morgens, abends oder am Wochenende',
    },
    {
      icon: Shield,
      title: 'Diskrete Arbeitsweise',
      description: 'Unser Team arbeitet unauffällig und respektiert Ihre Geschäftsabläufe',
    },
    {
      icon: Sparkles,
      title: 'Hygiene-Standards',
      description: 'Professionelle Reinigung nach höchsten Hygienestandards für gesundes Arbeiten',
    },
  ]

  const services = [
    'Täglich: Büroflächen, Schreibtische, Konferenzräume',
    'Wöchentlich: Küchen, Sanitäranlagen, Gemeinschaftsbereiche',
    'Monatlich: Fenster, Jalousien, Heizkörper',
    'Bodenreinigung und -pflege aller Beläge',
    'Papierkorb-Entleerung und Mülltrennung',
    'Grünpflanzenpflege auf Wunsch',
  ]

  const process = [
    {
      step: '1',
      title: 'Bedarfsanalyse vor Ort',
      description: 'Wir besichtigen Ihre Büroräume und erstellen ein individuelles Reinigungskonzept basierend auf Ihren Anforderungen.',
    },
    {
      step: '2',
      title: 'Maßgeschneidertes Angebot',
      description: 'Sie erhalten ein transparentes Festpreisangebot mit flexiblen Leistungspaketen - tägliche, wöchentliche oder monatliche Reinigung.',
    },
    {
      step: '3',
      title: 'Terminplanung',
      description: 'Wir vereinbaren feste Reinigungszeiten außerhalb Ihrer Bürozeiten, damit Ihre Arbeitsabläufe nicht gestört werden.',
    },
    {
      step: '4',
      title: 'Professionelle Durchführung',
      description: 'Unser geschultes Reinigungsteam sorgt regelmäßig für Sauberkeit und Hygiene - zuverlässig und in gleichbleibend hoher Qualität.',
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
              { label: 'Büroreinigung' },
            ]}
            accentColor={accent}
          />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-cyan-100 border border-cyan-200">
              <Briefcase className="w-4 h-4 text-cyan-700" />
              <span className="text-sm font-bold uppercase tracking-wider text-cyan-900">
                Büroreinigung
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-neutral-900 leading-tight">
              Professionelle Büroreinigung in Berlin
            </h1>

            <p className="text-xl text-neutral-700 leading-relaxed mb-8">
              Tägliche und wöchentliche Reinigung von Büroflächen für optimale Hygiene und Produktivität. 
              Diskret, zuverlässig und ergonomisch durchgeführt von unserem erfahrenen Team.
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
            Warum BC Group für Ihre Büroreinigung?
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

      {/* Services Overview */}
      <Section padding="large" className="bg-gradient-to-b from-white to-cyan-50">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center">
              Unser Leistungsspektrum
            </h2>
            
            <p className="text-lg text-neutral-700 mb-8 text-center">
              Wir bieten Ihnen ein umfassendes Reinigungsprogramm, das perfekt auf die Anforderungen 
              moderner Büroumgebungen abgestimmt ist:
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-cyan-100 hover:border-cyan-300 transition-colors"
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
              So starten wir mit Ihrer Büroreinigung
            </h2>

            <div className="space-y-6">
              {process.map((step, index) => (
                <div 
                  key={index}
                  className="flex gap-6 p-6 rounded-2xl bg-gradient-to-br from-cyan-50 to-white border border-cyan-100"
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

      {/* Why Clean Office */}
      <Section padding="large" className="bg-gradient-to-br from-cyan-900 to-blue-700 text-white">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Users className="w-12 h-12" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Saubere Büros = Produktive Teams
              </h2>
            </div>
            <p className="text-lg text-cyan-100 mb-6 leading-relaxed text-center">
              Studien zeigen: Ein sauberes und hygienisches Arbeitsumfeld steigert die Mitarbeitermotivation 
              um bis zu 20% und reduziert krankheitsbedingte Ausfälle deutlich. Investieren Sie in die Gesundheit 
              und Produktivität Ihrer Mitarbeiter mit professioneller Büroreinigung.
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
