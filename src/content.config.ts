import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One file per figure. The filename (without extension) must equal the node id in src/data/graph.json.
const figures = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/figures' }),
  schema: z.object({
    title: z.string(),            // chapter title, usually the figure's question
    titleScript: z.string().optional(),
    titleScriptLang: z.string().optional(),
    subtitle: z.string(),
    status: z.enum(['draft', 'review', 'final']).default('draft'),
    art: z.string().optional(),   // name of a component in src/components/art/
    photo: z.object({            // optional portrait; only public-domain or openly licensed images
      src: z.string(),           // direct image URL (e.g. upload.wikimedia.org) or /photos/<file>
      alt: z.string(),
      credit: z.string(),        // photographer or archive, year
      license: z.string(),       // e.g. "Public domain (PD-India)", "CC BY-SA 4.0"
      sourceUrl: z.string(),     // page documenting the license
    }).optional(),
    glance: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
  }),
});

// Prologue, epilogue and other standalone essays.
const essays = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/essays' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    status: z.enum(['outline', 'draft', 'review', 'final']).default('draft'),
  }),
});

// Part introductions. Filename = part slug from src/data/parts.json.
const parts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/parts' }),
  schema: z.object({
    status: z.enum(['outline', 'draft', 'review', 'final']).default('draft'),
  }),
});

// Appendix: short entries for figures with a smaller body of original teaching or a smaller
// historical footprint. Filename = node id in src/data/graph.json (the node carries link "/appendix/#<id>").
// The body holds the prose plus "**Lineage.**" and "**Practice.**" run-in paragraphs; refs are HTML strings.
const appendix = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/appendix' }),
  schema: z.object({
    glance: z.string(),           // one line: dates, place, stream
    status: z.enum(['draft', 'review', 'final']).default('draft'),
    refs: z.array(z.string()).min(3).max(5),
  }),
});

export const collections = { figures, essays, parts, appendix };
