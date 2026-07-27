# Echoes Brand — Agent Context

## Purpose

This repository is the **single source of truth** for the Echoes brand identity — a multi-POV digital storytelling platform. It defines color palettes, typography, and visual assets, and generates exports for CSS, Tailwind, Figma, and HTML preview.

## Repository Structure

```
brand/
├── colors/
│   └── index.ts           # Color definitions (7 palettes, scale 50-950)
├── typography/
│   └── index.ts           # Typography definitions (fonts, weights, metadata)
├── exports/               # ⚠️ GENERATED — never edit manually
│   ├── variables.css      # CSS custom properties
│   ├── tailwind-preset.css# Tailwind CSS v4 theme
│   ├── figma-tokens.json  # Figma design tokens
│   └── index.html         # Visual preview (deployed to GitHub Pages)
├── scripts/
│   ├── export.ts          # Generate all exports from source
│   ├── colors-check.ts    # Verify WCAG AA contrast compliance
│   └── optimize-images.ts # Resize/compress JPGs in logo/
├── logo/                  # Optimized JPGs + SVG logos
│   └── originals/         # Full-resolution originals (Git LFS)
├── guidelines.md          # Usage guidelines and best practices
├── AGENTS.md              # This file
└── README.md              # Project overview
```

## Rules

1. **Source of truth**: `colors/index.ts` and `typography/index.ts`. All exports derive from these files.
2. **Never edit `exports/` manually** — always regenerate via `npm run export`.
3. **WCAG AA compliance** is enforced. Run `npm run colors:check` before committing color changes.
4. **Semantic commits** — the project uses semantic-release for automated versioning and NPM publishing.

## Development Workflow

```
1. Edit colors/index.ts or typography/index.ts
2. Run: npm run export
3. Run: npm run colors:check (if colors changed)
4. Commit and push to main
5. CI handles: lint → check → npm release → deploy pages
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run export` | Generate all exports (CSS, Tailwind, Figma, HTML) |
| `npm run colors:check` | Verify WCAG AA contrast ratios |
| `npm run images:optimize` | Resize/compress JPGs (keeps originals in logo/originals/) |
| `npm run lint` | Run all linters (format, lockfile, engines, publish) |
| `npm run build` | TypeScript compilation |
| `npm run clean` | Remove generated .js/.d.ts from source dirs |
| `npm run check` | Full validation (clean + build + lint + clean) |

## Color Palettes

All palettes use Tailwind-style scale (50-950):

| Palette | Base (500) | Mood |
|---------|-----------|------|
| **Neutral** | `#71717a` | UI foundation, structure |
| **Primary** | `#3b82f6` | Interactive elements, primary actions |
| **Anima** | `#2fc470` | Growth, support, tenderness |
| **Eros** | `#e74c64` | Passion, intensity, rawness |
| **Bloom** | `#e87a47` | Blossoming, balance, discovery |
| **Glow** | `#dba033` | Intimacy, warmth, everyday light |
| **Pulse** | `#7d6b91` | Introspection, raw emotion, fragments |

## Typography

| Role | Font | Type | Weights |
|------|------|------|---------|
| **Heading** | Crimson Pro | Variable serif | 200–900 |
| **Body** | Inter | Sans-serif | 400, 500 |
| **Mono** | JetBrains Mono | Monospace | 400, 500 |

All fonts available via Google Fonts. Exported as CSS variables, Tailwind config, and Figma tokens.

## NPM Package

Published as `@echoes-io/brand` with two entry points:

```typescript
import { colors, metadata } from '@echoes-io/brand/colors';
import { typography } from '@echoes-io/brand/typography';
```
