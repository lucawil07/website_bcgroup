'use client'

import { useState, useEffect } from 'react'
import { Section, Container } from '@/components/ui'
import { Shield, Award, Headphones, CheckCircle2, Zap, Lock, ChevronLeft, ChevronRight } from 'lucide-react'

interface ReferenceLogosProps {
  variant?: 'dark' | 'light'
}

export default function ReferenceLogos({ variant = 'light' }: ReferenceLogosProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const logos = [
    { name: 'Zertifiziert & Versichert', icon: Shield },
    { name: 'Geprüfte Qualität', icon: Award },
    { name: '24/7 Erreichbar', icon: Headphones },
    { name: 'Transparente Preise', icon: Lock },
    { name: 'Schneller Service', icon: Zap },
    { name: 'Zufriedenheitsgarantie', icon: CheckCircle2 },
  ]

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Autoplay carousel
  useEffect(() => {
    if (!isAutoplay || isHovered) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % logos.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoplay, isHovered, logos.length])

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % logos.length)
    setIsAutoplay(false)
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + logos.length) % logos.length)
    setIsAutoplay(false)
  }

  // Responsive: Show 1 item on mobile, 3 on desktop
  const itemsToShow = isMobile ? 1 : 3
  const visibleIndices = Array.from({ length: itemsToShow }, (_, i) => 
    (currentIndex - Math.floor(itemsToShow / 2) + i + logos.length) % logos.length
  )

  const textClass = variant === 'dark' ? 'text-white' : 'text-primary'
  const subtleClass = variant === 'dark' ? 'text-white/70' : 'text-neutral-600'

  return (
    <Section background={variant === 'dark' ? 'dark' : 'light'} padding="small">
      <Container>
        <div className="py-6 md:py-8 lg:py-10">
          {/* Carousel Container - Fully responsive */}
          <div 
            className="relative w-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            role="region"
            aria-label="Trust and quality badges carousel"
          >
            {/* Desktop Navigation Buttons */}
            {!isMobile && (
              <>
                <button
                  onClick={goToPrev}
                  className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full transition-all duration-300 hover:scale-110 -ml-2 ${
                    variant === 'dark' 
                      ? 'hover:bg-white/15 text-white/70 hover:text-white' 
                      : 'hover:bg-secondary/15 text-neutral-400 hover:text-secondary'
                  }`}
                  aria-label="Previous item"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={goToNext}
                  className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full transition-all duration-300 hover:scale-110 -mr-2 ${
                    variant === 'dark' 
                      ? 'hover:bg-white/15 text-white/70 hover:text-white' 
                      : 'hover:bg-secondary/15 text-neutral-400 hover:text-secondary'
                  }`}
                  aria-label="Next item"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Logo Items Container - Responsive padding */}
            <div className="flex justify-center items-center gap-3 md:gap-6 px-4 md:px-16 lg:px-20">
              {visibleIndices.map((logoIndex, position) => {
                const logo = logos[logoIndex]
                const Icon = logo.icon
                const isCenter = isMobile || position === Math.floor(itemsToShow / 2)
                
                return (
                  <div
                    key={logoIndex}
                    className="w-full transition-all duration-700 ease-out flex justify-center"
                  >
                    <div
                      className={`transition-all duration-700 transform ${
                        isCenter 
                          ? 'scale-100 opacity-100' 
                          : 'scale-75 md:scale-80 opacity-40 md:opacity-40'
                      }`}
                    >
                      <div
                        className={`relative flex flex-col items-center gap-2 md:gap-2.5 p-4 md:p-5 rounded-lg md:rounded-2xl transition-all duration-700 w-fit ${
                          isCenter
                            ? variant === 'dark'
                              ? 'bg-white/12 border border-white/20 backdrop-blur-xl shadow-lg shadow-white/5'
                              : 'bg-secondary/12 border border-secondary/25 backdrop-blur-xl shadow-lg shadow-secondary/10'
                            : variant === 'dark'
                            ? 'bg-white/5 border border-white/10 backdrop-blur-sm'
                            : 'bg-secondary/5 border border-secondary/15 backdrop-blur-sm'
                        }`}
                      >
                        {/* Animated icon - Responsive size */}
                        <div className={`transition-all duration-700 ${isCenter ? 'scale-100' : 'scale-90'}`}>
                          <Icon className={`transition-all duration-700 ${
                            isCenter 
                              ? 'w-6 h-6 md:w-7 md:h-7 text-secondary' 
                              : 'w-5 h-5 md:w-6 md:h-6 text-secondary/50'
                          }`} />
                        </div>

                        {/* Text - Responsive sizing */}
                        <p className={`text-center font-semibold whitespace-nowrap transition-all duration-700 px-2 ${
                          isCenter 
                            ? `text-xs md:text-sm ${textClass}`
                            : `text-[10px] md:text-xs ${subtleClass}`
                        }`}>
                          {logo.name}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Mobile Navigation Dots - Positioned above on mobile */}
            <div className={`flex justify-center gap-2 md:gap-3 transition-all duration-300 ${isMobile ? 'mt-6' : 'mt-8'}`}>
              {logos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    setIsAutoplay(false)
                  }}
                  className={`rounded-full transition-all duration-500 ${
                    index === currentIndex
                      ? variant === 'dark'
                        ? 'w-2.5 h-2.5 md:w-3 md:h-3 bg-white shadow-lg shadow-white/30'
                        : 'w-2.5 h-2.5 md:w-3 md:h-3 bg-secondary shadow-lg shadow-secondary/40'
                      : variant === 'dark'
                      ? 'w-2 h-2 bg-white/30 hover:bg-white/60 cursor-pointer'
                      : 'w-2 h-2 bg-neutral-300 hover:bg-neutral-500 cursor-pointer'
                  }`}
                  aria-label={`Go to item ${index + 1}`}
                  aria-current={index === currentIndex ? 'true' : 'false'}
                />
              ))}
            </div>

            {/* Mobile Touch Swipe Hint - Shown on first view on mobile */}
            {isMobile && currentIndex === 0 && isAutoplay && (
              <div className={`text-center text-xs mt-4 animate-pulse ${subtleClass}`}>
                Swipe oder tippe auf die Punkte
              </div>
            )}

            {/* Auto-play indicator - Desktop only */}
            {!isMobile && isAutoplay && !isHovered && (
              <div className="flex justify-center mt-4">
                <p className={`text-xs ${subtleClass} animate-pulse`}>
                  Auto-scrolling...
                </p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  )
}
