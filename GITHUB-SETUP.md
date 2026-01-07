# 🚀 Push to GitHub - Quick Guide

## Method 1: Create Repo via GitHub Website (Easiest)

### Step 1: Create the Repository

1. Go to [github.com](https://github.com) and log in
2. Click the **"+"** in the top-right → **"New repository"**
3. Fill in:
    - **Repository name**: `cmtech-website`
    - **Description**: "Modern website for The Cade Moore Polytechnic Institute - Real Skills for the Real World"
    - **Visibility**: Choose Public or Private
    - **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. Click **"Create repository"**

### Step 2: Push Your Code

GitHub will show you commands. Use these:

```bash
cd /Users/james/Desktop/CMTech/website/cmtech-website

# Add the remote (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/cmtech-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**That's it!** Your code is now on GitHub. ✅

---

## Method 2: Using GitHub CLI (Faster if installed)

If you have GitHub CLI installed:

```bash
cd /Users/james/Desktop/CMTech/website/cmtech-website

# Login (if needed)
gh auth login

# Create repo and push
gh repo create cmtech-website --public --source=. --remote=origin --push
```

---

## Method 3: Create with Organization Account

If this should be under a CMTech organization:

1. Go to your organization page: `github.com/YOUR-ORG`
2. Click "New repository"
3. Follow Step 1 above, but select the organization as the owner
4. Then run:

```bash
git remote add origin https://github.com/YOUR-ORG/cmtech-website.git
git push -u origin main
```

---

## 🔗 Next Steps After Pushing

### Connect to Vercel (Auto-Deploy)

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New" → "Project"
3. Select "Import Git Repository"
4. Choose your GitHub repo: `cmtech-website`
5. Click "Deploy"

Now every time you push to GitHub, Vercel will automatically deploy! 🎉

### Enable GitHub Pages (Alternative)

If you want a simple GitHub-hosted version:

1. Go to repo Settings → Pages
2. Source: Deploy from branch → `main` → `/` (root)
3. Save

Note: Next.js needs a build step, so Vercel is recommended.

---

## 📝 Current Status

✅ Code committed locally  
⬜ Pushed to GitHub (follow steps above)  
⬜ Connected to Vercel for auto-deploy

---

## 🛠️ Common Git Commands for Later

```bash
# Check status
git status

# Add changes
git add .

# Commit changes
git commit -m "Your message here"

# Push to GitHub
git push

# Pull latest changes
git pull

# Create a new branch
git checkout -b feature-name

# Switch branches
git checkout main
```

---

## 🆘 Troubleshooting

### "Repository not found"

Make sure you replaced `YOUR-USERNAME` with your actual GitHub username.

### "Permission denied"

You may need to authenticate:

```bash
git remote set-url origin https://YOUR-USERNAME@github.com/YOUR-USERNAME/cmtech-website.git
```

Or set up SSH keys (more secure for frequent use).

### "Branch 'main' already exists"

Just push directly:

```bash
git push -u origin main
```

---

**Ready to push!** 🚀
