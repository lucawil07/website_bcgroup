'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Section, Container, Button, ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui'
import { Calendar, Clock, ArrowRight, TrendingUp } from 'lucide-react'
import { getArticleBadgeClasses, getCategoryColor } from '@/lib/ratgeber-colors'

interface BlogPost {
  title: string
  excerpt: string
  image: string
  date: string
  readTime: string
  slug: string
  category: string
  featured?: boolean
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
    featured: true,
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
  const [imageLoadingStates, setImageLoadingStates] = useState<Record<string, boolean>>({})

  const handleImageLoad = (slug: string) => {
    setImageLoadingStates(prev => ({ ...prev, [slug]: true }))
  }

  return (
    <Section background="light" padding="medium" className="relative overflow-hidden">
      {/* Refined Background with Gradient Overlays */}
      <div className="absolute inset-0 -z-10">
        {/* Subtle gradient mesh background */}
        <div className="absolute inset-0 bg-linear-to-br from-neutral-50 via-white to-secondary-50/30" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse-subtle" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/4 rounded-full blur-3xl" />
        
        {/* Subtle noise texture for depth */}
        <div className="absolute inset-0 opacity-[0.015] bg-noise" />
      </div>

      <Container size="wide" className="relative z-10">
        {/* Modern Header Section */}
        <ScrollReveal direction="up" className="text-center mb-16 lg:mb-20">
          {/* Refined Badge */}
          <div className="inline-flex items-center justify-center mb-8">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-linear-to-r from-transparent via-secondary/40 to-transparent" />
              <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border-2 border-secondary/15 bg-linear-to-br from-secondary/5 to-transparent backdrop-blur-sm">
                <span className="text-secondary font-bold text-xs uppercase tracking-[0.25em]">
                  News & Ratgeber
                </span>
              </div>
              <div className="h-px w-8 bg-linear-to-l from-transparent via-secondary/40 to-transparent" />
            </div>
          </div>

          {/* Main Heading with Better Typography */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.08] tracking-tight">
            <span className="block text-primary mb-2">Wissen &</span>
            <span className="block gradient-text">Expertise</span>
          </h2>
          
          {/* Subheading with Better Contrast */}
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed font-light">
            Neuigkeiten, Tipps und Wissenswertes rund um unsere Dienstleistungen
          </p>

          {/* Decorative Divider */}
          <div className="mt-8 flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-secondary/30" />
            <div className="w-12 h-px bg-linear-to-r from-secondary/20 via-secondary/40 to-secondary/20" />
            <div className="w-2 h-2 rounded-full bg-secondary/30" />
          </div>
        </ScrollReveal>

        {/* Enhanced Articles Grid - Mobile Slider / Desktop Grid */}
        <div className="mb-12 lg:mb-16">
          {/* Mobile: Horizontal Slider */}
          <div className="md:hidden relative -mx-4 px-4">
            <div className="overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-4">
              <div className="flex gap-4 px-4">
                {featuredPosts.map((post, index) => {
                  const categoryColor = getCategoryColor(post.category)
                  
                  return (
                    <div key={post.slug} className="shrink-0 w-[85vw] snap-start">
                      <Link 
                        href={`/ratgeber/${post.slug}`} 
                        className="group block h-full"
                        aria-label={`Artikel lesen: ${post.title}`}
                      >
                        <article className="relative h-full flex flex-col rounded-3xl overflow-hidden bg-white border-2 border-neutral-100 transition-all duration-500 hover:border-secondary/30 hover:shadow-2xl group-hover:scale-[1.01] will-change-transform">
                          {/* Featured Badge */}
                          {post.featured && (
                            <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-linear-to-r from-amber-500 to-orange-500 shadow-lg">
                              <TrendingUp className="w-3.5 h-3.5 text-white" />
                              <span className="text-xs font-bold text-white uppercase tracking-wider">
                                Beliebt
                              </span>
                            </div>
                          )}

                          {/* Image Section */}
                          <div className="relative h-64 bg-neutral-100 overflow-hidden">
                            {/* Loading Skeleton */}
                            {!imageLoadingStates[post.slug] && (
                              <div className="absolute inset-0 skeleton" />
                            )}
                            
                            <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              loading="lazy"
                              className={`object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1 ${
                                imageLoadingStates[post.slug] ? 'opacity-100' : 'opacity-0'
                              }`}
                              sizes="85vw"
                              onLoad={() => handleImageLoad(post.slug)}
                            />
                            
                            {/* Refined Gradient Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/5 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                            
                            {/* Category Badge with Dynamic Colors */}
                            <div className="absolute top-4 right-4 z-10">
                              <span className={`inline-flex px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider shadow-lg backdrop-blur-sm border border-white/20 ${getArticleBadgeClasses(post.category)}`}>
                                {post.category}
                              </span>
                            </div>

                            {/* Date & Time Badge - Bottom Left */}
                            <div className="absolute bottom-4 left-4 right-4 z-10">
                              <div className="flex items-center justify-between gap-3">
                                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-sm shadow-lg">
                                  <Calendar className="w-3.5 h-3.5 text-neutral-600" />
                                  <span className="text-xs font-semibold text-neutral-800">
                                    {post.date}
                                  </span>
                                </div>
                                
                                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-sm">
                                  <Clock className="w-3.5 h-3.5 text-white" />
                                  <span className="text-xs font-semibold text-white">
                                    {post.readTime}
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Hover Action Indicator */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
                              <div className="w-14 h-14 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl border-2 border-white/50">
                                <ArrowRight className="w-6 h-6 text-secondary transform group-hover:translate-x-1 transition-transform duration-300" />
                              </div>
                            </div>
                          </div>
                          
                          {/* Content Section */}
                          <div className="flex-1 flex flex-col p-6">
                            {/* Title */}
                            <h3 className="text-xl font-black text-primary mb-4 leading-tight group-hover:text-secondary transition-colors duration-300 line-clamp-2">
                              {post.title}
                            </h3>
                            
                            {/* Excerpt */}
                            <p className="text-sm text-neutral-600 leading-relaxed mb-6 line-clamp-3 flex-1">
                              {post.excerpt}
                            </p>
                            
                            {/* CTA Footer */}
                            <div className="flex items-center justify-between pt-5 border-t-2 border-neutral-100 group-hover:border-secondary/20 transition-colors duration-300">
                              <span className="text-secondary font-bold text-sm uppercase tracking-wider group-hover:text-accent transition-colors duration-300">
                                Weiterlesen
                              </span>
                              
                              <div className="relative">
                                <div className="absolute inset-0 bg-secondary/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative w-10 h-10 bg-secondary/5 rounded-full flex items-center justify-center group-hover:bg-secondary transition-all duration-300 shadow-md">
                                  <ArrowRight className="w-4 h-4 text-secondary group-hover:text-white transform group-hover:translate-x-1 transition-all duration-300" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </div>
                  )
                })}
              </div>
            </div>
            {/* Scroll Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {featuredPosts.map((_, index) => (
                <div key={index} className="w-2 h-2 rounded-full bg-neutral-300" />
              ))}
            </div>
          </div>

          {/* Desktop: Grid */}
          <StaggerContainer delay={0.1} className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredPosts.map((post, index) => {
            const categoryColor = getCategoryColor(post.category)
            
            return (
              <StaggerItem key={post.slug}>
                <Link 
                  href={`/ratgeber/${post.slug}`} 
                  className="group block h-full"
                  aria-label={`Artikel lesen: ${post.title}`}
                >
                  <article className="relative h-full flex flex-col rounded-3xl overflow-hidden bg-white border-2 border-neutral-100 transition-all duration-500 hover:border-secondary/30 hover:shadow-2xl hover:-translate-y-2 group-hover:scale-[1.01] will-change-transform">
                    {/* Featured Badge */}
                    {post.featured && (
                      <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-linear-to-r from-amber-500 to-orange-500 shadow-lg">
                        <TrendingUp className="w-3.5 h-3.5 text-white" />
                        <span className="text-xs font-bold text-white uppercase tracking-wider">
                          Beliebt
                        </span>
                      </div>
                    )}

                    {/* Image Section */}
                    <div className="relative h-64 md:h-72 bg-neutral-100 overflow-hidden">
                      {/* Loading Skeleton */}
                      {!imageLoadingStates[post.slug] && (
                        <div className="absolute inset-0 skeleton" />
                      )}
                      
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        loading="lazy"
                        className={`object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1 ${
                          imageLoadingStates[post.slug] ? 'opacity-100' : 'opacity-0'
                        }`}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        onLoad={() => handleImageLoad(post.slug)}
                      />
                      
                      {/* Refined Gradient Overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/5 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                      
                      {/* Category Badge with Dynamic Colors */}
                      <div className="absolute top-4 right-4 z-10">
                        <span className={`inline-flex px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider shadow-lg backdrop-blur-sm border border-white/20 ${getArticleBadgeClasses(post.category)}`}>
                          {post.category}
                        </span>
                      </div>

                      {/* Date & Time Badge - Bottom Left */}
                      <div className="absolute bottom-4 left-4 right-4 z-10">
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-sm shadow-lg">
                            <Calendar className="w-3.5 h-3.5 text-neutral-600" />
                            <span className="text-xs font-semibold text-neutral-800">
                              {post.date}
                            </span>
                          </div>
                          
                          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-sm">
                            <Clock className="w-3.5 h-3.5 text-white" />
                            <span className="text-xs font-semibold text-white">
                              {post.readTime}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Hover Action Indicator */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
                        <div className="w-14 h-14 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl border-2 border-white/50">
                          <ArrowRight className="w-6 h-6 text-secondary transform group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="flex-1 flex flex-col p-6 md:p-7">
                      {/* Title */}
                      <h3 className="text-xl md:text-2xl font-black text-primary mb-4 leading-tight group-hover:text-secondary transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      {/* Excerpt */}
                      <p className="text-sm md:text-base text-neutral-600 leading-relaxed mb-6 line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>
                      
                      {/* CTA Footer */}
                      <div className="flex items-center justify-between pt-5 border-t-2 border-neutral-100 group-hover:border-secondary/20 transition-colors duration-300">
                        <span className="text-secondary font-bold text-sm uppercase tracking-wider group-hover:text-accent transition-colors duration-300">
                          Weiterlesen
                        </span>
                        
                        <div className="relative">
                          <div className="absolute inset-0 bg-secondary/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="relative w-10 h-10 bg-secondary/5 rounded-full flex items-center justify-center group-hover:bg-secondary transition-all duration-300 shadow-md">
                            <ArrowRight className="w-4 h-4 text-secondary group-hover:text-white transform group-hover:translate-x-1 transition-all duration-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              </StaggerItem>
            )
          })}
          </StaggerContainer>
        </div>

        {/* Enhanced CTA Section */}
        <ScrollReveal direction="up" delay={0.3} className="text-center">
          <Link href="/ratgeber" className="inline-block group">
            <Button 
              variant="primary" 
              size="lg" 
              className="relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                Alle Artikel ansehen
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              {/* Animated gradient overlay on hover */}
              <div className="absolute inset-0 bg-linear-to-r from-secondary via-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-size-[200%_100%] animate-gradient-x" />
            </Button>
          </Link>
          
          {/* Subtle helper text */}
          <p className="mt-6 text-sm text-neutral-500">
            Entdecken Sie {featuredPosts.length} weitere Artikel in unserem Ratgeber
          </p>
        </ScrollReveal>
      </Container>
    </Section>
  )
}
