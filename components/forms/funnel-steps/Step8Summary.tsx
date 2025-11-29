'use client'

import { UseFormReturn } from 'react-hook-form'
import { User, Mail, Phone, MapPin, CheckCircle2, Edit2 } from 'lucide-react'
import type { EntruempelungFormData } from '../funnel-types'

interface Step8Props {
  form: UseFormReturn<EntruempelungFormData>
  onEditStep: (step: number) => void
}

export default function Step8Summary({ form, onEditStep }: Step8Props) {
  const { register, watch } = form
  const formData = watch()

  const serviceTypeLabels: Record<string, string> = {
    wohnung: 'Wohnung',
    haus: 'Haus',
    keller: 'Keller',
    garage: 'Garage',
    gewerbe: 'Gewerbefläche / Büro',
    andere: formData.serviceTypeOther || 'Andere',
  }

  const fullnessLabels: Record<string, string> = {
    wenig: 'Wenig',
    mittel: 'Mittel',
    viel: 'Viel',
    extrem: 'Extrem (Messie)',
  }

  const timingLabels: Record<string, string> = {
    asap: 'Heute oder morgen (Express)',
    '1-2weeks': 'In den nächsten 1–2 Wochen',
    '1-2months': 'In den nächsten 1–2 Monaten',
    flexible: 'Flexibel / nach Absprache',
  }

  const summaryItems = [
    { label: 'Art der Entrümpelung', value: serviceTypeLabels[formData.serviceType] || '—', step: 1 },
    { label: 'Etage', value: formData.floor === '3+' ? '3. Stock oder höher' : `${formData.floor === 'keller' ? 'Keller' : formData.floor === 'erdgeschoss' ? 'Erdgeschoss' : formData.floor + '. Stock'}`, step: 2 },
    { label: 'Fahrstuhl', value: formData.hasElevator ? '✓ Ja' : '✗ Nein', step: 2 },
    { label: 'Parkplatz-Entfernung', value: formData.parkingDistance?.replace('-', '–') + ' m', step: 2 },
    { label: 'Fläche', value: `${formData.area || 0} m²`, step: 3 },
    { label: 'Füllmenge', value: fullnessLabels[formData.fullness] || '—', step: 3 },
    { label: 'Besondere Inhalte', value: (formData.specialItems && formData.specialItems.length > 0) ? `${formData.specialItems.length} ausgewählt` : 'Keine', step: 4 },
    { label: 'Demontage', value: formData.needsDismantling ? '✓ Erforderlich' : '✗ Nicht erforderlich', step: 5 },
    { label: 'Zeitraum', value: timingLabels[formData.timing] || '—', step: 6 },
    { label: 'Fotos', value: (formData.photos && formData.photos.length > 0) ? `${formData.photos.length} hochgeladen` : 'Keine', step: 6 },
  ]

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="text-center space-y-3 sm:space-y-4">
        <div className="inline-block text-emerald-600 font-bold text-xs uppercase tracking-widest bg-emerald-100 px-4 py-2 rounded-full">
          Schritt 8 von 8
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-neutral-800">
          👉 Fast geschafft!
        </h2>
        <p className="text-neutral-600 text-sm sm:text-base">Bitte prüfen Sie Ihre Angaben und geben Sie Ihre Kontaktdaten ein</p>
      </div>

      {/* Summary Box */}
      <div className="bg-emerald-50 rounded-2xl p-4 sm:p-6 border-2 border-emerald-200">
        <h3 className="text-lg sm:text-xl font-bold text-neutral-800 mb-4 sm:mb-6 flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
          Ihre Angaben im Überblick
        </h3>
        <div className="space-y-2 sm:space-y-3">
          {summaryItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 sm:p-4 bg-white rounded-xl hover:shadow-md transition-all group"
            >
              <div className="flex-1 min-w-0">
                <div className="text-xs sm:text-sm text-neutral-500 mb-1">{item.label}</div>
                <div className="font-bold text-neutral-800 text-sm sm:text-base truncate">{item.value}</div>
              </div>
              <button
                type="button"
                onClick={() => onEditStep(item.step)}
                className="opacity-0 group-hover:opacity-100 transition-opacity px-2 sm:px-3 py-2 rounded-lg hover:bg-emerald-100 text-emerald-600 inline-flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-semibold ml-2 shrink-0"
              >
                <Edit2 className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Bearbeiten</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Information */}
      <div className="space-y-5 sm:space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
            <User className="w-5 h-5 text-emerald-600" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-neutral-800">
            Ihre Kontaktdaten
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-neutral-700">
              Name *
            </label>
            <input
              type="text"
              {...register('name', { required: true })}
              placeholder="Vor- und Nachname"
              className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-emerald-500 focus:outline-none text-neutral-800"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-neutral-700">
              Telefonnummer *
            </label>
            <input
              type="tel"
              {...register('phone', { required: true })}
              placeholder="+49 176 63213253"
              className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-emerald-500 focus:outline-none text-neutral-800"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-neutral-700">
            E-Mail *
          </label>
          <input
            type="email"
            {...register('email', { required: true })}
            placeholder="ihre.email@beispiel.de"
            className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-emerald-500 focus:outline-none text-neutral-800"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-neutral-700">
            Adresse / PLZ (Kontaktadresse) *
          </label>
          <input
            type="text"
            {...register('address', { required: true })}
            placeholder="Straße, Hausnummer"
            className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-emerald-500 focus:outline-none text-neutral-800 mb-3"
          />
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              {...register('postalCode', { required: true })}
              placeholder="PLZ"
              className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-emerald-500 focus:outline-none text-neutral-800"
            />
            <input
              type="text"
              {...register('city', { required: true })}
              placeholder="Ort"
              className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-emerald-500 focus:outline-none text-neutral-800"
            />
          </div>
        </div>
      </div>

      {/* Privacy Policy */}
      <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-4 sm:p-6">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            {...register('privacyAccepted', { required: true })}
            className="w-5 h-5 text-emerald-500 rounded focus:ring-emerald-500 mt-0.5 shrink-0 accent-emerald-500"
          />
          <span className="text-sm text-neutral-700">
            Ich habe die <a href="/datenschutz" target="_blank" className="underline font-semibold text-emerald-600 hover:text-emerald-700">Datenschutzerklärung</a> zur Kenntnis genommen und stimme der Verarbeitung meiner Daten zu. Ich kann meine Einwilligung jederzeit widerrufen. *
          </span>
        </label>
      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4">
        <div className="text-center p-3 sm:p-4 bg-white rounded-xl border border-neutral-200">
          <div className="text-xl sm:text-2xl mb-1 sm:mb-2">🔒</div>
          <div className="text-[10px] sm:text-xs font-semibold text-neutral-700">Sichere Übertragung</div>
        </div>
        <div className="text-center p-3 sm:p-4 bg-white rounded-xl border border-neutral-200">
          <div className="text-xl sm:text-2xl mb-1 sm:mb-2">💰</div>
          <div className="text-[10px] sm:text-xs font-semibold text-neutral-700">Kostenlos & unverbindlich</div>
        </div>
        <div className="text-center p-3 sm:p-4 bg-white rounded-xl border border-neutral-200">
          <div className="text-xl sm:text-2xl mb-1 sm:mb-2">⚡</div>
          <div className="text-[10px] sm:text-xs font-semibold text-neutral-700">Antwort in 2h</div>
        </div>
      </div>
    </div>
  )
}
