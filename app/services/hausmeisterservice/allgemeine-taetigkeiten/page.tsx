import { Metadata } from 'next'
import Link from 'next/link'
import { Container, Section } from '@/components/ui'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { CTAContact } from '@/components/sections'
import { Wrench, CheckCircle, Clock, Shield, Eye, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Allgemeine Hausmeistertätigkeiten Berlin - Objektbetreuung | BC Group',
  description: 'Professionelle Hausmeisterdienste in Berlin: Objektkontrollen, Kleinreparaturen, Schließdienste und mehr. Zuverlässige Betreuung Ihrer Immobilie durch BC Hausmeisterservice.',
  keywords: 'hausmeister berlin, objektkontrolle, kleinreparaturen, hausmeisterdienste, gebäudebetreuung berlin, schließdienst',
}

export default function AllgemeineTaetigkeitenPage() {
  const accent = '#8b5cf6'

  const benefits = [
    {
      icon: Clock,
      title: 'Täglich vor Ort',
      description: 'Regelmäßige Kontrollen und schnelle Reaktionszeiten',
    },
    {
      icon: Shield,
      title: 'Versiert & zuverlässig',
      description: 'Technisches Know-how und langjährige Erfahrung',
    },
    {
      icon: Users,
      title: 'Persönlicher Ansprechpartner',
      description: 'Ihr fester Hausmeister für alle Anliegen',
    },
  ]

  const tasks = [
    'Regelmäßige Objektkontrollen innen und außen',
    'Kleinreparaturen an Türen, Fenstern, Beleuchtung',
    'Wartung technischer Anlagen (Heizung, Lüftung)',
    'Schließdienste & Kontrollgänge',
    'Ansprechpartner für Mieter und Eigentümer',
    'Koordination von Handwerkern und Dienstleistern',
    'Übernahme von Vertretungsaufgaben',
    'Notfallmanagement bei technischen Störungen',
  ]

  const serviceAreas = [
    {
      title: 'Wohnanlagen & Mehrfamilienhäuser',
      description: 'Professionelle Betreuung von Wohnimmobilien mit mehreren Mietparteien',
    },
    {
      title: 'Gewerbeobjekte & Bürogebäude',
      description: 'Facility Management für Gewerbeimmobilien und Bürokomplexe',
    },
    {
      title: 'Öffentliche Einrichtungen',
      description: 'Zuverlässige Betreuung von öffentlichen Gebäuden und Verwaltungen',
    },
    {
      title: 'Einzelobjekte & Eigentumswohnungen',
      description: 'Individuelle Betreuung für private Eigentümer',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <Section padding="large" className="relative overflow-hidden pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-indigo-50">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-800/5 via-transparent to-indigo-600/5" />
        
        <Container size="default" className="relative z-10">
          <Breadcrumb 
            items={[
              { label: 'Services', href: '/#content-start' },
              { label: 'Hausmeisterservice', href: '/services/hausmeisterservice' },
              { label: 'Allgemeine Tätigkeiten' },
            ]}
            accentColor={accent}
          />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-purple-100 border border-purple-200">
              <Wrench className="w-4 h-4 text-purple-700" />
              <span className="text-sm font-bold uppercase tracking-wider text-purple-900">
                Hausmeistertätigkeiten
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-neutral-900 leading-tight">
              Allgemeine Hausmeister&shy;tätigkeiten in Berlin
            </h1>

            <p className="text-xl text-neutral-700 leading-relaxed mb-8">
              Unsere Hausmeister übernehmen die tägliche Betreuung Ihrer Immobilie – technisch versiert, 
              aufmerksam und zuverlässig. Von Objektkontrollen bis zu Kleinreparaturen.
            </p>

            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: accent }}
            >
              Beratung vereinbaren
            </Link>
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section padding="large" background="white">
        <Container size="default">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
            Warum BC Hausmeisterservice?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div 
                  key={index}
                  className="p-6 rounded-2xl border-2 border-neutral-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg"
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

      {/* Tasks Overview */}
      <Section padding="large" className="bg-gradient-to-b from-white to-purple-50">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center">
              Unsere Leistungen im Detail
            </h2>
            
            <p className="text-lg text-neutral-700 mb-8 text-center">
              Als Ihr Hausmeister kümmern wir uns um alle anfallenden Tätigkeiten 
              rund um Ihre Immobilie:
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {tasks.map((task, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-purple-100 hover:border-purple-300 transition-colors"
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: accent }} />
                  <span className="text-neutral-800 font-medium">{task}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Service Areas */}
      <Section padding="large" background="white">
        <Container size="default">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
              Für welche Objekte bieten wir Hausmeisterdienste?
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {serviceAreas.map((area, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-white border border-purple-100 hover:border-purple-300 transition-all duration-300 hover:shadow-lg"
                >
                  <Eye className="w-8 h-8 mb-4" style={{ color: accent }} />
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    {area.title}
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Details Section */}
      <Section padding="large" className="bg-gradient-to-b from-white to-purple-50">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
              Professionelle Objektbetreuung
            </h2>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-white border border-purple-100">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  Regelmäßige Objektkontrollen
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Unsere Hausmeister führen täglich oder nach individuell vereinbartem Rhythmus Kontrollgänge 
                  durch. Dabei prüfen wir den Zustand der Immobilie, identifizieren Mängel frühzeitig und 
                  dokumentieren alle Beobachtungen für Sie.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-purple-100">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  Kleinreparaturen & Wartung
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Defekte Glühbirnen, klemme Türen, tropfende Wasserhähne – kleine Probleme werden von uns 
                  direkt vor Ort behoben. Bei größeren Reparaturen koordinieren wir Fachhandwerker und 
                  überwachen die Ausführung der Arbeiten.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-purple-100">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  Ihr persönlicher Ansprechpartner
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Mieter und Eigentümer haben mit unserem Hausmeister einen festen, verlässlichen Ansprechpartner. 
                  Wir kümmern uns um Anliegen, nehmen Beschwerden entgegen und sorgen für schnelle Lösungen – 
                  damit Sie sich um nichts kümmern müssen.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section padding="large" className="bg-gradient-to-br from-purple-900 to-indigo-800 text-white">
        <Container size="default">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ihr Hausmeister für Berlin
            </h2>
            <p className="text-lg text-purple-100 mb-8 leading-relaxed">
              Lassen Sie uns die Betreuung Ihrer Immobilie übernehmen. Kontaktieren Sie uns für 
              ein unverbindliches Beratungsgespräch – wir erstellen Ihnen ein individuelles Angebot.
            </p>
            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-purple-900 bg-white hover:bg-purple-50 transition-all duration-300 hover:scale-105 shadow-lg"
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
