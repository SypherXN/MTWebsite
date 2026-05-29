import type { CollectionEntry } from "astro:content";
import site from "../data/site.json";
import { absoluteUrl } from "./seo";
export function personJsonLd(siteUrl: URL) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.title,
    description: site.description,
    url: siteUrl.href,
    image: absoluteUrl(site.image, siteUrl),
    email: `mailto:${site.email}`,
    sameAs: [site.github, site.linkedin],
  };
}

export function webSiteJsonLd(siteUrl: URL) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    description: site.description,
    url: siteUrl.href,
    inLanguage: "en-US",
    author: { "@type": "Person", name: site.name },
  };
}

export function creativeWorkJsonLd(
  project: CollectionEntry<"projects">,
  pageUrl: URL,
  siteUrl: URL,
) {
  const { title, summary, category, image, startDate } = project.data;
  const work: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: title,
    description: summary,
    url: pageUrl.href,
    image: absoluteUrl(image, siteUrl),
    author: { "@type": "Person", name: site.name },
    genre: category,
  };
  if (startDate) {
    work.datePublished = startDate;
  }
  return work;
}
