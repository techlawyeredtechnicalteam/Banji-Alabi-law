# Banji Alabi & Co website

Next.js (App Router, TypeScript), deployed to Cloudflare Workers with OpenNext.

## Where to put things
| What | Where |
|---|---|
| Logo (unchanged) | `public/logo.png` or `public/logo.svg` (optional `public/logo-light.png` for the dark footer) |
| Mr Banji's portrait | `public/images/banji-alabi.jpg` (shown on the People page only) |
| Mrs Banji-Alabi's portrait | `public/images/omolola-banji-alabi.jpg` |
| Estate photos | `public/images/estates/` named `metro-smart-city.jpg`, `nicon-town-estate.jpg`, `admiralty-way.jpg`, `victoria-island.jpg`, `ikoyi.jpg` |
| Property photos and videos | `public/media/properties/` (any .jpg .png .webp .mp4 .webm) |
| Phone, WhatsApp, email, address, hours | `lib/site.ts` |
| Expertise areas | `lib/expertise.ts` |
| Real estate services, process, estates | `lib/realestate.ts` |
| People | `lib/team.ts` |
| Articles | `lib/insights.ts` |

Files in `public/` are listed at build time, so the site must be rebuilt (redeployed) after adding photos.

## Run locally
```bash
npm install
npm run dev
npm run preview    # runs it in the Cloudflare Workers runtime
```

## Deploy
```bash
npx wrangler login
npm run deploy
npx wrangler secret put RESEND_API_KEY
```

## Enquiry form
`POST /api/enquiry` validates input, blocks bots, and emails the enquiry through Resend to `ENQUIRY_TO` (set in `wrangler.jsonc`).
Add the `RESEND_API_KEY` secret in Cloudflare (Worker, Settings, Variables and Secrets).
