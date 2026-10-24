# The Banyan

A web book on Indian mystics and philosophers from the 1830s to today: one person per chapter, thirteen parts each asking one question, and a lineage tree that connects them all. *(Working title: change it in `src/data/site.json`.)*

Built with [Astro](https://astro.build) and deployed on Vercel.

## Where things live

| What | Where |
|---|---|
| Book title and subtitle | `src/data/site.json` |
| The 13 parts and their questions | `src/data/parts.json` |
| Every figure, tradition and lineage edge | `src/data/graph.json` |
| Map locations | `src/data/places.json` |
| Glossary | `src/data/glossary.json` |
| Chapters and profiles | `src/content/figures/<figure-id>.mdx` |
| Part introductions | `src/content/parts/<part-slug>.mdx` |
| Prologue, Epilogue | `src/content/essays/` |
| Illustrations | `src/components/art/` |
| Writing style rules | `STYLE.md` |

## Adding a chapter

1. Make sure the figure exists in `src/data/graph.json` (its `id` is the URL and the filename).
2. Create `src/content/figures/<id>.mdx`. Copy `ramana-maharshi.mdx` as the template.
3. Put the lineage diagram anywhere in the text with `<MiniTree id="<id>" />`. It is drawn automatically from `graph.json`.
4. When the chapter's lineage has been checked against sources, set `"verified": true` on its edges in `graph.json`.

Pages for figures without a chapter yet are generated automatically as placeholders, so every name on the tree, timeline and map links somewhere.

## Lineage edges

Each edge in `graph.json` has:

- `type`: `initiated`, `lived-with`, `influenced`, `claimed`, `reacted-against`, `institutional`, `family`, `lineage`, `protected`
- `evidence`: `documented`, `testimony`, `hagiographic`, `devotional`
- `verified`: `true` once checked while writing the chapter
- optional `note`, `year`

## Running locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```
