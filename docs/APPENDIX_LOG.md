# Appendix move (author decision, 7 Nov 2026)

Six profiles with a smaller body of original teaching or a smaller historical footprint became short entries on a new page, `/appendix/`: nithyananda, ramdev, acharya-prashant, vethathiri, dada-bhagwan, siddharameshwar.

## Content
- New collection `appendix` in `src/content.config.ts` (frontmatter: `glance` one line, `status`, `refs` 3 to 5 HTML strings). The body holds the prose plus `**Lineage.**` and `**Practice.**` run-in paragraphs, so `style-check.mjs` scans it.
- New files `src/content/appendix/<id>.mdx`, status `draft`. Each one is condensed from the archived chapter with no new facts. Word counts (body, including the Lineage and Practice lines): acharya-prashant 256, dada-bhagwan 266, nithyananda 276, ramdev 267, siddharameshwar 275, vethathiri 276.
- All references are taken from the chapters' own lists: four for each entry, except vethathiri (5) and nithyananda (3).
- Scope rules applied while condensing:
  - nithyananda: left out the location and health-rumour lines and the UN/Newark recognition critique. The Kailasa declaration stays as an institutional fact. Third reference is The News Minute (March 2023) on Kailasa at Geneva. It is cited for Kailasa's self-description, and the author may prefer to drop it, which would leave 2 references.
  - ramdev: left out the Medical claims critique (IMA, Coronil, the 2021 remark). The health promise of pranayama stays as part of the teaching, with no list of diseases.
  - dada-bhagwan: the 1988 succession split is cut down to one Lineage sentence, with no tape claim and no dispute detail.
  - acharya-prashant: left out the PETA award and the follower and participant figures.
  - siddharameshwar, vethathiri: the "Questions raised" note on unevidenced health claims is not carried over.
- The originals were moved, unchanged, to `docs/archive/figures/<id>.mdx` (outside src/content).

## Page
- `src/pages/appendix.astro`, title "Appendix". It has an intro paragraph and a jump list. Entries are sorted by part, then birth year. Each entry is an `<article>` with `<h2 id="<figure id>">`, the glance line, a part link with a status tag, the body, `<MiniTree id>` and an ordered reference list.
- `data-pagefind-body` is on `<main>`. The build script's Pagefind glob in `package.json` now includes `appendix`. A Pagefind check on a test build indexed `/appendix/`, and the h2 ids give sub-result anchors.
- The sitemap includes `/appendix/` automatically through @astrojs/sitemap. The redirect stubs are left out of it.

## Graph
- `docs/batches/z02.json` uses `nodes_update` to set `tier: "node"` and `link: "/appendix/#<id>"` on all six. Edges (18 in total), places (10) and glossary terms are unchanged. Glossary terms carry no figure link.
- `src/lib/graph.js`:
  - `hasPage()` is false for nodes with a `link`, so no /figures/ stub page is built for them.
  - `figureHref(id)` returns the node's `link` when it has one.
  - New helpers: `nodeHref(n)`, `isAppendix(n)` and `appendixNodes`.
- Components that now follow the custom link:
  - MiniTree (uses `nodeHref`).
  - tree.astro: the panel link reads "Open appendix entry", and a double tap navigates to the link.
  - map.astro: the popup link, plus the list through `figureHref`.
  - timeline, status and part pages, through `figureHref`.
- `astro.config.mjs` gains `redirects` from `/figures/<id>` to `/appendix/#<id>` for the six, so URLs published since launch keep working.

## Listings and counts
- Part pages (`src/pages/parts/[slug].astro`) list the six in their own group, "In the appendix". They are left out of Chapters, Profiles and "Also on the tree". The prev/next links on figure pages already skip `node` tier.
- Home page: the hero reads "31 chapters and 47 profiles, with an appendix of 6 short entries". The contents end with an Appendix line after the Epilogue. The footnote reads "80 entries in all, 6 short entries in the appendix".
- Status page: the intro reads "80 chapters, profiles and sidebars, plus 6 short entries". There is a new Appendix table (part, status, words, edges), and appendix words count toward the words-written total.

## Links in src/content
- Grep found no internal links in src/content to `/figures/<id>` for any of the six, and no MiniTree for them outside their own files. No figure, part or essay file was edited.

## For the author / other agents
- A nav link to `/appendix/` is still needed in `src/layouts/Base.astro`. It was left to the nav agent, as instructed.
- The epilogue counts entries as "86" in four places (lines 15, 21, 61 and 77: "35 of the 86", "42 of the 86", "Fifty-one of the 86", "41 of the 86"). These statistics come from the tree and need recomputing for 80 entries, or a decision to count the appendix. The Dada Bhagwan succession sentence on line 77 still holds, because those nodes and edges stay on the tree.
- Part intros still name Vethathiri (technique.mdx) and Dada Bhagwan (conduct.mdx) in their prose. That is fine as prose, but the author may want a phrase pointing to the appendix.

## Checks
- `python3 scripts/merge-batches.py`: 323 nodes, 408 edges.
- `node scripts/style-check.mjs`: 0 errors, 0 warnings.
- `npx astro build`: complete.
- `node scripts/check-links.mjs`: every broken link points to `/start/`, `/credits/` or `/changelog/`, which other agents' nav changes link to before those pages exist. None involves the appendix or the six figures.
