'use client'

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react'

interface MobileMenuContextType {
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen: (open: boolean) => void
}

const MobileMenuContext = createContext<MobileMenuContextType | undefined>(undefined)

/**
 * Provider for managing mobile menu state and body overflow
 * Prevents manual body.style manipulation in components
 * Ensures proper cleanup and accessibility
 */
export function MobileMenuProvider({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleSetMobileMenuOpen = useCallback((open: boolean) => {
    setIsMobileMenuOpen(open)
  }, [])

  useEffect(() => {
    const htmlElement = document.documentElement
    const bodyElement = document.body
    
    if (isMobileMenuOpen) {
      // Lock scroll when menu is open
      htmlElement.style.overflow = 'hidden'
      bodyElement.style.overflow = 'hidden'
      htmlElement.classList.add('mobile-menu-open')
    } else {
      // Restore scroll when menu is closed
      htmlElement.style.overflow = ''
      bodyElement.style.overflow = ''
      htmlElement.classList.remove('mobile-menu-open')
    }
    
    // Cleanup on unmount
    return () => {
      htmlElement.style.overflow = ''
      bodyElement.style.overflow = ''
      htmlElement.classList.remove('mobile-menu-open')
    }
  }, [isMobileMenuOpen])

  return (
    <MobileMenuContext.Provider value={{ isMobileMenuOpen, setIsMobileMenuOpen: handleSetMobileMenuOpen }}>
      {children}
    </MobileMenuContext.Provider>
  )
}

/**
 * Hook to access mobile menu state
 * Must be used within MobileMenuProvider
 */
export function useMobileMenu() {
  const context = useContext(MobileMenuContext)
  if (!context) {
    throw new Error('useMobileMenu must be used within MobileMenuProvider')
  }
  return context
}
