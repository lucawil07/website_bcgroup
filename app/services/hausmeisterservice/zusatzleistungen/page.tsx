import { Metadata } from 'next'
import Link from 'next/link'
import { Container, Section } from '@/components/ui'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { CTAContact } from '@/components/sections'
import { Hammer, CheckCircle, Trash2, TruckIcon, Wrench, PackageCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Zusatzleistungen Hausmeisterservice Berlin - Flexible Services | BC Group',
  description: 'Flexible Zusatzleistungen für Ihr Objekt: Entrümpelung, Kleintransporte, Montagearbeiten und mehr. Individuell kombinierbar durch BC Hausmeisterservice.',
  keywords: 'hausmeister zusatzleistungen berlin, entrümpelung, kleintransporte, montagearbeiten, sperrmüll berlin, hausmeister services',
}

export default function ZusatzleistungenPage() {
  const accent = '#8b5cf6'

  const benefits = [
    {
      icon: PackageCheck,
      title: 'Flexibel kombinierbar',
      description: 'Alle Services einzeln oder als Paket buchbar',
    },
    {
      icon: Wrench,
      title: 'Fachgerecht ausgeführt',
      description: 'Professionelle Umsetzung durch erfahrenes Personal',
    },
    {
      icon: TruckIcon,
      title: 'Alles aus einer Hand',
      description: 'Koordination und Durchführung durch ein Team',
    },
  ]

  const additionalServices = [
    {
      title: 'Entrümpelungen & Sperrmüllservice',
      icon: Trash2,
      description: 'Professionelle Räumung und fachgerechte Entsorgung von Sperrgut und Hausrat',
      services: [
        'Wohnungsentrümpelung',
        'Kellerentrümpelung',
        'Speicherräumung',
        'Sperrmüllentsorgung',
        'Elektronikentsorgung',
        'Fachgerechte Mülltrennung',
      ],
      link: '/services/entruempelung',
    },
    {
      title: 'Kleintransporte innerhalb des Objekts',
      icon: TruckIcon,
      description: 'Transport von Gegenständen, Möbeln oder Material innerhalb der Liegenschaft',
      services: [
        'Möbeltransport zwischen Etagen',
        'Umzug in neue Wohnung innerhalb des Gebäudes',
        'Transport von Geräten und Material',
        'Kellerberäumung zu Stellplätzen',
        'Paket- und Sperrgutannahme',
        'Bereitstellung zu Abholpunkten',
      ],
      link: null,
    },
    {
      title: 'Montagearbeiten',
      icon: Hammer,
      description: 'Installation und Montage von Ausstattung, Möbeln und Beschilderung',
      services: [
        'Schilder montieren (Hausnummern, Hinweisschilder)',
        'Möbelmontage (Regale, Schränke)',
        'Gardinenstangen anbringen',
        'Bilder und Spiegel aufhängen',
        'Lampen und Leuchten montieren',
        'Briefkastenanlagen installieren',
      ],
      link: null,
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <Section padding="large" className="relative overflow-hidden pt-32 pb-20 bg-gradient-to-br from-violet-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-800/5 via-transparent to-purple-600/5" />
        
        <Container size="default" className="relative z-10">
          <Breadcrumb 
            items={[
              { label: 'Services', href: '/#content-start' },
              { label: 'Hausmeisterservice', href: '/services/hausmeisterservice' },
              { label: 'Zusatzleistungen' },
            ]}
            accentColor={accent}
          />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-purple-100 border border-purple-200">
              <Hammer className="w-4 h-4 text-purple-700" />
              <span className="text-sm font-bold uppercase tracking-wider text-purple-900">
                Zusatzleistungen
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-neutral-900 leading-tight">
              Sonstige Zusatz&shy;leistungen in Berlin
            </h1>

            <p className="text-xl text-neutral-700 leading-relaxed mb-8">
              Flexible Zusatzservices – individuell auf Ihre Anforderungen abgestimmt und 
              fachgerecht umgesetzt. Von Entrümpelung bis Montagearbeiten.
            </p>

            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: accent }}
            >
              Zusatzleistung anfragen
            </Link>
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section padding="large" background="white">
        <Container size="default">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
            Ihre Vorteile bei Zusatzleistungen
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

      {/* Additional Services Detail */}
      <Section padding="large" className="bg-gradient-to-b from-white to-purple-50">
        <Container size="default">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 text-center">
              Unsere Zusatzleistungen im Detail
            </h2>
            <p className="text-lg text-neutral-600 mb-12 text-center">
              Alle Services sind flexibel buchbar – einzeln oder in Kombination mit unseren Hausmeisterdiensten
            </p>

            <div className="space-y-8">
              {additionalServices.map((service, index) => {
                const Icon = service.icon
                return (
                  <div 
                    key={index}
                    className="p-8 rounded-2xl bg-white border-2 border-purple-100 hover:border-purple-300 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="flex items-start gap-6 mb-6">
                      <div 
                        className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${accent}20` }}
                      >
                        <Icon className="w-8 h-8" style={{ color: accent }} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                          {service.title}
                        </h3>
                        <p className="text-neutral-700 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 pl-6">
                      {service.services.map((item, sidx) => (
                        <div key={sidx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 flex-shrink-0 mt-1" style={{ color: accent }} />
                          <span className="text-sm text-neutral-800 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>

                    {service.link && (
                      <div className="mt-6 pl-6">
                        <Link 
                          href={service.link}
                          className="inline-flex items-center gap-2 font-semibold transition-all hover:translate-x-2"
                          style={{ color: accent }}
                        >
                          <span className="text-sm">Mehr erfahren</span>
                          <span>→</span>
                        </Link>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* Use Cases Section */}
      <Section padding="large" background="white">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
              Typische Einsatzfälle
            </h2>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-white border border-purple-100">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  Mieterwechsel & Wohnungsübergabe
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Bei Mieterwechseln übernehmen wir die komplette Abwicklung: Wir räumen verbliebenen Hausrat, 
                  entsorgen Sperrmüll, führen Kleinreparaturen durch und montieren neue Ausstattung. So ist die 
                  Wohnung schnell wieder vermietbar – ohne dass Sie sich um Details kümmern müssen.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-white border border-purple-100">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  Modernisierung & Sanierung
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Während Modernisierungsmaßnahmen unterstützen wir mit Transportleistungen, Montagearbeiten 
                  und der Entsorgung alter Ausstattung. Wir koordinieren uns mit Handwerkern und sorgen für 
                  einen reibungslosen Ablauf der Arbeiten.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-white border border-purple-100">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  Gemeinschaftsbereiche & Ausstattung
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Neue Briefkastenanlage, Namensschilder, Hinweistafeln oder Fahrradständer – wir übernehmen 
                  die fachgerechte Montage. Auch beim Aufbau von Gemeinschaftsräumen mit Möbeln und Ausstattung 
                  sind wir Ihr kompetenter Partner.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section padding="large" className="bg-gradient-to-br from-purple-900 to-violet-800 text-white">
        <Container size="default">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Individuelle Zusatzleistungen
            </h2>
            <p className="text-lg text-purple-100 mb-8 leading-relaxed">
              Sie benötigen weitere Services für Ihr Objekt? Sprechen Sie uns an – wir finden eine 
              Lösung für Ihre individuellen Anforderungen.
            </p>
            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-purple-900 bg-white hover:bg-purple-50 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Jetzt anfragen
            </Link>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTAContact />
    </>
  )
}
