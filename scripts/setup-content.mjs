import { writeFileSync, mkdirSync } from "fs";

const W = (p, c) => { mkdirSync(p.split("/").slice(0,-1).join("/"), { recursive: true }); writeFileSync(p, c, "utf8"); };

W("src/content/config.ts", `import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
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
    links: z
      .object({
        demo: z.string().url().optional(),
        repo: z.string().url().optional(),
        video: z.string().url().optional(),
      })
      .optional(),
  }),
});

export const collections = { projects };
`);

W("src/utils/projects.ts", `import { getCollection } from "astro:content";

export const CATEGORIES = ["Game Development", "Game Design", "Computer Science"] as const;

export async function getSortedProjects() {
  const projects = await getCollection("projects");
  return projects.sort((a, b) => {
    if (a.data.featured !== b.data.featured) return a.data.featured ? -1 : 1;
    const da = a.data.startDate ?? "";
    const db = b.data.startDate ?? "";
    return db.localeCompare(da);
  });
}

export async function getProjectsByCategory() {
  const sorted = await getSortedProjects();
  return CATEGORIES.map((category) => ({
    category,
    projects: sorted.filter((p) => p.data.category === category),
  })).filter((g) => g.projects.length > 0);
}
`);

console.log("content config ok");
