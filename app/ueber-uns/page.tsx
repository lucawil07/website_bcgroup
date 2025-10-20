import type { Metadata } from 'next'
import AboutContent from './AboutContent'

export const metadata: Metadata = {
  title: 'Über uns | BC Group Berlin',
  description: 'Lernen Sie die BC Group kennen – Ihr zuverlässiger Servicepartner in Berlin seit über 10 Jahren. Qualität, Zuverlässigkeit und Innovation seit 2014.',
  keywords: 'Über BC Group, Unternehmen Berlin, Team, Geschichte, Dienstleistungen Berlin',
  openGraph: {
    title: 'Über uns | BC Group Berlin',
    description: 'Ihr zuverlässiger Partner für professionelle Dienstleistungen in Berlin seit über 10 Jahren.',
    type: 'website',
  },
}

export default function AboutPage() {
  return <AboutContent />
}
