# 🌐 DNS Setup Instructions for GoDaddy

## ✅ Domains Added to Vercel Successfully!

Both domains have been configured in Vercel:
- ✅ `iamstandingwithkashmir.org`
- ✅ `www.iamstandingwithkashmir.org`

---

## 📋 Required DNS Records for GoDaddy

You need to add these EXACT records to your GoDaddy DNS settings:

### Record 1: Root Domain
| Type | Name | Value | TTL |
|------|------|-------|-----|
| `A` | `@` | `76.76.21.21` | 600 seconds |

### Record 2: WWW Subdomain
| Type | Name | Value | TTL |
|------|------|-------|-----|
| `A` | `www` | `76.76.21.21` | 600 seconds |

---

## 🔧 Step-by-Step Instructions

### 1. Login to GoDaddy DNS Management
Go to: https://dcc.godaddy.com/manage/iamstandingwithkashmir.org/dns

### 2. Delete Existing Records
Look for any existing records with these names and DELETE them:
- ❌ Any `A` record with name `@`
- ❌ Any `A` record with name `www`
- ❌ Any `CNAME` record with name `www`
- ❌ Any records pointing to WebsiteBuilder or Parked domain

### 3. Add New A Record for Root Domain
1. Click **Add Record** or **Add**
2. Select Type: **A**
3. Name: **@**
4. Value: **76.76.21.21**
5. TTL: **600 seconds** (or 10 minutes)
6. Click **Save**

### 4. Add New A Record for WWW
1. Click **Add Record** or **Add**
2. Select Type: **A**
3. Name: **www**
4. Value: **76.76.21.21**
5. TTL: **600 seconds** (or 10 minutes)
6. Click **Save**

### 5. Save Changes
- Click **Save All Changes** or **Save** button at the bottom

---

## ⏰ DNS Propagation Time

- **Minimum**: 10 minutes
- **Average**: 30-60 minutes
- **Maximum**: 24-48 hours (rare)

You can check DNS propagation status at: https://dnschecker.org/#A/iamstandingwithkashmir.org

---

## ✅ Verification Steps

After waiting 10-60 minutes, test these URLs:

1. **Root domain**: https://iamstandingwithkashmir.org
2. **WWW subdomain**: https://www.iamstandingwithkashmir.org
3. **Main page**: https://iamstandingwithkashmir.org/
4. **Success page**: https://iamstandingwithkashmir.org/success
5. **Usage page**: https://iamstandingwithkashmir.org/usage

All should load correctly with SSL certificate (🔒 lock icon).

---

## 🚨 Important Notes

1. **Do NOT change nameservers** - Keep using GoDaddy nameservers (ns19/ns20.domaincontrol.com)
2. **Wait for SSL certificate** - Vercel will automatically provision SSL certificate after DNS is verified (usually within 1 hour)
3. **Environment variables** - Make sure you've added Stripe keys to Vercel dashboard before testing donations
4. **Stripe webhook** - Create new webhook after domain is live

---

## 📊 Current Configuration Summary

| Component | Status | Notes |
|-----------|--------|-------|
| Vercel Deployment | ✅ Complete | Production URL working |
| Domains Added to Vercel | ✅ Complete | Both root and www configured |
| GoDaddy DNS Update | ⏰ Pending | **YOU NEED TO DO THIS NOW** |
| SSL Certificate | ⏰ Auto | Will be provisioned after DNS verification |
| Environment Variables | ⏰ Pending | Add to Vercel dashboard |
| Stripe Webhook | ⏰ Pending | Create after domain is live |

---

## 🆘 Troubleshooting

### Problem: DNS not propagating after 2 hours
**Solution**: Clear your browser cache and DNS cache:
```bash
# Windows DNS flush
ipconfig /flushdns
```

### Problem: SSL certificate not working
**Solution**: Wait 1 hour after DNS verification. Vercel auto-provisions Let's Encrypt certificates.

### Problem: Site shows "Domain Configuration Invalid"
**Solution**: Double-check the A record values match exactly: `76.76.21.21`

---

## 📞 Next Steps After DNS is Live

1. **Add Environment Variables to Vercel** (see DEPLOYMENT-SUCCESS.md)
2. **Create Stripe Webhook** (see DEPLOYMENT-SUCCESS.md)
3. **Test donation flow** end-to-end
4. **Remove fund-kashmir from personal site** (only after this site works)

---

**Current Status**: Waiting for you to update GoDaddy DNS records. Once done, wait 10-60 minutes for propagation, then proceed to environment variables setup.
