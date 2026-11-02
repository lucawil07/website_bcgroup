// Single source of truth for the service tree. Used by the /services hub page
// so every sub-service page gets a crawlable internal link.

export interface ServiceCategory {
  slug: string
  name: string
  children: { slug: string; name: string }[]
}

export const serviceCatalog: ServiceCategory[] = [
  {
    slug: 'entruempelung',
    name: 'Entrümpelung',
    children: [
      { slug: 'wohnungsaufloesung', name: 'Wohnungsauflösung' },
      { slug: 'kellerbereiche', name: 'Kellerentrümpelung' },
      { slug: 'baustellen', name: 'Baustellenräumung' },
      { slug: 'nachlassverwaltung', name: 'Nachlass-Entrümpelung' },
      { slug: 'gewerbliche-raeumung', name: 'Gewerbliche Räumung' },
      { slug: 'express-service', name: 'Express-Entrümpelung' },
    ],
  },
  {
    slug: 'abriss',
    name: 'Abriss',
    children: [
      { slug: 'gebaeudeabriss', name: 'Gebäudeabriss' },
      { slug: 'selektive-demontage', name: 'Selektive Demontage' },
      { slug: 'recycling-entsorgung', name: 'Recycling & Entsorgung' },
      { slug: 'genehmigungen', name: 'Abrissgenehmigungen' },
    ],
  },
  {
    slug: 'reinigung',
    name: 'Reinigung',
    children: [
      { slug: 'bueroreinigung', name: 'Büroreinigung' },
      { slug: 'unterhaltsreinigung', name: 'Unterhaltsreinigung' },
      { slug: 'grundreinigung', name: 'Grundreinigung' },
      { slug: 'baureinigung', name: 'Baureinigung' },
      { slug: 'gebaeudereinigung', name: 'Fassaden- & Fensterreinigung' },
      { slug: 'treppenhausreinigung', name: 'Treppenhausreinigung' },
      { slug: 'wohnungsreinigung', name: 'Wohnungsreinigung' },
      { slug: 'praxisreinigung', name: 'Praxisreinigung' },
      { slug: 'hotelreinigung', name: 'Hotelreinigung' },
      { slug: 'kinoreinigung', name: 'Kinoreinigung' },
      { slug: 'muelltonnenreinigung', name: 'Mülltonnenreinigung' },
      { slug: 'spezialreinigung', name: 'Spezialreinigung' },
    ],
  },
  {
    slug: 'hausmeisterservice',
    name: 'Hausmeisterservice',
    children: [
      { slug: 'allgemeine-taetigkeiten', name: 'Allgemeine Hausmeistertätigkeiten' },
      { slug: 'gartenpflege', name: 'Gartenpflege' },
      { slug: 'winterdienst', name: 'Winterdienst' },
      { slug: 'objektmanagement', name: 'Objektmanagement' },
      { slug: 'reinigung-pflege', name: 'Reinigung & Pflege' },
      { slug: 'zusatzleistungen', name: 'Zusatzleistungen' },
    ],
  },
  {
    slug: 'umzug',
    name: 'Umzug',
    children: [
      { slug: 'privatumzug', name: 'Privatumzug' },
      { slug: 'firmenumzug', name: 'Firmenumzug' },
      { slug: 'seniorenumzug', name: 'Seniorenumzug' },
      { slug: 'langstreckenumzug', name: 'Fernumzug' },
      { slug: 'lagerloesung', name: 'Möbeleinlagerung' },
      { slug: 'spezialitems', name: 'Klavier- & Kunsttransport' },
    ],
  },
  {
    slug: 'kurierdienst',
    name: 'Kurierdienst',
    children: [
      { slug: 'dokumenten-aktenservice', name: 'Dokumenten- & Aktenkurier' },
      { slug: 'geschaeftskunden-logistik', name: 'Geschäftskunden-Logistik' },
      { slug: 'regelmaessige-lieferungen', name: 'Regelmäßige Kurierfahrten' },
    ],
  },
]
