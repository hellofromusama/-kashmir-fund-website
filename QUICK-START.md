# 🚀 Quick Start Guide

## You're almost ready! Follow these 4 simple steps:

### Step 1: Install Dependencies (2 minutes)
```bash
cd c:\Users\Usama.Javed\Desktop\kashmir-fund-website
npm install
```

### Step 2: Copy Environment Variables (1 minute)
1. Copy `.env.local` from your `modern-portfolio` folder
2. Paste it into `kashmir-fund-website` folder
3. Update these two lines:
```env
NEXT_PUBLIC_SUCCESS_URL=https://iamstandingwithkashmir.org/success
NEXT_PUBLIC_CANCEL_URL=https://iamstandingwithkashmir.org
```

### Step 3: Test Locally (1 minute)
```bash
npm run dev
```
Visit http://localhost:3000 - everything should work!

### Step 4: Deploy to Vercel (5 minutes)
```bash
npm i -g vercel
vercel
```

**Follow prompts:**
- Deploy? **Yes**
- Project name? **kashmir-fund-website**
- Settings? **No** (use defaults)

Then add your environment variables in Vercel dashboard and deploy production:
```bash
vercel --prod
```

---

## Next: Connect Your Domain

After deployment, follow **DEPLOYMENT-GUIDE.md** Part 4 for:
- GoDaddy DNS setup
- Custom domain configuration
- Stripe webhook update

---

## That's it! 🎉

Your Kashmir fund website will be live at:
**https://iamstandingwithkashmir.org**
