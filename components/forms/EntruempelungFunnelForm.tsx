'use client'

import { useState, useEffect, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { ArrowLeft, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react'
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
  hasElevator: z.boolean().nullable(),
  parkingDistance: z.string().min(1, 'Bitte wählen Sie die Entfernung'),
  
  // Step 3
  area: z.number().min(1, 'Bitte geben Sie die Fläche an'),
  fullness: z.string().min(1, 'Bitte wählen Sie die Füllmenge'),
  
  // Step 4
  specialItems: z.array(z.string()).optional(),
  specialItemsOther: z.string().optional(),
  hasSondermuell: z.boolean().optional().nullable(),
  sondermuellTypes: z.array(z.string()).optional(),
  
  // Step 5
  needsDismantling: z.boolean().nullable(),
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
    message: 'Sie müssen der Datenschutzerklärung und den AGB zustimmen',
  }),
})

export type EntruempelungFormData = z.infer<typeof formSchema>
export type { EntruempelungFormData as EntruempelungFormDataType } from './funnel-types'

interface FunnelFormProps {
  onClose: () => void
}

const TOTAL_STEPS = 8
const STORAGE_KEY = 'entruempelung_funnel_draft'

// Step titles for progress indicator
const STEP_TITLES = [
  'Art der Entrümpelung',
  'Objektdetails',
  'Größe & Umfang',
  'Besondere Inhalte',
  'Demontage',
  'Zeitraum',
  'Zusätzliches',
  'Kontaktdaten',
]

export default function EntruempelungFunnelForm({ onClose }: FunnelFormProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [stepErrors, setStepErrors] = useState<string[]>([])

  const form = useForm<EntruempelungFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      serviceType: '',
      floor: '',
      hasElevator: null,
      parkingDistance: '',
      area: 0,
      fullness: '',
      specialItems: [],
      hasSondermuell: null,
      sondermuellTypes: [],
      needsDismantling: null,
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
        // Restore step from saved progress if available
        const savedStep = localStorage.getItem(`${STORAGE_KEY}_step`)
        if (savedStep) {
          const stepNum = parseInt(savedStep, 10)
          if (stepNum >= 1 && stepNum <= TOTAL_STEPS) {
            setCurrentStep(stepNum)
          }
        }
      } catch (error) {
        console.error('Error loading draft:', error)
      }
    }
  }, [])

  // Save draft to localStorage with debouncing
  useEffect(() => {
    const subscription = form.watch((data) => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    })
    return () => subscription.unsubscribe()
  }, [form.watch])

  // Save current step to localStorage
  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY}_step`, currentStep.toString())
  }, [currentStep])

  const validateCurrentStep = async () => {
    const fieldsToValidate: { [key: number]: (keyof EntruempelungFormData)[] } = {
      1: ['serviceType'],
      2: ['floor', 'hasElevator', 'parkingDistance'],
      3: ['area', 'fullness'],
      4: [], // Optional step
      5: ['needsDismantling'],
      6: ['timing'],
      7: [],
      8: ['name', 'phone', 'email', 'address', 'postalCode', 'city', 'privacyAccepted'],
    }

    const fields = fieldsToValidate[currentStep]
    
    // Clear previous step errors
    setStepErrors([])
    
    // Custom validation for boolean fields that need to be explicitly set
    if (currentStep === 2) {
      const hasElevator = form.getValues('hasElevator')
      if (hasElevator === null) {
        setStepErrors(['Bitte wählen Sie, ob ein Fahrstuhl vorhanden ist'])
        return false
      }
    }
    
    if (currentStep === 5) {
      const needsDismantling = form.getValues('needsDismantling')
      if (needsDismantling === null) {
        setStepErrors(['Bitte wählen Sie, ob eine Demontage erforderlich ist'])
        return false
      }
    }

    const result = await form.trigger(fields as any)
    
    if (!result) {
      // Collect all validation errors for the current step
      const errors = Object.entries(form.formState.errors)
        .filter(([key]) => fields.includes(key as any))
        .map(([, error]) => error?.message as string)
        .filter(Boolean)
      setStepErrors(errors)
    }
    
    return result
  }

  const handleNext = async () => {
    const isValid = await validateCurrentStep()
    if (isValid && currentStep < TOTAL_STEPS) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentStep(currentStep + 1)
        setIsTransitioning(false)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 150)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setIsTransitioning(true)
      setStepErrors([])
      setTimeout(() => {
        setCurrentStep(currentStep - 1)
        setIsTransitioning(false)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 150)
    }
  }

  const handleEditStep = (step: number) => {
    setIsTransitioning(true)
    setStepErrors([])
    setTimeout(() => {
      setCurrentStep(step)
      setIsTransitioning(false)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 150)
  }

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey && currentStep < TOTAL_STEPS) {
      // Don't trigger on textareas
      if ((e.target as HTMLElement)?.tagName !== 'TEXTAREA') {
        e.preventDefault()
        handleNext()
      }
    }
  }, [currentStep])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  const onSubmit = async (data: EntruempelungFormData) => {
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const response = await fetch('/api/entruempelung-funnel', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        // Clear draft and step
        localStorage.removeItem(STORAGE_KEY)
        localStorage.removeItem(`${STORAGE_KEY}_step`)
        // Redirect to thank you page
        window.location.href = '/services/entruempelung/danke'
      } else {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.error || 'Submission failed')
      }
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitError(
        error instanceof Error 
          ? error.message 
          : 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.'
      )
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
      {/* Progress Bar with Step Indicators */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold text-neutral-600">
            {STEP_TITLES[currentStep - 1]}
          </span>
          <span className="text-sm font-bold text-secondary">
            Schritt {currentStep} / {TOTAL_STEPS}
          </span>
        </div>
        
        {/* Progress bar */}
        <div className="w-full h-3 bg-neutral-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 transition-all duration-500 ease-out"
            style={{ width: `${(currentStep / TOTAL_STEPS) * 100}%` }}
          />
        </div>
        
        {/* Step dots */}
        <div className="flex justify-between mt-3">
          {Array.from({ length: TOTAL_STEPS }, (_, i) => i + 1).map((step) => (
            <button
              key={step}
              type="button"
              onClick={() => step < currentStep && handleEditStep(step)}
              disabled={step >= currentStep}
              className={`
                w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300
                ${step < currentStep 
                  ? 'bg-emerald-500 text-white cursor-pointer hover:scale-110' 
                  : step === currentStep 
                    ? 'bg-emerald-500 text-white ring-4 ring-emerald-500/30 scale-110' 
                    : 'bg-neutral-200 text-neutral-500 cursor-not-allowed'
                }
              `}
              aria-label={`Schritt ${step}: ${STEP_TITLES[step - 1]}`}
            >
              {step < currentStep ? (
                <CheckCircle2 className="w-4 h-4" />
              ) : (
                step
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Step Errors */}
      {stepErrors.length > 0 && (
        <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-xl animate-shake">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-red-700 mb-1">Bitte korrigieren Sie folgende Fehler:</p>
              <ul className="list-disc list-inside text-sm text-red-600">
                {stepErrors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Form Content */}
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div 
          className={`min-h-[500px] transition-opacity duration-150 ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {renderStep()}
        </div>

        {/* Submit Error */}
        {submitError && (
          <div className="mt-6 p-4 bg-red-50 border-2 border-red-200 rounded-xl">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-red-700 mb-1">Fehler beim Senden</p>
                <p className="text-sm text-red-600">{submitError}</p>
                <p className="text-sm text-red-600 mt-2">
                  Alternativ können Sie uns direkt kontaktieren: {' '}
                  <a href="tel:+4917679567083" className="underline font-semibold">
                    +49 176 79567083
                  </a>
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 mt-8 pt-8 border-t border-neutral-200">
          {currentStep > 1 ? (
            <Button
              type="button"
              variant="ghost"
              size="lg"
              onClick={handleBack}
              disabled={isSubmitting || isTransitioning}
              className="w-full sm:w-auto order-2 sm:order-1"
              icon={<ArrowLeft className="w-5 h-5" />}
              iconPosition="left"
            >
              Zurück
            </Button>
          ) : (
            <div className="hidden sm:block" />
          )}

          {currentStep < TOTAL_STEPS ? (
            <Button
              type="button"
              variant="primary"
              size="lg"
              onClick={handleNext}
              disabled={isTransitioning}
              className="w-full sm:w-auto sm:ml-auto order-1 sm:order-2"
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
              className="w-full sm:w-auto sm:ml-auto order-1 sm:order-2"
              icon={!isSubmitting ? <ArrowRight className="w-5 h-5" /> : undefined}
              iconPosition="right"
            >
              {isSubmitting ? 'Wird gesendet...' : 'Angebot anfordern'}
            </Button>
          )}
        </div>
        
        {/* Keyboard hint */}
        {currentStep < TOTAL_STEPS && (
          <p className="text-center text-xs text-neutral-400 mt-4 hidden sm:block">
            Tipp: Drücken Sie Enter, um zum nächsten Schritt zu gelangen
          </p>
        )}
      </form>
    </div>
  )
}
