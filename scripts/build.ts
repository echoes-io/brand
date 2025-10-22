import { mkdirSync, writeFileSync } from 'node:fs';

import { colors, metadata } from '../colors/index.js';

const OUT_DIR = './colors/exports';

mkdirSync(OUT_DIR, { recursive: true });

// 1. JSON
writeFileSync(`${OUT_DIR}/palette.json`, JSON.stringify(colors, null, 2));

// 2. CSS Variables
const cssVars = Object.entries(colors)
  .flatMap(([palette, shades]) =>
    Object.entries(shades).map(([shade, hex]) => `  --echoes-${palette}-${shade}: ${hex};`),
  )
  .join('\n');

writeFileSync(`${OUT_DIR}/variables.css`, `:root {\n${cssVars}\n}\n`);

// 3. Tailwind Config
writeFileSync(
  `${OUT_DIR}/tailwind.config.cjs`,
  `module.exports = {\n  theme: {\n    extend: {\n      colors: ${JSON.stringify(colors, null, 8)},\n    },\n  },\n};\n`,
);

// 4. Figma Tokens
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
};

writeFileSync(`${OUT_DIR}/figma-tokens.json`, JSON.stringify(figmaTokens, null, 2));

// 5. Preview HTML
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

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Echoes Color Palettes</title>
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
  </style>
</head>
<body>
  <h1>🎨 Echoes Color Palettes</h1>
  <p class="subtitle">Hover over colors to see shade and hex values</p>
  ${swatches}
</body>
</html>`;

writeFileSync(`${OUT_DIR}/index.html`, html);

console.log('✅ Built all color exports to colors/exports/');
