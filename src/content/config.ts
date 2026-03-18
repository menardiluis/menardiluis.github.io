// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    cover: z.string().optional(),
    category: z.enum(['Design Systems', 'Craft de Design', 'AI no Design']),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    company: z.string(),
    year: z.number(),
    role: z.string(),
    duration: z.string(),
    categories: z.array(z.string()),
    cover: z.string(),
    summary: z.string(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

export const collections = { blog, projects };
