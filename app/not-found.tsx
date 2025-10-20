'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, Search, ArrowLeft, MapPin, Phone, Mail } from 'lucide-react'
import { Container, Button } from '@/components/ui'

const services = [
  { name: 'Entrümpelung', href: '/services/entruempelung' },
  { name: 'Abriss', href: '/services/abriss' },
  { name: 'Reinigung', href: '/services/reinigung' },
  { name: 'Hausmeisterservice', href: '/services/hausmeisterservice' },
  { name: 'Umzug', href: '/services/umzug' },
  { name: 'Kurierdienst', href: '/services/kurierdienst' },
]

const popularPages = [
  { name: 'Über uns', href: '/ueber-uns' },
  { name: 'Kontakt', href: '/kontakt' },
  { name: 'Ratgeber', href: '/ratgeber' },
  { name: 'Service-Gebiete', href: '/service-gebiete' },
]

export default function NotFound() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-neutral-50 to-neutral-100 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-br from-secondary/20 to-transparent blur-3xl"
          animate={{
            x: mousePosition.x / 20,
            y: mousePosition.y / 20,
          }}
          transition={{ type: 'spring', stiffness: 50, damping: 30 }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-accent/20 to-transparent blur-3xl"
          animate={{
            x: -mousePosition.x / 30,
            y: -mousePosition.y / 30,
          }}
          transition={{ type: 'spring', stiffness: 50, damping: 30 }}
          style={{ bottom: '10%', right: '10%' }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl"
          animate={{
            x: mousePosition.x / 40,
            y: -mousePosition.y / 40,
          }}
          transition={{ type: 'spring', stiffness: 50, damping: 30 }}
          style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        />
      </div>

      {/* Main Content */}
      <Container className="relative z-10">
        <div className="min-h-screen flex items-center justify-center py-20">
          <div className="w-full max-w-5xl">
            {/* 404 Number */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
              className="text-center mb-8"
            >
              <motion.h1
                className="text-[clamp(8rem,20vw,16rem)] font-black leading-none gradient-text-aurora mb-4"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              >
                404
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="space-y-3"
              >
                <h2 className="text-4xl md:text-5xl font-black text-primary-950">
                  Seite nicht gefunden
                </h2>
                <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                  Die von Ihnen gesuchte Seite existiert leider nicht oder wurde verschoben.
                </p>
              </motion.div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-4 mb-16"
            >
              <Link href="/">
                <Button 
                  variant="primary" 
                  size="lg"
                  className="group"
                >
                  <Home className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
                  Zur Startseite
                </Button>
              </Link>
              <Link href="/kontakt">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="group"
                >
                  <Phone className="w-5 h-5 mr-2 transition-transform group-hover:rotate-12" />
                  Kontakt aufnehmen
                </Button>
              </Link>
            </motion.div>

            {/* Glass Card with Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="glass-strong backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl"
            >
              <div className="grid md:grid-cols-2 gap-12">
                {/* Services */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-secondary flex items-center justify-center">
                      <Search className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary-950">
                      Unsere Services
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {services.map((service, index) => (
                      <motion.li
                        key={service.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                      >
                        <Link
                          href={service.href}
                          className="group flex items-center gap-3 p-4 rounded-xl hover:bg-white/50 transition-all duration-300"
                        >
                          <ArrowLeft className="w-5 h-5 text-secondary opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0" />
                          <span className="font-semibold text-neutral-700 group-hover:text-secondary transition-colors">
                            {service.name}
                          </span>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Popular Pages */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-accent flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary-950">
                      Beliebte Seiten
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {popularPages.map((page, index) => (
                      <motion.li
                        key={page.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                      >
                        <Link
                          href={page.href}
                          className="group flex items-center gap-3 p-4 rounded-xl hover:bg-white/50 transition-all duration-300"
                        >
                          <ArrowLeft className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0" />
                          <span className="font-semibold text-neutral-700 group-hover:text-accent transition-colors">
                            {page.name}
                          </span>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Contact Info */}
                  <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10">
                    <h4 className="font-bold text-primary-950 mb-4">
                      Benötigen Sie Hilfe?
                    </h4>
                    <div className="space-y-3">
                      <a
                        href="tel:+49301234567"
                        className="flex items-center gap-3 text-neutral-600 hover:text-secondary transition-colors group"
                      >
                        <Phone className="w-4 h-4 transition-transform group-hover:rotate-12" />
                        <span className="text-sm font-medium">+49 30 123 456 7</span>
                      </a>
                      <a
                        href="mailto:info@bcgroup.de"
                        className="flex items-center gap-3 text-neutral-600 hover:text-secondary transition-colors group"
                      >
                        <Mail className="w-4 h-4 transition-transform group-hover:scale-110" />
                        <span className="text-sm font-medium">info@bcgroup.de</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bottom Message */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="text-center mt-12"
            >
              <p className="text-sm text-neutral-500">
                Wenn Sie glauben, dass hier eine Seite sein sollte, kontaktieren Sie uns bitte.
              </p>
            </motion.div>
          </div>
        </div>
      </Container>

      {/* Floating Elements for Visual Interest */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-gradient-to-br from-secondary/30 to-accent/30"
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(i) * 20, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              left: `${(i * 12) + 10}%`,
              top: `${(i * 10) % 80 + 10}%`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
