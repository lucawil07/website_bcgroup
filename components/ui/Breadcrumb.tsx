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
}

export default function Breadcrumb({ items, accentColor = '#10b981' }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <motion.ol 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center gap-2 text-sm"
      >
        {/* Home */}
        <li>
          <Link 
            href="/" 
            className="flex items-center gap-1.5 text-neutral-600 hover:text-neutral-900 transition-colors group"
          >
            <Home className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="sr-only">Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li key={index} className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-neutral-400" />
              {item.href && !isLast ? (
                <Link 
                  href={item.href}
                  className="text-neutral-600 hover:text-neutral-900 transition-colors font-medium"
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
