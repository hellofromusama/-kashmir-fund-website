# Kashmir Fund Website

**Live Site:** https://iamstandingwithkashmir.org

## About
This website facilitates donations for humanitarian aid to Azad Kashmir during the current crisis.

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment Variables
Copy `.env.local.example` to `.env.local` and fill in your Stripe credentials:
```bash
cp .env.local.example .env.local
```

### 3. Run Development Server
```bash
npm run dev
```

Visit http://localhost:3000

### 4. Deploy to Vercel
```bash
vercel --prod
```

## Full Deployment Guide
See [DEPLOYMENT-GUIDE.md](./DEPLOYMENT-GUIDE.md) for complete setup instructions including:
- Vercel deployment
- GoDaddy DNS configuration
- Stripe webhook setup
- Removing from personal portfolio site

## Tech Stack
- **Framework:** Next.js 15
- **Styling:** Tailwind CSS
- **Payments:** Stripe
- **Hosting:** Vercel
- **Domain:** GoDaddy (iamstandingwithkashmir.org)

## Pages
- `/` - Main donation page
- `/success` - Payment success confirmation
- `/usage` - Detailed fund usage information

## Developer
**Usama Javed**
Full Stack Developer
- Instagram: [@hellofromusama](https://www.instagram.com/hellofromusama/)
- Website: [usamajaved.com.au](https://usamajaved.com.au)
