# Site pages, navigation and sharing (7 Nov 2026)

## New pages
- `/about/`: `src/content/essays/about.mdx` (about 980 words of prose), rendered by `[essay].astro` with kicker "About" and no status tag. Covers what the book is, Inherited and new, edge types and the four evidence grades with the verified flag, how sources were drafted (AI under the author's direction) and fact-checked (separate AI pass; unconfirmed claims cut or marked "(unverified)"), what is left out and why, how to read the tree, glossary and map. Includes a "report a correction" link via `<CorrectionLink>`.
- `/start/`: `src/pages/start.astro` + `src/data/paths.json`. Five chapters for a first read (Ramana, Vivekananda, Krishnamacharya, Gandhi, Ambedkar) and 8 paths of 6 to 7 chapters. One-line reasons are taken from the chapters' own subtitles and text, no new facts. The build fails if a path names a figure without a file in `src/content/figures` (siddharameshwar was swapped out after it moved to the appendix; J. Krishnamurti took its place).
- `/credits/`: `src/pages/credits.astro`. Licence names come from `src/data/site.json` → `license` (marked as the author's choice). Image/audio list from `src/data/credits.json` (`items: []`, with `_example` showing the fields); chapter `photo` frontmatter is listed automatically. Data sources, software and font licences.
- `/changelog/`: `src/pages/changelog.astro` + `src/data/changelog.json` (8 entries, Oct 2026 to 7 Nov 2026).

## Navigation and corrections
- Header: Contents, Paths, Tree, Timeline, Map, Glossary, Appendix, Search, About. Sources moved from the header to the footer. The active item falls back to the URL, so `/appendix/` highlights without a prop.
- Footer: licence line, then About this book, Start here, Appendix, Sources, Credits and licence, Changelog, Progress, Report a correction.
- `correctionUrl()` in `src/lib/graph.js`: opens `github.com/sanzgiri/mystics-book/issues/new` with title "Correction: <page>" and a body template that includes the page URL. Used in the footer, About, Sources and Changelog. `src/components/CorrectionLink.astro` for MDX.
- Home page links to Start here. Sources page now lists four evidence grades, matching About.

## Sharing and indexing
- `Base.astro`: canonical URL, og:site_name/title/description/type/url/image (+ size and alt), Twitter card tags, `rel=license`, skip link. Optional `image`, `imageAlt`, `type` props. The `launched` robots logic is unchanged; `robots.txt` now adds a Sitemap line when launched. Sitemap already came from @astrojs/sitemap.
- `public/og.png` regenerated (1200x630) by `scripts/make-og.mjs` (sharp, site colours, Young Serif/Literata/IBM Plex Mono). Re-running needs those fonts installed locally; the script falls back to a generic serif otherwise. The old image was overwritten.

## Phone width and keyboard
- Headless Chromium at 375px: no horizontal overflow on home, start, about, credits, changelog, tree, timeline, map, appendix, a chapter, glossary, sources, status, a part page.
- Tree: Find now reports match count (aria-live), Enter selects the first match; the panel is aria-live and its chapter link is the next Tab stop. Keyboard hint added. Graph 62vh on phones so the panel is reachable.
- Timeline: focus style on SVG links and on the scroll region.
- Map: long place descriptions in the list wrapped (they were `nowrap` and could overflow); list stacks on narrow screens; map 55vh on phones; "All places" heading; region label points to the list.

## Checks
- `scripts/style-check.mjs` now accepts file or directory arguments and checks `.astro` pages and JSON string values; by default it also scans the new pages and their data files. 0 errors, 0 warnings.
- `npm run build`: complete (Pagefind notes 6 redirect stubs without `<html>`, from the appendix move). `check-links.mjs`: 8,724 internal links, 0 broken.

## For the author to decide
- Licence: CC BY-SA 4.0 for text and MIT for code are stated in `src/data/site.json`; change there. No LICENSE file exists in the repo yet; add one (MIT with a copyright holder name, and a note for the text licence) if these are confirmed.
- The About page says draft pages have not had a full review by the author, and that drafting and checking used AI. Adjust if the review process differs.
- The `correction` label in the issue URL only applies if the label exists and the reporter has permission; GitHub ignores it otherwise. Consider an issue template.
- Changelog "First drafts" entry is dated October 2026 without a day.
- Sources was dropped from the header (still in the footer and linked from About and Credits).
