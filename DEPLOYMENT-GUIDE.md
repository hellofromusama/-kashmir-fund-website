# Kashmir Fund Website Deployment Guide

## Overview
This guide will help you deploy the Kashmir Fund website to **iamstandingwithkashmir.org** using Vercel and GoDaddy.

---

## Part 1: Project Setup (Complete this first)

### Step 1: Install Dependencies
```bash
cd c:\Users\Usama.Javed\Desktop\kashmir-fund-website
npm install
```

### Step 2: Copy Fund Kashmir Files
I've created the base project structure. Now you need to copy these files from `modern-portfolio`:

**Files to copy:**
- `src/app/fund-kashmir/` → `app/` (all files)
- `src/components/KashmirLeaves.tsx` → `components/KashmirLeaves.tsx`
- `src/app/api/create-kashmir-checkout/` → `app/api/create-kashmir-checkout/`
- `.env.local` (copy and update - see below)

### Step 3: Environment Variables
Create `.env.local` in the new project root:

```env
# Stripe Keys (SAME as your current project)
STRIPE_SECRET_KEY=sk_live_xxxxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_xxxxx

# Stripe Webhook Secret (You'll need to create a NEW webhook in Stripe for the new domain)
STRIPE_WEBHOOK_SECRET=whsec_xxxxx

# Success/Cancel URLs (UPDATE to new domain)
NEXT_PUBLIC_SUCCESS_URL=https://iamstandingwithkashmir.org/success
NEXT_PUBLIC_CANCEL_URL=https://iamstandingwithkashmir.org
```

---

## Part 2: Stripe Configuration

### You DON'T need a new Stripe account!

**What you need to do:**

1. **Go to Stripe Dashboard** → Developers → Webhooks
2. **Add a new endpoint** for: `https://iamstandingwithkashmir.org/api/webhooks/stripe`
3. **Select events to listen to:**
   - `checkout.session.completed`
   - `payment_intent.succeeded`
4. **Copy the webhook secret** → Add to `.env.local` as `STRIPE_WEBHOOK_SECRET`

**That's it!** Same Stripe account, just a new webhook endpoint for the new domain.

---

## Part 3: Vercel Deployment

### Step 1: Install Vercel CLI (if not installed)
```bash
npm i -g vercel
```

### Step 2: Deploy to Vercel
```bash
cd c:\Users\Usama.Javed\Desktop\kashmir-fund-website
vercel
```

**Follow the prompts:**
- Set up and deploy? **Y**
- Which scope? **Your account**
- Link to existing project? **N**
- Project name? **kashmir-fund-website**
- Directory? **./ ** (press Enter)
- Override settings? **N**

### Step 3: Add Environment Variables in Vercel Dashboard

1. Go to: https://vercel.com/dashboard
2. Select your **kashmir-fund-website** project
3. Go to **Settings** → **Environment Variables**
4. Add ALL the variables from your `.env.local`:
   - `STRIPE_SECRET_KEY`
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `STRIPE_WEBHOOK_SECRET`
   - `NEXT_PUBLIC_SUCCESS_URL`
   - `NEXT_PUBLIC_CANCEL_URL`

### Step 4: Redeploy
```bash
vercel --prod
```

---

## Part 4: GoDaddy DNS Configuration

### Current DNS Records (from your screenshot):
You currently have a GoDaddy Website Builder pointing to your domain. We need to point it to Vercel instead.

### Step 1: Get Vercel Domain Info
After deployment, Vercel will give you a deployment URL like:
`kashmir-fund-website.vercel.app`

### Step 2: Update GoDaddy DNS Records

**Login to GoDaddy** → **My Products** → **iamstandingwithkashmir.org** → **DNS**

**Delete these records:**
- ❌ The `A` record pointing to WebsiteBuilder

**Add these new records:**

| Type | Name | Value | TTL |
|------|------|-------|-----|
| `A` | `@` | `76.76.21.21` | 600 |
| `CNAME` | `www` | `cname.vercel-dns.com` | 600 |

**Note:** The IP `76.76.21.21` is Vercel's current A record IP. Vercel may provide different instructions - check their dashboard under **Domains** for exact DNS settings.

### Step 3: Add Custom Domain in Vercel

1. Go to **Vercel Dashboard** → **Your Project** → **Settings** → **Domains**
2. Click **Add Domain**
3. Enter: `iamstandingwithkashmir.org`
4. Also add: `www.iamstandingwithkashmir.org`
5. Vercel will verify DNS records

### Step 4: Wait for DNS Propagation
- Usually takes **10-60 minutes**
- Can take up to 48 hours in rare cases
- Check status at: https://www.whatsmydns.net/

---

## Part 5: Remove from usamajaved.com.au

### After the new site is live and working:

**In your `modern-portfolio` project:**

1. **Delete the fund-kashmir folder:**
```bash
cd c:\Users\Usama.Javed\Desktop\modern-portfolio
rm -rf src/app/fund-kashmir
```

2. **Delete the API route:**
```bash
rm -rf src/app/api/create-kashmir-checkout
```

3. **Delete the component:**
```bash
rm src/components/KashmirLeaves.tsx
```

4. **Redeploy your personal site:**
```bash
vercel --prod
```

---

## Part 6: Testing Checklist

✅ **Before going live:**
- [ ] Test donation flow on Vercel preview URL
- [ ] Verify Stripe webhooks are receiving events
- [ ] Test success page redirect
- [ ] Check all three pages load correctly
- [ ] Verify Chinar leaves animation works
- [ ] Test on mobile devices

✅ **After DNS is configured:**
- [ ] Visit https://iamstandingwithkashmir.org
- [ ] Visit https://www.iamstandingwithkashmir.org
- [ ] Make a test donation
- [ ] Verify email receipts

---

## Troubleshooting

### Common Issues:

**1. "Domain not verified" in Vercel**
- Wait 10-15 minutes after adding DNS records
- Double-check DNS records match exactly
- Try removing and re-adding the domain

**2. "Stripe webhook failing"**
- Make sure webhook URL is: `https://iamstandingwithkashmir.org/api/webhooks/stripe`
- Check environment variable `STRIPE_WEBHOOK_SECRET` is set correctly
- Verify webhook is listening to correct events

**3. "Internal Server Error" on donation**
- Check Vercel logs: Dashboard → Project → Deployments → Latest → Functions
- Verify all environment variables are set
- Make sure Stripe keys are for LIVE mode (not test mode)

---

## Summary

**Quick Steps:**
1. ✅ Copy fund-kashmir files to new project
2. ✅ Install dependencies (`npm install`)
3. ✅ Set up environment variables
4. ✅ Deploy to Vercel (`vercel --prod`)
5. ✅ Add custom domain in Vercel
6. ✅ Update GoDaddy DNS to point to Vercel
7. ✅ Create new Stripe webhook for new domain
8. ✅ Test everything
9. ✅ Remove fund-kashmir from personal site

**Need Help?**
- Vercel Docs: https://vercel.com/docs
- Stripe Webhooks: https://stripe.com/docs/webhooks
- DNS Help: https://vercel.com/docs/projects/domains

---

**Good luck with the deployment! 🍂**
