import type { Metadata } from 'next'
import { Section, Container } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Datenschutz | BC Group Berlin',
  description: 'Datenschutzerklärung und Datenschutzrichtlinien der BC Group Berlin',
  robots: 'noindex, nofollow',
}

export default function DataProtectionPage() {
  return (
    <>
      {/* Hero */}
      <Section background="dark" padding="medium" className="pt-32">
        <Container className="text-center">
          <h1 className="text-5xl md:text-6xl font-black text-white uppercase mb-4">
            DATENSCHUTZ
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Datenschutzerklärung und Datenschutzrichtlinien
          </p>
        </Container>
      </Section>

      {/* Content */}
      <Section background="white" padding="large">
        <Container size="narrow" className="prose prose-lg max-w-3xl">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">1. Datenschutz auf einen Blick</h2>
              
              <h3 className="text-2xl font-bold mt-6 mb-3">Allgemeine Hinweise</h3>
              <p className="text-neutral-700">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
              </p>

              <h3 className="text-2xl font-bold mt-6 mb-3">Datenerfassung auf unserer Website</h3>
              
              <h4 className="text-xl font-bold mt-4 mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
              <p className="text-neutral-700">
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
              </p>

              <h4 className="text-xl font-bold mt-4 mb-2">Wie erfassen wir Ihre Daten?</h4>
              <p className="text-neutral-700">
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
              </p>
              <p className="text-neutral-700 mt-3">
                Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenzugriffs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website betreten.
              </p>

              <h4 className="text-xl font-bold mt-4 mb-2">Wofür nutzen wir Ihre Daten?</h4>
              <p className="text-neutral-700">
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden. Zudem nutzen wir Ihre Daten zur Bearbeitung Ihrer Anfragen (Kontaktformular, Entrümpelungs-Anfrage) und zur Erstellung von Angeboten.
              </p>

              <h4 className="text-xl font-bold mt-4 mb-2">Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
              <p className="text-neutral-700">
                Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
              </p>
              <p className="text-neutral-700 mt-3">
                Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">2. Hosting</h2>
              <p className="text-neutral-700">
                Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
              </p>

              <h3 className="text-2xl font-bold mt-6 mb-3">Vercel</h3>
              <div className="text-neutral-700 space-y-2 mt-3">
                <p>
                  <strong>Anbieter:</strong> Vercel Inc., San Francisco<br />
                  <strong>Adresse:</strong> 340 S. Lemon Ave, Walnut, CA 91789<br />
                  <strong>Datenschutzerklärung:</strong> <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">https://vercel.com/legal/privacy-policy</a>
                </p>
              </div>

              <h3 className="text-2xl font-bold mt-6 mb-3">Vercel Blob (Speicher für Uploads)</h3>
              <p className="text-neutral-700">
                Wenn Sie im Rahmen Ihrer Anfrage Fotos hochladen, werden diese über den Dienst "Vercel Blob" gespeichert.
                <br />
                <strong>Anbieter:</strong> Vercel Inc., San Francisco<br />
                Die Speicherung erfolgt zur Bereitstellung der Fotos für die Angebotserstellung. Die Daten werden gelöscht, sobald sie für den Zweck nicht mehr erforderlich sind.
              </p>

              <h3 className="text-2xl font-bold mt-6 mb-3">Resend (E-Mail-Versand)</h3>
              <div className="text-neutral-700 space-y-2 mt-3">
                <p>
                  Der Versand von Transaktions-E-Mails (z. B. Bestätigung Ihrer Anfrage) erfolgt über den Dienstleister Resend.
                  <br />
                  <strong>Anbieter:</strong> Resend, Inc.<br />
                  <strong>Adresse:</strong> 2261 Market Street #4817, San Francisco, CA 94114, USA<br />
                  <strong>Datenschutzerklärung:</strong> <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">https://resend.com/legal/privacy-policy</a>
                </p>
              </div>

              <p className="text-neutral-700 mt-4">
                Der Hoster unserer Website erhebt in sog. Logfiles folgende Daten, die Ihr Browser übermittelt:
              </p>
              <ul className="text-neutral-700 list-disc list-inside mt-2">
                <li>IP-Adresse</li>
                <li>Datum und Uhrzeit der Anfrage</li>
                <li>Zeitzonendifferenz zur Greenwich Mean Time (GMT)</li>
                <li>Inhalt der Anforderung (konkrete Seite)</li>
                <li>Zugriffsstatus/HTTP-Statuscode</li>
                <li>jeweils übertragene Datenmenge</li>
                <li>Website, von der die Anforderung kommt</li>
                <li>Browser, Betriebssystem und deren Versionen</li>
              </ul>

              <p className="text-neutral-700 mt-4">
                Das ist erforderlich, um unsere Website anzuzeigen und die Stabilität und Sicherheit zu gewährleisten. Dies entspricht unserem berechtigten Interesse im Sinne des Art. 6 Abs. 1 S. 1 f) DSGVO.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">3. Datenerfassung auf unserer Website</h2>
              
              <h3 className="text-2xl font-bold mt-6 mb-3">Kontaktformular</h3>
              <p className="text-neutral-700">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten (Name, E-Mail, Telefonnummer, Service-Art, Objekttyp, Budget, Nachricht) zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p className="text-neutral-700 mt-3">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), sofern diese abgefragt wurde.
              </p>
              <p className="text-neutral-700 mt-3">
                Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
              </p>

              <h3 className="text-2xl font-bold mt-6 mb-3">Anfrage-Funnel (Entrümpelung & Services)</h3>
              <p className="text-neutral-700">
                Für detaillierte Service-Anfragen nutzen wir einen mehrstufigen Anfrage-Prozess ("Funnel"). Hierbei werden neben Ihren Kontaktdaten auch spezifische Projektdetails abgefragt, darunter:
              </p>
              <ul className="text-neutral-700 list-disc list-inside mt-2 mb-3">
                <li>Art der Dienstleistung und Objekt-Details (Etage, Aufzug, Fläche)</li>
                <li>Fotos des Objekts (optional)</li>
                <li>Adressdaten des Objekts</li>
                <li>Zeitpräferenzen</li>
              </ul>
              <p className="text-neutral-700">
                <strong>Zwischenspeicherung im Browser (Local Storage):</strong><br />
                Um Ihnen die Nutzung des Formulars zu erleichtern und Datenverlust bei Unterbrechungen zu vermeiden, werden Ihre Eingaben temporär im "Local Storage" Ihres Browsers gespeichert (Schlüssel: <code>entruempelung_funnel_draft</code>). Diese Daten verbleiben lokal auf Ihrem Endgerät und werden erst an uns übermittelt, wenn Sie das Formular final absenden. Sie können diese Daten jederzeit durch Löschen Ihres Browser-Caches entfernen. Nach erfolgreicher Übermittlung wird der lokale Speicher automatisch bereinigt.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">4. Analyse-Tools und Werbung</h2>
              
              <h3 className="text-2xl font-bold mt-6 mb-3">Cookie-Einwilligung (Cookie Consent)</h3>
              <p className="text-neutral-700">
                Unsere Website nutzt eine Consent-Management-Technologie, um Ihre Einwilligung zur Speicherung bestimmter Cookies auf Ihrem Endgerät oder zum Einsatz bestimmter Technologien einzuholen und diese datenschutzkonform zu dokumentieren.
              </p>
              <p className="text-neutral-700 mt-3">
                Wir unterscheiden folgende Kategorien:
              </p>
              <ul className="text-neutral-700 list-disc list-inside mt-2">
                <li><strong>Essenziell:</strong> Technisch notwendige Cookies, die für die Grundfunktionen der Website erforderlich sind (z. B. Speicherung Ihrer Cookie-Einstellungen).</li>
                <li><strong>Analyse:</strong> Cookies zur statistischen Auswertung der Websitenutzung, um unser Angebot zu verbessern.</li>
                <li><strong>Marketing:</strong> Cookies, um Ihnen relevante Inhalte und Werbung anzuzeigen.</li>
              </ul>
              <p className="text-neutral-700 mt-3">
                Ihre Auswahl wird in einem Cookie (<code>cookie-consent</code>) bzw. im Local Storage gespeichert, damit Sie nicht bei jedem Seitenbesuch erneut gefragt werden. Sie können Ihre Einstellungen jederzeit über den "Cookie-Einstellungen"-Button im Footer oder durch Löschen der Browserdaten ändern.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">5. Plugins und Tools</h2>

              <h3 className="text-2xl font-bold mt-6 mb-3">WhatsApp</h3>
              <p className="text-neutral-700">
                Wenn Sie uns per WhatsApp kontaktieren, übermitteln Sie uns automatisch Ihre Telefonnummer. Wir nutzen diese nur zur Kommunikation mit Ihnen. Bitte beachten Sie, dass WhatsApp (Meta Platforms Ireland Ltd.) eigene Datenschutzbestimmungen hat und Daten (z. B. Metadaten der Kommunikation) auch in die USA übertragen werden können. Wir empfehlen, keine sensiblen personenbezogenen Daten über WhatsApp zu versenden.
              </p>

              <h3 className="text-2xl font-bold mt-6 mb-3">Google Fonts (lokales Hosting)</h3>
              <p className="text-neutral-700">
                Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, die von Google bereitgestellt werden. Die Google Fonts sind lokal installiert. Eine Verbindung zu Servern von Google findet dabei nicht statt.
              </p>
              <p className="text-neutral-700 mt-2">
                Weitere Informationen zu Google Fonts finden Sie unter <a href="https://developers.google.com/fonts/faq" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">https://developers.google.com/fonts/faq</a> und in der Datenschutzerklärung von Google: <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">https://policies.google.com/privacy?hl=de</a>.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">6. Ihre Rechte</h2>
              
              <p className="text-neutral-700">
                Sie haben das Recht:
              </p>
              
              <ul className="text-neutral-700 list-disc list-inside space-y-2 mt-4">
                <li><strong>Recht auf Auskunft:</strong> Sie haben das Recht, von uns jederzeit eine Auskunft über die zu Ihrer Person gespeicherten Daten zu verlangen.</li>
                <li><strong>Recht auf Berichtigung:</strong> Sie haben das Recht, die Berichtigung unrichtiger oder unvollständiger Daten zu verlangen.</li>
                <li><strong>Recht auf Löschung:</strong> Sie haben das Recht, die Löschung Ihrer gespeicherten Daten zu verlangen, es sei denn, die Verarbeitung ist zur Erfüllung einer rechtlichen Verpflichtung erforderlich.</li>
                <li><strong>Recht auf Einschränkung der Verarbeitung:</strong> Sie können verlangen, dass die Verarbeitung Ihrer Daten eingeschränkt wird.</li>
                <li><strong>Recht auf Datenportabilität:</strong> Sie haben das Recht, Ihre Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.</li>
                <li><strong>Widerspruchsrecht:</strong> Sie können der Verarbeitung Ihrer Daten widersprechen.</li>
                <li><strong>Widerruf einer Einwilligung:</strong> Sie können eine von Ihnen erteilte Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.</li>
              </ul>

              <p className="text-neutral-700 mt-6">
                Um diese Rechte geltend zu machen oder bei Fragen zum Datenschutz, kontaktieren Sie uns bitte unter den im Impressum angegebenen Kontaktdaten.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">7. Beschwerdeverfahren</h2>
              
              <p className="text-neutral-700">
                Falls Sie der Meinung sind, dass wir gegen datenschutzrechtliche Bestimmungen verstoßen, haben Sie das Recht, sich bei der zuständigen Datenschutzbehörde zu beschweren.
              </p>
              
              <p className="text-neutral-700 mt-3">
                <strong>Datenschutzbeauftragte in Berlin:</strong><br />
                Berliner Beauftragte für Datenschutz und Informationsfreiheit<br />
                Friedrichstr. 219<br />
                10969 Berlin<br />
                Tel.: +49 (0) 30 13889-0<br />
                E-Mail: mailbox@datenschutz-berlin.de
              </p>
            </div>

            <div className="border-t-2 border-neutral-200 pt-8 mt-12">
              <p className="text-neutral-600 text-sm">
                <strong>Hinweis:</strong> Diese Datenschutzerklärung kann jederzeit aktualisiert werden. Bitte schauen Sie regelmäßig nach Updates. Eine Material-Änderung werden wir Ihnen, falls erforderlich, per E-Mail mitteilen.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
