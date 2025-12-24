import { Metadata } from 'next'
import Link from 'next/link'
import { Container, Section } from '@/components/ui'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Haushaltsauflösung nach Todesfall Berlin - Einfühlsam & Diskret | BC Group',
  description: 'Einfühlsame Haushaltsauflösung nach Todesfall in Berlin. Wir unterstützen Sie in schweren Zeiten. ✓ Diskret ✓ Respektvoll ✓ Professionell',
  keywords: 'haushaltsauflösung nach todesfall, wohnungsauflösung todesfall berlin, nachlassräumung berlin',
}

export default function HaushaltsaufloesungNachTodesfallPage() {
  const relatedArticles = [
    {
      title: 'Wohnungsauflösung nach Todesfall',
      link: '/ratgeber/entruempelung/wohnungsaufloesung-nach-todesfall'
    },
    {
      title: 'Nachlassverwaltung Berlin',
      link: '/ratgeber/entruempelung/nachlassverwaltung-berlin'
    }
  ]

  return (
    <Section background="white" padding="large">
      <Container size="default">
        <div className="max-w-4xl mx-auto">
          <Link href="/ratgeber/entruempelung" className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Zurück zum Ratgeber
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
            Haushaltsauflösung nach Todesfall
          </h1>
          
          <p className="text-xl text-neutral-600 mb-8">
            Sensible und respektvolle Haushaltsauflösung nach einem Todesfall - wir unterstützen Sie in dieser schweren Zeit.
          </p>
          
          <div className="prose prose-lg max-w-none mb-12">
            <p>Weitere Inhalte folgen in Kürze...</p>
          </div>

          {/* Related Articles */}
          <div className="p-8 rounded-2xl bg-neutral-50 border-2 border-neutral-200">
            <h3 className="text-xl font-bold text-neutral-900 mb-6">
              Weitere Artikel zu diesem Thema
            </h3>
            <div className="space-y-4">
              {relatedArticles.map((article, idx) => (
                <Link
                  key={idx}
                  href={article.link}
                  className="group flex items-center justify-between p-4 rounded-xl bg-white border-2 border-neutral-200 hover:border-emerald-400 transition-all"
                >
                  <span className="font-semibold text-neutral-900 group-hover:text-emerald-600 transition-colors">
                    {article.title}
                  </span>
                  <ArrowRight className="w-5 h-5 text-emerald-600 group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
          
          <div className="mt-12">
            <Link href="/kontakt">
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-xl hover:shadow-lg transition-all">
                Jetzt einfühlsame Beratung erhalten
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  )
}
