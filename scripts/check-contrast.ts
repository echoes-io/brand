import { colors } from '../colors/index';

function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) throw new Error(`Invalid hex: ${hex}`);
  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  };
}

function getLuminance(r: number, g: number, b: number) {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function getContrast(hex1: string, hex2: string) {
  const rgb1 = hexToRgb(hex1);
  const rgb2 = hexToRgb(hex2);
  const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
  const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

const combinations = [
  { name: 'Neutral Light', fg: colors.neutral['900'], bg: colors.neutral['50'] },
  { name: 'Neutral Dark', fg: colors.neutral['50'], bg: colors.neutral['900'] },
  { name: 'Anima Light', fg: colors.anima['900'], bg: colors.anima['50'] },
  { name: 'Anima Dark', fg: colors.anima['50'], bg: colors.anima['900'] },
  { name: 'Eros Light', fg: colors.eros['900'], bg: colors.eros['50'] },
  { name: 'Eros Dark', fg: colors.eros['50'], bg: colors.eros['900'] },
  { name: 'Bloom Light', fg: colors.bloom['900'], bg: colors.bloom['50'] },
  { name: 'Bloom Dark', fg: colors.bloom['50'], bg: colors.bloom['900'] },
];

console.log('🎨 Echoes Color Contrast Report\n');

let allPass = true;

combinations.forEach(({ name, fg, bg }) => {
  const contrast = getContrast(fg, bg);
  const pass = contrast >= 4.5;

  console.log(`${pass ? '✅' : '❌'} ${name.padEnd(15)} ${contrast.toFixed(2)}:1`);

  if (!pass) allPass = false;
});

console.log(allPass ? '\n✨ All pass WCAG AA\n' : '\n⚠️  Some fail WCAG AA\n');
process.exit(allPass ? 0 : 1);
