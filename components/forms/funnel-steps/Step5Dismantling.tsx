'use client'

import { UseFormReturn } from 'react-hook-form'
import { Wrench } from 'lucide-react'
import type { EntruempelungFormData } from '../funnel-types'

interface Step5Props {
  form: UseFormReturn<EntruempelungFormData>
}

export default function Step5Dismantling({ form }: Step5Props) {
  const { watch, setValue, register } = form
  const needsDismantling = watch('needsDismantling')

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="text-center space-y-3 sm:space-y-4">
        <div className="inline-block text-emerald-600 font-bold text-xs uppercase tracking-widest bg-emerald-100 px-4 py-2 rounded-full">
          Schritt 5 von 8
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-neutral-800">
          👉 Demontage erforderlich?
        </h2>
        <p className="text-neutral-600 text-sm sm:text-base">Müssen Möbel oder Einbauten demontiert werden?</p>
      </div>

      <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-emerald-100 flex items-center justify-center">
          <Wrench className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-600" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl mx-auto">
        <button
          type="button"
          onClick={() => setValue('needsDismantling', true)}
          className={`p-6 sm:p-8 rounded-2xl border-2 transition-all ${
            needsDismantling === true
              ? 'border-emerald-500 bg-emerald-50 shadow-lg shadow-emerald-500/20 scale-[1.02]'
              : 'border-neutral-200 hover:border-emerald-300 bg-white'
          }`}
        >
          <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">✓</div>
          <h3 className={`text-xl sm:text-2xl font-bold ${needsDismantling === true ? 'text-emerald-700' : 'text-neutral-800'}`}>
            Ja
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 mt-2">
            Möbel oder Einbauten müssen demontiert werden
          </p>
        </button>

        <button
          type="button"
          onClick={() => setValue('needsDismantling', false)}
          className={`p-6 sm:p-8 rounded-2xl border-2 transition-all ${
            needsDismantling === false && needsDismantling !== null
              ? 'border-emerald-500 bg-emerald-50 shadow-lg shadow-emerald-500/20 scale-[1.02]'
              : 'border-neutral-200 hover:border-emerald-300 bg-white'
          }`}
        >
          <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">✗</div>
          <h3 className={`text-xl sm:text-2xl font-bold ${needsDismantling === false && needsDismantling !== null ? 'text-emerald-700' : 'text-neutral-800'}`}>
            Nein
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 mt-2">
            Keine Demontage erforderlich
          </p>
        </button>
      </div>

      {needsDismantling === true && (
        <div className="animate-slide-in-up max-w-2xl mx-auto space-y-3">
          <label className="block text-sm font-semibold text-neutral-700">
            Bitte beschreiben Sie kurz, welche Möbel oder Einbauten demontiert werden sollen
          </label>
          <textarea
            {...register('dismantlingDetails')}
            placeholder="z.B. Einbauküche, große Schränke, Regalsysteme, Einbaumöbel..."
            rows={4}
            className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-emerald-500 focus:outline-none resize-none text-neutral-800"
          />
          <p className="text-xs text-neutral-500">
            Je genauer Ihre Beschreibung, desto besser können wir Ihr Angebot kalkulieren.
          </p>
        </div>
      )}
    </div>
  )
}
