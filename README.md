# Royal Stone Construction - Full Stack Website

## Technical SEO

### Loading performance

Public content and the home, contact, project and sitemap routes use 30-second
background revalidation rather than querying Supabase on every visitor request.
After Save & Publish, cached public pages can briefly show the previous content;
the first request after expiry triggers a background refresh. A fresh request
after that refresh displays the update. Admin authentication and lead submissions
remain uncached. Failed content requests retain the existing default fallback.

Local project images use Next.js responsive resizing and WebP delivery with lazy
loading below the fold. Remote image URLs retain their existing direct delivery
so admin-entered image hosts continue to work. The enquiry form loads the Supabase
browser library on submission rather than during initial page loading.

The public pages include unique titles and descriptions, self-referencing canonical
URLs and Open Graph/Twitter metadata. The production URL is configured in
`lib/seo.ts` as `https://www.royalstoneconstruction.in`. Update it if the preferred
domain changes. Visible page copy and design are unchanged by these SEO additions.

`/sitemap.xml` lists the public pages and published non-concept projects from the
same content source used by the project pages. Concept projects and the admin
area retain noindex metadata and are excluded from the sitemap. `/robots.txt`
allows crawlers to read those noindex directives and points to the sitemap.
The homepage includes Organization and WebSite JSON-LD. Unverified phone numbers,
office addresses, opening hours and customer ratings are not included in schema.

After deployment, check the canonical domain serves the site and configure your
hosting provider to redirect alternate domains (including the non-www domain) to
the preferred HTTPS domain. Verify ownership in Google Search Console using
`/google9514fd7b0eaaa5f4.html`, then submit `sitemap.xml`. Use URL Inspection to
check the homepage and service pages. Do not remove the verification file.

Technical SEO helps indexing but cannot guarantee rankings. For local visibility,
maintain an accurate Google Business Profile with verified business details.

Tech stack:
- Next.js 15
- React 19
- Tailwind CSS v4
- Supabase Database + Authentication
- TypeScript

## Features
- Multi-page responsive construction website with the original Royal Stone design
- About, services, eight service detail pages, projects, project details, why us, process, contact and quote pages
- Desktop service dropdown and animated mobile route navigation
- Lead form on the main page
- Lead fields: Name, Mobile, City, Purpose
- Purpose options: Architecture, Construction with Material, Interior Design, Turnkey Project, Other
- Leads saved to Supabase
- Admin email/password login
- Admin-only lead dashboard
- Search leads
- Change lead status: New, Contacted, In Progress, Closed
- Delete leads
- Mobile responsive admin dashboard
- Tailwind CSS only for UI styling (no CSS modules)
- Admin editing for projects, approved customer feedback and working hours

## Website content and placeholders

The original hero, lead form, logo and footer styling are reused. The existing design
packages now live on `/services/architecture`; their choose buttons scroll to the
same lead form on that page.

Project illustrations are clearly labeled concepts, not completed client work.
There are no fabricated testimonials. Until content is published, the site uses
the defaults in `lib/content.ts` and shows feedback and availability placeholders.

To enable editing from the existing admin dashboard:

1. Run `supabase/site-content.sql` in the Supabase SQL Editor after the existing
   `supabase/schema.sql` has been configured. This creates a separate `site_content`
   table and policies. It does not modify the `leads` table or existing policies.
2. Sign in through `/admin/login` using your existing authorised admin account.
3. Find **Website Content** below the lead table on `/admin/dashboard`.
4. Edit project details and HTTPS image URLs, add genuine customer feedback, or
   update working hours. Gallery image URLs go on separate lines. You can also use
   local image paths for files placed in `public/projects`.
5. Click **Save & Publish**. Refresh the public pages to see the published content.

Project slugs must be unique, lowercase and separated with hyphens. Changing a slug
changes the project URL. Removing a project makes its old detail URL return 404.
Keep concept entries marked **Concept** until you have approved real project content.
Feedback appears on the homepage only when explicitly approved for publication;
the first three approved entries are shown. Saved website content is publicly
readable, so do not enter confidential information in these fields.

If content storage is unavailable, public pages retain their defaults and the admin
editor displays setup/retry instructions. Existing enquiry submissions still use
the same `leads` table and browser Supabase configuration.

The contact page reuses the existing phone, email and Patna location. The map shows
the city, not a verified office address. Replace the existing example phone number,
social links, exact address and legal-link placeholders before public launch.

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
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=YOUR_SUPABASE_PUBLISHABLE_KEY
```

You can find these values in Supabase Project Settings / API (or Connect / API Keys depending on the current Supabase UI). The legacy `NEXT_PUBLIC_SUPABASE_ANON_KEY` is also supported.

## Deploy the frontend on Vercel

Deploy this project using the Next.js framework preset and `npm run build` as the build command. No separate backend server is required; the browser connects directly to Supabase.

Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` in Vercel's environment variables for Production and Preview to enable admin login and enquiry submission. Redeploy after changing these values because they are included in the frontend at build time. Do not add a Supabase secret or service role key.

The frontend also builds without Supabase variables. In that case the public website remains available, enquiry submission and login display an unavailable message, and the dashboard redirects to login.

Upload or push the latest source changes before deploying. The local `.env.local` file does not configure Vercel's environment variables.

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
