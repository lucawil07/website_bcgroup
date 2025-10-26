'use client'

import { UseFormReturn } from 'react-hook-form'
import { Maximize2, AlertCircle } from 'lucide-react'
import type { EntruempelungFormData } from '../funnel-types'

interface Step3Props {
  form: UseFormReturn<EntruempelungFormData>
}

const fullnessLevels = [
  { value: 'wenig', label: 'Wenig', description: 'Vereinzelt Möbel/Kisten', color: 'from-green-500 to-emerald-500' },
  { value: 'mittel', label: 'Mittel', description: 'Deutlich gefüllt, aber überschaubar', color: 'from-yellow-500 to-amber-500' },
  { value: 'viel', label: 'Viel', description: 'Jeder Raum vollgestellt', color: 'from-orange-500 to-red-500' },
  { value: 'extrem', label: 'Extrem', description: 'Messie-Wohnung / sehr hoher Aufwand', color: 'from-red-500 to-rose-700' },
]

export default function Step3ScopeSize({ form }: Step3Props) {
  const { watch, setValue, register } = form
  const area = watch('area') || 0
  const fullness = watch('fullness')

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <div className="inline-block text-secondary font-bold text-xs uppercase tracking-widest bg-secondary/10 px-4 py-2 rounded-full">
          Schritt 3 von 8
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-primary">
          👉 Wie groß ist der Bereich?
        </h2>
        <p className="text-neutral-600">Geben Sie die ungefähre Fläche und Füllmenge an</p>
      </div>

      {/* Area Input */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
            <Maximize2 className="w-5 h-5 text-secondary" />
          </div>
          <label className="text-lg font-bold text-primary">
            Fläche (ca. in m²)
          </label>
        </div>

        <div className="space-y-4">
          {/* Slider */}
          <input
            type="range"
            min="0"
            max="1000"
            step="10"
            value={area}
            onChange={(e) => setValue('area', parseInt(e.target.value))}
            className="w-full h-3 bg-neutral-200 rounded-full appearance-none cursor-pointer slider-thumb"
            style={{
              background: `linear-gradient(to right, #0066CC 0%, #0066CC ${(area / 1000) * 100}%, #e5e7eb ${(area / 1000) * 100}%, #e5e7eb 100%)`
            }}
          />

          {/* Value Display & Manual Input */}
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="text-center p-4 bg-secondary/5 rounded-xl border-2 border-secondary/20">
                <div className="text-4xl font-black text-secondary">{area}</div>
                <div className="text-sm text-neutral-600 uppercase tracking-wide">Quadratmeter</div>
              </div>
            </div>
            <div className="flex-1">
              <input
                type="number"
                {...register('area', { valueAsNumber: true })}
                placeholder="Direkte Eingabe"
                className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-secondary focus:outline-none text-center font-bold text-xl"
                min="0"
                max="9999"
              />
            </div>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800">
            <strong>Hinweis:</strong> Falls es mehr als 1000 m² sind, geben Sie dies bitte im Textfeld am Ende an oder kontaktieren Sie uns direkt per E-Mail.
          </p>
        </div>
      </div>

      {/* Fullness Level */}
      <div className="space-y-4">
        <label className="text-lg font-bold text-primary">
          Wie voll ist der Bereich?
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {fullnessLevels.map((level) => (
            <button
              key={level.value}
              type="button"
              onClick={() => setValue('fullness', level.value)}
              className={`p-6 rounded-2xl border-2 text-left transition-all ${
                fullness === level.value
                  ? 'border-secondary bg-secondary/5 shadow-lg scale-105'
                  : 'border-neutral-200 hover:border-secondary/50'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${level.color} mb-3`} />
              <h3 className={`text-xl font-bold mb-1 ${fullness === level.value ? 'text-secondary' : 'text-primary'}`}>
                {level.label}
              </h3>
              <p className="text-sm text-neutral-600">{level.description}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
