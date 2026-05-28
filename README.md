# Home Run

The smart concierge for busy families in the Sharon. Phase 1: marketing website with WhatsApp deep-links and a Supabase contacts table. Designed to grow into a WhatsApp AI bot (Phase 2) and ops dashboard (Phase 3) without architectural rewrites.

## Stack

- **Next.js (App Router) + TypeScript** — static homepage + server-side webhook handlers in one codebase.
- **Tailwind CSS v4** — brand tokens declared in `app/globals.css` via `@theme`.
- **Supabase** — Postgres + auth + RLS. Phase 1 schema in `supabase/migrations/001_phase1_contacts.sql`.
- **Vercel** — preview URLs per branch, prod on the default branch.

## Local development

```bash
npm install
cp .env.local.example .env.local   # then fill in real values
npm run dev
```

Visit http://localhost:3000.

## Project layout

```
app/                      Routes (homepage + /api endpoints)
  api/leads/route.ts        POST: create a contact (optional contact form)
  api/whatsapp/route.ts     Phase 2 webhook stub
components/
  homepage/                 The twelve homepage sections + WhatsApp FAB
  ui/                       Button, Container
lib/
  constants.ts              WHATSAPP_NUMBER, business hours, cities
  whatsapp.ts               wa.me deep-link helpers (ctaLinks)
  supabase/                 Browser + service-role clients
  claude.ts, memory.ts      Phase 2 stubs
supabase/migrations/        Phase 1 (active) + Phase 2/3 (do not run yet)
```

## Env vars

Phase 1 only needs these:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` (server-only)
- `NEXT_PUBLIC_WHATSAPP_NUMBER` (placeholder `972500000000` until Merle's real number is provisioned)

The WhatsApp number is referenced in exactly one place: `lib/constants.ts`. Update the env var, redeploy — no hardcoded numbers anywhere else.

## Phase plan

- **Phase 1 (now):** Marketing site + Supabase contacts.
- **Phase 2 (after ~10 customers):** WhatsApp Cloud API webhook → Claude with tools (`propose_quote`, `book_task`, `update_memory`, `escalate_to_merle`).
- **Phase 3 (after ~25 customers):** Internal mobile-first ops dashboard.

The Phase 1 architecture is already laid out so Phases 2 and 3 are additive, not migrations.
