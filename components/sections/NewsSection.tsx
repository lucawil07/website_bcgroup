import Link from 'next/link'
import Image from 'next/image'
import { Section, Container, Button, ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

interface BlogPost {
  title: string
  excerpt: string
  image: string
  date: string
  readTime: string
  slug: string
  category: string
}

const featuredPosts: BlogPost[] = [
  {
    title: 'Entrümpelung richtig planen: Der ultimative Guide',
    excerpt: 'Von der Vorbereitung bis zur Entsorgung – alles, was Sie über eine professionelle Entrümpelung wissen müssen.',
    image: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?q=80&w=800&auto=format&fit=crop',
    date: '23. März 2025',
    readTime: '5 Min.',
    slug: 'entruempelung-richtig-planen',
    category: 'Entrümpelung',
  },
  {
    title: 'Büroreinigung: Darauf sollten Sie achten',
    excerpt: 'Ein sauberes Büro steigert die Produktivität. Erfahren Sie, welche Reinigungsstandards wichtig sind.',
    image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=800&auto=format&fit=crop',
    date: '17. Juli 2025',
    readTime: '4 Min.',
    slug: 'bueroreinigung-tipps',
    category: 'Reinigung',
  },
  {
    title: 'Umzug planen: Checkliste für einen stressfreien Umzug',
    excerpt: 'Mit unserer Schritt-für-Schritt-Anleitung wird Ihr Umzug zum Kinderspiel. Jetzt Checkliste downloaden!',
    image: 'https://images.unsplash.com/photo-1464082354059-27db6ce50048?q=80&w=800&auto=format&fit=crop',
    date: '12. Oktober 2025',
    readTime: '6 Min.',
    slug: 'umzug-checkliste',
    category: 'Umzug',
  },
]

export default function NewsSection() {
  return (
    <Section background="light" padding="medium" className="relative overflow-hidden">
      {/* Full Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
          alt="Knowledge and Expertise Background"
          fill
          className="object-cover"
          priority={false}
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <Container size="wide">
        <ScrollReveal direction="up" className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-6">
            <span className="text-secondary font-bold text-sm uppercase tracking-[0.3em] bg-secondary/20 px-6 py-2 rounded-full text-white">
              News & Ratgeber
            </span>
          </div>
          <h2 className="text-section uppercase font-black mb-6 leading-tight text-white">
            WISSEN &<br />
            <span className="gradient-text">EXPERTISE</span>
          </h2>
          <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            Neuigkeiten, Tipps und Wissenswertes rund um unsere Dienstleistungen
          </p>
        </ScrollReveal>

        <StaggerContainer delay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {featuredPosts.map((post, index) => (
            <StaggerItem key={post.slug}>
              <Link 
                href={`/ratgeber/${post.slug}`} 
                className="group block"
                aria-label={`Read article: ${post.title}`}
              >
                <article className="card-modern h-full flex flex-col group-hover:scale-[1.02] transition-transform duration-300">
                  <div className="relative overflow-hidden h-56 md:h-64">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      loading="lazy"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  {/* Date badge */}
                  <div className="absolute top-3 right-3 md:top-4 md:right-4">
                    <div className="glass px-3 py-1.5 md:px-4 md:py-2 rounded-xl">
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
                  
                  <h3 className="text-lg md:text-xl font-black text-[#1a1a1a] mb-3 md:mb-4 leading-tight group-hover:text-secondary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-sm md:text-base text-neutral-600 leading-relaxed mb-4 md:mb-6 line-clamp-3 flex-1">
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

        <ScrollReveal direction="up" delay={0.3} className="text-center">
          <Link href="/ratgeber">
            <Button variant="primary" size="lg" className="hover:scale-105 transition-transform shadow-xl">
              Alle Artikel ansehen
            </Button>
          </Link>
        </ScrollReveal>
      </Container>
    </Section>
  )
}
