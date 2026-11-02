import { Metadata } from 'next'
import { withSeo } from '@/lib/seo'

export const metadata: Metadata = withSeo('/ueber-uns', {
  title: 'Über uns',
  description: 'Lernen Sie BC Group kennen: Ihr direkter Ansprechpartner für digitale Komplettlösungen in Berlin. Über 300 zufriedene Kunden.',
  keywords: 'BC Group Berlin, über uns, professionelle services, entrümpelung berlin, reinigung berlin, hausmeisterservice, kurierdienst',
  alternates: {
    canonical: 'https://www.bcgroup.berlin/ueber-uns',
  },
  openGraph: {
    title: 'BC Group Berlin - Professionelle Services',
    description: 'Dein direkter Ansprechpartner für digitale Komplettlösungen mit persönlichem Service',
    type: 'website',
  },
})

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
