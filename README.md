# Echoes Brand Identity

Visual identity and brand assets for **Echoes** — a multi-POV digital storytelling platform.

**Concept**: "Echoes" represents the resonance between characters across different timelines — voices that echo through interconnected stories.

## Repository Structure

```
brand/
├── colors/
│   └── index.ts           # Color definitions (single source of truth)
├── typography/
│   └── index.ts           # Typography definitions (single source of truth)
├── exports/               # Generated exports (never edit manually)
│   ├── variables.css      # CSS custom properties (colors + fonts)
│   ├── tailwind.config.cjs# Tailwind CSS preset
│   ├── figma-tokens.json  # Figma design tokens
│   └── index.html         # Visual preview (deployed to GitHub Pages)
├── scripts/
│   ├── export.ts          # Generate all exports
│   ├── colors-check.ts    # Verify WCAG AA compliance
│   └── optimize-images.ts # Resize/compress JPGs in logo/
├── logo/                  # Optimized JPGs + SVG logos
│   └── originals/         # Full-resolution originals (Git LFS)
├── guidelines.md          # Detailed usage guidelines
└── AGENTS.md              # Agent/AI context
```

## Color Palettes

All palettes use Tailwind-style scale (50-950). WCAG AA compliant.

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

| Role | Font | Notes |
|------|------|-------|
| **Heading** | Crimson Pro | Variable serif, weights 200–900 |
| **Body** | Inter | Optimized for long-form reading |
| **Mono** | JetBrains Mono | Code and CLI |

All fonts available via Google Fonts.

## Usage

### NPM Package

```bash
npm install @echoes-io/brand
```

```typescript
import { colors, metadata } from '@echoes-io/brand/colors';
import { typography } from '@echoes-io/brand/typography';

const animaGreen = colors.anima[500];       // "#2fc470"
const headingFont = typography.heading.name; // "Crimson Pro"
```

### CSS Variables

```css
.card {
  background: var(--echoes-anima-50);
  color: var(--echoes-anima-900);
  font-family: var(--echoes-font-body);
}

h1 {
  font-family: var(--echoes-font-heading);
}
```

### Direct from GitHub

```
https://raw.githubusercontent.com/echoes-io/brand/main/exports/variables.css
```

### Preview

https://echoes-io.github.io/brand/

## Development

### Scripts

| Script | Description |
|--------|-------------|
| `npm run export` | Generate all exports from source |
| `npm run colors:check` | Verify WCAG AA contrast ratios |
| `npm run images:optimize` | Resize/compress JPGs in logo/ |
| `npm run lint` | Run all linters |
| `npm run build` | TypeScript compilation |
| `npm run clean` | Remove generated files |
| `npm run check` | Full validation pipeline |

### Workflow

1. Edit `colors/index.ts` or `typography/index.ts`
2. Run `npm run export` to regenerate all exports
3. Commit and push to `main`
4. GitHub Actions: lint → check → npm release → deploy pages

## Guidelines

See **[guidelines.md](./guidelines.md)** for detailed usage:
- Color palette application with examples
- Typography hierarchy and best practices
- Recommended color combinations and dark mode
- Do's and Don'ts
- Accessibility requirements
- Platform-specific guidance (web, CLI, docs)

## Images & Git LFS

Full-resolution originals are stored in `logo/originals/` via **Git LFS**. Optimized versions (max 1200px, JPEG quality 85) live in `logo/`.

```bash
# First time setup (required to pull original images)
git lfs install

# Pull originals after cloning
git lfs pull

# Re-optimize images after adding new originals
npm run images:optimize
```

Without `git-lfs` installed, you'll get small pointer files instead of actual images in `logo/originals/`. The optimized images in `logo/` are always available as regular git objects.

## Development Status

✅ **Complete**

- [x] Color system (7 palettes, Tailwind scale 50-950)
- [x] Typography system (Crimson Pro, Inter, JetBrains Mono)
- [x] Unified export (CSS vars, Tailwind config, Figma tokens, HTML preview)
- [x] Accessibility testing (WCAG AA compliance)
- [x] CI/CD (lint, check, build, npm release, GitHub Pages deploy)
- [x] NPM package (`@echoes-io/brand`)
- [x] Usage guidelines

🚧 **In Progress**

- [ ] Logo design and wordmark variants
- [ ] Examples and mockups

## License

MIT
