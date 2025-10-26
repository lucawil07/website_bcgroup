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
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <div className="inline-block text-secondary font-bold text-xs uppercase tracking-widest bg-secondary/10 px-4 py-2 rounded-full">
          Schritt 5 von 8
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-primary">
          👉 Demontage erforderlich?
        </h2>
        <p className="text-neutral-600">Müssen Möbel oder Einbauten demontiert werden?</p>
      </div>

      <div className="flex items-center justify-center gap-3 mb-8">
        <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center">
          <Wrench className="w-8 h-8 text-secondary" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
        <button
          type="button"
          onClick={() => setValue('needsDismantling', true)}
          className={`p-8 rounded-2xl border-2 transition-all ${
            needsDismantling === true
              ? 'border-secondary bg-secondary/5 shadow-lg scale-105'
              : 'border-neutral-200 hover:border-secondary/50'
          }`}
        >
          <div className="text-6xl mb-4">✓</div>
          <h3 className={`text-2xl font-bold ${needsDismantling === true ? 'text-secondary' : 'text-primary'}`}>
            Ja
          </h3>
          <p className="text-sm text-neutral-600 mt-2">
            Möbel oder Einbauten müssen demontiert werden
          </p>
        </button>

        <button
          type="button"
          onClick={() => setValue('needsDismantling', false)}
          className={`p-8 rounded-2xl border-2 transition-all ${
            needsDismantling === false
              ? 'border-secondary bg-secondary/5 shadow-lg scale-105'
              : 'border-neutral-200 hover:border-secondary/50'
          }`}
        >
          <div className="text-6xl mb-4">✗</div>
          <h3 className={`text-2xl font-bold ${needsDismantling === false ? 'text-secondary' : 'text-primary'}`}>
            Nein
          </h3>
          <p className="text-sm text-neutral-600 mt-2">
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
            className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-secondary focus:outline-none resize-none"
          />
          <p className="text-xs text-neutral-500">
            Je genauer Ihre Beschreibung, desto besser können wir Ihr Angebot kalkulieren.
          </p>
        </div>
      )}
    </div>
  )
}
