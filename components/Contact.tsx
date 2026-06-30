'use client';

import Reveal from './Reveal';

export default function Contact() {
  return (
    <section id="kontakt" className="w-full bg-baseAlt py-32 md:py-44 px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-accent mb-4 text-center">
            Kontakt
          </p>
          <h2 className="font-serif font-light text-ink text-3xl md:text-4xl mb-4 text-center max-w-2xl mx-auto">
            Twoja przestrzeń może pracować na twoją korzyść.
          </h2>
          <p className="font-sans text-inkSoft text-center mb-16">
            Umów konsultację strategiczną.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          <Reveal>
            <form className="flex flex-col gap-5 glass rounded-sm p-8 md:p-10 border border-ink/10">
              <div>
                <label className="font-sans text-xs tracking-wide uppercase text-inkSoft mb-2 block">
                  Imię i nazwisko
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-ink/20 py-2 font-sans text-ink focus:outline-none focus:border-accent transition-colors"
                  placeholder="Jan Kowalski"
                />
              </div>
              <div>
                <label className="font-sans text-xs tracking-wide uppercase text-inkSoft mb-2 block">
                  E-mail lub telefon
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-ink/20 py-2 font-sans text-ink focus:outline-none focus:border-accent transition-colors"
                  placeholder="kontakt@email.pl"
                />
              </div>
              <div>
                <label className="font-sans text-xs tracking-wide uppercase text-inkSoft mb-2 block">
                  Typ projektu
                </label>
                <select className="w-full bg-transparent border-b border-ink/20 py-2 font-sans text-ink focus:outline-none focus:border-accent transition-colors">
                  <option>Rezydencja prywatna</option>
                  <option>Hospitality</option>
                  <option>Przestrzeń komercyjna</option>
                  <option>Inne</option>
                </select>
              </div>
              <div>
                <label className="font-sans text-xs tracking-wide uppercase text-inkSoft mb-2 block">
                  Krótki opis projektu
                </label>
                <textarea
                  rows={3}
                  className="w-full bg-transparent border-b border-ink/20 py-2 font-sans text-ink focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Lokalizacja, metraż, orientacyjny termin..."
                />
              </div>
              <button
                type="submit"
                className="mt-4 self-start font-sans text-sm tracking-wide uppercase text-base bg-ink px-8 py-4 rounded-sm hover:bg-accent transition-colors duration-300"
              >
                Wyślij zgłoszenie
              </button>
            </form>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-sm overflow-hidden border border-ink/10 bg-base h-full min-h-[480px] flex flex-col">
              <div className="p-6 border-b border-ink/10">
                <p className="font-sans text-xs tracking-wide uppercase text-inkSoft">
                  Lub zarezerwuj termin bezpośrednio
                </p>
              </div>
              {/* Cal.com embed — podmień "aform/konsultacja" na swój link po założeniu konta na cal.com */}
              <iframe
                src="https://cal.com/aform/konsultacja-strategiczna?theme=light"
                className="w-full flex-1 min-h-[420px]"
                title="Rezerwacja konsultacji AFORM"
                frameBorder="0"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
