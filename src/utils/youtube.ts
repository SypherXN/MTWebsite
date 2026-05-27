/** Accepts watch, embed, shorts, or youtu.be URLs; returns embed URL or null. */
export function toYouTubeEmbedUrl(input: string): string | null {
  const raw = input.trim();
  if (!raw) return null;
  try {
    const u = new URL(raw);
    const host = u.hostname.replace(/^www\./, "");
    if (host === "youtu.be") {
      const id = u.pathname.split("/").filter(Boolean)[0];
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
    if (host === "youtube.com" || host === "m.youtube.com" || host === "music.youtube.com") {
      const v = u.searchParams.get("v");
      if (v) return `https://www.youtube.com/embed/${v}`;
      const embedMatch = u.pathname.match(/^\/embed\/([^/?]+)/);
      if (embedMatch) return `https://www.youtube.com/embed/${embedMatch[1]}`;
      const liveMatch = u.pathname.match(/^\/live\/([^/?]+)/);
      if (liveMatch) return `https://www.youtube.com/embed/${liveMatch[1]}`;
      const shortsMatch = u.pathname.match(/^\/shorts\/([^/?]+)/);
      if (shortsMatch) return `https://www.youtube.com/embed/${shortsMatch[1]}`;
    }
  } catch {
    return null;
  }
  return null;
}
