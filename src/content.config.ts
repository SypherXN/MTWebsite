import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    category: z.enum(["Game Development", "Game Design", "Computer Science"]),
    featured: z.boolean().default(false),
    tools: z.array(z.string()).default([]),
    role: z.string().optional(),
    dates: z.string().optional(),
    startDate: z.string().optional(),
    image: z.string(),
    summary: z.string(),
    /** Longer copy shown on the project page under Overview. Falls back to summary if omitted. */
    overview: z.string().optional(),
    /** Shown on the detail page; card tiles always use `image`. */
    genre: z.string().optional(),
    platform: z.string().optional(),
    /** When set, replaces the detail-page hero image with this trailer (watch or youtu.be URL). */
    youtube: z.string().url().optional(),
    links: z
      .object({
        demo: z.string().url().optional(),
        /** Override demo link text (e.g. "Play here", "Steam page"). */
        demoLabel: z.string().optional(),
        repo: z.string().url().optional(),
        store: z.string().url().optional(),
      })
      .optional(),
  }),
});

export const collections = { projects };
