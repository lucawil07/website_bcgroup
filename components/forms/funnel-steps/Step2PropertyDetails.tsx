'use client'

import { UseFormReturn } from 'react-hook-form'
import { Building, ArrowUp, Car } from 'lucide-react'
import type { EntruempelungFormData } from '../funnel-types'

interface Step2Props {
  form: UseFormReturn<EntruempelungFormData>
}

const floors = [
  { value: 'keller', label: 'Keller' },
  { value: 'erdgeschoss', label: 'Erdgeschoss' },
  { value: '1', label: '1. Stock' },
  { value: '2', label: '2. Stock' },
  { value: '3+', label: '3.+ Stock' },
]

const parkingDistances = [
  { value: '0-10', label: '0–10 m (direkt vor der Tür)' },
  { value: '10-30', label: '10–30 m (kurzer Weg)' },
  { value: '30+', label: 'Mehr als 30 m (längerer Weg)' },
]

export default function Step2PropertyDetails({ form }: Step2Props) {
  const { watch, setValue, register } = form
  const selectedFloor = watch('floor')
  const hasElevator = watch('hasElevator')
  const parkingDistance = watch('parkingDistance')

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <div className="inline-block text-secondary font-bold text-xs uppercase tracking-widest bg-secondary/10 px-4 py-2 rounded-full">
          Schritt 2 von 8
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-primary">
          👉 Details zum Objekt
        </h2>
        <p className="text-neutral-600">Diese Angaben helfen uns, den Aufwand besser einzuschätzen</p>
      </div>

      {/* Floor Selection */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
            <Building className="w-5 h-5 text-secondary" />
          </div>
          <label className="text-lg font-bold text-primary">
            In welcher Etage befindet sich das Objekt?
          </label>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {floors.map((floor) => (
            <button
              key={floor.value}
              type="button"
              onClick={() => setValue('floor', floor.value)}
              className={`px-4 py-3 rounded-xl border-2 font-semibold transition-all ${
                selectedFloor === floor.value
                  ? 'border-secondary bg-secondary text-white'
                  : 'border-neutral-200 text-neutral-700 hover:border-secondary/50'
              }`}
            >
              {floor.label}
            </button>
          ))}
        </div>
      </div>

      {/* Elevator */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
            <ArrowUp className="w-5 h-5 text-accent" />
          </div>
          <label className="text-lg font-bold text-primary">
            Ist ein Fahrstuhl vorhanden?
          </label>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setValue('hasElevator', true)}
            className={`px-6 py-4 rounded-xl border-2 font-semibold transition-all ${
              hasElevator === true
                ? 'border-secondary bg-secondary text-white'
                : 'border-neutral-200 text-neutral-700 hover:border-secondary/50'
            }`}
          >
            ✓ Ja
          </button>
          <button
            type="button"
            onClick={() => setValue('hasElevator', false)}
            className={`px-6 py-4 rounded-xl border-2 font-semibold transition-all ${
              hasElevator === false
                ? 'border-secondary bg-secondary text-white'
                : 'border-neutral-200 text-neutral-700 hover:border-secondary/50'
            }`}
          >
            ✗ Nein
          </button>
        </div>
      </div>

      {/* Parking Distance */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
            <Car className="w-5 h-5 text-purple-500" />
          </div>
          <label className="text-lg font-bold text-primary">
            Wie weit ist der Parkplatz vom Eingang entfernt (ca.)?
          </label>
        </div>
        <div className="space-y-3">
          {parkingDistances.map((distance) => (
            <button
              key={distance.value}
              type="button"
              onClick={() => setValue('parkingDistance', distance.value)}
              className={`w-full px-6 py-4 rounded-xl border-2 font-semibold text-left transition-all ${
                parkingDistance === distance.value
                  ? 'border-secondary bg-secondary/5 text-secondary'
                  : 'border-neutral-200 text-neutral-700 hover:border-secondary/50'
              }`}
            >
              {distance.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
