# Tier 3 and 4 reconcile pass

Goal: no unverified or single-source fact is left standing silently. Read docs/TRIAGE.md (policy), STYLE.md, docs/CHECKER_BRIEF.md, and docs/TIER1_DECISIONS.md / TIER2_DECISIONS_*.md (decisions already taken; do not redo them).

For each file in your list:
1. Read the current text and every issue for that file (grep docs/OPEN_ISSUES_BATCHES.md for "<name>.mdx"; also lines tagged with the file's unit for factcheck-unresolved items that name it).
2. For each issue decide:
   - Already resolved in the current text, or covered by a decision log: close, no action.
   - Matters to the chapter and is single-source (Wikipedia only, an unread citation, a devotional site, a search-result headline): do ONE quick verification (WebSearch or WebFetch, at most 2 calls per issue, and skip when the text already attributes it). If verified, leave it. If not, add attribution or a range in the text ("according to X", "c. 1910", "the date is disputed") or say plainly that it could not be confirmed.
   - Does not matter to the chapter and cannot be verified: remove the claim.
   - Spelling, diacritics, coordinates, optional extras, "to locate" media: do not edit; note under 'left for author' or 'minor' in the log.
3. Author-decision items (voice, verdict lines, structure, photos, titles) are never edited.
Keep house style (no em-dashes, no negation constructs, no triads, no stock transitions), status stays draft (never 'checked'). Edit only .mdx files, not batch JSONs. Living-person and legal statements: precise legal language, cut if not well documented.
Log every decision in one line each in docs/TIER34_DECISIONS_<GROUP>.md (file, issue gist, outcome: closed / verified / attributed / cut / minor / left for author). Run node scripts/style-check.mjs at the end. Do not run git or the build. Report briefly: counts by outcome and anything needing the author's decision.
