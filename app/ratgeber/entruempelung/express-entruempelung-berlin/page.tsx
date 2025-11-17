import { Metadata } from 'next'
import Link from 'next/link'
import { Container, Section } from '@/components/ui'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Express-Entrümpelung Berlin - Innerhalb 24-48h | BC Group',
  description: 'Schnelle Express-Entrümpelung in Berlin. Notfall-Service innerhalb von 24-48 Stunden. ✓ Sofort verfügbar ✓ Flexibel ✓ Zuverlässig',
  keywords: 'express entrümpelung berlin, schnelle entrümpelung berlin, notfall entrümpelung, entrümpelung berlin 24h',
}

export default function ExpressEntruempelungBerlinPage() {
  return (
    <Section background="white" padding="large">
      <Container size="default">
        <div className="max-w-4xl mx-auto">
          <Link href="/ratgeber/entruempelung" className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Zurück zum Ratgeber
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
            Express-Entrümpelung Berlin
          </h1>
          
          <p className="text-xl text-neutral-600 mb-8">
            Schnelle Notfall-Entrümpelung in Berlin - wir sind innerhalb von 24-48 Stunden vor Ort.
          </p>
          
          <div className="prose prose-lg max-w-none">
            <h2>Wann ist eine Express-Entrümpelung sinnvoll?</h2>
            <p>
              Eine Express-Entrümpelung ist die Lösung, wenn es schnell gehen muss:
            </p>
            <ul>
              <li>Dringender Wohnungswechsel</li>
              <li>Überraschende Wohnungsübergabe</li>
              <li>Kurze Kündigungsfristen</li>
              <li>Notfallsituationen</li>
            </ul>

            <h2>Unser Express-Service</h2>
            <p>
              Bei BC Group Berlin verstehen wir, dass manchmal Eile geboten ist. Unser Express-Service 
              ermöglicht eine Entrümpelung innerhalb von 24-48 Stunden - inklusive aller notwendigen Schritte.
            </p>

            <p>Weitere Details zu unserem Express-Service folgen in Kürze...</p>
          </div>
          
          <div className="mt-12">
            <Link href="/kontakt">
              <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-rose-500 text-white font-bold rounded-xl hover:shadow-lg transition-all">
                Jetzt Express-Service anfragen
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  )
}
