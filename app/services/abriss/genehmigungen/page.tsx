import { Metadata } from 'next'
import Link from 'next/link'
import { Container, Section } from '@/components/ui'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { CTAContact } from '@/components/sections'
import { MapPin, CheckCircle, FileText, Clock, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Abriss-Genehmigungen Berlin - Komplette Abwicklung | BC Group',
  description: 'Wir kümmern uns um alle erforderlichen Genehmigungen für Ihren Abriss in Berlin. Unbürokratisch, komplett betreut und mit allen Dokumenten.',
  keywords: 'abriss genehmigung berlin, abrissgenehmigung, baugenehmigung abriss, behördengenehmigung abriss',
}

export default function GenehmigungsservicePage() {
  const accent = '#d97706'

  const benefits = [
    {
      icon: FileText,
      title: 'Alle Dokumente',
      description: 'Vollständige Beschaffung und Einreichung aller erforderlichen Unterlagen bei den Behörden',
    },
    {
      icon: Clock,
      title: 'Unbürokratisch',
      description: 'Direkte Kommunikation mit Ämtern und schnelle Bearbeitung aller Anträge',
    },
    {
      icon: Shield,
      title: 'Komplett betreut',
      description: 'Von der ersten Anfrage bis zur finalen Genehmigung - alles aus einer Hand',
    },
  ]

  const requiredPermits = [
    'Abbruchgenehmigung',
    'Statische Berechnung bei Bedarf',
    'Nachbarbeteiligung und Anzeigen',
    'Baustelleneinrichtungsgenehmigung',
    'Verkehrssicherungsmaßnahmen',
    'Umweltauflagen und Genehmigungen',
  ]

  return (
    <>
      {/* Hero Section */}
      <Section padding="large" className="relative overflow-hidden pt-32 pb-20 bg-gradient-to-br from-amber-50 via-white to-orange-50">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/5 via-transparent to-amber-600/5" />
        
        <Container size="default" className="relative z-10">
          <Breadcrumb 
            items={[
              { label: 'Services', href: '/#content-start' },
              { label: 'Abriss', href: '/services/abriss' },
              { label: 'Genehmigungen' },
            ]}
            accentColor={accent}
          />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-amber-100 border border-amber-200">
              <MapPin className="w-4 h-4 text-amber-700" />
              <span className="text-sm font-bold uppercase tracking-wider text-amber-900">
                Genehmigungsservice
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-neutral-900 leading-tight">
              Alle Abriss-Genehmigungen aus einer Hand
            </h1>

            <p className="text-xl text-neutral-700 leading-relaxed mb-8">
              Wir übernehmen die komplette Abwicklung aller erforderlichen Behördengenehmigungen für Ihr Abrissvorhaben. 
              Von der Antragstellung bis zur finalen Genehmigung - unbürokratisch, schnell und rechtssicher.
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
            Warum unseren Genehmigungsservice nutzen?
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

      {/* Required Permits */}
      <Section padding="large" className="bg-gradient-to-b from-white to-amber-50">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center">
              Welche Genehmigungen werden benötigt?
            </h2>
            
            <p className="text-lg text-neutral-700 mb-8 text-center">
              Je nach Projekt und Lage sind verschiedene Genehmigungen erforderlich. Wir kümmern uns um alles:
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {requiredPermits.map((permit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-amber-100 hover:border-amber-300 transition-colors"
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: accent }} />
                  <span className="text-neutral-800 font-medium">{permit}</span>
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
              So läuft der Genehmigungsprozess ab
            </h2>

            <div className="space-y-6">
              {[
                {
                  step: '1',
                  title: 'Erstberatung & Prüfung',
                  description: 'Analyse Ihres Vorhabens und Ermittlung aller erforderlichen Genehmigungen und Unterlagen.',
                },
                {
                  step: '2',
                  title: 'Unterlagenbeschaffung',
                  description: 'Wir erstellen oder beschaffen alle notwendigen Pläne, Gutachten und Nachweise.',
                },
                {
                  step: '3',
                  title: 'Antragstellung',
                  description: 'Professionelle Vorbereitung und fristgerechte Einreichung aller Anträge bei den zuständigen Behörden.',
                },
                {
                  step: '4',
                  title: 'Kommunikation mit Ämtern',
                  description: 'Wir übernehmen die komplette Kommunikation mit Bauaufsicht, Ordnungsamt und anderen Stellen.',
                },
                {
                  step: '5',
                  title: 'Genehmigungserteilung',
                  description: 'Nach erfolgreicher Prüfung erhalten Sie alle Genehmigungen für den rechtsicheren Projektstart.',
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

      {/* Legal Security */}
      <Section padding="large" className="bg-gradient-to-br from-amber-900 to-amber-700 text-white">
        <Container size="default">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Rechtssicherheit garantiert
            </h2>
            <p className="text-lg text-amber-100 mb-8 leading-relaxed">
              Ein Abriss ohne die erforderlichen Genehmigungen kann zu erheblichen rechtlichen und finanziellen Konsequenzen führen. 
              Mit unserem Genehmigungsservice sind Sie auf der sicheren Seite. 
              Wir kennen alle Vorschriften, haben direkten Draht zu den Behörden und sorgen dafür, 
              dass Ihr Projekt von Anfang an rechtssicher abläuft. 
              Verlassen Sie sich auf unsere jahrelange Erfahrung in Berlin.
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
