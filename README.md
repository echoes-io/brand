# Echoes Brand Identity

Visual identity and brand assets for **Echoes** - a multi-POV digital storytelling platform.

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

🚧 **Phase 2: In Progress**

- [ ] Logo design and wordmark variants
- [ ] Usage guidelines and best practices
- [ ] Examples and mockups

## License

MIT
