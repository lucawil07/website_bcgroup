import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Section, Container, Button, Card, CardContent } from '@/components/ui'
import { Phone, MessageCircle, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Gebäudereinigung Berlin | Professionelle Reinigung | BC Group',
  description: 'Professionelle Gebäudereinigung in Berlin. Büro, Praxis, Wohnung – alles aus einer Hand. Jetzt anfragen!',
  keywords: 'Gebäudereinigung Berlin, Büroreinigung, Unterhaltsreinigung, Grundreinigung, Glasreinigung',
}

const services = [
  {
    title: 'Büroreinigung',
    description: 'Tägliche oder wöchentliche Reinigung Ihrer Büroräume',
  },
  {
    title: 'Praxisreinigung',
    description: 'Hygienische Reinigung nach höchsten Standards',
  },
  {
    title: 'Treppenhausreinigung',
    description: 'Regelmäßige Pflege von Treppenhäusern',
  },
  {
    title: 'Glasreinigung',
    description: 'Streifenfreie Fenster und Glasflächen',
  },
  {
    title: 'Grundreinigung',
    description: 'Intensive Tiefenreinigung nach Bedarf',
  },
  {
    title: 'Hotelreinigung',
    description: 'Zuverlässige Reinigung für Hotels und Pensionen',
  },
]

export default function ReinigungPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full min-h-screen overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/reinigung_berlin.png"
            alt="Gebäudereinigung Berlin"
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
                GEBÄUDEREINIGUNG
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
                Professionelle Reinigung für höchste Ansprüche
              </p>
            </div>
          </div>
        </div>
      </div>

      <Section background="white" padding="large">
        <Container size="wide">
          <div className="text-center mb-16">
            <h2 className="text-section uppercase font-black mb-4">
              Unsere Reinigungsleistungen
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Von der Büroreinigung bis zur Hotelreinigung – wir bieten 
              maßgeschneiderte Lösungen für jeden Bedarf
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title}>
                <CardContent className="p-8">
                  <CheckCircle2 className="w-10 h-10 text-secondary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-neutral-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="gradient" padding="large">
        <Container>
          <div className="text-center space-y-8">
            <h2 className="text-section uppercase font-black text-white">
              Jetzt Reinigungsservice buchen
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/kontakt?service=reinigung">
                <Button variant="ghost" size="lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Angebot anfordern
                </Button>
              </Link>
              <a
                href="https://wa.me/49301234567?text=Hallo,%20ich%20interessiere%20mich%20für%20Reinigungsservice"
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
