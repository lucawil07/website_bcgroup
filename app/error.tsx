'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-4 text-4xl font-bold text-gray-900">
        Etwas ist schiefgelaufen
      </h1>
      <p className="mb-8 max-w-md text-lg text-gray-600">
        Es tut uns leid, es ist ein unerwarteter Fehler aufgetreten. 
        Bitte versuchen Sie es erneut oder kontaktieren Sie uns.
      </p>
      <div className="flex gap-4">
        <button
          onClick={reset}
          className="rounded-lg bg-[#0066CC] px-6 py-3 text-white transition-colors hover:bg-[#0052a3]"
        >
          Erneut versuchen
        </button>
        <Link
          href="/"
          className="rounded-lg border border-gray-300 px-6 py-3 text-gray-700 transition-colors hover:bg-gray-50"
        >
          Zur Startseite
        </Link>
      </div>
    </div>
  )
}
