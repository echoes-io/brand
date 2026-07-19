/**
 * Echoes Typography System
 */

export type FontFamily = {
  name: string;
  fallback: string[];
  weights: number[];
  variable?: string; // CSS variable name for variable fonts
};

export type TypographyScale = {
  heading: FontFamily;
  body: FontFamily;
  mono: FontFamily;
};

export const typography: TypographyScale = {
  heading: {
    name: 'Crimson Pro',
    fallback: ['Georgia', 'Times New Roman', 'serif'],
    weights: [200, 300, 400, 500, 600, 700, 800, 900],
    variable: '--font-heading',
  },
  body: {
    name: 'Inter',
    fallback: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
    weights: [400, 500],
    variable: '--font-body',
  },
  mono: {
    name: 'JetBrains Mono',
    fallback: ['Consolas', 'Monaco', 'Courier New', 'monospace'],
    weights: [400, 500],
    variable: '--font-mono',
  },
};

export const metadata = {
  heading: {
    description: 'Literary variable serif for distinctive, readable headings',
    usage: 'Titles, chapter headings, narrative sections',
  },
  body: {
    description: 'Optimized for long-form reading across devices',
    usage: 'Paragraphs, articles, descriptions',
  },
  mono: {
    description: 'Code-friendly monospace for technical content',
    usage: 'Code blocks, CLI examples, data tables',
  },
};
