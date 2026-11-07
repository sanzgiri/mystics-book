# Scope pass: philosophy and practice only (author decision, 7 Nov 2026)

The author wants the book to focus on each figure's philosophy, practice, lineage and the personal-life details that shaped them. Remove legal and misconduct material throughout, living or historical.

## Remove
- Criminal and civil cases, trials, convictions, acquittals, charges, FIRs, arrests, police matters, bail, appeals, Royal Commission or commission findings, court rulings and lawsuits (including property, trust, succession or copyright disputes fought in court).
- Allegations or accusations of abuse, assault, harassment, fraud, financial wrongdoing, forced conversion, deaths or injuries attributed to followers, cover-ups, and the organisation's responses to those.
- Political and social controversies that are not needed to understand the teaching: nationalist or communal statements, remarks about caste, women, religions or races that were disputed, and campaigns for or against the figure. Keep a political or social position only when it is a core part of the teaching itself (for example Ambedkar's rejection of caste, Periyar's rationalism, Gandhi's non-violence), stated as a position, not as a scandal.
- Legal terms and cases from glance boxes, verdict lines, timelines, "Critiques and questions" sections, references, further reading, image captions and alt text.

## Keep
- Philosophy, doctrine, practice, method, texts, institutions as teaching organisations, lineage and the relations between teachers and students.
- Personal life: birth, family, early formation, turning points, teachers and initiation, key relationships, daily practice, routines, retreats, travels, and illness and death where they bear on the teaching or succession.
- Intellectual critiques of the ideas themselves (for example Advaitin objections to Krishnamurti, scholarly assessments of originality, rival schools' disagreements). Remove critiques that are about conduct or legality.
- Every other fact and every verdict line (unless the verdict relies on a removed item; then reword the verdict minimally).

## How
1. For each file in your list read the whole text. Remove or reword legal, allegation and controversy material. Where a section becomes empty, delete the heading. If a "Critiques and questions" section keeps only intellectual critiques, keep it with those. Do not replace removed material with new claims; do not add new facts.
2. Fix everything the removal touches: the opening summary, the glance box (drop rows such as "Legal" or "Controversies"), timeline entries, verdict, "Why this figure appears here", the Lineage section (keep succession and organisation facts that are not legal), references and further reading cited only for removed material (renumber footnote markers so numbering stays contiguous), image captions, and any cross-references to other chapters that mention removed material. Check the text still reads smoothly and keeps the author's voice and house style (no em-dashes, no negation constructs, no triads, no stock transitions).
3. Also remove every '[to locate]' media card or placeholder in your files (author decision: drop them now).
4. Word counts may fall below the target ranges; that is acceptable. Do not pad.
5. Individual decisions for your files: Premanand Maharaj: cut the kidney illness sentences (health of a living person). Dharmapala: list Hikkaduwe Sumangala under associates (president of the Maha Bodhi Society), not Teachers.
6. Keep status draft. Edit only .mdx files in your list. Do not touch graph data or batch JSONs.
7. Log in docs/SCOPE_LOG_<GROUP>.md one line per file: what was removed (category and gist, not repeating allegations), anything removed from verdict or lineage, and any place where removal left a gap the author should see. Run node scripts/style-check.mjs. Do not run git or the build.
