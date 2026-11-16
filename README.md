# Jagadev Associates LLP website

Fast, static website built with [Astro](https://astro.build). All text, photos, services and due dates live in simple content files, so the firm can edit them without touching code, either directly or through the free [Pages CMS](https://pagescms.org) editor.

## Run it locally (or in Antigravity)

1. Install Node.js 22 or newer.
2. Open this folder in Antigravity (or any editor) and run:
   ```
   npm install
   npm run dev
   ```
3. Open http://localhost:4321

`npm run build` creates the finished site in `dist/`.

## Where the content lives

| What | File |
| --- | --- |
| Phone numbers, address, hours, LLPIN, Grievance Officer, form key | `src/content/settings/site.json` |
| Home page text and photos | `src/content/pages/home.json` |
| About page, partner profile, office gallery | `src/content/pages/about.json` |
| Service pages (one file each) | `src/content/services/*.md` |
| Privacy Policy and Terms of Use | `src/content/legal/*.md` |
| Logo and uploaded photos | `public/images/` |

To add a service, copy one file in `src/content/services/`, rename it (the file name becomes the web address, e.g. `gst-registration.md` → `/services/gst-registration`) and edit it.

## Let the client edit content (Pages CMS)

1. Push this project to a GitHub repository.
2. Deploy it on Netlify, Cloudflare Pages or Vercel (build command `npm run build`, output folder `dist`). Every change on GitHub rebuilds the site.
3. Go to https://app.pagescms.org, sign in with GitHub, and open the repository. The editor reads `.pages.yml` and shows friendly forms for every section.
4. Invite the client as a collaborator. Each save becomes a commit and the site updates in a minute or two.

## Before launch: checklist

- [ ] Confirm whether any partner is an ICAI-member Chartered Accountant (affects wording, see the PRD). The site currently never uses that title.
- [ ] Replace stock photos with real office and partner photos (upload in Pages CMS or put files in `public/images/` and update the paths).
- [ ] Replace `public/images/logo-aj.jpg` with a sharp vector logo (SVG) and update `Header.astro` / `Footer.astro`.
- [ ] Fill in the partner bio, years in practice, landmark and Grievance Officer name in the content files.
- [ ] Confirm the numbers in the counter strip in `home.json` (years in practice etc.).
- [ ] Get a free access key from https://web3forms.com (using jagadevassociatesllp@gmail.com) and paste it into `form.web3formsAccessKey` in `site.json`. Until then the form asks visitors to call or WhatsApp.
- [ ] Have a lawyer review the Privacy Policy and Terms of Use, then remove the "Draft for review" notes.
- [ ] Add cookieless analytics (e.g. Cloudflare Web Analytics or Plausible) in `src/layouts/BaseLayout.astro`, just before `</head>`.
- [ ] Point jagadevassociatesllp.com to the new host, submit `/sitemap-index.xml` in Google Search Console, and update the Google Business Profile.

## Built-in features

- SEO: unique titles and descriptions, canonical URLs, Open Graph share image, sitemap, robots.txt, and structured data (AccountingService, Service, FAQPage, BreadcrumbList).
- Redirects from the old site's `.html` pages (`public/_redirects` for Netlify/Cloudflare, `vercel.json` for Vercel).
- DPDP Act: short notice on the form, separate unticked consent boxes, consent time and notice version sent with every enquiry, Google Map loads only on request, no tracking cookies.
- Accessibility: keyboard focus styles, skip link, alt text, reduced-motion support, 44 px+ tap targets.
- Mobile: sticky Call / WhatsApp / Directions bar.

## Photo credits

Placeholder photos are from Unsplash and are free to use under the [Unsplash License](https://unsplash.com/license): cornerstone accounting Services, Musemind UX Agency, Spl Interiors, tommao wang, Kelly Sikkema, Saish Patil, Mahadev Ittina, Sebastian Herrmann, Vitaly Gariev, Mehdi Mirzaie and Olena Kholina. Replace them with the firm's own photos before launch where possible.

## Animations

Scroll animations are built in and need no library. Add `data-reveal="up"` (or `left`, `right`, `zoom`) to any element to animate it into view, or `data-stagger="up"` to a list so its items appear one after another. Numbers with `data-count="15"` count up when they scroll into view. Everything switches off for visitors who choose reduced motion on their device.
