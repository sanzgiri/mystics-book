// House-style checker. Scans prose in src/content for patterns listed in STYLE.md.
// ERROR rules fail the build. WARN rules are printed for review.
// Usage: node scripts/style-check.mjs [--strict]   (--strict turns warnings into errors)
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = 'src/content';
const strict = process.argv.includes('--strict');

const RULES = [
  // [level, id, regex, message]
  ['error', 'em-dash', /—/g, 'Em dash. Use a comma, a period or parentheses.'],
  ['error', 'stock-phrase', /\b(worth noting|it is important to (note|remember)|it's important to|in many ways|a testament to|at the end of the day|needless to say|it goes without saying|delve|tapestry|navigat(e|ing) the complexities)\b/gi, 'Stock phrase.'],
  ['error', 'not-x-but-y', /\bnot (just |only |merely |simply )?(a |an |the )?[\w'-]+( [\w'-]+){0,3}, but\b/gi, '"Not X, but Y" framing. State the positive claim.'],
  ['error', 'isnt-its', /\b(is|was|are|were)n't (about )?[\w' -]{1,40}[.;] (It|This|That|They)('s| is| was| are| were)\b/g, '"It isn\'t X. It\'s Y." framing.'],
  ['warn', 'rather-than', /\brather than\b/gi, '"Rather than" contrast. Keep only if the contrast is the content.'],
  ['warn', 'colon-reveal', /\b(here's the thing|the answer|the truth|the result|the point|the catch|the twist)( is)?:/gi, 'Colon reveal.'],
  ['warn', 'signpost', /^(Here is how I'd put it|Put simply|In short|Simply put|To be clear|Make no mistake)/gim, 'Signpost opener.'],
  ['warn', 'rhetorical-q', /\b(So what|Why does this matter|What does this mean)\?/g, 'Rhetorical question as transition.'],
  ['warn', 'triad-adjectives', /\b(\w+), (\w+),? and (\w+) (alike|all at once)\b/gi, 'Rhythmic triad.'],
  ['warn', 'scare-quotes', /"(real|true|authentic|genuine|pure|so-called)"/gi, 'Scare quotes.'],
];

// Strip frontmatter, HTML/JSX tags, URLs, code and quoted primary-source text inside <q>…</q>.
function prose(src) {
  return src
    .replace(/^---[\s\S]*?\n---\n/, (m) => '\n'.repeat(m.split('\n').length - 1))
    .replace(/<q>[\s\S]*?<\/q>/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\]\([^)]*\)/g, ']')
    .replace(/https?:\/\/\S+/g, '')
    .replace(/`[^`]*`/g, '');
}

function walk(dir) {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : /\.mdx?$/.test(f) ? [p] : [];
  });
}

let errors = 0, warns = 0;
for (const file of walk(ROOT)) {
  const lines = prose(readFileSync(file, 'utf8')).split('\n');
  // Skip the references section: titles and citations are not our prose.
  const refStart = lines.findIndex((l) => /^##\s+(References|Further reading)/.test(l));
  lines.forEach((line, i) => {
    if (refStart >= 0 && i >= refStart) return;
    for (const [level, id, re, msg] of RULES) {
      re.lastIndex = 0;
      let m;
      while ((m = re.exec(line))) {
        const isErr = level === 'error' || strict;
        isErr ? errors++ : warns++;
        console.log(`${isErr ? 'ERROR' : 'warn '} ${file}:${i + 1} [${id}] ${msg}\n        …${line.slice(Math.max(0, m.index - 40), m.index + m[0].length + 40).trim()}…`);
      }
    }
  });
}
console.log(`\nStyle check: ${errors} error(s), ${warns} warning(s).`);
process.exit(errors ? 1 : 0);
