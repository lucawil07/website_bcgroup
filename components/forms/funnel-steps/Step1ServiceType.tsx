'use client'

import { UseFormReturn } from 'react-hook-form'
import { Home, Building2, Warehouse, Car, Briefcase, HelpCircle } from 'lucide-react'
import type { EntruempelungFormData } from '../funnel-types'

interface Step1Props {
  form: UseFormReturn<EntruempelungFormData>
}

const serviceTypes = [
  { value: 'wohnung', label: 'Wohnung', icon: Home, color: 'from-blue-500 to-cyan-500' },
  { value: 'haus', label: 'Haus', icon: Building2, color: 'from-emerald-500 to-green-500' },
  { value: 'keller', label: 'Keller', icon: Warehouse, color: 'from-purple-500 to-indigo-500' },
  { value: 'garage', label: 'Garage', icon: Car, color: 'from-orange-500 to-amber-500' },
  { value: 'gewerbe', label: 'Gewerbefläche / Büro', icon: Briefcase, color: 'from-rose-500 to-pink-500' },
  { value: 'andere', label: 'Andere', icon: HelpCircle, color: 'from-neutral-500 to-neutral-600' },
]

export default function Step1ServiceType({ form }: Step1Props) {
  const { watch, setValue } = form
  const selectedType = watch('serviceType')

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="text-center space-y-3 sm:space-y-4">
        <div className="inline-block text-emerald-600 font-bold text-xs uppercase tracking-widest bg-emerald-100 px-4 py-2 rounded-full">
          Schritt 1 von 8
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-neutral-800">
          👉 Worum geht es bei Ihrem Auftrag?
        </h2>
        <p className="text-neutral-600 text-sm sm:text-base">Wählen Sie die Art der Entrümpelung</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {serviceTypes.map((type) => {
          const Icon = type.icon
          const isSelected = selectedType === type.value
          
          return (
            <button
              key={type.value}
              type="button"
              onClick={() => setValue('serviceType', type.value)}
              className={`group relative p-4 sm:p-6 rounded-2xl border-3 transition-all duration-300 text-left ${
                isSelected
                  ? 'border-emerald-500 bg-emerald-50 shadow-lg shadow-emerald-500/20 scale-[1.02]'
                  : 'border-neutral-200 hover:border-emerald-300 hover:shadow-md bg-white'
              }`}
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${type.color} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}>
                <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={2.5} />
              </div>
              <h3 className={`text-base sm:text-lg font-bold mb-1 ${
                isSelected ? 'text-emerald-700' : 'text-neutral-800'
              }`}>
                {type.label}
              </h3>
              {isSelected && (
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </button>
          )
        })}
      </div>

      {selectedType === 'andere' && (
        <div className="animate-slide-in-up">
          <label className="block text-sm font-semibold text-neutral-700 mb-2">
            Bitte beschreiben Sie kurz, um welche Art von Entrümpelung es sich handelt
          </label>
          <input
            type="text"
            {...form.register('serviceTypeOther')}
            placeholder="z.B. Dachboden, Gartenhaus, Lagerhalle..."
            className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-secondary focus:outline-none transition-colors"
          />
        </div>
      )}
    </div>
  )
}
