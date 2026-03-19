# PRD: SiteConcept v2 — Ultra-Performance Next.js Studio

**Status:** Approved — Key Decisions Locked
**Date:** 2026-03-17
**Owner:** Bartek Blokesz
**Scope:** Public marketing website for SiteConcept studio (no n8n, Audit7, Data7 in this phase)

### Decyzje architektoniczne (2026-03-17)

| # | Decyzja | Uzasadnienie |
|---|---|---|
| D1 | Portfolio: zachowujemy Menżyk, Flames, Zbimax | Dowód doświadczenia; narracja "ewolucja do Next.js", nie odcięcie |
| D2 | i18n: subfolder `/en` na siteconcept.pl | Jeden autorytet domeny; Next.js `next-intl` obsługuje routing |
| D3 | Case study #1 = ta strona (SiteConcept v2 itself) | "Eating our own dog food" — Lighthouse 95+ jako żywy dowód stacku |

---

## 1. Vision & Positioning

SiteConcept v2 to radykalna zmiana wizerunku — ze strony freelancera Webflow do **profesjonalnego studia deweloperskiego** specjalizującego się w ultra-wydajnych stronach Next.js.

**Nowa tożsamość marki:**
> "We build blazing-fast, scalable Next.js websites for businesses that can't afford to be slow."

**Trzy filary pozycjonowania:**
1. **Speed** — Core Web Vitals 100/100, sub-1s LCP, edge-first deployment (Vercel)
2. **Scalability** — komponent-based architecture, headless CMS ready, API-first
3. **Clean Code** — TypeScript, testy, CI/CD, brak technicznego długu

---

## 2. Target Audience

### Rynek PL (primary)
- Firmy MŚP (10–200 pracowników) z budżetem 5 000–25 000 PLN
- Właściciele e-commerce szukający wymiany platformy Shopify/WooCommerce
- Startupy potrzebujące landing page + MVP w 4–8 tygodniach
- Agencje marketingowe bez własnego devu (white-label)

### Rynek Global (secondary)
- SaaS startups (EU/US) — budget $3k–$15k
- Digital agencies outsourcing Next.js work
- Product companies needing performant marketing sites

---

## 3. Pages & Information Architecture

### 3.1 Strona główna — nowa struktura

```
/
├── [Hero]           — Headline + social proof liczby + CTA
├── [Problem]        — "Twoja strona traci klientów przez wolne ładowanie"
├── [Solution]       — Next.js stack + co to oznacza dla biznesu
├── [Services]       — 3 pakiety (card grid)
├── [Process]        — 4 kroki współpracy (timeline)
├── [Results]        — Metryki z portfolio (Core Web Vitals, konwersja)
├── [Testimonials]   — Social proof z logo firm
├── [Tech Stack]     — Ikony technologii (Next.js, TS, Tailwind, Vercel, Sanity)
├── [FAQ]            — 6 najczęstszych pytań
└── [CTA/Contact]    — Formularz + Calendly embed
```

### 3.2 Pozostałe podstrony

| Ścieżka | Cel |
|---|---|
| `/uslugi` | Rozbudowany opis 3 pakietów + add-ony |
| `/portfolio` | Case studies z metrykami (before/after Core Web Vitals) |
| `/cennik` | Transparentna tabela cen PL i Global |
| `/kontakt` | Formularz + booking |
| `/blog` (future) | SEO content (MDX + Sanity CMS) |

---

## 4. Services Offered (v2)

### 4.1 Pakiet: Landing Page Ultra
- Jedna strona / max 3 sekcje dodatkowe
- Next.js 15 + Tailwind + TypeScript
- Formularz kontaktowy (Server Actions + Resend)
- Deployment na Vercel z CI/CD
- Core Web Vitals 95+
- Czas realizacji: 7–14 dni

### 4.2 Pakiet: Business Site
- Do 10 podstron
- Headless CMS (Sanity lub Contentlayer)
- SEO On-page (sitemap, OG, structured data)
- Analytics (Vercel Analytics lub Plausible)
- Czas realizacji: 3–6 tygodni

### 4.3 Pakiet: Scale
- Nieograniczona liczba podstron
- Custom design system (Storybook)
- Integracje API (CRM, newsletter, płatności)
- Testy E2E (Playwright)
- Dedicated support 3 miesiące
- Czas realizacji: 6–12 tygodni

### 4.4 Add-ony
- Migracja z Webflow/WordPress → Next.js
- Audyt Core Web Vitals + raport naprawczy
- Utrzymanie miesięczne (aktualizacje, monitoring, backup)
- Integracja CMS (Sanity, Payload, Contentful)

---

## 5. Pricing

### Pakiety główne (PL)

| Pakiet | Cena | Zakres | Czas |
|---|---|---|---|
| **Landing Page Ultra** | od 2 000 PLN | 1 strona / do 3 sekcji extra | 7–14 dni |
| **Business Core** | od 4 500 PLN | do 10 podstron | 3–6 tyg |
| **Pro Scale** | od 8 000 PLN | powyżej 10 podstron | 6–12 tyg |
| **Enterprise / AI Solutions** | wycena indywidualna | zakres ustalany osobno | do ustalenia |

Wszystkie pakiety realizowane w Next.js 15 + TypeScript + Vercel. Ceny zawierają deployment i konfigurację CI/CD.

### Dodatki płatne (Add-ony)

| Dodatek | Cena |
|---|---|
| Formularz kontaktowy | +300 PLN |
| Animacje podstawowe | +400 PLN |
| Animacje zaawansowane (Framer Motion) | +600–1 000 PLN |
| Integracja CMS (Sanity / Contentlayer) | +800 PLN |
| Podstawowe SEO On-page | +400 PLN |
| Rozszerzone SEO (structured data, sitemap, OG) | wycena indywidualna |
| Utrzymanie miesięczne | od 300 PLN/mies |
| Migracja Webflow → Next.js | od 1 500 PLN |

### Rynek Global (orientacyjnie)

| Package | Price |
|---|---|
| Landing Page Ultra | from €500 |
| Business Core | from €1 100 |
| Pro Scale | from €2 000 |
| Enterprise / AI Solutions | custom quote |

---

## 6. Tech Stack (produkcja)

| Warstwa | Technologia |
|---|---|
| Framework | Next.js 15 (App Router) |
| Język | TypeScript |
| Styling | Tailwind CSS v4 |
| Animacje | Framer Motion |
| CMS | Sanity v3 (opcjonalnie Contentlayer MDX) |
| Formularze | Server Actions + Resend |
| Deployment | Vercel (Edge Network) |
| Testy | Playwright (E2E) |
| Monitoring | Vercel Analytics + Sentry |

---

## 7. Tone of Voice

**Filozofia komunikacji:** Storytelling + Język Korzyści. Każde zdanie musi odpowiadać na pytanie klienta: *„Co ja z tego mam?"*

### 7.1 Trzy zasady copywritingu

**Zasada 1 — Zero technicznego bełkotu**
Nie piszemy o technologii. Piszemy o efektach.

| ❌ Nie mów | ✅ Mów zamiast tego |
|---|---|
| Next.js, React, TypeScript | Błyskawiczne ładowanie, niezawodność |
| SEO optimization | Bycie znajdowanym w Google |
| Vercel Edge Network | Otwiera się w ułamku sekundy |
| Server-side rendering | Działa od razu, bez czekania |
| Core Web Vitals 100/100 | Google nagradza nas widocznością |

**Zasada 2 — Metoda Jobsa (Jobs-to-be-Done)**
Klient nie kupuje strony. Kupuje: więcej klientów, lepszy wizerunek, spokój ducha, przewagę nad konkurencją.
Każda sekcja powinna odpowiadać na: *„Jaka zmiana zajdzie w życiu/biznesie klienta?"*

**Zasada 3 — Hero vs. Villain**
- **Villain (wróg):** Tani wygląd, powolność, brak zaufania, generyczne szablony, utracone przychody
- **Hero (rozwiązanie):** Status premium, zaufanie od pierwszego kliknięcia, marka która imponuje

### 7.2 Ton głosu

- **Pewny, nie arogancki** — mówimy z pozycji eksperta, który rozumie biznes klienta
- **Ciepły, nie korporacyjny** — jak rozmowa z doświadczonym doradcą, nie z działem sprzedaży
- **Konkretny, nie abstrakcyjny** — liczby, przykłady, efekty zamiast ogólników
- **Aspiracyjny** — pokazujemy, kim klient może się stać, nie tylko co dostanie

### 7.3 Zakazane słowa i frazy

`Next.js` / `React` / `TypeScript` / `SEO optimization` / `Core Web Vitals` / `edge deployment` /
`server-side rendering` / `ultra-fast` (w kontekście technicznym) / `stack` / `framework`

---

## 7b. Design Direction

- **Styl:** Dark mode-first, minimalistyczny, tech-forward
- **Typografia:** Inter lub Geist (system font stack dla wydajności)
- **Kolory:** Granatowy/Czarny base + akcent Electric Indigo lub Neon Green
- **Animacje:** Subtelne scroll-triggered reveals (Framer Motion), żadnych Lottie
- **Zdjęcia:** Zrezygnować ze stock photos — liczby, metryki, kod, screenshoty

---

## 8. SEO & Performance Targets

- Lighthouse Score: 95+ (wszystkie kategorie)
- LCP < 1.2s
- CLS < 0.05
- TTFB < 200ms (Vercel Edge)
- Core Web Vitals: ALL green
- Frazy docelowe PL: "strony next.js", "nowoczesne strony internetowe", "studio deweloperskie"
- Frazy docelowe EN: "next.js studio", "ultra-fast website development"

---

## 9. Out of Scope (v2)

- n8n workflow automation
- Audit7 tool
- Data7 tool
- Blog (faza późniejsza)
- Sklep / e-commerce własny

## 9b. i18n Architecture

**Podejście:** `next-intl` z subfolder routing (`/` → PL, `/en` → EN)

```
siteconcept.pl/          → wersja polska
siteconcept.pl/en/       → English version
siteconcept.pl/en/portfolio
siteconcept.pl/en/pricing
```

- Jedna domena = jeden autorytet SEO (hreflang zamiast osobnej domeny)
- Wspólny design system, osobne pliki tłumaczeń (`messages/pl.json`, `messages/en.json`)
- Canonical URLs z `hreflang` dla Google Search Console

---

## 9c. Portfolio Strategy

**Narracja:** "Zaczęliśmy od Webflow. Wiemy jak wyglądają ograniczenia. Dlatego przenieśliśmy się na Next.js."

| Projekt | Wersja | Jak pokazujemy |
|---|---|---|
| Menżyk, Flames, Zbimax | Webflow (legacy) | Badge "Webflow Era" + link live |
| SiteConcept v2 (ta strona) | Next.js | **Featured case study** — Lighthouse 95+, LCP <1s, budowa publiczna |
| Kolejne projekty | Next.js | Pełne metryki CWV before/after |

**"The Site Itself" case study:**
- Dokumentujemy publiczne wyniki Lighthouse po każdym release
- W portfolio opisujemy stack, decyzje, wyniki — jako live proof of work
- Pozwala mówić do klientów: "Nasza własna strona działa w X ms — Twoja może tak samo"

## 10. Success Metrics

| Metrika | Cel 3 mies. |
|---|---|
| Lighthouse Score | ≥ 95 |
| Czas ładowania strony głównej | < 1.5s |
| Zapytania ofertowe / miesiąc | ≥ 5 |
| Średnia wartość projektu | ≥ 8 000 PLN |
| Pozycja Google "studio next.js" | Top 10 |
