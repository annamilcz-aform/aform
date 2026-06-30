import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AFORM — Architektura wnętrz oparta na neuroarchitekturze',
  description:
    'AFORM projektuje wnętrza rezydencjalne, hospitality i komercyjne premium w oparciu o neuroarchitekturę — naukę o tym, jak przestrzeń wpływa na ciało i umysł.',
  metadataBase: new URL('https://aform.pl'),
  openGraph: {
    title: 'AFORM — Architektura, która zna twój układ nerwowy.',
    description:
      'Projektujemy wnętrza w oparciu o neuroarchitekturę. Rezydencje, hospitality, przestrzenie komercyjne premium.',
    url: 'https://aform.pl',
    siteName: 'AFORM',
    locale: 'pl_PL',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
