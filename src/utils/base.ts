/** Prefix a site-root path with the Astro base URL (e.g. /MTWebsite/). */
export function withBase(path: string): string {
  if (!path || /^https?:\/\//i.test(path) || path.startsWith("mailto:")) {
    return path;
  }
  const base = import.meta.env.BASE_URL;
  const normalized = path.startsWith("/") ? path.slice(1) : path;
  return `${base}${normalized}`;
}

/** Pathname with the configured base removed (for active nav checks). */
export function stripBase(pathname: string): string {
  const base = import.meta.env.BASE_URL;
  if (base === "/") return pathname;
  if (!pathname.startsWith(base)) return pathname;
  const rest = pathname.slice(base.length);
  return rest.startsWith("/") ? rest : `/${rest}`;
}
