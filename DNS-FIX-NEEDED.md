# 🔧 DNS Fix Required - Almost There!

## ✅ What's Correct:
- ✓ A record for `@` pointing to `76.76.21.21` - **PERFECT!**

## ⚠️ What Needs to be Fixed:

### Current Problem:
You have a **CNAME** record for `www`:
```
Type: CNAME
Name: www
Value: iamstandingwithkashmir.org.
```

### What You Need to Do:

1. **Delete** the existing CNAME record for `www`
   - Click the delete button next to the `www` CNAME record

2. **Add** a new A record for `www`:
   - Click "Add Record"
   - Type: **A**
   - Name: **www**
   - Value: **76.76.21.21**
   - TTL: **1/2 Hour** (or 600 seconds)
   - Click Save

---

## 📋 Final DNS Configuration Should Look Like:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| `A` | `@` | `76.76.21.21` | 1/2 Hour |
| `A` | `www` | `76.76.21.21` | 1/2 Hour |
| `NS` | `@` | `ns19.domaincontrol.com.` | 1 Hour |
| `NS` | `@` | `ns20.domaincontrol.com.` | 1 Hour |
| (other records can stay as they are) | | | |

---

## Why This Fix is Needed:

- **CNAME** creates an alias (www → iamstandingwithkashmir.org → needs another lookup)
- **A record** points directly to the IP address (www → 76.76.21.21 → faster, cleaner)
- Vercel specifically wants both root and www to use A records pointing to their IP

---

## After Making This Change:

1. Save the changes in GoDaddy
2. Wait **30-60 minutes** for DNS propagation
3. Check status at: https://dnschecker.org/#A/www.iamstandingwithkashmir.org
4. Both `iamstandingwithkashmir.org` and `www.iamstandingwithkashmir.org` should show `76.76.21.21`

---

**You're 95% done! Just delete the www CNAME and add www A record, then you're set! 🚀**
