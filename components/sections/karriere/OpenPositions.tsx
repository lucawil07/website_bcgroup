'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Section, Container, Button } from '@/components/ui'
import { MapPin, Briefcase, Clock, ChevronRight, Search, Filter, X } from 'lucide-react'
import jobsData from '@/data/jobs.json'

interface JobPosition {
  id: string
  title: string
  department: string
  location: string
  type: 'Full-time' | 'Part-time' | 'Apprenticeship'
  experience: 'Entry' | 'Mid' | 'Senior'
  description: string
  shortDescription?: string
  highlights: string[]
  salary?: string
  keywords?: string[]
  requirements?: string[]
  benefits?: string[]
}

export default function OpenPositions() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null)
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Load jobs from JSON configuration
  const jobs: JobPosition[] = jobsData.jobs as JobPosition[]

  // Generate JSON-LD structured data for Google
  const generateJobSchema = (job: JobPosition) => ({
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.description,
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: job.location,
        addressRegion: 'Berlin',
        addressCountry: 'DE',
      },
    },
    employmentType: job.type === 'Full-time' ? 'FULL_TIME' : job.type === 'Part-time' ? 'PART_TIME' : 'APPRENTICESHIP',
    baseSalary: job.salary ? {
      '@type': 'PriceSpecification',
      priceCurrency: 'EUR',
      price: job.salary,
    } : undefined,
    hiringOrganization: {
      '@type': 'Organization',
      name: 'BC Group',
      sameAs: 'https://bcgroup.de',
      logo: 'https://bcgroup.de/logo.png',
    },
    datePosted: new Date().toISOString().split('T')[0],
    validThrough: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
  })

  // Add structured data to head on component mount
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.innerHTML = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Karriere',
          item: 'https://bcgroup.de/karriere',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Offene Positionen',
          item: 'https://bcgroup.de/karriere#offene-positionen',
        },
      ],
    })
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  const departments = Array.from(new Set(jobs.map((j) => j.department)))
  const types = Array.from(new Set(jobs.map((j) => j.type)))

  // Filter jobs
  const filteredJobs = jobs.filter((job) => {
    const matchesDepartment = !selectedDepartment || job.department === selectedDepartment
    const matchesType = !selectedType || job.type === selectedType
    const matchesSearch =
      !searchTerm ||
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase())

    return matchesDepartment && matchesType && matchesSearch
  })

  const getExperienceColor = (level: string) => {
    switch (level) {
      case 'Entry':
        return 'from-emerald-500 to-emerald-600'
      case 'Mid':
        return 'from-blue-500 to-blue-600'
      case 'Senior':
        return 'from-purple-500 to-purple-600'
      default:
        return 'from-gray-500 to-gray-600'
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Full-time':
        return 'bg-primary/10 text-primary'
      case 'Part-time':
        return 'bg-accent/10 text-accent'
      case 'Apprenticeship':
        return 'bg-secondary/10 text-secondary'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <Section background="light" padding="large">
      <Container size="wide">
        <div ref={sectionRef}>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-0.5 w-6 bg-secondary rounded-full" />
              <span className="text-secondary font-bold text-xs uppercase tracking-widest">
                Stellenmarkt
              </span>
              <div className="h-0.5 w-6 bg-accent rounded-full" />
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 text-primary">
              Offene Positionen
            </h2>

            <p className="text-lg text-neutral-600 leading-relaxed">
              Finde die perfekte Rolle, die zu deinen Fähigkeiten und Ambitionen passt
            </p>
          </motion.div>

          {/* Search & Filter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12 space-y-6"
          >
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Suche nach Position oder Abteilung..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-neutral-200 bg-white placeholder-neutral-400 text-primary focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3">
              {/* Department filters */}
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() =>
                    setSelectedDepartment(selectedDepartment === dept ? null : dept)
                  }
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                    selectedDepartment === dept
                      ? 'bg-secondary text-white shadow-lg shadow-secondary/30'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>

            {/* Type filters */}
            <div className="flex flex-wrap gap-3">
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => (setSelectedType(selectedType === type ? null : type))}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                    selectedType === type
                      ? 'bg-accent text-white shadow-lg shadow-accent/30'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Clear filters */}
            {(selectedDepartment || selectedType || searchTerm) && (
              <button
                onClick={() => {
                  setSelectedDepartment(null)
                  setSelectedType(null)
                  setSearchTerm('')
                }}
                className="text-secondary font-medium text-sm hover:text-secondary/80 transition-colors flex items-center gap-2"
              >
                <X className="w-4 h-4" />
                Filter löschen
              </button>
            )}

            {/* Results count */}
            <p className="text-sm text-neutral-600">
              {filteredJobs.length} {filteredJobs.length === 1 ? 'Position' : 'Positionen'} gefunden
            </p>
          </motion.div>

          {/* Job Listings */}
          <AnimatePresence mode="wait">
            {filteredJobs.length > 0 ? (
              <div className="grid grid-cols-1 gap-6">
                {filteredJobs.map((job, index) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05,
                    }}
                    className="group relative"
                  >
                    <div className="rounded-2xl bg-white border border-neutral-100 p-6 md:p-8 hover:border-secondary/30 transition-all duration-300 hover:shadow-xl hover:shadow-secondary/10">
                      {/* Top accent line */}
                      <div className="absolute top-0 left-0 w-1 h-0 bg-gradient-to-b from-secondary to-accent group-hover:h-full transition-all duration-500 rounded-t-2xl" />

                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                        {/* Left Content */}
                        <div className="flex-1 space-y-4">
                          {/* Title & Department */}
                          <div>
                            <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                              {job.title}
                            </h3>
                            <p className="text-sm font-semibold text-secondary uppercase tracking-wider">
                              {job.department}
                            </p>
                          </div>

                          {/* Description */}
                          <p className="text-neutral-600 text-base leading-relaxed">
                            {job.description}
                          </p>

                          {/* Highlights */}
                          <div className="flex flex-wrap gap-2 pt-2">
                            {job.highlights.map((highlight, i) => (
                              <span
                                key={i}
                                className="text-xs font-medium bg-secondary/10 text-secondary px-3 py-1 rounded-full"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>

                          {/* Meta Info with SEO attributes */}
                          <div className="flex flex-wrap gap-4 pt-4 text-sm">
                            <div className="flex items-center gap-2 text-neutral-600" itemProp="jobLocation">
                              <MapPin className="w-4 h-4" />
                              <span>{job.location}</span>
                            </div>
                            <div className={`px-3 py-1 rounded-lg font-medium text-xs ${getTypeColor(job.type)}`}>
                              {job.type}
                            </div>
                            <div
                              className={`px-3 py-1 rounded-lg font-medium text-xs text-white bg-gradient-to-r ${getExperienceColor(job.experience)}`}
                            >
                              {job.experience} Level
                            </div>
                            {job.salary && (
                              <div className="px-3 py-1 rounded-lg font-medium text-xs bg-emerald-50 text-emerald-700" itemProp="baseSalary">
                                {job.salary}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Right CTA */}
                        <div className="flex md:flex-col md:items-end gap-4 md:gap-3">
                          <motion.button
                            whileHover={{ x: 4 }}
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-secondary to-secondary/80 text-white rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-secondary/30 whitespace-nowrap"
                          >
                            Bewerbung
                            <ChevronRight className="w-4 h-4" />
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-center py-16"
              >
                <Briefcase className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-2">Keine Positionen gefunden</h3>
                <p className="text-neutral-600">
                  Versuch, deine Filter anzupassen oder schau später wieder vorbei
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </Section>
  )
}
