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
      { label: 'Karriere', href: '/karriere', description: 'Offene Stellen und werden Sie Teil unseres Teams' },
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
  { label: 'Kontakt', href: '/kontakt' },
]

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useMobileMenu()
  const pathname = usePathname()
  const currentService = getServiceFromRoute(pathname)

  /**
   * Memoized check for light background pages
   * Only recalculates when pathname changes
   */
  const hasLightBackground = useMemo(() => {
    return isLightBackgroundPage(pathname)
  }, [pathname])

  /**
   * Memoized dark text flag based on page background
   */
  const useDarkText = useMemo(() => {
    return hasLightBackground
  }, [hasLightBackground])

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
    <header
      className={cn(
        'sticky top-0 w-full z-50 transition-all duration-300',
        useDarkText
          ? 'bg-white/95 shadow-md backdrop-blur-md border-b border-neutral-200/50'
          : 'bg-neutral-900/92 backdrop-blur-md border-b border-white/5 shadow-lg'
      )}
    >
      <div className="relative z-50 max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <Logo isScrolled={false} service={currentService} useDarkText={useDarkText} />

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
                    className={cn(navItemClasses.link, getNavTextClass(false, useDarkText))}
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
                    className={cn(navItemClasses.toggle, getNavTextClass(false, useDarkText))}
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
                        className={cn(
                          'absolute top-full left-0 mt-2 w-80 rounded-3xl overflow-hidden z-50',
                          useDarkText
                            ? 'bg-white/98 backdrop-blur-xl border border-neutral-200 shadow-2xl'
                            : 'bg-neutral-900/95 backdrop-blur-xl border border-white/20 shadow-2xl'
                        )}
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
                                  useDarkText 
                                    ? 'text-neutral-900 hover:text-secondary hover:bg-secondary/5'
                                    : 'text-white hover:text-secondary hover:bg-white/5'
                                )}
                              >
                                <div className="font-semibold text-base mb-1 group-hover:translate-x-1 transition-transform">
                                  {subItem.label}
                                </div>
                                {subItem.description && (
                                  <div className={cn(
                                    'text-sm',
                                    useDarkText ? 'text-neutral-600' : 'text-white/80'
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

            {/* Contact Info */}
            <div className="flex items-center gap-4 ml-6 pl-6 border-l border-white/20">
              <MagneticElement>
                <Link
                  href="tel:+4917663213253"
                  className={cn(
                    "hidden lg:inline-flex items-center gap-2",
                    useDarkText ? "text-neutral-800 hover:text-secondary" : "text-white hover:text-secondary"
                  )}
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-semibold">Anrufen</span>
                </Link>
              </MagneticElement>
            </div>

            {/* CTA Button */}
            <Link href="/kontakt" className="ml-4" prefetch={true}>
              <MagneticElement>
                <motion.button
                  className="px-6 py-3 text-sm font-bold uppercase tracking-wider rounded-xl transition-all duration-300 border-2 bg-secondary text-white border-secondary hover:bg-secondary/90 hover:shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Angebot
                </motion.button>
              </MagneticElement>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Mobile CTA Icon - Phone */}
            <MagneticElement>
              <motion.a
                href="tel:+4917663213253"
                className={cn(
                  'p-2 transition-all duration-300',
                  useDarkText ? 'text-secondary' : 'text-white'
                )}
                whileTap={{ scale: 0.9 }}
                aria-label="Anrufen"
              >
                <Phone className="w-6 h-6" />
              </motion.a>
            </MagneticElement>

            <MagneticElement>
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(
                  'p-4 rounded-2xl transition-all duration-300 relative overflow-hidden',
                  useDarkText ? 'hover:bg-neutral-100' : 'hover:bg-white/10'
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
                      <X className={cn('w-6 h-6', getIconClass(false, useDarkText))} />
                    ) : (
                      <Menu className={cn('w-6 h-6', getIconClass(false, useDarkText))} />
                    )}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            </MagneticElement>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.77, 0, 0.175, 1] }}
            className={cn(
              'fixed inset-0 z-40 h-screen w-full pt-24 pb-10 overflow-y-auto transition-colors duration-300 lg:hidden',
              useDarkText
                ? 'bg-white border-neutral-200'
                : 'bg-neutral-900 border-white/10'
            )}
          >
            <nav className="px-6 space-y-2">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      prefetch={true}
                      className={cn(
                        'block px-6 py-5 text-xl font-bold rounded-2xl transition-all duration-200',
                        useDarkText 
                          ? 'text-neutral-900 hover:bg-neutral-100 active:bg-neutral-200' 
                          : 'text-white hover:bg-white/10 active:bg-white/20'
                      )}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <div className="rounded-2xl overflow-hidden">
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className={cn(
                          'flex items-center justify-between w-full px-6 py-5 text-xl font-bold transition-all duration-200',
                          useDarkText 
                            ? 'text-neutral-900 hover:bg-neutral-100 active:bg-neutral-200' 
                            : 'text-white hover:bg-white/10 active:bg-white/20',
                          openDropdown === item.label && (useDarkText ? 'bg-neutral-50' : 'bg-white/5')
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
                            className={cn(
                              'overflow-hidden',
                              useDarkText ? 'bg-neutral-50' : 'bg-white/5'
                            )}
                          >
                            <div className="px-4 pb-4 pt-2 space-y-1">
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
                                      'block px-4 py-4 text-base font-medium rounded-xl transition-all duration-200',
                                      useDarkText 
                                        ? 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/50' 
                                        : 'text-white/70 hover:text-white hover:bg-white/10'
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
                transition={{ delay: 0.3 }}
                className="pt-8 px-2"
              >
                <Link href="/kontakt" prefetch={true} className="block">
                  <motion.div
                    className="bg-secondary text-white text-center font-bold uppercase tracking-wider text-lg px-8 py-5 rounded-2xl shadow-lg active:scale-95 transition-all duration-200"
                  >
                    <span className="flex items-center justify-center gap-3">
                      Angebot anfordern
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.2, repeat: Infinity }}
                      >
                        →
                      </motion.div>
                    </span>
                  </motion.div>
                </Link>
                
                <div className="mt-6 flex justify-center">
                   <a
                    href="tel:+4917663213253"
                    className={cn(
                      "flex items-center gap-3 px-6 py-3 rounded-xl transition-colors",
                      useDarkText ? "text-neutral-600 hover:bg-neutral-100" : "text-white/80 hover:bg-white/10"
                    )}
                   >
                     <Phone className="w-5 h-5" />
                     <span className="font-semibold">0176 6321 3253</span>
                   </a>
                </div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
