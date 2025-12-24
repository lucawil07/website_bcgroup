import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bcgroup.berlin'
  const currentDate = new Date()

  // Static pages
  const routes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/ueber-uns`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/impressum`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/datenschutz`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/karriere`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  // Main Service pages
  const services = [
    'entruempelung',
    'abriss',
    'reinigung',
    'hausmeisterservice',
    'umzug',
    'kurierdienst',
  ]

  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // Sub-service pages
  const subServices = {
    abriss: [
      'gebaeudeabriss',
      'selektive-demontage',
      'recycling-entsorgung',
      'genehmigungen',
    ],
    entruempelung: [
      'wohnungsaufloesung',
      'kellerbereiche',
      'baustellen',
      'nachlassverwaltung',
      'gewerbliche-raeumung',
      'express-service',
    ],
    hausmeisterservice: [
      'allgemeine-taetigkeiten',
      'gartenpflege',
      'objektmanagement',
      'reinigung-pflege',
      'winterdienst',
      'zusatzleistungen',
    ],
    kurierdienst: [
      'dokumenten-aktenservice',
      'geschaeftskunden-logistik',
      'regelmaessige-lieferungen',
    ],
    reinigung: [
      'baureinigung',
      'bueroreinigung',
      'gebaeudereinigung',
      'grundreinigung',
      'hotelreinigung',
      'kinoreinigung',
      'muelltonnenreinigung',
      'praxisreinigung',
      'spezialreinigung',
      'treppenhausreinigung',
      'unterhaltsreinigung',
      'wohnungsreinigung',
    ],
    umzug: [
      'firmenumzug',
      'lagerloesung',
      'langstreckenumzug',
      'privatumzug',
      'seniorenumzug',
      'spezialitems',
    ],
  }

  const subServiceRoutes = Object.entries(subServices).flatMap(([parent, children]) =>
    children.map((child) => ({
      url: `${baseUrl}/services/${parent}/${child}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))
  )

  // Blog pages (Ratgeber)
  // Note: Ideally this should be dynamic based on actual files or CMS data
  const blogRoutes = [
    {
      url: `${baseUrl}/ratgeber`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ratgeber/entruempelung-richtig-planen`,
      lastModified: new Date('2024-09-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ratgeber/bueroreinigung-tipps`,
      lastModified: new Date('2024-09-08'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ratgeber/umzug-checkliste`,
      lastModified: new Date('2024-09-01'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ratgeber/abriss-genehmigung`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ratgeber/grundreinigung-wohnung`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ratgeber/hausmeisterservice-aufgaben`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ratgeber/kurierdienst-berlin`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    // Entrümpelung Ratgeber Pages
    {
      url: `${baseUrl}/ratgeber/entruempelung`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ratgeber/entruempelung/gewerbliche-raeumung-berlin`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ratgeber/entruempelung/bauschuttentsorgung-berlin`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ratgeber/entruempelung/express-entruempelung-berlin`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ratgeber/entruempelung/kellerentruempelung-berlin`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ratgeber/entruempelung/kosten-wohnungsaufloesung-berlin`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ratgeber/entruempelung/messie-wohnung-entruempeln-berlin`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ratgeber/entruempelung/wohnungsaufloesung-berlin`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ratgeber/entruempelung/haushaltsaufloesung-nach-todesfall`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  return [...routes, ...serviceRoutes, ...subServiceRoutes, ...blogRoutes]
}
