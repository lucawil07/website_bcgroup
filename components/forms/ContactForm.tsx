'use client'

import { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button, Input, Textarea } from '@/components/ui'
import { Send, CheckCircle, AlertCircle, ArrowRight, Phone, MessageCircle, RotateCcw } from 'lucide-react'

const contactSchema = z.object({
  name: z.string().min(2, 'Name muss mindestens 2 Zeichen lang sein'),
  email: z.string().email('Bitte geben Sie eine gültige E-Mail-Adresse ein'),
  phone: z.string().min(6, 'Bitte geben Sie eine gültige Telefonnummer ein'),
  service: z.string().min(1, 'Bitte wählen Sie einen Service aus'),
  propertyType: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, 'Nachricht muss mindestens 10 Zeichen lang sein'),
  privacyAccepted: z.boolean().refine((val) => val === true, {
    message: 'Sie müssen der Datenschutzerklärung und den AGB zustimmen',
  }),
})

type ContactFormData = z.infer<typeof contactSchema>

const services = [
  { value: 'entruempelung', label: 'Entrümpelung' },
  { value: 'abriss', label: 'Abriss' },
  { value: 'reinigung', label: 'Reinigung' },
  { value: 'hausmeisterservice', label: 'Hausmeisterservice' },
  { value: 'umzug', label: 'Umzug & Transport' },
  { value: 'kurierdienst', label: 'Kurierdienst' },
  { value: 'other', label: 'Sonstiges' },
]

const serviceLabels: Record<string, string> = {
  entruempelung: 'Entrümpelung',
  abriss: 'Abriss',
  reinigung: 'Reinigung',
  hausmeisterservice: 'Hausmeisterservice',
  umzug: 'Umzug & Transport',
  kurierdienst: 'Kurierdienst',
  other: 'Sonstiges',
}

const propertyTypes = [
  { value: 'apartment', label: 'Wohnung' },
  { value: 'house', label: 'Haus' },
  { value: 'commercial', label: 'Gewerbe' },
  { value: 'other', label: 'Sonstiges' },
]

const budgetRanges = [
  { value: '0-1000', label: 'Unter 1.000 €' },
  { value: '1000-5000', label: '1.000 - 5.000 €' },
  { value: '5000-10000', label: '5.000 - 10.000 €' },
  { value: '10000plus', label: 'Über 10.000 €' },
  { value: 'no-idea', label: 'Ich weiß nicht' },
]

interface ContactFormProps {
  preSelectedService?: string
  showPropertyType?: boolean
  showBudget?: boolean
}

export default function ContactForm({
  preSelectedService,
  showPropertyType = true,
  showBudget = true,
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submittedData, setSubmittedData] = useState<{ name: string; service: string } | null>(null)
  const formRef = useRef<HTMLDivElement>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      service: preSelectedService || '',
    },
  })

  const selectedService = watch('service')

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          timestamp: new Date().toISOString(),
          source: 'contact-form',
        }),
      })

      if (!response.ok) throw new Error('Failed to submit')

      setSubmittedData({ name: data.name, service: data.service })
      setSubmitStatus('success')
      reset()

      // Scroll the success view into sight
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleNewRequest = () => {
    setSubmitStatus('idle')
    setSubmittedData(null)
  }

  // ─── SUCCESS SCREEN ───────────────────────────────────────────
  if (submitStatus === 'success') {
    return (
      <div ref={formRef} className="text-center py-6 md:py-10">
        {/* Animated checkmark */}
        <div className="relative mx-auto w-20 h-20 md:w-24 md:h-24 mb-6">
          <div className="absolute inset-0 bg-green-100 rounded-full animate-ping opacity-30" />
          <div className="relative w-full h-full bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-green-200">
            <CheckCircle className="w-10 h-10 md:w-12 md:h-12 text-white" strokeWidth={2.5} />
          </div>
        </div>

        <h3 className="text-xl md:text-3xl font-black text-neutral-900 mb-2">
          Anfrage erfolgreich gesendet!
        </h3>
        <p className="text-sm md:text-base text-neutral-600 max-w-md mx-auto mb-6 md:mb-8">
          {submittedData?.name ? `Vielen Dank, ${submittedData.name}!` : 'Vielen Dank!'}{' '}
          Wir haben Ihre Anfrage
          {submittedData?.service ? ` zum Thema ${serviceLabels[submittedData.service] || submittedData.service}` : ''}{' '}
          erhalten und melden uns schnellstmöglich bei Ihnen.
        </p>

        {/* What happens next */}
        <div className="bg-neutral-50 rounded-xl border border-neutral-200 p-4 md:p-6 mb-6 md:mb-8 text-left max-w-lg mx-auto">
          <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-500 mb-4">
            Was passiert jetzt?
          </h4>
          <div className="space-y-4">
            {[
              { step: '1', text: 'Wir prüfen Ihre Anfrage', time: 'Sofort', done: true },
              { step: '2', text: 'Persönliche Rückmeldung', time: 'Innerhalb von 2h' },
              { step: '3', text: 'Unverbindliches Angebot', time: 'Innerhalb von 24h' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                    item.done
                      ? 'bg-green-500 text-white'
                      : 'bg-secondary/10 text-secondary'
                  }`}
                >
                  {item.done ? '✓' : item.step}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-neutral-900">{item.text}</p>
                  <p className="text-xs text-neutral-500">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick actions */}
        <div className="space-y-3 max-w-sm mx-auto">
          <p className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
            Noch schneller:
          </p>
          <a
            href="https://wa.me/4917679567083?text=Hallo%2C%20ich%20habe%20gerade%20eine%20Anfrage%20%C3%BCber%20die%20Website%20gesendet"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-colors active:scale-95 text-sm"
          >
            <MessageCircle className="w-4 h-4" />
            Per WhatsApp nachfassen
          </a>
          <a
            href="tel:+4917679567083"
            className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-secondary/10 hover:bg-secondary/20 text-secondary font-bold rounded-xl transition-colors active:scale-95 text-sm"
          >
            <Phone className="w-4 h-4" />
            Direkt anrufen
          </a>
          <button
            onClick={handleNewRequest}
            className="flex items-center justify-center gap-2 w-full py-3 px-4 text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 font-medium rounded-xl transition-colors text-sm"
          >
            <RotateCcw className="w-4 h-4" />
            Neue Anfrage senden
          </button>
        </div>
      </div>
    )
  }

  // ─── FORM ─────────────────────────────────────────────────────
  return (
    <div ref={formRef}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-8">
        {/* Personal Information */}
        <div className="space-y-3 md:space-y-4">
          <h3 className="hidden md:block text-sm font-bold uppercase tracking-[0.15em] text-neutral-600">
            Kontaktinformationen
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
            <Input
              label="Name *"
              {...register('name')}
              error={errors.name?.message}
              placeholder="Max Mustermann"
            />
            <Input
              label="Telefon *"
              type="tel"
              {...register('phone')}
              error={errors.phone?.message}
              placeholder="+49 176 12345678"
            />
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-6">
            <Input
              label="E-Mail *"
              type="email"
              {...register('email')}
              error={errors.email?.message}
              placeholder="max@beispiel.de"
            />
          </div>
        </div>

        {/* Service Selection */}
        <div>
          <label className="block text-sm font-semibold text-neutral-900 mb-2 md:mb-3">
            Welcher Service interessiert Sie? *
          </label>
          {/* Hidden input for react-hook-form registration */}
          <input type="hidden" {...register('service')} />
          {/* Mobile: Dropdown */}
          <select
            value={selectedService}
            onChange={(e) => setValue('service', e.target.value, { shouldValidate: true })}
            className="md:hidden w-full px-3 py-2.5 bg-white border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent text-sm"
          >
            <option value="">Service wählen...</option>
            {services.map((svc) => (
              <option key={svc.value} value={svc.value}>
                {svc.label}
              </option>
            ))}
          </select>
          {/* Desktop: Grid */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-3">
            {services.map((svc) => (
              <label
                key={svc.value}
                className={`relative flex items-center gap-3 p-4 rounded-lg border-2 transition-all cursor-pointer ${
                  selectedService === svc.value
                    ? 'border-secondary bg-blue-50'
                    : 'border-neutral-200 hover:border-neutral-300 bg-white'
                }`}
              >
                <input
                  type="radio"
                  name="service-radio"
                  value={svc.value}
                  checked={selectedService === svc.value}
                  onChange={() => setValue('service', svc.value, { shouldValidate: true })}
                  className="w-5 h-5 accent-secondary"
                />
                <span className="text-sm font-medium text-neutral-700">{svc.label}</span>
              </label>
            ))}
          </div>
          {errors.service && (
            <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.service.message}
            </p>
          )}
        </div>

        {/* Property & Budget Information */}
        {(showPropertyType || showBudget) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
            {showPropertyType && (
              <div>
                <label className="block text-sm font-semibold text-neutral-900 mb-1.5 md:mb-2">
                  Objekttyp
                </label>
                <select
                  {...register('propertyType')}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-white border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent text-sm md:text-base"
                >
                  <option value="">Bitte wählen...</option>
                  {propertyTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>
            )}
            {showBudget && (
              <div>
                <label className="block text-sm font-semibold text-neutral-900 mb-1.5 md:mb-2">
                  Budget
                </label>
                <select
                  {...register('budget')}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-white border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent text-sm md:text-base"
                >
                  <option value="">Bitte wählen...</option>
                  {budgetRanges.map((range) => (
                    <option key={range.value} value={range.value}>
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        )}

        {/* Message */}
        <div>
          <div className="md:hidden">
            <Textarea
              label="Ihre Nachricht *"
              {...register('message')}
              error={errors.message?.message}
              placeholder="Beschreiben Sie kurz Ihr Anliegen..."
              rows={3}
            />
          </div>
          <div className="hidden md:block">
            <Textarea
              label="Ihre Anfrage / Nachricht *"
              {...register('message')}
              error={errors.message?.message}
              placeholder="Beschreiben Sie Ihr Projekt, Ihre Wünsche und Anforderungen..."
              rows={5}
            />
          </div>
        </div>

        {/* Privacy & Consent */}
        <div className="bg-neutral-50 p-3 md:p-5 rounded-lg border border-neutral-200">
          <div className="flex items-start gap-2 md:gap-3">
            <input
              type="checkbox"
              {...register('privacyAccepted')}
              id="privacy"
              className="mt-0.5 md:mt-1 w-4 h-4 md:w-5 md:h-5 text-secondary border-neutral-300 rounded focus:ring-secondary cursor-pointer"
            />
            <label htmlFor="privacy" className="text-xs md:text-sm text-neutral-600 leading-tight md:leading-relaxed cursor-pointer">
              Ich habe die{' '}
              <a href="/datenschutz" className="text-secondary hover:underline font-semibold">Datenschutzerklärung</a>
              {' '}und die{' '}
              <a href="/agb" className="text-secondary hover:underline font-semibold">AGB</a>
              {' '}gelesen und akzeptiere die Verarbeitung meiner Daten. *
            </label>
          </div>
          {errors.privacyAccepted && (
            <p className="mt-1 md:mt-2 text-xs md:text-sm text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 md:w-4 md:h-4" />
              {errors.privacyAccepted.message}
            </p>
          )}
        </div>

        {/* Error Message */}
        {submitStatus === 'error' && (
          <div className="bg-red-50 border border-red-200 text-red-900 px-4 py-3 rounded-lg flex items-start gap-3">
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-sm">Fehler beim Senden</p>
              <p className="text-xs mt-1">
                Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt unter{' '}
                <a href="tel:+4917679567083" className="underline font-semibold">+49 176 79567083</a>.
              </p>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          isLoading={isSubmitting}
          disabled={isSubmitting}
          className="w-full"
          icon={<Send className="w-4 h-4" />}
          iconPosition="left"
        >
          {isSubmitting ? 'Wird gesendet...' : 'Anfrage senden'}
        </Button>
      </form>
    </div>
  )
}
