# 🔗 Connect to GitHub - Quick Guide

## ✅ What's Already Done:
- ✓ Git repository initialized locally
- ✓ All files committed
- ✓ Branch renamed to `main`

## 📝 Create GitHub Repository (2 minutes):

### Step 1: Create Repository on GitHub
1. **Click this link**: https://github.com/new
2. Fill in the form:
   - **Repository name**: `kashmir-fund-website`
   - **Description**: `Donation website for Kashmir relief fund - iamstandingwithkashmir.org`
   - **Visibility**: ✓ Public
   - **DO NOT check any boxes** (no README, .gitignore, or license - we have them)
3. Click **Create repository**

### Step 2: Push Your Code
After creating the repository, run these commands:

```bash
cd c:/Users/Usama.Javed/Desktop/kashmir-fund-website
git remote add origin https://github.com/hellofromusama/kashmir-fund-website.git
git push -u origin main
```

**Note**: You'll be asked to authenticate with GitHub. Use your GitHub credentials.

### Step 3: Connect to Vercel (Automatic Deployments)
Run this command to connect the Git repository to Vercel:

```bash
cd c:/Users/Usama.Javed/Desktop/kashmir-fund-website
vercel git connect
```

Or do it through Vercel dashboard:
1. Go to: https://vercel.com/hellofromusamas-projects/kashmir-fund-website/settings/git
2. Click **"Connect Git Repository"**
3. Select GitHub
4. Choose `hellofromusama/kashmir-fund-website`
5. Click **Connect**

---

## ✨ Benefits of Connecting Git:

1. **Auto-deployments**: Every push to `main` branch automatically deploys to production
2. **Preview deployments**: Every pull request gets a unique preview URL
3. **Version history**: Track all changes in GitHub
4. **Rollback capability**: Easy to revert to previous versions
5. **Collaboration**: Others can contribute via pull requests

---

## 🔍 What Happens Next:

1. ✅ You create the GitHub repo
2. ✅ You push the code
3. ✅ Vercel connects to GitHub
4. 🎉 Every future change auto-deploys!

---

## 🚀 Quick Commands Reference:

```bash
# Check current remote
git remote -v

# Push changes to GitHub (after first setup)
git add .
git commit -m "Your commit message"
git push

# Deploy to Vercel (if not auto-deploying)
vercel --prod
```

---

**Ready? Let's create that GitHub repository! 🚀**

Click here: https://github.com/new
