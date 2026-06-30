'use client';

import { motion } from 'framer-motion';

const line1 = 'Zanim zaprojektujemy wnętrze —';
const line2 = 'projektujemy reakcję, jaką w tobie wywoła.';

function AnimatedLine({ text, delayStart }: { text: string; delayStart: number }) {
  const words = text.split(' ');
  return (
    <span className="inline-block">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: 'blur(8px)', y: 10 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{
            duration: 1.1,
            delay: delayStart + i * 0.09,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="inline-block mr-[0.28em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden flex flex-col items-center justify-center bg-base">
      {/* Bokeh / blur shapes w tle — ledwo dostrzegalne */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[15%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-accentSoft/20 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[12%] w-[30vw] h-[30vw] rounded-full bg-baseAlt blur-[100px]" />
        <div className="absolute top-[40%] right-[25%] w-[20vw] h-[20vw] rounded-full bg-accent/10 blur-[90px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <motion.p
          initial={{ opacity: 0, filter: 'blur(6px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-inkSoft mb-8"
        >
          AFORM
        </motion.p>

        <h1 className="font-serif font-light text-ink text-[7vw] md:text-[3.4vw] leading-[1.25] max-w-4xl">
          <AnimatedLine text={line1} delayStart={0.3} />
          <br />
          <AnimatedLine text={line2} delayStart={1.0} />
        </h1>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.4, ease: 'easeOut' }}
        className="absolute bottom-10 flex flex-col items-center gap-3"
      >
        <span className="font-sans text-[11px] tracking-[0.2em] uppercase text-inkSoft">
          przewiń, by zobaczyć jak
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 bg-inkSoft/40"
        />
      </motion.div>
    </section>
  );
}
