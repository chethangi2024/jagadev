import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Service group pages: one Markdown file each in src/content/services/
const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    order: z.number().default(99),
    icon: z.string().default('file'),
    summary: z.string(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    whoFor: z.array(z.string()).default([]),
    includes: z.array(z.object({ name: z.string(), detail: z.string().optional() })).default([]),
    documents: z.array(z.string()).default([]),
    steps: z.array(z.string()).default([]),
    turnaround: z.string().optional(),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    seoTitle: z.string(),
    seoDescription: z.string(),
  }),
});

// Privacy Policy and Terms of Use
const legal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/legal' }),
  schema: z.object({
    title: z.string(),
    version: z.string(),
    lastUpdated: z.string(),
    seoDescription: z.string(),
  }),
});

export const collections = { services, legal };
