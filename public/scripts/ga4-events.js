(function () {
  function track(eventName, params) {
    if (typeof gtag !== "function") return;
    gtag("event", eventName, params);
  }

  function pagePath() {
    return window.location.pathname;
  }

  function projectSlugFromPath(path) {
    const match = path.match(/\/projects\/([^/]+)\/?$/);
    return match ? match[1] : undefined;
  }

  function projectContext() {
    const slug = projectSlugFromPath(pagePath());
    return slug ? { project_slug: slug } : {};
  }

  function linkType(url) {
    try {
      const host = new URL(url).hostname.replace(/^www\./, "");
      if (host.includes("steampowered.com")) return "steam";
      if (host.includes("meta.com")) return "meta";
      if (host.includes("github.com")) return "github";
      if (host.includes("youtube.com") || host === "youtu.be") return "youtube";
      if (host.includes("linkedin.com")) return "linkedin";
      if (host.includes("capstone.engineering.ucsb.edu")) return "capstone";
      if (host.includes("drive.google.com")) return "google_drive";
      return host;
    } catch {
      return "unknown";
    }
  }

  function linkContext(anchor) {
    if (anchor.closest(".project-details-links")) return "project_links";
    if (anchor.closest(".site-footer")) return "footer";
    if (anchor.closest(".hero-ctas")) return "hero";
    if (anchor.closest(".prose")) return "project_content";
    if (anchor.closest(".nav")) return "nav";
    return "content";
  }

  function isExternal(url) {
    if (!url || url.startsWith("#") || url.startsWith("tel:")) return false;
    if (url.startsWith("mailto:")) return false;
    try {
      return new URL(url, window.location.href).origin !== window.location.origin;
    } catch {
      return false;
    }
  }

  function isPdf(url) {
    try {
      const path = new URL(url, window.location.href).pathname.toLowerCase();
      return path.endsWith(".pdf");
    } catch {
      return /\.pdf(?:$|[?#])/i.test(url);
    }
  }

  document.addEventListener(
    "click",
    (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const tracked = target.closest("[data-ga-event]");
      if (tracked instanceof HTMLElement && tracked.dataset.gaEvent) {
        track(tracked.dataset.gaEvent, {
          ...projectContext(),
          page_path: pagePath(),
          link_text: tracked.textContent?.trim().slice(0, 100) || undefined,
        });
        return;
      }

      const cta = target.closest("[data-ga-cta]");
      if (cta instanceof HTMLElement && cta.dataset.gaCta) {
        track("cta_click", {
          cta_name: cta.dataset.gaCta,
          ...projectContext(),
          page_path: pagePath(),
        });
        return;
      }

      const projectCard = target.closest("a.project-card");
      if (projectCard instanceof HTMLAnchorElement) {
        track("project_card_click", {
          link_url: projectCard.href,
          project_slug: projectSlugFromPath(new URL(projectCard.href).pathname),
          featured: projectCard.classList.contains("project-card--featured") ? "yes" : "no",
          page_path: pagePath(),
        });
        return;
      }

      const anchor = target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;

      const href = anchor.href;
      if (!href || href.startsWith("#")) return;

      const context = {
        ...projectContext(),
        page_path: pagePath(),
        link_context: linkContext(anchor),
        link_text: anchor.textContent?.trim().slice(0, 100) || undefined,
      };

      if (href.startsWith("mailto:")) {
        track("contact_click", {
          ...context,
          contact_type: "email",
        });
        return;
      }

      if (isPdf(href) || anchor.hasAttribute("download")) {
        const fileName = href.split("/").pop()?.split("?")[0] || "unknown";
        if (fileName.toLowerCase().includes("resume") || href.includes("/resume.pdf")) {
          track("resume_download", {
            ...context,
            file_name: fileName,
          });
        } else {
          track("file_download", {
            ...context,
            file_name: fileName,
            link_url: href,
          });
        }
        return;
      }

      if (isExternal(href)) {
        track("outbound_click", {
          ...context,
          link_url: href,
          link_type: linkType(href),
        });
        return;
      }

      if (anchor.closest(".nav") || anchor.classList.contains("logo")) {
        track("nav_click", {
          ...context,
          link_url: href,
        });
      }
    },
    true,
  );

  function setupSearchTracking() {
    const root = document.getElementById("pagefind-search");
    if (!root) return;

    let lastQuery = "";
    let debounceId = 0;

    root.addEventListener("input", (event) => {
      const input = event.target;
      if (!(input instanceof HTMLInputElement)) return;

      window.clearTimeout(debounceId);
      debounceId = window.setTimeout(() => {
        const query = input.value.trim();
        if (query.length < 2 || query === lastQuery) return;
        lastQuery = query;
        track("site_search", {
          ...projectContext(),
          search_term: query,
          page_path: pagePath(),
        });
      }, 700);
    });

    root.addEventListener("click", (event) => {
      const result = event.target instanceof Element ? event.target.closest("a[href]") : null;
      if (!(result instanceof HTMLAnchorElement) || !root.contains(result)) return;

      track("search_result_click", {
        ...projectContext(),
        link_url: result.href,
        link_text: result.textContent?.trim().slice(0, 100) || undefined,
        page_path: pagePath(),
      });
    });
  }

  function setupScrollTracking() {
    const milestones = [25, 50, 75, 90];
    const storageKey = `ga-scroll-${pagePath()}`;
    let reached = new Set();

    try {
      const saved = sessionStorage.getItem(storageKey);
      if (saved) reached = new Set(JSON.parse(saved));
    } catch {
      reached = new Set();
    }

    function onScroll() {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;

      const percent = Math.round((window.scrollY / scrollable) * 100);
      for (const milestone of milestones) {
        if (percent >= milestone && !reached.has(milestone)) {
          reached.add(milestone);
          track("scroll_depth", {
            ...projectContext(),
            page_path: pagePath(),
            percent_scrolled: milestone,
          });
        }
      }

      try {
        sessionStorage.setItem(storageKey, JSON.stringify([...reached]));
      } catch {
        /* ignore */
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function setup404Tracking() {
    const heading = document.querySelector("h1.section-title");
    if (heading?.textContent?.trim() !== "404") return;

    track("error_404", {
      page_path: pagePath(),
      referrer: document.referrer || undefined,
    });
  }

  function init() {
    setupSearchTracking();
    setupScrollTracking();
    setup404Tracking();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
