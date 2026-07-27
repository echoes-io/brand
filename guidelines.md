# Echoes Brand Guidelines

Detailed usage guidelines for the Echoes visual identity system.

## Color Palette Application

Each palette carries a specific emotional and narrative meaning. Use them consistently across all touchpoints.

### Neutral

**Mood**: Structure, foundation, hierarchy.

Use for UI chrome, backgrounds, borders, text. The backbone of every layout.

```css
/* Light mode base */
body { background: var(--echoes-neutral-50); color: var(--echoes-neutral-900); }

/* Dark mode base */
body { background: var(--echoes-neutral-900); color: var(--echoes-neutral-50); }

/* Borders and dividers */
.divider { border-color: var(--echoes-neutral-200); }
```

### Primary

**Mood**: Action, interaction, focus.

Use for buttons, links, active states, focus rings. Sparingly — it should draw attention.

```css
.button-primary { background: var(--echoes-primary-500); color: white; }
.link { color: var(--echoes-primary-600); }
.focus-ring { outline-color: var(--echoes-primary-400); }
```

### Anima

**Mood**: Growth, support, tenderness.

Narrative context: nurturing relationships, emotional growth, support systems, gentle strength. Used for the Anima timeline — stories about connection and care.

```css
.anima-card { background: var(--echoes-anima-50); border-left: 4px solid var(--echoes-anima-500); }
.anima-badge { background: var(--echoes-anima-100); color: var(--echoes-anima-800); }
```

### Eros

**Mood**: Passion, intensity, rawness.

Narrative context: desire, vulnerability, emotional exposure, physical and emotional intimacy. Used for the Eros timeline — stories about love and passion.

```css
.eros-card { background: var(--echoes-eros-50); border-left: 4px solid var(--echoes-eros-500); }
.eros-badge { background: var(--echoes-eros-100); color: var(--echoes-eros-800); }
```

### Bloom

**Mood**: Blossoming, balance, discovery.

Narrative context: personal growth, finding balance, new beginnings, self-discovery. Used for the Bloom timeline — stories about becoming.

```css
.bloom-card { background: var(--echoes-bloom-50); border-left: 4px solid var(--echoes-bloom-500); }
.bloom-badge { background: var(--echoes-bloom-100); color: var(--echoes-bloom-800); }
```

### Glow

**Mood**: Intimacy, warmth, everyday light.

Narrative context: warm domesticity, intimate non-sexual moments, morning light, routines shared with someone, the comfort of being known. Used for the Glow timeline — stories about quiet closeness.

```css
.glow-card { background: var(--echoes-glow-50); border-left: 4px solid var(--echoes-glow-500); }
.glow-badge { background: var(--echoes-glow-100); color: var(--echoes-glow-800); }
.glow-highlight { background: var(--echoes-glow-200); }
```

### Pulse

**Mood**: Introspection, raw emotion, fragments.

Narrative context: inner monologue, diary fragments, raw unprocessed emotion, stream of consciousness, the private space between thoughts. Used for the Pulse timeline — stories about the self unfiltered.

```css
.pulse-card { background: var(--echoes-pulse-50); border-left: 4px solid var(--echoes-pulse-500); }
.pulse-badge { background: var(--echoes-pulse-100); color: var(--echoes-pulse-800); }
.pulse-quote { border-left: 3px solid var(--echoes-pulse-400); padding-left: 1rem; }
```

---

## Typography

### Heading — Crimson Pro

Variable serif font (weights 200–900). Use for titles, chapter headings, and narrative sections. Its literary character reinforces the storytelling identity.

```css
h1 { font-family: var(--echoes-font-heading); font-weight: 700; }
h2 { font-family: var(--echoes-font-heading); font-weight: 600; }
.chapter-title { font-family: var(--echoes-font-heading); font-weight: 300; font-size: 2.5rem; }
```

Best practices:
- Use lighter weights (200–300) for large display text
- Use medium weights (500–600) for section headings
- Use bold (700–800) for compact headings and emphasis
- Don't use Crimson Pro for body text — it's designed for headings

### Body — Inter

Optimized sans-serif for long-form reading. Use for paragraphs, descriptions, UI text.

```css
body { font-family: var(--echoes-font-body); font-weight: 400; line-height: 1.6; }
.strong { font-weight: 500; }
```

### Mono — JetBrains Mono

Use for code blocks, CLI output, data tables, and technical content.

```css
code, pre { font-family: var(--echoes-font-mono); font-size: 0.875em; }
```

---

## Color Combinations

### Recommended Pairings

| Context | Background | Text | Accent |
|---------|-----------|------|--------|
| Anima content | anima-50 | anima-900 | anima-500 |
| Eros content | eros-50 | eros-900 | eros-500 |
| Bloom content | bloom-50 | bloom-900 | bloom-500 |
| Glow content | glow-50 | glow-900 | glow-500 |
| Pulse content | pulse-50 | pulse-900 | pulse-500 |
| App chrome (light) | neutral-50 | neutral-900 | primary-500 |
| App chrome (dark) | neutral-900 | neutral-50 | primary-400 |

### Dark Mode

Invert the scale direction:
- Backgrounds: use 800–950 shades
- Text: use 50–200 shades
- Accents: shift one step lighter (500 → 400)

```css
/* Dark mode timeline card */
.card-dark {
  background: var(--echoes-anima-900);
  color: var(--echoes-anima-50);
  border-color: var(--echoes-anima-700);
}
```

---

## Do's and Don'ts

### Do

- ✅ Use timeline colors to identify content from that timeline
- ✅ Use neutral palette for structural UI elements
- ✅ Use Crimson Pro for headings to maintain literary feel
- ✅ Pair light backgrounds (50–100) with dark text (800–900)
- ✅ Use the 500 shade as the "brand" reference for each palette
- ✅ Run `npm run colors:check` after any color modification

### Don't

- ❌ Don't mix timeline colors in the same component (pick one per context)
- ❌ Don't use Crimson Pro for body text (readability issues at small sizes)
- ❌ Don't use mid-range shades (400–500) for both background and text
- ❌ Don't use primary color for timeline-specific content
- ❌ Don't modify exports/ files directly — always regenerate from source

---

## Accessibility

All color combinations are **WCAG AA compliant** (minimum 4.5:1 contrast ratio for text).

Requirements:
- Text on palette backgrounds must use shades from the same palette's extremes (50 bg + 900 text, or 900 bg + 50 text)
- Interactive elements need visible focus indicators (primary-400 or primary-500)
- Don't rely on color alone to convey information — always pair with text, icons, or patterns

The compliance is automatically verified by `npm run colors:check` in CI.

---

## Platform-Specific Usage

### Web Application

- Use CSS variables from `exports/variables.css`
- Or import the Tailwind preset from `exports/tailwind.config.cjs`
- Load fonts from Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@200..900&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

### CLI Tools

- Use timeline colors for semantic output (anima=success, eros=error, glow=warning, primary=info)
- Use neutral shades for standard output and structural elements
- JetBrains Mono is the reference monospace

### Documentation Sites

- Crimson Pro for main headings to maintain brand recognition
- Inter for body content
- Use timeline badge colors to tag content by narrative source
- Light mode preferred; dark mode as user option
