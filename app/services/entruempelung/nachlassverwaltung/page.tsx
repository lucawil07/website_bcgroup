import { Metadata } from 'next'
import Link from 'next/link'
import { Container, Section } from '@/components/ui'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { CTAContact } from '@/components/sections'
import { Leaf, CheckCircle, Heart, Clock, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Nachlassverwaltung Berlin - Einfühlsam & Diskret | BC Group',
  description: 'Professionelle Nachlassverwaltung und Haushaltsauflösung nach Todesfall in Berlin. Wertschätzend, diskret und entlastend für Angehörige.',
  keywords: 'nachlassverwaltung berlin, haushaltsauflösung todesfall, wohnungsauflösung nachlass, entrümpelung todesfall',
}

export default function NachlassverwaltungPage() {
  const accent = '#10b981'

  const benefits = [
    {
      icon: Heart,
      title: 'Wertschätzender Service',
      description: 'Respektvoller und sensibler Umgang mit dem Nachlass Ihrer Angehörigen',
    },
    {
      icon: Clock,
      title: 'Schnelle Abwicklung',
      description: 'Entlastung in einer schwierigen Zeit durch zügige Bearbeitung',
    },
    {
      icon: Shield,
      title: 'Entlastung für Familien',
      description: 'Wir übernehmen die belastenden Aufgaben für Sie',
    },
  ]

  const services = [
    'Komplette Haushaltsauflösung nach Todesfall',
    'Sortierung und Sicherung wichtiger Dokumente',
    'Wertgegenständeverzeichnis und -übergabe',
    'Fachgerechte Entsorgung von Hausrat',
    'Endreinigung der Wohnung',
    'Koordination mit Behörden und Vermietern',
  ]

  return (
    <>
      {/* Hero Section */}
      <Section padding="large" className="relative overflow-hidden pt-32 pb-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-700/5 via-transparent to-teal-600/5" />
        
        <Container size="default" className="relative z-10">
          <Breadcrumb 
            items={[
              { label: 'Services', href: '/#content-start' },
              { label: 'Entrümpelung', href: '/services/entruempelung' },
              { label: 'Nachlassverwaltung' },
            ]}
            accentColor={accent}
          />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200">
              <Leaf className="w-4 h-4 text-emerald-700" />
              <span className="text-sm font-bold uppercase tracking-wider text-emerald-900">
                Nachlassverwaltung
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-neutral-900 leading-tight">
              Einfühlsame Nachlassverwaltung in Berlin
            </h1>

            <p className="text-xl text-neutral-700 leading-relaxed mb-8">
              In einer schwierigen Zeit übernehmen wir die belastende Aufgabe der Haushaltsauflösung 
              mit Respekt und Sensibilität. Wir entlasten Familien durch schnelle und diskrete Abwicklung.
            </p>

            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: accent }}
            >
              Einfühlsame Beratung
            </Link>
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section padding="large" background="white">
        <Container size="default">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
            Warum BC Group für Nachlassverwaltung?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div 
                  key={index}
                  className="p-6 rounded-2xl border-2 border-neutral-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-lg"
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
      <Section padding="large" className="bg-gradient-to-b from-white to-emerald-50">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center">
              Unsere Leistungen
            </h2>
            
            <p className="text-lg text-neutral-700 mb-8 text-center">
              Wir übernehmen alle Aufgaben rund um die Nachlassverwaltung und 
              entlasten Sie in dieser schweren Zeit:
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-emerald-100 hover:border-emerald-300 transition-colors"
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
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
              Unser einfühlsamer Prozess
            </h2>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-100">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  1. Persönliches Gespräch
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  In einem ersten Gespräch besprechen wir Ihre Wünsche und den Umfang der Arbeiten. 
                  Wir nehmen uns Zeit für Ihre Fragen und klären alle Details in Ruhe.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-100">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  2. Besichtigung & Planung
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Wir besichtigen die Räumlichkeiten und erstellen einen detaillierten Plan. 
                  Sie teilen uns mit, welche Gegenstände besonderen Wert haben oder behalten werden sollen.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-100">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  3. Sorgfältige Sortierung
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Wir sortieren den Nachlass gewissenhaft. Wichtige Dokumente, Wertgegenstände und 
                  persönliche Erinnerungsstücke werden gesichert und Ihnen zur Durchsicht übergeben.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-100">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  4. Fachgerechte Entsorgung
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Der verbleibende Hausrat wird fachgerecht entsorgt. Wir achten dabei auf umweltgerechte 
                  Verwertung und spenden wenn möglich noch brauchbare Gegenstände an soziale Einrichtungen.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-100">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  5. Endreinigung & Übergabe
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Abschließend reinigen wir die Räumlichkeiten gründlich, sodass Sie diese in 
                  ordnungsgemäßem Zustand an den Vermieter übergeben können.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Special Note */}
      <Section padding="large" className="bg-gradient-to-br from-emerald-900 to-emerald-700 text-white">
        <Container size="default">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Wir sind für Sie da
            </h2>
            <p className="text-lg text-emerald-100 mb-8 leading-relaxed">
              Der Verlust eines geliebten Menschen ist schmerzhaft genug. Lassen Sie uns Ihnen 
              die Last der Haushaltsauflösung abnehmen. Wir arbeiten diskret, respektvoll und 
              mit der nötigen Sensibilität. Kontaktieren Sie uns für ein vertrauliches Gespräch.
            </p>
            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-emerald-900 bg-white hover:bg-emerald-50 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Vertrauliches Gespräch vereinbaren
            </Link>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTAContact />
    </>
  )
}
