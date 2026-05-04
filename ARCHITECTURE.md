# 🏗️ Project Architecture & Component Hierarchy

## Application Structure

```
App.tsx (Main Component)
├── CursorGlow
│   └── useCursorGlow (custom hook)
│       └── Tracks mouseMove events in real-time
│
├── ParticleBackground
│   └── useParticles (custom hook)
│       └── Generates array of animated particles
│
├── Navbar
│   ├── Sticky position
│   ├── Navigation links
│   ├── Mobile hamburger menu
│   └── CTA button
│
├── HeroSection
│   ├── Gradient title text
│   ├── Subtitle
│   ├── Description
│   ├── Primary CTA button
│   └── Trust badges (3 items)
│
├── ServicesGrid
│   ├── Section title
│   └── 5 Service Cards
│       ├── Service 1: Web App Pentesting
│       ├── Service 2: Mobile App Pentesting
│       ├── Service 3: Source Code Review
│       ├── Service 4: Network Pentesting
│       └── Service 5: Cloud Pentesting (AWS)
│
├── ProcessTimeline
│   ├── Section title
│   ├── Vertical timeline container
│   └── 6 Process Steps
│       ├── Step 1: Discovery & Scoping
│       ├── Step 2: Reconnaissance
│       ├── Step 3: Active Testing
│       ├── Step 4: Analysis & Review
│       ├── Step 5: Reporting
│       └── Step 6: Remediation Support
│
├── BenefitsSection
│   ├── Section title
│   └── 3 Benefit Cards
│       ├── Benefit 1: Proactive Security
│       ├── Benefit 2: Expert Team
│       └── Benefit 3: Fast Turnaround
│
├── FAQSection
│   ├── Section title
│   └── FAQ Accordion (6 items)
│       ├── FAQ 1: What is pentesting?
│       ├── FAQ 2: How long does it take?
│       ├── FAQ 3: Are you certified?
│       ├── FAQ 4: Do you provide remediation?
│       ├── FAQ 5: What industries?
│       └── FAQ 6: How much does it cost?
│
├── ArticlesSection
│   ├── Section title
│   ├── 3 Article Cards
│   │   ├── Article 1: Supply Chain Attacks
│   │   ├── Article 2: Zero Trust Architecture
│   │   └── Article 3: API Security
│   └── "View All Articles" CTA
│
└── Footer
    ├── Brand section
    │   ├── Logo
    │   ├── Tagline
    │   └── Social links (3)
    │
    ├── 4-Column layout
    │   ├── Column 1: Services (5 links)
    │   ├── Column 2: Company (5 links)
    │   ├── Column 3: Legal (3 links)
    │   └── Column 4: Newsletter
    │
    └── Bottom section
        ├── Copyright
        └── Legal links

```

## Data Flow

```
User Interaction (Browser)
        ↓
┌─────────────────────────────────────┐
│      React Component State           │
├─────────────────────────────────────┤
│ • expandedId (FAQ)                  │
│ • isOpen (Mobile menu)              │
│ • mousePosition (Cursor)            │
│ • inView (Scroll detection)         │
└─────────────────────────────────────┘
        ↓
┌─────────────────────────────────────┐
│      Framer Motion Animations       │
├─────────────────────────────────────┤
│ • whileHover                        │
│ • whileTap                          │
│ • animate/initial/exit              │
│ • variants                          │
└─────────────────────────────────────┘
        ↓
┌─────────────────────────────────────┐
│      DOM & CSS Styles               │
├─────────────────────────────────────┤
│ • Tailwind classes                  │
│ • Custom CSS animations             │
│ • Transform properties              │
│ • Opacity & colors                  │
└─────────────────────────────────────┘
        ↓
    Visual Output
```

## Component Dependency Graph

```
App.tsx
├── Navbar.tsx
│   └── lucide-react (Menu, X icons)
│
├── CursorGlow.tsx
│   └── hooks/useCursorGlow.ts
│
├── ParticleBackground.tsx
│   └── hooks/useParticles.ts
│
├── HeroSection.tsx
│   └── framer-motion (motion.section, motion.div, etc.)
│
├── ServicesGrid.tsx
│   ├── react-intersection-observer (useInView)
│   ├── framer-motion
│   └── lucide-react (Code, Shield, Globe, Server, Cloud, CheckCircle)
│
├── ProcessTimeline.tsx
│   ├── react-intersection-observer (useInView)
│   ├── framer-motion
│   └── lucide-react (ArrowRight)
│
├── BenefitsSection.tsx
│   ├── react-intersection-observer (useInView)
│   ├── framer-motion
│   └── lucide-react (Zap, Award, Clock)
│
├── FAQSection.tsx
│   ├── react-intersection-observer (useInView)
│   ├── framer-motion (motion.*, AnimatePresence)
│   └── lucide-react (ChevronDown)
│
├── ArticlesSection.tsx
│   ├── react-intersection-observer (useInView)
│   ├── framer-motion
│   └── lucide-react (ArrowRight, Calendar)
│
└── Footer.tsx
    ├── react-intersection-observer (useInView)
    ├── framer-motion
    └── lucide-react (Mail, Linkedin, Twitter)
```

## State Management Pattern

```
Component Level State
├── Navbar
│   └── isOpen: boolean (mobile menu)
│
├── FAQSection
│   └── expandedId: number | null (active FAQ)
│
└── All Components
    └── inView: boolean (from useInView hook)
```

No global state management needed - pure component state via `useState`

## Animation Flow

```
Page Load
    ↓
Navbar slides in (initial → animate)
    ↓
Hero fades in + staggered children
    ↓
User scrolls down
    ↓
useInView detects section visibility
    ↓
Scroll animations trigger (initial → animate)
    ↓
Components fade in + slide up (staggered)
    ↓
User interacts (hover/click)
    ↓
Framer Motion whileHover/whileTap effects
    ↓
Visual feedback (scale, glow, color change)
```

## Rendering Pipeline

```
React Component Tree
        ↓
TypeScript Type Checking
        ↓
JSX → Vite Transformation
        ↓
Tailwind CSS Processing
        ↓
PostCSS Autoprefixer
        ↓
Dynamic Imports (Code Splitting)
        ↓
Browser DOM Rendering
        ↓
Framer Motion Animations
        ↓
Smooth 60 FPS Output
```

## Hook Dependency Chain

```
App.tsx
│
├── useCursorGlow()
│   └── useEffect (mousemove listener)
│       └── useState (mousePosition)
│
├── useParticles()
│   └── useEffect (particle generation)
│       └── useState (particles array)
│
└── Per-Component
    ├── useInView()
    │   └── Intersection Observer API
    │
    └── useState() (where needed)
        ├── expandedId (FAQ)
        └── isOpen (Mobile menu)
```

## File System Organization

```
src/
├── entry point
│   └── main.tsx → index.html
│
├── application root
│   └── App.tsx → all components
│
├── components/ (10 files)
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── ServicesGrid.tsx
│   ├── ProcessTimeline.tsx
│   ├── BenefitsSection.tsx
│   ├── FAQSection.tsx
│   ├── ArticlesSection.tsx
│   ├── Footer.tsx
│   ├── CursorGlow.tsx
│   ├── ParticleBackground.tsx
│   └── index.ts (barrel export)
│
├── hooks/ (2 files)
│   ├── useCursorGlow.ts
│   ├── useParticles.ts
│   └── index.ts (barrel export)
│
└── styles
    └── index.css
        ├── Tailwind directives
        ├── Custom animations
        ├── Global utilities
        └── Scrollbar styling
```

## CSS Architecture

```
Tailwind CSS (default + extended)
├── Utilities (flex, grid, text-, bg-, etc.)
├── Components (glass-card, smooth-transition)
├── Responsive prefixes (sm:, md:, lg:, xl:)
└── Custom theme
    ├── Colors (cyan-glow, purple-glow, etc.)
    ├── Animations (glitch, float)
    └── Keyframes (custom @keyframes)

Global CSS (index.css)
├── Tailwind directives
├── Custom scrollbar
├── Glitch animation
├── Gradient effects
├── Card styles
└── Smooth transitions

Per-Component Styles
└── Inline className props (Tailwind utility classes)
```

## Build & Optimization Pipeline

```
Source Code (TypeScript)
        ↓
Vite Development Server
├── Fast Refresh (HMR)
├── Source Maps
└── Dev Mode Optimizations
        ↓
        or
        ↓
Vite Production Build
├── TypeScript Compilation
├── Code Minification
├── CSS Processing (Tailwind)
├── Tree Shaking (unused code)
├── Code Splitting (dynamic imports)
└── Asset Optimization
        ↓
Dist Folder
├── index.html (~2 KB)
├── assets/
│   ├── index.*.js (~150-200 KB)
│   └── index.*.css (~80-100 KB)
└── Sourcemaps (optional)
```

## Performance Optimization Strategies

```
Bundle Size Reduction
├── Tailwind CSS (unused styles removed)
├── Dynamic imports (code splitting)
├── Tree shaking (unused dependencies)
└── Minification (both JS and CSS)

Runtime Performance
├── useInView with triggerOnce (animations once)
├── Framer Motion GPU acceleration (transform)
├── Lazy animations (only animate visible elements)
├── 60 FPS target (hardware acceleration)
└── Debounced scroll events

Mobile Performance
├── Responsive typography (smaller fonts)
├── Touch-friendly buttons (44px minimum)
├── Optimized images (placeholders only)
├── Minimal animations on mobile
└── Efficient CSS media queries
```

## SEO Architecture

```
HTML Structure
├── Semantic tags
│   ├── <header> (Navbar)
│   ├── <main> (Hero → Articles)
│   ├── <section> (Each major section)
│   ├── <nav> (Navigation links)
│   └── <footer> (Footer)
│
├── Meta tags
│   ├── viewport
│   ├── charset
│   ├── title
│   ├── description
│   └── canonical (if needed)
│
├── Heading hierarchy
│   ├── h1 (Hero title)
│   ├── h2 (Section titles)
│   └── h3 (Card titles)
│
└── Semantic content
    ├── Proper link hierarchy
    ├── Image alt text
    ├── Article structure
    └── Structured data (if needed)
```

## Type Safety Strategy

```
TypeScript Configuration
├── strict: true (strict mode)
├── noUnusedLocals: true (catch unused vars)
├── noUnusedParameters: true (catch unused params)
├── noImplicitAny: true (require explicit types)
└── moduleResolution: bundler

Component Type Definitions
├── React.FC<Props> (function components)
├── Props interface (prop types)
├── State types (useState<Type>)
└── Event types (React.MouseEvent, etc.)

Utility Types
├── Partial<> (optional properties)
├── Record<> (key-value objects)
├── Union types (type A | type B)
└── Generic types <T> (reusable)
```

## Testing Strategy (Recommended)

```
For Extension:
├── Unit Tests (Jest)
│   ├── Hook tests (useCursorGlow, useParticles)
│   └── Utility functions
│
├── Component Tests (React Testing Library)
│   ├── Render tests
│   ├── Interaction tests
│   └── Snapshot tests
│
├── E2E Tests (Cypress)
│   ├── Navigation flow
│   ├── Responsive design
│   └── Animations (if critical)
│
└── Visual Tests (Percy/Chromatic)
    ├── Screenshot comparisons
    └── Design consistency
```

## Accessibility Hierarchy

```
Semantic HTML
    ↓
ARIA Labels (icons)
    ↓
Keyboard Navigation
    ↓
Focus States (visible)
    ↓
Color Contrast (4.5:1)
    ↓
Alt Text (images)
    ↓
Reduced Motion (prefers-reduced-motion)
```

---

## Quick Reference

**Main Entry**: `src/App.tsx`
**Components Directory**: `src/components/`
**Custom Hooks**: `src/hooks/`
**Styles**: `src/index.css` + Tailwind config
**Build Output**: `dist/` folder
**Config Files**: Root directory

---

*This architecture is optimized for:*
- ✅ Maintainability (clear structure)
- ✅ Scalability (easy to add components)
- ✅ Performance (optimized rendering)
- ✅ Developer experience (TypeScript, HMR)
- ✅ User experience (smooth animations)

**Last Updated**: March 2024
