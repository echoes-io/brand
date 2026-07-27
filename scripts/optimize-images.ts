/**
 * Optimize images in logo/ directory.
 *
 * - Copies originals to logo/originals/ (if not already there)
 * - Resizes to max 1200px and compresses as JPEG quality 85
 * - Overwrites files in logo/ with optimized versions
 * - Originals in logo/originals/ are tracked via Git LFS
 *
 * Run: npm run images:optimize
 */

import { copyFileSync, existsSync, mkdirSync, readdirSync, statSync } from 'node:fs';
import { extname, join } from 'node:path';

import sharp from 'sharp';

const LOGO_DIR = './logo';
const ORIGINALS_DIR = join(LOGO_DIR, 'originals');

/** Max dimension (width or height) */
const MAX_SIZE = 1200;
/** JPEG quality */
const QUALITY = 85;

async function main() {
  console.log('🖼️  Optimizing images...\n');

  const files = readdirSync(LOGO_DIR).filter((f) => {
    const ext = extname(f).toLowerCase();
    return ext === '.jpg' || ext === '.jpeg' || ext === '.png';
  });

  if (files.length === 0) {
    console.log('  ⚠ No images found in logo/');
    return;
  }

  // Ensure originals directory exists
  mkdirSync(ORIGINALS_DIR, { recursive: true });

  let totalOriginal = 0;
  let totalOptimized = 0;
  let skippedOriginals = 0;

  for (const file of files) {
    const inputPath = join(LOGO_DIR, file);
    const originalPath = join(ORIGINALS_DIR, file);

    // Backup original (only if not already backed up)
    if (!existsSync(originalPath)) {
      copyFileSync(inputPath, originalPath);
    } else {
      skippedOriginals++;
    }

    const originalSize = statSync(originalPath).size;
    totalOriginal += originalSize;

    // Optimize: resize + compress
    const optimized = await sharp(originalPath)
      .resize(MAX_SIZE, MAX_SIZE, { fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: QUALITY, progressive: true })
      .toBuffer();

    // Write optimized version to logo/
    const { writeFileSync } = await import('node:fs');
    writeFileSync(inputPath.replace(/\.(png|jpeg)$/i, '.jpg'), optimized);

    const optimizedSize = optimized.length;
    totalOptimized += optimizedSize;

    const savedPct = Math.round((1 - optimizedSize / originalSize) * 100);
    console.log(
      `  ✓ ${file}: ${(originalSize / 1024 / 1024).toFixed(1)}MB → ${(optimizedSize / 1024).toFixed(0)}KB (${savedPct}% saved)`,
    );
  }

  const totalSavedPct = Math.round((1 - totalOptimized / totalOriginal) * 100);
  console.log(`\n✅ Done: ${files.length} images optimized`);
  console.log(
    `   ${(totalOriginal / 1024 / 1024).toFixed(1)}MB → ${(totalOptimized / 1024 / 1024).toFixed(1)}MB (${totalSavedPct}% saved)`,
  );
  if (skippedOriginals > 0) {
    console.log(`   ${skippedOriginals} originals already backed up`);
  }
  console.log(`   Originals preserved in: ${ORIGINALS_DIR}/`);
}

main().catch((err) => {
  console.error('❌ Image optimization failed:', err);
  process.exit(1);
});
