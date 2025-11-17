import { Metadata } from 'next'
import Link from 'next/link'
import { Container, Section } from '@/components/ui'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { CTAContact } from '@/components/sections'
import { Building2, CheckCircle, HardHat, Recycle, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Baustellenräumung Berlin - Schnell & Fachgerecht | BC Group',
  description: 'Professionelle Baustellenräumung und Schuttentsorgung in Berlin. Sichere Arbeitsweise, fachgerechte Entsorgung, schnelle Abwicklung.',
  keywords: 'baustellenräumung berlin, baustellenentrümpelung, schuttentsorgung, bauraumfreistellung',
}

export default function BaustellenPage() {
  const accent = '#059669'

  const benefits = [
    {
      icon: HardHat,
      title: 'Sichere Arbeitsweise',
      description: 'Alle Sicherheitsvorschriften und Baustellenstandards werden eingehalten',
    },
    {
      icon: Recycle,
      title: 'Fachgerechte Entsorgung',
      description: 'Trennung und umweltgerechte Entsorgung aller Baumaterialien',
    },
    {
      icon: Clock,
      title: 'Schnelle Abwicklung',
      description: 'Termingerechte Durchführung ohne Verzögerungen',
    },
  ]

  const services = [
    'Bauraumfreistellung vor Beginn der Arbeiten',
    'Entrümpelung während der Bauphase',
    'Endreinigung nach Fertigstellung',
    'Schuttentsorgung und Containerservice',
    'Demontage von Baustelleneinrichtungen',
    'Entsorgung von Restmaterialien',
  ]

  return (
    <>
      {/* Hero Section */}
      <Section padding="large" className="relative overflow-hidden pt-32 pb-20 bg-gradient-to-br from-emerald-50 via-white to-green-50">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-700/5 via-transparent to-green-600/5" />
        
        <Container size="default" className="relative z-10">
          <Breadcrumb 
            items={[
              { label: 'Services', href: '/#content-start' },
              { label: 'Entrümpelung', href: '/services/entruempelung' },
              { label: 'Baustellen' },
            ]}
            accentColor={accent}
          />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-green-100 border border-green-200">
              <Building2 className="w-4 h-4 text-green-700" />
              <span className="text-sm font-bold uppercase tracking-wider text-green-900">
                Baustellenräumung
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-neutral-900 leading-tight">
              Professionelle Baustellenräumung in Berlin
            </h1>

            <p className="text-xl text-neutral-700 leading-relaxed mb-8">
              Schnelle und fachgerechte Baustellenentrümpelung und Schuttentsorgung. 
              Wir sorgen für freie Arbeitsbereiche und eine saubere Baustelle.
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
            Ihre Vorteile bei der Baustellenräumung
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div 
                  key={index}
                  className="p-6 rounded-2xl border-2 border-neutral-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg"
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
      <Section padding="large" className="bg-gradient-to-b from-white to-green-50">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center">
              Unsere Baustellenservices
            </h2>
            
            <p className="text-lg text-neutral-700 mb-8 text-center">
              Von der Vorbereitung bis zur Endreinigung - wir begleiten Ihr Bauprojekt 
              mit professionellen Räumungsservices:
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-green-100 hover:border-green-300 transition-colors"
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: accent }} />
                  <span className="text-neutral-800 font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Details Section */}
      <Section padding="large" background="white">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
              Baustellenspezifische Anforderungen
            </h2>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-white border border-green-100">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  Sicherheit auf der Baustelle
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Unser Team ist mit allen notwendigen Sicherheitsausrüstungen ausgestattet und geschult. 
                  Wir arbeiten nach den geltenden Arbeitssicherheitsvorschriften und koordinieren uns 
                  mit anderen Gewerken auf der Baustelle.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-white border border-green-100">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  Materialtrennung & Recycling
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Wir trennen Baumaterialien fachgerecht: Beton, Holz, Metall, Glas und Sondermüll 
                  werden getrennt gesammelt und den entsprechenden Entsorgungswegen zugeführt. 
                  So maximieren wir die Recyclingquote.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-white border border-green-100">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  Container & Logistik
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Je nach Projektgröße stellen wir die passenden Container bereit und organisieren 
                  die Logistik. Von kleinen Baucontainern bis zu großen Absetzcontainern - 
                  wir haben die richtige Lösung für Ihr Projekt.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-white border border-green-100">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  Zeitliche Flexibilität
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Bauprojekte verlaufen selten nach Plan. Wir passen uns flexibel an Ihre Zeitpläne an 
                  und sind auch für kurzfristige Einsätze verfügbar. Bei Bedarf auch außerhalb 
                  der regulären Arbeitszeiten.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section padding="large" className="bg-gradient-to-br from-green-900 to-green-700 text-white">
        <Container size="default">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Baustelle räumen lassen?
            </h2>
            <p className="text-lg text-green-100 mb-8 leading-relaxed">
              Konzentrieren Sie sich auf das Wesentliche - wir kümmern uns um die Räumung. 
              Kontaktieren Sie uns für ein unverbindliches Angebot.
            </p>
            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-green-900 bg-white hover:bg-green-50 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Jetzt Angebot anfordern
            </Link>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTAContact />
    </>
  )
}
