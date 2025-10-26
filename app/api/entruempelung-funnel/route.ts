import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

// Initialize Resend only if API key is available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(request: NextRequest) {
  try {
    // Check if Resend is configured
    if (!resend) {
      console.error('Resend API key is not configured')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    const data = await request.json()

    // Generate customer confirmation email
    const customerEmailHtml = generateCustomerEmail(data)

    // Generate internal notification email
    const internalEmailHtml = generateInternalEmail(data)

    // Send both emails
    const [customerEmail, internalEmail] = await Promise.all([
      resend.emails.send({
        from: 'BC Group Berlin <noreply@bcgroup-berlin.de>',
        to: data.email,
        subject: '✓ Ihre Anfrage wurde empfangen – BC Group Berlin',
        html: customerEmailHtml,
      }),
      resend.emails.send({
        from: 'Website Anfrage <anfragen@bcgroup-berlin.de>',
        to: 'info@bcgroup-berlin.de',
        subject: `🔔 Neue Entrümpelung Anfrage – ${data.name}`,
        html: internalEmailHtml,
      }),
    ])

    return NextResponse.json({
      success: true,
      customerEmailId: customerEmail.data?.id,
      internalEmailId: internalEmail.data?.id,
    })
  } catch (error) {
    console.error('Email send error:', error)
    return NextResponse.json(
      { error: 'Failed to send emails' },
      { status: 500 }
    )
  }
}

function generateCustomerEmail(data: any): string {
  const serviceTypeLabels: Record<string, string> = {
    wohnung: 'Wohnung',
    haus: 'Haus',
    keller: 'Keller',
    garage: 'Garage',
    gewerbe: 'Gewerbefläche / Büro',
    andere: data.serviceTypeOther || 'Andere',
  }

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
                Wir haben Ihre Anfrage erfolgreich erhalten und werden uns schnellstmöglich bei Ihnen melden.
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
                      <p style="margin: 5px 0 0 0; color: #6b7280; font-size: 14px;">Wir prüfen Ihre Angaben und bereiten Ihr individuelles Angebot vor.</p>
                      <p style="margin: 5px 0 0 0; color: #0066CC; font-size: 13px; font-weight: 600;">⏱️ Innerhalb von 2 Stunden</p>
                    </div>
                  </div>
                </div>

                <div style="margin-bottom: 20px;">
                  <div style="display: flex; align-items: start;">
                    <div style="background-color: #0066CC; color: white; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px; flex-shrink: 0;">2</div>
                    <div>
                      <strong style="color: #1f2937; font-size: 16px;">Besichtigung vereinbaren</strong>
                      <p style="margin: 5px 0 0 0; color: #6b7280; font-size: 14px;">Für ein verbindliches Angebot empfehlen wir einen kostenlosen Besichtigungstermin.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div style="display: flex; align-items: start;">
                    <div style="background-color: #0066CC; color: white; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px; flex-shrink: 0;">3</div>
                    <div>
                      <strong style="color: #1f2937; font-size: 16px;">Festpreis-Angebot</strong>
                      <p style="margin: 5px 0 0 0; color: #6b7280; font-size: 14px;">Sie erhalten ein transparentes Festpreis-Angebot ohne versteckte Kosten.</p>
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
                    <td style="color: #6b7280; font-size: 14px; padding: 8px 0;">Art der Entrümpelung:</td>
                    <td style="color: #1f2937; font-size: 14px; font-weight: 600; text-align: right; padding: 8px 0;">${serviceTypeLabels[data.serviceType]}</td>
                  </tr>
                  <tr>
                    <td style="color: #6b7280; font-size: 14px; padding: 8px 0;">Fläche:</td>
                    <td style="color: #1f2937; font-size: 14px; font-weight: 600; text-align: right; padding: 8px 0;">${data.area} m²</td>
                  </tr>
                  <tr>
                    <td style="color: #6b7280; font-size: 14px; padding: 8px 0;">Zeitraum:</td>
                    <td style="color: #1f2937; font-size: 14px; font-weight: 600; text-align: right; padding: 8px 0;">${getTimingLabel(data.timing)}</td>
                  </tr>
                  ${data.photos && data.photos.length > 0 ? `
                  <tr>
                    <td style="color: #6b7280; font-size: 14px; padding: 8px 0;">Fotos:</td>
                    <td style="color: #1f2937; font-size: 14px; font-weight: 600; text-align: right; padding: 8px 0;">${data.photos.length} hochgeladen</td>
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
              <a href="https://wa.me/49301234567?text=Hallo,%20ich%20habe%20gerade%20eine%20Anfrage%20gesendet" style="display: inline-block; background-color: #25D366; color: white; padding: 16px 32px; border-radius: 12px; text-decoration: none; font-weight: bold; font-size: 16px;">
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
              <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px;">📞 +49 30 123 456</p>
              <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px;">✉️ info@bcgroup-berlin.de</p>
              <p style="margin: 0; color: #6b7280; font-size: 14px;">🌐 www.bcgroup-berlin.de</p>
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

function generateInternalEmail(data: any): string {
  const serviceTypeLabels: Record<string, string> = {
    wohnung: 'Wohnung',
    haus: 'Haus',
    keller: 'Keller',
    garage: 'Garage',
    gewerbe: 'Gewerbefläche / Büro',
    andere: data.serviceTypeOther || 'Andere',
  }

  const fullnessLabels: Record<string, string> = {
    wenig: 'Wenig',
    mittel: 'Mittel',
    viel: 'Viel',
    extrem: 'Extrem (Messie)',
  }

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Neue Entrümpelung Anfrage</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f3f4f6;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f3f4f6; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="700" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%); padding: 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold;">🔔 Neue Entrümpelung Anfrage</h1>
              <p style="margin: 10px 0 0 0; color: #fecaca; font-size: 14px;">${new Date().toLocaleDateString('de-DE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
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
                <tr>
                  <td style="color: #6b7280; font-size: 14px;">Adresse:</td>
                  <td style="color: #1f2937; font-size: 14px; font-weight: 600;">${data.address}, ${data.postalCode} ${data.city}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Project Details -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <h2 style="margin: 0 0 20px 0; color: #1f2937; font-size: 22px; font-weight: bold; border-bottom: 3px solid #10b981; padding-bottom: 10px;">
                📦 Projektdetails
              </h2>
              <table width="100%" cellpadding="8" cellspacing="0">
                <tr>
                  <td style="color: #6b7280; font-size: 14px; width: 40%;">Art der Entrümpelung:</td>
                  <td style="color: #1f2937; font-size: 14px; font-weight: 600;">${serviceTypeLabels[data.serviceType]}</td>
                </tr>
                <tr>
                  <td style="color: #6b7280; font-size: 14px;">Etage:</td>
                  <td style="color: #1f2937; font-size: 14px; font-weight: 600;">${data.floor}</td>
                </tr>
                <tr>
                  <td style="color: #6b7280; font-size: 14px;">Fahrstuhl:</td>
                  <td style="color: #1f2937; font-size: 14px; font-weight: 600;">${data.hasElevator ? '✓ Ja' : '✗ Nein'}</td>
                </tr>
                <tr>
                  <td style="color: #6b7280; font-size: 14px;">Parkplatz-Entfernung:</td>
                  <td style="color: #1f2937; font-size: 14px; font-weight: 600;">${data.parkingDistance} m</td>
                </tr>
                <tr>
                  <td style="color: #6b7280; font-size: 14px;">Fläche:</td>
                  <td style="color: #1f2937; font-size: 14px; font-weight: 600;"><strong style="color: #dc2626;">${data.area} m²</strong></td>
                </tr>
                <tr>
                  <td style="color: #6b7280; font-size: 14px;">Füllmenge:</td>
                  <td style="color: #1f2937; font-size: 14px; font-weight: 600;">${fullnessLabels[data.fullness]}</td>
                </tr>
                ${data.specialItems && data.specialItems.length > 0 ? `
                <tr>
                  <td style="color: #6b7280; font-size: 14px;">Besondere Inhalte:</td>
                  <td style="color: #1f2937; font-size: 14px; font-weight: 600;">${data.specialItems.join(', ')}</td>
                </tr>
                ` : ''}
                <tr>
                  <td style="color: #6b7280; font-size: 14px;">Demontage:</td>
                  <td style="color: #1f2937; font-size: 14px; font-weight: 600;">${data.needsDismantling ? '✓ Erforderlich' : '✗ Nicht erforderlich'}</td>
                </tr>
                ${data.needsDismantling && data.dismantlingDetails ? `
                <tr>
                  <td style="color: #6b7280; font-size: 14px;">Demontage-Details:</td>
                  <td style="color: #1f2937; font-size: 14px; font-weight: 600;">${data.dismantlingDetails}</td>
                </tr>
                ` : ''}
                <tr>
                  <td style="color: #6b7280; font-size: 14px;">Gewünschter Zeitraum:</td>
                  <td style="color: #1f2937; font-size: 14px; font-weight: 600;"><strong style="color: #dc2626;">${getTimingLabel(data.timing)}</strong></td>
                </tr>
              </table>
            </td>
          </tr>

          ${data.additionalNotes ? `
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 20px; border-radius: 8px;">
                <h3 style="margin: 0 0 10px 0; color: #92400e; font-size: 16px; font-weight: bold;">💬 Zusätzliche Notizen:</h3>
                <p style="margin: 0; color: #78350f; font-size: 14px; line-height: 1.6;">${data.additionalNotes}</p>
              </div>
            </td>
          </tr>
          ` : ''}

          ${data.hasSeparateObjectAddress ? `
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <div style="background-color: #dbeafe; border-left: 4px solid #3b82f6; padding: 20px; border-radius: 8px;">
                <h3 style="margin: 0 0 10px 0; color: #1e40af; font-size: 16px; font-weight: bold;">📍 Objektadresse (abweichend):</h3>
                <p style="margin: 0; color: #1e3a8a; font-size: 14px; font-weight: 600;">${data.objectAddress}, ${data.objectPostalCode} ${data.objectCity}</p>
              </div>
            </td>
          </tr>
          ` : ''}

          ${data.photos && data.photos.length > 0 ? `
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <h3 style="margin: 0 0 15px 0; color: #1f2937; font-size: 18px; font-weight: bold;">📸 Hochgeladene Fotos (${data.photos.length}):</h3>
              <div>
                ${data.photos.map((url: string, index: number) => `
                  <p style="margin: 8px 0;"><a href="${url}" style="color: #0066CC; text-decoration: none; font-size: 14px;">📷 Foto ${index + 1}: ${url}</a></p>
                `).join('')}
              </div>
            </td>
          </tr>
          ` : ''}

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
                Diese Anfrage wurde über das Entrümperungs-Funnel auf bcgroup-berlin.de generiert
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

function getTimingLabel(timing: string): string {
  const labels: Record<string, string> = {
    asap: 'Heute oder morgen (Express)',
    '1-2weeks': 'In den nächsten 1–2 Wochen',
    '1-2months': 'In den nächsten 1–2 Monaten',
    flexible: 'Flexibel / nach Absprache',
  }
  return labels[timing] || timing
}
