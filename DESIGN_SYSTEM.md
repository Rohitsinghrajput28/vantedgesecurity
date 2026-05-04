# 🎨 Visual Design System & UI Component Library

Complete reference for all visual elements, components, and design tokens used in CyberShield Pro.

## 📐 Design Tokens

### Color System

#### Primary Palette
```
Cyan Glow       #00d9ff  RGB(0, 217, 255)    - Main accent, CTAs, hover states
Purple Glow     #9d4edd  RGB(157, 78, 221)  - Secondary accent, gradients
Electric Blue   #0099ff  RGB(0, 153, 255)   - Tertiary accent, gradient end
```

#### Neutral Palette
```
Dark BG         #0a0e27  - Main background
Dark Card       #1a1f3a  - Card backgrounds
Gray 400        #9ca3af  - Secondary text
Gray 500        #6b7280  - Tertiary text
White           #ffffff  - Primary text
```

#### Semantic Colors
```
Success         #10b981  - Positive actions
Warning         #f59e0b  - Warnings
Error           #ef4444  - Destructive actions
```

### Typography

#### Font Stack
```css
font-family: 'Inter', 'Sora', sans-serif;
```

#### Font Weights
- 400: Regular text
- 500: Medium text
- 600: Semibold text
- 700: Bold text
- 800: Extra bold (titles)

#### Font Sizes
```
Hero Title      5xl (3rem) on mobile → 7xl (4.5rem) on desktop
Section Title   4xl (2.25rem) on mobile → 5xl (3rem) on desktop
Card Title      lg (1.125rem)
Body Text       base (1rem)
Small Text      sm (0.875rem)
Caption Text    xs (0.75rem)
```

#### Line Heights
```
Tight           1.25 (titles)
Normal          1.5 (body)
Relaxed         1.625 (paragraphs)
Loose           2 (whitespace)
```

### Spacing System

```
0    0px
1    0.25rem (4px)
2    0.5rem (8px)
3    0.75rem (12px)
4    1rem (16px)
6    1.5rem (24px)
8    2rem (32px)
12   3rem (48px)
16   4rem (64px)
20   5rem (80px)
```

### Border Radius

```
None      0px
Small     0.375rem (6px)
Normal    0.5rem (8px)
Medium    0.75rem (12px)
Large     1rem (16px)
Full      9999px (circles/pills)
```

### Shadows

```
Small   0 1px 2px 0 rgba(0, 0, 0, 0.05)
Medium  0 4px 6px -1px rgba(0, 0, 0, 0.1)
Large   0 10px 15px -3px rgba(0, 0, 0, 0.1)
XL      0 20px 25px -5px rgba(0, 0, 0, 0.1)
Glow    0 0 50px rgba(0, 217, 255, 0.6)
```

### Breakpoints

```
Mobile              0px (default)
sm (Small)          640px
md (Medium)         768px (primary breakpoint)
lg (Large)          1024px
xl (Extra Large)    1280px
2xl (2x Large)      1536px
```

---

## 🎭 Component Library

### Buttons

#### Primary CTA Button
```
Background:     Gradient cyan-glow → electric-blue
Text Color:     Dark background (#0a0e27)
Padding:        px-10 py-4
Font Weight:    font-bold
Border Radius:  rounded-lg
Hover State:    scale 1.05, glow shadow
Active State:   scale 0.95
```

#### Secondary Button
```
Background:     transparent
Border:         1px solid cyan-glow
Text Color:     cyan-glow
Hover State:    bg-cyan-glow/10
```

#### Icon Button
```
Background:     rounded-full border border-cyan-glow/30
Size:           w-8 h-8
Hover:          bg-cyan-glow/10
```

### Cards

#### Glass Card (Service, Benefit, Article)
```
Background:     rgba(26, 31, 58, 0.4) with blur(10px)
Border:         1px solid rgba(0, 217, 255, 0.1)
Border Radius:  rounded-xl
Padding:        p-8 (desktop) or p-6 (mobile)
Hover:          Border opacity 0.3, bg opacity 0.6, lift -5px
```

#### Timeline Step Card
```
Background:     Glass card style
Border:         1px solid cyan-glow/20
Icon:           Numbered badge with gradient bg
Step Number:    w-8 h-8, centered text, bold
```

### Text Styles

#### Hero Title
```
Font Size:      5xl → 7xl (responsive)
Font Weight:    bold (700)
Line Height:    tight
Letter Spacing: normal
Background:     Gradient cyan → purple → cyan
Color:          clip-text transparent
Animation:      pulse (opacity oscillation)
```

#### Section Title
```
Font Size:      4xl → 5xl (responsive)
Font Weight:    bold (700)
Background:     Gradient cyan-glow to purple-glow
Color:          clip-text transparent
Margin Bottom:  mb-4
```

#### Body Text
```
Font Size:      base (16px)
Font Weight:    normal (400)
Color:          text-gray-300 or text-gray-400
Line Height:    relaxed (1.625)
Margin:         mb-3 or mb-4
```

### Badges

#### Trust Badge
```
Background:     cyan-glow/5
Border:         1px solid cyan-glow/20
Border Radius:  rounded-full
Padding:        px-4 py-2
Font Size:      text-gray-300
```

#### Category Badge
```
Font Size:      xs
Font Weight:    semibold
Color:          text-cyan-glow
Text Transform: uppercase
Letter Spacing: tracking-wider
```

### Inputs

#### Text Input
```
Background:     bg-dark-card
Border:         1px solid cyan-glow/20
Border Radius:  rounded
Padding:        px-3 py-2
Font Size:      sm
Color:          text-white
Placeholder:    text-gray-500
Focus:          border-cyan-glow/50
```

---

## 🎬 Animation System

### Entrance Animations

#### Fade In + Slide Up
```
From:           opacity: 0, y: 50px
To:             opacity: 1, y: 0
Duration:       0.6s
Easing:         ease-out
Trigger:        Scroll (20% visible)
```

#### Staggered Children
```
Container:      opacity fade-in
Children:       Stagger 150ms between each
First Child:    200ms delay before start
```

### Hover Effects

#### Button Glow
```
Scale:          1.05
Shadow:         0 0 50px rgba(0, 217, 255, 0.6)
Duration:       0.3s
Easing:         ease-out
```

#### Card Lift
```
Transform:      translateY(-10px)
Shadow:         0 20px 50px rgba(0, 217, 255, 0.2)
Duration:       0.3s
Border:         opacity increases to 0.3
```

### Continuous Animations

#### Floating Particles
```
Y-axis:         [0, -20, 0]px
X-axis:         [0, random, 0]px
Duration:       15-25s (random)
Loop:           infinite
Easing:         easeInOut
```

#### Text Pulse
```
Opacity:        1 → 0.5 → 1
Duration:       2s
Loop:           infinite
```

---

## 📱 Responsive Specifications

### Mobile (0px - 639px)
```
Single Column Layout
Typography:     5xl → 4xl (hero)
Padding:        px-4
Navigation:     Hamburger menu
Buttons:        Full width on small screens
Cards:          Stack vertically
Spacing:        Compact (mb-4 instead of mb-8)
```

### Tablet (640px - 767px)
```
Two Column Layout (grids)
Typography:     6xl (hero)
Padding:        px-6
Navigation:     Mix of mobile/desktop
Cards:          2-column grid
```

### Desktop (768px+)
```
Multi-Column Layout
Typography:     7xl (hero)
Padding:        px-4 sm:px-6 lg:px-8
Navigation:     Full horizontal menu
Cards:          3-column grid
Spacing:        Generous (mb-8, mb-12)
```

---

## 🎨 Gradient Definitions

### Primary Gradient
```css
background: linear-gradient(to right, #00d9ff, #9d4edd, #00d9ff);
```

### Glow Gradient
```css
background: radial-gradient(circle, #00d9ff 0%, #9d4edd 100%);
```

### Text Gradient
```css
background: linear-gradient(to right, #00d9ff, #9d4edd);
```

### Radial Gradient
```css
background: radial-gradient(circle, rgba(0, 217, 255, 0.1) 0%, transparent 100%);
```

---

## 🔤 Typography Examples

### Hero Title Example
```
"Securing Your Digital Frontier"
Font:           Bold, 7xl (desktop)
Color:          Cyan-Purple-Cyan gradient
Animation:      Pulse opacity
```

### Section Title Example
```
"Our Services"
Font:           Bold, 5xl
Color:          Cyan → Purple gradient
Margin:         mb-4
```

### Subtitle Example
```
"Elite-level offensive security for modern enterprises"
Font:           Light, 2xl
Color:          text-gray-300
Letter Spacing: normal
```

### Description Example
```
"Comprehensive security assessment of web applications..."
Font:           Normal, base
Color:          text-gray-400
Line Height:    relaxed
```

### Caption Example
```
"500+ Clients"
Font:           Normal, xs
Color:          text-gray-300
```

---

## 🎯 Component States

### Button States
```
Default:    Full opacity, normal scale
Hover:      Scale 1.05, glow shadow
Active:     Scale 0.95, glow shadow
Disabled:   opacity-50, no pointer-events
```

### Card States
```
Default:    Border opacity 0.1, bg opacity 0.4
Hover:      Border opacity 0.3, bg opacity 0.6, y: -10px
Focused:    Border opacity 0.3
```

### Input States
```
Default:    Border opacity 0.2
Focus:      Border opacity 0.5, outline-none
Error:      Border color changes to red
Disabled:   bg-opacity-50, no pointer-events
```

---

## 🌈 Color Usage Guide

### Where to use Cyan (#00d9ff)
- Primary buttons
- Link hover states
- Icon accents
- Border highlights
- Glow effects
- Badge backgrounds

### Where to use Purple (#9d4edd)
- Gradient end points
- Secondary accents
- Icon on hover
- Decorative elements
- Background gradients

### Where to use Gray
- Body text (300-400)
- Secondary text (500)
- Borders (200-300)
- Backgrounds (700-900)

---

## 📏 Spacing Rules

### Vertical Spacing
```
Between Sections:   py-20 (80px)
Between Subsections: py-12 (48px)
Between Elements:   mb-4 to mb-8 (16px-32px)
Within Cards:       p-6 to p-8 (24px-32px)
```

### Horizontal Spacing
```
Container:          max-w-7xl (80rem)
Page Padding:       px-4 sm:px-6 lg:px-8
Section Padding:    Container with auto margins
Card Padding:       p-6 to p-8
```

---

## ✅ Design Checklist

When creating new components:

- [ ] Use color tokens from palette
- [ ] Apply proper typography sizing
- [ ] Include responsive design (mobile-first)
- [ ] Add hover/active states
- [ ] Use consistent spacing
- [ ] Apply smooth transitions (0.3s)
- [ ] Test on multiple breakpoints
- [ ] Ensure accessibility contrast
- [ ] Document animation timing
- [ ] Use semantic HTML structure

---

## 🎬 Animation Timing Guidelines

```
Hover Effects:      0.3s (immediate feedback)
Entrance Anims:     0.6s (noticeable but not slow)
Scroll Reveals:     0.6s staggered (cascading effect)
Icon Rotation:      0.3s (quick feedback)
Expand/Collapse:    0.3s (smooth reveal)
Transitions:        0.3s (all properties)
Loops:              15-25s (subtle, continuous)
```

---

## 📊 Accessibility Standards

- ✅ Color contrast ratio ≥ 4.5:1 for text
- ✅ Focus states visible (≥3px)
- ✅ Semantic HTML elements
- ✅ ARIA labels on icons
- ✅ Keyboard navigation support
- ✅ No flashing (animations < 3 flashes/sec)
- ✅ Touch targets ≥ 44px × 44px

---

## 🔗 Related Documentation

- **SETUP.md** - Component file locations
- **ANIMATIONS.md** - Detailed animation patterns
- **QUICK_START.md** - How to customize
- **BUILD_SUMMARY.md** - Feature specifications

---

**Last Updated**: March 2024
**Version**: 1.0.0
**Status**: Complete
