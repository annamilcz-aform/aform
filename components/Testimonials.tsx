import Reveal from './Reveal';

const testimonials = [
  {
    quote:
      'Pierwszy raz spotkałem się z architektem, który tłumaczył mi decyzje projektowe, a nie tylko pokazywał wizualizacje. Efekt — biuro, w którym zespół realnie pracuje spokojniej.',
    author: 'Inwestor prywatny',
    role: 'Projekt komercyjny, Warszawa',
  },
  {
    quote:
      'Podejście oparte na neuroarchitekturze przełożyło się na konkret: układ świateł, akustykę, materiały. Goście hotelu zauważają różnicę, choć nie potrafią jej nazwać.',
    author: 'Właściciel obiektu hospitality',
    role: 'Boutique hotel, Mazury',
  },
  {
    quote:
      'Proces był transparentny od pierwszej konsultacji do odbioru. Dokładnie wiedziałem, na jakim etapie jesteśmy i dlaczego podjęto takie, a nie inne decyzje.',
    author: 'Klient prywatny',
    role: 'Rezydencja, Konstancin',
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-baseAlt py-32 md:py-44 px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-accent mb-4 text-center">
            Opinie
          </p>
          <h2 className="font-serif font-light text-ink text-3xl md:text-4xl mb-16 text-center">
            Zaufali nam przy decyzjach, które miały znaczenie.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 120}>
              <div className="flex flex-col gap-6 h-full">
                <span className="font-serif text-4xl text-accent/40 leading-none">
                  "
                </span>
                <p className="font-sans text-ink text-[15px] leading-relaxed -mt-4">
                  {t.quote}
                </p>
                <div className="mt-auto pt-4 border-t border-ink/10">
                  <p className="font-sans text-sm text-ink">{t.author}</p>
                  <p className="font-sans text-xs text-inkSoft">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
