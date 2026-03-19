# SPEC: Technical Stack — SiteConcept v2

**Status:** Approved
**Date:** 2026-03-18
**Owner:** Bartek Blokesz
**Linked PRD:** `docs/prd/siteconcept-v2.md`

---

## 1. Runtime & Framework

| Layer | Technology | Version | Notes |
|---|---|---|---|
| Framework | Next.js (App Router) | 16.x | `src/app/` structure, Server Components by default |
| Language | TypeScript | 5.x | Strict mode enabled |
| Runtime | Node.js | 20 LTS | Required by Vercel build |
| React | React | 19.x | RSC + Server Actions |

**Key conventions:**
- All pages are Server Components by default — `"use client"` only when strictly needed (interactivity, hooks, Framer Motion).
- Server Actions used for all form submissions (no separate API routes for forms).

---

## 2. Routing & i18n

**Library:** `next-intl` (v3+)

### URL Structure

```
siteconcept.pl/           → PL (default locale, no prefix)
siteconcept.pl/en/        → EN
siteconcept.pl/uslugi     → PL services
siteconcept.pl/en/services → EN services
```

### Routing Setup

- **`middleware.ts`** at root — `next-intl` middleware handles locale detection and redirects.
- **`src/app/[locale]/`** — dynamic locale segment wraps all pages.
- **`src/i18n/routing.ts`** — defines `locales: ['pl', 'en']`, `defaultLocale: 'pl'`.
- **`src/i18n/request.ts`** — server-side message loading.

### Messages / Translations

```
messages/
├── pl.json   ← primary content (Polish)
└── en.json   ← English translation
```

- No CMS in v1. All copy lives in JSON files.
- Keys follow `page.section.element` convention, e.g. `home.hero.headline`.
- `useTranslations('home.hero')` in Server Components.

### SEO i18n

- `hreflang` tags generated via Next.js `metadata` API in `[locale]/layout.tsx`.
- Canonical URLs set per locale.

---

## 3. Styling

**Library:** Tailwind CSS v4

- Config-free setup (CSS-first via `@import "tailwindcss"`).
- Custom design tokens defined in `src/app/globals.css` using CSS variables:

```css
:root {
  --color-brand: #6366f1;       /* Electric Indigo */
  --color-bg: #0a0a0f;          /* Near-black */
  --color-surface: #111118;
  --color-text: #f0f0f5;
  --color-muted: #6b7280;
  --font-sans: 'Geist', system-ui, sans-serif;
}
```

- Dark mode is the **only** mode (no light mode toggle in v1).
- Responsive breakpoints: `sm` (640), `md` (768), `lg` (1024), `xl` (1280), `2xl` (1536).
- Component styles use Tailwind utility classes directly — no CSS Modules unless unavoidable.

---

## 4. Animations

**Library:** Framer Motion (v11+)

- Used exclusively in Client Components (`"use client"`).
- **Scroll-triggered reveals:** `motion.div` with `whileInView` + `viewport={{ once: true }}`.
- **Page transitions:** Minimal — `opacity` fade only, no layout shifts.
- **Stagger animations:** For card grids (Services, Tech Stack icons).
- **NO Lottie, NO GSAP** — Framer Motion only.

### Animation Presets (defined in `src/lib/animations.ts`)

```ts
export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
```

**Performance rule:** All `motion` components must have `viewport={{ once: true }}` — never re-animate on scroll back.

---

## 5. Content Architecture

No CMS in v1. Content sources:

| Content Type | Source | Notes |
|---|---|---|
| UI copy / translations | `messages/pl.json`, `messages/en.json` | via `next-intl` |
| Portfolio case studies | `src/data/portfolio.ts` | TypeScript data file |
| Services / Pricing | `src/data/services.ts` | TypeScript data file |
| Testimonials | `src/data/testimonials.ts` | TypeScript data file |
| FAQ | `src/data/faq.ts` | TypeScript data file |

TypeScript data files export typed arrays — easy to migrate to Sanity CMS in a future phase.

---

## 6. Forms & Contact

- **Library:** Next.js Server Actions
- **Email provider:** Resend
- **Validation:** `zod` (server-side schema validation)
- **UX:** Optimistic UI with `useActionState` hook

Flow:
```
User fills form → Server Action validates (zod) → Resend sends email → Success/error state returned
```

No client-side form library (no React Hook Form in v1 — keep bundle lean).

---

## 7. SEO & Metadata

- All metadata via Next.js `generateMetadata()` in each `page.tsx`.
- `sitemap.ts` — auto-generated sitemap for both locales.
- `robots.ts` — allows all, disallows `/api/`.
- Open Graph images: static `.png` files in `public/og/`.
- Structured data: `JSON-LD` injected via `<script>` in layout (Organization + WebPage schemas).

---

## 8. Performance Constraints

| Target | Metric |
|---|---|
| Lighthouse | ≥ 95 all categories |
| LCP | < 1.2s |
| CLS | < 0.05 |
| TTFB | < 200ms (Vercel Edge) |
| JS bundle (initial) | < 100 KB (gzipped) |

**Rules to enforce:**
- No `"use client"` without justification.
- Images: `next/image` only — never `<img>`.
- Fonts: `next/font/google` or `next/font/local` — no external font requests.
- Icons: `lucide-react` (tree-shaken SVGs) or inline SVGs — no icon fonts.
- Third-party scripts: `next/script` with `strategy="lazyOnload"` (e.g., Calendly).

---

## 9. Deployment

**Platform:** Vercel

| Config | Value |
|---|---|
| Framework Preset | Next.js |
| Build command | `npm run build` |
| Output directory | `.next` |
| Node.js version | 20.x |
| Region | `fra1` (Frankfurt — closest to PL market) |
| Analytics | Vercel Analytics (built-in, zero-bundle) |

**Environment variables** (set in Vercel Dashboard only — never in `.env` committed to repo):
- `RESEND_API_KEY`
- `CONTACT_EMAIL`

---

## 10. Dependencies Summary

### Production

```json
"next": "16.x",
"react": "19.x",
"react-dom": "19.x",
"next-intl": "^3",
"framer-motion": "^11",
"resend": "^3",
"zod": "^3",
"lucide-react": "^0.400"
```

### Dev

```json
"typescript": "^5",
"tailwindcss": "^4",
"@tailwindcss/postcss": "^4",
"eslint": "^9",
"eslint-config-next": "latest",
"@types/node": "^20",
"@types/react": "^19"
```

---

## 11. Proposed `src/` Folder Structure

```
src/
├── app/
│   ├── [locale]/                   ← next-intl locale wrapper
│   │   ├── layout.tsx              ← locale layout (fonts, i18n provider)
│   │   ├── page.tsx                ← Home page (/)
│   │   ├── uslugi/
│   │   │   └── page.tsx            ← /uslugi | /en/services
│   │   ├── portfolio/
│   │   │   └── page.tsx
│   │   ├── cennik/
│   │   │   └── page.tsx
│   │   └── kontakt/
│   │       └── page.tsx
│   ├── globals.css                 ← Tailwind v4 + CSS variables
│   ├── favicon.ico
│   ├── sitemap.ts                  ← Auto-generated sitemap
│   └── robots.ts
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx              ← Nav + language switcher
│   │   ├── Footer.tsx
│   │   └── LocaleSwitcher.tsx
│   ├── sections/                   ← Full-page sections (used in page.tsx)
│   │   ├── HeroSection.tsx
│   │   ├── ProblemSection.tsx
│   │   ├── SolutionSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── ResultsSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── TechStackSection.tsx
│   │   ├── FaqSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/                         ← Reusable primitives
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Badge.tsx
│       ├── AnimatedSection.tsx     ← Framer Motion wrapper (Client)
│       └── ContactForm.tsx         ← Form with Server Action
│
├── data/                           ← Static typed content (no CMS)
│   ├── portfolio.ts
│   ├── services.ts
│   ├── testimonials.ts
│   └── faq.ts
│
├── i18n/
│   ├── routing.ts                  ← locales config
│   └── request.ts                  ← server message loader
│
├── lib/
│   ├── animations.ts               ← Framer Motion presets
│   ├── send-contact.ts             ← Server Action (Resend)
│   └── schemas.ts                  ← Zod validation schemas
│
└── types/
    └── index.ts                    ← Shared TypeScript interfaces
```

---

## 12. Component Rules (`.clauderules` per directory)

| Directory | Rules |
|---|---|
| `src/components/ui/` | Stateless primitives only. No data fetching. Props typed explicitly. |
| `src/components/sections/` | Server Components by default. Pass data as props. `"use client"` only for animation wrappers. |
| `src/components/layout/` | Server Components. Language switcher is Client (uses `useRouter`). |
| `src/data/` | Pure TypeScript — no imports from `react` or `next`. Exportable to CMS later. |
| `src/lib/` | Utilities only. Server Actions marked with `"use server"`. |

---

*Next step: `docs/plans/01-setup.md` — project scaffolding plan.*

---

## 13. Ironclad Layout Rules (Zasady Żelaznego Layoutu)

Aby uniknąć błędów w wyrównaniu (alignment issues), każdy komponent w `src/components/sections/` oraz `src/components/layout/Header.tsx` MUSI stosować poniższą strukturę:

### 1. The Standard Container (Złota Klatka)
Każda sekcja bez wyjątku musi być zbudowana według schematu:
- `<section className="w-full py-24 md:py-32">` (Zewnętrzny pas)
- `  <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">` (Wewnętrzna klatka - TA SAMA DLA WSZYSTKICH)
- `    {content}`
- `  </div>`
- `</section>`

### 2. The Vertical Axis Rule (Zasada Osi)
- Logo w Headerze MUSI znajdować się wewnątrz dokładnie tego samego kontenera `max-w-7xl mx-auto px-6 md:px-12`. 
- Zabrania się używania `fixed` na poziomie `header`, jeśli nie jest on owinięty w kontener centrujący.
- Logo 'SiteConcept' musi zaczynać się w tej samej linii pionowej co nagłówki `H1` w sekcji Hero.

### 3. Typography Constraints
- Nagłówki w Hero: `max-w-4xl`.
- Paragrafy/Podtytuły: `max-w-2xl`.
- Jeśli element jest wycentrowany (`text-center`), musi posiadać klasę `mx-auto`, aby kontener tekstu nie rozlewał się na całą szerokość klatki.