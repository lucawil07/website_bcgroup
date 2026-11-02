import { Metadata } from 'next'
import Link from 'next/link'
import { Container, Section } from '@/components/ui'
import { ArrowLeft } from 'lucide-react'
import { withSeo } from '@/lib/seo'

export const metadata: Metadata = withSeo('/ratgeber/entruempelung/messie-wohnung-entruempeln-berlin', {
  title: 'Messie-Wohnung entrümpeln in Berlin',
  description: 'Professionelle Messie-Wohnungsentrümpelung in Berlin. Diskret, einfühlsam und ohne Vorurteile. ✓ Erfahren ✓ Respektvoll',
  keywords: 'messie wohnung entrümpeln berlin, messie wohnung berlin, messie entrümpelung',
})

export default function MessieWohnungEntruempelnBerlinPage() {
  return (
    <Section background="white" padding="large">
      <Container size="default">
        <div className="max-w-4xl mx-auto">
          <Link href="/ratgeber/entruempelung/wohnungsaufloesung-berlin" className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Zurück zu Wohnungsauflösung Berlin
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
            Messie Wohnung entrümpeln Berlin
          </h1>
          
          <p className="text-xl text-neutral-600 mb-8">
            Professionelle und diskrete Entrümpelung von Messie-Wohnungen in Berlin.
          </p>
          
          <div className="prose prose-lg max-w-none">
            <p>Inhalte folgen in Kürze...</p>
          </div>
        </div>
      </Container>
    </Section>
  )
}
