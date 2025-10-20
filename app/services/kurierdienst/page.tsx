import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Section, Container, Button, StructuredData, createServiceSchema, createBreadcrumbSchema } from '@/components/ui'
import { Phone, MessageCircle, CheckCircle2, Truck, Clock, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Kurierdienst Berlin | Express & Same-Day Delivery | BC Group',
  description: 'Professioneller Kurierdienst in Berlin. B2B Express-Lieferung, Same-Day Delivery, Spezialtransporte. Jetzt anfragen!',
  keywords: 'Kurierdienst Berlin, Expresskurier, Same-Day Delivery, B2B Kurier, Dokumentenkurier',
}

const services = [
  {
    icon: Truck,
    title: 'Express-Lieferung',
    description: 'Schnelle Zustellung innerhalb Berlins',
  },
  {
    icon: Clock,
    title: 'Same-Day Delivery',
    description: 'Noch heute beim Empfänger',
  },
  {
    icon: Shield,
    title: 'Sicherer Transport',
    description: 'Versichert und nachverfolgbar',
  },
]

const specialServices = [
  'Apotheken-Kurier',
  'Labor-Transporte',
  'Eil-Dokumente',
  'Dokumentenkurier',
  'Medizinische Transporte',
  'B2B Express',
]

export default function KurierPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full min-h-screen overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/kurier_berlinv1.png"
            alt="Kurierdienst Berlin"
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
                KURIERDIENST
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
                Schnell, sicher und zuverlässig in ganz Berlin
              </p>
            </div>
          </div>
        </div>
      </div>

      <Section background="white" padding="large">
        <Container size="wide">
          <div className="text-center mb-16">
            <h2 className="text-section uppercase font-black mb-4">
              Unser Kurier-Service
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Spezialisiert auf B2B und zeitkritische Transporte
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {services.map((service) => (
              <div key={service.title} className="text-center space-y-4">
                <service.icon className="w-16 h-16 text-secondary mx-auto" />
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-neutral-600">{service.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="light" padding="large">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-section uppercase font-black">
                Spezialisierte Dienste
              </h2>
              <p className="text-lg text-neutral-600">
                Wir bieten spezialisierte Kurierdienste für verschiedene Branchen:
              </p>
              <div className="grid grid-cols-2 gap-4">
                {specialServices.map((service) => (
                  <div key={service} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="font-medium">{service}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 pt-4">
                <Link href="/kontakt?service=kurier">
                  <Button variant="primary" size="lg">
                    Kurier buchen
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[500px] rounded-sm overflow-hidden shadow-xl">
              <img
                src="/images/kurier_berlinv1.png"
                alt="Kurierdienst"
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
              Jetzt Kurier beauftragen
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/kontakt?service=kurier">
                <Button variant="ghost" size="lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Angebot anfordern
                </Button>
              </Link>
              <a
                href="https://wa.me/49301234567?text=Hallo,%20ich%20benötige%20einen%20Kurier"
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
