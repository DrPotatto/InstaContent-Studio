-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Users table (extends Supabase auth.users)
create table if not exists public.users (
  id uuid references auth.users on delete cascade primary key,
  email text unique not null,
  referral_code text unique,
  referred_by uuid references public.users(id),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Subscriptions table
create table if not exists public.subscriptions (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.users(id) on delete cascade not null,
  paddle_subscription_id text unique,
  plan_id text not null default 'free',
  status text not null default 'active',
  current_period_start timestamp with time zone,
  current_period_end timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Content assets table
create table if not exists public.content_assets (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.users(id) on delete cascade not null,
  tool text not null,
  public_url text not null,
  thumbnail_url text,
  metadata jsonb default '{}'::jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Referrals table
create table if not exists public.referrals (
  id uuid default uuid_generate_v4() primary key,
  referrer_id uuid references public.users(id) on delete cascade not null,
  referee_id uuid references public.users(id) on delete cascade not null,
  status text default 'pending',
  reward_granted boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Events table for analytics
create table if not exists public.events (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.users(id),
  event_type text not null,
  event_data jsonb default '{}'::jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security
alter table public.users enable row level security;
alter table public.subscriptions enable row level security;
alter table public.content_assets enable row level security;
alter table public.referrals enable row level security;
alter table public.events enable row level security;

-- Users policies
create policy "Users can view own data" on public.users for select using (auth.uid() = id);
create policy "Users can update own data" on public.users for update using (auth.uid() = id);

-- Subscriptions policies
create policy "Users can view own subscriptions" on public.subscriptions for select using (auth.uid() = user_id);

-- Content assets policies
create policy "Users can view own content" on public.content_assets for select using (auth.uid() = user_id);
create policy "Users can insert own content" on public.content_assets for insert with check (auth.uid() = user_id);
create policy "Users can update own content" on public.content_assets for update using (auth.uid() = user_id);
create policy "Users can delete own content" on public.content_assets for delete using (auth.uid() = user_id);

-- Referrals policies
create policy "Users can view own referrals" on public.referrals for select using (auth.uid() = referrer_id or auth.uid() = referee_id);

-- Events policies
create policy "Users can insert own events" on public.events for insert with check (auth.uid() = user_id);
create policy "Users can view own events" on public.events for select using (auth.uid() = user_id);

-- Create storage bucket for content assets
insert into storage.buckets (id, name, public) values ('content-assets', 'content-assets', true);

-- Storage policies for content assets
create policy "Public read access" on storage.objects for select using (bucket_id = 'content-assets');
create policy "Users can upload content" on storage.objects for insert with check (bucket_id = 'content-assets' AND auth.role() = 'authenticated');
create policy "Users can update own content" on storage.objects for update using (bucket_id = 'content-assets' AND auth.uid() = owner);
create policy "Users can delete own content" on storage.objects for delete using (bucket_id = 'content-assets' AND auth.uid() = owner);

-- Indexes for better performance
create index if not exists idx_users_email on public.users(email);
create index if not exists idx_subscriptions_user_id on public.subscriptions(user_id);
create index if not exists idx_content_assets_user_id on public.content_assets(user_id);
create index if not exists idx_referrals_referrer_id on public.referrals(referrer_id);
create index if not exists idx_events_user_id on public.events(user_id);
create index if not exists idx_events_created_at on public.events(created_at);