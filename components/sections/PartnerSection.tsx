'use client'

import { useState } from 'react'
import { Section, Container } from '@/components/ui'
import { Building2, Users, Zap } from 'lucide-react'

export default function PartnerSection() {
  const [hoveredPartner, setHoveredPartner] = useState<number | null>(null)

  const partners = [
    {
      name: 'Partner 1',
      category: 'Kategorie',
      icon: Building2,
      description: 'Partnerschaftsbeschreibung',
    },
    {
      name: 'Partner 2',
      category: 'Kategorie',
      icon: Users,
      description: 'Partnerschaftsbeschreibung',
    },
    {
      name: 'Partner 3',
      category: 'Kategorie',
      icon: Zap,
      description: 'Partnerschaftsbeschreibung',
    },
    {
      name: 'Partner 4',
      category: 'Kategorie',
      icon: Building2,
      description: 'Partnerschaftsbeschreibung',
    },
  ]

  return (
    <Section background="light" padding="large">
      <Container>
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20">
              <Building2 className="w-4 h-4 text-secondary" />
              <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Unsere Partner</span>
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-6 leading-tight">
            Partner & Kooperationen
            <span className="block text-secondary">Sektion in Bearbeitung</span>
          </h2>
          
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            BC Group arbeitet mit verschiedenen Partnern zusammen. Diese Sektion wird in Kürze mit echten Partnerinformationen gefüllt.
          </p>
        </div>

        {/* Partners Grid - Placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {partners.map((partner, index) => {
            const Icon = partner.icon
            const isHovered = hoveredPartner === index

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredPartner(index)}
                onMouseLeave={() => setHoveredPartner(null)}
                className="group relative h-full"
              >
                {/* Card */}
                <div
                  className={`relative overflow-hidden rounded-2xl border-2 transition-all duration-500 h-full flex flex-col ${
                    isHovered
                      ? 'border-secondary/40 bg-linear-to-br from-secondary/8 to-secondary/3 shadow-xl shadow-secondary/20'
                      : 'border-neutral-200 bg-white shadow-md'
                  }`}
                >
                  {/* Content */}
                  <div className="relative p-6 md:p-8 flex flex-col h-full">
                    {/* Icon Container */}
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14 rounded-xl transition-all duration-500 mb-4 ${
                        isHovered
                          ? 'bg-linear-to-br from-secondary to-blue-600 scale-110 shadow-lg'
                          : 'bg-secondary/10 scale-100'
                      }`}
                    >
                      <Icon
                        className={`w-7 h-7 transition-colors duration-500 ${
                          isHovered ? 'text-white' : 'text-secondary'
                        }`}
                      />
                    </div>

                    {/* Category Badge */}
                    <div className="mb-3">
                      <span
                        className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-500 ${
                          isHovered
                            ? 'bg-secondary/20 text-secondary'
                            : 'bg-neutral-100 text-neutral-600'
                        }`}
                      >
                        {partner.category}
                      </span>
                    </div>

                    {/* Partner Name - Placeholder Style */}
                    <h3
                      className={`text-lg font-bold transition-colors duration-500 mb-3 ${
                        isHovered ? 'text-secondary' : 'text-primary'
                      }`}
                    >
                      {partner.name}
                    </h3>

                    {/* Description - Placeholder */}
                    <p
                      className={`text-sm grow transition-all duration-500 italic ${
                        isHovered
                          ? 'text-neutral-700 opacity-100'
                          : 'text-neutral-500 opacity-75'
                      }`}
                    >
                      {partner.description}
                    </p>

                    {/* Hover Indicator */}
                    <div
                      className={`mt-4 h-1 rounded-full transition-all duration-500 ${
                        isHovered
                          ? 'w-full bg-linear-to-r from-secondary to-blue-600'
                          : 'w-0 bg-secondary'
                      }`}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Coming Soon Message */}
        <div className="text-center bg-secondary/5 border-2 border-secondary/20 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-primary mb-2">Mehr Partner in Kürze</h3>
          <p className="text-neutral-600">
            Wir erweitern kontinuierlich unser Partnernetzwerk. Seien Sie gespannt auf weitere Kooperationen!
          </p>
        </div>
      </Container>
    </Section>
  )
}
