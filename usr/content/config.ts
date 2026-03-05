/**
 * Content Collections Configuration
 * 
 * This file defines the structure and schema for your content collections.
 * Collections provide type-safe content management with automatic validation.
 */

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { date } from 'astro:schema';

// Schema for blog posts
const blogCollection = defineCollection({
  loader: glob({ 
    pattern: '**/*.{md,mdx}', 
    base: './usr/content/blog' 
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number().optional(),
    date: z.preprocess(
      (arg) => {
        if (
          typeof arg === 'string' ||
          typeof arg === 'number' ||
          arg instanceof Date
        ) {
          return new Date(arg);
        }
        return undefined;
      },
      z.date()
    ),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
    img: z.string().optional(),
    draft: z.boolean().optional(),
    inhome: z.boolean().optional(),
    pinned: z.boolean().optional(),
  }),
});

// Schema for didattica (teaching) posts
const didatticaCollection = defineCollection({
  loader: glob({ 
    pattern: '**/*.{md,mdx}', 
    base: './usr/content/didattica' 
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number().optional(),
    date: z.preprocess(
      (arg) => {
        if (
          typeof arg === 'string' ||
          typeof arg === 'number' ||
          arg instanceof Date
        ) {
          return new Date(arg);
        }
        return undefined;
      },
      z.date()
    ),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
    img: z.string().optional(),
    draft: z.boolean().optional(),
    inhome: z.boolean().optional(),
    pinned: z.boolean().optional(),
  }),
});

// Schema for notizie (news) posts
const notizieCollection = defineCollection({
  loader: glob({ 
    pattern: '**/*.{md,mdx}', 
    base: './usr/content/notizie' 
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number().optional(),
    date: z.preprocess(
      (arg) => {
        if (
          typeof arg === 'string' ||
          typeof arg === 'number' ||
          arg instanceof Date
        ) {
          return new Date(arg);
        }
        return undefined;
      },
      z.date().optional()
    ),
    img: z.string().optional(),
    draft: z.boolean().optional(),
    inhome: z.boolean().optional(),
    pinned: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

// Schema for ricerca (research) posts
const ricercaCollection = defineCollection({
  loader: glob({ 
    pattern: '**/*.{md,mdx}', 
    base: './usr/content/ricerca' 
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number().optional(),
    date: z.preprocess(
      (arg) => {
        if (
          typeof arg === 'string' ||
          typeof arg === 'number' ||
          arg instanceof Date
        ) {
          return new Date(arg);
        }
        return undefined;
      },
      z.date().optional()
    ),
    img: z.string().optional(),
    draft: z.boolean().optional(),
    inhome: z.boolean().optional(),
    pinned: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

// Schema for sviluppo (development) posts
const sviluppoCollection = defineCollection({
  loader: glob({ 
    pattern: '**/*.{md,mdx}', 
    base: './usr/content/sviluppo' 
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number().optional(),
    date: z.preprocess(
      (arg) => {
        if (
          typeof arg === 'string' ||
          typeof arg === 'number' ||
          arg instanceof Date
        ) {
          return new Date(arg);
        }
        return undefined;
      },
      z.date().optional()
    ),
    img: z.string().optional(),
    draft: z.boolean().optional(),
    inhome: z.boolean().optional(),
    pinned: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

// Schema for static data files (CSV, JSON, YAML)
// const dataCollection = defineCollection({
//   loader: glob({ 
//     pattern: '**/*.{json,yaml,csv}', 
//     base: './usr/content/data' 
//   }),
//   schema: z.object({
//     // Flexible schema for data files
//     id: z.string().or(z.number()).optional(),
//   }).passthrough(),
// });

// Export all collections
export const collections = {
  blog: blogCollection,
  didattica: didatticaCollection,
  notizie: notizieCollection,
  ricerca: ricercaCollection,
  sviluppo: sviluppoCollection,
  // data: dataCollection,
};
