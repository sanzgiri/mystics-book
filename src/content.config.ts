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

export const collections = { figures, essays, parts };
