'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { X, ArrowLeft, ArrowRight, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui'

import Step1ServiceType from './funnel-steps/Step1ServiceType'
import Step2PropertyDetails from './funnel-steps/Step2PropertyDetails'
import Step3ScopeSize from './funnel-steps/Step3ScopeSize'
import Step4SpecialItems from './funnel-steps/Step4SpecialItems'
import Step5Dismantling from './funnel-steps/Step5Dismantling'
import Step6Timing from './funnel-steps/Step6Timing'
import Step7AdditionalInfo from './funnel-steps/Step7AdditionalInfo'
import Step8Summary from './funnel-steps/Step8Summary'

const formSchema = z.object({
  // Step 1
  serviceType: z.string().min(1, 'Bitte wählen Sie eine Option'),
  serviceTypeOther: z.string().optional(),
  
  // Step 2
  floor: z.string().min(1, 'Bitte wählen Sie eine Etage'),
  hasElevator: z.boolean(),
  parkingDistance: z.string().min(1, 'Bitte wählen Sie die Entfernung'),
  
  // Step 3
  area: z.number().min(0, 'Bitte geben Sie die Fläche an'),
  fullness: z.string().min(1, 'Bitte wählen Sie die Füllmenge'),
  
  // Step 4
  specialItems: z.array(z.string()).optional(),
  specialItemsOther: z.string().optional(),
  hasSondermuell: z.boolean().optional(),
  sondermuellTypes: z.array(z.string()).optional(),
  
  // Step 5
  needsDismantling: z.boolean(),
  dismantlingDetails: z.string().optional(),
  
  // Step 6
  timing: z.string().min(1, 'Bitte wählen Sie einen Zeitraum'),
  photos: z.array(z.string()).optional(),
  
  // Step 7
  additionalNotes: z.string().optional(),
  hasSeparateObjectAddress: z.boolean().optional(),
  objectAddress: z.string().optional(),
  objectPostalCode: z.string().optional(),
  objectCity: z.string().optional(),
  
  // Step 8
  name: z.string().min(2, 'Bitte geben Sie Ihren Namen ein'),
  phone: z.string().min(6, 'Bitte geben Sie eine gültige Telefonnummer ein'),
  email: z.string().email('Bitte geben Sie eine gültige E-Mail-Adresse ein'),
  address: z.string().min(3, 'Bitte geben Sie Ihre Adresse ein'),
  postalCode: z.string().min(4, 'Bitte geben Sie eine gültige PLZ ein'),
  city: z.string().min(2, 'Bitte geben Sie Ihren Ort ein'),
  privacyAccepted: z.boolean().refine(val => val === true, {
    message: 'Sie müssen die Datenschutzerklärung akzeptieren',
  }),
})

export type EntruempelungFormData = z.infer<typeof formSchema>
export type { EntruempelungFormData as EntruempelungFormDataType } from './funnel-types'

interface FunnelFormProps {
  onClose: () => void
}

const TOTAL_STEPS = 8
const STORAGE_KEY = 'entruempelung_funnel_draft'

export default function EntruempelungFunnelForm({ onClose }: FunnelFormProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<EntruempelungFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      serviceType: '',
      floor: '',
      hasElevator: false,
      parkingDistance: '',
      area: 0,
      fullness: '',
      specialItems: [],
      hasSondermuell: undefined,
      sondermuellTypes: [],
      needsDismantling: false,
      timing: '',
      photos: [],
      hasSeparateObjectAddress: false,
      privacyAccepted: false,
    },
    mode: 'onChange',
  })

  // Load draft from localStorage
  useEffect(() => {
    const draft = localStorage.getItem(STORAGE_KEY)
    if (draft) {
      try {
        const parsedDraft = JSON.parse(draft)
        Object.keys(parsedDraft).forEach((key) => {
          form.setValue(key as any, parsedDraft[key])
        })
      } catch (error) {
        console.error('Error loading draft:', error)
      }
    }
  }, [])

  // Save draft to localStorage
  useEffect(() => {
    const subscription = form.watch((data) => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    })
    return () => subscription.unsubscribe()
  }, [form.watch])

  const validateCurrentStep = async () => {
    const fieldsToValidate: { [key: number]: (keyof EntruempelungFormData)[] } = {
      1: ['serviceType'],
      2: ['floor', 'hasElevator', 'parkingDistance'],
      3: ['area', 'fullness'],
      4: ['specialItems'],
      5: ['needsDismantling'],
      6: ['timing'],
      7: [],
      8: ['name', 'phone', 'email', 'address', 'postalCode', 'city', 'privacyAccepted'],
    }

    const fields = fieldsToValidate[currentStep]
    const result = await form.trigger(fields as any)
    return result
  }

  const handleNext = async () => {
    const isValid = await validateCurrentStep()
    if (isValid && currentStep < TOTAL_STEPS) {
      setCurrentStep(currentStep + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleEditStep = (step: number) => {
    setCurrentStep(step)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const onSubmit = async (data: EntruempelungFormData) => {
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/entruempelung-funnel', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        // Clear draft
        localStorage.removeItem(STORAGE_KEY)
        // Redirect to thank you page
        window.location.href = '/services/entruempelung/danke'
      } else {
        throw new Error('Submission failed')
      }
    } catch (error) {
      console.error('Submission error:', error)
      alert('Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1ServiceType form={form} />
      case 2:
        return <Step2PropertyDetails form={form} />
      case 3:
        return <Step3ScopeSize form={form} />
      case 4:
        return <Step4SpecialItems form={form} />
      case 5:
        return <Step5Dismantling form={form} />
      case 6:
        return <Step6Timing form={form} />
      case 7:
        return <Step7AdditionalInfo form={form} />
      case 8:
        return <Step8Summary form={form} onEditStep={handleEditStep} />
      default:
        return null
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold text-neutral-600">
            Fortschritt: Schritt {currentStep} von {TOTAL_STEPS}
          </span>
          <span className="text-sm font-bold text-secondary">
            {Math.round((currentStep / TOTAL_STEPS) * 100)}%
          </span>
        </div>
        <div className="w-full h-3 bg-neutral-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-secondary to-accent transition-all duration-500 ease-out"
            style={{ width: `${(currentStep / TOTAL_STEPS) * 100}%` }}
          />
        </div>
      </div>

      {/* Form Content */}
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="min-h-[500px]">
          {renderStep()}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between gap-4 mt-8 pt-8 border-t border-neutral-200">
          <Button
            type="button"
            variant="ghost"
            size="lg"
            onClick={handleBack}
            disabled={currentStep === 1 || isSubmitting}
            className={currentStep === 1 ? 'invisible' : ''}
            icon={<ArrowLeft className="w-5 h-5" />}
            iconPosition="left"
          >
            Zurück
          </Button>

          {currentStep < TOTAL_STEPS ? (
            <Button
              type="button"
              variant="primary"
              size="lg"
              onClick={handleNext}
              className="ml-auto"
              icon={<ArrowRight className="w-5 h-5" />}
              iconPosition="right"
            >
              Weiter
            </Button>
          ) : (
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isSubmitting}
              isLoading={isSubmitting}
              className="ml-auto"
              icon={!isSubmitting ? <ArrowRight className="w-5 h-5" /> : undefined}
              iconPosition="right"
            >
              {isSubmitting ? 'Wird gesendet...' : 'Unverbindlich Angebot anfordern'}
            </Button>
          )}
        </div>
      </form>
    </div>
  )
}
