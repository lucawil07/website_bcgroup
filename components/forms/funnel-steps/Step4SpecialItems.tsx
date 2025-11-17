'use client'

import { UseFormReturn } from 'react-hook-form'
import { Monitor, Hammer, Droplet, Package, HelpCircle, AlertTriangle, Biohazard, Skull } from 'lucide-react'
import type { EntruempelungFormData } from '../funnel-types'

interface Step4Props {
  form: UseFormReturn<EntruempelungFormData>
}

const specialItems = [
  { value: 'elektrogeraete', label: 'Elektrogeräte / Großgeräte', icon: Monitor },
  { value: 'bauschutt', label: 'Bauschutt / Renovierungsreste', icon: Hammer },
  { value: 'chemikalien', label: 'Farben, Lacke, Chemikalien', icon: Droplet },
  { value: 'sonstiges', label: 'Sonstiges', icon: HelpCircle },
]

const sondermuellOptions = [
  { value: 'biologisch', label: 'Biologischer Abfall', icon: Biohazard },
  { value: 'infektioes', label: 'Infektiöser Abfall', icon: AlertTriangle },
  { value: 'giftig', label: 'Giftige Stoffe', icon: Skull },
]

export default function Step4SpecialItems({ form }: Step4Props) {
  const { watch, setValue } = form
  const selectedItems = watch('specialItems') || []
  const hasSondermuell = watch('hasSondermuell')
  const sondermuellTypes = watch('sondermuellTypes') || []
  const otherItems = watch('specialItemsOther')

  const toggleItem = (value: string) => {
    const current = selectedItems
    if (current.includes(value)) {
      setValue('specialItems', current.filter((item: string) => item !== value))
    } else {
      setValue('specialItems', [...current, value])
    }
  }

  const toggleSondermuellType = (value: string) => {
    const current = sondermuellTypes
    if (current.includes(value)) {
      setValue('sondermuellTypes', current.filter((item: string) => item !== value))
    } else {
      setValue('sondermuellTypes', [...current, value])
    }
  }

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <div className="inline-block text-secondary font-bold text-xs uppercase tracking-widest bg-secondary/10 px-4 py-2 rounded-full">
          Schritt 4 von 8
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-primary">
          👉 Besondere Inhalte?
        </h2>
        <p className="text-neutral-600">Mehrfachauswahl möglich – wählen Sie alles Zutreffende</p>
      </div>

      <div className="space-y-3">
        {specialItems.map((item) => {
          const Icon = item.icon
          const isSelected = selectedItems.includes(item.value)

          return (
            <button
              key={item.value}
              type="button"
              onClick={() => toggleItem(item.value)}
              className={`w-full p-6 rounded-2xl border-2 transition-all text-left flex items-center gap-4 ${
                isSelected
                  ? 'border-secondary bg-secondary/5 shadow-md'
                  : 'border-neutral-200 hover:border-secondary/50'
              }`}
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${
                isSelected ? 'bg-secondary' : 'bg-neutral-100'
              }`}>
                <Icon className={`w-7 h-7 ${isSelected ? 'text-white' : 'text-neutral-600'}`} strokeWidth={2} />
              </div>
              
              <div className="flex-1">
                <h3 className={`text-lg font-bold ${isSelected ? 'text-secondary' : 'text-primary'}`}>
                  {item.label}
                </h3>
              </div>

              <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                isSelected
                  ? 'border-secondary bg-secondary'
                  : 'border-neutral-300'
              }`}>
                {isSelected && (
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
            </button>
          )
        })}
      </div>

      {/* Sondermüll Question */}
      <div className="space-y-4 pt-4 border-t-2 border-neutral-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-red-500" />
          </div>
          <label className="text-lg font-bold text-primary">
            Ist Sondermüll enthalten?
          </label>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => {
              setValue('hasSondermuell', true)
            }}
            className={`px-6 py-4 rounded-xl border-2 font-semibold transition-all ${
              hasSondermuell === true
                ? 'border-red-500 bg-red-500 text-white'
                : 'border-neutral-200 text-neutral-700 hover:border-red-500/50'
            }`}
          >
            ✓ Ja
          </button>
          <button
            type="button"
            onClick={() => {
              setValue('hasSondermuell', false)
              setValue('sondermuellTypes', [])
            }}
            className={`px-6 py-4 rounded-xl border-2 font-semibold transition-all ${
              hasSondermuell === false
                ? 'border-secondary bg-secondary text-white'
                : 'border-neutral-200 text-neutral-700 hover:border-secondary/50'
            }`}
          >
            ✗ Nein
          </button>
        </div>
      </div>

      {/* Sondermüll Types (only if hasSondermuell is true) */}
      {hasSondermuell === true && (
        <div className="animate-slide-in-up space-y-4">
          <label className="block text-sm font-semibold text-neutral-700">
            Welche Art von Sondermüll?
          </label>
          <div className="space-y-3">
            {sondermuellOptions.map((option) => {
              const Icon = option.icon
              const isSelected = sondermuellTypes.includes(option.value)

              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => toggleSondermuellType(option.value)}
                  className={`w-full p-4 rounded-xl border-2 transition-all text-left flex items-center gap-3 ${
                    isSelected
                      ? 'border-red-500 bg-red-500/5 shadow-md'
                      : 'border-neutral-200 hover:border-red-500/50'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    isSelected ? 'bg-red-500' : 'bg-neutral-100'
                  }`}>
                    <Icon className={`w-6 h-6 ${isSelected ? 'text-white' : 'text-neutral-600'}`} strokeWidth={2} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className={`text-base font-bold ${isSelected ? 'text-red-500' : 'text-primary'}`}>
                      {option.label}
                    </h3>
                  </div>

                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                    isSelected
                      ? 'border-red-500 bg-red-500'
                      : 'border-neutral-300'
                  }`}>
                    {isSelected && (
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      )}

      {selectedItems.includes('sonstiges') && (
        <div className="animate-slide-in-up space-y-3">
          <label className="block text-sm font-semibold text-neutral-700">
            Bitte beschreiben Sie die sonstigen Inhalte
          </label>
          <textarea
            {...form.register('specialItemsOther')}
            placeholder="z.B. alte Möbel, Matratzen, Sperrmüll, Gartenabfälle..."
            rows={3}
            className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-secondary focus:outline-none resize-none"
          />
        </div>
      )}

      {selectedItems.length === 0 && (
        <div className="text-center py-4">
          <p className="text-neutral-500 text-sm">
            Keine besonderen Inhalte? Dann können Sie direkt fortfahren.
          </p>
        </div>
      )}
    </div>
  )
}
