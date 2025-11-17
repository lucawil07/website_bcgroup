import { Metadata } from 'next'
import Link from 'next/link'
import { Container, Section } from '@/components/ui'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { CTAContact } from '@/components/sections'
import { Recycle, CheckCircle, Leaf, TrendingDown, Package } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Recycling & Entsorgung Berlin - 100% Nachhaltig | BC Group',
  description: 'Nachhaltige Verwertung von Bauschutt und Materialien in Berlin. 100% fachgerecht, optimal wiederverwertbar und umweltschonend.',
  keywords: 'recycling berlin, bauschuttentsorgung, materialverwertung, nachhaltige entsorgung, umweltgerechte entsorgung',
}

export default function RecyclingEntsorgungPage() {
  const accent = '#d97706'

  const benefits = [
    {
      icon: Leaf,
      title: '100% nachhaltig',
      description: 'Alle Materialien werden nach strengsten Umweltstandards sortiert und verwertet',
    },
    {
      icon: TrendingDown,
      title: 'Optimale Wiederverwertung',
      description: 'Maximale Recyclingquote durch professionelle Trennung und Aufbereitung',
    },
    {
      icon: Package,
      title: 'Fachgerecht',
      description: 'Zertifizierte Entsorgung gemäß allen gesetzlichen Vorschriften und Normen',
    },
  ]

  const materialTypes = [
    'Betonabbruch und Mauersteine',
    'Metallschrott (Eisen, Stahl, Buntmetalle)',
    'Holz und Holzwerkstoffe',
    'Kunststoffe und Dämmmaterialien',
    'Glas, Keramik und Fliesen',
    'Elektroschrott und Kabel',
  ]

  return (
    <>
      {/* Hero Section */}
      <Section padding="large" className="relative overflow-hidden pt-32 pb-20 bg-gradient-to-br from-amber-50 via-white to-green-50">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/5 via-transparent to-green-600/5" />
        
        <Container size="default" className="relative z-10">
          <Breadcrumb 
            items={[
              { label: 'Services', href: '/#content-start' },
              { label: 'Abriss', href: '/services/abriss' },
              { label: 'Recycling & Entsorgung' },
            ]}
            accentColor={accent}
          />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-amber-100 border border-amber-200">
              <Recycle className="w-4 h-4 text-amber-700" />
              <span className="text-sm font-bold uppercase tracking-wider text-amber-900">
                Recycling & Entsorgung
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-neutral-900 leading-tight">
              Nachhaltige Verwertung von Bauschutt
            </h1>

            <p className="text-xl text-neutral-700 leading-relaxed mb-8">
              100% nachhaltige und fachgerechte Entsorgung aller Abrissmaterialien. 
              Wir trennen, sortieren und recyceln Bauschutt nach höchsten Umweltstandards. 
              Maximale Wiederverwertung für eine saubere Zukunft.
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
            Ihre Vorteile bei der BC Group
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div 
                  key={index}
                  className="p-6 rounded-2xl border-2 border-neutral-100 hover:border-amber-200 transition-all duration-300 hover:shadow-lg"
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

      {/* Materials Section */}
      <Section padding="large" className="bg-gradient-to-b from-white to-amber-50">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center">
              Was wird recycelt?
            </h2>
            
            <p className="text-lg text-neutral-700 mb-8 text-center">
              Wir verwerten alle Materialfraktionen aus dem Gebäudeabriss professionell und nachhaltig:
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {materialTypes.map((material, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-amber-100 hover:border-amber-300 transition-colors"
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: accent }} />
                  <span className="text-neutral-800 font-medium">{material}</span>
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
              Unser Recycling-Prozess
            </h2>

            <div className="space-y-6">
              {[
                {
                  step: '1',
                  title: 'Materialerfassung',
                  description: 'Detaillierte Erfassung aller anfallenden Materialien bereits während der Abrissplanung.',
                },
                {
                  step: '2',
                  title: 'Vor-Ort-Trennung',
                  description: 'Sorgfältige Trennung der Materialien direkt auf der Baustelle in verschiedene Fraktionen.',
                },
                {
                  step: '3',
                  title: 'Fachgerechter Transport',
                  description: 'Abtransport der sortierten Materialien zu zertifizierten Recyclinganlagen und Verwertern.',
                },
                {
                  step: '4',
                  title: 'Professionelle Aufbereitung',
                  description: 'Weitere Aufbereitung in Spezialanlagen: Brechen, Sieben, Sortieren für optimale Verwertung.',
                },
                {
                  step: '5',
                  title: 'Dokumentation',
                  description: 'Lückenlose Dokumentation aller Entsorgungswege mit Entsorgungsnachweisen für Ihre Unterlagen.',
                },
              ].map((step, index) => (
                <div 
                  key={index}
                  className="flex gap-6 p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-white border border-amber-100"
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

      {/* Recycling Impact */}
      <Section padding="large" className="bg-gradient-to-br from-amber-900 to-amber-700 text-white">
        <Container size="default">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Umweltschutz durch Recycling
            </h2>
            <p className="text-lg text-amber-100 mb-8 leading-relaxed">
              Durch fachgerechtes Recycling können bis zu 95% der Abrissmaterialien wiederverwertet werden. 
              Das spart wertvolle Ressourcen, reduziert CO₂-Emissionen und schont die Umwelt. 
              Beton wird zu Recycling-Baustoffen, Metalle werden eingeschmolzen, Holz wird zu Biomasse oder Spanplatten verarbeitet. 
              Wir dokumentieren alle Verwertungswege transparent und stellen Ihnen alle erforderlichen Nachweise zur Verfügung.
            </p>
            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-amber-900 bg-white hover:bg-amber-50 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Jetzt Angebot einholen
            </Link>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTAContact />
    </>
  )
}
