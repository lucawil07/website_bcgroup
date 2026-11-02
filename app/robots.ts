import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Search engines and AI crawlers (GPTBot, ClaudeBot, PerplexityBot, …)
        // all get the same access. /_next/ must stay crawlable so pages render.
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
