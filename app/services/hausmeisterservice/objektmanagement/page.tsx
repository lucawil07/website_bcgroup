import { Metadata } from 'next'
import Link from 'next/link'
import { Container, Section } from '@/components/ui'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { CTAContact } from '@/components/sections'
import { Lightbulb, CheckCircle, Home, Key, FileCheck, PhoneCall } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Objektmanagement & Betreuung Berlin - Immobilienverwaltung | BC Group',
  description: 'Professionelles Objektmanagement in Berlin: Wohnungsübergaben, Protokollierung, Schlüsselverwaltung und 24/7 Notdienst durch BC Hausmeisterservice.',
  keywords: 'objektmanagement berlin, immobilienbetreuung, wohnungsübergabe, schlüsselverwaltung, notdienst hausmeister, objektbetreuung',
}

export default function ObjektmanagementPage() {
  const accent = '#8b5cf6'

  const benefits = [
    {
      icon: Home,
      title: 'Komplette Betreuung',
      description: 'Von Übergabe bis Verwaltung – alles aus einer Hand',
    },
    {
      icon: PhoneCall,
      title: '24/7 Erreichbar',
      description: 'Notdienst und Rufbereitschaft rund um die Uhr',
    },
    {
      icon: FileCheck,
      title: 'Professionelle Dokumentation',
      description: 'Lückenlose Protokollierung aller Vorgänge',
    },
  ]

  const managementServices = [
    'Übergabe und Abnahme von Wohnungen',
    'Protokollierung und Meldung von Mängeln',
    'Postannahme und Schlüsselausgabe',
    'Ansprechpartner für Hausverwaltungen',
    '24/7 Notdienst und Rufbereitschaft',
    'Koordination von Handwerkern',
    'Überwachung von Reparaturen',
    'Mieterwechsel-Management',
  ]

  const serviceAreas = [
    {
      title: 'Wohnungsübergaben',
      description: 'Professionelle Übergabe- und Abnahmeprotokolle mit Fotodokumentation',
      icon: Key,
      details: [
        'Übergabeprotokoll mit Zustandsbeschreibung',
        'Fotodokumentation aller Räume',
        'Zählerstandserfassung',
        'Schlüsselübergabe und -verwaltung',
      ],
    },
    {
      title: 'Mängelmanagement',
      description: 'Systematische Erfassung, Meldung und Überwachung von Mängeln',
      icon: FileCheck,
      details: [
        'Erfassung und Dokumentation von Schäden',
        'Meldung an Eigentümer/Verwaltung',
        'Koordination von Handwerkern',
        'Kontrolle der Mängelbeseitigung',
      ],
    },
    {
      title: 'Notfallmanagement',
      description: '24/7 Erreichbarkeit bei technischen Notfällen und dringenden Problemen',
      icon: PhoneCall,
      details: [
        'Rufbereitschaft rund um die Uhr',
        'Sofortmaßnahmen bei Notfällen',
        'Koordination von Notdiensten',
        'Schadensbegrenzung und Dokumentation',
      ],
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <Section padding="large" className="relative overflow-hidden pt-32 pb-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-800/5 via-transparent to-purple-600/5" />
        
        <Container size="default" className="relative z-10">
          <Breadcrumb 
            items={[
              { label: 'Services', href: '/#content-start' },
              { label: 'Hausmeisterservice', href: '/services/hausmeisterservice' },
              { label: 'Objektmanagement' },
            ]}
            accentColor={accent}
          />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-indigo-100 border border-indigo-200">
              <Lightbulb className="w-4 h-4 text-indigo-700" />
              <span className="text-sm font-bold uppercase tracking-wider text-indigo-900">
                Objektmanagement
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-neutral-900 leading-tight">
              Objekt&shy;management & Betreuung in Berlin
            </h1>

            <p className="text-xl text-neutral-700 leading-relaxed mb-8">
              Wir übernehmen nicht nur die Pflege, sondern auch die Verwaltung und technische Betreuung 
              Ihrer Immobilie – professionell, zuverlässig und mit 24/7 Rufbereitschaft.
            </p>

            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: accent }}
            >
              Objektbetreuung anfragen
            </Link>
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section padding="large" background="white">
        <Container size="default">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
            Professionelles Objektmanagement
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div 
                  key={index}
                  className="p-6 rounded-2xl border-2 border-neutral-100 hover:border-indigo-200 transition-all duration-300 hover:shadow-lg"
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

      {/* Management Services */}
      <Section padding="large" className="bg-gradient-to-b from-white to-indigo-50">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center">
              Unsere Management-Leistungen
            </h2>
            
            <p className="text-lg text-neutral-700 mb-8 text-center">
              Wir bieten umfassendes Objektmanagement für Ihre Immobilie:
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {managementServices.map((service, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-indigo-100 hover:border-indigo-300 transition-colors"
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: accent }} />
                  <span className="text-neutral-800 font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Service Areas Detail */}
      <Section padding="large" background="white">
        <Container size="default">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
              Leistungsbereiche im Detail
            </h2>

            <div className="space-y-8">
              {serviceAreas.map((area, index) => {
                const Icon = area.icon
                return (
                  <div 
                    key={index}
                    className="p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 hover:border-indigo-300 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="flex items-start gap-6">
                      <div 
                        className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${accent}20` }}
                      >
                        <Icon className="w-8 h-8" style={{ color: accent }} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                          {area.title}
                        </h3>
                        <p className="text-neutral-700 leading-relaxed mb-6">
                          {area.description}
                        </p>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {area.details.map((detail, didx) => (
                            <div key={didx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                              <span className="text-sm text-neutral-700">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* Details Section */}
      <Section padding="large" className="bg-gradient-to-b from-white to-indigo-50">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
              Ihr Ansprechpartner vor Ort
            </h2>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-white border border-indigo-100">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  Für Mieter & Eigentümer
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Als Ihr Hausmeister sind wir der zentrale Ansprechpartner für alle Anliegen rund um die Immobilie. 
                  Mieter wenden sich bei Problemen direkt an uns, Eigentümer und Hausverwaltungen erhalten regelmäßige 
                  Berichte über den Zustand des Objekts. Wir koordinieren Handwerker, überwachen Reparaturen und 
                  sorgen für reibungslose Abläufe.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-indigo-100">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  24/7 Notdienst
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Bei technischen Notfällen wie Wasserrohrbrüchen, Heizungsausfällen oder Sturmschäden sind wir 
                  rund um die Uhr für Sie erreichbar. Unser Notdienstteam leitet sofort Sofortmaßnahmen ein, 
                  koordiniert Fachfirmen und dokumentiert alle Vorgänge – damit Schäden minimiert werden und Sie 
                  rechtlich abgesichert sind.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-indigo-100">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  Digitale Dokumentation
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Alle Vorgänge – von Wohnungsübergaben über Mängelmeldungen bis zu Reparaturen – werden von uns 
                  digital dokumentiert. Sie erhalten jederzeit Zugriff auf Übergabeprotokolle, Fotodokumentationen 
                  und Einsatzberichte. Diese lückenlose Dokumentation schafft Transparenz und rechtliche Sicherheit.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section padding="large" className="bg-gradient-to-br from-indigo-900 to-purple-800 text-white">
        <Container size="default">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ihre Immobilie in besten Händen
            </h2>
            <p className="text-lg text-indigo-100 mb-8 leading-relaxed">
              Überlassen Sie uns die komplette Betreuung Ihrer Immobilie. Wir erstellen Ihnen ein 
              individuelles Betreuungskonzept – abgestimmt auf Ihre Anforderungen.
            </p>
            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-indigo-900 bg-white hover:bg-indigo-50 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Beratung vereinbaren
            </Link>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTAContact />
    </>
  )
}
