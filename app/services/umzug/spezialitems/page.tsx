import { Metadata } from 'next'
import Link from 'next/link'
import { Container, Section } from '@/components/ui'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { CTAContact } from '@/components/sections'
import { Package, CheckCircle, Shield, Music, Palette, Gem } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Spezialitems Transport Berlin - Klavier, Kunst & Antiquitäten | BC Group',
  description: 'Spezialisierter Transport für wertvolle Gegenstände in Berlin: Klaviere, Kunstwerke, Antiquitäten. Versichert und mit Fachleuten durchgeführt.',
  keywords: 'klaviertransport berlin, kunsttransport, antiquitäten transport, spezialtransport, wertvolle gegenstände umzug',
}

export default function SpezialitemsPage() {
  const accent = '#f97316'

  const benefits = [
    {
      icon: Shield,
      title: 'Spezialisierte Fachleute',
      description: 'Geschulte Mitarbeiter mit Expertise für den Umgang mit wertvollen Objekten',
    },
    {
      icon: Package,
      title: 'Spezialverpackung',
      description: 'Maßgeschneiderte Verpackungslösungen für empfindliche und wertvolle Gegenstände',
    },
    {
      icon: Gem,
      title: 'Wertversicherung',
      description: 'Umfassender Versicherungsschutz auch für hochwertige und antike Objekte',
    },
  ]

  const specialItems = [
    {
      icon: Music,
      title: 'Klaviere & Flügel',
      description: 'Professioneller Transport von Klavieren, Flügeln und anderen großen Musikinstrumenten mit speziellen Transporthilfen.',
      features: ['Klavierträger-Team', 'Polsterung & Schutz', 'Treppenlifter bei Bedarf', 'Klimatisierter Transport'],
    },
    {
      icon: Palette,
      title: 'Kunstwerke',
      description: 'Sicherer Transport von Gemälden, Skulpturen und anderen Kunstobjekten mit musealer Sorgfalt.',
      features: ['Klima-kontrollieret', 'Professionelle Verpackung', 'Erschütterungsfreier Transport', 'Galerie-Standard'],
    },
    {
      icon: Gem,
      title: 'Antiquitäten',
      description: 'Behutsamer Umgang mit wertvollen antiken Möbeln, Porzellan und Sammlerstücken.',
      features: ['Fachgerechte Demontage', 'Einzelverpackung', 'Inventarisierung', 'Restaurator-Kontakt'],
    },
  ]

  const processSteps = [
    {
      step: '1',
      title: 'Begutachtung vor Ort',
      description: 'Unsere Spezialisten besichtigen Ihre wertvollen Gegenstände. Wir ermitteln die beste Transportmethode, notwendige Hilfsmittel und erstellen ein detailliertes Angebot.',
    },
    {
      step: '2',
      title: 'Vorbereitung & Verpackung',
      description: 'Wir bereiten maßgeschneiderte Verpackungslösungen vor. Am Transport-Tag verpacken wir jeden Gegenstand sorgfältig mit Spezialpolstern und Klimaschutz.',
    },
    {
      step: '3',
      title: 'Spezialtransport',
      description: 'Der Transport erfolgt mit spezialisierten Fahrzeugen und Equipment. Klaviere werden von geschulten Trägern befördert, Kunstwerke klimatisiert transportiert.',
    },
    {
      step: '4',
      title: 'Aufstellung & Prüfung',
      description: 'Am Zielort stellen wir alles fachgerecht auf. Bei Klavieren erfolgt eine erste Stimmprüfung, Kunstwerke werden auf Transportschäden kontrolliert.',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <Section padding="large" className="relative overflow-hidden pt-32 pb-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-white">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/5 via-transparent to-orange-600/5" />
        
        <Container size="default" className="relative z-10">
          <Breadcrumb 
            items={[
              { label: 'Services', href: '/#content-start' },
              { label: 'Umzug', href: '/services/umzug' },
              { label: 'Spezialitems' },
            ]}
            accentColor={accent}
          />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-yellow-100 border border-yellow-200">
              <Package className="w-4 h-4 text-yellow-700" />
              <span className="text-sm font-bold uppercase tracking-wider text-yellow-900">
                Spezialitems
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-neutral-900 leading-tight">
              Expertentransport für wertvolle Gegenstände
            </h1>

            <p className="text-xl text-neutral-700 leading-relaxed mb-8">
              Ihr Flügel, Ihre Kunstsammlung oder antike Möbel benötigen besonderen Schutz? 
              Wir transportieren wertvolle Gegenstände mit spezialisiertem Equipment, geschulten 
              Fachleuten und umfassender Versicherung – sicher und schonend.
            </p>

            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: accent }}
            >
              Spezialtransport anfragen
            </Link>
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section padding="large" background="white">
        <Container size="default">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
            Warum BC Group für Spezialitems?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div 
                  key={index}
                  className="p-6 rounded-2xl border-2 border-neutral-100 hover:border-yellow-200 transition-all duration-300 hover:shadow-lg"
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

      {/* Special Items Categories */}
      <Section padding="large" className="bg-gradient-to-b from-white to-yellow-50">
        <Container size="default">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
            Unsere Spezialgebiete
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {specialItems.map((item, index) => {
              const Icon = item.icon
              return (
                <div 
                  key={index}
                  className="p-8 rounded-2xl bg-white border-2 border-yellow-100 hover:border-yellow-300 transition-all duration-300 hover:shadow-lg"
                >
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${accent}20` }}
                  >
                    <Icon className="w-8 h-8" style={{ color: accent }} />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-neutral-700 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  <ul className="space-y-2">
                    {item.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3 text-neutral-700 text-sm">
                        <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: accent }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* Process Section */}
      <Section padding="large" background="white">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
              So läuft der Spezialtransport ab
            </h2>

            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div 
                  key={index}
                  className="flex gap-6 p-6 rounded-2xl bg-gradient-to-br from-yellow-50 to-white border border-yellow-100"
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

      {/* Additional Items */}
      <Section padding="large" className="bg-gradient-to-b from-white to-orange-50">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center">
              Weitere Spezialitems, die wir transportieren
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Tresore und Safes',
                'Medizinische Geräte',
                'Laboreinrichtungen',
                'Oldtimer-Teile',
                'Historische Dokumente',
                'Weinsammlungen',
                'Designermöbel',
                'Kristalllüster',
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-orange-100 hover:border-orange-300 transition-colors"
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: accent }} />
                  <span className="text-neutral-800 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-center text-neutral-600 mt-8">
              Ihr Spezialitem ist nicht dabei? Kontaktieren Sie uns – wir finden für fast 
              jeden wertvollen Gegenstand eine sichere Transportlösung.
            </p>
          </div>
        </Container>
      </Section>

      {/* Pricing Info */}
      <Section padding="large" className="bg-gradient-to-br from-yellow-900 to-orange-800 text-white">
        <Container size="default">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Investition in Sicherheit
            </h2>
            <p className="text-lg text-yellow-100 mb-8 leading-relaxed">
              Die Kosten für Spezialtransporte richten sich nach Art, Wert und Größe des Objekts 
              sowie den benötigten Hilfsmitteln. Eine Vorab-Besichtigung ist bei wertvollen 
              Gegenständen obligatorisch. Wir erstellen dann ein detailliertes Angebot mit allen 
              Leistungen und Versicherungen.
            </p>
            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-yellow-900 bg-white hover:bg-yellow-50 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Jetzt beraten lassen
            </Link>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTAContact />
    </>
  )
}
