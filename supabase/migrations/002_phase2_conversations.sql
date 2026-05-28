-- PHASE 2 — do NOT apply yet. Lands when the WhatsApp bot is built.

create table public.conversations (
  id uuid primary key default gen_random_uuid(),
  contact_id uuid references public.contacts(id) on delete cascade,
  channel text not null,                  -- 'whatsapp' | 'web'
  created_at timestamptz default now() not null,
  closed_at timestamptz,
  metadata jsonb default '{}'
);

create table public.messages (
  id uuid primary key default gen_random_uuid(),
  conversation_id uuid references public.conversations(id) on delete cascade,
  created_at timestamptz default now() not null,
  role text not null,                     -- 'customer' | 'assistant' | 'human'
  body text,
  voice_url text,
  tool_calls jsonb,
  tool_results jsonb
);

create table public.contact_memory (
  contact_id uuid primary key references public.contacts(id) on delete cascade,
  household jsonb,                        -- { kids: [...], pets: [...], parents: [...] }
  preferences jsonb,                      -- { language, pharmacies, schools, vet }
  access jsonb,                           -- { door_code, key_location, security }
  updated_at timestamptz default now()
);

create index conversations_contact_idx on public.conversations(contact_id);
create index messages_conversation_idx on public.messages(conversation_id);
