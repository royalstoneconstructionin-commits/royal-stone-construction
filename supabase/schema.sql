create extension if not exists "pgcrypto";

-- =========================
-- LEADS TABLE
-- =========================

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  mobile text not null,
  city text not null,
  purpose text not null,
  status text not null default 'New'
    check (status in ('New', 'Contacted', 'In Progress', 'Closed')),
  created_at timestamptz not null default now()
);

-- =========================
-- ADMIN USERS TABLE
-- =========================

create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

-- =========================
-- ENABLE RLS
-- =========================

alter table public.leads enable row level security;
alter table public.admin_users enable row level security;

-- =========================
-- LEADS POLICIES
-- =========================

drop policy if exists "public can submit leads" on public.leads;

create policy "public can submit leads"
on public.leads
for insert
to anon, authenticated
with check (true);


drop policy if exists "admins can view leads" on public.leads;

create policy "admins can view leads"
on public.leads
for select
to authenticated
using (
  exists (
    select 1
    from public.admin_users a
    where a.user_id = auth.uid()
  )
);


drop policy if exists "admins can update leads" on public.leads;

create policy "admins can update leads"
on public.leads
for update
to authenticated
using (
  exists (
    select 1
    from public.admin_users a
    where a.user_id = auth.uid()
  )
)
with check (
  exists (
    select 1
    from public.admin_users a
    where a.user_id = auth.uid()
  )
);


drop policy if exists "admins can delete leads" on public.leads;

create policy "admins can delete leads"
on public.leads
for delete
to authenticated
using (
  exists (
    select 1
    from public.admin_users a
    where a.user_id = auth.uid()
  )
);

-- =========================
-- ADMIN USERS POLICIES
-- =========================

drop policy if exists "admin can view own admin row" on public.admin_users;

create policy "admin can view own admin row"
on public.admin_users
for select
to authenticated
using (
  user_id = auth.uid()
);

-- =========================
-- IMPORTANT:
-- DO NOT STORE ADMIN EMAIL
-- OR PASSWORD IN THIS TABLE.
-- =========================

-- STEP 1:
-- Go to Supabase:
-- Authentication -> Users -> Add user
--
-- Example:
-- Email: admin@royalstoneconstruction.in
-- Password: YourStrongPassword@123
--
-- STEP 2:
-- Copy the User UUID created by Supabase.
--
-- STEP 3:
-- Replace YOUR_AUTH_USER_UUID below
-- and run the query manually.

-- insert into public.admin_users (user_id)
-- values ('YOUR_AUTH_USER_UUID');