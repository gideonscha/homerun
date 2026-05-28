-- Contacts: anyone who's interacted with Home Run via WhatsApp, web, or referral.
-- Single table for Phase 1; extends naturally in Phase 2 with related tables.

create table if not exists public.contacts (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  -- Identity
  name text,
  whatsapp text unique,
  email text,
  address text,
  neighborhood text,

  -- Funnel
  source text default 'whatsapp',
    -- 'whatsapp' | 'web' | 'referral' | 'walk-in'
  status text default 'new',
    -- 'new' | 'in_discussion' | 'booked' | 'repeat' | 'monthly' | 'lost'
  first_contact_at timestamptz default now(),
  last_contact_at timestamptz default now(),

  -- Free-form
  notes text,
  tags text[] default '{}'
);

create index if not exists contacts_status_idx on public.contacts(status);
create index if not exists contacts_whatsapp_idx on public.contacts(whatsapp);
create index if not exists contacts_created_at_idx on public.contacts(created_at desc);

-- updated_at trigger
create or replace function public.touch_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists contacts_touch_updated_at on public.contacts;
create trigger contacts_touch_updated_at
  before update on public.contacts
  for each row execute function public.touch_updated_at();

-- Phase 1: RLS off (no public-facing reads; only service role writes from /api/leads)
alter table public.contacts disable row level security;
