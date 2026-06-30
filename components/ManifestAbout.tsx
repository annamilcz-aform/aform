import Reveal from './Reveal';

export default function ManifestAbout() {
  return (
    <section className="relative w-full bg-base py-32 md:py-44 px-6">
      <div className="max-w-3xl mx-auto flex flex-col gap-20">
        <Reveal>
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-accent mb-6">
            Manifest
          </p>
          <p className="font-serif font-light text-ink text-2xl md:text-[2.2rem] leading-snug mb-6">
            Większość wnętrz projektuje się pod oko.
            <br />
            My projektujemy pod cały organizm.
          </p>
          <p className="font-sans text-inkSoft text-base md:text-lg leading-relaxed max-w-2xl">
            Światło, akustyka, proporcja, faktura — każdy element wpływa na
            poziom kortyzolu, koncentrację, jakość snu, poczucie
            bezpieczeństwa. Neuroarchitektura to nie styl. To metoda
            podejmowania decyzji projektowych w oparciu o to, jak człowiek
            faktycznie reaguje na przestrzeń.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="w-12 h-px bg-inkSoft/30 mb-12" />
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-accent mb-6">
            O nas
          </p>
          <p className="font-serif font-light text-ink text-xl md:text-2xl leading-snug mb-6">
            AFORM łączy warsztat architekta wnętrz z wiedzą o tym, jak
            człowiek faktycznie odbiera przestrzeń.
          </p>
          <p className="font-sans text-inkSoft text-base md:text-lg leading-relaxed max-w-2xl">
            Każdy projekt zaczyna się od pytania nie „jak to ma wyglądać”,
            ale „jak to ma działać” — na koncentrację gospodarza, na gości
            hotelu, na klientów w przestrzeni komercyjnej. Efekt: wnętrza,
            które nie tylko reprezentują. One pracują na korzyść tych,
            którzy w nich przebywają.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
