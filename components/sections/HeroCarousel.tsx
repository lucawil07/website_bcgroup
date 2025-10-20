'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion, useSpring } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import { Play, Pause, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

interface Slide {
  title: string
  subtitle: string
  description: string
  image: string
  video?: string
  cta?: {
    label: string
    href: string
  }
  theme?: 'dark' | 'light'
}

const slides: Slide[] = [
  {
    title: 'WIR MACHEN.',
    subtitle: 'SEIT ÜBER 10 JAHREN',
    description: 'Ihr zuverlässiger Servicepartner in Berlin für alle Dienstleistungen aus einer Hand',
    image: '/images/generated_image.png',
    theme: 'dark',
  },
  {
    title: 'ENTRÜMPELUNG',
    subtitle: 'PROFESSIONELL & ZUVERLÄSSIG',
    description: 'Von der Wohnung bis zum Gewerbeobjekt – wir räumen auf und sorgen für Ordnung',
    image: '/images/generated_image.png',
    cta: {
      label: 'MEHR INFOS',
      href: '/services/entruempelung',
    },
    theme: 'dark',
  },
  {
    title: 'ABRISS',
    subtitle: 'PRÄZISE & PROFESSIONELL',
    description: 'Fachgerechter Abbruch und Rückbau mit modernster Technik und erfahrenem Team',
    image: '/images/abriss_berlin.png',
    cta: {
      label: 'MEHR INFOS',
      href: '/services/abriss',
    },
    theme: 'dark',
  },
  {
    title: 'REINIGUNG',
    subtitle: 'SAUBER & GRÜNDLICH',
    description: 'Professionelle Gebäudereinigung für höchste Ansprüche und nachhaltigen Glanz',
    image: '/images/reinigung_berlin.png',
    cta: {
      label: 'MEHR INFOS',
      href: '/services/reinigung',
    },
    theme: 'dark',
  },
  {
    title: 'HAUSMEISTERSERVICE',
    subtitle: 'ZUVERLÄSSIG & KOMPETENT',
    description: 'Ihr professioneller Hausmeisterservice für Gebäude und Anlagen in Berlin',
    image: '/images/hausmeister_berlin.png',
    cta: {
      label: 'MEHR INFOS',
      href: '/services/hausmeisterservice',
    },
    theme: 'dark',
  },
  {
    title: 'UMZUG & TRANSPORT',
    subtitle: 'STRESSFREI & SICHER',
    description: 'Ihr Umzug in sicheren Händen – mit modernster Technik und erfahrenem Team',
    image: '/images/umzug_berlin.png',
    cta: {
      label: 'MEHR INFOS',
      href: '/services/umzug',
    },
    theme: 'dark',
  },
  {
    title: 'KURIERDIENST',
    subtitle: 'SCHNELL & ZUVERLÄSSIG',
    description: 'Express-Kurierdienst in Berlin – Ihre Sendung pünktlich am Ziel',
    image: '/images/kurier_berlinv1.png',
    cta: {
      label: 'MEHR INFOS',
      href: '/services/kurierdienst',
    },
    theme: 'dark',
  },
]

export default function HeroCarousel() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 })
  const [isHovering, setIsHovering] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  
  const shouldReduceMotion = useReducedMotion()
  const { scrollY } = useScroll()
  
  // Smooth parallax with spring physics
  const parallaxY = useSpring(
    useTransform(scrollY, [0, 1000], [0, shouldReduceMotion ? 50 : 200]),
    { stiffness: 100, damping: 30, restDelta: 0.001 }
  )

  // Optimized mouse tracking with throttle
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!containerRef.current || shouldReduceMotion) return
    
    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    
    setMousePosition({ x, y })
  }, [shouldReduceMotion])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    container.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => container.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  const scrollToContent = useCallback(() => {
    const content = document.getElementById('content-start')
    content?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  const toggleAutoplay = useCallback(() => {
    if (!swiper) return
    
    if (isPlaying) {
      swiper.autoplay.stop()
    } else {
      swiper.autoplay.start()
    }
    setIsPlaying(!isPlaying)
  }, [swiper, isPlaying])

  // Keyboard navigation with accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!swiper) return
      
      switch(e.key) {
        case 'ArrowLeft':
          swiper.slidePrev()
          break
        case 'ArrowRight':
          swiper.slideNext()
          break
        case ' ':
          e.preventDefault()
          toggleAutoplay()
          break
      }
    }
    
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [swiper, toggleAutoplay])

  const currentSlide = slides[activeIndex]

  // Modern animation variants with proper typing
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.2,
        when: "beforeChildren" as const
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number]
      }
    }
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 100, rotateX: -30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: { 
        duration: 1, 
        ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number]
      }
    }
  }

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-screen overflow-hidden bg-black"
      role="region"
      aria-label="Hero carousel showcasing BC Group services"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Enhanced background with optimized parallax */}
      <motion.div 
        className="absolute inset-0 z-0 overflow-hidden"
        style={{ y: parallaxY }}
      >
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={1800}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            bulletClass: 'hero-pagination-bullet',
            bulletActiveClass: 'hero-pagination-bullet-active',
          }}
          loop={true}
          onSwiper={setSwiper}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="h-full w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full w-full overflow-hidden">
                {/* Ultra-smooth Ken Burns effect with spring */}
                <motion.div
                  className="absolute inset-0 bg-cover bg-center will-change-transform"
                  style={{ 
                    backgroundImage: `url(${slide.image})`,
                    width: '100%',
                    height: '100%',
                  }}
                  initial={{ scale: 1.1 }}
                  animate={{
                    scale: shouldReduceMotion ? 1.1 : [1.1, 1.15, 1.1],
                    x: shouldReduceMotion ? 0 : (mousePosition.x - 0.5) * 20,
                    y: shouldReduceMotion ? 0 : (mousePosition.y - 0.5) * 20,
                  }}
                  transition={{
                    scale: { 
                      duration: 25, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      repeatType: "reverse"
                    },
                    x: { type: "spring", stiffness: 50, damping: 30 },
                    y: { type: "spring", stiffness: 50, damping: 30 },
                  }}
                >
                  {/* Modern gradient overlays - Lightened for better visibility */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/25 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-secondary/20 via-transparent to-accent/15"
                    animate={{
                      opacity: [0.2, 0.35, 0.2]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Subtle noise texture for depth */}
                  <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay bg-noise" />
                </motion.div>

                {/* Optimized ambient particles (2 only) */}
                {!shouldReduceMotion && (
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(2)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white/10 rounded-full blur-sm"
                        animate={{
                          x: [0, 150, 0],
                          y: [0, -150, 0],
                          opacity: [0, 0.4, 0],
                          scale: [0, 1.5, 0],
                        }}
                        transition={{
                          duration: 15 + i * 3,
                          repeat: Infinity,
                          delay: i * 5,
                          ease: "easeInOut"
                        }}
                        style={{
                          left: `${25 + i * 40}%`,
                          top: `${40 + i * 20}%`,
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Screen reader announcements */}
      <div 
        role="status" 
        aria-live="polite" 
        aria-atomic="true" 
        className="sr-only"
      >
        Folie {activeIndex + 1} von {slides.length}: {currentSlide.title}. {currentSlide.description}
      </div>

      {/* Modern content with fluid animations */}
      <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -30, transition: { duration: 0.4 } }}
              className="text-center space-y-4"
            >
              {/* Ultra-modern title with smooth reveal */}
              <motion.div
                variants={titleVariants}
                className="perspective-1000"
              >
                <motion.h1 
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-[0.9] will-change-transform"
                  style={{ 
                    textShadow: '0 4px 40px rgba(0, 0, 0, 0.7), 0 2px 20px rgba(0, 102, 204, 0.5), 0 0 80px rgba(0, 102, 204, 0.3)',
                  }}
                  whileHover={!shouldReduceMotion ? {
                    scale: 1.02,
                    transition: { 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 20 
                    }
                  } : undefined}
                >
                  {currentSlide.title}
                </motion.h1>
              </motion.div>
              
              {/* Elevated subtitle with premium glass morphism */}
              <motion.div
                variants={itemVariants}
                className="flex justify-center will-change-transform"
              >
                <motion.div
                  className="relative group"
                  whileHover={!shouldReduceMotion ? {
                    scale: 1.05,
                    transition: { 
                      type: "spring", 
                      stiffness: 400, 
                      damping: 25 
                    }
                  } : undefined}
                  whileTap={!shouldReduceMotion ? { scale: 0.98 } : undefined}
                >
                  {/* Glass morphism container */}
                  <div className="relative px-4 sm:px-6 py-2 sm:py-3 rounded-full overflow-hidden">
                    {/* Backdrop blur layer */}
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-xl" />
                    
                    {/* Animated border gradient */}
                    <div className="absolute inset-0 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 via-white/30 to-white/20 blur-sm" />
                    </div>
                    
                    {/* Border */}
                    <div className="absolute inset-0 rounded-full border border-white/20 group-hover:border-white/40 transition-colors duration-300" />
                    
                    {/* Shimmer effect */}
                    <motion.div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                        backgroundSize: '200% 100%',
                      }}
                      animate={{
                        backgroundPosition: ['200% 0', '-200% 0']
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'linear'
                      }}
                    />
                    
                    {/* Text content */}
                    <p className="relative z-10 text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white uppercase tracking-[0.2em] drop-shadow-2xl">
                      {currentSlide.subtitle}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Refined description */}
              <motion.p 
                variants={itemVariants}
                className="text-sm sm:text-base md:text-lg text-white/95 max-w-2xl mx-auto font-light leading-relaxed px-4"
                style={{
                  textShadow: '0 2px 20px rgba(0, 0, 0, 0.8)'
                }}
              >
                {currentSlide.description}
              </motion.p>
              
              {/* Enhanced CTA with magnetic hover */}
              {currentSlide.cta && (
                <motion.div
                  variants={itemVariants}
                  className="pt-4"
                >
                  <motion.div
                    whileHover={!shouldReduceMotion ? { scale: 1.08 } : undefined}
                    whileTap={!shouldReduceMotion ? { scale: 0.95 } : undefined}
                  >
                    <Button
                      variant="glass"
                      size="lg"
                      onClick={() => window.location.href = currentSlide.cta!.href}
                      icon={<ArrowRight className="w-4 h-4" />}
                      iconPosition="right"
                      className="group relative overflow-hidden border-2 border-white/40 hover:border-white bg-white/10 hover:bg-white/20 shadow-2xl hover:shadow-glow-white text-sm sm:text-base font-bold px-6 sm:px-8 py-3 sm:py-4 backdrop-blur-2xl"
                    >
                      <span className="relative z-10">{currentSlide.cta.label}</span>
                      
                      {/* Animated background on hover */}
                      <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-secondary/20 via-accent/20 to-secondary/20 opacity-0 group-hover:opacity-100"
                        animate={{
                          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        style={{ backgroundSize: '200% 100%' }}
                      />
                    </Button>
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Refined control elements */}
      <motion.div 
        className="absolute bottom-8 left-8 z-20"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <motion.button
          onClick={toggleAutoplay}
          className="glass-dark text-white p-3 sm:p-4 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/20 backdrop-blur-xl transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={isPlaying ? 'Pause carousel autoplay' : 'Start carousel autoplay'}
          title={isPlaying ? 'Pause (Leertaste)' : 'Abspielen (Leertaste)'}
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </motion.button>
      </motion.div>

      {/* Modern slide counter */}
      <motion.div 
        className="absolute top-8 right-8 z-20"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <div 
          className="glass-dark text-white px-5 py-2.5 rounded-full text-sm sm:text-base font-mono font-bold border border-white/20 backdrop-blur-xl"
          role="status"
          aria-label={`Folie ${activeIndex + 1} von ${slides.length}`}
        >
          <span className="text-white/60">0</span>{activeIndex + 1} <span className="text-white/40 mx-1">/</span> <span className="text-white/60">0</span>{slides.length}
        </div>
      </motion.div>

      {/* Service Navigation Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <div className="relative overflow-hidden">
          {/* Background with glass morphism */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent backdrop-blur-md" />
          
          {/* Service Items Container */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-0 divide-x divide-white/10">
              {[
                { name: 'ENTRÜMPELUNG', href: '/services/entruempelung' },
                { name: 'ABRISS', href: '/services/abriss' },
                { name: 'REINIGUNG', href: '/services/reinigung' },
                { name: 'HAUSMEISTER', href: '/services/hausmeisterservice' },
                { name: 'UMZUG', href: '/services/umzug' },
                { name: 'KURIER', href: '/services/kurierdienst' }
              ].map((service, index) => (
                <motion.a
                  key={service.name}
                  href={service.href}
                  className="group relative flex-1 py-6 sm:py-8 px-4 sm:px-6 text-center transition-all duration-300 hover:bg-white/5"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 1.9 + index * 0.1, 
                    duration: 0.6,
                    ease: [0.215, 0.61, 0.355, 1]
                  }}
                  whileHover={!shouldReduceMotion ? { 
                    y: -8,
                    transition: { duration: 0.3 }
                  } : undefined}
                >
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent" />
                  </div>
                  
                  {/* Active indicator line */}
                  <motion.div 
                    className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    layoutId="activeService"
                  />
                  
                  {/* Service name */}
                  <span className="relative z-10 block text-sm sm:text-base lg:text-lg font-bold text-white/80 group-hover:text-white uppercase tracking-wider transition-all duration-300 group-hover:tracking-widest">
                    {service.name}
                  </span>
                  
                  {/* Subtle arrow on hover */}
                  <motion.div
                    className="relative z-10 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ y: -10 }}
                    whileHover={{ y: 0 }}
                  >
                    <ArrowRight className="w-4 h-4 mx-auto text-white/60" />
                  </motion.div>
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Bottom gradient fade */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </motion.div>

      {/* Ultra-modern pagination styling */}
      <style jsx global>{`
        .hero-pagination-bullet {
          width: 12px;
          height: 12px;
          background: transparent !important;
          border: 2px solid rgba(255, 255, 255, 0.4);
          border-radius: 50%;
          transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
          cursor: pointer;
          position: relative;
          backdrop-filter: blur(8px);
        }
        
        .hero-pagination-bullet::before {
          content: '';
          position: absolute;
          inset: -4px;
          border: 1px solid transparent;
          border-radius: 50%;
          transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
        }
        
        .hero-pagination-bullet::after {
          content: '';
          position: absolute;
          inset: 0;
          background: white;
          border-radius: 50%;
          transform: scale(0);
          transition: transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
        }
        
        .hero-pagination-bullet-active {
          border-color: white;
          transform: scale(1.3);
        }
        
        .hero-pagination-bullet-active::before {
          border-color: rgba(255, 255, 255, 0.3);
          inset: -6px;
        }
        
        .hero-pagination-bullet-active::after {
          transform: scale(1);
        }
        
        .hero-pagination-bullet:hover:not(.hero-pagination-bullet-active) {
          border-color: rgba(255, 255, 255, 0.7);
          transform: scale(1.15);
        }
        
        .swiper-pagination {
          bottom: 10rem !important;
          display: flex;
          gap: 20px;
          justify-content: center;
          align-items: center;
          z-index: 20;
        }
        
        @media (max-width: 768px) {
          .swiper-pagination {
            bottom: 11rem !important;
            gap: 16px;
          }
          
          .hero-pagination-bullet {
            width: 10px;
            height: 10px;
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .hero-pagination-bullet,
          .hero-pagination-bullet::before,
          .hero-pagination-bullet::after {
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  )
}
