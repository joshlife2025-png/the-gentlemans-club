# The Gentleman's Club — Next.js Starter

A minimal Next.js starter for an adult subscription site. This is a development/demo scaffold — do NOT run in production without securing keys, implementing age verification, and complying with local laws.

## Run locally
1. Copy `.env.example` to `.env.local` and fill keys.
2. Install dependencies: `npm install`
3. Run dev server: `npm run dev`

## Notes
- Replace mock auth with production auth.
- Configure Stripe products and price IDs.
- Use private S3 buckets + signed URLs for media.
