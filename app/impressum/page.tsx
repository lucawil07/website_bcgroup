import type { Metadata } from 'next'
import { Section, Container } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Impressum | BC Group Berlin',
  description: 'Impressum und Kontaktdaten der BC Group Berlin',
  robots: 'noindex, nofollow',
}

export default function ImpressumPage() {
  return (
    <>
      {/* Hero */}
      <Section background="dark" padding="medium" className="pt-32">
        <Container className="text-center">
          <h1 className="text-5xl md:text-6xl font-black text-white uppercase mb-4">
            IMPRESSUM
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Rechtliche Informationen und Kontaktdaten
          </p>
        </Container>
      </Section>

      {/* Content */}
      <Section background="white" padding="large">
        <Container size="narrow" className="prose prose-lg max-w-3xl">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Anbieter</h2>
              <div className="text-neutral-700 space-y-2">
                <p>
                  <strong>Berlin ClearOut – Entrümpelung & Haushaltsauflösung</strong>
                </p>
                <p>
                  Willmanndamm 7<br />
                  10827 Berlin<br />
                  Deutschland
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Vertretungsberechtigte Person</h2>
              <p className="text-neutral-700">
                Inhaber: Eneas Savyer
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Kontaktdaten</h2>
              <div className="text-neutral-700 space-y-2">
                <p>
                  <strong>Telefon:</strong> <a href="tel:+4917679567083" className="text-secondary hover:underline">+49 176 79567083</a><br />
                  <strong>E-Mail:</strong> <a href="mailto:info@bc-entruempelung.com" className="text-secondary hover:underline">info@bc-entruempelung.com</a><br />
                  <strong>Web:</strong> <a href="https://www.bc-entruempelung.com" className="text-secondary hover:underline">www.bc-entruempelung.com</a>
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Handelsregister</h2>
              <div className="text-neutral-700 space-y-2">
                <p>
                  <strong>Registergericht:</strong> Amtsgericht Berlin-Charlottenburg<br />
                  <strong>Handelsregisternummer:</strong> [HRB-Nummer]
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Umsatzsteuer-Identifikationsnummer</h2>
              <p className="text-neutral-700">
                <strong>USt-IdNr.:</strong> [USt-IdNr.]
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Berufsbezeichnung und Berufsordnung</h2>
              <div className="text-neutral-700 space-y-2">
                <p>
                  [Berufsbezeichnung gemäß Gewerbeanmeldung]
                </p>
                <p>
                  Zuständige Kammer: [Handwerkskammer Berlin oder ähnlich]
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Haftung für Inhalte</h2>
              <div className="text-neutral-700 space-y-4">
                <p>
                  Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Haftung für Links</h2>
              <div className="text-neutral-700 space-y-4">
                <p>
                  Unsere Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Urheberrecht</h2>
              <div className="text-neutral-700 space-y-4">
                <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des Autors oder Schöpfers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Datenschutz</h2>
              <p className="text-neutral-700">
                Informationen zum Datenschutz finden Sie in unserer <a href="/datenschutz" className="text-secondary hover:underline font-semibold">Datenschutzerklärung</a>.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Streitbeilegung</h2>
              <div className="text-neutral-700 space-y-4">
                <p>
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
