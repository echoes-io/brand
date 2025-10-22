# Echoes Brand Identity

Visual identity and brand assets for **Echoes** - a multi-POV digital storytelling platform.

## Table of Contents

- [Overview](#overview)
- [Repository Structure](#repository-structure)
- [Color System](#color-system)
- [Typography](#typography)
- [Usage Guidelines](#usage-guidelines)
- [Usage](#usage)
- [Development](#development)
- [Development Status](#development-status)
- [License](#license)

## Overview

This repository contains the brand guidelines, color palettes, typography, and visual assets for the Echoes project.

**Concept**: "Echoes" represents the resonance between characters across different timelines - voices that echo through interconnected stories.

**Tone**: Literary yet accessible, with varying levels of intimacy depending on the narrative context.

## Repository Structure

```
brand/
├── colors/
│   └── index.ts         # Color definitions (single source of truth)
├── typography/
│   └── index.ts         # Typography definitions (fonts, metadata)
├── exports/             # Generated exports (CSS, Tailwind, Figma, HTML)
├── scripts/
│   ├── export.ts        # Generate all exports
│   └── colors-check.ts  # Verify WCAG AA compliance
├── logo/                # Logo and wordmark variants (TODO)
└── guidelines.md        # Usage guidelines (TODO)
```

## Color System

### Source

All colors are defined in `colors/index.ts` and typography in `typography/index.ts` as single sources of truth. All exports are generated from these files.

### Palettes

**Neutral** - GitHub-inspired neutral colors for UI elements
- Light mode: 50-300 for backgrounds, 600-950 for text
- Dark mode: 800-950 for backgrounds, 50-300 for text

**Anima** - Sage green / Soft teal
- Mood: Growth, support, tenderness
- Use: Reassuring, hopeful, organic growth themes

**Eros** - Deep red / Bordeaux
- Mood: Passion, intensity, rawness
- Use: Mature, carnal, direct themes

**Bloom** - Peach / Coral
- Mood: Blossoming, balance, discovery
- Use: Romantic with character, warm without being saccharine

### Color Scales

All palettes use a Tailwind-inspired scale (50-950):
- **50-100**: Lightest tints (backgrounds, subtle highlights)
- **200-400**: Light variants (borders, hover states, disabled)
- **500**: Base color (primary actions, brand identity)
- **600-800**: Dark variants (text on light, active states)
- **900-950**: Darkest shades (text, high contrast elements)

### Export Formats

Generated in `exports/`:
- `variables.css` - CSS custom properties (colors + fonts)
- `tailwind.config.cjs` - Tailwind CSS preset
- `figma-tokens.json` - Figma design tokens
- `index.html` - Visual preview (deployed to GitHub Pages)

### Usage Examples

**CSS Variables:**
```css
.anima-card {
  background: var(--echoes-anima-50);
  color: var(--echoes-anima-900);
  font-family: var(--echoes-font-body);
}

.chapter-title {
  font-family: var(--echoes-font-heading);
}
```

**Tailwind CSS:**
```jsx
<div className="bg-anima-50 text-anima-900">
  Anima timeline content
</div>
```

**Direct from GitHub:**
```
https://raw.githubusercontent.com/echoes-io/brand/main/exports/variables.css
```

### Accessibility

All combinations meet WCAG AA standards (4.5:1 minimum contrast for normal text).

**Test locally:** `npm run colors:check`

**Preview:** https://echoes-io.github.io/brand/

Automated testing and deployment run on every push via GitHub Actions.

## Development

### Scripts

- `npm run export` - Generate all exports (colors + typography)
- `npm run colors:check` - Verify WCAG AA contrast ratios
- `npm run lint` - Run all linters

### Workflow

1. Edit `colors/index.ts` or `typography/index.ts`
2. Run `npm run export` to build and verify
3. Commit and push to `main`
4. GitHub Actions will:
   - Run quality checks (lint, accessibility, build)
   - Release to NPM (semantic versioning)
   - Build and commit updated exports
   - Deploy preview to GitHub Pages

## Typography

Typography choices prioritize readability for long-form content across devices:

- **Headings**: Crimson Text - Literary serif for distinctive, readable headings
- **Body**: Inter - Optimized for extended reading on mobile and desktop  
- **Monospace**: JetBrains Mono - For CLI and code examples

All fonts are available via Google Fonts and exported as CSS variables, Tailwind classes, and Figma tokens.

## Usage Guidelines

### Color Palette Application

#### Anima - Growth & Support
**Mood**: Organic growth, reassurance, hope, tenderness  
**Narrative Context**: 
- Healing and recovery scenes
- Supportive relationships
- Nature and growth metaphors
- Hopeful, nurturing moments

**Recommended Usage**:
```css
/* Primary actions in supportive contexts */
.support-button { background: var(--echoes-anima-500); }

/* Gentle backgrounds for positive content */
.growth-section { background: var(--echoes-anima-50); }

/* Success states and positive feedback */
.success-message { color: var(--echoes-anima-700); }
```

#### Eros - Passion & Intensity  
**Mood**: Raw emotion, passion, intensity, vulnerability  
**Narrative Context**:
- Intimate and romantic scenes
- Emotional confrontations
- Moments of vulnerability
- Mature, complex relationships

**Recommended Usage**:
```css
/* Emphasis for emotional content */
.intense-moment { border-left: 4px solid var(--echoes-eros-500); }

/* Warning states and critical actions */
.critical-action { background: var(--echoes-eros-600); }

/* Highlighting passionate dialogue */
.emotional-quote { color: var(--echoes-eros-700); }
```

#### Bloom - Discovery & Balance
**Mood**: Romantic discovery, balanced growth, warm exploration  
**Narrative Context**:
- New relationships forming
- Character development arcs
- Moments of realization
- Warm, authentic connections

**Recommended Usage**:
```css
/* Warm call-to-actions */
.discover-button { background: var(--echoes-bloom-500); }

/* Highlighting new content */
.new-chapter { background: var(--echoes-bloom-100); }

/* Warm accent elements */
.connection-indicator { color: var(--echoes-bloom-600); }
```

#### Neutral - Foundation & Structure
**Mood**: Reliable, clean, literary foundation  
**Usage**: UI elements, text, backgrounds, structural elements

### Typography Guidelines

#### Heading Hierarchy
```css
/* Main titles - Literary impact */
h1 { 
  font-family: var(--echoes-font-heading);
  font-weight: 700;
  font-size: 2.5rem;
}

/* Chapter/Section titles */
h2 { 
  font-family: var(--echoes-font-heading);
  font-weight: 600;
  font-size: 2rem;
}

/* Subsections */
h3 { 
  font-family: var(--echoes-font-heading);
  font-weight: 400;
  font-size: 1.5rem;
}
```

#### Body Text Best Practices
```css
/* Long-form content */
.narrative-text {
  font-family: var(--echoes-font-body);
  font-size: 1rem;
  line-height: 1.6;
  max-width: 65ch; /* Optimal reading width */
}

/* UI text */
.interface-text {
  font-family: var(--echoes-font-body);
  font-size: 0.875rem;
  line-height: 1.5;
}
```

### Color Combinations

#### Recommended Pairings
```css
/* Anima + Neutral - Supportive interfaces */
.support-card {
  background: var(--echoes-anima-50);
  color: var(--echoes-neutral-800);
  border: 1px solid var(--echoes-anima-200);
}

/* Eros + Neutral - Intense moments */
.intense-card {
  background: var(--echoes-eros-50);
  color: var(--echoes-neutral-900);
  accent-color: var(--echoes-eros-600);
}

/* Bloom + Neutral - Warm discovery */
.discovery-card {
  background: var(--echoes-bloom-50);
  color: var(--echoes-neutral-800);
  border-left: 3px solid var(--echoes-bloom-500);
}
```

#### Dark Mode Adaptations
```css
/* Dark backgrounds with light text */
.dark-theme {
  background: var(--echoes-neutral-900);
  color: var(--echoes-neutral-100);
}

/* Accent colors remain vibrant */
.dark-theme .anima-accent { color: var(--echoes-anima-400); }
.dark-theme .eros-accent { color: var(--echoes-eros-400); }
.dark-theme .bloom-accent { color: var(--echoes-bloom-400); }
```

### Do's and Don'ts

#### ✅ Do's
- **Use Anima for supportive, growth-oriented content**
- **Use Eros sparingly for high-impact emotional moments**
- **Use Bloom for warm, discovery-focused interactions**
- **Maintain WCAG AA contrast ratios (automatically verified)**
- **Use Crimson Text for narrative headings to maintain literary feel**
- **Combine colors within the same emotional context**

#### ❌ Don'ts
- **Don't mix conflicting moods** (e.g., Eros + Anima in same component)
- **Don't use Eros for general UI elements** (too intense)
- **Don't override font weights** outside the defined range
- **Don't use colors below 400 for text** (insufficient contrast)
- **Don't use more than 2 accent colors** in a single interface
- **Don't use Crimson Text for body text** (readability issues)

### Accessibility Guidelines

All color combinations are automatically tested for WCAG AA compliance:

```bash
npm run colors:check
```

**Contrast Requirements Met**:
- Normal text: 4.5:1 minimum
- Large text: 3:1 minimum  
- UI components: 3:1 minimum

**Additional Considerations**:
- Provide text alternatives for color-coded information
- Test with color blindness simulators
- Ensure interactive elements have focus indicators
- Use semantic HTML with proper heading hierarchy

### Platform-Specific Usage

#### Web Application
- Use CSS variables for dynamic theming
- Implement dark mode with neutral 800-950 backgrounds
- Apply color psychology to enhance narrative immersion

#### CLI Tools
```bash
# Use JetBrains Mono for all CLI output
# Color coding for different message types:
# Anima (green) - Success, growth, positive feedback
# Eros (red) - Errors, critical warnings
# Bloom (orange) - Warnings, discoveries, new features
# Neutral - Standard output, help text
```

#### Documentation
- Crimson Text for main headings to maintain literary brand
- Inter for body text to ensure readability
- Color-coded examples using appropriate palette moods

## Logo & Wordmark

Visual identity based on the concept of "echoes" - resonance, repetition, and connection across timelines.

Variants:
- Full logo
- Icon only
- Wordmark

## Usage

### NPM Package

```bash
npm install @echoes-io/brand
```

```typescript
import { colors, typography, metadata } from '@echoes-io/brand/colors';

// Use colors in your app
const animaColor = colors.anima[500]; // #2fc470
const headingFont = typography.heading.name; // "Crimson Text"
```

### Direct from GitHub

```
https://raw.githubusercontent.com/echoes-io/brand/main/exports/variables.css
```

Brand assets are designed to be used across:
- Web application
- CLI tools
- Documentation
- Marketing materials

## Development Status

✅ **Phase 1: Complete**

- [x] Color palette generation (Tailwind scale 50-950)
- [x] Typography system (Crimson Text, Inter, JetBrains Mono)
- [x] Unified export system (CSS vars, Tailwind config, Figma tokens, HTML preview)
- [x] Accessibility testing (WCAG AA compliance)
- [x] Automated CI/CD (lint, check, build, deploy)
- [x] NPM package publishing (semantic versioning)
- [x] Usage guidelines and best practices

🚧 **Phase 2: In Progress**

- [ ] Logo design and wordmark variants
- [ ] Examples and mockups

## License

MIT
