'use client'

import { ReactNode, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface LayoutProps {
  children: ReactNode
}

interface RevealProps {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade'
  delay?: number
  duration?: number
  className?: string
  once?: boolean
  threshold?: number
}

interface PageTransitionProps {
  children: ReactNode
  className?: string
}

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'secondary' | 'accent' | 'white'
}

// Main Layout wrapper with smooth scrolling
export function Layout({ children }: LayoutProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen">
      {children}
    </div>
  )
}

// Loading screen component
function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary-950 via-secondary-900 to-primary-950"
    >
      <div className="text-center">
        <div className="mb-8">
          <LoadingSpinner size="lg" color="white" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold text-white">BC GROUP</h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-accent to-transparent" />
        </motion.div>
      </div>
    </motion.div>
  )
}

// Modern loading spinner
export function LoadingSpinner({ size = 'md', color = 'primary' }: LoadingSpinnerProps) {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8', 
    lg: 'w-12 h-12'
  }

  const colors = {
    primary: 'text-primary-950',
    secondary: 'text-secondary',
    accent: 'text-accent',
    white: 'text-white'
  }

  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      className={`${sizes[size]} ${colors[color]}`}
    >
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="60 40"
          className="opacity-25"
        />
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="15 85"
          className="opacity-75"
        />
      </svg>
    </motion.div>
  )
}

// Page transition wrapper
export function PageTransition({ children, className }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ 
        duration: 0.5, 
        ease: [0.77, 0, 0.175, 1] // Custom easing
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Scroll reveal component with intersection observer
export function ScrollReveal({ 
  children, 
  direction = 'up',
  delay = 0,
  duration = 0.8,
  className,
  once = true,
  threshold = 0.1
}: RevealProps) {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: once,
  })

  const variants = {
    up: {
      hidden: { opacity: 0, y: 60 },
      visible: { opacity: 1, y: 0 }
    },
    down: {
      hidden: { opacity: 0, y: -60 },
      visible: { opacity: 1, y: 0 }
    },
    left: {
      hidden: { opacity: 0, x: -60 },
      visible: { opacity: 1, x: 0 }
    },
    right: {
      hidden: { opacity: 0, x: 60 },
      visible: { opacity: 1, x: 0 }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 }
    },
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants[direction]}
      transition={{
        duration,
        delay,
        ease: [0.77, 0, 0.175, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Stagger children animation
export function StaggerContainer({ 
  children, 
  delay = 0.1,
  className 
}: { 
  children: ReactNode
  delay?: number
  className?: string 
}) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: delay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Individual stagger item
export function StaggerItem({ 
  children, 
  className 
}: { 
  children: ReactNode
  className?: string 
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{
        duration: 0.6,
        ease: [0.77, 0, 0.175, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Parallax wrapper
export function ParallaxWrapper({ 
  children, 
  speed = 0.5,
  className 
}: { 
  children: ReactNode
  speed?: number
  className?: string 
}) {
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      style={{ y: offsetY * speed }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Magnetic interaction component
export function MagneticElement({ 
  children, 
  strength = 0.3,
  className 
}: { 
  children: ReactNode
  strength?: number
  className?: string 
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Floating animation wrapper
export function FloatingElement({ 
  children, 
  duration = 6,
  className 
}: { 
  children: ReactNode
  duration?: number
  className?: string 
}) {
  return (
    <motion.div
      animate={{
        y: [-10, 10, -10],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default Layout