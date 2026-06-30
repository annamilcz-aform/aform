'use client';

import { useState } from 'react';
import Reveal from './Reveal';

type Project = {
  id: string;
  title: string;
  category: string;
  img: string;
};

const projects: Project[] = [
  {
    id: 'p1',
    title: 'Rezydencja Konstancin',
    category: 'Rezydencje prywatne',
    img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'p2',
    title: 'Boutique Hotel Mazury',
    category: 'Hospitality',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'p3',
    title: 'Biuro kancelarii prawnej',
    category: 'Przestrzenie komercyjne',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'p4',
    title: 'Apartament Powiśle',
    category: 'Rezydencje prywatne',
    img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Portfolio() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="realizacje" className="w-full bg-base py-32 md:py-44 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-accent mb-4">
            Realizacje
          </p>
          <h2 className="font-serif font-light text-ink text-3xl md:text-4xl mb-16 max-w-xl">
            Przestrzenie zaprojektowane z intencją.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 100}>
              <a
                href="#"
                onMouseEnter={() => setHovered(p.id)}
                onMouseLeave={() => setHovered(null)}
                className="group block"
              >
                <div className="overflow-hidden rounded-sm mb-5 aspect-[4/5] bg-baseAlt">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.04]"
                    style={{
                      filter:
                        hovered && hovered !== p.id
                          ? 'blur(3px)'
                          : 'blur(0px)',
                      opacity: hovered && hovered !== p.id ? 0.7 : 1,
                    }}
                  />
                </div>
                <div className="flex items-baseline justify-between">
                  <h3 className="font-serif font-light text-ink text-lg md:text-xl">
                    {p.title}
                  </h3>
                  <span className="font-sans text-xs tracking-wide text-inkSoft">
                    {p.category}
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
