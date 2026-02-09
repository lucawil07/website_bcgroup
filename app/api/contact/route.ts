import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

// Initialize Resend only if API key is available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

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

const serviceLabels: Record<string, string> = {
  'entruempelung': 'Entrümpelung',
  'umzug': 'Umzug',
  'reinigung': 'Reinigung',
  'hausmeisterservice': 'Hausmeisterservice',
  'kurierdienst': 'Kurierdienst',
  'abriss': 'Abriss',
  'andere': 'Andere',
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

    // Check if Resend is configured
    if (!resend) {
      console.warn('Resend API key is not configured — logging form submission instead')
      console.log('Contact form submission:', JSON.stringify(data, null, 2))
      
      // Still return success so the user sees feedback
      return NextResponse.json(
        {
          success: true,
          message: 'Anfrage erfolgreich eingereicht',
          leadId: `LEAD-${Date.now()}`,
          note: 'Email delivery is not configured yet',
        },
        { status: 200 }
      )
    }

    // Generate customer confirmation email
    const customerEmailHtml = generateCustomerEmail(data)

    // Generate internal notification email
    const internalEmailHtml = generateInternalEmail(data)

    // Send both emails
    const [customerEmail, internalEmail] = await Promise.all([
      resend.emails.send({
        from: 'BC Group Berlin <noreply@bcgroup.berlin>',
        to: data.email,
        subject: '✓ Ihre Anfrage wurde empfangen – BC Group Berlin',
        html: customerEmailHtml,
      }),
      resend.emails.send({
        from: 'Website Anfrage <anfragen@bcgroup.berlin>',
        to: 'info@bcgroup.berlin',
        subject: `🔔 Neue Kontaktanfrage – ${data.name} (${serviceLabels[data.service] || data.service})`,
        html: internalEmailHtml,
      }),
    ])

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Anfrage erfolgreich eingereicht',
        leadId: `LEAD-${Date.now()}`,
        customerEmailId: customerEmail.data?.id,
        internalEmailId: internalEmail.data?.id,
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

function generateCustomerEmail(data: ContactFormData): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ihre Anfrage bei BC Group Berlin</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f3f4f6;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f3f4f6; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #0066CC 0%, #0052A3 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: 900;">BC GROUP</h1>
              <p style="margin: 10px 0 0 0; color: #e0f2fe; font-size: 16px;">Berlin</p>
            </td>
          </tr>

          <!-- Success Message -->
          <tr>
            <td style="padding: 40px 30px; text-align: center;">
              <div style="width: 80px; height: 80px; background-color: #10b981; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center;">
                <span style="color: white; font-size: 40px;">✓</span>
              </div>
              <h2 style="margin: 0 0 10px 0; color: #1f2937; font-size: 28px; font-weight: bold;">Vielen Dank für Ihre Anfrage!</h2>
              <p style="margin: 0; color: #6b7280; font-size: 16px; line-height: 1.6;">
                Wir haben Ihre Nachricht erhalten und werden uns schnellstmöglich bei Ihnen melden.
              </p>
            </td>
          </tr>

          <!-- Timeline -->
          <tr>
            <td style="padding: 0 30px 40px 30px;">
              <div style="background-color: #f9fafb; border-radius: 12px; padding: 30px;">
                <h3 style="margin: 0 0 20px 0; color: #1f2937; font-size: 20px; font-weight: bold;">➡️ Was passiert jetzt?</h3>
                
                <div style="margin-bottom: 20px;">
                  <div style="display: flex; align-items: start;">
                    <div style="background-color: #0066CC; color: white; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px; flex-shrink: 0;">1</div>
                    <div>
                      <strong style="color: #1f2937; font-size: 16px;">Prüfung Ihrer Anfrage</strong>
                      <p style="margin: 5px 0 0 0; color: #6b7280; font-size: 14px;">Wir prüfen Ihre Angaben und bereiten eine persönliche Rückmeldung vor.</p>
                      <p style="margin: 5px 0 0 0; color: #0066CC; font-size: 13px; font-weight: 600;">⏱️ Innerhalb von 2 Stunden</p>
                    </div>
                  </div>
                </div>

                <div style="margin-bottom: 20px;">
                  <div style="display: flex; align-items: start;">
                    <div style="background-color: #0066CC; color: white; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px; flex-shrink: 0;">2</div>
                    <div>
                      <strong style="color: #1f2937; font-size: 16px;">Persönliche Beratung</strong>
                      <p style="margin: 5px 0 0 0; color: #6b7280; font-size: 14px;">Ein Mitarbeiter wird Sie kontaktieren, um Ihre Anforderungen zu besprechen.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div style="display: flex; align-items: start;">
                    <div style="background-color: #0066CC; color: white; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px; flex-shrink: 0;">3</div>
                    <div>
                      <strong style="color: #1f2937; font-size: 16px;">Unverbindliches Angebot</strong>
                      <p style="margin: 5px 0 0 0; color: #6b7280; font-size: 14px;">Sie erhalten ein maßgeschneidertes Angebot für Ihre Bedürfnisse.</p>
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>

          <!-- Summary -->
          <tr>
            <td style="padding: 0 30px 40px 30px;">
              <div style="background-color: #eff6ff; border-left: 4px solid #0066CC; border-radius: 8px; padding: 20px;">
                <h3 style="margin: 0 0 15px 0; color: #1f2937; font-size: 18px; font-weight: bold;">📋 Ihre Angaben im Überblick:</h3>
                <table width="100%" cellpadding="8" cellspacing="0">
                  <tr>
                    <td style="color: #6b7280; font-size: 14px; padding: 8px 0;">Gewünschte Leistung:</td>
                    <td style="color: #1f2937; font-size: 14px; font-weight: 600; text-align: right; padding: 8px 0;">${serviceLabels[data.service] || data.service}</td>
                  </tr>
                  ${data.propertyType ? `
                  <tr>
                    <td style="color: #6b7280; font-size: 14px; padding: 8px 0;">Objektart:</td>
                    <td style="color: #1f2937; font-size: 14px; font-weight: 600; text-align: right; padding: 8px 0;">${data.propertyType}</td>
                  </tr>
                  ` : ''}
                  ${data.budget ? `
                  <tr>
                    <td style="color: #6b7280; font-size: 14px; padding: 8px 0;">Budget:</td>
                    <td style="color: #1f2937; font-size: 14px; font-weight: 600; text-align: right; padding: 8px 0;">${data.budget}</td>
                  </tr>
                  ` : ''}
                </table>
              </div>
            </td>
          </tr>

          <!-- WhatsApp CTA -->
          <tr>
            <td style="padding: 0 30px 40px 30px; text-align: center;">
              <p style="margin: 0 0 20px 0; color: #6b7280; font-size: 16px;">
                <strong>Noch schneller per WhatsApp:</strong>
              </p>
              <a href="https://wa.me/4917679567083?text=Hallo,%20ich%20habe%20gerade%20eine%20Anfrage%20gesendet" style="display: inline-block; background-color: #25D366; color: white; padding: 16px 32px; border-radius: 12px; text-decoration: none; font-weight: bold; font-size: 16px;">
                💬 WhatsApp Direktkontakt
              </a>
            </td>
          </tr>

          <!-- Trust Badges -->
          <tr>
            <td style="padding: 0 30px 40px 30px;">
              <table width="100%" cellpadding="10" cellspacing="0">
                <tr>
                  <td align="center" style="width: 33.33%;">
                    <div style="font-size: 32px; margin-bottom: 8px;">🔒</div>
                    <p style="margin: 0; color: #1f2937; font-size: 13px; font-weight: 600;">Festpreisgarantie</p>
                  </td>
                  <td align="center" style="width: 33.33%;">
                    <div style="font-size: 32px; margin-bottom: 8px;">✓</div>
                    <p style="margin: 0; color: #1f2937; font-size: 13px; font-weight: 600;">Kostenlos & unverbindlich</p>
                  </td>
                  <td align="center" style="width: 33.33%;">
                    <div style="font-size: 32px; margin-bottom: 8px;">⭐</div>
                    <p style="margin: 0; color: #1f2937; font-size: 13px; font-weight: 600;">4.9★ Bewertung</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0 0 15px 0; color: #1f2937; font-weight: bold; font-size: 16px;">BC Group Berlin</p>
              <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px;">📞 +49 176 79567083</p>
              <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px;">✉️ info@bcgroup.berlin</p>
              <p style="margin: 0; color: #6b7280; font-size: 14px;">🌐 www.bcgroup.berlin</p>
              <p style="margin: 20px 0 0 0; color: #9ca3af; font-size: 12px;">
                Ihr zuverlässiger Partner für Entrümpelung, Reinigung, Umzug und mehr in Berlin
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `
}

function generateInternalEmail(data: ContactFormData): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Neue Kontaktanfrage</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f3f4f6;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f3f4f6; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="700" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #0066CC 0%, #0052A3 100%); padding: 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold;">🔔 Neue Kontaktanfrage</h1>
              <p style="margin: 10px 0 0 0; color: #bfdbfe; font-size: 14px;">${new Date().toLocaleDateString('de-DE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
            </td>
          </tr>

          <!-- Customer Info -->
          <tr>
            <td style="padding: 30px;">
              <h2 style="margin: 0 0 20px 0; color: #1f2937; font-size: 22px; font-weight: bold; border-bottom: 3px solid #0066CC; padding-bottom: 10px;">
                👤 Kundendaten
              </h2>
              <table width="100%" cellpadding="8" cellspacing="0">
                <tr>
                  <td style="color: #6b7280; font-size: 14px; width: 40%;">Name:</td>
                  <td style="color: #1f2937; font-size: 14px; font-weight: 600;"><strong>${data.name}</strong></td>
                </tr>
                <tr>
                  <td style="color: #6b7280; font-size: 14px;">Telefon:</td>
                  <td style="color: #1f2937; font-size: 14px; font-weight: 600;"><a href="tel:${data.phone}" style="color: #0066CC; text-decoration: none;">${data.phone}</a></td>
                </tr>
                <tr>
                  <td style="color: #6b7280; font-size: 14px;">E-Mail:</td>
                  <td style="color: #1f2937; font-size: 14px; font-weight: 600;"><a href="mailto:${data.email}" style="color: #0066CC; text-decoration: none;">${data.email}</a></td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Request Details -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <h2 style="margin: 0 0 20px 0; color: #1f2937; font-size: 22px; font-weight: bold; border-bottom: 3px solid #10b981; padding-bottom: 10px;">
                📋 Anfrage-Details
              </h2>
              <table width="100%" cellpadding="8" cellspacing="0">
                <tr>
                  <td style="color: #6b7280; font-size: 14px; width: 40%;">Gewünschte Leistung:</td>
                  <td style="color: #1f2937; font-size: 14px; font-weight: 600;"><strong style="color: #0066CC;">${serviceLabels[data.service] || data.service}</strong></td>
                </tr>
                ${data.propertyType ? `
                <tr>
                  <td style="color: #6b7280; font-size: 14px;">Objektart:</td>
                  <td style="color: #1f2937; font-size: 14px; font-weight: 600;">${data.propertyType}</td>
                </tr>
                ` : ''}
                ${data.budget ? `
                <tr>
                  <td style="color: #6b7280; font-size: 14px;">Budget:</td>
                  <td style="color: #1f2937; font-size: 14px; font-weight: 600;">${data.budget}</td>
                </tr>
                ` : ''}
                <tr>
                  <td style="color: #6b7280; font-size: 14px;">Quelle:</td>
                  <td style="color: #1f2937; font-size: 14px; font-weight: 600;">${data.source || 'Kontaktformular'}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <div style="background-color: #f9fafb; border-left: 4px solid #0066CC; padding: 20px; border-radius: 8px;">
                <h3 style="margin: 0 0 10px 0; color: #1f2937; font-size: 16px; font-weight: bold;">💬 Nachricht:</h3>
                <p style="margin: 0; color: #374151; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
              </div>
            </td>
          </tr>

          <!-- Quick Actions -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <table width="100%" cellpadding="15" cellspacing="15">
                <tr>
                  <td align="center" style="background-color: #10b981; border-radius: 8px;">
                    <a href="tel:${data.phone}" style="color: white; text-decoration: none; font-weight: bold; font-size: 16px;">📞 Kunde anrufen</a>
                  </td>
                  <td align="center" style="background-color: #3b82f6; border-radius: 8px;">
                    <a href="mailto:${data.email}" style="color: white; text-decoration: none; font-weight: bold; font-size: 16px;">✉️ E-Mail senden</a>
                  </td>
                  <td align="center" style="background-color: #25D366; border-radius: 8px;">
                    <a href="https://wa.me/${data.phone.replace(/[^0-9]/g, '')}" style="color: white; text-decoration: none; font-weight: bold; font-size: 16px;">💬 WhatsApp</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; color: #6b7280; font-size: 12px;">
                Diese Anfrage wurde über das Kontaktformular auf bcgroup.berlin generiert
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `
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
