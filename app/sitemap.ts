import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bcgroup.de'
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
  ]

  // Service pages
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
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  // Abriss sub-service pages
  const abrissSubServices = [
    'gebaeudeabriss',
    'selektive-demontage',
    'recycling-entsorgung',
    'genehmigungen',
  ]

  const abrissSubServiceRoutes = abrissSubServices.map((subService) => ({
    url: `${baseUrl}/services/abriss/${subService}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Entrümpelung sub-service pages
  const entruempelungSubServices = [
    'wohnungsaufloesung',
    'kellerbereiche',
    'baustellen',
    'nachlassverwaltung',
    'gewerbliche-raeumung',
    'express-service',
  ]

  const entruempelungSubServiceRoutes = entruempelungSubServices.map((subService) => ({
    url: `${baseUrl}/services/entruempelung/${subService}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Blog pages
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
  ]

  return [...routes, ...serviceRoutes, ...abrissSubServiceRoutes, ...entruempelungSubServiceRoutes, ...blogRoutes]
}
