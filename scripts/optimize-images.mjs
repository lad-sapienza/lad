#!/usr/bin/env node
/**
 * Optimize content images: JPG/PNG -> WebP (max 2000px on the long side),
 * delete the originals and rewrite every reference in the .md/.mdx files.
 *
 *   npm run images              convert and rewrite
 *   npm run images -- --dry-run only report what would happen
 *
 * Scope is src/content only: images in public/ are referenced from code
 * (components, layouts, config) and are left untouched.
 * Requires ImageMagick (`magick`) with WebP support.
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..', 'src', 'content');
const MAX_SIZE = 2000;
const QUALITY = 82;
const DRY_RUN = process.argv.includes('--dry-run');

const IMAGE_RE = /\.(jpe?g|png)$/i;
// A reference token inside a markdown/frontmatter line (no whitespace, quotes or brackets)
const REF_RE = /[^\s"'()<>[\]=]+\.(?:jpe?g|png)(?![\w.])/gi;

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : [p];
  });
}

const kb = (bytes) => (bytes / 1024).toFixed(0);

function convert(src, dest) {
  const isPng = /\.png$/i.test(src);
  const run = (extra) =>
    execFileSync(
      'magick',
      [src, '-auto-orient', '-resize', `${MAX_SIZE}x${MAX_SIZE}>`, '-strip', ...extra, dest],
      { stdio: 'pipe' },
    );

  if (!isPng) {
    run(['-quality', String(QUALITY)]);
    return;
  }
  // PNGs are mostly screenshots and graphics: lossless first, lossy if that is still heavy
  run(['-define', 'webp:lossless=true', '-define', 'webp:method=6', '-quality', '100']);
  const original = fs.statSync(src).size;
  if (fs.statSync(dest).size > original * 0.5 && original > 500 * 1024) {
    run(['-define', 'webp:alpha-quality=100', '-quality', '85']);
  }
}

const all = walk(ROOT);
const textFiles = all.filter((f) => /\.mdx?$/.test(f));
let images = all.filter((f) => IMAGE_RE.test(f));

// Same name, different extension in one folder (e.g. bdus.jpg + bdus.png): they would both
// become bdus.webp. Keep only the one a sibling .md/.mdx (or its locale twin) points to.
const dropped = [];
const byTarget = new Map();
for (const f of images) byTarget.set(f.replace(IMAGE_RE, ''), [...(byTarget.get(f.replace(IMAGE_RE, '')) || []), f]);
for (const group of [...byTarget.values()].filter((g) => g.length > 1)) {
  const dir = path.dirname(group[0]);
  const siblings = [dir, dir.replace(/([\\/])it([\\/])/, '$1en$2')].flatMap((d) =>
    textFiles.filter((t) => path.dirname(t) === d),
  );
  const text = siblings.map((t) => fs.readFileSync(t, 'utf8')).join('\n');
  const used = group.filter((g) => text.includes(path.basename(g)));
  if (used.length !== 1) continue; // ambiguous: reported as skipped below
  for (const unused of group.filter((g) => g !== used[0])) {
    dropped.push(path.relative(ROOT, unused));
    if (!DRY_RUN) fs.rmSync(unused);
  }
  images = images.filter((i) => !group.includes(i) || i === used[0]);
}
const converted = new Map(); // old absolute path -> new absolute path
let before = 0;
let after = 0;
const skipped = [];

for (const src of images) {
  const dest = src.replace(IMAGE_RE, '.webp');
  const rel = path.relative(ROOT, src);

  if (fs.existsSync(dest) || images.some((o) => o !== src && o.replace(IMAGE_RE, '.webp') === dest)) {
    skipped.push(`${rel}: target .webp already exists or name clashes with another image`);
    continue;
  }

  const origSize = fs.statSync(src).size;
  const tmp = `${dest}.tmp.webp`;
  try {
    convert(src, tmp);
  } catch (err) {
    fs.rmSync(tmp, { force: true });
    skipped.push(`${rel}: conversion failed (${err.message.split('\n')[0]})`);
    continue;
  }
  const newSize = fs.statSync(tmp).size;
  if (newSize >= origSize) {
    fs.rmSync(tmp);
    skipped.push(`${rel}: WebP is not smaller (${kb(origSize)} -> ${kb(newSize)} KB), kept as is`);
    continue;
  }

  before += origSize;
  after += newSize;
  converted.set(src, dest);
  if (DRY_RUN) {
    fs.rmSync(tmp);
  } else {
    fs.renameSync(tmp, dest);
    fs.rmSync(src);
  }
  console.log(`${rel}: ${kb(origSize)} -> ${kb(newSize)} KB`);
}

// Rewrite references
const lookup = new Map([...converted].map(([o, n]) => [o.toLowerCase(), n]));
let rewritten = 0;
for (const file of textFiles) {
  const dir = path.dirname(file);
  const text = fs.readFileSync(file, 'utf8');
  const next = text.replace(REF_RE, (ref) => {
    if (/^(https?:)?\/\//i.test(ref)) return ref;
    let decoded = ref;
    try {
      decoded = decodeURIComponent(ref);
    } catch {
      /* keep raw */
    }
    // Relative to the file, or absolute from the content root (see contentAssetsIntegration)
    const target = decoded.startsWith('/') ? path.join(ROOT, decoded) : path.resolve(dir, decoded);
    // English pages have no assets of their own: they reuse the files of the /it/ twin
    const twin = target.replace(/([\\/])en([\\/])/, '$1it$2');
    const dest = lookup.get(target.toLowerCase()) ?? lookup.get(twin.toLowerCase());
    return dest ? ref.replace(IMAGE_RE, '.webp') : ref;
  });
  if (next !== text) {
    rewritten++;
    if (!DRY_RUN) fs.writeFileSync(file, next);
  }
}

// Sanity check: every converted file must be referenced or live in a gallery/ folder
const corpus = textFiles
  .map((f) => fs.readFileSync(f, 'utf8'))
  .join('\n');
const unreferenced = [...converted.values()]
  .filter((d) => !path.relative(ROOT, d).split(path.sep).includes('gallery'))
  .filter((d) => !corpus.includes(path.basename(d)) && !DRY_RUN)
  .map((d) => path.relative(ROOT, d));

console.log(`\n${DRY_RUN ? '[dry run] ' : ''}${converted.size} images converted, ${rewritten} text files updated`);
console.log(`Size: ${(before / 1048576).toFixed(1)} MB -> ${(after / 1048576).toFixed(1)} MB`);
if (dropped.length) console.log(`\nUnused duplicates ${DRY_RUN ? 'to delete' : 'deleted'} (${dropped.length}):\n  ${dropped.join('\n  ')}`);
if (skipped.length) console.log(`\nSkipped (${skipped.length}):\n  ${skipped.join('\n  ')}`);
if (unreferenced.length) console.log(`\nConverted but not referenced anywhere (check):\n  ${unreferenced.join('\n  ')}`);
