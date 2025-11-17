import { Metadata } from 'next'
import Link from 'next/link'
import { Container, Section } from '@/components/ui'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { CTAContact } from '@/components/sections'
import { FileText, CheckCircle, Shield, Lock, FileCheck, UserCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dokumenten- & Aktenservice Berlin - Vertraulicher Kurier | BC Group',
  description: 'Vertrauliche Zustellung wichtiger Unterlagen und Akten in Berlin. Professionelle Fachkräfte, Quittierung bei Übergabe, höchste Sicherheitsstandards.',
  keywords: 'dokumentenkurier berlin, aktenservice berlin, vertrauliche zustellung, rechtsdokumente kurier, medizinische unterlagen kurier, verschwiegenheit kurier',
}

export default function DokumentenAktenservicePage() {
  const accent = '#00d4ff'

  const benefits = [
    {
      icon: Lock,
      title: 'Vertraulichkeit Garantiert',
      description: 'Geschulte Fahrer mit Verschwiegenheitsverpflichtung und höchsten Sicherheitsstandards',
    },
    {
      icon: FileCheck,
      title: 'Quittierung bei Übergabe',
      description: 'Dokumentierte Abholung und Zustellung mit Unterschrift und Zeitstempel',
    },
    {
      icon: UserCheck,
      title: 'Professionelle Fachkräfte',
      description: 'Zuverlässige und diskrete Mitarbeiter mit langjähriger Erfahrung',
    },
  ]

  const services = [
    'Gerichtsakten und Rechtsdokumente',
    'Medizinische Unterlagen und Patientenakten',
    'Finanzunterlagen und Verträge',
    'Notarielle Dokumente und Vollmachten',
    'Personalakten und HR-Dokumente',
    'Versicherungsakten und Schadensunterlagen',
  ]

  const securityFeatures = [
    {
      title: 'Persönliche Übergabe',
      description: 'Dokumente werden ausschließlich persönlich an autorisierte Empfänger übergeben. Keine Ablage bei Nachbarn oder in Briefkästen.',
      icon: UserCheck,
    },
    {
      title: 'Versiegelte Transporte',
      description: 'Alle Dokumente werden in versiegelten und nummerierten Behältern transportiert. Manipulationsschutz garantiert.',
      icon: Lock,
    },
    {
      title: 'Lückenlose Dokumentation',
      description: 'Jeder Schritt wird dokumentiert: Abholung, Transport und Zustellung mit Zeitstempel und Unterschrift.',
      icon: FileCheck,
    },
  ]

  const useCases = [
    {
      title: 'Rechtsanwälte & Notare',
      description: 'Vertraulicher Transport von Mandantenakten, Gerichtsdokumenten und notariellen Unterlagen zwischen Kanzlei, Gericht und Mandanten',
      example: 'Tägliche Gerichtsgänge + Ad-hoc-Lieferungen',
    },
    {
      title: 'Medizin & Gesundheitswesen',
      description: 'Sichere Zustellung von Patientenakten, Befunden und medizinischen Unterlagen unter Einhaltung der ärztlichen Schweigepflicht',
      example: 'Arzt-zu-Arzt | Klinik-zu-Facharzt',
    },
    {
      title: 'Versicherungen & Banken',
      description: 'Vertraulicher Transport von Verträgen, Schadensunterlagen und Finanzakten zwischen Filialen und zu Kunden',
      example: 'Vertrags-Express | Schadensdokumentation',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <Section padding="large" className="relative overflow-hidden pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-transparent to-cyan-600/5" />
        
        <Container size="default" className="relative z-10">
          <Breadcrumb 
            items={[
              { label: 'Services', href: '/#content-start' },
              { label: 'Kurierdienst', href: '/services/kurierdienst' },
              { label: 'Dokumenten- & Aktenservice' },
            ]}
            accentColor={accent}
          />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-cyan-100 border border-cyan-200">
              <FileText className="w-4 h-4 text-cyan-700" />
              <span className="text-sm font-bold uppercase tracking-wider text-cyan-900">
                Vertraulich & Sicher
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-neutral-900 leading-tight">
              Dokumenten- & Aktenservice<br />
              <span style={{ color: accent }}>mit Verschwiegenheitsgarantie</span>
            </h1>

            <p className="text-xl text-neutral-700 leading-relaxed mb-8">
              Vertrauliche Zustellung wichtiger Unterlagen und Akten für Rechtsanwälte, Ärzte, 
              Versicherungen und Unternehmen. Professionelle Fachkräfte, dokumentierte Übergabe 
              und höchste Diskretion – regelmäßig und sicher in ganz Berlin.
            </p>

            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: accent }}
            >
              Vertraulichen Service anfragen
            </Link>
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section padding="large" background="white">
        <Container size="default">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
            Warum Sie uns vertrauen können
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

      {/* Security Features Section */}
      <Section padding="large" className="bg-gradient-to-b from-white to-cyan-50">
        <Container size="default">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
              Unsere Sicherheitsmaßnahmen
            </h2>

            <div className="space-y-6">
              {securityFeatures.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div 
                    key={index}
                    className="flex gap-6 p-8 rounded-2xl bg-white border-2 border-cyan-100 hover:border-cyan-300 transition-all duration-300"
                  >
                    <div 
                      className="flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${accent}20` }}
                    >
                      <Icon className="w-8 h-8" style={{ color: accent }} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-neutral-700 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* Services Overview */}
      <Section padding="large" background="white">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center">
              Welche Dokumente transportieren wir?
            </h2>
            
            <p className="text-lg text-neutral-700 mb-8 text-center">
              Wir transportieren alle Arten von vertraulichen Unterlagen und Akten 
              mit höchster Diskretion und Sorgfalt:
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

      {/* Use Cases Section */}
      <Section padding="large" className="bg-gradient-to-b from-white to-cyan-50">
        <Container size="default">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
              Branchen & Anwendungsfälle
            </h2>

            <div className="space-y-6">
              {useCases.map((useCase, index) => (
                <div 
                  key={index}
                  className="p-8 rounded-2xl bg-white border-2 border-cyan-100 hover:border-cyan-300 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    {useCase.description}
                  </p>
                  <div 
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold"
                    style={{ backgroundColor: `${accent}15`, color: accent }}
                  >
                    <Shield className="w-4 h-4" />
                    {useCase.example}
                  </div>
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
              So läuft Ihr Dokumententransport ab
            </h2>

            <div className="space-y-6">
              {[
                {
                  step: '1',
                  title: 'Auftrag & Autorisierung',
                  description: 'Sie erteilen den Auftrag mit Angabe von Absender, Empfänger und Zustellungszeitfenster. Wir klären Autorisierungsdetails.',
                },
                {
                  step: '2',
                  title: 'Sichere Abholung',
                  description: 'Unser geschulter Fahrer holt die Dokumente persönlich ab, versiegelt sie in einem nummerierten Behälter und quittiert die Übergabe.',
                },
                {
                  step: '3',
                  title: 'Direkter Transport',
                  description: 'Die Dokumente werden ohne Umwege direkt zum Empfänger transportiert. GPS-Tracking ermöglicht Nachverfolgung in Echtzeit.',
                },
                {
                  step: '4',
                  title: 'Persönliche Zustellung',
                  description: 'Der Empfänger erhält die versiegelten Dokumente persönlich gegen Unterschrift. Sie erhalten eine digitale Zustellbestätigung.',
                },
              ].map((step, index) => (
                <div 
                  key={index}
                  className="flex gap-6 p-6 rounded-2xl bg-gradient-to-br from-cyan-50 to-white border-2 border-cyan-100 hover:border-cyan-300 transition-all duration-300"
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

      {/* Pricing Info */}
      <Section padding="large" className="bg-gradient-to-br from-cyan-900 to-blue-700 text-white">
        <Container size="default">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Faire Preise für höchste Vertraulichkeit
            </h2>
            <p className="text-lg text-cyan-100 mb-8 leading-relaxed">
              Die Kosten für unseren Dokumenten- & Aktenservice richten sich nach Entfernung, 
              Dringlichkeit und Umfang. Für regelmäßige Transporte bieten wir attraktive 
              Vertragskonditionen. Alle Preise sind transparent und ohne versteckte Gebühren. 
              Kontaktieren Sie uns für ein individuelles Angebot.
            </p>
            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-white hover:bg-cyan-50 transition-all duration-300 hover:scale-105 shadow-lg"
              style={{ color: accent }}
            >
              Kostenloses Angebot
            </Link>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTAContact />
    </>
  )
}
