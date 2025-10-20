'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'
import { MagneticElement } from '@/components/ui'

interface NavItem {
  label: string
  href?: string
  items?: { label: string; href: string; description?: string }[]
}

const navigation: NavItem[] = [
  {
    label: 'Company',
    items: [
      { label: 'Über uns', href: '/ueber-uns', description: 'Erfahren Sie mehr über unser Unternehmen' },
      { label: 'Team', href: '/team', description: 'Lernen Sie unser erfahrenes Team kennen' },
      { label: 'Karriere', href: '/karriere', description: 'Werden Sie Teil unseres Teams' },
    ],
  },
  {
    label: 'Service',
    items: [
      { label: 'Entrümpelung', href: '/services/entruempelung', description: 'Professionelle Entrümpelung' },
      { label: 'Abriss', href: '/services/abriss', description: 'Fachgerechter Abriss' },
      { label: 'Reinigung', href: '/services/reinigung', description: 'Gebäudereinigung' },
      { label: 'Hausmeisterservice', href: '/services/hausmeisterservice', description: 'Zuverlässiger Service' },
      { label: 'Umzug & Transport', href: '/services/umzug', description: 'Stressfreie Umzüge' },
      { label: 'Kurierdienst', href: '/services/kurierdienst', description: 'Schnelle Zustellung' },
    ],
  },
  { label: 'News', href: '/ratgeber' },
  { label: 'Locations', href: '/service-gebiete' },
  {
    label: 'Karriere',
    items: [
      { label: 'Jobs', href: '/karriere/jobs', description: 'Offene Stellenanzeigen' },
      { label: 'Bewerbung', href: '/karriere/bewerbung', description: 'Jetzt bewerben' },
      { label: 'Vorteile', href: '/karriere/vorteile', description: 'Ihre Vorteile bei uns' },
    ],
  },
  { label: 'Kontakt', href: '/kontakt' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up')
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      setIsScrolled(currentScrollY > 20)
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setScrollDirection('down')
      } else {
        setScrollDirection('up')
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ 
        y: scrollDirection === 'down' && isScrolled ? -100 : 0,
        opacity: scrollDirection === 'down' && isScrolled ? 0 : 1
      }}
      transition={{ duration: 0.3, ease: [0.77, 0, 0.175, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'glass-strong shadow-2xl backdrop-blur-3xl border-b border-white/10'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <Link href="/" className="relative group">
            <MagneticElement>
              <div className="flex items-center gap-3">
                <motion.div 
                  className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center font-black text-lg transition-all duration-500 group-hover:scale-110",
                    isScrolled 
                      ? "bg-primary text-white shadow-xl" 
                      : "bg-glass-strong backdrop-blur-md text-white border border-white/30 shadow-glass"
                  )}
                  style={isScrolled ? { backgroundColor: '#1a1a1a', color: '#ffffff' } : undefined}
                  whileHover={{ 
                    boxShadow: isScrolled ? "0 0 30px rgba(0, 102, 204, 0.5)" : "0 0 30px rgba(255, 255, 255, 0.3)",
                    rotate: [0, -5, 5, 0]
                  }}
                  transition={{ duration: 0.3 }}
                >
                  BC
                </motion.div>
                <motion.div
                  className="flex flex-col"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className={cn(
                    'text-xl font-black tracking-tight transition-colors duration-300',
                    isScrolled ? 'text-primary' : 'text-white'
                  )}
                  style={isScrolled ? { color: '#1a1a1a' } : { color: '#ffffff' }}>
                    BC GROUP
                  </span>
                  <span className={cn(
                    'text-xs font-medium uppercase tracking-wider opacity-70',
                    isScrolled ? 'text-secondary' : 'text-white/70'
                  )}>
                    Service Partner
                  </span>
                </motion.div>
              </div>
            </MagneticElement>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navigation.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.items && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className={cn(
                      'px-4 py-3 text-sm font-bold uppercase tracking-wider rounded-xl transition-all duration-300 hover:bg-white/10 relative overflow-hidden group',
                      isScrolled 
                        ? 'text-primary-950 hover:text-secondary' 
                        : 'text-white hover:text-white'
                    )}
                  >
                    <span className="relative z-10">{item.label}</span>
                    <motion.div
                      className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100"
                      layoutId="navHover"
                      transition={{ duration: 0.2 }}
                    />
                  </Link>
                ) : (
                  <button
                    className={cn(
                      'flex items-center gap-2 px-4 py-3 text-sm font-bold uppercase tracking-wider rounded-xl transition-all duration-300 hover:bg-white/10 relative overflow-hidden group',
                      isScrolled 
                        ? 'text-primary-950 hover:text-secondary' 
                        : 'text-white hover:text-white'
                    )}
                  >
                    <span className="relative z-10">{item.label}</span>
                    <motion.div
                      animate={{ rotate: openDropdown === item.label ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>
                )}

                {/* Enhanced Dropdown Menu */}
                {item.items && (
                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: [0.77, 0, 0.175, 1] }}
                        className="absolute top-full left-0 mt-2 w-80 glass-strong shadow-2xl rounded-3xl overflow-hidden border border-white/20 backdrop-blur-2xl z-50"
                      >
                        <div className="p-3">
                          {item.items.map((subItem, index) => (
                            <motion.div
                              key={subItem.href}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                            >
                              <Link
                                href={subItem.href}
                                className={cn(
                                  "block p-4 rounded-2xl transition-all duration-200 group hover:bg-white/10 border border-transparent hover:border-white/20",
                                  isScrolled
                                    ? "text-primary-950 hover:text-secondary"
                                    : "text-white hover:text-white"
                                )}
                              >
                                <div className="font-semibold text-base mb-1 group-hover:translate-x-1 transition-transform">
                                  {subItem.label}
                                </div>
                                {subItem.description && (
                                  <div className={cn(
                                    "text-sm opacity-70",
                                    isScrolled ? "text-neutral-600" : "text-white/70"
                                  )}>
                                    {subItem.description}
                                  </div>
                                )}
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}

            {/* Enhanced Contact Info */}
            <div className="flex items-center gap-4 ml-6 pl-6 border-l border-white/20">
              <MagneticElement>
                <a
                  href="tel:+49301234567"
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-300 hover:bg-white/10",
                    isScrolled ? "text-primary-950 hover:text-secondary" : "text-white hover:text-white"
                  )}
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-semibold">Anrufen</span>
                </a>
              </MagneticElement>
            </div>

            {/* Enhanced CTA Button */}
            <Link href="/kontakt" className="ml-4">
              <MagneticElement>
                <motion.div
                  className="relative group overflow-hidden rounded-2xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="relative z-10 bg-gradient-accent text-white font-bold uppercase tracking-wider text-sm px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-glow-accent">
                    <span className="flex items-center gap-2">
                      Angebot
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.div>
                    </span>
                  </div>
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full rounded-2xl"
                    transition={{ duration: 0.6 }}
                  />
                </motion.div>
              </MagneticElement>
            </Link>
          </nav>

          {/* Enhanced Mobile Menu Button */}
          <MagneticElement>
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "lg:hidden p-4 rounded-2xl transition-all duration-300 relative overflow-hidden",
                isScrolled ? "hover:bg-neutral-100" : "hover:bg-white/10"
              )}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMobileMenuOpen ? 'close' : 'open'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMobileMenuOpen ? (
                    <X className={cn('w-6 h-6', isScrolled ? 'text-primary-950' : 'text-white')} />
                  ) : (
                    <Menu className={cn('w-6 h-6', isScrolled ? 'text-primary-950' : 'text-white')} />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </MagneticElement>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.77, 0, 0.175, 1] }}
            className="lg:hidden overflow-hidden"
          >
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              className="glass-strong backdrop-blur-3xl border-t border-white/10"
            >
              <nav className="px-6 py-8 space-y-2">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.href ? (
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-6 py-4 text-xl font-black text-primary-950 hover:text-secondary transition-colors rounded-2xl hover:bg-white/5"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <div>
                        <button
                          onClick={() => toggleDropdown(item.label)}
                          className="flex items-center justify-between w-full px-6 py-4 text-xl font-black text-primary-950 hover:text-secondary transition-colors rounded-2xl hover:bg-white/5"
                        >
                          {item.label}
                          <motion.div
                            animate={{ rotate: openDropdown === item.label ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="w-6 h-6" />
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {item.items && openDropdown === item.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="mt-2 ml-6 space-y-1">
                                {item.items.map((subItem, subIndex) => (
                                  <motion.div
                                    key={subItem.href}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: subIndex * 0.05 }}
                                  >
                                    <Link
                                      href={subItem.href}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className="block px-6 py-3 text-base font-semibold text-neutral-600 hover:text-secondary transition-colors rounded-xl hover:bg-white/5"
                                    >
                                      {subItem.label}
                                    </Link>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </motion.div>
                ))}

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="pt-6"
                >
                  <Link
                    href="/kontakt"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block"
                  >
                    <motion.div
                      className="bg-gradient-accent text-white text-center font-black uppercase tracking-wider text-base px-8 py-5 rounded-2xl shadow-2xl"
                      whileTap={{ scale: 0.95 }}
                    >
                      Angebot anfordern
                    </motion.div>
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
