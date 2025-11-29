'use client'

import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronDown, ChevronUp, Shield, Check, Cookie } from 'lucide-react'
import Button from './Button'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type CookieCategory = 'essential' | 'analytics' | 'marketing'

interface CookieSettings {
  essential: boolean
  analytics: boolean
  marketing: boolean
}

const defaultSettings: CookieSettings = {
  essential: true,
  analytics: false,
  marketing: false,
}

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [settings, setSettings] = useState<CookieSettings>(defaultSettings)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      // Small delay to not overwhelm user immediately
      const timer = setTimeout(() => setIsVisible(true), 1000)
      return () => clearTimeout(timer)
    } else {
      try {
        setSettings(JSON.parse(consent))
      } catch (e) {
        // If parsing fails, reset
        localStorage.removeItem('cookie-consent')
        setIsVisible(true)
      }
    }
  }, [])

  const saveConsent = (newSettings: CookieSettings) => {
    localStorage.setItem('cookie-consent', JSON.stringify(newSettings))
    setSettings(newSettings)
    setIsVisible(false)
    
    // Here you would trigger your analytics/marketing scripts based on the consent
    if (newSettings.analytics) {
      // Enable analytics
      console.log('Analytics cookies enabled')
    }
    if (newSettings.marketing) {
      // Enable marketing
      console.log('Marketing cookies enabled')
    }
  }

  const handleAcceptAll = () => {
    saveConsent({
      essential: true,
      analytics: true,
      marketing: true,
    })
  }

  const handleRejectAll = () => {
    saveConsent({
      essential: true,
      analytics: false,
      marketing: false,
    })
  }

  const handleSaveSettings = () => {
    saveConsent(settings)
  }

  const toggleCategory = (category: CookieCategory) => {
    if (category === 'essential') return
    setSettings((prev) => ({
      ...prev,
      [category]: !prev[category],
    }))
  }

  if (!mounted) return null

  return createPortal(
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
        >
          <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 dark:bg-slate-900 dark:ring-white/10">
            <div className="p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-8">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                  <Cookie className="h-6 w-6" />
                </div>
                
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      Wir respektieren Ihre Privatsphäre
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      Wir verwenden Cookies und ähnliche Technologien, um Ihre Erfahrung auf unserer Website zu verbessern, 
                      Inhalte zu personalisieren und unseren Datenverkehr zu analysieren. 
                      Durch Klicken auf "Alle akzeptieren" stimmen Sie der Verwendung aller Cookies zu. 
                      Sie können Ihre Einstellungen jederzeit ändern.
                      <br />
                      <Link href="/datenschutz" className="mt-1 inline-block text-blue-600 hover:underline dark:text-blue-400">
                        Datenschutzerklärung lesen
                      </Link>
                    </p>
                  </div>

                  {showDetails && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="space-y-4 border-t border-slate-200 pt-4 dark:border-slate-700"
                    >
                      <div className="grid gap-4 md:grid-cols-3">
                        {/* Essential */}
                        <div className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Shield className="h-4 w-4 text-green-600 dark:text-green-400" />
                              <span className="font-medium text-slate-900 dark:text-white">Essenziell</span>
                            </div>
                            <input
                              type="checkbox"
                              checked={true}
                              disabled
                              className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                            />
                          </div>
                          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                            Notwendig für die grundlegende Funktionalität der Website. Kann nicht deaktiviert werden.
                          </p>
                        </div>

                        {/* Analytics */}
                        <div 
                          className={cn(
                            "cursor-pointer rounded-lg border p-4 transition-colors",
                            settings.analytics 
                              ? "border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20" 
                              : "border-slate-200 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
                          )}
                          onClick={() => toggleCategory('analytics')}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-slate-900 dark:text-white">Analyse</span>
                            <div className={cn(
                              "flex h-5 w-5 items-center justify-center rounded border transition-colors",
                              settings.analytics
                                ? "border-blue-600 bg-blue-600 text-white"
                                : "border-slate-300 bg-white dark:border-slate-600 dark:bg-slate-800"
                            )}>
                              {settings.analytics && <Check className="h-3 w-3" />}
                            </div>
                          </div>
                          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                            Hilft uns zu verstehen, wie Besucher mit der Website interagieren.
                          </p>
                        </div>

                        {/* Marketing */}
                        <div 
                          className={cn(
                            "cursor-pointer rounded-lg border p-4 transition-colors",
                            settings.marketing 
                              ? "border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20" 
                              : "border-slate-200 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
                          )}
                          onClick={() => toggleCategory('marketing')}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-slate-900 dark:text-white">Marketing</span>
                            <div className={cn(
                              "flex h-5 w-5 items-center justify-center rounded border transition-colors",
                              settings.marketing
                                ? "border-blue-600 bg-blue-600 text-white"
                                : "border-slate-300 bg-white dark:border-slate-600 dark:bg-slate-800"
                            )}>
                              {settings.marketing && <Check className="h-3 w-3" />}
                            </div>
                          </div>
                          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                            Wird verwendet, um Werbung relevanter für Sie zu gestalten.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
                    <Button 
                      onClick={handleAcceptAll}
                      className="bg-blue-600 text-white hover:bg-blue-700"
                    >
                      Alle akzeptieren
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={handleRejectAll}
                      className="border-slate-200 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
                    >
                      Nur essenzielle
                    </Button>
                    <Button
                      variant="ghost"
                      onClick={() => setShowDetails(!showDetails)}
                      className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                    >
                      {showDetails ? (
                        <>
                          <ChevronUp className="mr-2 h-4 w-4" />
                          Weniger anzeigen
                        </>
                      ) : (
                        <>
                          <ChevronDown className="mr-2 h-4 w-4" />
                          Einstellungen
                        </>
                      )}
                    </Button>
                    {showDetails && (
                      <Button 
                        onClick={handleSaveSettings}
                        className="ml-auto bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                      >
                        Auswahl speichern
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}
