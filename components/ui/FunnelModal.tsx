'use client'

import { useEffect } from 'react'
import { X } from 'lucide-react'

interface FunnelModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export default function FunnelModal({ isOpen, onClose, children }: FunnelModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-lg animate-fade-in"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative h-full flex items-start justify-center p-4 md:p-8 overflow-y-auto">
        <div className="relative w-full max-w-6xl bg-white rounded-3xl shadow-2xl animate-slide-in-up my-8">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition-all hover:scale-110 group"
            aria-label="Schließen"
          >
            <X className="w-6 h-6 text-neutral-600 group-hover:text-primary" />
          </button>

          {/* Header */}
          <div className="px-6 md:px-12 pt-8 pb-6 border-b border-neutral-200">
            <div className="text-center space-y-2">
              <div className="inline-block bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-2">
                Kostenlos & Unverbindlich
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-primary">
                Jetzt Angebot anfordern
              </h2>
              <p className="text-neutral-600">
                In nur 8 Schritten zu Ihrem persönlichen Festpreis-Angebot
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 md:px-12 py-8">
            {children}
          </div>

          {/* Footer */}
          <div className="px-6 md:px-12 py-6 bg-neutral-50 rounded-b-3xl border-t border-neutral-200">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">100% kostenlos</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Sichere Übertragung</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Antwort in 2h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
