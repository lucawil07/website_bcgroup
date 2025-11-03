'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MagneticElement } from '@/components/ui'
import { serviceColors, type ServiceType } from '@/lib/service-colors'
import { cn } from '@/lib/utils'

interface LogoProps {
  isScrolled?: boolean
  service?: ServiceType | null
  useDarkText?: boolean
}

export default function Logo({ isScrolled = false, service = null, useDarkText = false }: LogoProps) {
  const colors = service ? serviceColors[service] : serviceColors.entruempelung
  const brandName = service 
    ? `BC ${colors.german}`
    : 'BC GROUP'
  
  const badgeStyle = service
    ? { backgroundColor: colors.primary, color: colors.accent }
    : { backgroundColor: 'transparent', color: '#ffffff' }

  const textColor = isScrolled || useDarkText
    ? (service ? colors.primary : '#1a1a1a')
    : '#ffffff'

  return (
    <Link href="/" className="relative group">
      <MagneticElement>
        <motion.div 
          className="flex items-center"
          animate={{ gap: isScrolled ? '8px' : '12px' }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className={cn(
              "rounded-2xl flex items-center justify-center font-black transition-all duration-500 group-hover:scale-110 flex-shrink-0",
              isScrolled || useDarkText
                ? "shadow-xl" 
                : "bg-glass-strong backdrop-blur-md border border-white/30 shadow-glass"
            )}
            style={badgeStyle}
            animate={{
              width: isScrolled ? '40px' : '48px',
              height: isScrolled ? '40px' : '48px',
            }}
            whileHover={{ 
              boxShadow: isScrolled || useDarkText
                ? `0 0 30px ${colors.accent}80`
                : "0 0 30px rgba(255, 255, 255, 0.3)",
              rotate: [0, -5, 5, 0]
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.span
              animate={{
                fontSize: isScrolled ? '14px' : '18px',
              }}
              transition={{ duration: 0.3 }}
            >
              BC
            </motion.span>
          </motion.div>
          <motion.div
            className="flex flex-col overflow-hidden"
            animate={{
              opacity: isScrolled ? 0.9 : 1,
              maxWidth: isScrolled ? '0px' : '200px',
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.span 
              className="font-black tracking-tight transition-colors duration-300 whitespace-nowrap"
              animate={{
                fontSize: isScrolled ? '14px' : '20px',
                lineHeight: '1.2',
              }}
              style={{ color: textColor }}
              transition={{ duration: 0.3 }}
            >
              {brandName}
            </motion.span>
            {!service && (
              <motion.span 
                className={cn(
                  'font-medium uppercase tracking-wider whitespace-nowrap',
                  isScrolled || useDarkText ? 'text-secondary' : 'text-white/70'
                )}
                animate={{
                  fontSize: isScrolled ? '9px' : '11px',
                  opacity: isScrolled ? 0 : 0.7,
                  height: isScrolled ? '0px' : '16px',
                  marginTop: isScrolled ? '0px' : '4px',
                }}
                transition={{ duration: 0.3 }}
              >
                Service Partner
              </motion.span>
            )}
          </motion.div>
        </motion.div>
      </MagneticElement>
    </Link>
  )
}
