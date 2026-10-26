// Checks that every internal link and asset in the built site (dist/) resolves.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';
function walk(dir) {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : f.endsWith('.html') ? [p] : [];
  });
}
const exists = (path) => {
  const clean = decodeURIComponent(path.split('#')[0].split('?')[0]);
  if (!clean || clean === '/') return existsSync(join(DIST, 'index.html'));
  const p = join(DIST, clean);
  return existsSync(p) || existsSync(join(p, 'index.html')) || existsSync(p + '.html');
};

let bad = 0, total = 0;
for (const file of walk(DIST)) {
  const html = readFileSync(file, 'utf8');
  for (const m of html.matchAll(/\b(?:href|src)="(\/[^"]*)"/g)) {
    total++;
    if (!exists(m[1])) { bad++; console.log(`BROKEN ${file.replace(DIST, '')} → ${m[1]}`); }
  }
}
console.log(`Link check: ${total} internal links, ${bad} broken.`);
process.exit(bad ? 1 : 0);
