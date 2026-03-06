'use client'

import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { motion } from 'framer-motion'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  accentColor?: string
  /** 'overlay' for dark hero sections (absolute positioned), 'inline' for normal flow on light pages */
  variant?: 'overlay' | 'inline'
}

export default function Breadcrumb({ items, accentColor = '#10b981', variant = 'overlay' }: BreadcrumbProps) {
  const isOverlay = variant === 'overlay'

  const navClass = isOverlay
    ? 'bg-neutral-950 px-4 sm:px-6 lg:px-8 py-2'
    : 'py-3 mb-4'

  const textMuted = isOverlay ? 'text-white/60' : 'text-neutral-400'
  const textHover = isOverlay ? 'hover:text-white' : 'hover:text-neutral-900'
  const chevronColor = isOverlay ? 'text-white/30' : 'text-neutral-300'

  return (
    <nav aria-label="Breadcrumb" className={navClass}>
      <motion.ol 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className={`flex flex-wrap items-center gap-2 text-xs sm:text-sm ${isOverlay ? 'max-w-7xl mx-auto' : ''}`}
      >
        {/* Home */}
        <li>
          <Link 
            href="/" 
            className={`flex items-center gap-1.5 ${textMuted} ${textHover} transition-colors group`}
          >
            <Home className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
            <span className="sr-only">Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li key={index} className="flex items-center gap-2">
              <ChevronRight className={`w-3.5 h-3.5 ${chevronColor}`} />
              {item.href && !isLast ? (
                <Link 
                  href={item.href}
                  className={`${textMuted} ${textHover} transition-colors font-medium`}
                >
                  {item.label}
                </Link>
              ) : (
                <span 
                  className="font-semibold"
                  style={{ color: isLast ? accentColor : 'inherit' }}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          )
        })}
      </motion.ol>
    </nav>
  )
}
