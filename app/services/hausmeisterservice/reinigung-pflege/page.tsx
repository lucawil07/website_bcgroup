import { Metadata } from 'next'
import Link from 'next/link'
import { Container, Section } from '@/components/ui'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { CTAContact } from '@/components/sections'
import { Droplet, CheckCircle, Sparkles, Shield, Calendar, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Reinigung & Pflege Berlin - Treppenhausreinigung & Gebäudereinigung | BC Group',
  description: 'Professionelle Reinigung in Berlin: Treppenhausreinigung, Kellerreinigung, Glasreinigung und mehr. Dauerhaft gepflegte Objekte durch BC Hausmeisterservice.',
  keywords: 'treppenhausreinigung berlin, gebäudereinigung, kellerreinigung, fensterreinigung berlin, tiefgaragenreinigung, objektreinigung',
}

export default function ReinigungPflegePage() {
  const accent = '#8b5cf6'

  const benefits = [
    {
      icon: Sparkles,
      title: 'Professionelle Ausrüstung',
      description: 'Moderne Reinigungsgeräte und umweltfreundliche Reinigungsmittel',
    },
    {
      icon: Calendar,
      title: 'Regelmäßige Intervalle',
      description: 'Planbare Reinigungszyklen nach Ihren Wünschen',
    },
    {
      icon: Award,
      title: 'Geschultes Personal',
      description: 'Erfahrene Reinigungskräfte mit hohen Qualitätsstandards',
    },
  ]

  const cleaningServices = [
    'Treppenhausreinigung inkl. Beleuchtungskontrolle',
    'Keller- und Flurreinigung',
    'Fenster- und Glasreinigung',
    'Tiefgaragenreinigung',
    'Mülltonnenservice – Bereitstellen & Reinigen',
    'Fassaden- und Außenreinigung',
    'Reinigung von Gemeinschaftsräumen',
    'Türen, Handläufe und Geländer',
  ]

  const cleaningTypes = [
    {
      title: 'Unterhaltsreinigung',
      description: 'Regelmäßige Reinigung im vereinbarten Rhythmus (täglich, wöchentlich, monatlich)',
      frequency: 'Individuell planbar',
    },
    {
      title: 'Grundreinigung',
      description: 'Intensive Tiefenreinigung aller Bereiche mit Spezialreinigern',
      frequency: 'Halbjährlich / jährlich',
    },
    {
      title: 'Sonderreinigung',
      description: 'Nach Bedarf bei besonderen Verschmutzungen oder Ereignissen',
      frequency: 'Nach Absprache',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <Section padding="large" className="relative overflow-hidden pt-32 pb-20 bg-gradient-to-br from-cyan-50 via-white to-blue-50">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-800/5 via-transparent to-blue-600/5" />
        
        <Container size="default" className="relative z-10">
          <Breadcrumb 
            items={[
              { label: 'Services', href: '/#content-start' },
              { label: 'Hausmeisterservice', href: '/services/hausmeisterservice' },
              { label: 'Reinigung & Pflege' },
            ]}
            accentColor={accent}
          />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-cyan-100 border border-cyan-200">
              <Droplet className="w-4 h-4 text-cyan-700" />
              <span className="text-sm font-bold uppercase tracking-wider text-cyan-900">
                Reinigung & Pflege
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-neutral-900 leading-tight">
              Reinigung & Pflege in Berlin
            </h1>

            <p className="text-xl text-neutral-700 leading-relaxed mb-8">
              Ein sauberes Objekt ist die Basis für zufriedene Bewohner und Kunden. Unser Reinigungsservice 
              sorgt für dauerhaft gepflegte Bereiche – professionell, gründlich und zuverlässig.
            </p>

            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: accent }}
            >
              Kostenlos beraten lassen
            </Link>
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section padding="large" background="white">
        <Container size="default">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
            Warum BC Reinigungsservice?
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

      {/* Cleaning Services */}
      <Section padding="large" className="bg-gradient-to-b from-white to-cyan-50">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center">
              Unsere Reinigungsleistungen
            </h2>
            
            <p className="text-lg text-neutral-700 mb-8 text-center">
              Wir übernehmen alle anfallenden Reinigungsarbeiten in und um Ihre Immobilie:
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {cleaningServices.map((service, index) => (
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

      {/* Cleaning Types */}
      <Section padding="large" background="white">
        <Container size="default">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
              Reinigungsarten & Intervalle
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {cleaningTypes.map((type, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-2xl bg-gradient-to-br from-cyan-50 to-white border border-cyan-100 hover:border-cyan-300 transition-all duration-300 hover:shadow-lg"
                >
                  <Sparkles className="w-8 h-8 mb-4" style={{ color: accent }} />
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    {type.title}
                  </h3>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    {type.description}
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-sm font-semibold">
                    <Calendar className="w-4 h-4" />
                    {type.frequency}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Details Section */}
      <Section padding="large" className="bg-gradient-to-b from-white to-cyan-50">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
              Professionelle Gebäudereinigung
            </h2>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-white border border-cyan-100">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  Treppenhausreinigung
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Das Treppenhaus ist die Visitenkarte Ihrer Immobilie. Wir reinigen Stufen, Geländer, Handläufe 
                  und Fenster gründlich und kontrollieren dabei auch die Beleuchtung. Defekte Lampen werden direkt 
                  ausgetauscht – für ein sicheres und gepflegtes Erscheinungsbild.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-cyan-100">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  Keller- & Tiefgaragenreinigung
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Keller und Tiefgaragen sammeln schnell Schmutz und Staub. Wir sorgen für saubere Böden, 
                  entfernen Spinnweben und achten auf ordnungsgemäße Müllentsorgung. Auch die Reinigung von 
                  Lichtschächten und Kellerabgängen gehört zu unserem Service.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-cyan-100">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  Mülltonnenservice
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Wir stellen Ihre Mülltonnen pünktlich zur Abholung bereit und holen sie wieder zurück. 
                  Auf Wunsch reinigen wir die Tonnen regelmäßig, um Geruchsbildung und Ungeziefer vorzubeugen. 
                  Zusätzlich kontrollieren wir den Müllplatz auf Ordnung und Sauberkeit.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section padding="large" className="bg-gradient-to-br from-cyan-900 to-blue-800 text-white">
        <Container size="default">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ihr Objekt dauerhaft sauber
            </h2>
            <p className="text-lg text-cyan-100 mb-8 leading-relaxed">
              Überlassen Sie uns die Reinigung und Pflege Ihrer Immobilie. Wir erstellen Ihnen ein 
              individuelles Reinigungskonzept – abgestimmt auf Ihre Anforderungen und Ihr Budget.
            </p>
            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-cyan-900 bg-white hover:bg-cyan-50 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Angebot einholen
            </Link>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTAContact />
    </>
  )
}
