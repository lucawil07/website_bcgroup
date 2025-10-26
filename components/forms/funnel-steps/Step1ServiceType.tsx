'use client'

import { UseFormReturn } from 'react-hook-form'
import { Home, Building2, Warehouse, Car, Briefcase, HelpCircle } from 'lucide-react'
import type { EntruempelungFormData } from '../funnel-types'

interface Step1Props {
  form: UseFormReturn<EntruempelungFormData>
}

const serviceTypes = [
  { value: 'wohnung', label: 'Wohnung', icon: Home, color: 'from-blue-500 to-cyan-500' },
  { value: 'haus', label: 'Haus', icon: Building2, color: 'from-green-500 to-emerald-500' },
  { value: 'keller', label: 'Keller', icon: Warehouse, color: 'from-purple-500 to-indigo-500' },
  { value: 'garage', label: 'Garage', icon: Car, color: 'from-orange-500 to-amber-500' },
  { value: 'gewerbe', label: 'Gewerbefläche / Büro', icon: Briefcase, color: 'from-rose-500 to-pink-500' },
  { value: 'andere', label: 'Andere', icon: HelpCircle, color: 'from-neutral-500 to-neutral-600' },
]

export default function Step1ServiceType({ form }: Step1Props) {
  const { watch, setValue } = form
  const selectedType = watch('serviceType')

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <div className="inline-block text-secondary font-bold text-xs uppercase tracking-widest bg-secondary/10 px-4 py-2 rounded-full">
          Schritt 1 von 8
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-primary">
          👉 Worum geht es bei Ihrem Auftrag?
        </h2>
        <p className="text-neutral-600">Wählen Sie die Art der Entrümpelung</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {serviceTypes.map((type) => {
          const Icon = type.icon
          const isSelected = selectedType === type.value
          
          return (
            <button
              key={type.value}
              type="button"
              onClick={() => setValue('serviceType', type.value)}
              className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                isSelected
                  ? 'border-secondary bg-secondary/5 shadow-lg scale-105'
                  : 'border-neutral-200 hover:border-secondary/50 hover:shadow-md'
              }`}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${type.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Icon className="w-7 h-7 text-white" strokeWidth={2.5} />
              </div>
              <h3 className={`text-lg font-bold mb-1 ${isSelected ? 'text-secondary' : 'text-primary'}`}>
                {type.label}
              </h3>
              {isSelected && (
                <div className="absolute top-4 right-4 w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
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
