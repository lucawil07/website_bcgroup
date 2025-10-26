'use client'

import { useState } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { Calendar, Upload, X, Image as ImageIcon } from 'lucide-react'
import type { EntruempelungFormData } from '../funnel-types'

interface Step6Props {
  form: UseFormReturn<EntruempelungFormData>
}

const timingOptions = [
  { value: 'asap', label: 'Heute oder morgen', description: 'Express-Service' },
  { value: '1-2weeks', label: 'In den nächsten 1–2 Wochen', description: 'Kurzfristig' },
  { value: '1-2months', label: 'In den nächsten 1–2 Monaten', description: 'Mittelfristig' },
  { value: 'flexible', label: 'Flexibel / nach Absprache', description: 'Kein Zeitdruck' },
]

export default function Step6Timing({ form }: Step6Props) {
  const { watch, setValue } = form
  const selectedTiming = watch('timing')
  const [uploadedPhotos, setUploadedPhotos] = useState<string[]>([])
  const [isUploading, setIsUploading] = useState(false)

  const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) return

    setIsUploading(true)

    try {
      const formData = new FormData()
      Array.from(files).forEach((file) => {
        formData.append('photos', file)
      })

      const response = await fetch('/api/upload-photos', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        const { urls } = await response.json()
        const newPhotos = [...uploadedPhotos, ...urls]
        setUploadedPhotos(newPhotos)
        setValue('photos', newPhotos)
      }
    } catch (error) {
      console.error('Upload error:', error)
      alert('Fehler beim Hochladen. Bitte versuchen Sie es erneut.')
    } finally {
      setIsUploading(false)
    }
  }

  const removePhoto = (index: number) => {
    const newPhotos = uploadedPhotos.filter((_, i) => i !== index)
    setUploadedPhotos(newPhotos)
    setValue('photos', newPhotos)
  }

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <div className="inline-block text-secondary font-bold text-xs uppercase tracking-widest bg-secondary/10 px-4 py-2 rounded-full">
          Schritt 6 von 8
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-primary">
          👉 Wann soll es losgehen?
        </h2>
        <p className="text-neutral-600">Wählen Sie Ihren Wunschzeitraum</p>
      </div>

      {/* Timing Selection */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
            <Calendar className="w-5 h-5 text-secondary" />
          </div>
          <label className="text-lg font-bold text-primary">
            Wann soll die Entrümpelung stattfinden?
          </label>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {timingOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => setValue('timing', option.value)}
              className={`p-6 rounded-2xl border-2 text-left transition-all ${
                selectedTiming === option.value
                  ? 'border-secondary bg-secondary/5 shadow-lg scale-105'
                  : 'border-neutral-200 hover:border-secondary/50'
              }`}
            >
              <h3 className={`text-xl font-bold mb-1 ${selectedTiming === option.value ? 'text-secondary' : 'text-primary'}`}>
                {option.label}
              </h3>
              <p className="text-sm text-neutral-600">{option.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Photo Upload */}
      <div className="space-y-4">
        <div className="bg-gradient-to-br from-accent/10 to-secondary/10 rounded-2xl p-6 border-2 border-dashed border-accent/30">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto">
              <Upload className="w-8 h-8 text-accent" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">
                📸 Fotos hochladen (optional)
              </h3>
              <p className="text-sm text-neutral-600 mb-4">
                Sie können hier Fotos hochladen – so können wir Ihr Angebot noch schneller und genauer vorbereiten.
              </p>
              <div className="inline-block bg-accent/10 text-accent text-xs font-bold px-4 py-2 rounded-full mb-4">
                💡 Mit Fotos erhalten Sie ein genaueres Angebot
              </div>
            </div>

            <label className="inline-block cursor-pointer">
              <input
                type="file"
                multiple
                accept="image/jpeg,image/png,image/webp"
                onChange={handlePhotoUpload}
                className="hidden"
                disabled={isUploading}
              />
              <div className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                isUploading
                  ? 'bg-neutral-300 text-neutral-500 cursor-not-allowed'
                  : 'bg-accent text-white hover:bg-accent-600'
              }`}>
                {isUploading ? 'Wird hochgeladen...' : '📷 Fotos auswählen'}
              </div>
            </label>

            <p className="text-xs text-neutral-500">
              Max. 10MB pro Foto • JPG, PNG, WebP
            </p>
          </div>
        </div>

        {/* Uploaded Photos Preview */}
        {uploadedPhotos.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {uploadedPhotos.map((photo, index) => (
              <div key={index} className="relative group">
                <div className="aspect-square rounded-xl overflow-hidden border-2 border-neutral-200">
                  <img src={photo} alt={`Upload ${index + 1}`} className="w-full h-full object-cover" />
                </div>
                <button
                  type="button"
                  onClick={() => removePhoto(index)}
                  className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
