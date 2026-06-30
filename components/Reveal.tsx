'use client';

import { useBlurReveal } from './useBlurReveal';

export default function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useBlurReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`blur-in ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  );
}
