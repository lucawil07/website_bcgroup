import { Metadata } from 'next'
import Link from 'next/link'
import { Container, Section } from '@/components/ui'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { CTAContact } from '@/components/sections'
import { Trash2, CheckCircle, Droplets, Wind, Shield, Leaf } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mülltonnenreinigung Berlin - Hygienisch & Geruchsneutral | BC Group',
  description: 'Professionelle Mülltonnenreinigung in Berlin. Hygienische Reinigung und Desinfektion von Mülltonnen und Abfallbehältern. Geruchsneutral, desinfiziert, umweltfreundlich.',
  keywords: 'mülltonnenreinigung berlin, tonnenreinigung, mülltonne reinigen, container reinigung, abfallbehälter reinigung',
}

export default function MuelltonnenreinigungPage() {
  const accent = '#06b6d4'

  const benefits = [
    {
      icon: Droplets,
      title: 'Geruchsneutral',
      description: 'Effektive Beseitigung unangenehmer Gerüche durch Spezialreiniger und Desinfektion',
    },
    {
      icon: Shield,
      title: 'Hygienisch Desinfiziert',
      description: 'Abtötung von Bakterien, Keimen und Pilzen für maximale Hygiene',
    },
    {
      icon: Leaf,
      title: 'Umweltfreundlich',
      description: 'Biologisch abbaubare Reinigungsmittel und fachgerechte Abwasserentsorgung',
    },
  ]

  const services = [
    'Restmülltonnen (grau)',
    'Biotonnen (braun)',
    'Papiertonnen (blau)',
    'Wertstofftonnen (gelb)',
    'Gewerbe-Container',
    'Spezial-Abfallbehälter',
  ]

  const problems = [
    {
      title: 'Üble Gerüche',
      description: 'Besonders im Sommer entwickeln Mülltonnen penetrante Gerüche',
      icon: '😷',
    },
    {
      title: 'Maden & Ungeziefer',
      description: 'Feuchtigkeit und Reste ziehen Fliegen, Maden und andere Schädlinge an',
      icon: '🐛',
    },
    {
      title: 'Bakterien & Keime',
      description: 'Ablagerungen sind ideale Nährböden für gesundheitsgefährdende Keime',
      icon: '🦠',
    },
    {
      title: 'Verklebte Reste',
      description: 'Hartnäckige Verschmutzungen setzen sich am Boden und den Wänden fest',
      icon: '🧼',
    },
  ]

  const process = [
    {
      step: '1',
      title: 'Terminvereinbarung',
      description: 'Wir vereinbaren einen Reinigungstermin - einmalig oder als regelmäßiger Service (monatlich, quartalsweise).',
    },
    {
      step: '2',
      title: 'Mobile Reinigung vor Ort',
      description: 'Unser Spezialfahrzeug kommt zu Ihnen. Die Tonnen werden vor Ort mit Hochdruck gereinigt.',
    },
    {
      step: '3',
      title: 'Desinfektion & Geruchsbeseitigung',
      description: 'Nach der Reinigung erfolgt eine gründliche Desinfektion und Behandlung mit Geruchsneutralisator.',
    },
    {
      step: '4',
      title: 'Umweltgerechte Entsorgung',
      description: 'Das Schmutzwasser wird fachgerecht entsorgt - kein Abfluss in die Kanalisation vor Ort.',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <Section padding="none" className="relative overflow-hidden pt-6 pb-20 bg-gradient-to-br from-lime-50 via-white to-green-50">
        <div className="absolute inset-0 bg-gradient-to-br from-lime-900/5 via-transparent to-green-600/5" />
        
        <Container size="default" className="relative z-10">
          <Breadcrumb 
            items={[
              { label: 'Services', href: '/#content-start' },
              { label: 'Reinigung', href: '/services/reinigung' },
              { label: 'Mülltonnenreinigung' },
            ]}
            accentColor={accent}
          />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-lime-100 border border-lime-200">
              <Trash2 className="w-4 h-4 text-lime-700" />
              <span className="text-sm font-bold uppercase tracking-wider text-lime-900">
                Mülltonnenreinigung
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-neutral-900 leading-tight">
              Professionelle Mülltonnenreinigung in Berlin
            </h1>

            <p className="text-xl text-neutral-700 leading-relaxed mb-8">
              Hygienische Reinigung und Desinfektion von Mülltonnen und Abfallbehältern. Geruchsneutral, 
              desinfiziert und umweltfreundlich - für saubere Tonnen und eine angenehmere Umgebung.
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
            Warum BC Group für Ihre Mülltonnenreinigung?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div 
                  key={index}
                  className="p-6 rounded-2xl border-2 border-neutral-100 hover:border-lime-200 transition-all duration-300 hover:shadow-lg"
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

      {/* Problems Section */}
      <Section padding="large" className="bg-gradient-to-b from-white to-lime-50">
        <Container size="default">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center">
            Typische Probleme mit verschmutzten Mülltonnen
          </h2>
          
          <p className="text-lg text-neutral-700 mb-12 text-center max-w-2xl mx-auto">
            Warum eine regelmäßige Tonnenreinigung wichtig ist:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-white border border-lime-100 hover:border-lime-300 transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-4xl mb-4">{problem.icon}</div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {problem.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {problem.description}
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
              Welche Tonnen reinigen wir?
            </h2>
            
            <p className="text-lg text-neutral-700 mb-8 text-center">
              Wir reinigen alle gängigen Mülltonnen und Abfallbehälter:
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-lime-50 to-white border border-lime-100 hover:border-lime-300 transition-colors"
                >
                  <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: accent }} />
                  <span className="text-neutral-800 font-medium">{service}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-lime-50 to-green-50 border border-lime-200">
              <p className="text-neutral-700 leading-relaxed text-center">
                <strong className="text-lime-900">Größen:</strong> Wir reinigen Mülltonnen aller Größen - 
                von 60 Liter bis 1100 Liter sowie Gewerbe-Container.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Process Section */}
      <Section padding="large" className="bg-gradient-to-b from-white to-lime-50">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
              So läuft die Mülltonnenreinigung ab
            </h2>

            <div className="space-y-6">
              {process.map((step, index) => (
                <div 
                  key={index}
                  className="flex gap-6 p-6 rounded-2xl bg-white border border-lime-100"
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
      <Section padding="large" className="bg-gradient-to-br from-lime-900 to-green-700 text-white">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Wind className="w-12 h-12" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Frische Luft statt übler Gerüche
              </h2>
            </div>
            <p className="text-lg text-lime-100 mb-6 leading-relaxed text-center">
              Besonders im Sommer bei warmen Temperaturen werden ungereinigte Mülltonnen zur echten Geruchsbelästigung. 
              Unsere professionelle Reinigung mit Hochdruck und speziellen Desinfektionsmitteln beseitigt nicht nur 
              Schmutz, sondern auch Gerüche dauerhaft. Für ein angenehmeres Wohn- und Arbeitsumfeld!
            </p>
            <div className="text-center">
              <Link 
                href="/kontakt"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lime-900 bg-white hover:bg-lime-50 transition-all duration-300 hover:scale-105 shadow-lg"
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
