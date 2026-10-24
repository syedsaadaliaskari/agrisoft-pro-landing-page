create table if not exists site_events (
  id bigint generated always as identity primary key,
  event_name text not null check (
    event_name in ('page_view', 'whatsapp_click', 'download_click')
  ),
  created_at timestamptz not null default now()
);
