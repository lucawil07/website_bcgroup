'use client'

import { useState, useEffect, useCallback, useRef, useMemo } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import { MagneticElement, Logo } from '@/components/ui'
import { getServiceFromRoute } from '@/lib/service-colors'
import {
  getNavTextClass,
  getDescriptionClass,
  getIconClass,
  navItemClasses,
  isDarkBackgroundPage,
  isLightBackgroundPage,
  shouldUseDarkText,
  DARK_BACKGROUND_PAGES,
} from '@/lib/nav-styles'
import { useMobileMenu } from '@/contexts/MobileMenuContext'

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
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up')
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useMobileMenu()
  const pathname = usePathname()
  const currentService = getServiceFromRoute(pathname)
  const lastScrollYRef = useRef(0) // Use ref instead of state to avoid re-renders

  /**
   * Memoized check for dark background pages
   * Only recalculates when pathname changes
   */
  const hasDarkBackground = useMemo(() => {
    return isDarkBackgroundPage(pathname)
  }, [pathname])

  /**
   * Memoized check for light background pages
   * Only recalculates when pathname changes
   */
  const hasLightBackground = useMemo(() => {
    return isLightBackgroundPage(pathname)
  }, [pathname])

  /**
   * Memoized dark text flag
   * Only recalculates when dependencies change
   */
  const useDarkText = useMemo(() => {
    return shouldUseDarkText(isScrolled, hasDarkBackground, hasLightBackground)
  }, [isScrolled, hasDarkBackground, hasLightBackground])

  /**
   * Optimized scroll handler using useCallback
   * Prevents memory leaks and excessive re-renders
   * Uses ref for lastScrollY to avoid triggering effect cleanup
   */
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY

    // Only update state if threshold crossed (reduces re-renders)
    setIsScrolled(currentScrollY > 20)

    // Update scroll direction only on significant changes
    if (currentScrollY > lastScrollYRef.current && currentScrollY > 100) {
      setScrollDirection('down')
    } else if (currentScrollY < lastScrollYRef.current) {
      setScrollDirection('up')
    }

    lastScrollYRef.current = currentScrollY
  }, [])

  /**
   * Single scroll event listener with proper cleanup
   * useCallback ensures handler reference stays the same
   */
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  /**
   * Close mobile menu when route changes
   */
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname, setIsMobileMenuOpen])

  const toggleDropdown = useCallback((label: string) => {
    setOpenDropdown((current) => (current === label ? null : label))
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{
        y: scrollDirection === 'down' && isScrolled ? -100 : 0,
        opacity: scrollDirection === 'down' && isScrolled ? 0 : 1,
      }}
      transition={{ duration: 0.3, ease: [0.77, 0, 0.175, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? useDarkText
            ? 'bg-white/95 shadow-2xl backdrop-blur-xl border-b border-neutral-200'
            : 'glass-strong shadow-2xl backdrop-blur-3xl border-b border-white/10'
          : 'bg-transparent'
      )}
      style={{
        willChange: 'transform, opacity',
        transform: 'translate3d(0, 0, 0)', // Enable GPU acceleration
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Always visible */}
          <Logo isScrolled={true} service={currentService} useDarkText={true} />

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
                    prefetch={true}
                    className={cn(navItemClasses.link, getNavTextClass(isScrolled, useDarkText))}
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
                    className={cn(navItemClasses.toggle, getNavTextClass(isScrolled, useDarkText))}
                    aria-expanded={openDropdown === item.label}
                    aria-label={`${item.label} menu`}
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

                {/* Dropdown Menu */}
                {item.items && (
                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.25, ease: [0.77, 0, 0.175, 1] }}
                        className="absolute top-full left-0 mt-2 w-80 glass-dropdown rounded-3xl overflow-hidden z-50"
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
                                prefetch={true}
                                className={cn(
                                  navItemClasses.dropdownItem,
                                  getNavTextClass(isScrolled, useDarkText)
                                )}
                              >
                                <div className="font-semibold text-base mb-1 group-hover:translate-x-1 transition-transform">
                                  {subItem.label}
                                </div>
                                {subItem.description && (
                                  <div className={cn('text-sm opacity-70', getDescriptionClass(isScrolled, useDarkText))}>
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

            {/* Contact Info */}
            <div className="flex items-center gap-4 ml-6 pl-6 border-l border-white/20">
              <MagneticElement>
                <a
                  href="tel:+49301234567"
                  className={cn(navItemClasses.contactLink, getIconClass(isScrolled, useDarkText))}
                  aria-label="Anrufen"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-semibold">Anrufen</span>
                </a>
              </MagneticElement>
            </div>

            {/* CTA Button */}
            <Link href="/kontakt" className="ml-4" prefetch={true}>
              <MagneticElement>
                <motion.div
                  className={navItemClasses.ctaButton}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                >
                  <div className="relative z-10 bg-gradient-accent text-white font-black uppercase tracking-widest text-sm px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 border border-white/20">
                    <span className="flex items-center gap-2">
                      Angebot
                      <motion.div
                        animate={{ x: [0, 6, 0] }}
                        transition={{ duration: 1.2, repeat: Infinity }}
                        style={{ willChange: 'transform' }}
                      >
                        →
                      </motion.div>
                    </span>
                  </div>
                  {/* Enhanced glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-400/40 to-blue-500/0 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg"
                    transition={{ duration: 0.3 }}
                    style={{ pointerEvents: 'none' }}
                  />
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full rounded-2xl"
                    transition={{ duration: 0.8 }}
                    style={{ pointerEvents: 'none' }}
                  />
                  {/* Pulse border effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-blue-400"
                    animate={{ opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{ pointerEvents: 'none' }}
                  />
                </motion.div>
              </MagneticElement>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <MagneticElement>
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                'lg:hidden p-4 rounded-2xl transition-all duration-300 relative overflow-hidden',
                isScrolled || useDarkText ? 'hover:bg-neutral-100' : 'hover:bg-white/10'
              )}
              whileTap={{ scale: 0.9 }}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
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
                    <X className={cn('w-6 h-6', getIconClass(isScrolled, useDarkText))} />
                  ) : (
                    <Menu className={cn('w-6 h-6', getIconClass(isScrolled, useDarkText))} />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </MagneticElement>
        </div>
      </div>

      {/* Mobile Menu */}
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
              className={cn(
                'backdrop-blur-3xl border-t transition-colors duration-300',
                'bg-gradient-to-b from-neutral-950 to-neutral-900 border-secondary/40'
              )}
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
                        prefetch={true}
                        className={cn(
                          navItemClasses.mobileItem,
                          'text-white hover:text-secondary font-bold border-l-4 border-transparent hover:border-secondary hover:bg-secondary/20 px-4 py-3 rounded transition-all'
                        )}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <div>
                        <button
                          onClick={() => toggleDropdown(item.label)}
                          className={cn(
                            navItemClasses.mobileToggle,
                            'text-white hover:text-secondary font-bold border-l-4 border-transparent hover:border-secondary hover:bg-secondary/20 px-4 py-3 rounded transition-all'
                          )}
                          aria-expanded={openDropdown === item.label}
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
                              <div className="mt-2 ml-6 space-y-1 border-l-2 border-secondary/40">
                                {item.items.map((subItem, subIndex) => (
                                  <motion.div
                                    key={subItem.href}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: subIndex * 0.05 }}
                                  >
                                    <Link
                                      href={subItem.href}
                                      prefetch={true}
                                      className={cn(
                                        navItemClasses.mobileSubItem,
                                        'text-white/90 hover:text-secondary font-semibold hover:bg-secondary/20 px-4 py-2 rounded transition-all'
                                      )}
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
                  className="pt-6 border-t border-secondary/40"
                >
                  <Link href="/kontakt" prefetch={true} className="block">
                    <motion.div
                      className="bg-gradient-to-r from-secondary to-blue-600 text-white text-center font-black uppercase tracking-wider text-base px-8 py-5 rounded-2xl shadow-2xl hover:shadow-secondary/50 border-2 border-secondary/40"
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
