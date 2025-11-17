import { Metadata } from 'next'
import Link from 'next/link'
import { Container, Section } from '@/components/ui'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { CTAContact } from '@/components/sections'
import { Warehouse, CheckCircle, Droplets, Package, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Kellerentrümpelung Berlin - Keller professionell räumen | BC Group',
  description: 'Professionelle Kellerentrümpelung in Berlin. Tiefgaragen, Lagerkeller, Überbau-Kammern - wir räumen überfüllte Keller komplett und gesäubert.',
  keywords: 'kellerentrümpelung berlin, keller räumen, kellerräumung, tiefgarage entrümpeln',
}

export default function KellerbereichePage() {
  const accent = '#047857'

  const benefits = [
    {
      icon: Shield,
      title: 'Sichere Arbeitsweise',
      description: 'Professionelle Räumung auch in engen Kellerbereichen',
    },
    {
      icon: Droplets,
      title: 'Feuchtigkeitsschutz',
      description: 'Fachgerechter Umgang mit feuchten oder schimmeligen Bereichen',
    },
    {
      icon: Package,
      title: 'Komplettservice',
      description: 'Von der Entrümpelung bis zur Endreinigung',
    },
  ]

  const kellerTypes = [
    'Tiefgaragen und Untergeschosse',
    'Lagerkeller und Abstellräume',
    'Überbau-Kammern und Verschläge',
    'Gewölbekeller in Altbauten',
    'Mehrfamilienhäuser mit Kellerabteilen',
    'Gewerbliche Kellerräume',
  ]

  return (
    <>
      {/* Hero Section */}
      <Section padding="large" className="relative overflow-hidden pt-32 pb-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-800/5 via-transparent to-teal-600/5" />
        
        <Container size="default" className="relative z-10">
          <Breadcrumb 
            items={[
              { label: 'Services', href: '/#content-start' },
              { label: 'Entrümpelung', href: '/services/entruempelung' },
              { label: 'Kellerbereiche' },
            ]}
            accentColor={accent}
          />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-teal-100 border border-teal-200">
              <Warehouse className="w-4 h-4 text-teal-700" />
              <span className="text-sm font-bold uppercase tracking-wider text-teal-900">
                Kellerbereiche
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-neutral-900 leading-tight">
              Kellerentrümpelung in Berlin
            </h1>

            <p className="text-xl text-neutral-700 leading-relaxed mb-8">
              Überfüllte Keller komplett geleert und gesäubert. Wir räumen Tiefgaragen, Lagerkeller 
              und Überbau-Kammern professionell und zuverlässig.
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
            Warum BC Group für Ihre Kellerentrümpelung?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div 
                  key={index}
                  className="p-6 rounded-2xl border-2 border-neutral-100 hover:border-teal-200 transition-all duration-300 hover:shadow-lg"
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

      {/* Keller Types */}
      <Section padding="large" className="bg-gradient-to-b from-white to-teal-50">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center">
              Welche Kellerbereiche räumen wir?
            </h2>
            
            <p className="text-lg text-neutral-700 mb-8 text-center">
              Unsere Erfahrung umfasst alle Arten von Kellerbereichen - 
              von kleinen Abstellkammern bis zu großen Tiefgaragen:
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {kellerTypes.map((type, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-teal-100 hover:border-teal-300 transition-colors"
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: accent }} />
                  <span className="text-neutral-800 font-medium">{type}</span>
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
              Besonderheiten der Kellerentrümpelung
            </h2>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-teal-50 to-white border border-teal-100">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  Feuchtigkeit & Schimmel
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Viele Keller leiden unter Feuchtigkeit oder Schimmelbefall. Unser Team ist geschult 
                  im fachgerechten Umgang mit kontaminierten Materialien und trägt entsprechende Schutzausrüstung.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-teal-50 to-white border border-teal-100">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  Enge Zugangswege
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Schmale Treppen, niedrige Deckenhöhen, verwinkelte Gänge - wir haben die Erfahrung 
                  und das Equipment, um auch schwierige Kellerbereiche effizient zu räumen.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-teal-50 to-white border border-teal-100">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  Wertsachen & Fundstücke
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  In alten Kellern finden sich oft vergessene Schätze. Wir sortieren sorgfältig und 
                  übergeben Ihnen alle wertvollen oder wichtigen Fundstücke zur Durchsicht.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section padding="large" className="bg-gradient-to-br from-teal-900 to-teal-700 text-white">
        <Container size="default">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Keller voll? Wir helfen sofort!
            </h2>
            <p className="text-lg text-teal-100 mb-8 leading-relaxed">
              Egal wie vollgestellt oder verwinkelt Ihr Keller ist - wir räumen zuverlässig 
              und hinterlassen einen sauberen, leeren Raum. Kontaktieren Sie uns für eine kostenlose Besichtigung.
            </p>
            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-teal-900 bg-white hover:bg-teal-50 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Jetzt Termin vereinbaren
            </Link>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTAContact />
    </>
  )
}
