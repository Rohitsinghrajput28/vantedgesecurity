# Animation Patterns & Reference Guide

## Overview
This document outlines all animation patterns used in the CyberShield Pro landing page, making it easy to understand, modify, and extend animations.

## 1. Scroll-Triggered Animations

### Pattern: Fade-In + Slide Up
Used in: ServicesGrid, ProcessTimeline, FAQSection, ArticlesSection

```typescript
const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 50 }}
  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
  transition={{ duration: 0.6 }}
>
  {/* Content */}
</motion.div>
```

**Timing**: 0.6s duration, cubic-bezier ease
**Trigger**: 20% of element visible
**Once**: Animation triggers only once (performance)

### Pattern: Staggered Children
Used in: All grid sections with multiple cards

```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,  // 150ms between each child
      delayChildren: 0.2,     // 200ms before starting
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};
```

**Effect**: Cards animate one after another with 150ms delay
**Used in**: ServiceGrid, BenefitsSection, ArticlesSection
**Timing**: 0.6s per card, cascading effect

## 2. Entrance Animations

### Pattern: Navbar Slide-Down
Used in: Navbar

```typescript
<motion.nav
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ duration: 0.5 }}
/>
```

**Effect**: Navbar slides down from above on page load
**Timing**: 0.5s smooth deceleration
**Trigger**: Page mount

### Pattern: Hero Section Stagger
Used in: HeroSection

```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};
```

**Effect**: Each element (title, subtitle, description) fades in with slight upward movement
**Timing**: 200ms stagger, 300ms initial delay, 0.8s per element
**Order**: Title → Subtitle → Description → CTA → Badges

## 3. Hover Effects

### Pattern: Scale + Glow
Used in: Buttons, Cards

```typescript
<motion.button
  whileHover={{
    scale: 1.05,
    boxShadow: '0 0 50px rgba(0, 217, 255, 0.6)',
  }}
  whileTap={{ scale: 0.95 }}
/>
```

**Hover**: Scales to 105%, adds cyan glow shadow
**Tap**: Scales to 95% for tactile feedback
**Used in**: All CTA buttons

### Pattern: Lift Card
Used in: Service Cards, Article Cards

```typescript
<motion.div
  whileHover={{
    y: -10,
    boxShadow: '0 20px 50px rgba(0, 217, 255, 0.2)',
  }}
/>
```

**Effect**: Card lifts 10px up, shadow increases
**Timing**: Instant (0s) transition
**Used in**: ServicesGrid, BenefitsSection, ArticlesSection

### Pattern: Color Transition
Used in: Text, Icons, Borders

```typescript
<motion.a
  whileHover={{ color: '#00d9ff' }}
  className="text-gray-300 hover:text-cyan-glow smooth-transition"
/>
```

**Timing**: Uses `smooth-transition` class (0.3s cubic-bezier)
**Colors**: Gray → Cyan on hover
**Used in**: Navigation links, section titles

## 4. Icon Animations

### Pattern: Icon Rotation
Used in: FAQ ChevronDown, Navigation Menu Toggle

```typescript
<motion.div
  animate={{ rotate: expandedId === faq.id ? 180 : 0 }}
  transition={{ duration: 0.3 }}
>
  <ChevronDown className="w-5 h-5" />
</motion.div>
```

**Effect**: Chevron rotates 180° when FAQ expands
**Timing**: 0.3s smooth rotation
**Used in**: FAQSection

### Pattern: Icon Scale
Used in: Benefit Cards

```typescript
<div className="inline-block p-4 rounded-lg bg-gradient-to-br from-cyan-glow/10 to-purple-glow/10 group-hover:from-cyan-glow/20 group-hover:to-purple-glow/20">
  <Icon className="w-8 h-8 text-cyan-glow group-hover:text-purple-glow" />
</div>
```

**Effect**: Icon background intensifies on hover
**Timing**: Uses `smooth-transition` (0.3s)
**Color Change**: Cyan → Purple on hover

## 5. Accordion/Expand Animations

### Pattern: Height Expand/Collapse
Used in: FAQSection

```typescript
<AnimatePresence>
  {expandedId === faq.id && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
    >
      {faq.answer}
    </motion.div>
  )}
</AnimatePresence>
```

**Effect**: Content smoothly expands/collapses
**Timing**: 0.3s height animation
**Opacity**: Fades in/out simultaneously with height
**Trigger**: Click on question button
**Used in**: FAQSection

## 6. Continuous/Loop Animations

### Pattern: Floating Particles
Used in: ParticleBackground

```typescript
<motion.div
  animate={{
    y: [0, -20, 0],
    x: [0, Math.random() * 10 - 5, 0],
  }}
  transition={{
    duration: particle.duration,
    repeat: Infinity,
    ease: 'easeInOut',
  }}
/>
```

**Effect**: Particles float up and down with slight horizontal drift
**Timing**: 15-25 second duration (random per particle)
**Loop**: Infinite repeat with easeInOut easing
**Used in**: ParticleBackground

### Pattern: Text Pulse (Gradient Animation)
Used in: HeroSection Title

```typescript
<span className="bg-gradient-to-r from-cyan-glow via-purple-glow to-cyan-glow bg-clip-text text-transparent animate-pulse">
  Securing Your Digital Frontier
</span>
```

**Effect**: Text opacity pulses (built-in Tailwind animation)
**Timing**: 2s cycle (Tailwind default)
**Used in**: HeroSection main headline

## 7. Tap/Click Feedback

### Pattern: Button Press
Used in: All buttons

```typescript
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
/>
```

**Hover**: 105% scale
**Tap**: 95% scale for immediate visual feedback
**Used in**: All interactive buttons throughout site

## 8. Custom CSS Animations

### Pattern: Glitch Effect (Optional)
Defined in: index.css

```css
@keyframes glitch {
  0%, 100% { clip-path: polygon(0% 0%, 100% 0%, 100% 45%, 0% 60%); transform: translate(0); }
  20% { clip-path: polygon(0% 25%, 100% 0%, 100% 58%, 0% 100%); transform: translate(-2px, 2px); }
  /* ... more keyframes ... */
}
```

**Effect**: Text distortion effect simulating "glitch" style
**Timing**: 0.3s loop
**Used in**: Could be applied to titles for extra effect
**Current Status**: Defined but not actively used (available for customization)

## 9. Transition Utilities

### Global Smooth Transition Class
```css
.smooth-transition {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

**Timing**: 0.3s duration
**Easing**: Cubic-bezier (material-design standard)
**Applied to**: Colors, transforms, shadows, borders
**Used in**: 90+ elements throughout the site

### Glass Card Transition
```css
.glass-card {
  transition: all 0.3s ease;
}

.glass-card:hover {
  border-color: rgba(0, 217, 255, 0.3);
  background: rgba(26, 31, 58, 0.6);
  transform: translateY(-5px);
}
```

**Effect**: Border color, background, and position change on hover
**Timing**: 0.3s ease
**Used in**: All card components

## 10. Animation Timing Reference

| Animation | Duration | Easing | Trigger |
|-----------|----------|--------|---------|
| Navbar slide-in | 0.5s | default | Mount |
| Hero stagger | 0.8s per item | easeOut | Mount |
| Scroll reveal | 0.6s | default | InView |
| Card stagger | 0.15s delay | - | InView |
| Hover scale | 0.3s | - | Hover |
| Icon rotation | 0.3s | default | Click |
| Expand/collapse | 0.3s | default | Click |
| Particle float | 15-25s | easeInOut | Continuous |
| Smooth transition | 0.3s | cubic-bezier | - |

## 11. Performance Tips

### ✅ Do's
- Use `triggerOnce: true` on scroll animations to trigger only once
- Use `AnimatePresence` for mounting/unmounting animations
- Keep duration under 1s for most interactions (except loops)
- Use staggerChildren instead of animating each child separately
- Hardware accelerate with `transform` instead of changing positions

### ❌ Don'ts
- Don't animate all properties simultaneously
- Don't use too many particles (default 50 is optimized)
- Don't loop animations that don't need to loop
- Don't animate opacity + position at different speeds
- Avoid animating non-GPU properties (width, height)

## 12. Customization Examples

### Example 1: Faster Hero Animations
Change in HeroSection.tsx:
```typescript
itemVariants = {
  transition: { duration: 0.5, ease: 'easeOut' } // Was 0.8s
}
```

### Example 2: Different Stagger Spacing
Change in ServicesGrid.tsx:
```typescript
staggerChildren: 0.25,  // Was 0.15s
```

### Example 3: More Particles
Change in useParticles.ts:
```typescript
useParticles(100)  // Was 50
```

### Example 4: Change Glow Color
Update Tailwind config or inline:
```typescript
boxShadow: '0 0 50px rgba(157, 78, 221, 0.6)'  // Purple instead of cyan
```

## 13. Debugging Animations

### View Animation Timeline
```typescript
transition={{
  duration: 0.6,
  delay: 0.2,
  ease: "easeInOut",
  // Add debug: console timing
}}
```

### Disable All Animations (Testing)
```css
* {
  animation-duration: 0s !important;
  transition-duration: 0s !important;
}
```

### Check Performance
- DevTools → Performance tab
- Record page interactions
- Look for smooth 60 FPS
- Check for long tasks

## 14. Browser Support

All animations use standard CSS and Framer Motion, supporting:
- ✅ Chrome/Edge 88+
- ✅ Firefox 85+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Android)

## Resources

- [Framer Motion API](https://www.framer.com/motion/)
- [CSS Animations MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)
- [Easing Functions](https://easings.net/)
- [React Intersection Observer](https://github.com/thebuilder/react-intersection-observer)

---

**Last Updated**: March 2024
