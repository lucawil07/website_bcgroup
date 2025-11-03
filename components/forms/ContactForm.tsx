'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button, Input, Textarea } from '@/components/ui'
import { Send, CheckCircle, AlertCircle, MessageCircle } from 'lucide-react'

const contactSchema = z.object({
  name: z.string().min(2, 'Name muss mindestens 2 Zeichen lang sein'),
  email: z.string().email('Bitte geben Sie eine gültige E-Mail-Adresse ein'),
  phone: z.string().min(6, 'Bitte geben Sie eine gültige Telefonnummer ein'),
  service: z.string().min(1, 'Bitte wählen Sie einen Service aus'),
  propertyType: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, 'Nachricht muss mindestens 10 Zeichen lang sein'),
  privacyAccepted: z.boolean().refine((val) => val === true, {
    message: 'Sie müssen der Datenschutzerklärung zustimmen',
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

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
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
      // Send to your API endpoint
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

      setSubmitStatus('success')
      reset()
      
      // Reset success message after 6 seconds
      setTimeout(() => setSubmitStatus('idle'), 6000)
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Personal Information */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-neutral-600">
          Kontaktinformationen
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Vollständiger Name *"
            {...register('name')}
            error={errors.name?.message}
            placeholder="Max Mustermann"
          />
          <Input
            label="E-Mail-Adresse *"
            type="email"
            {...register('email')}
            error={errors.email?.message}
            placeholder="max@beispiel.de"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Telefonnummer *"
            type="tel"
            {...register('phone')}
            error={errors.phone?.message}
            placeholder="+49 30 123 456 7"
          />
        </div>
      </div>

      {/* Service Selection */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-neutral-600">
          Service Details
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-neutral-900 mb-3">
              Welcher Service interessiert Sie? *
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
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
                    value={svc.value}
                    {...register('service')}
                    className="w-5 h-5 accent-secondary"
                  />
                  <span className="text-sm font-medium text-neutral-700">
                    {svc.label}
                  </span>
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
        </div>
      </div>

      {/* Property & Budget Information */}
      {(showPropertyType || showBudget) && (
        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-neutral-600">
            Projektdetails
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {showPropertyType && (
              <div>
                <label className="block text-sm font-semibold text-neutral-900 mb-2">
                  Objekttyp
                </label>
                <select
                  {...register('propertyType')}
                  className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
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
                <label className="block text-sm font-semibold text-neutral-900 mb-2">
                  Budget
                </label>
                <select
                  {...register('budget')}
                  className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
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
        </div>
      )}

      {/* Message */}
      <div className="space-y-4">
        <Textarea
          label="Ihre Anfrage / Nachrichten *"
          {...register('message')}
          error={errors.message?.message}
          placeholder="Beschreiben Sie Ihr Projekt, Ihre Wünsche und Anforderungen..."
          rows={6}
        />
      </div>

      {/* Privacy & Consent */}
      <div className="space-y-4 bg-neutral-50 p-6 rounded-lg border border-neutral-200">
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            {...register('privacyAccepted')}
            id="privacy"
            className="mt-1.5 w-5 h-5 text-secondary border-neutral-300 rounded focus:ring-secondary cursor-pointer"
          />
          <label htmlFor="privacy" className="text-sm text-neutral-700 leading-relaxed cursor-pointer">
            Ich habe die{' '}
            <a
              href="/datenschutz"
              className="text-secondary hover:underline font-semibold"
            >
              Datenschutzerklärung
            </a>{' '}
            gelesen und akzeptiere die Verarbeitung meiner persönlichen Daten. *
          </label>
        </div>
        {errors.privacyAccepted && (
          <p className="text-sm text-red-500 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors.privacyAccepted.message}
          </p>
        )}
      </div>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="bg-green-50 border border-green-200 text-green-900 px-6 py-5 rounded-lg flex items-start gap-3 animate-slide-in-up">
          <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold">Vielen Dank für Ihre Anfrage!</p>
            <p className="text-sm mt-1">
              Wir haben Ihre Nachricht erhalten und werden uns schnellstmöglich mit Ihnen in
              Verbindung setzen.
            </p>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-900 px-6 py-5 rounded-lg flex items-start gap-3 animate-slide-in-up">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold">Es ist ein Fehler aufgetreten</p>
            <p className="text-sm mt-1">
              Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt.
            </p>
          </div>
        </div>
      )}

      {/* Submit Button */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          isLoading={isSubmitting}
          disabled={isSubmitting}
          className="flex-1 sm:flex-initial"
          icon={<Send className="w-5 h-5" />}
          iconPosition="left"
        >
          {isSubmitting ? 'Wird gesendet...' : 'Anfrage senden'}
        </Button>
        <div className="flex items-center justify-center text-sm text-neutral-600">
          <MessageCircle className="w-4 h-4 mr-2" />
          <span>Oder chatten Sie mit uns auf WhatsApp</span>
        </div>
      </div>
    </form>
  )
}
