# Royal Stone Construction - Full Stack Website

Tech stack:
- Next.js 15
- React 19
- Tailwind CSS v4
- Supabase Database + Authentication
- TypeScript

## Features
- Mobile-friendly responsive construction website
- Lead form on the main page
- Lead fields: Name, Mobile, City, Purpose
- Purpose options: Architecture, Construction with Material, Interior Design, Other
- Leads saved to Supabase
- Admin email/password login
- Admin-only lead dashboard
- Search leads
- Change lead status: New, Contacted, In Progress, Closed
- Delete leads
- Mobile responsive admin dashboard
- Tailwind CSS only for UI styling (no CSS modules)

## 1. Extract and open
Extract the ZIP, open the project folder in VS Code, and open a terminal in the project folder.

## 2. Install dependencies
```powershell
npm install
```

If PowerShell blocks npm.ps1, use:
```powershell
npm.cmd install
```

## 3. Create Supabase project
Go to Supabase and create a project.

## 4. Run the SQL schema
Open Supabase > SQL Editor > New Query.
Copy all SQL from:
`supabase/schema.sql`
and click Run.

## 5. Create admin account
In Supabase open Authentication > Users > Add user.
Create your admin email and password.
Copy the admin user's UUID.

Then run this SQL in Supabase SQL Editor:
```sql
insert into public.admin_users (user_id)
values ('YOUR_AUTH_USER_UUID');
```

## 6. Environment variables
Copy `.env.example` and rename the copy to `.env.local`.

Set:
```env
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT_ID.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

You can find these values in Supabase Project Settings / API (or Connect / API Keys depending on the current Supabase UI).

## 7. Run project
```powershell
npm run dev
```

Open:
- Website: http://localhost:3000
- Admin login: http://localhost:3000/admin/login
- Admin dashboard: http://localhost:3000/admin/dashboard

## Important
Restart `npm run dev` after editing `.env.local`.

## Replace business details
Edit phone, email, address and social links in:
`components/Footer.tsx`

## Logo
The project expects:
`public/royal-stone-logo.png`
