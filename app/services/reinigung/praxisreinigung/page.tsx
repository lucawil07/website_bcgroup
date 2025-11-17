import { Metadata } from 'next'
import Link from 'next/link'
import { Container, Section } from '@/components/ui'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { CTAContact } from '@/components/sections'
import { Stethoscope, CheckCircle, Shield, Clock, HeartPulse, Microscope } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Praxisreinigung Berlin - Hygiene für Arzt- & Zahnarztpraxen | BC Group',
  description: 'Professionelle Praxisreinigung in Berlin. Spezielle Hygieneanforderungen für medizinische und zahnmedizinische Praxen. Zuverlässig 365 Tage, fachgerecht.',
  keywords: 'praxisreinigung berlin, arztpraxis reinigung, zahnarztpraxis reinigung, medizinische reinigung, hygiene praxis',
}

export default function PraxisreinigungPage() {
  const accent = '#06b6d4'

  const benefits = [
    {
      icon: Shield,
      title: 'Höchste Hygienestandards',
      description: 'Strikte Einhaltung medizinischer Hygienevorschriften und RKI-Richtlinien',
    },
    {
      icon: Clock,
      title: 'Zuverlässigkeit 365 Tage',
      description: 'Garantierte Reinigung auch an Feiertagen, Wochenenden und während Urlaubszeiten',
    },
    {
      icon: Microscope,
      title: 'Fachgerechte Verfahren',
      description: 'Geschultes Personal mit Kenntnissen in Desinfektion und medizinischer Hygiene',
    },
  ]

  const services = [
    'Behandlungsräume & OP-Bereiche',
    'Wartezimmer & Empfangsbereiche',
    'Sanitäranlagen nach RKI-Standard',
    'Flächendesinfektion nach Hygieneplan',
    'Medizingeräte-Oberflächenreinigung',
    'Entsorgung von Reinigungsabfällen',
  ]

  const praxisTypes = [
    {
      title: 'Allgemeinarztpraxen',
      description: 'Tägliche Reinigung und Desinfektion aller Räumlichkeiten nach Praxisschluss',
      icon: '👨‍⚕️',
    },
    {
      title: 'Zahnarztpraxen',
      description: 'Spezialreinigung für Behandlungsstühle, Geräte und Nassräume',
      icon: '🦷',
    },
    {
      title: 'Fachärzte & Spezialisten',
      description: 'Angepasste Reinigung für Dermatologie, Gynäkologie, Chirurgie uvm.',
      icon: '🩺',
    },
    {
      title: 'Physiotherapie & Reha',
      description: 'Hygienische Reinigung von Behandlungsliegen, Geräten und Umkleiden',
      icon: '💪',
    },
  ]

  const process = [
    {
      step: '1',
      title: 'Hygieneplan-Analyse',
      description: 'Wir analysieren Ihren Hygieneplan und die spezifischen Anforderungen Ihrer Praxis - von Behandlungsräumen bis Wartebereichen.',
    },
    {
      step: '2',
      title: 'Individuelles Reinigungskonzept',
      description: 'Entwicklung eines maßgeschneiderten Reinigungsplans mit Zeitfenstern außerhalb Ihrer Sprechzeiten und Festpreisangebot.',
    },
    {
      step: '3',
      title: 'Team-Schulung',
      description: 'Einarbeitung unseres fest zugeteilten Reinigungsteams in Ihre Praxisabläufe und besonderen Hygieneanforderungen.',
    },
    {
      step: '4',
      title: 'Zuverlässige Durchführung',
      description: 'Regelmäßige professionelle Reinigung mit Dokumentation und Qualitätskontrollen - 365 Tage im Jahr verlässlich.',
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
              { label: 'Praxisreinigung' },
            ]}
            accentColor={accent}
          />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-cyan-100 border border-cyan-200">
              <Stethoscope className="w-4 h-4 text-cyan-700" />
              <span className="text-sm font-bold uppercase tracking-wider text-cyan-900">
                Praxisreinigung
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-neutral-900 leading-tight">
              Professionelle Praxisreinigung in Berlin
            </h1>

            <p className="text-xl text-neutral-700 leading-relaxed mb-8">
              Spezialisierte Reinigung für medizinische und zahnmedizinische Praxen mit höchsten Hygieneanforderungen. 
              Zuverlässig 365 Tage im Jahr, fachgerecht nach RKI-Richtlinien und medizinischen Standards.
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
            Warum BC Group für Ihre Praxisreinigung?
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

      {/* Praxis Types Grid */}
      <Section padding="large" className="bg-gradient-to-b from-white to-cyan-50">
        <Container size="default">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center">
            Wir reinigen alle Praxistypen
          </h2>
          
          <p className="text-lg text-neutral-700 mb-12 text-center max-w-2xl mx-auto">
            Von der Einzelpraxis bis zum Medizinischen Versorgungszentrum - wir kennen die spezifischen 
            Anforderungen verschiedener Fachrichtungen:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {praxisTypes.map((type, index) => (
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
              Unser Leistungsumfang
            </h2>
            
            <p className="text-lg text-neutral-700 mb-8 text-center">
              Umfassende Reinigung und Desinfektion aller praxisrelevanten Bereiche:
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
              So starten wir mit Ihrer Praxisreinigung
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
              <HeartPulse className="w-12 h-12" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Vertrauen durch Hygiene
              </h2>
            </div>
            <p className="text-lg text-cyan-100 mb-6 leading-relaxed text-center">
              Patienten vertrauen darauf, dass Ihre Praxis höchsten Hygienestandards entspricht. Mit unserer 
              spezialisierten Praxisreinigung schaffen Sie nicht nur eine saubere, sondern vor allem eine sichere 
              Umgebung. Unser geschultes Team kennt die besonderen Anforderungen medizinischer Einrichtungen und 
              arbeitet diskret und zuverlässig.
            </p>
            <div className="text-center">
              <Link 
                href="/kontakt"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-cyan-900 bg-white hover:bg-cyan-50 transition-all duration-300 hover:scale-105 shadow-lg"
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
