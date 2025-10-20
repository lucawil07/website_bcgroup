'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button, Input, Textarea } from '@/components/ui'
import { Send } from 'lucide-react'

const contactSchema = z.object({
  name: z.string().min(2, 'Name muss mindestens 2 Zeichen lang sein'),
  email: z.string().email('Bitte geben Sie eine gültige E-Mail-Adresse ein'),
  phone: z.string().min(6, 'Bitte geben Sie eine gültige Telefonnummer ein'),
  service: z.string().min(1, 'Bitte wählen Sie einen Service aus'),
  message: z.string().min(10, 'Nachricht muss mindestens 10 Zeichen lang sein'),
  privacy: z.boolean().refine((val) => val === true, {
    message: 'Sie müssen die Datenschutzerklärung akzeptieren',
  }),
})

type ContactFormData = z.infer<typeof contactSchema>

const services = [
  'Entrümpelung',
  'Abriss',
  'Reinigung',
  'Hausmeisterservice',
  'Umzug & Transport',
  'Kurierdienst',
  'Sonstiges',
]

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      
      console.log('Form data:', data)
      setSubmitStatus('success')
      reset()
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Name *"
          {...register('name')}
          error={errors.name?.message}
          placeholder="Max Mustermann"
        />
        <Input
          label="E-Mail *"
          type="email"
          {...register('email')}
          error={errors.email?.message}
          placeholder="max@beispiel.de"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Telefon *"
          type="tel"
          {...register('phone')}
          error={errors.phone?.message}
          placeholder="+49 30 123 456 7"
        />
        <div className="w-full">
          <label className="block text-sm font-medium text-[#1a1a1a] mb-2">
            Service *
          </label>
          <select
            {...register('service')}
            className="w-full h-14 px-4 bg-white border-b-2 border-neutral-300 focus:outline-none focus:border-secondary transition-colors"
          >
            <option value="">Bitte wählen...</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="mt-1 text-sm text-red-500">{errors.service.message}</p>
          )}
        </div>
      </div>

      <Textarea
        label="Ihre Nachricht *"
        {...register('message')}
        error={errors.message?.message}
        placeholder="Beschreiben Sie Ihr Anliegen..."
        rows={6}
      />

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          {...register('privacy')}
          id="privacy"
          className="mt-1 w-5 h-5 text-secondary border-neutral-300 rounded focus:ring-secondary"
        />
        <label htmlFor="privacy" className="text-sm text-neutral-600">
          Ich habe die{' '}
          <a href="/datenschutz" className="text-secondary hover:underline">
            Datenschutzerklärung
          </a>{' '}
          gelesen und akzeptiere diese. *
        </label>
      </div>
      {errors.privacy && (
        <p className="text-sm text-red-500 -mt-4">{errors.privacy.message}</p>
      )}

      {submitStatus === 'success' && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-sm">
          <p className="font-medium">Vielen Dank für Ihre Anfrage!</p>
          <p className="text-sm">Wir werden uns schnellstmöglich bei Ihnen melden.</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-sm">
          <p className="font-medium">Es ist ein Fehler aufgetreten.</p>
          <p className="text-sm">Bitte versuchen Sie es später erneut.</p>
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        isLoading={isSubmitting}
        disabled={isSubmitting}
        className="w-full md:w-auto"
        icon={<Send className="w-5 h-5" />}
        iconPosition="left"
      >
        Nachricht senden
      </Button>
    </form>
  )
}
