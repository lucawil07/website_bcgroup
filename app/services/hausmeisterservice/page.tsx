import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Section, Container, Button, StructuredData, createServiceSchema, createBreadcrumbSchema } from '@/components/ui'
import { Phone, MessageCircle, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hausmeisterservice Berlin | Zuverlässig & Professionell | BC Group',
  description: 'Professioneller Hausmeisterservice in Berlin. Objektbetreuung, Gartenpflege, Winterdienst und mehr. Jetzt anfragen!',
  keywords: 'Hausmeisterservice Berlin, Objektbetreuung, Gartenpflege, Winterdienst, Treppenhausreinigung',
}

const services = [
  'Objektbetreuung',
  'Treppenhausreinigung',
  'Gartenpflege',
  'Winterdienst',
  'Kleinreparaturen',
  'Mülltonnenmanagement',
]

export default function HausmeisterPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full min-h-screen overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/hausmeister_berlin.png"
            alt="Hausmeisterservice Berlin"
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
                HAUSMEISTERSERVICE
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
                Zuverlässige Betreuung Ihrer Immobilie
              </p>
            </div>
          </div>
        </div>
      </div>

      <Section background="white" padding="large">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-section uppercase font-black">
                Ihr Hausmeister vor Ort
              </h2>
              <p className="text-lg text-neutral-600">
                Wir kümmern uns um die täglichen Aufgaben rund um Ihre Immobilie. 
                Von der Treppenhausreinigung über Gartenpflege bis zum Winterdienst – 
                wir sind Ihr verlässlicher Partner.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {services.map((service) => (
                  <div key={service} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="font-medium">{service}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 pt-4">
                <Link href="/kontakt?service=hausmeisterservice">
                  <Button variant="primary" size="lg">
                    Jetzt anfragen
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[500px] rounded-sm overflow-hidden shadow-xl">
              <img
                src="/images/hausmeister_berlin.png"
                alt="Hausmeisterservice"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section background="gradient" padding="large">
        <Container>
          <div className="text-center space-y-8">
            <h2 className="text-section uppercase font-black text-white">
              Ihr Hausmeisterservice anfragen
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/kontakt?service=hausmeisterservice">
                <Button variant="ghost" size="lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Angebot anfordern
                </Button>
              </Link>
              <a
                href="https://wa.me/49301234567?text=Hallo,%20ich%20interessiere%20mich%20für%20Hausmeisterservice"
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
