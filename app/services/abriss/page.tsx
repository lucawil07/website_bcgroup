import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Section, Container, Button, Card, CardContent, StructuredData, createServiceSchema, createBreadcrumbSchema } from '@/components/ui'
import { Phone, MessageCircle, CheckCircle2, HardHat, Shield, Clock, Award, AlertTriangle, Wrench, Building2, Recycle, FileCheck, MapPin, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Abrissunternehmen Berlin | Professionelle Entkernung & Rückbau | BC Group',
  description: 'Professioneller Abriss und Entkernung in Berlin. Zertifiziert, sicher und fachgerecht. Komplettabriss, Teilabriss, Entkernung, Asbestsanierung. Kostenlose Beratung ☎',
  keywords: 'Abriss Berlin, Abbruch Berlin, Entkernung Berlin, Rückbau, Abrissunternehmen, Asbestsanierung, Schadstoffentfernung, Baggerarbeiten, Abbrucharbeiten',
  openGraph: {
    title: 'Abrissunternehmen Berlin | BC Group',
    description: 'Professioneller Abriss und Entkernung in Berlin - Zertifiziert, sicher und fachgerecht.',
    url: 'https://bcgroup.de/services/abriss',
    siteName: 'BC Group',
    images: [
      {
        url: '/images/abriss_berlin.png',
        width: 1200,
        height: 630,
        alt: 'Professioneller Abriss und Entkernung in Berlin',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abrissunternehmen Berlin | BC Group',
    description: 'Professioneller Abriss und Entkernung in Berlin',
  },
}

const serviceTypes = [
  {
    icon: Building2,
    title: 'Komplettabriss',
    description: 'Vollständiger Gebäudeabriss mit modernster Technik und höchsten Sicherheitsstandards',
    features: ['Wohngebäude', 'Gewerbeimmobilien', 'Industriebauten', 'Lagerhallen']
  },
  {
    icon: Wrench,
    title: 'Teilabriss',
    description: 'Selektiver Rückbau einzelner Gebäudeteile bei Umbau- oder Sanierungsprojekten',
    features: ['Dachstühle', 'Anbauten', 'Innenwände', 'Geschossdecken']
  },
  {
    icon: HardHat,
    title: 'Entkernung',
    description: 'Professionelle Gebäudeentkernung unter Erhalt der Außenhülle',
    features: ['Wohnungsentkernung', 'Gewerbeentkernung', 'Denkmalschutz', 'Kernsanierung']
  },
  {
    icon: AlertTriangle,
    title: 'Schadstoffsanierung',
    description: 'Fachgerechte Entfernung von Schadstoffen durch zertifizierte Fachkräfte',
    features: ['Asbestsanierung', 'PCB-Sanierung', 'Schimmelbeseitigung', 'KMF-Entsorgung']
  },
]

const processSteps = [
  {
    step: 1,
    title: 'Erstberatung',
    description: 'Kostenlose Vor-Ort-Besichtigung und detaillierte Bestandsaufnahme',
    icon: FileCheck
  },
  {
    step: 2,
    title: 'Angebotserstellung',
    description: 'Transparentes Festpreisangebot mit detaillierter Leistungsbeschreibung',
    icon: FileCheck
  },
  {
    step: 3,
    title: 'Genehmigungen',
    description: 'Unterstützung bei behördlichen Genehmigungen und Dokumentation',
    icon: Shield
  },
  {
    step: 4,
    title: 'Vorbereitung',
    description: 'Sicherung des Baufeldes und Einrichtung der Baustelle',
    icon: HardHat
  },
  {
    step: 5,
    title: 'Durchführung',
    description: 'Professionelle Abbrucharbeiten mit modernster Technik',
    icon: Wrench
  },
  {
    step: 6,
    title: 'Entsorgung',
    description: 'Umweltgerechte Entsorgung und Recycling der Abbruchmaterialien',
    icon: Recycle
  },
]

const benefits = [
  { icon: Shield, text: 'Zertifizierte Abbruchfachbetrieb' },
  { icon: Award, text: 'Über 10 Jahre Erfahrung' },
  { icon: CheckCircle2, text: 'Transparente Festpreise' },
  { icon: Clock, text: 'Termingerechte Ausführung' },
  { icon: HardHat, text: 'Geschultes Fachpersonal' },
  { icon: Recycle, text: 'Umweltgerechte Entsorgung' },
]

const safetyFeatures = [
  'Alle Mitarbeiter sind vollständig versichert und geschult',
  'Einhaltung aller Sicherheitsvorschriften und Arbeitsschutzbestimmungen',
  'Regelmäßige Sicherheitsunterweisungen und Schulungen',
  'Moderne Sicherheitsausrüstung und Schutzmaßnahmen',
  'Lückenlose Dokumentation aller Arbeitsschritte',
  'Umfassende Haftpflicht- und Betriebsversicherung',
]

const faqs = [
  {
    question: 'Welche Genehmigungen werden für einen Abriss in Berlin benötigt?',
    answer: 'In Berlin benötigen Sie in der Regel eine Abbruchgenehmigung vom zuständigen Bauamt. Bei denkmalgeschützten Gebäuden sind zusätzliche Genehmigungen erforderlich. Wir unterstützen Sie bei allen behördlichen Angelegenheiten und übernehmen die notwendige Dokumentation.',
  },
  {
    question: 'Wie lange dauert ein typischer Abriss?',
    answer: 'Die Dauer hängt von der Größe und Beschaffenheit des Objekts ab. Ein Einfamilienhaus kann in 3-5 Tagen abgerissen werden, während größere Objekte mehrere Wochen in Anspruch nehmen können. Nach der Besichtigung erhalten Sie einen genauen Zeitplan.',
  },
  {
    question: 'Was kostet ein Abriss in Berlin?',
    answer: 'Die Kosten variieren je nach Objektgröße, Bausubstanz, Schadstoffbelastung und Zugänglichkeit. Nach einer kostenlosen Besichtigung erstellen wir Ihnen ein transparentes Festpreisangebot ohne versteckte Kosten.',
  },
  {
    question: 'Wie wird mit Schadstoffen wie Asbest umgegangen?',
    answer: 'Wir sind zertifiziert für die fachgerechte Asbestsanierung nach TRGS 519. Vor jedem Abriss führen wir eine Schadstoffuntersuchung durch. Gefährliche Materialien werden von geschulten Fachkräften entfernt und ordnungsgemäß entsorgt.',
  },
  {
    question: 'Übernehmen Sie auch die Entsorgung der Abbruchmaterialien?',
    answer: 'Ja, wir kümmern uns um die komplette Entsorgung. Materialien werden sortiert, recycelt oder fachgerecht entsorgt. Sie erhalten alle erforderlichen Entsorgungsnachweise für die Behörden.',
  },
  {
    question: 'Können Sie auch denkmalgeschützte Gebäude abreißen?',
    answer: 'Ja, wir haben Erfahrung mit Abrissen im Denkmalschutz. Dabei arbeiten wir eng mit den zuständigen Behörden zusammen und berücksichtigen alle Auflagen und Vorgaben.',
  },
  {
    question: 'Ist eine Entkernung auch bei bewohnten Mehrfamilienhäusern möglich?',
    answer: 'Ja, wir führen auch Entkernungen in bewohnten Gebäuden durch. Dabei achten wir besonders auf Lärmschutz, Staubvermeidung und sichere Zugangswege für die Bewohner.',
  },
  {
    question: 'Bieten Sie auch Notfall-Abrisse an?',
    answer: 'Ja, bei akuter Einsturzgefahr oder nach Schadensereignissen führen wir auch kurzfristige Sicherungsabbrüche durch. Kontaktieren Sie uns in solchen Fällen umgehend.',
  },
]

export default function AbrissPage() {
  const serviceSchema = createServiceSchema({
    name: 'Abriss und Entkernung Berlin',
    description: 'Professioneller Abriss, Entkernung und Rückbau von Gebäuden in Berlin. Zertifizierter Abbruchfachbetrieb mit modernster Technik und höchsten Sicherheitsstandards.',
    url: 'https://bcgroup.de/services/abriss',
    image: '/images/abriss_berlin.png',
    areaServed: 'Berlin',
  })

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Startseite', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Abriss & Entkernung', url: '/services/abriss' },
  ])

  return (
    <>
      <StructuredData data={serviceSchema} />
      <StructuredData data={breadcrumbSchema} />
      
      {/* Hero Section */}
      <div className="relative w-full min-h-screen overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/abriss_berlin.png"
            alt="Professioneller Abriss und Entkernung in Berlin"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
        </div>
        <div className="relative w-full min-h-screen flex items-center justify-center text-center px-6 md:px-8 z-20">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block mb-4">
                <span className="bg-secondary/20 backdrop-blur-md text-white px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider border border-white/30">
                  Zertifizierter Abbruchfachbetrieb
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-wider leading-tight">
                ABRISS &<br />ENTKERNUNG
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-medium">
                Fachgerechter Abriss mit höchsten Sicherheitsstandards in ganz Berlin
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Link href="/kontakt?service=abriss">
                  <Button variant="primary" size="lg">
                    <Phone className="w-5 h-5" />
                    Kostenlose Beratung
                  </Button>
                </Link>
                <a
                  href="https://wa.me/49301234567?text=Hallo,%20ich%20interessiere%20mich%20für%20Abrissarbeiten"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="ghost"
                    size="lg"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Kontakt
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <Section background="white" padding="large">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-secondary font-bold text-sm uppercase tracking-wider bg-secondary/10 px-6 py-2.5 rounded-full">
                  Ihr Experte für Abbrucharbeiten
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight">
                <span className="block text-primary">Professionelle</span>
                <span className="block text-secondary">Abbrucharbeiten</span>
              </h2>
              <div className="h-1.5 w-20 rounded-full bg-gradient-to-r from-secondary to-accent" />
              
              <div className="space-y-4 text-lg text-neutral-600">
                <p>
                  Von der Entkernung bis zum Komplettabriss – die BC Group führt alle 
                  Abbrucharbeiten sicher und fachgerecht durch. Als zertifizierter 
                  Abbruchfachbetrieb verfügen wir über die erforderlichen Genehmigungen 
                  und das Know-how für komplexe Abrissvorhaben.
                </p>
                <p>
                  Mit modernster Abbruchtechnik und einem erfahrenen Team sorgen wir für 
                  einen reibungslosen Ablauf Ihres Projekts. Dabei legen wir größten Wert 
                  auf Sicherheit, Umweltschutz und Termintreue.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 p-4 rounded-xl bg-neutral-50 hover:bg-neutral-100 transition-colors"
                  >
                    <benefit.icon className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-neutral-700">{benefit.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/kontakt?service=abriss">
                  <Button variant="primary" size="lg">
                    Jetzt anfragen
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link href="#leistungen">
                  <Button variant="secondary" size="lg">
                    Unsere Leistungen
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
                <img
                  src="/images/abriss_berlin.png"
                  alt="Abriss Service Berlin"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent" />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-3xl blur-3xl" />
            </div>
          </div>
        </Container>
      </Section>

      {/* Service Types Section */}
      <Section background="light" padding="large" id="leistungen">
        <Container size="wide">
          <div className="text-center mb-16 space-y-4">
            <span className="text-secondary font-bold text-sm uppercase tracking-wider bg-secondary/10 px-6 py-2.5 rounded-full inline-block">
              Unsere Leistungen
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase">
              Unsere Abriss-Services
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Von der Entkernung bis zur Schadstoffentfernung – wir bieten alle Abbruchleistungen aus einer Hand
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceTypes.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="p-4 rounded-2xl bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                      <service.icon className="w-8 h-8 text-secondary" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                      <p className="text-neutral-600">{service.description}</p>
                      <ul className="space-y-2 pt-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-neutral-700">
                            <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process Timeline Section */}
      <Section background="white" padding="large">
        <Container size="wide">
          <div className="text-center mb-16 space-y-4">
            <span className="text-secondary font-bold text-sm uppercase tracking-wider bg-secondary/10 px-6 py-2.5 rounded-full inline-block">
              Unser Vorgehen
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase">
              So läuft ein Abriss ab
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Von der ersten Besichtigung bis zur finalen Entsorgung – transparent und professionell
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full border border-neutral-100">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-secondary-dark text-white font-black text-xl flex items-center justify-center">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-neutral-600 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
                {/* Connector line for desktop */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 -right-4 w-8 h-0.5 bg-gradient-to-r from-secondary/50 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Safety & Certification Section */}
      <Section background="gradient" padding="large">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <div className="inline-block">
                <span className="bg-white/20 backdrop-blur-md text-white px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider border border-white/30">
                  Sicherheit & Qualität
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight">
                Höchste Sicherheits-<br />standards
              </h2>
              <div className="h-1.5 w-20 rounded-full bg-white/50" />
              <p className="text-xl text-white/90 font-medium">
                Ihre Sicherheit ist unser oberstes Gebot. Als zertifizierter Fachbetrieb 
                erfüllen wir alle gesetzlichen Anforderungen und gehen darüber hinaus.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <ul className="space-y-4">
                {safetyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-white">
                    <Shield className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="text-3xl font-black text-white mb-1">10+</div>
                  <div className="text-xs text-white/80 uppercase tracking-wider">Jahre</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-white mb-1">100%</div>
                  <div className="text-xs text-white/80 uppercase tracking-wider">Sicher</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-white mb-1">24/7</div>
                  <div className="text-xs text-white/80 uppercase tracking-wider">Erreichbar</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Service Areas */}
      <Section background="white" padding="large">
        <Container>
          <div className="text-center space-y-6">
            <MapPin className="w-12 h-12 text-secondary mx-auto" />
            <h2 className="text-4xl md:text-5xl font-black uppercase">
              In ganz Berlin für Sie da
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Von Mitte über Charlottenburg bis Pankow – wir führen Abbrucharbeiten 
              in allen Berliner Bezirken und im Umland durch.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              {['Berlin Mitte', 'Charlottenburg', 'Neukölln', 'Pankow', 'Tempelhof', 'Spandau', 'Steglitz', 'Friedrichshain'].map((area) => (
                <span key={area} className="px-4 py-2 bg-neutral-100 text-neutral-700 rounded-full text-sm font-medium">
                  {area}
                </span>
              ))}
            </div>
            <div className="pt-6">
              <Link href="/service-gebiete">
                <Button variant="primary" size="lg">
                  Alle Servicegebiete ansehen
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section background="light" padding="large">
        <Container size="wide">
          <div className="text-center mb-16 space-y-4">
            <span className="text-secondary font-bold text-sm uppercase tracking-wider bg-secondary/10 px-6 py-2.5 rounded-full inline-block">
              Häufige Fragen
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase">
              Alles zum Thema Abriss
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Antworten auf die wichtigsten Fragen zu Abbruch und Entkernung
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-white rounded-2xl shadow-md overflow-hidden group hover:shadow-lg transition-shadow"
              >
                <summary className="px-8 py-6 cursor-pointer font-bold text-lg hover:text-secondary transition-colors list-none flex items-center justify-between">
                  <span className="pr-4">{faq.question}</span>
                  <svg
                    className="w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-180 text-secondary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-8 pb-6 text-neutral-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      {/* Final CTA Section */}
      <Section background="gradient" padding="large">
        <Container>
          <div className="text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-black uppercase text-white">
              Bereit für Ihr Abriss-Projekt?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Kontaktieren Sie uns jetzt für eine kostenlose Beratung und ein unverbindliches Angebot
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/kontakt?service=abriss">
                <Button variant="ghost" size="lg">
                  <Phone className="w-5 h-5" />
                  Kostenlose Beratung
                </Button>
              </Link>
              <a
                href="https://wa.me/49301234567?text=Hallo,%20ich%20interessiere%20mich%20für%20Abrissarbeiten"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-[#25D366] border-[#25D366] hover:bg-[#20BA5A] text-white"
                >
                  <MessageCircle className="w-5 h-5" />
                  Via WhatsApp
                </Button>
              </a>
              <a href="tel:+49301234567">
                <Button variant="ghost" size="lg">
                  Jetzt anrufen
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
