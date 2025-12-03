import { glob } from "astro/loaders";
import { z, reference, defineCollection } from "astro:content";

const articles = defineCollection({
    loader: glob({ pattern: ["**/*.md", "**/*.mdx"], base: "./src/content/articles" }),
    schema: ({ image }) => z.object({
        cover: image().optional(),
        title: z.string(),
        snippet: z.string(),
        category: z.string().optional().default(""),
        pubDate: z.coerce.date(),
        originalLink: z.string().url().optional(),
        isDraft: z.boolean().default(false),
        updatedDate: z.coerce.date().optional(),
        relatedArticles: z.array(reference('articles')).optional(),
    }),
});

export const collections = { articles };