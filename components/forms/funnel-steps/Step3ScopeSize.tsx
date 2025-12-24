'use client'

import { UseFormReturn } from 'react-hook-form'
import { Maximize2, AlertCircle } from 'lucide-react'
import type { EntruempelungFormData } from '../funnel-types'

interface Step3Props {
  form: UseFormReturn<EntruempelungFormData>
}

const fullnessLevels = [
  { value: 'wenig', label: 'Wenig', description: 'Vereinzelt Möbel/Kisten', color: 'from-green-500 to-emerald-500', emoji: '🟢' },
  { value: 'mittel', label: 'Mittel', description: 'Deutlich gefüllt, aber überschaubar', color: 'from-yellow-500 to-amber-500', emoji: '🟡' },
  { value: 'viel', label: 'Viel', description: 'Jeder Raum vollgestellt', color: 'from-orange-500 to-red-500', emoji: '🟠' },
  { value: 'extrem', label: 'Extrem', description: 'Messie-Wohnung / sehr hoher Aufwand', color: 'from-red-500 to-rose-700', emoji: '🔴' },
]

// Preset area options for quick selection
const areaPresets = [
  { value: 20, label: '~20 m²', description: 'Kleiner Raum' },
  { value: 50, label: '~50 m²', description: '1-2 Zimmer' },
  { value: 80, label: '~80 m²', description: '2-3 Zimmer' },
  { value: 120, label: '~120 m²', description: 'Große Wohnung' },
  { value: 200, label: '~200 m²', description: 'Haus' },
]

export default function Step3ScopeSize({ form }: Step3Props) {
  const { watch, setValue, register, formState: { errors } } = form
  const area = watch('area') || 0
  const fullness = watch('fullness')

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="text-center space-y-3 sm:space-y-4">
        <div className="inline-block text-emerald-600 font-bold text-xs uppercase tracking-widest bg-emerald-100 px-4 py-2 rounded-full">
          Schritt 3 von 8
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-neutral-800">
          👉 Wie groß ist der Bereich?
        </h2>
        <p className="text-neutral-600 text-sm sm:text-base">Geben Sie die ungefähre Fläche und Füllmenge an</p>
      </div>

      {/* Area Input */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
            <Maximize2 className="w-5 h-5 text-emerald-600" />
          </div>
          <label className="text-base sm:text-lg font-bold text-neutral-800">
            Fläche (ca. in m²)
          </label>
        </div>

        {/* Quick Select Presets */}
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-4">
          {areaPresets.map((preset) => (
            <button
              key={preset.value}
              type="button"
              onClick={() => setValue('area', preset.value)}
              className={`p-2 sm:p-3 rounded-xl border-2 text-center transition-all ${
                area === preset.value
                  ? 'border-emerald-500 bg-emerald-50 shadow-md shadow-emerald-500/20'
                  : 'border-neutral-200 hover:border-emerald-300 bg-white'
              }`}
            >
              <div className={`text-base sm:text-lg font-bold ${area === preset.value ? 'text-emerald-700' : 'text-neutral-800'}`}>
                {preset.label}
              </div>
              <div className="text-xs text-neutral-500 hidden sm:block">{preset.description}</div>
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {/* Slider with better touch target */}
          <div className="py-2">
            <input
              type="range"
              min="0"
              max="500"
              step="5"
              value={area > 500 ? 500 : area}
              onChange={(e) => setValue('area', parseInt(e.target.value))}
              className="w-full h-4 bg-neutral-200 rounded-full appearance-none cursor-pointer touch-pan-y"
              style={{
                background: `linear-gradient(to right, #10b981 0%, #10b981 ${Math.min((area / 500) * 100, 100)}%, #e5e7eb ${Math.min((area / 500) * 100, 100)}%, #e5e7eb 100%)`
              }}
            />
            <div className="flex justify-between text-xs text-neutral-500 mt-1 px-1">
              <span>0 m²</span>
              <span>250 m²</span>
              <span>500+ m²</span>
            </div>
          </div>

          {/* Value Display & Manual Input */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex-1">
              <div className="text-center p-3 sm:p-4 bg-emerald-50 rounded-xl border-2 border-emerald-200">
                <div className="text-3xl sm:text-4xl font-black text-emerald-600">{area}</div>
                <div className="text-xs sm:text-sm text-neutral-600 uppercase tracking-wide">Quadratmeter</div>
              </div>
            </div>
            <div className="flex-1">
              <label className="text-xs text-neutral-500 mb-1 block">Oder direkt eingeben:</label>
              <input
                type="number"
                {...register('area', { valueAsNumber: true })}
                placeholder="z.B. 75"
                className={`w-full px-3 sm:px-4 py-3 rounded-xl border-2 focus:outline-none text-center font-bold text-lg sm:text-xl ${
                  errors.area ? 'border-red-300 focus:border-red-500' : 'border-neutral-200 focus:border-emerald-500'
                }`}
                min="0"
                max="9999"
              />
            </div>
          </div>
        </div>

        {area > 500 && (
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 sm:p-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <p className="text-sm text-blue-800">
              <strong>Große Fläche erkannt!</strong> Bei Flächen über 500 m² erstellen wir Ihnen gerne ein individuelles Angebot. 
              Nutzen Sie das Textfeld am Ende für weitere Details.
            </p>
          </div>
        )}
      </div>

      {/* Fullness Level */}
      <div className="space-y-4">
        <label className="text-base sm:text-lg font-bold text-neutral-800">
          Wie voll ist der Bereich?
        </label>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {fullnessLevels.map((level) => (
            <button
              key={level.value}
              type="button"
              onClick={() => setValue('fullness', level.value)}
              className={`p-4 sm:p-6 rounded-2xl border-2 text-left transition-all ${
                fullness === level.value
                  ? 'border-emerald-500 bg-emerald-50 shadow-lg shadow-emerald-500/20 scale-[1.02]'
                  : 'border-neutral-200 hover:border-emerald-300 bg-white'
              }`}
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-2">
                <span className="text-xl sm:text-2xl">{level.emoji}</span>
                <h3 className={`text-lg sm:text-xl font-bold ${fullness === level.value ? 'text-emerald-700' : 'text-neutral-800'}`}>
                  {level.label}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600">{level.description}</p>
            </button>
          ))}
        </div>
        {errors.fullness && (
          <p className="text-sm text-red-600">{errors.fullness.message as string}</p>
        )}
      </div>
    </div>
  )
}
