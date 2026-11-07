# Voice pass: third person throughout (author decision, 7 Nov 2026)

Convert the narrator's voice from first person to third person. The narrator never says "I", "my", "me", "we", "our" or "us".

## What changes
- Verdict boxes: "My verdict: ..." becomes "Verdict: ...". Keep the content; if the sentence used "I", reword.
- Narrator sentences like "I find", "I read", "I think", "to my eye", "as I argue", "I would", "we will see", "in this book we" become impersonal or name the book/part/chapter ("the book", "this part", "the chapter", "the verdict is", "it appears", "readers"). Prefer plain declarative sentences; do not introduce passive-voice sludge.
- Address to the reader ("you") may stay where natural (the Prologue uses it), but avoid "we".
- Epilogue closing and part introductions: the same, in the third-person voice of the book ("this book asks", "the tree answers"). Keep their meaning and arguments, only the voice changes. No new facts.
- Part introductions that say "I put X first because..." become "X comes first because...".

## What does NOT change
- Quotations from the figures or from sources, including first-person speech inside quotation marks, blockquotes, dialogue in scene openings, and titles of books ("I Am That", "The Autobiography of a Yogi", "Who Am I?", "I and Thou"). These keep their I/my/me.
- Any use of "I" inside translated verses or reported speech.
- Facts, order, headings (other than "My verdict"), references, links.

## How
1. Grep each file for the pronouns (\b(I|I'm|I've|I'd|I'll|my|My|me|mine|we|We|our|Our|us)\b), decide for each hit whether it is narrator voice or inside a quotation, and change only narrator voice.
2. Keep house style (no em-dashes, no negation-driven constructs, no triads, no stock transitions, no prefab emotional cues). Preserve authority and precision; add no warmth or filler. Do not change meaning, add facts or remove claims.
3. Keep status review. Edit only your files. Do not touch batch JSONs or generated data.
4. Log in docs/VOICE_LOG_<GROUP>.md: file, number of narrator changes, any sentence you were unsure about. Run node scripts/style-check.mjs. Do not run git or the build. Report briefly.
