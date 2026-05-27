/** Rewrite root-relative href/src/style urls in markdown HTML for GitHub Pages base paths. */
export function rehypeBaseUrls(options = {}) {
  const raw = options.base ?? "/";
  const prefix = raw === "/" ? "" : raw.replace(/\/$/, "");

  const toAbsolute = (path) => `${prefix}${path}`;

  return (tree) => {
    walk(tree, (node) => {
      if (node.type !== "element") return;
      const props = node.properties ?? {};

      for (const key of ["href", "src"]) {
        const value = props[key];
        if (
          typeof value === "string" &&
          value.startsWith("/") &&
          !value.startsWith("//")
        ) {
          props[key] = toAbsolute(value);
        }
      }

      if (typeof props.style === "string") {
        props.style = props.style.replace(
          /url\(\s*(['"]?)\/([^'")]+)\1\s*\)/g,
          (_, quote, path) => `url(${quote}${prefix}/${path}${quote})`,
        );
      }
    });
  };
}

function walk(node, visit) {
  visit(node);
  if (Array.isArray(node.children)) {
    for (const child of node.children) walk(child, visit);
  }
}
