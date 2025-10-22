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
│   ├── index.ts         # Color definitions (single source of truth)
│   └── exports/         # Generated exports (JSON, CSS, Tailwind, Figma, HTML)
├── scripts/
│   ├── build.ts         # Generate all color exports
│   └── check-contrast.ts # Verify WCAG AA compliance
├── typography/          # Font choices and examples (TODO)
├── logo/                # Logo and wordmark variants (TODO)
└── guidelines.md        # Usage guidelines (TODO)
```

## Color System

### Source

All colors are defined in `colors/index.ts` as the single source of truth. All exports are generated from this file.

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

Generated in `colors/exports/`:
- `palette.json` - Raw hex values
- `variables.css` - CSS custom properties
- `tailwind.config.js` - Tailwind CSS preset
- `figma-tokens.json` - Figma design tokens
- `index.html` - Visual preview (deployed to GitHub Pages)

### Usage Examples

**CSS Variables:**
```css
.anima-card {
  background: var(--echoes-anima-50);
  color: var(--echoes-anima-900);
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
https://raw.githubusercontent.com/echoes-io/brand/main/colors/exports/palette.json
```

### Accessibility

All combinations meet WCAG AA standards (4.5:1 minimum contrast for normal text).

**Test locally:** `npm run check`

**Preview:** https://echoes-io.github.io/brand/

Automated testing and deployment run on every push via GitHub Actions.

## Development

### Scripts

- `npm run build` - Generate all color exports
- `npm run check` - Verify WCAG AA contrast ratios
- `npm run lint` - Run all linters
- `npm run dev` - Build and check

### Workflow

1. Edit `colors/index.ts`
2. Run `npm run dev` to build and verify
3. Commit and push to `main`
4. GitHub Actions will:
   - Lint code
   - Check accessibility
   - Build exports
   - Commit updated exports
   - Deploy preview to GitHub Pages

## Typography

Typography choices prioritize readability for long-form content across devices:

- **Headings**: Distinctive yet readable
- **Body**: Optimized for extended reading on mobile and desktop
- **Monospace** (optional): For CLI and code examples

## Logo & Wordmark

Visual identity based on the concept of "echoes" - resonance, repetition, and connection across timelines.

Variants:
- Full logo
- Icon only
- Wordmark

## Usage

Brand assets are designed to be used across:
- Web application
- CLI tools
- Documentation
- Marketing materials

## Development Status

🚧 **In Progress**

- [x] Color palette generation (Tailwind scale 50-950)
- [x] Export formats (CSS vars, Tailwind config, Figma tokens, HTML preview)
- [x] Accessibility testing (WCAG AA compliance)
- [x] Automated CI/CD (lint, check, build, deploy)
- [ ] Typography selection
- [ ] Logo design
- [ ] Usage guidelines

## License

MIT
