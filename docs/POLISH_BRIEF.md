# Prose polish pass (author decision, 7 Nov 2026)

Goal: improve prose quality and remove AI tics in the chapter body text. The chapter template (section headings, Verdict line, lineage, practice sections, reference lists) is intentional and stays.

## Edit
- Narrative prose only: opening scene, biography, ideas, practice, lineage, contribution paragraphs.
- Remove: formulaic cadence (repeated sentence shapes, every paragraph ending on a tidy aphorism), stock transitions ("moreover", "in essence", "ultimately", "at its core", "it is worth noting", "what is striking"), triads and rule-of-three lists used for rhythm, prefab emotional cues, "not X but Y" and other negation-driven constructs, em-dashes, vague intensifiers, empty summarising sentences that restate the paragraph.
- Vary sentence length and paragraph openings. Prefer concrete nouns, dates, names and verbs over abstraction.
- Keep third person, the author's precision, and a plain tone. Add no warmth, no new adjectives of praise, no new facts, no new claims. Do not remove claims or hedges such as "(unverified)".

## Do not touch
- Frontmatter, headings, Verdict lines (author will rewrite), reference lists and link syntax, quotations, titles, numbers, dates, MDX components.
- Sourcing sections added this week.

## Method
Read the file, rewrite only the sentences that need it with Edit (small edits, not whole-file rewrites). Aim to change roughly 10 to 25 percent of sentences, more where tics cluster. Keep word count within ±8 percent.

## Finish
Run `node scripts/style-check.mjs` (must report 0 errors). Do not run git or the build. Keep `status: review`. Log per file in docs/POLISH_LOG_<GROUP>.md: file, approx sentences changed, anything unsure. Report in five lines.
