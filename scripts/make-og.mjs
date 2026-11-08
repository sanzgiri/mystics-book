// Draws the default social-sharing image (public/og.png, 1200x630) from an SVG.
// Usage: node scripts/make-og.mjs
// Needs the fonts Young Serif, Literata and IBM Plex Mono installed locally (fontconfig);
// without them the renderer falls back to a generic serif. Colours match src/styles/global.css.
import sharp from 'sharp';
import graph from '../src/data/graph.json' with { type: 'json' };
import site from '../src/data/site.json' with { type: 'json' };

const entries = graph.nodes.filter((n) => ['chapter', 'profile', 'sidebar'].includes(n.tier)).length;
const C = { bg: '#f1f1ec', paper: '#fafaf6', ink: '#1d2027', muted: '#5d616b', rule: '#d6d6cf', flame: '#b8670a', soft: '#f3e3c8', hill: '#a46a55' };
const [sub1, sub2] = site.subtitle.includes(', ') ? [site.subtitle.slice(0, site.subtitle.indexOf(', ') + 1), site.subtitle.slice(site.subtitle.indexOf(', ') + 2)] : [site.subtitle, ''];
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

// Banyan: trunk, two limbs, aerial roots that reach the ground, a canopy, one flame.
const tree = `
<g transform="translate(770 120) scale(0.84)">
  <rect x="0" y="0" width="440" height="440" fill="${C.soft}" opacity=".55"/>
  <line x1="20" y1="400" x2="420" y2="400" stroke="${C.rule}" stroke-width="2"/>
  <g fill="none" stroke="${C.ink}" stroke-linecap="round" opacity=".82">
    <path d="M220 400 C217 330 214 270 220 215" stroke-width="13"/>
    <path d="M220 222 C185 192 125 170 45 168" stroke-width="6"/>
    <path d="M220 222 C255 192 315 170 395 168" stroke-width="6"/>
    <path d="M220 218 C210 180 208 140 215 105" stroke-width="5"/>
    <path d="M70 168 C71 250 69 330 72 400" stroke-width="1.4"/>
    <path d="M105 172 C104 250 106 330 103 400" stroke-width="2.2"/>
    <path d="M140 178 C139 260 137 330 140 400" stroke-width="1.6"/>
    <path d="M178 196 C177 270 176 340 179 400" stroke-width="1.2"/>
    <path d="M262 196 C263 270 265 340 262 400" stroke-width="1.2"/>
    <path d="M300 178 C302 260 303 330 300 400" stroke-width="1.6"/>
    <path d="M336 172 C335 250 337 330 334 400" stroke-width="2.2"/>
    <path d="M370 168 C371 250 369 330 372 400" stroke-width="1.4"/>
  </g>
  <g fill="${C.hill}" opacity=".5">
    <ellipse cx="85" cy="150" rx="82" ry="40"/>
    <ellipse cx="355" cy="150" rx="82" ry="40"/>
    <ellipse cx="220" cy="95" rx="110" ry="54"/>
    <ellipse cx="150" cy="128" rx="72" ry="36"/>
    <ellipse cx="290" cy="128" rx="72" ry="36"/>
  </g>
  <circle cx="220" cy="95" r="5" fill="${C.flame}"/>
</g>`;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${C.bg}"/>
  <rect x="0" y="0" width="1200" height="8" fill="${C.flame}"/>
  <text x="80" y="150" font-family="IBM Plex Mono" font-size="22" letter-spacing="4" fill="${C.muted}">A FREE WEB BOOK</text>
  <text x="76" y="290" font-family="Young Serif" font-size="100" fill="${C.ink}">${esc(site.title)}</text>
  <text x="80" y="370" font-family="Literata" font-size="38" fill="${C.flame}">${esc(sub1)}</text>
  <text x="80" y="420" font-family="Literata" font-size="38" fill="${C.flame}">${esc(sub2)}</text>
  <line x1="80" y1="490" x2="600" y2="490" stroke="${C.rule}" stroke-width="2"/>
  <text x="80" y="535" font-family="Literata" font-style="italic" font-size="26" fill="${C.muted}">${entries} lives, their teachers and their practices,</text>
  <text x="80" y="570" font-family="Literata" font-style="italic" font-size="26" fill="${C.muted}">joined by one lineage tree</text>
  ${tree}
</svg>`;

await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile('public/og.png');
console.log(`public/og.png written (${entries} entries).`);
