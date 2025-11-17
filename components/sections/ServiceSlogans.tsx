'use client'

import { Section, Container } from '@/components/ui'

interface ServiceSlogansProps {
  slogans?: string[]
}

const DEFAULT_SLOGANS = [
  '💡 Digital gedacht. Persönlich gemacht.',
  '🤝 Ihr direkter Ansprechpartner für digitale Komplettlösungen.',
  '⚙️ Innovativ, effizient & mit persönlicher Beratung.',
  '🌐 Alles digital – Beratung trotzdem persönlich & kostenlos.',
]

export default function ServiceSlogans({ slogans = DEFAULT_SLOGANS }: ServiceSlogansProps) {
  // Remove emojis from slogans
  const cleanedSlogans = slogans.map(slogan => slogan.replace(/[^\w\s.,()\-&]/gu, '').trim())

  return (
    <Section background="light" padding="medium">
      <Container>
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Das macht uns zu Ihrem idealen Partner in Berlin
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cleanedSlogans.map((slogan, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg border border-neutral-200 hover:border-secondary/50 hover:bg-secondary/5 transition-all duration-300 bg-white"
            >
              <p className="text-neutral-700 font-medium text-center">
                {slogan}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
