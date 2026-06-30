export default function Footer() {
  return (
    <footer className="w-full bg-base border-t border-ink/10 py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        <div>
          <p className="font-serif text-ink text-xl mb-2">AFORM</p>
          <p className="font-sans text-inkSoft text-sm max-w-xs">
            Architektura wnętrz oparta na neuroarchitekturze. Rezydencje,
            hospitality, przestrzenie komercyjne premium.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-sans text-xs tracking-wide uppercase text-inkSoft mb-2">
            Nawigacja
          </p>
          <a href="#realizacje" className="link-reveal font-sans text-sm text-ink w-fit">
            Realizacje
          </a>
          <a href="#proces" className="link-reveal font-sans text-sm text-ink w-fit">
            Proces
          </a>
          <a href="#kontakt" className="link-reveal font-sans text-sm text-ink w-fit">
            Kontakt
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-sans text-xs tracking-wide uppercase text-inkSoft mb-2">
            Kontakt
          </p>
          <a href="mailto:studio@aform.pl" className="link-reveal font-sans text-sm text-ink w-fit">
            studio@aform.pl
          </a>
          <a href="#" className="link-reveal font-sans text-sm text-ink w-fit">
            Instagram
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-14 pt-6 border-t border-ink/10">
        <p className="font-sans text-xs text-inkSoft">
          © {new Date().getFullYear()} AFORM. Wszelkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  );
}
