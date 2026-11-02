import fs from 'node:fs'
import path from 'node:path'
import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo'

// Routes that exist but are noindex (legal pages, form confirmation).
const EXCLUDED = new Set(['/agb', '/datenschutz', '/impressum', '/services/entruempelung/danke'])

// Walk app/ for page.tsx files so the sitemap can never drift from the real
// routes. Runs at build time (the sitemap is statically prerendered).
function collectRoutes(dir: string, route = ''): string[] {
  const routes: string[] = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      const name = entry.name
      if (name.startsWith('_') || name.startsWith('(') || name.startsWith('[') || name === 'api') continue
      routes.push(...collectRoutes(path.join(dir, name), `${route}/${name}`))
    } else if (entry.name === 'page.tsx') {
      routes.push(route || '/')
    }
  }
  return routes
}

function priorityFor(route: string): number {
  if (route === '/') return 1
  if (/^\/services\/[^/]+$/.test(route) || route === '/kontakt') return 0.9
  if (route.startsWith('/services/')) return 0.8
  if (route === '/services' || route === '/ratgeber') return 0.8
  return 0.7
}

export default function sitemap(): MetadataRoute.Sitemap {
  return collectRoutes(path.join(process.cwd(), 'app'))
    .filter((route) => !EXCLUDED.has(route))
    .sort()
    .map((route) => ({
      url: route === '/' ? SITE_URL : `${SITE_URL}${route}`,
      priority: priorityFor(route),
    }))
}
