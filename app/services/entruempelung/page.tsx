import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Section, Container, Button, Card, CardContent, StructuredData, createServiceSchema, createBreadcrumbSchema } from '@/components/ui'
import { FunnelCTAButton, FunnelCTASecondary } from '@/components/forms/FunnelCTA'
import { 
  CheckCircle2, 
  Phone, 
  MessageCircle, 
  Upload, 
  MapPin,
  Clock,
  Shield,
  Award,
  TrendingUp,
  Users,
  Star,
  Sparkles,
  Truck,
  Recycle,
  Home,
  Building2,
  ArrowRight,
  Calculator,
  PlayCircle,
  Calendar,
  Euro
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Entrümpelung Berlin 2025 | #1 Profi-Service | BC Group ✓ Sofort-Termin',
  description: '⭐ Top Entrümpelung Berlin: ✓ 10+ Jahre Erfahrung ✓ Festpreis-Garantie ✓ 24h Service ✓ Messie-Wohnungen ✓ Umweltgerecht ✓ 4.9★ Bewertung. Jetzt kostenloses Angebot!',
  keywords: 'Entrümpelung Berlin, Wohnungsauflösung Berlin, Haushaltsauflösung, Kellerentrümpelung, Messie Entrümpelung, Dachbodenentrümpelung, Gewerbeentrümpelung, Sperrmüll Berlin, Entrümpelung Kosten, professionelle Entrümpelung',
  openGraph: {
    title: 'Entrümpelung Berlin 2025 | #1 Profi-Service | BC Group',
    description: '⭐ Berlins beste Entrümpelung: Festpreis ✓ Sofort-Termin ✓ 4.9★ ✓ Umweltgerecht ✓ Messie-Service',
    url: 'https://bcgroup.de/services/entruempelung',
    siteName: 'BC Group',
    images: [
      {
        url: '/images/generated_image.png',
        width: 1200,
        height: 630,
        alt: 'Professionelle Entrümpelung Berlin - BC Group',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Entrümpelung Berlin 2025 | BC Group',
    description: '⭐ Top-Service: Festpreis ✓ Sofort ✓ 4.9★',
  },
  alternates: {
    canonical: 'https://bcgroup.de/services/entruempelung',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

// Trust Badges
const trustBadges = [
  {
    icon: Award,
    value: '10+ Jahre',
    label: 'Erfahrung',
  },
  {
    icon: Star,
    value: '4.9/5',
    label: '500+ Bewertungen',
  },
  {
    icon: Shield,
    value: '100%',
    label: 'Versichert',
  },
  {
    icon: Clock,
    value: '24h',
    label: 'Notfall-Service',
  },
]

const benefits = [
  {
    icon: CheckCircle2,
    title: 'Festpreis-Garantie',
    description: 'Keine versteckten Kosten – transparenter Festpreis nach Besichtigung',
  },
  {
    icon: Clock,
    title: 'Express-Service',
    description: 'Termine oft schon am nächsten Tag möglich',
  },
  {
    icon: Recycle,
    title: 'Umweltgerecht',
    description: '100% fachgerechte Entsorgung und Recycling',
  },
  {
    icon: Shield,
    title: 'Voll versichert',
    description: 'Kompletter Versicherungsschutz für Ihr Eigentum',
  },
  {
    icon: Users,
    title: 'Erfahrenes Team',
    description: 'Professionelle und geschulte Mitarbeiter',
  },
  {
    icon: Sparkles,
    title: 'Besenrein',
    description: 'Optional: Endreinigung für sofortige Übergabe',
  },
]

const specialCases = [
  {
    icon: Home,
    title: 'Messie-Entrümpelung',
    description: 'Diskrete und einfühlsame Betreuung mit jahrelanger Erfahrung. Wir arbeiten respektvoll und professionell.',
    features: ['Diskret', 'Einfühlsam', 'Erfahren'],
    image: '/images/generated_image.png',
  },
  {
    icon: Building2,
    title: 'Kellerentrümpelung',
    description: 'Von alten Möbeln bis zum jahrelangen Gerümpel – wir schaffen Platz und sorgen für Ordnung.',
    features: ['Komplett', 'Zügig', 'Gründlich'],
    image: '/images/generated_image.png',
  },
  {
    icon: TrendingUp,
    title: 'Dachbodenentrümpelung',
    description: 'Auch schwer zugängliche Bereiche sind für unser Team kein Problem. Professionell und sicher.',
    features: ['Sicher', 'Professionell', 'Schnell'],
    image: '/images/generated_image.png',
  },
  {
    icon: Building2,
    title: 'Gewerbeentrümpelung',
    description: 'Büros, Lager und Gewerbeflächen – wir räumen effizient und termingerecht.',
    features: ['Effizient', 'Planbar', 'Zuverlässig'],
    image: '/images/generated_image.png',
  },
]

const process = [
  {
    step: 1,
    icon: Phone,
    title: 'Kontaktaufnahme',
    description: 'Rufen Sie uns an, schreiben Sie via WhatsApp oder nutzen Sie unser Online-Formular. Wir reagieren innerhalb von 2 Stunden.',
    timeframe: 'Sofort',
  },
  {
    step: 2,
    icon: Calendar,
    title: 'Kostenlose Besichtigung',
    description: 'Wir besichtigen das Objekt vor Ort oder per Video-Call und erstellen ein detailliertes, kostenloses Festpreisangebot.',
    timeframe: '24-48h',
  },
  {
    step: 3,
    icon: CheckCircle2,
    title: 'Auftragsbestätigung',
    description: 'Nach Ihrer Zusage vereinbaren wir einen Wunschtermin – oft schon am nächsten Tag möglich.',
    timeframe: '1 Tag',
  },
  {
    step: 4,
    icon: Truck,
    title: 'Professionelle Entrümpelung',
    description: 'Unser erfahrenes Team führt die Entrümpelung schnell, gründlich und besenrein durch.',
    timeframe: '1-3 Tage',
  },
  {
    step: 5,
    icon: Recycle,
    title: 'Fachgerechte Entsorgung',
    description: 'Wir entsorgen alles umweltgerecht, recyceln Verwertbares und spenden Brauchbares.',
    timeframe: 'Inklusive',
  },
]

const faqs = [
  {
    question: 'Was kostet eine Entrümpelung in Berlin?',
    answer: 'Die Kosten variieren je nach Umfang (m²), Lage, Stockwerk und Entsorgungsmenge. Durchschnittlich liegen die Kosten zwischen 400€ und 2.500€. Nach einer kostenlosen Besichtigung erhalten Sie ein transparentes Festpreisangebot ohne versteckte Kosten. Größere Objekte oder Spezialfälle werden individuell kalkuliert.',
  },
  {
    question: 'Wie schnell können Sie einen Termin anbieten?',
    answer: 'In der Regel können wir innerhalb von 24-48 Stunden einen Besichtigungstermin und oft schon am nächsten Werktag mit der Entrümpelung beginnen. Bei Notfällen (z.B. Wohnungsübergabe) bieten wir auch Express-Termine innerhalb von 24 Stunden an.',
  },
  {
    question: 'Muss ich bei der Entrümpelung anwesend sein?',
    answer: 'Nein, nach ausführlicher Absprache und Übergabe der Schlüssel können wir die Entrümpelung auch in Ihrer Abwesenheit durchführen. Wir dokumentieren alles fotografisch und senden Ihnen Vorher-Nachher-Bilder zu.',
  },
  {
    question: 'Was passiert mit den entrümpelten Sachen?',
    answer: 'Wir sortieren vor Ort: Verwertbares wird recycelt, gut erhaltene Möbel und Gegenstände spenden wir an soziale Einrichtungen, und der Rest wird fachgerecht entsorgt. Sie erhalten alle Entsorgungsnachweise für Vermieter oder Behörden.',
  },
  {
    question: 'Entrümpeln Sie auch Messie-Wohnungen?',
    answer: 'Ja, wir haben jahrelange Erfahrung mit Messie-Wohnungen und Vermüllungsfällen. Wir gehen dabei stets diskret, respektvoll und professionell vor. Auf Wunsch arbeiten wir in ziviler Kleidung und mit neutralen Fahrzeugen.',
  },
  {
    question: 'Welche Bezirke bedienen Sie in Berlin?',
    answer: 'Wir sind in allen 12 Berliner Bezirken tätig: Mitte, Friedrichshain-Kreuzberg, Pankow, Charlottenburg-Wilmersdorf, Spandau, Steglitz-Zehlendorf, Tempelhof-Schöneberg, Neukölln, Treptow-Köpenick, Marzahn-Hellersdorf, Lichtenberg und Reinickendorf. Auch das Umland (Brandenburg) bedienen wir auf Anfrage.',
  },
  {
    question: 'Sind Sie versichert und bieten Gewährleistung?',
    answer: 'Ja, wir sind vollständig versichert (Haftpflicht- und Transportversicherung). Ihr Eigentum ist während der gesamten Entrümpelung geschützt. Zudem garantieren wir eine besenreine Übergabe der Räumlichkeiten.',
  },
  {
    question: 'Bieten Sie auch Endreinigung an?',
    answer: 'Ja, wir können optional eine professionelle Grundreinigung nach der Entrümpelung durchführen. So ist die Wohnung sofort übergabebereit. Die Kosten dafür werden im Angebot separat ausgewiesen.',
  },
]

// Price ranges for transparency
const priceExamples = [
  {
    icon: Home,
    type: '1-Zimmer Wohnung',
    size: 'bis 40m²',
    price: 'ab 400€',
    duration: '4-6 Std.',
  },
  {
    icon: Building2,
    type: '3-Zimmer Wohnung',
    size: 'bis 80m²',
    price: 'ab 800€',
    duration: '1 Tag',
  },
  {
    icon: Building2,
    type: 'Einfamilienhaus',
    size: 'bis 150m²',
    price: 'ab 1.800€',
    duration: '2-3 Tage',
  },
  {
    icon: Truck,
    type: 'Keller/Dachboden',
    size: 'bis 30m²',
    price: 'ab 300€',
    duration: '2-4 Std.',
  },
]

// Testimonials
const testimonials = [
  {
    name: 'Michael S.',
    location: 'Berlin-Mitte',
    rating: 5,
    text: 'Absolut professionell! Die Wohnung meiner verstorbenen Mutter wurde innerhalb eines Tages komplett und besenrein geräumt. Faire Preise, freundliches Team.',
    service: 'Wohnungsauflösung',
    date: 'Januar 2025',
  },
  {
    name: 'Sandra K.',
    location: 'Berlin-Neukölln',
    rating: 5,
    text: 'Sehr einfühlsamer Umgang bei einer schwierigen Messie-Situation. Das Team hat diskret und respektvoll gearbeitet. Vielen Dank!',
    service: 'Messie-Entrümpelung',
    date: 'Dezember 2024',
  },
  {
    name: 'Thomas B.',
    location: 'Berlin-Pankow',
    rating: 5,
    text: 'Express-Service hat super funktioniert! Keller wurde innerhalb von 24h geräumt. Festpreis wie besprochen, keine Überraschungen.',
    service: 'Kellerentrümpelung',
    date: 'Januar 2025',
  },
]

export default function EntruempelungPage() {
  const serviceSchema = createServiceSchema({
    name: 'Entrümpelung Berlin - BC Group',
    description: 'Professionelle Entrümpelung von Wohnungen, Häusern, Kellern und Dachböden in Berlin. Express-Service, Festpreis-Garantie, umweltgerecht. 10+ Jahre Erfahrung.',
    url: 'https://bcgroup.de/services/entruempelung',
    image: '/images/generated_image.png',
    areaServed: 'Berlin und Umgebung',
  })

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Startseite', url: 'https://bcgroup.de' },
    { name: 'Services', url: 'https://bcgroup.de/services' },
    { name: 'Entrümpelung Berlin', url: 'https://bcgroup.de/services/entruempelung' },
  ])

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Entrümpelung Berlin - BC Group',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '500',
      bestRating: '5',
      worstRating: '1',
    },
  }

  return (
    <>
      <StructuredData data={serviceSchema} />
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={faqSchema} />
      <StructuredData data={reviewSchema} />
      
      {/* Modern Hero Section with Overlay */}
      <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-primary via-primary-800 to-secondary-900">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/generated_image.png"
            alt="Professionelle Entrümpelung Berlin - BC Group"
            fill
            className="object-cover opacity-30"
            priority
            unoptimized
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-secondary/30 to-black/80" />
          {/* Animated Gradient Accent */}
          <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 via-transparent to-accent/20 animate-gradient-xy" />
        </div>

        {/* Hero Content */}
        <div className="relative w-full min-h-screen flex items-center justify-center px-6 md:px-8 z-20">
          <Container size="wide">
            <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 text-white">
                <Star className="w-5 h-5 text-accent fill-accent" />
                <span className="font-bold text-sm">Berlins #1 Entrümpelung</span>
                <span className="text-white/70">•</span>
                <span className="text-sm">4.9★ aus 500+ Bewertungen</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-[0.95]">
                  Entrümpelung Berlin
                  <span className="block mt-2 bg-gradient-to-r from-accent via-accent-300 to-secondary bg-clip-text text-transparent">
                    Express & Zuverlässig
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                  <span className="font-bold text-accent">Festpreis-Garantie</span> • 
                  Termine in <span className="font-bold">24h</span> • 
                  100% umweltgerecht • 
                  <span className="font-bold text-secondary-300">10+ Jahre Erfahrung</span>
                </p>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-4">
                {trustBadges.map((badge, index) => {
                  const Icon = badge.icon
                  return (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105"
                    >
                      <Icon className="w-8 h-8 text-accent mx-auto mb-2" />
                      <div className="text-2xl font-black text-white mb-1">{badge.value}</div>
                      <div className="text-xs text-white/80 uppercase tracking-wide">{badge.label}</div>
                    </div>
                  )
                })}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                <FunnelCTAButton />
                <a
                  href="https://wa.me/49301234567?text=Hallo,%20ich%20interessiere%20mich%20für%20eine%20Entrümpelung"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="secondary"
                    size="lg"
                    className="bg-[#25D366] border-[#25D366] hover:bg-[#20BA5A] text-white text-lg px-8 py-6 shadow-2xl hover:shadow-[#25D366]/50"
                  >
                    <MessageCircle className="w-6 h-6 mr-2" />
                    WhatsApp Sofort-Kontakt
                  </Button>
                </a>
              </div>

              {/* Quick Info */}
              <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span>Kostenlose Besichtigung</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span>Keine versteckten Kosten</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span>24h Express möglich</span>
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
          </div>
        </div>
      </div>

      {/* Benefits Section - Modern Grid */}
      <Section background="white" padding="large">
        <Container size="wide">
          <div className="text-center mb-16 animate-fade-in">
            <span className="inline-block text-secondary font-bold text-sm uppercase tracking-widest bg-secondary/10 px-6 py-2 rounded-full mb-4">
              Ihre Vorteile
            </span>
            <h2 className="text-section uppercase font-black mb-6">
              Warum BC Group?
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Über 10 Jahre Erfahrung, 500+ zufriedene Kunden und ein Team, das Wort hält.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-white to-neutral-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-neutral-100"
                >
                  {/* Icon Container */}
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 text-primary group-hover:text-secondary transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Hover Effect */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* Process Timeline - Enhanced */}
      <Section background="light" padding="large">
        <Container size="wide">
          <div className="text-center mb-16">
            <span className="inline-block text-secondary font-bold text-sm uppercase tracking-widest bg-white px-6 py-2 rounded-full mb-4 shadow-sm">
              So einfach geht's
            </span>
            <h2 className="text-section uppercase font-black mb-6">
              In 5 Schritten zur erfolgreichen Entrümpelung
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Transparent, planbar und professionell – von der Anfrage bis zur Endreinigung
            </p>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            {/* Connection Line */}
            <div className="absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-accent to-secondary rounded-full" />
            
            <div className="grid grid-cols-5 gap-4">
              {process.map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={item.step} className="relative">
                    {/* Step Circle */}
                    <div className="flex flex-col items-center mb-6">
                      <div className="relative z-10 w-24 h-24 bg-gradient-to-br from-secondary to-secondary-800 rounded-full flex items-center justify-center shadow-2xl mb-4 hover:scale-110 transition-transform duration-500">
                        <Icon className="w-10 h-10 text-white" />
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-black text-sm shadow-lg">
                          {item.step}
                        </div>
                      </div>
                      <div className="inline-block bg-accent/10 text-accent font-bold text-xs px-3 py-1 rounded-full">
                        {item.timeframe}
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 min-h-[200px]">
                      <h3 className="text-lg font-bold mb-3 text-primary">
                        {item.title}
                      </h3>
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-6">
            {process.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.step} className="relative flex gap-6">
                  {/* Left side - Icon */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="relative w-16 h-16 bg-gradient-to-br from-secondary to-secondary-800 rounded-full flex items-center justify-center shadow-xl">
                      <Icon className="w-7 h-7 text-white" />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white font-black text-xs">
                        {item.step}
                      </div>
                    </div>
                    {item.step < 5 && (
                      <div className="w-1 flex-1 bg-gradient-to-b from-secondary to-accent rounded-full mt-2" />
                    )}
                  </div>

                  {/* Right side - Content */}
                  <div className="flex-1 pb-8">
                    <div className="inline-block bg-accent/10 text-accent font-bold text-xs px-3 py-1 rounded-full mb-3">
                      {item.timeframe}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-primary">{item.title}</h3>
                    <p className="text-neutral-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* Special Cases - Enhanced Cards */}
      <Section background="white" padding="large">
        <Container size="wide">
          <div className="text-center mb-16">
            <span className="inline-block text-accent font-bold text-sm uppercase tracking-widest bg-accent/10 px-6 py-2 rounded-full mb-4">
              Unsere Spezialgebiete
            </span>
            <h2 className="text-section uppercase font-black mb-6">
              Jede Entrümpelung ist einzigartig
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Wir haben die richtige Lösung für jede Situation – diskret, professionell und erfahren
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialCases.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-neutral-100"
                >
                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* Icon Badge */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {item.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="inline-block text-xs font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 border-2 border-secondary rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* Price Transparency Section */}
      <Section background="light" padding="large">
        <Container size="wide">
          <div className="text-center mb-16">
            <span className="inline-block text-secondary font-bold text-sm uppercase tracking-widest bg-white px-6 py-2 rounded-full mb-4 shadow-sm">
              Transparente Preise
            </span>
            <h2 className="text-section uppercase font-black mb-6">
              Was kostet eine Entrümpelung?
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Faire Festpreise ohne versteckte Kosten – Sie wissen vorher genau, was Sie bezahlen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {priceExamples.map((example, index) => {
              const Icon = example.icon
              return (
                <div
                  key={index}
                  className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-neutral-100 hover:border-secondary"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary to-secondary-800 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-primary">{example.type}</h3>
                    <div className="text-sm text-neutral-600">{example.size}</div>
                    
                    {/* Price */}
                    <div className="pt-3 border-t border-neutral-200">
                      <div className="text-3xl font-black text-accent mb-1">{example.price}</div>
                      <div className="text-xs text-neutral-500 uppercase tracking-wide">Durchschnitt</div>
                    </div>

                    {/* Duration */}
                    <div className="flex items-center gap-2 text-sm text-neutral-600">
                      <Clock className="w-4 h-4" />
                      <span>{example.duration}</span>
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-accent to-accent-700 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    <Euro className="w-6 h-6 text-white" />
                  </div>
                </div>
              )
            })}
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-br from-secondary/5 to-accent/5 rounded-3xl p-12 border border-secondary/20">
            <Calculator className="w-12 h-12 text-secondary mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4 text-primary">Ihr individuelles Angebot</h3>
            <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
              Jede Entrümpelung ist anders. Senden Sie uns Fotos oder vereinbaren Sie 
              eine kostenlose Besichtigung für ein genaues Festpreisangebot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt?service=entruempelung">
                <Button variant="primary" size="lg">
                  Kostenlos anfragen
                </Button>
              </Link>
              <a href="tel:+49301234567">
                <Button variant="secondary" size="lg">
                  <Phone className="w-5 h-5 mr-2" />
                  030 123 456 7
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* Testimonials Section */}
      <Section background="white" padding="large">
        <Container size="wide">
          <div className="text-center mb-16">
            <span className="inline-block text-accent font-bold text-sm uppercase tracking-widest bg-accent/10 px-6 py-2 rounded-full mb-4">
              Kundenstimmen
            </span>
            <h2 className="text-section uppercase font-black mb-6">
              Das sagen unsere Kunden
            </h2>
            <div className="flex items-center justify-center gap-2 text-2xl">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-8 h-8 text-accent fill-accent" />
              ))}
              <span className="ml-4 text-3xl font-black text-primary">4.9</span>
              <span className="text-neutral-600">/ 5.0</span>
            </div>
            <p className="text-neutral-600 mt-2">Basierend auf 500+ Bewertungen</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-neutral-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-neutral-100"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-neutral-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Service Badge */}
                <div className="inline-block bg-secondary/10 text-secondary text-xs font-bold px-3 py-1 rounded-full mb-6">
                  {testimonial.service}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-neutral-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary-800 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-primary">{testimonial.name}</div>
                    <div className="text-sm text-neutral-600">{testimonial.location}</div>
                    <div className="text-xs text-neutral-500">{testimonial.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="text-center">
              <div className="text-4xl font-black text-secondary mb-2">500+</div>
              <div className="text-sm text-neutral-600 uppercase tracking-wide">Zufriedene Kunden</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-secondary mb-2">98%</div>
              <div className="text-sm text-neutral-600 uppercase tracking-wide">Weiterempfehlung</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-secondary mb-2">24h</div>
              <div className="text-sm text-neutral-600 uppercase tracking-wide">Express möglich</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-secondary mb-2">10+</div>
              <div className="text-sm text-neutral-600 uppercase tracking-wide">Jahre Erfahrung</div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Service Areas */}
      <Section background="light" padding="large">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <MapPin className="w-16 h-16 text-secondary mx-auto mb-6" />
              <h2 className="text-section uppercase font-black mb-6">
                Wir sind in ganz Berlin für Sie da
              </h2>
              <p className="text-xl text-neutral-600">
                Alle 12 Berliner Bezirke + Umland in Brandenburg
              </p>
            </div>

            {/* Berlin Districts Grid */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-neutral-100">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  'Mitte', 'Friedrichshain-Kreuzberg', 'Pankow',
                  'Charlottenburg-Wilmersdorf', 'Spandau', 'Steglitz-Zehlendorf',
                  'Tempelhof-Schöneberg', 'Neukölln', 'Treptow-Köpenick',
                  'Marzahn-Hellersdorf', 'Lichtenberg', 'Reinickendorf'
                ].map((district) => (
                  <div key={district} className="flex items-center gap-2 text-neutral-700 hover:text-secondary transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-sm font-medium">{district}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-neutral-200 text-center">
                <Link href="/service-gebiete">
                  <Button variant="primary" size="lg">
                    Alle Servicegebiete ansehen
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Photo Upload CTA - Enhanced */}
      <Section background="white" padding="large">
        <Container>
          <div className="relative overflow-hidden bg-gradient-to-br from-secondary via-secondary-700 to-accent rounded-3xl p-12 md:p-16 text-center shadow-2xl">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+')] animate-pulse-subtle" />
            </div>

            <div className="relative z-10 space-y-8">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl">
                <Upload className="w-10 h-10 text-white" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
                  Angebot in 24h
                </h2>
                <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                  Laden Sie Fotos der zu entrümpelnden Räume hoch und erhalten Sie 
                  innerhalb von 24 Stunden ein detailliertes Festpreisangebot.
                </p>
              </div>

              {/* Features */}
              <div className="flex flex-wrap justify-center gap-4 text-white/90">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Kostenlos & unverbindlich</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Antwort in 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Festpreis-Garantie</span>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <Link href="/kontakt?service=entruempelung&action=upload">
                  <Button 
                    variant="ghost" 
                    size="lg"
                    className="bg-white text-secondary hover:bg-white/90 text-lg px-8 py-6 shadow-2xl"
                  >
                    <Upload className="w-6 h-6 mr-2" />
                    Jetzt Fotos hochladen
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ Section - Enhanced */}
      <Section background="light" padding="large">
        <Container size="wide">
          <div className="text-center mb-16">
            <span className="inline-block text-secondary font-bold text-sm uppercase tracking-widest bg-white px-6 py-2 rounded-full mb-4 shadow-sm">
              FAQ
            </span>
            <h2 className="text-section uppercase font-black mb-6">
              Häufig gestellte Fragen
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Alle wichtigen Antworten rund um Ihre Entrümpelung in Berlin
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-neutral-100"
              >
                <summary className="px-8 py-6 cursor-pointer font-bold text-lg hover:text-secondary transition-colors list-none flex items-center justify-between">
                  <span className="flex items-center gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-secondary/10 text-secondary rounded-full flex items-center justify-center text-sm font-black">
                      {index + 1}
                    </span>
                    <span className="text-left">{faq.question}</span>
                  </span>
                  <div className="flex-shrink-0 w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center ml-4">
                    <svg
                      className="w-5 h-5 text-secondary transition-transform duration-300 group-open:rotate-180"
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
                  </div>
                </summary>
                <div className="px-8 pb-6 pl-20 text-neutral-600 leading-relaxed text-base">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

          {/* Still have questions? */}
          <div className="text-center mt-12 bg-white rounded-3xl p-8 shadow-lg max-w-2xl mx-auto border border-neutral-100">
            <h3 className="text-2xl font-bold mb-4 text-primary">Noch Fragen?</h3>
            <p className="text-neutral-600 mb-6">
              Unser Team berät Sie gerne persönlich und beantwortet alle Ihre Fragen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FunnelCTAButton />
              <a href="tel:+49301234567">
                <Button variant="secondary" size="lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Jetzt anrufen
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* Final CTA - Premium */}
      <Section background="gradient" padding="large">
        <Container>
          <div className="relative overflow-hidden bg-gradient-to-br from-primary via-secondary to-primary rounded-3xl p-12 md:p-16">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/30 via-transparent to-accent/30 animate-gradient-x" />
            </div>

            <div className="relative z-10 text-center space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 text-white">
                <Sparkles className="w-5 h-5 text-accent" />
                <span className="font-bold text-sm">Jetzt kostenloses Angebot sichern</span>
              </div>

              {/* Heading */}
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">
                  Bereit für Ihre Entrümpelung?
                </h2>
                <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                  Kontaktieren Sie uns jetzt – kostenlose Beratung, transparente Preise, 
                  schnelle Termine. <span className="font-bold text-accent">Wir sind für Sie da!</span>
                </p>
              </div>

              {/* Stats Bar */}
              <div className="flex flex-wrap justify-center gap-8 py-6">
                <div className="text-center">
                  <div className="text-3xl font-black text-white mb-1">2h</div>
                  <div className="text-sm text-white/80">Reaktionszeit</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-white mb-1">24h</div>
                  <div className="text-sm text-white/80">Express möglich</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-white mb-1">100%</div>
                  <div className="text-sm text-white/80">Festpreis</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
                <FunnelCTAButton />
                <a
                  href="https://wa.me/49301234567?text=Hallo,%20ich%20interessiere%20mich%20für%20eine%20Entrümpelung%20in%20Berlin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="secondary"
                    size="lg"
                    className="bg-[#25D366] border-[#25D366] hover:bg-[#20BA5A] text-white text-lg px-8 py-6 shadow-2xl hover:shadow-[#25D366]/50"
                  >
                    <MessageCircle className="w-6 h-6 mr-2" />
                    WhatsApp Sofort-Kontakt
                  </Button>
                </a>
              </div>

              {/* Trust Line */}
              <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm pt-6 border-t border-white/20">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  <span>100% Versichert</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  <span>10+ Jahre Erfahrung</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-white" />
                  <span>4.9/5 Bewertung</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
