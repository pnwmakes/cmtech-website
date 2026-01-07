# CMTech Website - Deployment Guide

## 🚀 Quick Deploy to Vercel

### Method 1: Using Vercel CLI (Fastest)

1. Install Vercel CLI globally (if not already installed):

```bash
npm i -g vercel
```

2. Navigate to the project directory:

```bash
cd /Users/james/Desktop/CMTech/website/cmtech-website
```

3. Login to Vercel:

```bash
vercel login
```

4. Deploy:

```bash
vercel
```

5. For production deployment:

```bash
vercel --prod
```

### Method 2: Using Vercel Dashboard (Easiest)

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New" → "Project"
3. Import from Git or upload the `cmtech-website` folder
4. Vercel will auto-detect Next.js and configure everything
5. Click "Deploy"

### Method 3: GitHub + Vercel (Continuous Deployment)

1. Create a GitHub repository
2. Push the `cmtech-website` folder to GitHub:

```bash
cd /Users/james/Desktop/CMTech/website/cmtech-website
git remote add origin https://github.com/YOUR-USERNAME/cmtech-website.git
git branch -M main
git push -u origin main
```

3. Go to [vercel.com](https://vercel.com) and import the GitHub repository
4. Every push to main will auto-deploy

---

## 🎨 What's Included in This Demo

### Features:

-   ✅ **CMTech Logo** - Your official logo in the header
-   ✅ **Animated Counter** - Watch the "210,000+ Learners Served" count up (the cheeky part!)
-   ✅ **Impact Stats** - 3 beautiful stat cards with real numbers
-   ✅ **Gradient Design** - Modern blue/amber color scheme
-   ✅ **Responsive Layout** - Looks great on mobile, tablet, desktop
-   ✅ **Interactive Buttons** - Hover effects and animations
-   ✅ **Easter Egg Message** - Special note for the team at the bottom
-   ✅ **Sticky Header** - Navigation follows as you scroll
-   ✅ **Accessibility** - Focus states, semantic HTML

### The Cheeky Element 🎉

The learner counter that animates from 0 to 210,000+ when the page loads - it's eye-catching and shows off the scale of your impact!

---

## 📱 Local Preview

The site is currently running at:

-   **Local**: http://localhost:3000
-   **Network**: http://192.168.2.229:3000

Share the network URL with others on your WiFi to show them!

---

## 🔧 Project Structure

```
cmtech-website/
├── app/
│   ├── globals.css       # Custom design system with CMTech colors
│   ├── layout.tsx         # Root layout (fonts, metadata)
│   └── page.tsx           # Homepage with cheeky demo
├── public/
│   └── logo.png           # CMTech logo
├── package.json           # Dependencies
└── tsconfig.json          # TypeScript config
```

---

## 🎯 Next Steps After Deployment

Once deployed, you'll get a URL like: `https://cmtech-website.vercel.app`

Share this with your team to show:

1. The animated learner counter (cheeky element)
2. Modern, professional design
3. Mobile responsiveness
4. Fast loading speed
5. The foundation for the full site

---

## 💡 Customization Notes

### Colors (in `app/globals.css`):

-   Primary Blue: `#1e40af` (trust, stability)
-   Accent Orange: `#f59e0b` (hope, energy)
-   Success Green: `#10b981` (growth, opportunity)

### Typography:

-   System fonts for performance and accessibility
-   Large, bold headlines for impact
-   Readable body text (minimum 16px)

### Animations:

-   Counter animation on load
-   Button hover effects with scale
-   Smooth scrolling
-   Glowing donate button

---

## 🚨 Important Notes

1. **Logo**: The CMTech logo is already in `/public/logo.png`
2. **Content**: This is Phase 1 - homepage demo only
3. **Buttons**: Currently non-functional (Phase 2 will add pages/forms)
4. **Analytics**: Not yet integrated (add in Phase 5)

---

## 📞 Support

If you need help deploying:

-   Check Vercel docs: https://vercel.com/docs
-   Check Next.js docs: https://nextjs.org/docs

---

**Built with Next.js 14, TypeScript, and Tailwind CSS**  
**Ready to deploy in under 2 minutes!** ⚡
