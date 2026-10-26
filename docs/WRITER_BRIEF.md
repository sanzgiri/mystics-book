# Writer's brief

You are researching and writing entries for **The Banyan**, a web book on Indian mystics and philosophers from the 1830s to today. The site is an Astro project in `/home/claude/book`. Read this whole brief, then read these files before you write anything:

- `STYLE.md`: the house style. Follow it strictly.
- `src/content/figures/ramana-maharshi.mdx`, `src/content/figures/nisargadatta.mdx` and `src/content/figures/papaji.mdx`: model **chapters**.
- `src/content/figures/siddharameshwar.mdx` and `src/content/figures/atmananda-krishna-menon.mdx`: model **profiles**.
- `src/content/parts/direct-path.mdx`: a model **part introduction**.
- `src/data/parts.json`: the 13 parts and their questions.
- `src/data/graph.json`: every figure and lineage edge. Find your figures' nodes and every edge that touches them.

## What the book is

Thirteen parts, each built around one question. Each person gets an entry with their life, what they taught, what they inherited and what they added, and where they sit on a lineage tree. The book is for a general reader, Indian or Western, who is curious and intelligent and has not read the scholarship. The tone is a well-researched long-form magazine piece: concrete, plain, calm, specific.

**The focus is philosophy and spiritual teaching.** Social service, institutions and politics are covered only where they shaped or reveal the teaching.

## Accuracy and fairness (most important)

1. **Verify every checkable claim** (dates, places, names, family, titles, publication years, who initiated or met whom, quotations, numbers) with WebSearch and WebFetch before you write it. Prefer primary texts, the organisation's own site for its own history, scholarly works, and reputable newspapers. Wikipedia is a starting point and should be cross-checked where it matters.
2. **When sources conflict, say so** and give the range ("1915, 1918 or 1920 in different sources"). Do not pick one silently.
3. **Quotations:** only quote words you have actually seen in a source, verbatim, and keep them short (under about 40 words). Name the source in References. Paraphrase otherwise.
4. **Hagiography:** report miracles, visions, immortal masters, reincarnation claims and the like as claims, attributed: "devotees say", "by his own account", "according to the movement's biography". Do not endorse or ridicule.
5. **Controversies:** describe them factually, briefly, with dates and sources, in the "Critiques and questions" section. Use precise legal language: *accused*, *charged*, *convicted*, *acquitted*, *case pending*, with the court and year where known. Never imply guilt beyond what courts or well-documented reporting establish. Give the person's or organisation's response where one exists.
6. **Living people:** include only well-documented, publicly notable facts. Leave out private-life details unless they are widely reported in reliable sources and bear on the teaching or a documented controversy.
7. **Even-handedness:** use the same tone and the same standard of evidence for every tradition, caste, region and religion. Present a teaching in its own terms first, then attributed criticism. Political associations (parties, governments) are stated as facts without judgement.
8. **Follower numbers and institutional claims** are attributed: "the organisation says it has...".
9. The only place the book gives its own judgement is the **verdict** line in "Inherited and new", and the verdict judges *originality of teaching*, never morality.
10. If you cannot verify something important, leave it out or hedge it, and record it as an open issue (see below).

## Entry types

| Type | Words | Sections |
|---|---|---|
| **chapter** | 3,000–4,500 | frontmatter with `glance`; one `note` aside; opening `scene`; Life; The teaching; Inherited and new (verdict box) plus one short first-person paragraph; Lineage with `<MiniTree id="..."/>`; The practice (if they taught one); Places; In his/her own voice (media cards); Critiques and questions; Descendants; References with an "If you read one book" pick |
| **profile** | 800–1,200 | frontmatter with `glance`; Life; The teaching; Inherited and new (verdict box); Lineage with `<MiniTree id="..."/>`; Further reading |
| **sidebar** | 500–700 | frontmatter (glance optional); Life; Why this figure appears here; Further reading. No verdict box. |
| **part introduction** | 350–550 | `src/content/parts/<slug>.mdx`, frontmatter `status: draft`. First person, like the Part 3 model: name the question, introduce the people, say what they disagree about. |

The opening scene must be documented. If you assemble a typical scene from several accounts, say so ("Visitors describe...", "A typical exchange..."). Never invent dialogue or detail.

### Frontmatter (figures)

```yaml
---
title: "Short title, usually a phrase from the teaching"
titleScript: "original-script phrase"        # optional; Devanagari, Tamil, Bengali, Gurmukhi, Urdu etc.
titleScriptLang: hi                          # BCP-47: hi, sa, bn, ta, ml, mr, pa, ur, gu, te, kn
subtitle: "One plain sentence about the person."
status: draft
art: banyan                                  # optional: arunachala, loft, river, lamp, bird, or a new art component you create
glance:
  - label: Born
    value: "Name at birth, date, place"
  - label: Died
    value: "..."
  # Guru / Core practice / Key texts / Language / Stream as fits
---
```

Use only these HTML structures, copied from the model files: `<aside class="note">`, `<section class="scene">`, `<div class="verdict">` (with `cols`, two `label`s "Inherited" and "New", and `<p class="final">My verdict: ...</p>`), `<ol class="steps">`, `<ul class="places">` with `<span class="yr">`, `<div class="media">` cards, `<section class="refs">`, `<span class="script" lang="..">`. Put a blank line after opening and before closing block tags as in the models. MDX is strict: close every tag, escape `{` and `}` in prose, and avoid `<` in prose.

### Media

Add media cards only for URLs you have actually seen in search results or fetched: official archives, the organisation's own channel, reputable broadcasters, archive.org. Prefer recordings of the person's own voice or film of them. If none can be found, say so plainly in "In his own voice" and mark it `<em>[to locate]</em>`.

### Photos

Optional. Add a `photo:` block only if you loaded a page that states the image is public domain or openly licensed and gives a direct image URL. Otherwise leave photos out. Do not spend long on this.

## Graph, places and glossary: write a batch file, do not edit the shared data

Do **not** edit `src/data/graph.json`, `places.json` or `glossary.json`, and do not edit other entries. Instead write your data to `docs/batches/<batch-id>.json`:

```json
{
  "batch": "<batch-id>",
  "nodes_add": [ {"id": "kebab-id", "name": "...", "born": 1850, "died": 1900, "part": 2, "tier": "node", "kind": "person", "note": "..."} ],
  "nodes_update": [ {"id": "existing-id", "born": 1836, "died": 1886, "name": "...", "note": "..."} ],
  "edges_remove": [ {"from": "a", "to": "b"} ],
  "edges_upsert": [ {"from": "teacher-or-influence", "to": "person-shaped", "type": "initiated", "evidence": "documented", "verified": true, "year": 1881, "note": "..."} ],
  "places": [ {"name": "...", "lat": 0.0, "lon": 0.0, "figure": "node-id", "what": "...", "verified": true} ],
  "glossary": [ {"term": "...", "script": "...", "lang": "sa", "def": "Plain-English definition."} ],
  "art": [ {"name": "camelCaseName", "file": "src/components/art/PascalName.astro"} ],
  "issues": [ "Short description of anything unresolved, uncertain or needing the author's decision, with the file and the reason." ]
}
```

- **Edges** run from the teacher or influence to the person shaped. Types: `initiated`, `lived-with`, `influenced`, `claimed`, `reacted-against`, `institutional`, `family`, `lineage`, `protected`. Evidence: `documented`, `testimony`, `hagiographic`, `devotional`. Upsert **every** edge touching your figures, with `verified: true` once checked; remove any existing edge that is wrong. New tree-only people (gurus, key disciples, successors) go in `nodes_add` with `tier: "node"` and the right `part`. Root traditions use `tier: "root"`, `part: 0`. Use existing ids where they exist.
- Node `born`/`died` must be numbers; leave them out if unknown.
- Places need real coordinates you are confident of, to two or three decimals.
- Add glossary terms only when they are new (check `glossary.json`).

## Art (optional)

You may create **one** new illustration for your part as `src/components/art/<PascalName>.astro`: an inline `<svg viewBox="0 0 480 300" role="img" aria-label="...">` using only the CSS variables `var(--flame)`, `var(--flame-soft)`, `var(--hill)`, `var(--hill-2)`, `var(--ink)`, `var(--paper)`, `var(--bg)`, `var(--indigo)`, `var(--muted)`, `var(--rule)`, simple shapes only, in the manner of `Arunachala.astro` and `Loft.astro`. It must not depict any real person's likeness. List it under `"art"` in the batch file and set `art:` in the frontmatter to its camelCase name.

## Before you finish

1. Run `node scripts/style-check.mjs` and fix every ERROR in your files. Treat warnings in your files seriously.
2. Re-read each entry once against STYLE.md. Remove contrast-by-negation, aphoristic fragments, colon reveals, em dashes, stock phrases and punchline endings.
3. Do not run `git`, `npm run build` or anything that changes files outside your entries, your part introduction, your batch file and your one art file.
4. Reply with a short summary: files written, approximate word counts, and the number of open issues.
