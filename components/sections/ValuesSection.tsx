import Image from 'next/image'
import { Section, Container, ScrollReveal } from '@/components/ui'
import { Lightbulb, MapPin, Zap, Lock } from 'lucide-react'

const values = [
  {
    icon: MapPin,
    title: 'Regional mit Verantwortung',
    description: 'Berlin ist unsere Heimat – wir tragen Verantwortung für jedes Projekt.',
  },
  {
    icon: Lightbulb,
    title: 'Digital gedacht. Persönlich gemacht.',
    description: 'Moderne Lösungen mit persönlicher Beratung und direktem Ansprechpartner.',
  },
  {
    icon: Zap,
    title: 'Schnelle Lieferung & persönlicher Service',
    description: 'Effizient im Tempo, nie auf Kosten der persönlichen Note und Qualität.',
  },
  {
    icon: Lock,
    title: 'Sichere Daten & transparente Preise',
    description: 'Vertrauen durch Transparenz – keine versteckten Kosten, klare Kommunikation.',
  },
]

export default function ValuesSection() {
  return (
    <Section background="white" padding="medium">
      <Container size="wide">
        {/* Modern bento-grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Large featured card - spans 7 columns */}
          <ScrollReveal direction="left" className="lg:col-span-7">
            <div className="card-modern h-full min-h-[400px] md:min-h-[500px] relative overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1400&auto=format&fit=crop"
                alt="BC Group team demonstrating excellence and professionalism in service delivery"
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 700px"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-transparent" />
              
              {/* Content overlay */}
              <div className="absolute inset-0 p-6 md:p-8 lg:p-12 flex flex-col justify-end">
                <div className="space-y-4 md:space-y-6">
                  <div className="inline-block">
                    <span className="glass-dark px-4 md:px-6 py-2 md:py-3 rounded-full text-white text-xs md:text-sm font-bold uppercase tracking-[0.2em]">
                      Warum BC Group
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase leading-tight">
                    REGIONAL, INNOVATIV,<br />
                    <span className="text-secondary-light">PERSÖNLICH</span>
                  </h2>
                  <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-2xl">
                    Das sind die Grundwerte von BC Group. Wir glauben an ehrliche Partnerschaft 
                    und exzellenten Service mit persönlichem Anspruch.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Value cards grid - spans 5 columns */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">
            {values.map((value, index) => (
              <ScrollReveal 
                key={value.title}
                direction="right"
                delay={index * 0.1}
              >
                <div className="card-modern group cursor-pointer h-full">
                  <div className="p-6 md:p-8 space-y-3 md:space-y-4">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg" style={{ backgroundColor: '#0066CC' }}>
                      <value.icon className="w-7 h-7 md:w-8 md:h-8 text-white" style={{ color: '#ffffff' }} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-[#1a1a1a] uppercase tracking-wide">
                      {value.title}
                    </h3>
                    <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                  
                  {/* Hover effect border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-secondary/30 transition-colors duration-300 pointer-events-none" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
