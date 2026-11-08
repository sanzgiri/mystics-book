# Open issues (updated 8 November 2026)

The book is live at https://mystics-book.vercel.app (`launched: true`). All 89 entries and the 6 appendix entries are marked final. Triage and decision logs: `docs/TRIAGE.md`, `TIER*_DECISIONS*.md`, `SCOPE_LOG_*.md`, `CLEANUP_LOG.md`, `CLOSEOUT_LOG.md`. Raw notes from writers and checkers: `docs/OPEN_ISSUES_BATCHES.md` (historical; all items there are closed or resolved by the decisions below).

## Open, for the author

1. **Verdict lines.** One line per chapter, written by the AI and still to be rewritten in the author's voice.
2. **Part introductions.** The 13 introductions are marked review until the author rewrites them.
3. **Epilogue ranking.** The ranking of the five innovations (Aurobindo, J. Krishnamurti, Ambedkar, Dayananda Saraswati, Iqbal) and the near-miss placements are the author's call. The graph figures in the Epilogue were recomputed on 8 November 2026 (343 names, 442 edges) with `python3 scripts/graph-stats.py`; rerun it if the graph changes.

## Closed

- **Scope, voice, unverified claims, small checks, gaps:** closed 7 November (see the logs above). The book is third person throughout and omits legal and misconduct material.
- **Breadth:** nine sidebars added (Mirra Alfassa, Annie Besant, Nivedita, Blavatsky and Olcott, Krishna Prem, Goenka, Abhishiktananda, Paul Brunton, Ram Dass); six lesser entries moved to the appendix; fourteen chapters on important figures expanded.
- **Sources:** scholarly references added to the top 30 chapters and the eight thinnest (`SOURCING_LOG_1` to `_4`). Verified against catalogue and publisher records, not by reading the books. Where little independent scholarship exists (Sadhguru, Nisargadatta), the chapter relies on the sources listed.
- **Prose polish:** AI tics removed across all 89 entries (`POLISH_LOG_A` to `_D`).
- **Closeout items, 8 November:** Dharmapala 1905 sentence dropped; Tlemcen dates aligned; Phule statement corrected; Olcott's school added; disputed birth years removed from the graph; Vallalar Tamil text reduced to the mantra; Inayat Khan and Kanji Swami sources fixed; map page notes that coordinates are approximate. The `lalaji-babuji` page id is kept so links keep working.
- **Licence:** CC BY-SA 4.0 for the text (`LICENSE-TEXT.md`), MIT for the code (`LICENSE`).
- **Media:** no portraits or recordings are used. The Wikimedia sites were unreachable from the build environment, so none could be verified. Leads for later: the 1885 Ramakrishna portrait on Wikimedia Commons and Gandhi's 1931 recording. Add portraits through the `photo` field in a chapter's frontmatter; credits then appear on the Credits page automatically.
