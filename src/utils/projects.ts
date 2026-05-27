import { getCollection } from "astro:content";

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
