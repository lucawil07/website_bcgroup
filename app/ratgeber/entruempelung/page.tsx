import { Metadata } from 'next'
import Link from 'next/link'
import { Container, Section, ScrollReveal, StructuredData } from '@/components/ui'
import { ArrowRight, ArrowLeft, Home, Building2, Warehouse, Users, Clock, Wrench, Euro, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Entrümpelung Ratgeber Berlin - Tipps & Anleitungen | BC Group',
  description: 'Umfassender Ratgeber zur Entrümpelung in Berlin. Erfahren Sie alles über Wohnungsauflösung, Kellerentrümpelung, Kosten und mehr.',
  keywords: [
    'entrümpelung ratgeber',
    'entrümpelung berlin tipps',
    'wohnungsauflösung anleitung',
    'entrümpelung kosten',
    'kellerentrümpelung',
    'haushaltsauflösung',
  ],
  openGraph: {
    title: 'Entrümpelung Ratgeber Berlin - Tipps & Anleitungen',
    description: 'Umfassender Ratgeber zur Entrümpelung in Berlin. Wohnungsauflösung, Kellerentrümpelung, Kosten und mehr.',
    type: 'website',
    locale: 'de_DE',
    url: 'https://bcgroup.de/ratgeber/entruempelung',
    siteName: 'BC Group Berlin',
  },
  alternates: {
    canonical: 'https://bcgroup.de/ratgeber/entruempelung',
  },
}

export default function EntruempelungRatgeberPage() {
  const articles = [
    {
      title: 'Wohnungsauflösung Berlin',
      description: 'Kompletter Leitfaden zur professionellen Wohnungsauflösung in Berlin',
      icon: Home,
      link: '/ratgeber/entruempelung/wohnungsaufloesung-berlin',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Kellerentrümpelung Berlin',
      description: 'So wird Ihr Keller professionell und effizient entrümpelt',
      icon: Warehouse,
      link: '/ratgeber/entruempelung/kellerentruempelung-berlin',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Bauschuttentsorgung Berlin',
      description: 'Fachgerechte Entsorgung von Bauschutt und Renovierungsresten',
      icon: Building2,
      link: '/ratgeber/entruempelung/bauschuttentsorgung-berlin',
      color: 'from-orange-500 to-amber-500'
    },
    {
      title: 'Haushaltsauflösung nach Todesfall',
      description: 'Einfühlsame Unterstützung bei der Haushaltsauflösung nach einem Todesfall',
      icon: Users,
      link: '/ratgeber/entruempelung/haushaltsaufloesung-nach-todesfall',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Gewerbliche Räumung Berlin',
      description: 'Professionelle Räumung von Büros, Läden und Lagerhallen',
      icon: Building2,
      link: '/ratgeber/entruempelung/gewerbliche-raeumung-berlin',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Express-Entrümpelung Berlin',
      description: 'Schnelle Entrümpelung innerhalb von 24-48 Stunden',
      icon: Clock,
      link: '/ratgeber/entruempelung/express-entruempelung-berlin',
      color: 'from-red-500 to-rose-500'
    },
    {
      title: 'Kosten Wohnungsauflösung Berlin',
      description: 'Transparente Preisübersicht und Kostenfaktoren für Ihre Wohnungsauflösung',
      icon: Euro,
      link: '/ratgeber/entruempelung/kosten-wohnungsaufloesung-berlin',
      color: 'from-teal-500 to-emerald-500'
    },
    {
      title: 'Messie-Wohnung entrümpeln Berlin',
      description: 'Diskrete und professionelle Entrümpelung bei Vermüllungssyndrom',
      icon: AlertTriangle,
      link: '/ratgeber/entruempelung/messie-wohnung-entruempeln-berlin',
      color: 'from-amber-500 to-orange-500'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <Section background="dark" padding="large" className="pt-32 md:pt-40">
        <Container size="default">
          <ScrollReveal direction="up">
            <Link 
              href="/ratgeber" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-bold uppercase tracking-wider">Zurück zum Ratgeber</span>
            </Link>

            <div className="mb-6">
              <span className="bg-emerald-600 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
                Entrümpelung
              </span>
            </div>

            <h1 className="text-hero uppercase font-black mb-6 leading-tight">
              Ihr umfassender<br />
              <span className="gradient-text">Entrümpelung-Ratgeber</span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl">
              Entdecken Sie professionelle Tipps, Anleitungen und Informationen rund um das Thema Entrümpelung in Berlin. 
              Von der Wohnungsauflösung bis zur Bauschuttentsorgung – wir haben alle wichtigen Themen für Sie zusammengestellt.
            </p>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Articles Grid */}
      <Section background="white" padding="large">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => {
              const Icon = article.icon
              return (
                <Link 
                  key={index}
                  href={article.link}
                  className="group relative rounded-3xl overflow-hidden border-2 border-neutral-200 hover:border-emerald-400 transition-all duration-300 hover:shadow-xl bg-white"
                >
                  {/* Gradient Header */}
                  <div className={`h-32 bg-gradient-to-br ${article.color} p-6 flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                    <Icon className="w-16 h-16 text-white relative z-10" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-emerald-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                      {article.description}
                    </p>
                    
                    <div className="flex items-center gap-2 text-emerald-600 font-semibold text-sm group-hover:gap-3 transition-all">
                      <span>Mehr erfahren</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>
              )
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="inline-block p-8 md:p-12 rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200">
              <h2 className="text-2xl md:text-3xl font-black text-neutral-900 mb-4">
                Haben Sie Fragen zur Entrümpelung?
              </h2>
              <p className="text-neutral-600 mb-6 max-w-2xl">
                Unser Expertenteam berät Sie gerne kostenlos und unverbindlich zu allen Fragen rund um Ihre Entrümpelung.
              </p>
              <Link href="/kontakt">
                <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 inline-flex items-center gap-2">
                  Jetzt kostenlos beraten lassen
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
