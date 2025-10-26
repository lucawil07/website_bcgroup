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
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <div className="inline-block text-secondary font-bold text-xs uppercase tracking-widest bg-secondary/10 px-4 py-2 rounded-full">
          Schritt 8 von 8
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-primary">
          👉 Fast geschafft!
        </h2>
        <p className="text-neutral-600">Bitte prüfen Sie Ihre Angaben und geben Sie Ihre Kontaktdaten ein</p>
      </div>

      {/* Summary Box */}
      <div className="bg-gradient-to-br from-secondary/5 to-accent/5 rounded-2xl p-6 border-2 border-secondary/20">
        <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
          <CheckCircle2 className="w-6 h-6 text-secondary" />
          Ihre Angaben im Überblick
        </h3>
        <div className="space-y-3">
          {summaryItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-white rounded-xl hover:shadow-md transition-all group"
            >
              <div className="flex-1">
                <div className="text-sm text-neutral-600 mb-1">{item.label}</div>
                <div className="font-bold text-primary">{item.value}</div>
              </div>
              <button
                type="button"
                onClick={() => onEditStep(item.step)}
                className="opacity-0 group-hover:opacity-100 transition-opacity px-3 py-2 rounded-lg hover:bg-secondary/10 text-secondary inline-flex items-center gap-2 text-sm font-semibold"
              >
                <Edit2 className="w-4 h-4" />
                <span>Bearbeiten</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Information */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
            <User className="w-5 h-5 text-accent" />
          </div>
          <h3 className="text-2xl font-bold text-primary">
            Ihre Kontaktdaten
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-neutral-700">
              Name *
            </label>
            <input
              type="text"
              {...register('name', { required: true })}
              placeholder="Vor- und Nachname"
              className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-secondary focus:outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-neutral-700">
              Telefonnummer *
            </label>
            <input
              type="tel"
              {...register('phone', { required: true })}
              placeholder="+49 30 123 456"
              className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-secondary focus:outline-none"
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
            className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-secondary focus:outline-none"
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
            className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-secondary focus:outline-none mb-3"
          />
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              {...register('postalCode', { required: true })}
              placeholder="PLZ"
              className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-secondary focus:outline-none"
            />
            <input
              type="text"
              {...register('city', { required: true })}
              placeholder="Ort"
              className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-secondary focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Privacy Policy */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            {...register('privacyAccepted', { required: true })}
            className="w-5 h-5 text-secondary rounded focus:ring-secondary mt-0.5 flex-shrink-0"
          />
          <span className="text-sm text-blue-900">
            Ich habe die <a href="/datenschutz" target="_blank" className="underline font-semibold hover:text-secondary">Datenschutzerklärung</a> zur Kenntnis genommen und stimme der Verarbeitung meiner Daten zu. Ich kann meine Einwilligung jederzeit widerrufen. *
          </span>
        </label>
      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-3 gap-4 pt-4">
        <div className="text-center p-4 bg-white rounded-xl border border-neutral-200">
          <div className="text-2xl mb-2">🔒</div>
          <div className="text-xs font-semibold text-neutral-700">Sichere Übertragung</div>
        </div>
        <div className="text-center p-4 bg-white rounded-xl border border-neutral-200">
          <div className="text-2xl mb-2">💰</div>
          <div className="text-xs font-semibold text-neutral-700">Kostenlos & unverbindlich</div>
        </div>
        <div className="text-center p-4 bg-white rounded-xl border border-neutral-200">
          <div className="text-2xl mb-2">⚡</div>
          <div className="text-xs font-semibold text-neutral-700">Antwort in 2h</div>
        </div>
      </div>
    </div>
  )
}
