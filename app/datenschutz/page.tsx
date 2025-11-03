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
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
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
              <h2 className="text-3xl font-bold mb-4">3. Kontaktformular</h2>
              <p className="text-neutral-700">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und falls Sie Fragen haben sollten, zur Kontaktaufnahme bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p className="text-neutral-700 mt-3">
                Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt somit ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 S. 1 a) DSGVO). Ein Widerruf dieser Einwilligung ist jederzeit möglich. Die bereits erfolgte Datenverarbeitung bis zum Widerruf bleibt davon unberührt.
              </p>
              <p className="text-neutral-700 mt-3">
                Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Unberührt bleiben zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">4. Analyse-Tools und Tracking</h2>
              
              <h3 className="text-2xl font-bold mt-6 mb-3">Cookies</h3>
              <p className="text-neutral-700">
                Unsere Internetseiten verwenden an mehreren Stellen sogenannte Cookies. Diese ermöglichen es uns, die Website nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.
              </p>
              <p className="text-neutral-700 mt-3">
                Die meisten der von uns verwendeten Cookies sind sogenannte „Session-Cookies". Diese werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.
              </p>
              <p className="text-neutral-700 mt-3">
                Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und einzeln über deren Annahme entscheiden oder die Annahme von Cookies für bestimmte Fälle oder generell ausschließen können. Bei der Nichtakzeptanz von Cookies kann die Funktionalität unserer Website eingeschränkt sein.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">5. Ihre Rechte</h2>
              
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
              <h2 className="text-3xl font-bold mb-4">6. Beschwerdeverfahren</h2>
              
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
