import { NextRequest, NextResponse } from 'next/server'

interface ContactFormData {
  name: string
  email: string
  phone: string
  service: string
  propertyType?: string
  budget?: string
  message: string
  timestamp: string
  source: string
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json()

    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.service || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send confirmation email to user
    // 3. Send notification email to admin
    // 4. Integrate with CRM system
    // 5. Create lead in your business system

    // For now, we'll log the data and simulate storage
    console.log('Contact form submission:', {
      ...data,
      submittedAt: new Date().toISOString(),
    })

    // TODO: Replace with actual implementation
    // Example implementations:
    // - Save to MongoDB: await contactCollection.insertOne(data)
    // - Save to Supabase: await supabase.from('contacts').insert([data])
    // - Send emails: await sendEmail(...)
    // - Integrate with CRM: await crm.createLead(...)

    // Simulate async operation
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Anfrage erfolgreich eingereicht',
        leadId: `LEAD-${Date.now()}`,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Optional: Handle OPTIONS for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
