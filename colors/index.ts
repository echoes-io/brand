/**
 * Echoes Brand Colors - Single Source of Truth
 */

export type ColorScale = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  950: string;
};

export type Palette = {
  neutral: ColorScale;
  anima: ColorScale;
  eros: ColorScale;
  bloom: ColorScale;
};

export const colors: Palette = {
  neutral: {
    50: '#fafafa',
    100: '#f4f4f5',
    200: '#e4e4e7',
    300: '#d4d4d8',
    400: '#a1a1aa',
    500: '#71717a',
    600: '#52525b',
    700: '#3f3f46',
    800: '#27272a',
    900: '#18181b',
    950: '#09090b',
  },
  anima: {
    50: '#f0fdf6',
    100: '#ddfbe8',
    200: '#bef5d3',
    300: '#8eecb4',
    400: '#56db8e',
    500: '#2fc470',
    600: '#20a558',
    700: '#1c8449',
    800: '#1a693d',
    900: '#175634',
    950: '#0a301b',
  },
  eros: {
    50: '#fef2f3',
    100: '#fde3e6',
    200: '#fbccd2',
    300: '#f7a8b3',
    400: '#f17689',
    500: '#e74c64',
    600: '#d32f4f',
    700: '#b22240',
    800: '#951e3b',
    900: '#7f1d37',
    950: '#460c1a',
  },
  bloom: {
    50: '#fef8f3',
    100: '#fdeee6',
    200: '#fadacc',
    300: '#f6bfa8',
    400: '#f09b74',
    500: '#e87a47',
    600: '#d96129',
    700: '#b64d1f',
    800: '#92401e',
    900: '#75361d',
    950: '#3f1a0d',
  },
};

export const metadata = {
  neutral: {
    name: 'Neutral',
    description: 'GitHub-inspired neutral colors for UI elements',
  },
  anima: {
    name: 'Anima',
    description: 'Sage green with teal undertones - growth, support, tenderness',
  },
  eros: {
    name: 'Eros',
    description: 'Deep burgundy with crimson warmth - passion, intensity, rawness',
  },
  bloom: {
    name: 'Bloom',
    description: 'Warm terracotta peach - blossoming, balance, discovery',
  },
};
