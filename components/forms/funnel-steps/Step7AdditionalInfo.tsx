'use client'

import { UseFormReturn } from 'react-hook-form'
import { MessageSquare, MapPin } from 'lucide-react'
import type { EntruempelungFormData } from '../funnel-types'

interface Step7Props {
  form: UseFormReturn<EntruempelungFormData>
}

export default function Step7AdditionalInfo({ form }: Step7Props) {
  const { register, watch } = form
  const hasSeparateObjectAddress = watch('hasSeparateObjectAddress')

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="text-center space-y-3 sm:space-y-4">
        <div className="inline-block text-emerald-600 font-bold text-xs uppercase tracking-widest bg-emerald-100 px-4 py-2 rounded-full">
          Schritt 7 von 8
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-neutral-800">
          👉 Weitere Informationen
        </h2>
        <p className="text-neutral-600 text-sm sm:text-base">Teilen Sie uns alles mit, was wichtig sein könnte</p>
      </div>

      {/* Additional Notes */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
            <MessageSquare className="w-5 h-5 text-emerald-600" />
          </div>
          <label className="text-base sm:text-lg font-bold text-neutral-800">
            Möchten Sie uns noch etwas mitteilen?
          </label>
        </div>
        <textarea
          {...register('additionalNotes')}
          placeholder="Tragen Sie hier bitte alles ein, was wichtig sein könnte (z.B. Fläche größer als 1000 m², schwieriger Zugang, Sonderwünsche, Zeitfenster, besondere Umstände...)"
          rows={5}
          className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-emerald-500 focus:outline-none resize-none text-neutral-800 text-sm sm:text-base"
        />
        <p className="text-xs text-neutral-500">
          Je mehr Details Sie uns geben, desto genauer können wir Ihr Angebot erstellen.
        </p>
      </div>

      {/* Separate Object Address */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
            <MapPin className="w-5 h-5 text-emerald-600" />
          </div>
          <label className="text-base sm:text-lg font-bold text-neutral-800">
            Wo befindet sich das Objekt?
          </label>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 sm:p-4">
          <p className="text-sm text-blue-800">
            <strong>Hinweis:</strong> Falls die Objektadresse von Ihrer Kontaktadresse abweicht, können Sie sie im nächsten Schritt separat angeben.
          </p>
        </div>

        <label className="flex items-center gap-3 p-4 rounded-xl border-2 border-neutral-200 hover:border-emerald-300 cursor-pointer transition-all bg-white">
          <input
            type="checkbox"
            {...register('hasSeparateObjectAddress')}
            className="w-5 h-5 text-emerald-500 rounded focus:ring-emerald-500 accent-emerald-500"
          />
          <span className="text-sm font-medium text-neutral-700">
            Die Objektadresse ist anders als meine Kontaktadresse
          </span>
        </label>

        {hasSeparateObjectAddress && (
          <div className="animate-slide-in-up space-y-3">
            <label className="block text-sm font-semibold text-neutral-700">
              Objektadresse
            </label>
            <input
              type="text"
              {...register('objectAddress')}
              placeholder="Straße, Hausnummer"
              className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-emerald-500 focus:outline-none text-neutral-800"
            />
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                {...register('objectPostalCode')}
                placeholder="PLZ"
                className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-emerald-500 focus:outline-none text-neutral-800"
              />
              <input
                type="text"
                {...register('objectCity')}
                placeholder="Ort"
                className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-emerald-500 focus:outline-none text-neutral-800"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
