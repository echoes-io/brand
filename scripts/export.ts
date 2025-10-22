import { mkdirSync, writeFileSync } from 'node:fs';

import { colors, metadata } from '../colors/index.js';
import { typography, metadata as typographyMetadata } from '../typography/index.js';

const OUT_DIR = './exports';

mkdirSync(OUT_DIR, { recursive: true });

// 1. CSS Variables
const cssVars = Object.entries(colors)
  .flatMap(([palette, shades]) =>
    Object.entries(shades).map(([shade, hex]) => `  --echoes-${palette}-${shade}: ${hex};`),
  )
  .join('\n');

const fontVars = Object.entries(typography)
  .map(([type, font]) => `  --echoes-font-${type}: "${font.name}", ${font.fallback.join(', ')};`)
  .join('\n');

writeFileSync(`${OUT_DIR}/variables.css`, `:root {\n${cssVars}\n${fontVars}\n}\n`);

// 2. Tailwind Config
writeFileSync(
  `${OUT_DIR}/tailwind.config.cjs`,
  `module.exports = {\n  theme: {\n    extend: {\n      colors: ${JSON.stringify(colors, null, 8)},\n    },\n  },\n};\n`,
);

// 3. Figma Tokens
const figmaTokens = {
  global: Object.fromEntries(
    Object.entries(colors).map(([palette, shades]) => [
      palette,
      Object.fromEntries(
        Object.entries(shades).map(([shade, hex]) => [
          shade,
          {
            value: hex,
            type: 'color',
            description: metadata[palette as keyof typeof metadata].description,
          },
        ]),
      ),
    ]),
  ),
  typography: Object.fromEntries(
    Object.entries(typography).map(([type, font]) => [
      type,
      {
        value: `"${font.name}", ${font.fallback.join(', ')}`,
        type: 'fontFamilies',
        description: typographyMetadata[type as keyof typeof typographyMetadata].description,
      },
    ]),
  ),
};

writeFileSync(`${OUT_DIR}/figma-tokens.json`, JSON.stringify(figmaTokens, null, 2));

// 4. Preview HTML
const swatches = Object.entries(colors)
  .map(([palette, shades]) => {
    const swatchesHtml = Object.entries(shades)
      .map(
        ([shade, hex]) =>
          `<div class="swatch" style="background:${hex}" data-shade="${shade}" data-hex="${hex}"></div>`,
      )
      .join('');
    return `
    <div class="palette">
      <h2>${metadata[palette as keyof typeof metadata].name}</h2>
      <p>${metadata[palette as keyof typeof metadata].description}</p>
      <div class="colors">${swatchesHtml}</div>
    </div>`;
  })
  .join('');

const typographyPreview = Object.entries(typography)
  .map(
    ([type, font]) => `
    <div class="font-sample">
      <h3>${typographyMetadata[type as keyof typeof typographyMetadata].description}</h3>
      <p class="font-usage">${typographyMetadata[type as keyof typeof typographyMetadata].usage}</p>
      <div class="font-demo" style="font-family: '${font.name}', ${font.fallback.join(', ')};">
        ${
          type === 'heading'
            ? '<h2>The quick brown fox jumps over the lazy dog</h2>'
            : type === 'mono'
              ? '<code>const echoes = { timeline: "anima", mood: "growth" };</code>'
              : '<p>In the interconnected stories of Echoes, voices resonate across different timelines, creating a tapestry of human experience that transcends the boundaries of individual narratives.</p>'
        }
      </div>
    </div>`,
  )
  .join('');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Echoes Brand System</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; padding: 3rem; background: #fafafa; }
    h1 { font-size: 2.5rem; margin-bottom: 0.5rem; }
    .subtitle { color: #666; margin-bottom: 3rem; }
    .palette { margin-bottom: 3rem; }
    .palette h2 { font-size: 1.5rem; margin-bottom: 0.25rem; }
    .palette p { color: #666; margin-bottom: 1rem; font-size: 0.875rem; }
    .colors { display: flex; gap: 0.25rem; }
    .swatch { flex: 1; height: 100px; border-radius: 4px; position: relative; cursor: pointer; }
    .swatch:hover::after {
      content: attr(data-shade) "\\A" attr(data-hex);
      position: absolute;
      bottom: 8px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0,0,0,0.8);
      color: white;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 11px;
      white-space: pre;
      text-align: center;
    }
    .font-sample { margin-bottom: 2rem; padding: 1.5rem; background: white; border-radius: 8px; }
    .font-sample h3 { font-size: 1.25rem; margin-bottom: 0.25rem; }
    .font-usage { color: #666; font-size: 0.875rem; margin-bottom: 1rem; }
    .font-demo h2 { font-size: 2rem; line-height: 1.2; }
    .font-demo p { font-size: 1rem; line-height: 1.6; }
    .font-demo code { font-size: 0.875rem; background: #f5f5f5; padding: 1rem; border-radius: 4px; display: block; }
  </style>
</head>
<body>
  <h1>🎨 Echoes Brand System</h1>
  <p class="subtitle">Color palettes and typography for the Echoes project</p>
  
  <h2>Colors</h2>
  <p class="subtitle">Hover over colors to see shade and hex values</p>
  ${swatches}
  
  <h2>Typography</h2>
  ${typographyPreview}
</body>
</html>`;

writeFileSync(`${OUT_DIR}/index.html`, html);

console.log('✅ Built all exports to exports/');
