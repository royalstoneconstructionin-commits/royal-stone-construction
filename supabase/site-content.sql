-- Run once in Supabase SQL Editor after the existing schema.sql.
-- Separate website content storage; does not modify leads or existing policies.
create table if not exists public.site_content (
  id text primary key check (id = 'public'),
  content jsonb not null check (jsonb_typeof(content) = 'object'),
  updated_at timestamptz not null default now()
);
alter table public.site_content enable row level security;
grant select on public.site_content to anon, authenticated;
grant insert, update on public.site_content to authenticated;

drop policy if exists "public can read website content" on public.site_content;
create policy "public can read website content" on public.site_content
for select to anon, authenticated using (true);

drop policy if exists "admins can insert website content" on public.site_content;
create policy "admins can insert website content" on public.site_content
for insert to authenticated with check (
  exists (select 1 from public.admin_users where user_id = auth.uid())
);

drop policy if exists "admins can update website content" on public.site_content;
create policy "admins can update website content" on public.site_content
for update to authenticated using (
  exists (select 1 from public.admin_users where user_id = auth.uid())
) with check (
  exists (select 1 from public.admin_users where user_id = auth.uid())
);
