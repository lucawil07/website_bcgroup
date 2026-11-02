import type { Metadata } from 'next'

export const SITE_URL = 'https://www.bcgroup.berlin'
export const SITE_NAME = 'BC Group Berlin'
export const BUSINESS_ID = `${SITE_URL}/#business`
export const ORGANIZATION_ID = `${SITE_URL}/#organization`

export const DEFAULT_OG_IMAGE = {
  url: '/images/og-bcgroup.jpg',
  width: 1200,
  height: 630,
  alt: 'BC Group – Dienstleistungen in Berlin',
}

type OpenGraph = NonNullable<Metadata['openGraph']>
type Twitter = NonNullable<Metadata['twitter']>

/**
 * Completes a page's metadata with a self-referencing canonical and
 * page-specific Open Graph / Twitter tags. Without this, pages inherit the
 * root layout's og:url/og:title and every share preview shows the homepage.
 *
 * `path` is relative ("/services/umzug"); metadataBase makes it absolute.
 */
export function withSeo(path: string, meta: Metadata): Metadata {
  const title = typeof meta.title === 'string' ? meta.title : undefined
  const description = meta.description ?? undefined
  const og = (meta.openGraph ?? {}) as OpenGraph & { title?: string; description?: string }
  const tw = (meta.twitter ?? {}) as Twitter & { title?: string; description?: string }
  const images = og.images ?? [DEFAULT_OG_IMAGE]

  return {
    ...meta,
    alternates: { ...meta.alternates, canonical: path },
    openGraph: {
      siteName: SITE_NAME,
      locale: 'de_DE',
      type: 'website',
      ...og,
      title: og.title ?? title,
      description: og.description ?? description,
      url: path,
      images,
    } as OpenGraph,
    twitter: {
      card: 'summary_large_image',
      ...tw,
      title: tw.title ?? og.title ?? title,
      description: tw.description ?? og.description ?? description,
      images: tw.images ?? images,
    } as Twitter,
  }
}
