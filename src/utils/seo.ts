import { withBase } from "./base";

const DEFAULT_OG_IMAGE = "/images/matthew-tran.png";

/** Build an absolute URL for meta tags (Open Graph, canonical, etc.). */
export function absoluteUrl(path: string, site: URL): string {
  if (/^https?:\/\//i.test(path)) return path;
  return new URL(withBase(path), site).href;
}

export function defaultOgImage(): string {
  return DEFAULT_OG_IMAGE;
}
