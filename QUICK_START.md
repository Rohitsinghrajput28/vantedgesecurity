# 🚀 Quick Start Guide - CyberShield Pro

## Prerequisites Check

Before starting, ensure you have:
- Windows OS (confirmed in your environment)
- Node.js 18+ installed
- npm or yarn package manager

## Step-by-Step Setup

### Step 1: Open Terminal in Project Directory

Open PowerShell or Command Prompt and navigate to:
```powershell
cd "d:\VS-code\My Company"
```

### Step 2: Install All Dependencies

This will install React, Framer Motion, Tailwind CSS, and all other required packages:

```powershell
npm install
```

**Expected output**: You should see progress bars and "added X packages" message.

**Troubleshooting**: If you get "npm not found", ensure Node.js is installed and restart your terminal.

### Step 3: Start Development Server

Run the development server which will compile TypeScript and start the local server:

```powershell
npm run dev
```

**Expected output**:
```
VITE v5.0.11  ready in XXX ms

➜  Local:   http://localhost:3000/
➜  Press h to show help
```

The page should automatically open in your default browser at `http://localhost:3000`.

### Step 4: View the Landing Page

You should see:
- ✅ Dark navy background with glowing accents
- ✅ Sticky navigation bar at top
- ✅ Interactive cursor glow effect (move your mouse around)
- ✅ Floating particle effects
- ✅ Hero section with "Securing Your Digital Frontier" headline
- ✅ All sections visible by scrolling

## Hot Module Replacement (HMR)

The development server supports HMR, meaning:
- Edit any file in `src/`
- Save the file (Ctrl+S)
- Changes appear instantly in browser (no manual refresh needed)

## Building for Production

When you're ready to deploy:

```powershell
npm run build
```

This creates an optimized production build in the `dist/` folder.

To preview the production build locally:

```powershell
npm run preview
```

## Project Structure at a Glance

```
src/
├── components/           # React components
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── ServicesGrid.tsx
│   ├── ProcessTimeline.tsx
│   ├── BenefitsSection.tsx
│   ├── FAQSection.tsx
│   ├── ArticlesSection.tsx
│   ├── Footer.tsx
│   ├── CursorGlow.tsx    # Interactive cursor effect
│   └── ParticleBackground.tsx  # Floating particles
├── hooks/                # Custom React hooks
│   ├── useCursorGlow.ts
│   └── useParticles.ts
├── App.tsx              # Main app component
├── main.tsx             # React entry point
└── index.css            # Global styles
```

## Key Features to Test

### 1. Interactive Cursor Glow
- Move your mouse around the page
- You should see a cyan-to-purple glowing effect following the cursor

### 2. Particle Effects
- Watch the subtle floating particles in the background
- They move slowly and continuously

### 3. Scroll Animations
- Scroll down the page
- Cards, text, and sections fade in and slide up
- Staggered animations create a cascading effect

### 4. Hover Effects
- Hover over service cards
- Buttons should glow and scale up
- Cards should lift and change border color

### 5. Mobile Responsiveness
- Press F12 to open DevTools
- Toggle device toolbar (Ctrl+Shift+M)
- Test on iPhone, iPad, and Android dimensions
- Mobile menu should appear below 768px width

### 6. FAQ Accordion
- Scroll to FAQ section
- Click any question
- Answer should smoothly expand/collapse
- Chevron icon should rotate

## Common Issues & Solutions

### Issue: Dependencies failing to install
**Solution**:
```powershell
# Clear cache and try again
npm cache clean --force
npm install
```

### Issue: Port 3000 already in use
**Solution**: The server will automatically use port 3001 or higher. Check the terminal output for the actual URL.

### Issue: Styles not loading (raw Tailwind classes visible)
**Solution**:
```powershell
# Restart the development server
npm run dev
```

### Issue: Typescript errors in editor
**Solution**: These resolve once npm install completes. Ensure all dependencies installed successfully.

## Environment Variables (Optional)

Create a `.env.local` file in the project root for any custom variables:

```
VITE_API_URL=https://api.example.com
VITE_ENVIRONMENT=production
```

Access in code via: `import.meta.env.VITE_API_URL`

## Customization Quick Tips

### Change Brand Name
1. Open `src/components/Navbar.tsx`
2. Change "CyberShield" text
3. Open `src/components/Footer.tsx`
4. Change "CyberShield Pro" text

### Change Primary Color
1. Open `tailwind.config.js`
2. Change `'cyan-glow': '#00d9ff'` to your color
3. All cyan-glow elements update automatically

### Update Service Cards
1. Open `src/components/ServicesGrid.tsx`
2. Edit the `services` array
3. Changes reflect instantly due to HMR

### Modify Navigation Links
1. Open `src/components/Navbar.tsx`
2. Update the `navLinks` array
3. Add/remove section anchors as needed

## Deployment Options

### Option 1: Vercel (Recommended)
```powershell
npm install -g vercel
vercel
```
Follow prompts to deploy automatically.

### Option 2: Netlify
1. Push code to GitHub
2. Connect repository to Netlify
3. Automatic deployments on push

### Option 3: Traditional Hosting
1. Build locally: `npm run build`
2. Upload `dist/` folder contents to web server
3. Ensure server routes all requests to `index.html`

## Testing the Full Build

```powershell
# Create production build
npm run build

# Test the production build locally
npm run preview

# Visit http://localhost:4173
```

## Performance Optimization Checklist

- ✅ TypeScript for type safety
- ✅ Framer Motion for performant animations
- ✅ Tailwind CSS for minimal CSS bundle
- ✅ React 18 with automatic batching
- ✅ Intersection Observer for scroll triggers
- ✅ Lazy animations (only animate when visible)

## File Size Reference

After `npm run build`:
- Typical bundle size: 150-200KB (gzipped: 50-70KB)
- Images: Use WebP format where possible
- No external CDNs required

## Getting Help

### Review Documentation
- [React Docs](https://react.dev/)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite Guide](https://vitejs.dev/)

### Check Project Files
- `README.md` - Project overview
- `SETUP.md` - Detailed setup guide
- `BUILD_SUMMARY.md` - Complete feature list

## Next Steps

1. ✅ Run `npm install` to install dependencies
2. ✅ Run `npm run dev` to start development server
3. ✅ Open browser to `http://localhost:3000`
4. ✅ Test all interactive features
5. ✅ Customize content and branding
6. ✅ Run `npm run build` for production
7. ✅ Deploy to your hosting platform

---

**Ready to launch?** 
```powershell
npm install && npm run dev
```

Your landing page will be live in seconds! 🚀
