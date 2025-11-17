import { Metadata } from 'next'
import Link from 'next/link'
import { Container, Section } from '@/components/ui'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Bauschuttentsorgung Berlin - Fachgerecht & Günstig | BC Group',
  description: 'Professionelle Bauschuttentsorgung in Berlin. Renovierungsreste, Abbruchmaterial und mehr - fachgerecht entsorgt. ✓ Festpreis ✓ Schnell',
  keywords: 'bauschuttentsorgung berlin, bauschutt entsorgen berlin, baumüll berlin',
}

export default function BauschuttentsorgungBerlinPage() {
  return (
    <Section background="white" padding="large">
      <Container size="default">
        <div className="max-w-4xl mx-auto">
          <Link href="/ratgeber/entruempelung" className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Zurück zum Ratgeber
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
            Bauschuttentsorgung Berlin
          </h1>
          
          <p className="text-xl text-neutral-600 mb-8">
            Professionelle Entsorgung von Bauschutt, Renovierungsresten und Abbruchmaterial in Berlin.
          </p>
          
          <div className="prose prose-lg max-w-none">
            <p>Weitere Inhalte folgen in Kürze...</p>
          </div>
          
          <div className="mt-12">
            <Link href="/kontakt">
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-xl hover:shadow-lg transition-all">
                Jetzt Beratung anfragen
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  )
}
