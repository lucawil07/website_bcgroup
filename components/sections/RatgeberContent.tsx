'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { StaggerContainer, StaggerItem } from '@/components/ui'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { getActiveCategoryClasses, getInactiveCategoryClasses, getArticleBadgeClasses } from '@/lib/ratgeber-colors'

interface BlogPost {
  title: string
  excerpt: string
  image: string
  date: string
  readTime: string
  slug: string
  category: string
  author: string
}

const blogPosts: BlogPost[] = [
  {
    title: 'Abriss-Genehmigung in Berlin: Was Sie wissen müssen',
    excerpt: 'Wann brauchen Sie eine Abrissgenehmigung in Berlin? Wie läuft das Verfahren ab, und welche Besonderheiten gelten bei Wohnraum, Milieuschutz und Denkmalschutz?',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop',
    date: '6. November 2025',
    readTime: '8 Min.',
    slug: 'abriss-genehmigung',
    category: 'Abriss',
    author: 'BC Group Team',
  },
  {
    title: 'Hausmeisterservice: Diese Aufgaben übernimmt ein professioneller Hausmeister',
    excerpt: 'Von der Grünpflege bis zum Winterdienst – erfahren Sie, welche Aufgaben ein professioneller Hausmeisterservice übernimmt und wie Sie davon profitieren können.',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=800&auto=format&fit=crop',
    date: '5. Oktober 2024',
    readTime: '7 Min.',
    slug: 'hausmeisterservice-aufgaben',
    category: 'Hausmeisterservice',
    author: 'BC Group Team',
  },
  {
    title: 'Kurierdienst Berlin – Vertragliche Kurierlösungen für Geschäftskunden',
    excerpt: 'BC Kurierdienst Berlin ist Ihr Partner für vertragliche Kurierdienste, regelmäßige Lieferungen & planbare Transporte. Professionell, zuverlässig & individuell für Geschäftskunden.',
    image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=800&auto=format&fit=crop',
    date: '16. November 2025',
    readTime: '8 Min.',
    slug: 'kurierdienst-berlin',
    category: 'Kurierdienst',
    author: 'BC Group Team',
  },
  {
    title: 'Grundreinigung Wohnung: Wann ist sie notwendig?',
    excerpt: 'Grundreinigung nach Auszug oder für Neubezug – erfahren Sie, was dazugehört, wie viel es kostet und worauf Sie achten sollten. Expertentipps vom BC Group Team.',
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=800&auto=format&fit=crop',
    date: '22. September 2024',
    readTime: '6 Min.',
    slug: 'grundreinigung-wohnung',
    category: 'Reinigung',
    author: 'BC Group Team',
  },
  {
    title: 'Entrümpelung richtig planen: Der ultimative Guide',
    excerpt: 'Von der Vorbereitung bis zur Entsorgung – alles, was Sie über eine professionelle Entrümpelung wissen müssen. Erfahren Sie, wie Sie Zeit und Kosten sparen.',
    image: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?q=80&w=800&auto=format&fit=crop',
    date: '15. September 2024',
    readTime: '5 Min.',
    slug: 'entruempelung-richtig-planen',
    category: 'Entrümpelung',
    author: 'BC Group Team',
  },
  {
    title: 'Büroreinigung: Darauf sollten Sie achten',
    excerpt: 'Ein sauberes Büro steigert die Produktivität und das Wohlbefinden Ihrer Mitarbeiter. Erfahren Sie, welche Reinigungsstandards wichtig sind und wie oft gereinigt werden sollte.',
    image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=800&auto=format&fit=crop',
    date: '8. September 2024',
    readTime: '4 Min.',
    slug: 'bueroreinigung-tipps',
    category: 'Reinigung',
    author: 'BC Group Team',
  },
  {
    title: 'Umzug planen: Checkliste für einen stressfreien Umzug',
    excerpt: 'Mit unserer Schritt-für-Schritt-Anleitung wird Ihr Umzug zum Kinderspiel. Jetzt Checkliste downloaden und nichts mehr vergessen!',
    image: 'https://images.unsplash.com/photo-1464082354059-27db6ce50048?q=80&w=800&auto=format&fit=crop',
    date: '1. September 2024',
    readTime: '6 Min.',
    slug: 'umzug-checkliste',
    category: 'Umzug',
    author: 'BC Group Team',
  },
]

const categories = ['Alle', 'Entrümpelung', 'Reinigung', 'Umzug', 'Hausmeisterservice', 'Abriss', 'Kurierdienst']

export default function RatgeberContent() {
  const [activeCategory, setActiveCategory] = useState('Alle')
  const [imageLoadingStates, setImageLoadingStates] = useState<Record<string, boolean>>({})

  const filteredPosts = activeCategory === 'Alle' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory)

  const handleImageLoad = (slug: string) => {
    setImageLoadingStates(prev => ({ ...prev, [slug]: true }))
  }

  return (
    <>
      {/* Category Filter - Mobile Responsive with Horizontal Scroll */}
      <div className="mb-12 md:mb-16">
        {/* Mobile: Horizontal Scrollable */}
        <div className="md:hidden relative">
          <div className="overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-2">
            <div className="flex gap-3 px-4 min-w-max">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 active:scale-95 snap-start whitespace-nowrap focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-secondary ${
                    category === activeCategory
                      ? getActiveCategoryClasses(category)
                      : getInactiveCategoryClasses()
                  }`}
                  aria-pressed={category === activeCategory}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          {/* Fade indicators */}
          <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-neutral-50 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-neutral-50 to-transparent pointer-events-none" />
        </div>
        
        {/* Desktop: Centered Flex Wrap */}
        <div className="hidden md:flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-bold text-base transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-secondary ${
                category === activeCategory
                  ? getActiveCategoryClasses(category)
                  : getInactiveCategoryClasses()
              }`}
              aria-pressed={category === activeCategory}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <StaggerContainer delay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {filteredPosts.map((post) => (
          <StaggerItem key={post.slug}>
            <Link 
              href={`/ratgeber/${post.slug}`} 
              className="group block"
              aria-label={`Artikel lesen: ${post.title}`}
            >
              <article className="card-modern h-full flex flex-col group-hover:scale-[1.02] transition-transform duration-300">
                <div className="relative overflow-hidden h-56 md:h-64">
                  {/* Skeleton loader */}
                  {!imageLoadingStates[post.slug] && (
                    <div className="absolute inset-0 bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 animate-pulse" style={{ backgroundSize: '200% 100%' }} />
                  )}
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className={`object-cover transition-all duration-700 group-hover:scale-110 ${
                      imageLoadingStates[post.slug] ? 'opacity-100' : 'opacity-0'
                    }`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onLoad={() => handleImageLoad(post.slug)}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  {/* Category badge */}
                  <div className="absolute top-3 left-3 md:top-4 md:left-4">
                    <span className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg ${getArticleBadgeClasses(post.category)}`}>
                      {post.category}
                    </span>
                  </div>

                  {/* Date badge */}
                  <div className="absolute top-3 right-3 md:top-4 md:right-4">
                    <div className="bg-black/40 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-xl border border-white/10">
                      <div className="flex items-center gap-2 text-white text-xs font-bold">
                        <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                        <span className="hidden sm:inline">{post.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-xs md:text-sm text-neutral-500 mb-3 md:mb-4">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-lg md:text-xl font-black text-neutral-900 mb-3 md:mb-4 leading-tight group-hover:text-secondary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-sm md:text-base text-neutral-700 leading-relaxed mb-4 md:mb-6 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-2 text-secondary font-bold text-xs md:text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                    <span>Weiterlesen</span>
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Stats */}
      <div className="text-center mt-12 md:mt-16">
        <div className="inline-flex items-center gap-2 text-white/80">
          <span className="text-sm md:text-base font-bold">{filteredPosts.length} Artikel</span>
          {activeCategory !== 'Alle' && (
            <>
              <span className="text-white/40">•</span>
              <span className="text-sm md:text-base">Kategorie: {activeCategory}</span>
            </>
          )}
        </div>
      </div>
    </>
  )
}
