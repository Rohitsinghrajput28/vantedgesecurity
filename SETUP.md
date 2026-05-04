# Project Structure

```
cybersecurity-landing/
├── public/                    # Static assets
├── src/
│   ├── components/
│   │   ├── Navbar.tsx         # Sticky navigation with mobile menu
│   │   ├── CursorGlow.tsx     # Interactive cursor glow effect
│   │   ├── ParticleBackground.tsx  # Animated particle system
│   │   ├── HeroSection.tsx    # Main hero section with CTA
│   │   ├── ServicesGrid.tsx   # 5 service cards with hover effects
│   │   ├── ProcessTimeline.tsx # Vertical process timeline
│   │   ├── BenefitsSection.tsx # 3-column benefits grid
│   │   ├── FAQSection.tsx     # Expandable FAQ accordion
│   │   ├── ArticlesSection.tsx # Blog preview grid
│   │   ├── Footer.tsx         # Footer with links and newsletter
│   │   └── index.ts           # Component exports
│   ├── hooks/
│   │   ├── useCursorGlow.ts   # Cursor position tracking hook
│   │   ├── useParticles.ts    # Particle generation hook
│   │   └── index.ts           # Hook exports
│   ├── App.tsx                # Main application component
│   ├── main.tsx               # React DOM entry point
│   └── index.css              # Global styles and animations
├── index.html                 # HTML entry point
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
├── tsconfig.json              # TypeScript configuration
├── vite.config.ts             # Vite configuration
├── package.json               # Dependencies and scripts
├── README.md                  # Project documentation
├── SETUP.md                   # Setup and development guide
└── .gitignore                 # Git ignore rules
```

## File Descriptions

### Components

**Navbar.tsx**
- Sticky navigation bar with gradient branding
- Desktop and mobile menu variants
- Smooth animations on navigation links
- "Book Discovery Call" CTA button

**CursorGlow.tsx**
- Custom hook-based cursor tracking
- Radial gradient glow effect
- Smooth 0.1s transition animation
- Color transitions from cyan to purple

**ParticleBackground.tsx**
- 50 animated particles by default
- Floating animation with Framer Motion
- Low opacity for subtle background effect
- Infinitely looping animations

**HeroSection.tsx**
- Full-height hero with centered content
- Glitch-effect gradient text
- Staggered fade-in animations
- Trust badges and trust indicators
- Primary CTA button with glow effect

**ServicesGrid.tsx**
- 5 service cards in responsive grid
- Glassmorphic card design
- Hover-scale and border color transitions
- Icon integration with Lucide React
- Scroll-triggered reveal animations

**ProcessTimeline.tsx**
- 6-step vertical process timeline
- Numbered step indicators
- Alternating left-right layout for desktop
- Animated step dots
- Scroll-triggered animations

**BenefitsSection.tsx**
- 3-column benefits grid
- Icon-based benefit cards
- Hover lift effect
- Scroll-triggered animations
- Centered text layout

**FAQSection.tsx**
- Expandable accordion pattern
- Smooth height animations
- ChevronDown icon rotation
- Scroll-triggered animations
- 6 pre-populated FAQ items

**ArticlesSection.tsx**
- 3-column blog post grid
- Image with gradient overlay
- Category and date badges
- "View All Articles" CTA
- Responsive image handling

**Footer.tsx**
- 4-column footer layout
- Brand section with social links
- Service, company, and resource links
- Newsletter subscription form
- Copyright and legal links

### Hooks

**useCursorGlow.ts**
- Tracks mouse position in real-time
- Returns x, y coordinates
- Cleans up event listener on unmount

**useParticles.ts**
- Generates array of particle objects
- Each particle has random position, size, and duration
- Configurable particle count (default: 50)

### Styling

**index.css**
- Tailwind directives (@tailwind)
- Custom scrollbar styling
- Glitch text effect animation
- Cursor glow styles
- Glass card transitions
- Global smooth transitions

**tailwind.config.js**
- Extended theme colors (cyan-glow, purple-glow, etc.)
- Custom animations (glitch, float)
- Inter and Sora font families
- Dark mode color palette

## Setup Instructions

### Prerequisites
- Node.js 18+ and npm/yarn
- VS Code (recommended)

### Installation

1. Navigate to project directory:
```bash
cd "d:\VS-code\My Company"
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## Key Features

### Performance Optimizations
- Vite for fast builds and HMR
- Tree-shaking with ES modules
- Lazy component loading via Framer Motion
- Optimized image loading in articles section
- CSS-in-JS optimizations via Tailwind

### Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- ARIA labels on icons
- Keyboard navigation support
- Focus states on interactive elements

### Browser Compatibility
- ES2020 target
- All modern browsers supported
- Fallbacks for older browsers via PostCSS

## Customization Guide

### Changing Colors
1. Open `tailwind.config.js`
2. Modify these values:
   - `'cyan-glow': '#00d9ff'` - Primary accent
   - `'purple-glow': '#9d4edd'` - Secondary accent
   - `'dark-bg': '#0a0e27'` - Background
   - `'dark-card': '#1a1f3a'` - Card background

### Updating Content
- Services: Edit `services` array in `ServicesGrid.tsx`
- Process steps: Edit `processSteps` array in `ProcessTimeline.tsx`
- Benefits: Edit `benefits` array in `BenefitsSection.tsx`
- FAQs: Edit `faqs` array in `FAQSection.tsx`
- Articles: Edit `articles` array in `ArticlesSection.tsx`

### Modifying Animations
- Global animation timing in component transitions
- Stagger delays in `containerVariants` and `itemVariants`
- Framer Motion documentation: https://www.framer.com/motion/

## Development Tips

### Hot Module Replacement (HMR)
Changes to components automatically reflect in browser without full reload.

### TypeScript Support
All components are fully typed with React and Framer Motion types.

### Responsive Design
Uses Tailwind's responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`

### Performance Monitoring
- Use React DevTools to profile components
- Check network tab for unused assets
- Monitor animation frame rates

## Deployment

### Environment Variables
Create `.env.local` if needed for:
- API endpoints
- Analytics tracking
- CDN URLs

### Build Output
Production build outputs to `/dist` folder:
```bash
npm run build
```

### Hosting Options
- Vercel (recommended for Vite projects)
- Netlify
- GitHub Pages
- Traditional web servers

## Troubleshooting

### Dependencies Not Installing
```bash
rm -rf node_modules package-lock.json
npm install
```

### Port 3000 Already in Use
The dev server will auto-increment to 3001, 3002, etc.

### Tailwind Classes Not Applying
Ensure `content` paths in `tailwind.config.js` match your file structure.

### Animations Not Smooth
- Check browser hardware acceleration settings
- Reduce particle count if performance is poor
- Profile with browser DevTools Performance tab

## Support & Resources

- Framer Motion Docs: https://www.framer.com/motion/
- Tailwind CSS: https://tailwindcss.com/
- React Docs: https://react.dev/
- Vite Guide: https://vitejs.dev/
- Lucide Icons: https://lucide.dev/

---

Last Updated: March 2024
