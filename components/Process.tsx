import Reveal from './Reveal';

const steps = [
  {
    n: '01',
    title: 'Diagnoza przestrzeni i potrzeb',
    desc: 'Analizujemy funkcję, użytkowników i kontekst — fizyczny i emocjonalny — zanim padnie pierwsza koncepcja.',
  },
  {
    n: '02',
    title: 'Koncepcja oparta na neuroarchitekturze',
    desc: 'Projektujemy światło, akustykę i materiał pod kątem tego, jak wpłyną na osoby przebywające w przestrzeni.',
  },
  {
    n: '03',
    title: 'Projekt wykonawczy i dobór materiałów',
    desc: 'Precyzyjna dokumentacja i selekcja materiałów, faktur oraz oświetlenia zgodna z koncepcją i budżetem.',
  },
  {
    n: '04',
    title: 'Nadzór realizacji',
    desc: 'Towarzyszymy inwestycji do końca, dbając, by efekt finalny był wierny pierwotnej intencji projektowej.',
  },
];

export default function Process() {
  return (
    <section id="proces" className="w-full bg-base py-32 md:py-44 px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-accent mb-4">
            Proces
          </p>
          <h2 className="font-serif font-light text-ink text-3xl md:text-4xl mb-16 max-w-xl">
            Proces zbudowany na konsultacji, nie zgadywaniu.
          </h2>
        </Reveal>

        <div className="flex flex-col">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <div className="flex flex-col md:flex-row md:items-baseline gap-3 md:gap-10 py-9 border-t border-ink/10 last:border-b">
                <span className="font-serif font-light text-accent text-2xl md:w-16 shrink-0">
                  {s.n}
                </span>
                <h3 className="font-serif font-light text-ink text-xl md:text-2xl md:w-80 shrink-0">
                  {s.title}
                </h3>
                <p className="font-sans text-inkSoft text-[15px] leading-relaxed max-w-lg">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
