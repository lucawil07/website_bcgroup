import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Section, Container, Button, Card, CardContent } from '@/components/ui'
import { Phone, MessageCircle, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Umzug Berlin | Stressfrei & Sicher umziehen | BC Group',
  description: 'Professioneller Umzugsservice in Berlin. Privatumzug, Firmenumzug, Seniorenumzug. Komplett-Service mit Verpackung. Jetzt anfragen!',
  keywords: 'Umzug Berlin, Umzugsunternehmen, Privatumzug, Firmenumzug, Seniorenumzug, Transport',
}

const umzugTypes = [
  {
    title: 'Privatumzug',
    description: 'Stressfreier Umzug für Privatpersonen und Familien',
  },
  {
    title: 'Firmenumzug',
    description: 'Professionelle Büroumzüge mit minimalem Ausfall',
  },
  {
    title: 'Seniorenumzug',
    description: 'Einfühlsamer Umzugsservice für Senioren',
  },
  {
    title: 'Internationale Umzüge',
    description: 'Umzüge ins In- und Ausland',
  },
]

export default function UmzugPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full min-h-screen overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/umzug_berlin.png"
            alt="Umzug Berlin"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative w-full min-h-screen flex items-center justify-center text-center px-6 md:px-8 z-20">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-wider">
                UMZUG & TRANSPORT
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
                Stressfrei umziehen mit Ihrem Partner in Berlin
              </p>
            </div>
          </div>
        </div>
      </div>

      <Section background="white" padding="large">
        <Container size="wide">
          <div className="text-center mb-16">
            <h2 className="text-section uppercase font-black mb-4">
              Unsere Umzugsleistungen
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Von der Planung bis zum Aufbau – wir kümmern uns um alles
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {umzugTypes.map((type) => (
              <Card key={type.title}>
                <CardContent className="p-8 text-center">
                  <CheckCircle2 className="w-10 h-10 text-secondary mb-4 mx-auto" />
                  <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                  <p className="text-neutral-600 text-sm">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="light" padding="large">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-sm overflow-hidden shadow-xl">
              <img
                src="/images/umzug_berlin.png"
                alt="Umzugsservice"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-section uppercase font-black">
                Komplett-Service
              </h2>
              <p className="text-lg text-neutral-600">
                Wir bieten Ihnen einen Rundum-Service: Von der Verpackung über den 
                Transport bis zum Aufbau in der neuen Wohnung. Mit uns wird Ihr Umzug 
                zum stressfreien Erlebnis.
              </p>
              <ul className="space-y-3">
                {['Kostenlose Besichtigung', 'Verpackungsservice', 'Möbelmontage', 'Versicherungsschutz', 'Entsorgung Altmöbel', 'Halteverbotszonen'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-4 pt-4">
                <Link href="/kontakt?service=umzug">
                  <Button variant="primary" size="lg">
                    Umzug anfragen
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="gradient" padding="large">
        <Container>
          <div className="text-center space-y-8">
            <h2 className="text-section uppercase font-black text-white">
              Jetzt Umzug planen
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/kontakt?service=umzug">
                <Button variant="ghost" size="lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Angebot anfordern
                </Button>
              </Link>
              <a
                href="https://wa.me/49301234567?text=Hallo,%20ich%20möchte%20einen%20Umzug%20planen"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-[#25D366] border-[#25D366] hover:bg-[#20BA5A] text-white"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Via WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
