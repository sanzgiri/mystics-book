# Entry templates (read this instead of the model files)

## Chapter skeleton (3,000–4,500 words)

```mdx
---
title: "Short title from the teaching"
titleScript: "मी आहे"          # optional
titleScriptLang: mr           # optional
subtitle: "One plain sentence about the person."
status: draft
art: banyan                   # or arunachala, loft, river, lamp, bird
glance:
  - label: Born
    value: "Birth name, date, place"
  - label: Died
    value: "Date, place"
  - label: Guru
    value: "..."
  - label: Core practice
    value: "..."
  - label: Key texts
    value: "<i>Title</i> (year)"
  - label: Stream
    value: "..."
---

<aside class="note"><strong>The name.</strong> One or two sentences.</aside>

<section class="scene">
<p>A documented moment, told in present tense. If it is a composite, say "Visitors describe..." or "A typical exchange runs like this."</p>
<p>...</p>
</section>

## Life

Plain chronological narrative, concrete detail, dates hedged where sources conflict.

<aside class="note"><strong>Term.</strong> Plain-English gloss of one unfamiliar word.</aside>

## The teaching

The core idea in the teacher's own terms, then the method, then what is distinctive. Bold run-in heads for two or three distinctive features are fine.

## Inherited and new

<div class="verdict">
  <div class="cols">
    <div>
      <span class="label">Inherited</span>
      <ul>
        <li>...</li>
      </ul>
    </div>
    <div>
      <span class="label">New</span>
      <ul>
        <li>...</li>
      </ul>
    </div>
  </div>
  <p class="final">My verdict: one sentence on originality of teaching.</p>
</div>

One short paragraph in the first person expanding the verdict.

## Lineage

Two or three sentences on where the figure sits.

<MiniTree id="figure-id" />

A paragraph on the most important edges, and which are documented or claimed.

## The practice

<ol class="steps">
  <li><div><strong>Step.</strong> One or two sentences.</div></li>
</ol>

## Places

<ul class="places">
  <li><span class="yr">1879</span>Place: what happened there.</li>
</ul>

## In his own voice

One paragraph on what recordings, film or writing survive.

<div class="media">
  <a href="https://..." target="_blank" rel="noopener">
    <span class="kind">Film · 1935</span>
    <span class="t">Title</span>
    <span class="d">One sentence.</span>
  </a>
</div>

## Critiques and questions

**Short head.** Attributed, dated, precise. Two to four items.

## Descendants

One paragraph.

<section class="refs">

## References

<div class="pick"><span class="label">If you read one book</span><br/><i>Title</i>, author (year). Why.</div>

### Primary

1. ...

### Biography and study

2. Author, *Title* (year). [site](https://...).

</section>
```

## Profile skeleton (800–1,200 words)

Same frontmatter. Sections: `## Life`, `## The teaching`, `## Inherited and new` (verdict box, no extra paragraph), `## Lineage` with `<MiniTree id="..." />` and one paragraph, then `<section class="refs">` with `## Further reading` and a numbered list.

## Sidebar skeleton (500–700 words)

Frontmatter (glance optional). `## Life`, `## Why this figure appears here`, `<section class="refs">` with `## Further reading`. No verdict box.

## Part introduction (350–550 words)

`src/content/parts/<slug>.mdx` with frontmatter `status: draft`. First person. Paragraph 1 states the question and the ordinary assumption it challenges. Paragraph 2 introduces the people concretely, one or two sentences each. Paragraph 3 says what they disagree about. Paragraph 4, short, says how to read the part.

## MDX rules

Close every tag. Blank line after an opening block tag and before its closing tag when the block contains Markdown. No `{`, `}` or `<` in prose. Use `<i>` inside HTML blocks and `*italics*` in Markdown.
