# Banji Alabi & Co website

Next.js (App Router, TypeScript, Tailwind CSS v4), deployed to Cloudflare Workers with OpenNext.

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
npm run preview    # builds and runs it in the Cloudflare Workers runtime
```

## Deploy to Cloudflare
```bash
npx wrangler login
npm run deploy
npx wrangler secret put RESEND_API_KEY   # paste the Resend key when asked
```

## Where to put things
| What | Where |
|---|---|
| Logo (unchanged) | `public/logo.png` or `public/logo.svg` (optional `public/logo-light.png` for the dark footer) |
| Mr Banji's portrait | `public/images/banji-alabi.jpg` |
| Mrs Banji-Alabi's portrait | `public/images/omolola-banji-alabi.jpg` |
| Property photos and videos | `public/media/properties/` |
| Phone, WhatsApp, email, address, hours | `lib/site.ts` |
| Practice areas, team, insights | `lib/practice-areas.ts`, `lib/team.ts`, `lib/insights.ts` |

Files in `public/` are listed at build time, so redeploy after adding photos.

## Enquiry form
`POST /api/enquiry` validates input, blocks bots, and sends the enquiry by email through Resend to `ENQUIRY_TO`.
Set `ENQUIRY_FROM` and `ENQUIRY_TO` in `wrangler.jsonc`, and the `RESEND_API_KEY` secret in Cloudflare.
