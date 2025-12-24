import { put } from '@vercel/blob'
import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const photos = formData.getAll('photos') as File[]

    if (!photos || photos.length === 0) {
      return NextResponse.json(
        { error: 'No photos provided' },
        { status: 400 }
      )
    }

    // Validate file types and sizes
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp']
    const maxSize = 10 * 1024 * 1024 // 10MB

    for (const photo of photos) {
      if (!allowedTypes.includes(photo.type)) {
        return NextResponse.json(
          { error: `Invalid file type: ${photo.type}. Only JPG, PNG, and WebP are allowed.` },
          { status: 400 }
        )
      }

      if (photo.size > maxSize) {
        return NextResponse.json(
          { error: `File too large: ${photo.name}. Maximum size is 10MB.` },
          { status: 400 }
        )
      }
    }

    // Upload to Vercel Blob
    const uploadPromises = photos.map(async (photo) => {
      const blob = await put(
        `entruempelung/${Date.now()}-${photo.name}`,
        photo,
        {
          access: 'public',
          addRandomSuffix: true,
        }
      )
      return blob.url
    })

    const urls = await Promise.all(uploadPromises)

    return NextResponse.json({ urls })
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json(
      { error: 'Failed to upload photos' },
      { status: 500 }
    )
  }
}
