import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const reviews = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/reviews' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    rating: z.number().min(1).max(5),
    pros: z.array(z.string()),
    cons: z.array(z.string()),
    category: z.string(),
    image: z.string().optional(),
    price: z.string().optional(),
    affiliateUrl: z.string().optional(),
    author: z.string().default('Admin'),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { reviews };
