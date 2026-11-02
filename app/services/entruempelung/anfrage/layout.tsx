import type { Metadata } from 'next'
import { withSeo } from '@/lib/seo'

export const metadata: Metadata = withSeo('/services/entruempelung/anfrage', {
  title: 'Entrümpelung online anfragen – Berlin',
  description:
    'Fordern Sie Ihr Entrümpelungs-Angebot für Berlin online an: Objekt, Umfang und Wunschtermin angeben und ein unverbindliches Angebot erhalten.',
})

export default function AnfrageLayout({ children }: { children: React.ReactNode }) {
  return children
}
