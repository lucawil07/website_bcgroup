'use client'

import { useState, useEffect } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { Calendar, Upload, X, Image as ImageIcon, Loader2 } from 'lucide-react'
import type { EntruempelungFormData } from '../funnel-types'

interface Step6Props {
  form: UseFormReturn<EntruempelungFormData>
}

const timingOptions = [
  { value: 'asap', label: 'Heute oder morgen', description: 'Express-Service', urgent: true },
  { value: '1-2weeks', label: 'In den nächsten 1–2 Wochen', description: 'Kurzfristig' },
  { value: '1-2months', label: 'In den nächsten 1–2 Monaten', description: 'Mittelfristig' },
  { value: 'flexible', label: 'Flexibel / nach Absprache', description: 'Kein Zeitdruck' },
]

export default function Step6Timing({ form }: Step6Props) {
  const { watch, setValue } = form
  const selectedTiming = watch('timing')
  const savedPhotos = watch('photos') || []
  const [uploadedPhotos, setUploadedPhotos] = useState<string[]>([])
  const [isUploading, setIsUploading] = useState(false)
  const [uploadError, setUploadError] = useState<string | null>(null)

  // Load photos from form state on mount
  useEffect(() => {
    if (savedPhotos.length > 0 && uploadedPhotos.length === 0) {
      setUploadedPhotos(savedPhotos)
    }
  }, [savedPhotos])

  const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) return

    setIsUploading(true)
    setUploadError(null)

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
      } else {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.error || 'Upload fehlgeschlagen')
      }
    } catch (error) {
      console.error('Upload error:', error)
      setUploadError(
        error instanceof Error 
          ? error.message 
          : 'Fehler beim Hochladen. Bitte versuchen Sie es erneut.'
      )
    } finally {
      setIsUploading(false)
      // Reset input to allow re-uploading the same file
      e.target.value = ''
    }
  }

  const removePhoto = (index: number) => {
    const newPhotos = uploadedPhotos.filter((_, i) => i !== index)
    setUploadedPhotos(newPhotos)
    setValue('photos', newPhotos)
  }

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="text-center space-y-3 sm:space-y-4">
        <div className="inline-block text-emerald-600 font-bold text-xs uppercase tracking-widest bg-emerald-100 px-4 py-2 rounded-full">
          Schritt 6 von 8
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-neutral-800">
          👉 Wann soll es losgehen?
        </h2>
        <p className="text-neutral-600 text-sm sm:text-base">Wählen Sie Ihren Wunschzeitraum</p>
      </div>

      {/* Timing Selection */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
            <Calendar className="w-5 h-5 text-emerald-600" />
          </div>
          <label className="text-base sm:text-lg font-bold text-neutral-800">
            Wann soll die Entrümpelung stattfinden?
          </label>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {timingOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => setValue('timing', option.value)}
              className={`p-4 sm:p-6 rounded-2xl border-2 text-left transition-all relative ${
                selectedTiming === option.value
                  ? 'border-emerald-500 bg-emerald-50 shadow-lg shadow-emerald-500/20 scale-[1.02]'
                  : 'border-neutral-200 hover:border-emerald-300 bg-white'
              }`}
            >
              {option.urgent && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  ⚡ Express
                </span>
              )}
              <h3 className={`text-lg sm:text-xl font-bold mb-1 ${selectedTiming === option.value ? 'text-emerald-700' : 'text-neutral-800'}`}>
                {option.label}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600">{option.description}</p>
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
              <div className={`px-6 py-3 rounded-xl font-semibold transition-all inline-flex items-center gap-2 ${
                isUploading
                  ? 'bg-neutral-300 text-neutral-500 cursor-not-allowed'
                  : 'bg-accent text-white hover:bg-accent-600'
              }`}>
                {isUploading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Wird hochgeladen...
                  </>
                ) : (
                  '📷 Fotos auswählen'
                )}
              </div>
            </label>

            <p className="text-xs text-neutral-500">
              Max. 10MB pro Foto • JPG, PNG, WebP
            </p>
            
            {uploadError && (
              <p className="text-sm text-red-600 bg-red-50 px-4 py-2 rounded-lg">
                {uploadError}
              </p>
            )}
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
