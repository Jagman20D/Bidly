# Bidly-Market

A Next.js marketplace starter using Supabase.

## Setup

1. Create a Supabase project.
2. Create a `listings` table with at least:
   - id (uuid, primary key)
   - title (text)
   - description (text)
   - price (numeric or double precision)
   - image_url (text)
   - user_id (text)
   - created_at (timestamp)
3. Copy `.env.example` to `.env.local` and fill in your Supabase values.

## Local development

```bash
npm install
npm run dev
```

## Deployment

### Vercel (Current)
Use Vercel, Netlify, or another Next.js host, and set the same env vars there. Ensure `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are configured.

### Google Cloud Run
To deploy to Google Cloud Run:

1. Install Google Cloud SDK: https://cloud.google.com/sdk/docs/install
2. Authenticate: `gcloud auth login`
3. Set project: `gcloud config set project YOUR_PROJECT_ID`
4. Build and push the image:
   ```bash
   gcloud builds submit --tag gcr.io/YOUR_PROJECT_ID/bidly-market
   ```
5. Deploy to Cloud Run:
   ```bash
   gcloud run deploy bidly-market --image gcr.io/YOUR_PROJECT_ID/bidly-market --platform managed --allow-unauthenticated --set-env-vars NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL,NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_ANON_KEY
   ```

The Dockerfile is included for containerization.

