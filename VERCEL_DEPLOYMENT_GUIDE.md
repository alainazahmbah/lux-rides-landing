# Vercel Deployment Guide for Lux Rides Landing Page

This guide will walk you through deploying your Lux Rides landing page to Vercel in just a few minutes.

## Prerequisites

Before you start, make sure you have:
- A GitHub account (already connected ✓)
- A Vercel account (free at [vercel.com](https://vercel.com))
- Your GitHub repository with the latest code pushed

## Step-by-Step Deployment Instructions

### Step 1: Sign Up / Log In to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"** or **"Log In"**
3. Choose **"Continue with GitHub"** to authenticate with your GitHub account
4. Authorize Vercel to access your GitHub repositories

### Step 2: Import Your Repository

1. After logging in, you'll see the Vercel dashboard
2. Click **"Add New"** button (top right)
3. Select **"Project"**
4. Find and click on **`lux-rides-landing`** repository
   - If you don't see it, click **"Adjust GitHub App Permissions"** and enable access to the repository

### Step 3: Configure Build Settings

When Vercel detects your project, it should auto-detect the settings. Verify these are correct:

**Framework Preset:** Vite

**Build Command:** `pnpm build`

**Output Directory:** `dist`

**Install Command:** `pnpm install`

**Environment Variables:** (Leave empty for now - not needed for this static site)

### Step 4: Deploy

1. Click the **"Deploy"** button
2. Vercel will start building your project (takes 1-3 minutes)
3. You'll see a progress indicator showing the build status
4. Once complete, you'll get a success message with your live URL

### Step 5: Access Your Live Site

Your site will be deployed at a URL like:
```
https://lux-rides-landing.vercel.app
```

You can share this link immediately!

---

## After Deployment

### Automatic Deployments

Every time you push to the `main` branch of your GitHub repository, Vercel will automatically rebuild and redeploy your site. No manual steps needed!

### Add a Custom Domain (Optional)

1. Go to your Vercel project settings
2. Click **"Domains"** in the sidebar
3. Enter your custom domain (e.g., `luxrides.com`)
4. Follow the DNS configuration instructions
5. Your site will be available at your custom domain within 24 hours

### Preview Deployments

When you create a pull request on GitHub, Vercel automatically creates a preview deployment. This lets you test changes before merging to production.

### Rollback to Previous Deployment

If something goes wrong:
1. Go to your Vercel project
2. Click **"Deployments"** tab
3. Find the previous working deployment
4. Click the three dots menu and select **"Promote to Production"**

---

## Troubleshooting

### Build Fails

**Issue:** Deployment fails during build

**Solution:**
1. Check the build logs in Vercel dashboard (click the failed deployment)
2. Common causes:
   - Missing dependencies: Run `pnpm install` locally and push changes
   - TypeScript errors: Run `pnpm check` locally to verify
   - Environment variables: Check if any are needed

### Site Shows Blank Page

**Issue:** Site deploys but shows nothing

**Solution:**
1. Open browser DevTools (F12)
2. Check the Console tab for errors
3. Verify all image URLs are using the CDN links (starting with `https://d2xsxph8kpxj0f.cloudfront.net`)
4. Check that `dist/index.html` exists in the build output

### Slow Performance

**Issue:** Site loads slowly

**Solution:**
1. Vercel automatically optimizes images and caches content
2. Performance should improve after first deployment
3. Check Vercel Analytics dashboard for insights

---

## Quick Reference

| Action | Steps |
|--------|-------|
| **Deploy** | Push to GitHub → Vercel auto-deploys |
| **View Logs** | Vercel Dashboard → Deployments → Click deployment → View logs |
| **Add Domain** | Vercel Dashboard → Settings → Domains → Add domain |
| **Rollback** | Deployments tab → Select previous version → Promote |
| **Environment Variables** | Settings → Environment Variables → Add variable |

---

## Support

If you encounter issues:

1. **Check Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
2. **Review Build Logs:** Vercel dashboard shows detailed error messages
3. **GitHub Issues:** Check your repository for any configuration issues
4. **Vercel Support:** [vercel.com/support](https://vercel.com/support)

---

## What's Deployed

Your Vercel deployment includes:

✓ Complete Lux Rides landing page with all sections
✓ Responsive design (mobile, tablet, desktop)
✓ iOS and Google Play download buttons
✓ Professional hero images and branding
✓ Smooth animations and interactions
✓ Optimized performance with Vercel edge caching

Enjoy your live website! 🚀
