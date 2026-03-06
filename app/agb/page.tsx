import type { Metadata } from 'next'
import { Section, Container } from '@/components/ui'

export const metadata: Metadata = {
  title: 'AGB | BC Group Berlin',
  description: 'Allgemeine Geschäftsbedingungen (AGB) der BC Group Berlin',
  robots: 'noindex, nofollow',
  alternates: {
    canonical: 'https://bcgroup.de/agb',
  },
}

export default function AGBPage() {
  return (
    <>
      {/* Hero */}
      <Section background="gradient" padding="medium" className="pt-32">
        <Container className="text-center">
          <h1 className="text-5xl md:text-6xl font-black text-white uppercase mb-4">
            AGB
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Allgemeine Geschäftsbedingungen
          </p>
        </Container>
      </Section>

      {/* Content */}
      <Section background="white" padding="large">
        <Container size="narrow" className="prose prose-lg max-w-3xl">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">1. Geltungsbereich</h2>
              <p className="text-neutral-700">
                Diese Allgemeinen Geschäftsbedingungen (nachfolgend "AGB") gelten für alle Verträge, die zwischen der BC Group (nachfolgend "Auftragnehmer") und ihren Kunden (nachfolgend "Auftraggeber") geschlossen werden. Die AGB gelten für alle Dienstleistungen des Auftragnehmers, insbesondere in den Bereichen Entrümpelung, Abriss, Reinigung, Hausmeisterservice, Umzug und Kurierdienst.
              </p>
              <p className="text-neutral-700 mt-2">
                Entgegenstehende oder von diesen AGB abweichende Bedingungen des Auftraggebers werden nicht anerkannt, es sei denn, der Auftragnehmer hat ihrer Geltung ausdrücklich schriftlich zugestimmt.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">2. Vertragsschluss</h2>
              <p className="text-neutral-700">
                Die Angebote des Auftragnehmers sind freibleibend und unverbindlich. Ein Vertrag kommt erst durch die schriftliche Auftragsbestätigung des Auftragnehmers oder durch die Ausführung der Dienstleistung zustande.
              </p>
              <p className="text-neutral-700 mt-2">
                Mündliche Nebenabreden oder Zusicherungen bedürfen zu ihrer Wirksamkeit der schriftlichen Bestätigung durch den Auftragnehmer.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">3. Leistungsumfang</h2>
              <p className="text-neutral-700">
                Der Umfang der vertraglichen Leistungen ergibt sich aus dem schriftlichen Angebot bzw. der Auftragsbestätigung. Nachträgliche Änderungen oder Erweiterungen des Leistungsumfangs bedürfen einer gesonderten Vereinbarung und können zu Mehrkosten führen.
              </p>
              <p className="text-neutral-700 mt-2">
                Der Auftragnehmer ist berechtigt, zur Erfüllung seiner Verpflichtungen Dritte (Subunternehmer) einzuschalten.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">4. Preise und Zahlungsbedingungen</h2>
              <p className="text-neutral-700">
                Es gelten die im Angebot vereinbarten Preise. Alle Preise verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer, sofern nicht anders angegeben.
              </p>
              <p className="text-neutral-700 mt-2">
                Rechnungen sind sofort nach Erhalt ohne Abzug zur Zahlung fällig, sofern keine andere Zahlungsfrist vereinbart wurde. Bei Zahlungsverzug ist der Auftragnehmer berechtigt, Verzugszinsen in gesetzlicher Höhe zu berechnen.
              </p>
              <p className="text-neutral-700 mt-2">
                Der Auftragnehmer ist berechtigt, angemessene Abschlagszahlungen oder Vorauskasse zu verlangen.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">5. Mitwirkungspflichten des Auftraggebers</h2>
              <p className="text-neutral-700">
                Der Auftraggeber ist verpflichtet, dem Auftragnehmer den Zugang zum Leistungsort zu den vereinbarten Zeiten zu ermöglichen und alle für die Durchführung der Arbeiten erforderlichen Informationen und Unterlagen rechtzeitig zur Verfügung zu stellen.
              </p>
              <p className="text-neutral-700 mt-2">
                Bei Entrümpelungs- und Abrissarbeiten hat der Auftraggeber sicherzustellen, dass keine gefährlichen Stoffe (z.B. Asbest, Chemikalien) vorhanden sind, die nicht ausdrücklich im Auftrag erwähnt wurden. Sollten solche Stoffe während der Arbeiten entdeckt werden, ist der Auftragnehmer berechtigt, die Arbeiten zu unterbrechen und ggf. Mehrkosten für die fachgerechte Entsorgung geltend zu machen.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">6. Abnahme und Mängelrüge</h2>
              <p className="text-neutral-700">
                Nach Beendigung der Arbeiten hat der Auftraggeber die Leistung unverzüglich abzunehmen. Offensichtliche Mängel sind unverzüglich, spätestens jedoch innerhalb von 3 Werktagen nach Leistungserbringung, schriftlich anzuzeigen.
              </p>
              <p className="text-neutral-700 mt-2">
                Verdeckte Mängel sind unverzüglich nach ihrer Entdeckung schriftlich anzuzeigen.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">7. Haftung</h2>
              <p className="text-neutral-700">
                Der Auftragnehmer haftet für Schäden, die durch ihn oder seine Erfüllungsgehilfen vorsätzlich oder grob fahrlässig verursacht wurden, unbeschränkt.
              </p>
              <p className="text-neutral-700 mt-2">
                Für leichte Fahrlässigkeit haftet der Auftragnehmer nur bei Verletzung wesentlicher Vertragspflichten (Kardinalpflichten). In diesem Fall ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt.
              </p>
              <p className="text-neutral-700 mt-2">
                Die Haftung für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit bleibt unberührt.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">8. Kündigung und Stornierung</h2>
              <p className="text-neutral-700">
                Kündigt der Auftraggeber den Vertrag vor Beginn der Ausführung, so ist der Auftragnehmer berechtigt, eine angemessene Entschädigung für die bereits entstandenen Kosten und den entgangenen Gewinn zu verlangen.
              </p>
              <p className="text-neutral-700 mt-2">
                Bei einer Stornierung weniger als 48 Stunden vor dem vereinbarten Termin werden 50% der Auftragssumme als Ausfallhonorar fällig.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">9. Eigentumsvorbehalt</h2>
              <p className="text-neutral-700">
                Gelieferte Waren und Materialien bleiben bis zur vollständigen Bezahlung aller Forderungen aus der Geschäftsverbindung im Eigentum des Auftragnehmers.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">10. Datenschutz</h2>
              <p className="text-neutral-700">
                Der Auftragnehmer verarbeitet personenbezogene Daten des Auftraggebers unter Beachtung der geltenden Datenschutzbestimmungen. Weitere Informationen finden sich in der Datenschutzerklärung.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">11. Schlussbestimmungen</h2>
              <p className="text-neutral-700">
                Es gilt das Recht der Bundesrepublik Deutschland.
              </p>
              <p className="text-neutral-700 mt-2">
                Gerichtsstand für alle Streitigkeiten aus diesem Vertrag ist, soweit gesetzlich zulässig, Berlin.
              </p>
              <p className="text-neutral-700 mt-2">
                Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, so bleibt die Wirksamkeit der übrigen Bestimmungen hiervon unberührt.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
