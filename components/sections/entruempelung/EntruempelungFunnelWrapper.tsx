'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import FunnelModal from '@/components/ui/FunnelModal'
import EntruempelungFunnelForm from '@/components/forms/EntruempelungFunnelForm'

interface FunnelContextType {
  isFunnelOpen: boolean
  openFunnel: () => void
  closeFunnel: () => void
}

const FunnelContext = createContext<FunnelContextType | undefined>(undefined)

export function useFunnelModal() {
  const context = useContext(FunnelContext)
  if (!context) {
    throw new Error('useFunnelModal must be used within EntruempelungFunnelWrapper')
  }
  return context
}

interface EntruempelungFunnelWrapperProps {
  children: React.ReactNode
}

export default function EntruempelungFunnelWrapper({ children }: EntruempelungFunnelWrapperProps) {
  const [isFunnelOpen, setIsFunnelOpen] = useState(false)

  const value: FunnelContextType = {
    isFunnelOpen,
    openFunnel: () => setIsFunnelOpen(true),
    closeFunnel: () => setIsFunnelOpen(false),
  }

  return (
    <FunnelContext.Provider value={value}>
      {children}

      {/* Funnel Modal */}
      <FunnelModal isOpen={isFunnelOpen} onClose={() => setIsFunnelOpen(false)}>
        <EntruempelungFunnelForm onClose={() => setIsFunnelOpen(false)} />
      </FunnelModal>
    </FunnelContext.Provider>
  )
}
