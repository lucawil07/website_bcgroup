import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Über uns - BC Group Berlin | Professionelle Services',
  description: 'Lernen Sie BC Group kennen: Ihr direkter Ansprechpartner für digitale Komplettlösungen in Berlin. Über 300 zufriedene Kunden.',
  keywords: 'BC Group Berlin, über uns, professionelle services, entrümpelung berlin, reinigung berlin, hausmeisterservice, kurierdienst',
  openGraph: {
    title: 'BC Group Berlin - Professionelle Services',
    description: 'Dein direkter Ansprechpartner für digitale Komplettlösungen mit persönlichem Service',
    type: 'website',
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
