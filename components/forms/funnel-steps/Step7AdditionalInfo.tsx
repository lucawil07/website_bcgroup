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
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <div className="inline-block text-secondary font-bold text-xs uppercase tracking-widest bg-secondary/10 px-4 py-2 rounded-full">
          Schritt 7 von 8
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-primary">
          👉 Weitere Informationen
        </h2>
        <p className="text-neutral-600">Teilen Sie uns alles mit, was wichtig sein könnte</p>
      </div>

      {/* Additional Notes */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
            <MessageSquare className="w-5 h-5 text-secondary" />
          </div>
          <label className="text-lg font-bold text-primary">
            Möchten Sie uns noch etwas mitteilen?
          </label>
        </div>
        <textarea
          {...register('additionalNotes')}
          placeholder="Tragen Sie hier bitte alles ein, was wichtig sein könnte (z.B. Fläche größer als 1000 m², schwieriger Zugang, Sonderwünsche, Zeitfenster, besondere Umstände...)"
          rows={6}
          className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-secondary focus:outline-none resize-none"
        />
        <p className="text-xs text-neutral-500">
          Je mehr Details Sie uns geben, desto genauer können wir Ihr Angebot erstellen.
        </p>
      </div>

      {/* Separate Object Address */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
            <MapPin className="w-5 h-5 text-accent" />
          </div>
          <label className="text-lg font-bold text-primary">
            Wo befindet sich das Objekt?
          </label>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <p className="text-sm text-blue-800">
            <strong>Hinweis:</strong> Falls die Objektadresse von Ihrer Kontaktadresse abweicht, können Sie sie im nächsten Schritt separat angeben.
          </p>
        </div>

        <label className="flex items-center gap-3 p-4 rounded-xl border-2 border-neutral-200 hover:border-secondary/50 cursor-pointer transition-all">
          <input
            type="checkbox"
            {...register('hasSeparateObjectAddress')}
            className="w-5 h-5 text-secondary rounded focus:ring-secondary"
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
              className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-secondary focus:outline-none"
            />
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                {...register('objectPostalCode')}
                placeholder="PLZ"
                className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-secondary focus:outline-none"
              />
              <input
                type="text"
                {...register('objectCity')}
                placeholder="Ort"
                className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-secondary focus:outline-none"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
