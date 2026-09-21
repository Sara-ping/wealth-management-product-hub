# Wealth Management Product Hub

**From Financial Products to Digital Wealth Management**

A personal knowledge and portfolio project that demonstrates three layers of understanding:

1. **Financial products** — equity, fixed income, funds, ETFs, structured products, OTC derivatives, insurance and FX.
2. **Wealth management processes** — segmentation, KYC/AML, risk profiling, suitability, advisory, portfolio management, order management and post-sale service.
3. **Digital product translation** — journeys, business rules, data, APIs, validation, exception handling, audit requirements, prioritisation and success metrics.

Built to read like a professional product knowledge base, not a blog or a student project.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4 (theme tokens in `src/styles/index.css`)
- React Router v7
- No backend — all content is static/mock data in `src/data`

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build
npm run preview  # serve the production build
```

## Routes

| Route | Content |
| --- | --- |
| `/` | Hero, product map, product → digital experience flow, three layers |
| `/products` | Product explorer with filters by asset class, risk, liquidity, horizon, complexity |
| `/products/equity` · `/fixed-income` · `/funds` · `/etfs` · `/structured-products` · `/otc-derivatives` · `/insurance` · `/fx` | Product detail pages |
| `/product-logic` | Six core concepts, product lifecycle, reusable product framework |
| `/wealth-management` | Ecosystem, client segmentation, core processes, value chain |
| `/digital-wealth` | 13-stage journey with rules/data/system/API/validation/exception/audit per stage |
| `/ai-wealth` | AI use cases, conceptual RAG architecture, controls and governance concepts |
| `/case-studies` | Four cases with full structure plus a Product Owner lens, user stories, KPIs, API contracts and risk register |
| `/product-owner` | Product Owner Lens: decision frameworks, client journey maps, user stories & acceptance criteria, KPIs with guardrails, prioritisation, risk register, system/API touchpoints, release plan |
| `/about` | Profile, skills, and clearly separated experience / learning / projects |

## Languages

The site is fully bilingual — **English / 中文**. Click **EN / 中文** in the header (or in the mobile menu) to switch every string on the site: navigation, page copy, product content, case studies, journeys, user stories, KPIs, risk register and search index.

- Choice is persisted in `localStorage` (`wmph-lang`) and defaults to the browser language
- `<html lang>` and `document.title` update on switch
- Long-form content lives in `src/data` (English) and `src/data/zh` (Chinese), bundled by `src/data/index.ts`
- Interface microcopy lives in `src/i18n/ui.ts`; page-level copy in `src/data/pages.ts` and `src/data/zh/pages.ts`

## Architecture

```
src/
  components/
    layout/       Navbar (sticky + ⌘K search), Footer, PageShell, Layout
    ui/           primitives (Reveal, Badge, Panel, Callout…), diagrams (ProcessFlow,
                  Timeline, DataTable, PayoffChart, StackedDiagram…), interactive
                  (Accordion, Tabs, FilterSelect, SearchPalette, JourneyExplorer, RateLab)
    blocks/       BlockRenderer — renders the content block model used by product pages
    ProductCard.tsx
  data/           Typed static content: products, case studies, journeys, AI, site
  pages/          Route components
  styles/         Design tokens and global styles
```

Product pages are **data-driven**: each product defines an array of typed content blocks
(`concepts`, `table`, `flow`, `payoff`, `accordion`, `rate-lab`, …) rendered by a single
`BlockRenderer`. Adding a product means adding data, not components.

## Design direction

Premium international-bank aesthetic: off-white paper background, deep navy primary, gold
accent with teal support, IBM Plex Serif / Sans / Mono, hairline borders, subtle shadows,
generous whitespace, mono labels for data. Fully responsive (desktop, tablet, mobile).

## Content principles

This site is educational. It contains:

- no personalised investment advice,
- no securities recommendations,
- no claims that any asset is undervalued,
- no simulated returns presented as actual returns,
- no claim to be a regulated financial adviser.

All examples, figures and diagrams are illustrative. Case studies describe a method on
representative journeys; they do not describe systems belonging to any specific institution.
