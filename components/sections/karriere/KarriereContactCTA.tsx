'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Section, Container, Button } from '@/components/ui'
import { Mail, Phone, MapPin, ArrowRight, Sparkles, MessageCircle } from 'lucide-react'

export default function KarriereContactCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  const contactMethods = [
    {
      icon: Mail,
      title: 'E-Mail',
      value: 'info@bc-entruempelung.com',
      href: 'mailto:info@bc-entruempelung.com',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
    {
      icon: Phone,
      title: 'Telefon',
      value: '+49 176 79567083',
      href: 'tel:+4917679567083',
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+49 176 79567083',
      href: 'https://wa.me/4917679567083?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Position%20bei%20BC%20Group',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  }

  return (
    <Section background="white" padding="large">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-to-br from-secondary/5 to-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-tl from-secondary/5 to-transparent rounded-full blur-3xl" />
      </div>

      <Container size="wide">
        <div ref={sectionRef} className="relative z-10">
          {/* Main CTA Container */}
          <motion.div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            variants={containerVariants}
            className="max-w-5xl mx-auto"
          >
            {/* Header Section */}
            <motion.div variants={itemVariants} className="text-center space-y-6 mb-16">
              {/* Accent line */}
              <motion.div
                initial={{ width: 0 }}
                animate={isVisible ? { width: '100%' } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center justify-center gap-3"
              >
                <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />
              </motion.div>

              {/* Main Heading */}
              <div className="space-y-4">
                <motion.div
                  variants={itemVariants}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-secondary/10 to-accent/10 border border-secondary/20 mx-auto"
                >
                  <Sparkles className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
                    Nächster Schritt
                  </span>
                </motion.div>

                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight">
                  <span className="block text-primary">Bereit für dein</span>
                  <motion.span
                    initial={{ backgroundPosition: '100% center' }}
                    animate={isVisible ? { backgroundPosition: '0% center' } : {}}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="block gradient-text"
                    style={{
                      backgroundImage:
                        'linear-gradient(to right, #0066CC, #FF6B35, #0066CC)',
                      backgroundSize: '200% center',
                    }}
                  >
                    Abenteuer?
                  </motion.span>
                </h2>
              </div>

              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto"
              >
                Wir sind nur einen Klick entfernt. Kontaktiere uns oder bewirb dich direkt.
              </motion.p>
            </motion.div>

            {/* Contact Methods - Premium Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            >
              {contactMethods.map((method, index) => {
                const Icon = method.icon

                return (
                  <motion.a
                    key={index}
                    href={method.href}
                    variants={itemVariants}
                    whileHover={{
                      y: -12,
                      transition: { duration: 0.3 },
                    }}
                    className="group relative"
                  >
                    {/* Background glow on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10 blur-xl" />

                    {/* Main Card */}
                    <div
                      className={`relative h-full rounded-2xl border-2 p-8 transition-all duration-500 overflow-hidden
                        ${method.borderColor} ${method.bgColor}
                        hover:shadow-2xl hover:border-opacity-100 group-hover:bg-white`}
                    >
                      {/* Top accent line that animates */}
                      <motion.div
                        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${method.color}`}
                        initial={{ scaleX: 0, originX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.5 }}
                      />

                      {/* Floating background shapes */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <div
                          className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${method.color} rounded-full blur-3xl opacity-10`}
                        />
                      </div>

                      {/* Content */}
                      <div className="relative space-y-4">
                        {/* Icon with animated background */}
                        <motion.div
                          className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${method.color} shadow-lg transition-all duration-500`}
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                        >
                          <Icon className="w-7 h-7 text-white" />
                        </motion.div>

                        {/* Text Content */}
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold text-primary transition-colors group-hover:text-secondary">
                            {method.title}
                          </h3>
                          <p className="text-base text-neutral-700 font-semibold">
                            {method.value}
                          </p>
                        </div>

                        {/* Hover indicator */}
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          whileHover={{ opacity: 1, x: 0 }}
                          className="flex items-center gap-2 text-secondary pt-2"
                        >
                          <span className="text-sm font-semibold">Kontaktieren</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </motion.div>
                      </div>
                    </div>
                  </motion.a>
                )
              })}
            </motion.div>

            {/* Divider with accent */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 my-12"
            >
              <div className="flex-1 h-0.5 bg-gradient-to-r from-neutral-200 via-secondary/30 to-neutral-200" />
              <span className="text-neutral-400 font-medium text-sm">ODER</span>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-neutral-200 via-secondary/30 to-neutral-200" />
            </motion.div>

            {/* Primary CTA Section */}
            <motion.div
              variants={itemVariants}
              className="text-center space-y-6"
            >
              {/* CTA Button with premium styling */}
              <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
                <Link href="/kontakt">
                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-12 py-5 font-bold text-lg text-white rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl"
                    style={{
                      background: 'linear-gradient(135deg, #0066CC 0%, #0052A3 100%)',
                    }}
                  >
                    <div className="flex items-center justify-center gap-3">
                      <span>Jetzt bewerben</span>
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </div>
                  </motion.button>
                </Link>
              </motion.div>

              {/* Footer Note with enhanced styling */}
              <motion.div variants={itemVariants} className="space-y-2">
                <p className="text-neutral-600 font-medium">
                  ✓ Wir antworten innerhalb von 24-48 Stunden
                </p>
                <p className="text-sm text-neutral-500">
                  Deine Daten sind bei uns sicher und werden vertraulich behandelt
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
