# AFORM — strona internetowa

Next.js 14 + Tailwind CSS + Framer Motion. Sygnatura wizualna: elementy wchodzące w viewport pojawiają się rozmyte i wyostrzają się (`.blur-in` w `app/globals.css`).

## Struktura

- `app/layout.tsx` — fonty (Fraunces + Inter), metadata SEO
- `app/page.tsx` — spina wszystkie sekcje
- `components/Hero.tsx` — sekcja startowa, suspens, animacja słowo-po-słowie
- `components/ManifestAbout.tsx` — manifest neuroarchitektury + dowód (o nas)
- `components/Portfolio.tsx` — realizacje, efekt depth-of-field na hover
- `components/Testimonials.tsx` — opinie klientów
- `components/Process.tsx` — proces pracy, 4 kroki
- `components/Contact.tsx` — formularz kwalifikujący + embed Cal.com
- `components/Footer.tsx`

## Jak wgrać na GitHub (przez przeglądarkę, bez terminala)

1. Wejdź na github.com, zaloguj się, kliknij **"New repository"**
2. Nazwa: `aform`, ustaw jako Public lub Private, NIE zaznaczaj "Add README" → **Create repository**
3. Na stronie repo kliknij **"uploading an existing file"**
4. Przeciągnij WSZYSTKIE pliki i foldery z tego projektu (zachowując strukturę folderów `app/` i `components/`)
5. Kliknij **"Commit changes"**

## Jak wystawić na Vercel

1. Wejdź na vercel.com, zaloguj się przez GitHub
2. Kliknij **"Add New" → "Project"**
3. Wybierz repozytorium `aform` → **"Import"**
4. Framework Preset: Vercel wykryje automatycznie "Next.js" — nic nie zmieniaj
5. Kliknij **"Deploy"** — build potrwa ok. 1-2 minuty
6. Po zakończeniu dostaniesz adres typu `aform.vercel.app` — strona już działa

## Podłączenie domeny aform.pl (na końcu)

1. W projekcie na Vercel: **Settings → Domains → Add**, wpisz `aform.pl`
2. Vercel pokaże dokładne rekordy DNS (zwykle: A record `76.76.21.21` dla `@`, oraz CNAME `cname.vercel-dns.com` dla `www`)
3. Zaloguj się do panelu, gdzie kupiono domenę, wejdź w zarządzanie DNS i wpisz te rekordy
4. Propagacja: zwykle 15 min – 2h

## Do zrobienia przed publikacją

- **Cal.com**: załóż darmowe konto na cal.com, stwórz wydarzenie "Konsultacja strategiczna", podmień link w `components/Contact.tsx` (linia z `src="https://cal.com/aform/..."`) na swój rzeczywisty link
- **Zdjęcia realizacji**: w `components/Portfolio.tsx` podmień tablicę `projects` — zamiast linków Unsplash wstaw swoje wizualizacje (najlepiej wrzucone np. do `/public/images/` i odwołanie `/images/nazwa.jpg`)
- **Opinie klientów**: w `components/Testimonials.tsx` podmień treści na rzeczywiste cytaty
- **Formularz kontaktowy**: obecnie jest to formularz statyczny (UI gotowe, brak wysyłki). Do podłączenia realnej wysyłki e-maili polecam darmowy **Formspree** lub **Resend** — mogę to dodać w kolejnym kroku
