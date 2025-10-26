import Link from 'next/link'
import { Button } from '@/components/ui'
import { ArrowRight, FileText } from 'lucide-react'

export function FunnelCTAButton() {
  return (
    <Link href="/services/entruempelung/anfrage">
      <Button
        variant="primary"
        size="lg"
        className="group text-lg px-8 py-6 shadow-2xl hover:shadow-accent/50"
        icon={<FileText className="w-6 h-6" />}
        iconPosition="left"
      >
        Jetzt unverbindlich anfragen
      </Button>
    </Link>
  )
}

export function FunnelCTASecondary() {
  return (
    <Link 
      href="/services/entruempelung/anfrage"
      className="text-secondary hover:text-secondary-700 font-bold underline transition-colors"
    >
      Online-Formular ausfüllen
    </Link>
  )
}
