"use client";

import { Marquee } from "@/components/ui/marquee";
import { ReviewCard } from "@/components/ui/review-card";

const reviews = [
  {
    name: "Thomas M.",
    service: "Umzugsservice",
    rating: 5,
    comment:
      "Professioneller Umzug von A bis Z. Das Team war pünktlich, sorgfältig und sehr freundlich. Alle Möbel wurden ohne Schäden transportiert. Absolut empfehlenswert!",
    date: "Vor 2 Wochen",
  },
  {
    name: "Sarah K.",
    service: "Entrümpelung",
    rating: 5,
    comment:
      "Schnelle und gründliche Entrümpelung meiner Wohnung. Das Team hat alles professionell erledigt und die Wohnung besenrein hinterlassen. Top Service!",
    date: "Vor 1 Monat",
  },
  {
    name: "Michael B.",
    service: "Reinigungsservice",
    rating: 5,
    comment:
      "Die Grundreinigung war hervorragend. Jede Ecke wurde perfekt gesäubert. Das Personal war sehr höflich und arbeitete sehr gewissenhaft.",
    date: "Vor 3 Wochen",
  },
  {
    name: "Anna W.",
    service: "Hausmeisterservice",
    rating: 5,
    comment:
      "Zuverlässiger Hausmeisterservice für unsere Wohnanlage. Schnelle Reaktionszeiten bei Problemen und faire Preise. Sehr zufrieden!",
    date: "Vor 1 Woche",
  },
  {
    name: "Peter S.",
    service: "Abrissarbeiten",
    rating: 5,
    comment:
      "Professionelle Durchführung der Abrissarbeiten. Alles wurde termingerecht und sauber erledigt. Gutes Preis-Leistungs-Verhältnis.",
    date: "Vor 2 Monaten",
  },
  {
    name: "Julia R.",
    service: "Kurierdienst",
    rating: 5,
    comment:
      "Expresskurier hat perfekt funktioniert. Pünktliche Abholung und Zustellung innerhalb Berlins. Sehr empfehlenswert für eilige Sendungen!",
    date: "Vor 1 Woche",
  },
  {
    name: "Markus L.",
    service: "Entrümpelung",
    rating: 5,
    comment:
      "Die Kellerentrümpelung wurde schnell und gründlich durchgeführt. Faire Preise und sehr freundliches Personal. Gerne wieder!",
    date: "Vor 3 Wochen",
  },
  {
    name: "Stefanie H.",
    service: "Umzugsservice",
    rating: 5,
    comment:
      "Unser Büroumzug wurde perfekt koordiniert. Minimale Ausfallzeit und alles lief nach Plan. Sehr professionelles Team!",
    date: "Vor 1 Monat",
  },
  {
    name: "Daniel F.",
    service: "Reinigungsservice",
    rating: 5,
    comment:
      "Regelmäßige Büroreinigung auf höchstem Niveau. Das Team ist zuverlässig und arbeitet sehr gründlich. Beste Empfehlung!",
    date: "Vor 2 Wochen",
  },
  {
    name: "Claudia N.",
    service: "Hausmeisterservice",
    rating: 5,
    comment:
      "Kompetenter Hausmeisterservice mit schnellen Reaktionszeiten. Alle Reparaturen wurden fachgerecht ausgeführt. Top!",
    date: "Vor 1 Woche",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

export function ReviewMarquee() {
  return (
    <section className="section-padding bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="content-wrapper">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Was unsere Kunden sagen
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Über 500+ zufriedene Kunden vertrauen auf unsere Dienstleistungen
            in Berlin und Brandenburg
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className="h-6 w-6 fill-yellow-400 text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900">4.9</span>
            <span className="text-gray-600">(523 Bewertungen)</span>
          </div>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg">
          <Marquee pauseOnHover className="[--duration:40s]">
            {firstRow.map((review, index) => (
              <ReviewCard key={`first-${index}`} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:40s]">
            {secondRow.map((review, index) => (
              <ReviewCard key={`second-${index}`} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white via-white/80 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
